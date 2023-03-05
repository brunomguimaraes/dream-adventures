import React from "react";

import mainLogo from "assets/img/2-stars-64.png";

import * as Styled from "./index.styles";

const Logo = ({margin = '0'}) => {
  return (
    <Styled.Logo margin={margin}>
      <Styled.MainLogo src={mainLogo} alt="main-logo" />
    </Styled.Logo>
  );
};

export default Logo;
