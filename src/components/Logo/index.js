import React from "react";

import mainLogo from "../../assets/img/2-stars-64.png";

import * as Styled from "./index.styles";

const Logo = () => {
  return (
    <Styled.Logo>
      <Styled.MainLogo src={mainLogo} alt="main-logo" />
    </Styled.Logo>
  );
};

export default Logo;
