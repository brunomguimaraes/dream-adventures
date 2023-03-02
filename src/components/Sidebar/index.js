import React from 'react';

import pokeballIcon from "../../assets/svg/pokeball_icon.svg";

import * as Styled from './index.styles';

const Sidebar = () => {
  return (
    <Styled.Sidebar>
      <Styled.Logo src={pokeballIcon} alt='pokeball-icon'/>
    </Styled.Sidebar>
  );
};

export default Sidebar;
