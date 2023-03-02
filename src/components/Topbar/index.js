import React from 'react';

import Logo from '../Logo';
import ProfileMenu from '../ProfileMenu';

import * as Styled from './index.styles';

const Topbar = () => {
  return (
    <Styled.Topbar>
      <Logo />

      <ProfileMenu />
    </Styled.Topbar>
  );
};

export default Topbar;
