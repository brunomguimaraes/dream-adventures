import React from "react";

import avatar from "assets/mocks/mock_avatar.jpeg";
import chevronDown from "assets/svg/icons/stroke/chevron-down.svg";
import bellIcon from "assets/svg/bell.svg";

import * as Styled from "./index.styles";

const ProfileMenu = () => {
  return (
    <Styled.ProfileMenu>
      <Styled.NotificationArea>
        <Styled.Icon src={bellIcon} />
      </Styled.NotificationArea>
      <Styled.ProfileMenuInfo>
        <Styled.TextMenuInfo secondary>Welcome Back</Styled.TextMenuInfo>
        <Styled.TextMenuInfo>Brunão</Styled.TextMenuInfo>
      </Styled.ProfileMenuInfo>
      <Styled.ProfileAvatar>
        <Styled.Avatar src={avatar} />
      </Styled.ProfileAvatar>
      <Styled.MenuArea>
        <Styled.Icon src={chevronDown} small />
      </Styled.MenuArea>
    </Styled.ProfileMenu>
  );
};

export default ProfileMenu;
