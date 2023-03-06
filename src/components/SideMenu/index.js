import React from "react";
import { NavLink } from "react-router-dom";

import pokeballIcon from "assets/svg/pokeball.svg";
import engineIcon from "assets/svg/engine.svg";
import forestIcon from "assets/svg/forest-person.svg";
import dumbellIcon from "assets/svg/dumbell.svg";
import chestIcon from "assets/svg/chest.svg";
import pokecenterIcon from "assets/svg/pokecenter.svg";

import * as Styled from "./index.styles";

const menuItems = [
  { icon: pokecenterIcon, title: "City", key: "city", link: "/city" },
  { icon: forestIcon, title: "Adventure", key: "adventure", link: "/adventure" },
  { icon: dumbellIcon, title: "Training", key: "training", link: "/training" },
  { icon: pokeballIcon, title: "Team", key: "pokeball", link: "/teams" },
  { icon: engineIcon, title: "Job", key: "engine", link: "/jobs" },
  { icon: chestIcon, title: "Inventory", key: "inventory", link: "/inventory" },
];

const SideMenu = () => {
  return (
    <Styled.SideMenu>
      {menuItems.map(({ icon, title, key, link }) => (
        <NavLink to={link}>
          {({ isActive }) => (
            <Styled.MenuItem key={key} active={isActive}>
              <Styled.Logo src={icon} alt={`${key}-icon`} />
              <Styled.TextMenu>{title}</Styled.TextMenu>
            </Styled.MenuItem>
          )}
        </NavLink>
      ))}
    </Styled.SideMenu>
  );
};

export default SideMenu;
