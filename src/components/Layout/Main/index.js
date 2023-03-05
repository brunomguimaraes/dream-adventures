import React from 'react';
import { Outlet } from 'react-router';

import Sidebar from 'components/Sidebar';
import Topbar from 'components/Topbar';

import * as Styled from './index.styles';

const Main = () => {
  return (
    <Styled.Main>
      <Topbar />
      <Sidebar />

      <Styled.Content>
        <Outlet />
      </Styled.Content>

    </Styled.Main>
  );
};

export default Main;
