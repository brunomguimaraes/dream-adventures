import React from "react";

import waterTypeIcon from "assets/svg/types/water.svg";

import * as Styled from "./index.styles";

const ProfileMenu = () => {
  return (
    <Styled.ProfileMenu>
      <Styled.ProfileMenuInfo>
        <Styled.TextMenuInfo secondary>Good Evening</Styled.TextMenuInfo>
        <Styled.TextMenuInfo>Red</Styled.TextMenuInfo>
      </Styled.ProfileMenuInfo>
      <Styled.ProfileAvatar>
        <Styled.Avatar src={waterTypeIcon} />
      </Styled.ProfileAvatar>
    </Styled.ProfileMenu>
  );
};

export default ProfileMenu;
