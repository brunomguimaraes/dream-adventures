import React, { useState } from "react";

import * as Styled from "./index.styles";

const CurrencyBadge = () => {
  const [showActionValues, setShowActionValues] = useState(() => false);

  return (
    <Styled.CurrencyBadge
      onClick={() => setShowActionValues(!showActionValues)}
    >
      <Styled.Switch toRight={showActionValues}>
        {showActionValues ? "A" : "$"}
      </Styled.Switch>
      <Styled.Values toRight={!showActionValues}>
        {showActionValues ? "10" : "200,00"}
      </Styled.Values>
    </Styled.CurrencyBadge>
  );
};

export default CurrencyBadge;
