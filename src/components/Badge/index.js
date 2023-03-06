import React from "react";

import * as Styled from "./index.styles";

const Badge = ({ label, text }) => {
  return (
    <Styled.Badge>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Badge>
  );
};

export default Badge;
