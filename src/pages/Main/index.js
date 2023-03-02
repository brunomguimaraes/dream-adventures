import React from 'react';
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

import * as Styled from './index.styles';

const Main = () => {
  return (
    <Styled.Main>
      <Topbar />
      <Sidebar />
    </Styled.Main>
  );
};

export default Main;
