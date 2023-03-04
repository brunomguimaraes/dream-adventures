import React from "react";

import StatusBar from "components/StatusBar";

import charmanderGif from "assets/gif/gen1/charmander.gif";
import fireTypeIcon from "assets/svg/types/fire.svg";
import filledHeartIcon from "assets/svg/icons/fill/heart.svg";
import emptyHeartIcon from "assets/svg/icons/stroke/heart.svg";
import greatballImg from "assets/img/pokeballs/greatball.png";

import { getPercent } from "utils/math";

import useDynamicSVGImport from "hooks/useDynamicSVGImport";

import * as Styled from "./index.styles";

const MOCK_TEAM = [
  {
    src: charmanderGif,
    species: "Charmander",
    nickname: "",
    typeIcon: fireTypeIcon,
    friendship: 2,
    ball: greatballImg,
    health: 7,
    stats: {
      power: 2,
      speed: 1,
      wit: 2,
      resilience: 1,
      creativity: 0,
    },
  },
];

const renderFriendshipStats = (stats) => {
  const filledHearts = [...Array(stats)];
  const emptyHearts = [...Array(5 - stats)];

  return (
    <Styled.StatsBar>
      {filledHearts.map((_, i) => (
        <Styled.StatsBarIcon key={`filled-heart-${i}`} src={filledHeartIcon} />
      ))}
      {emptyHearts.map((_, i) => (
        <Styled.StatsBarIcon key={`empty-heart-${i}`} src={emptyHeartIcon} />
      ))}
    </Styled.StatsBar>
  );
};

const TeamGrid = () => {
  const statsIcon = {
    power: useDynamicSVGImport("power").SvgIcon,
    speed: useDynamicSVGImport("speed").SvgIcon,
    wit: useDynamicSVGImport("wit").SvgIcon,
    resilience: useDynamicSVGImport("resilience").SvgIcon,
    creativity: useDynamicSVGImport("creativity").SvgIcon,
  };

  return (
    <Styled.TeamGrid>
      {MOCK_TEAM.map(
        (
          { src, species, nickname, typeIcon, friendship, ball, health, stats },
          i
        ) => {
          return (
            <Styled.Card key={`${species}` - `${i}`}>
              <Styled.CardLeft>
                {/* <StatusBar percentage={health} healthBar /> */}

                {Object.keys(stats).map((key, i) => (
                  <Styled.StatusBarRow key={i}>
                    <Styled.StatusIcon>
                      <Styled.StatusSvgIcon src={statsIcon[key]} />
                    </Styled.StatusIcon>

                    <StatusBar percentage={getPercent(stats[key], 10)} />
                  </Styled.StatusBarRow>
                ))}
              </Styled.CardLeft>

              <Styled.CardCenter>
                <Styled.Gif src={src} alt="charmander" />

                <Styled.CardTitle>
                  <Styled.Ball src={ball} />
                  {nickname || species}
                </Styled.CardTitle>

                <Styled.TypeIcon src={typeIcon} />
              </Styled.CardCenter>

              <Styled.CardRight>
                {renderFriendshipStats(friendship)}
              </Styled.CardRight>
            </Styled.Card>
          );
        }
      )}
    </Styled.TeamGrid>
  );
};

export default TeamGrid;
