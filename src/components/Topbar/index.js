import React from 'react';

import Logo from 'components/Logo';
import ProfileMenu from 'components/ProfileMenu';

import * as Styled from './index.styles';

const Topbar = () => {
  return (
    <Styled.Topbar>
      <Styled.LogoSection>
      <Logo />
      </Styled.LogoSection>

      <ProfileMenu />
    </Styled.Topbar>
  );
};

export default Topbar;
