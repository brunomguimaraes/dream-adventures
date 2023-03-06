import React from "react";

import charmanderGif from "assets/gif/gen1-png/charmander.png";
import bulbasaurGif from "assets/gif/gen1-png/bulbasaur.png";
// import eeveeGif from "assets/gif/gen1/eevee.gif";
// import meowthGif from "assets/gif/gen1/meowth.gif";
// import squirtleGif from "assets/gif/gen1/squirtle.gif";


import fireTypeIcon from "assets/svg/types/fire.svg";
import grassTypeIcon from "assets/svg/types/grass.svg";
// import waterTypeIcon from "assets/svg/types/water.svg";
// import normalTypeIcon from "assets/svg/types/normal.svg";

import greatballImg from "assets/img/pokeballs/greatball.png";
import pokeballImg from "assets/img/pokeballs/pokeball.png";

import * as Styled from "./index.styles";
import TeamCard from "components/TeamCard";
import EmptyCard from "components/TeamCard/emptyCard";

const MOCK_TEAM = [
  {
    src: charmanderGif,
    species: "Charmander",
    nickname: "",
    typeIcon: fireTypeIcon,
    friendship: 4,
    ball: pokeballImg,
    health: 60,
    stats: {
      power: 2,
      speed: 1,
      wit: 2,
      resilience: 1,
      creativity: 0,
    },
    nature: "Gentle",
    preferences: {
      flavors: {
        likes: ["Spicy", "Sour"],
        dislikes: ["Dry"],
      },
      conditions: {
        likes: ["Cool", "Clever"],
        dislikes: ["Tough", "Cute"],
      },
    },
  },
  {
    src: bulbasaurGif,
    species: "Bulbasaur",
    nickname: "",
    typeIcon: grassTypeIcon,
    friendship: 1,
    ball: greatballImg,
    health: 100,
    stats: {
      power: 9,
      speed: 0,
      wit: 10,
      resilience: 5,
      creativity: 5,
    },
    nature: "Docile",
    preferences: {
      flavors: {
        likes: ["Sweet"],
        dislikes: ["Spicy", "Dry"],
      },
      conditions: {
        likes: ["Tough", "Clever"],
        dislikes: ["Cute"],
      },
    },
  },
  // {
  //   src: eeveeGif,
  //   species: "Eevee",
  //   nickname: "",
  //   typeIcon: normalTypeIcon,
  //   friendship: 0,
  //   ball: greatballImg,
  //   health: 100,
  //   stats: {
  //     power: 4,
  //     speed: 7,
  //     wit: 6,
  //     resilience: 10,
  //     creativity: 3,
  //   },
  //   nature: "Calm",
  //   preferences: {
  //     flavors: {
  //       likes: ["Spicy", "Sour"],
  //       dislikes: ["Dry"],
  //     },
  //     conditions: {
  //       likes: ["Cool", "Clever"],
  //       dislikes: ["Tough", "Cute"],
  //     },
  //   },
  // },
  // {
  //   src: meowthGif,
  //   species: "Meowth",
  //   nickname: "",
  //   typeIcon: normalTypeIcon,
  //   friendship: 5,
  //   ball: pokeballImg,
  //   health: 8,
  //   stats: {
  //     power: 2,
  //     speed: 5,
  //     wit: 7,
  //     resilience: 1,
  //     creativity: 5,
  //   },
  //   nature: "Hasty",
  //   preferences: {
  //     flavors: {
  //       likes: ["Spicy", "Sour"],
  //       dislikes: ["Dry"],
  //     },
  //     conditions: {
  //       likes: ["Cool", "Clever"],
  //       dislikes: ["Tough", "Cute"],
  //     },
  //   },
  // },
  // {
  //   src: squirtleGif,
  //   species: "Squirtle",
  //   nickname: "",
  //   typeIcon: waterTypeIcon,
  //   friendship: 4,
  //   ball: pokeballImg,
  //   health: 26,
  //   stats: {
  //     power: 9,
  //     speed: 7,
  //     wit: 2,
  //     resilience: 1,
  //     creativity: 3,
  //   },
  //   nature: "Adamant",
  //   preferences: {
  //     flavors: {
  //       likes: ["Spicy", "Sour"],
  //       dislikes: ["Dry"],
  //     },
  //     conditions: {
  //       likes: ["Cool", "Clever"],
  //       dislikes: ["Tough", "Cute"],
  //     },
  //   },
  // },
];

const Team = ({team = MOCK_TEAM}) => {
  const emptyCards = [...Array(6 - team.length)];


  return (
    <Styled.Team>
      {team.map((monster) => (
        <TeamCard monster={monster} />
      ))}
      {emptyCards.map(() => (
        <EmptyCard />
      ))}
    </Styled.Team>
  );
};

export default Team;
