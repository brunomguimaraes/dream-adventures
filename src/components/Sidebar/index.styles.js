import styled from "styled-components/macro";

import { backgroundColors } from "../../styles/colors";

export const Sidebar = styled.div`
  width: 64px;
  background-color: ${backgroundColors.darkSecondary};
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 48px;
`;

export const Logo = styled.img`
  witdh: 32px;
  heigth: 32px;
  padding: 8px;
`;
