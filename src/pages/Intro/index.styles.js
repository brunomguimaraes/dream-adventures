import styled from "styled-components/macro";
import { defaultColors } from "styles/colors";

export const Intro = styled.div`
  padding: 32px;
`;

export const Dialog = styled.div`
  width: 800px;
`;

export const DialogText = styled.span`
  font-family: "Press Start 2P";
  font-size: 12px;
  color: ${defaultColors.white};
`;

export const Picture = styled.img`
  max-height: 240px;
  object-fit: contain;
`;