import styled from "styled-components/macro";

import { backgroundColors, defaultColors } from "styles/colors";

export const StatusBar = styled.div`
  box-sizing: content-box;
  height: ${({ isHealthBar }) => (isHealthBar ? "12" : "8")}px;
  position: relative;
  width: 100%;
  background: ${backgroundColors.darkSecondary};
  border-radius: 25px;
  margin: 4px;
`;

export const Meter = styled.span`
  width: ${({ percentage }) => percentage}%;
  display: block;
  height: 100%;
  ${({ percentage }) =>
    percentage === 100 ? `
      border-radius: 20px;
    ` : `
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    `}

  overflow: hidden;
  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
    inset 0 -2px 6px rgba(0, 0, 0, 0.4);
  position: relative;

  background: ${({ isHealthBar, percentage }) =>
    isHealthBar
      ? `linear-gradient(270deg, ${
          percentage < 10 ? defaultColors.red : defaultColors.green
        } 55%, ${defaultColors.white})`
      : `linear-gradient(270deg, ${defaultColors.primary}, ${defaultColors.secondary})`}; ;
`;
