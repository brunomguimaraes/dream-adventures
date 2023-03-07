import React from "react";

import ProfileMenu from "components/ProfileMenu";

import * as Styled from "./index.styles";
import Badge from "components/Badge";
import CurrencyBadge from "components/CurrencyBadge";

const Topbar = () => {
  return (
    <Styled.Topbar>
        <Badge label="Current Location" text="Pallet" />
        <CurrencyBadge />
        <ProfileMenu />
    </Styled.Topbar>
  );
};

export default Topbar;
