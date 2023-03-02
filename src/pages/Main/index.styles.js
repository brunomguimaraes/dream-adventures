import styled from "styled-components/macro";
import { backgroundColors } from "../../styles/colors";

export const Main = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: min-content auto;
  grid-template-areas:
    "topbar topbar"
    "sidebar content";
`;

export const Content = styled.div`
  background-color: ${backgroundColors.darkSecondary};
  grid-area: content;
  border-top-left-radius: 48px;
`;
