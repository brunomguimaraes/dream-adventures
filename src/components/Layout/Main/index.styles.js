import styled from "styled-components/macro";
import { backgroundColors } from "styles/colors";

export const Main = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: min-content auto;
  grid-template-areas:
    "topbar-left topbar-right"
    "sidebar content";
`;

export const Content = styled.div`
  background-color: ${backgroundColors.darkSecondary};
  grid-area: content;
  border-top-left-radius: 48px;
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: min-content auto;
`;

export const LogoSection = styled.div`
  grid-area: topbar-left;
  width: 96px;
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
