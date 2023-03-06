import Card from "components/Card";
import React from "react";

import * as Styled from "./index.styles";

const Adventure = () => {
  const renderAdventureOptions = (options) => (
    <Styled.AdventureOptions>
      {options.map(({ name, cost }) => (
        <Styled.AdventureOptionRow>
          <Styled.AdventureOptionText>{name}</Styled.AdventureOptionText>
          <Styled.AdventureOptionText cost>
            {cost} Action(s)
          </Styled.AdventureOptionText>
        </Styled.AdventureOptionRow>
      ))}
    </Styled.AdventureOptions>
  );

  return (
    <Styled.Adventure>
      <Card title="Travel" description="Choose your Destination">
        {renderAdventureOptions([{ name: "Viridian", cost: 2 }])}
      </Card>
      <Card title="Explore" description="Where do you want to go?">
        {renderAdventureOptions([
          { name: "City", cost: 1 },
          { name: "Outskirts", cost: 1 },
        ])}
      </Card>
      <Card
        title="Forage"
        description="What kind of resources are you looking for?"
      >
        {renderAdventureOptions([
          { name: "Nature", cost: 1 },
          { name: "Urban", cost: 1 },
          { name: "Trash", cost: 1 },
        ])}
      </Card>
      <Card title="Rest" description="Choose a place to relax">
        {renderAdventureOptions([
          { name: "Picnic", cost: 1 },
          { name: "Hotel", cost: 1 },
          { name: "Make camp", cost: 1 },
          { name: "Wilds", cost: 1 },
        ])}
      </Card>
    </Styled.Adventure>
  );
};

export default Adventure;
