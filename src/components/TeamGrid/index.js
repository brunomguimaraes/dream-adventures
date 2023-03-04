import React from "react";

import StatusBar from "components/StatusBar";

import charmanderGif from "assets/gif/gen1/charmander.gif";
import fireTypeIcon from "assets/svg/types/fire.svg";
import filledHeartIcon from "assets/svg/icons/fill/heart.svg";
import emptyHeartIcon from "assets/svg/icons/stroke/heart.svg";
import greatballImg from "assets/img/pokeballs/greatball.png";

import { getPercent } from "utils/math";

import * as Styled from "./index.styles";
import { SvgUse } from "utils/graphics";
import useDynamicSVGImport from "hooks/useDynamicSVGImport";

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
      {filledHearts.map(() => (
        <Styled.StatsBarIcon src={filledHeartIcon} />
      ))}
      {emptyHearts.map(() => (
        <Styled.StatsBarIcon src={emptyHeartIcon} />
      ))}
    </Styled.StatsBar>
  );
};

const TeamGrid = () => {
console.log('=>', useDynamicSVGImport('power').SvgIcon)

  return (
    <Styled.TeamGrid>
      {MOCK_TEAM.map(
        ({
          src,
          species,
          nickname,
          typeIcon,
          friendship,
          ball,
          health,
          stats,
        }) => {
          return (
            <Styled.Card>
              <Styled.CardLeft>
                <StatusBar percentage={health} healthBar />
                {Object.keys(stats).map((key) => {
                
                  
                  return (
                  <Styled.StatusBarRow>
                    <Styled.StatusIcon>
                      <SvgUse id={key} />
                    </Styled.StatusIcon>

                    <StatusBar percentage={getPercent(stats[key], 10)} />
                  </Styled.StatusBarRow>
                )})}
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
