import styled from "styled-components/macro";
import { defaultColors, backgroundColors } from "styles/colors";

export const Card = styled.div`
  background-color: ${backgroundColors.darkPrimary};
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start ;
  padding: 8px 16px 16px;
`;

export const Heading = styled.h2`
  color: ${defaultColors.white};
  font-size: 12px;
  font-family: "Press Start 2P";
`;

export const Description = styled.span`
  color: ${defaultColors.grey};
  font-size: 10px;
  font-family: "Signika";
  display: flex;
  justify-content: center;
`;
