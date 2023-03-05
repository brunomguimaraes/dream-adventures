import React from "react";

import StatusBar from "components/StatusBar";

import filledHeartIcon from "assets/svg/icons/fill/heart.svg";
import emptyHeartIcon from "assets/svg/icons/stroke/heart.svg";

import { getPercent } from "utils/math";

import useDynamicSVGImport from "hooks/useDynamicSVGImport";

import * as Styled from "./index.styles";

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

const TeamCard = ({ monster }) => {
  const {
    src,
    species,
    nickname,
    typeIcon,
    friendship,
    ball,
    health,
    stats,
    nature,
    preferences,
  } = monster;

  const statsIcon = {
    power: useDynamicSVGImport("power").SvgIcon,
    speed: useDynamicSVGImport("speed").SvgIcon,
    wit: useDynamicSVGImport("wit").SvgIcon,
    resilience: useDynamicSVGImport("resilience").SvgIcon,
    creativity: useDynamicSVGImport("creativity").SvgIcon,
  };

  const getLikes = (preferences) => {
    const { flavors, conditions } = preferences;
    const { likes: likedFlavors } = flavors;
    const { likes: likedConditions } = conditions;

    return [...likedFlavors, ...likedConditions].join(", ").toString();
  };

  const getDislikes = (preferences) => {
    const { flavors, conditions } = preferences;
    const { dislikes: dislikedFlavors } = flavors;
    const { dislikes: dislikedConditions } = conditions;

    return [...dislikedFlavors, ...dislikedConditions].join(", ").toString();
  };

  return (
    <Styled.Card key={`${species}` - `${nickname}`}>
      <Styled.CardLeft>
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

        <StatusBar percentage={health} healthBar />

        <Styled.TypeIcon src={typeIcon} />
      </Styled.CardCenter>

      <Styled.CardRight>
        {renderFriendshipStats(friendship)}
        <Styled.StatsRow>
          <Styled.StatsText bold>Nature:</Styled.StatsText>
          <Styled.StatsText>{nature}</Styled.StatsText>
        </Styled.StatsRow>
        <Styled.StatsRow>
          <Styled.StatsText bold>Likes:</Styled.StatsText>
          <Styled.StatsText>{getLikes(preferences)}</Styled.StatsText>
        </Styled.StatsRow>
        <Styled.StatsRow>
          <Styled.StatsText bold>Dislikes:</Styled.StatsText>
          <Styled.StatsText>{getDislikes(preferences)}</Styled.StatsText>
        </Styled.StatsRow>
      </Styled.CardRight>
    </Styled.Card>
  );
};

export default TeamCard;
