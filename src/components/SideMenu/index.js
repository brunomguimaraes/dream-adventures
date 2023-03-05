import React from "react";

import pokeballIcon from "assets/svg/pokeball_icon.svg";
import engine from "assets/svg/engine.svg";

import * as Styled from "./index.styles";

const menuItems = [
  { icon: pokeballIcon, title: "Team", key: "pokeball" },
  { icon: engine, title: "Job", key: "engine" },
];

const SideMenu = () => {
  return (
    <Styled.SideMenu>
      {menuItems.map(({ icon, title, key }) => (
        <Styled.MenuItem key={key}>
          <Styled.Logo src={icon} alt={`${key}-icon`} />
          <Styled.TextMenu>{title}</Styled.TextMenu>
        </Styled.MenuItem>
      ))}
    </Styled.SideMenu>
  );
};

export default SideMenu;
