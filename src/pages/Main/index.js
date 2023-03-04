import React from 'react';
import Sidebar from 'components/Sidebar';
import TeamGrid from 'components/TeamGrid';
import Topbar from 'components/Topbar';

import * as Styled from './index.styles';

const Main = () => {
  return (
    <Styled.Main>
      <Topbar />
      <Sidebar />

      <Styled.Content>
        <TeamGrid />
      </Styled.Content>

    </Styled.Main>
  );
};

export default Main;
