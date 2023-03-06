import React from "react";

import * as Styled from "./index.styles";

const Card = ({ title, description, children }) => {
  return (
    <Styled.Card>
      <Styled.Heading>{title}</Styled.Heading>
      <Styled.Description>{description}</Styled.Description>
      {children}
    </Styled.Card>
  );
};

export default Card;
