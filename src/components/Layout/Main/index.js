import React from "react";
import { Outlet } from "react-router";

import Sidebar from "components/Sidebar";
import Topbar from "components/Topbar";
import Logo from "components/Logo";

import * as Styled from "./index.styles";

const Main = () => {
  return (
    <Styled.Main>
      <Styled.LogoSection>
        <Logo />
      </Styled.LogoSection>
      <Topbar />

      <Sidebar />

      <Styled.Content>
        <Outlet />
      </Styled.Content>
    </Styled.Main>
  );
};

export default Main;
