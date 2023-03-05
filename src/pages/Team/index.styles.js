import styled from "styled-components/macro";
import { backgroundColors } from "styles/colors";

export const Team = styled.div`
  background-color: ${backgroundColors.darkPrimary};
  padding: 32px;
  margin: 32px;
  width: 100%;
  border-radius: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 16px;
`;
