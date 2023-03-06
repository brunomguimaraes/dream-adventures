import React from "react";

import potionImg from "assets/img/items/potion.png";
import luckyEggImg from "assets/img/items/lucky-egg.png";

import * as Styled from "./index.styles";

const Table = ({ columns = [], rows = [] }) => {
  return (
    <Styled.TableArea>
      <Styled.TableHeadingRow>
        <Styled.TableHeading />
        <Styled.TableHeading>Item</Styled.TableHeading>
        <Styled.TableHeading>Quantity</Styled.TableHeading>
      </Styled.TableHeadingRow>
      <Styled.TableRow>
        <Styled.TableItem>
          <Styled.ItemIcon src={potionImg} />
        </Styled.TableItem>
        <Styled.TableItem>Potion</Styled.TableItem>
        <Styled.TableItem>199</Styled.TableItem>
      </Styled.TableRow>
      <Styled.TableRow>
        <Styled.TableItem>
          <Styled.ItemIcon src={luckyEggImg} />
        </Styled.TableItem>
        <Styled.TableItem>Lucky Egg</Styled.TableItem>
        <Styled.TableItem>2</Styled.TableItem>
      </Styled.TableRow>
    </Styled.TableArea>
  );
};

export default Table;
