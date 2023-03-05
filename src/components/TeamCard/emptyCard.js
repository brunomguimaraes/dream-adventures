import React from "react";

import filledBallIcon from "assets/svg/icons/fill/ball.svg";

import * as Styled from "./index.styles";

const EmptyCard = () => {
  return (
    <Styled.Card>
      <Styled.Empty>
        <Styled.EmptyIcon src={filledBallIcon} />
      </Styled.Empty>
    </Styled.Card>
  );
};

export default EmptyCard;
