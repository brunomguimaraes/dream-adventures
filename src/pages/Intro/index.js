import React from "react";

import professorPic from "assets/img/npc/professor-oak.png";

import * as Styled from "./index.styles";

const Intro = () => {
  return (
    <Styled.Intro>
      <Styled.Dialog>
        <Styled.Picture src={professorPic} />
        <Styled.DialogText>
          Hello there! Welcome to the world of Pokémon! My name is Oak! People
          call me the Pokémon Prof! This world is inhabited by creatures called
          Pokémon! For some people, Pokémon are pets. Other use them for fights.
          Myself… I study Pokémon as a profession. Your very own Pokémon legend
          is about to unfold! A world of dreams and adventures with Pokémon
          awaits! Let's go!
        </Styled.DialogText>
      </Styled.Dialog>
    </Styled.Intro>
  );
};

export default Intro;
