import React from "react";

import ProfileMenu from "components/ProfileMenu";

import * as Styled from "./index.styles";
import Badge from "components/Badge";

const Topbar = () => {
  return (
    <Styled.Topbar>
        <Badge label="Current Location" text="Pallet" />
        <ProfileMenu />
    </Styled.Topbar>
  );
};

export default Topbar;
