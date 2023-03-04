import React from "react";

import * as Styled from "./index.styles";

const StatusBar = ({ percentage = 100, healthBar = false }) => {
  return (
    <Styled.StatusBar isHealthBar={healthBar}>
      <Styled.Meter percentage={percentage} isHealthBar={healthBar} />
    </Styled.StatusBar>
  );
};

export default StatusBar;
