import styled from "styled-components/macro";
import { backgroundColors, defaultColors } from "styles/colors";

export const Adventure = styled.div`
  padding: 32px;
  border-radius: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  column-gap: 16px;
  row-gap: 16px;
`;

export const AdventureOptions = styled.div`
  padding: 8px;
`;

export const AdventureOptionRow = styled.div`
  width: 240px;
  border: 2px solid ${backgroundColors.darkSecondary};
  border-radius: 8px;
  margin: 8px 0;
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AdventureOptionText = styled.span`
  color: ${defaultColors.white};
  font-size: 16px;
  font-family: "Signika";
  ${({ cost }) =>
    cost &&
    `
      padding: 8px 16px;
      border-radius: 8px;
      background: ${backgroundColors.darkSecondary};
  `}
`;
