import styled from "styled-components/macro";
import { backgroundColors, defaultColors } from "styles/colors";

export const Badge = styled.div`
  min-width: 232px;
  border-radius: 24px;
  background-color: ${backgroundColors.darkSecondary};
  margin: 8px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  color: ${defaultColors.grey};
  font-size: 14px;
  font-family: Signika;
  margin-bottom: 8px;
`;

export const Text = styled.span`
  color: ${defaultColors.white};
  font-size: 12px;
  font-family: "Press Start 2P";
`;
