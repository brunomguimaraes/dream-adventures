import styled from "styled-components/macro";
import { backgroundColors, defaultColors } from "styles/colors";

const BADGE_RADIUS = "24px";
const BADGE_WIDTH = "200px";
const SWITCH_WIDTH = "80px";

export const CurrencyBadge = styled.div`
  width: ${BADGE_WIDTH};
  margin: 8px 0 16px 40px;
  background-color: ${backgroundColors.darkSecondary};
  position: relative;
  border-radius: ${BADGE_RADIUS};
`;

export const Switch = styled.div`
  position: absolute;
  height: 100%;
  color: ${defaultColors.white};
  background-color: ${backgroundColors.action};
  font-size: 24px;
  width: ${SWITCH_WIDTH};
  border-radius: ${BADGE_RADIUS};
  cursor: pointer;
  font-family: "Press Start 2P";
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-out;
  z-index: 2;

  ${({ toRight }) =>
    toRight &&
    `
    transform: translateX(calc(${BADGE_WIDTH} - ${SWITCH_WIDTH}));
  `}
`;

export const Values = styled.div`
  position: absolute;
  height: 100%;
  color: ${defaultColors.white};
  font-size: 12px;
  width: calc(${BADGE_WIDTH} - ${SWITCH_WIDTH});
  font-family: "Press Start 2P";
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-out;

  ${({ toRight }) =>
    toRight &&
    `
    transform: translateX(${SWITCH_WIDTH});
  `}
`;
