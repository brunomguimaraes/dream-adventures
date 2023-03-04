import styled from "styled-components/macro";
import { backgroundColors, defaultColors } from "styles/colors";

const GIF_WIDTH = "64px";

export const TeamGrid = styled.div`
  background-color: ${backgroundColors.darkPrimary};
  padding: 32px 8px;
  margin: 32px;
  width: 100%;
  border-radius: 24px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const CardCenter = styled.div`
  margin 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CardTitle = styled.span`
  display: flex;
  align-items: center;
  font-family: Signika;
  margin-top: 4px;
  color: ${defaultColors.white};
  font-size: 10px;
`;

export const Gif = styled.img`
  max-width: ${GIF_WIDTH};
  object-fit: contain;
`;

export const Ball = styled.img`
  width: 12px;
  height: 12px;
`;

export const TypeIcon = styled.img`
  margin-top: 4px;
  width: 24px;
  height: 24px;
`;

export const StatsBar = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4px;
`;

export const StatusBarRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 120px;
  align-items: center;
`;

export const StatsBarIcon = styled.img`
  margin-right: 1px;
  width: 8px;
  height: 8px;
`;

export const StatusIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusSvgIcon = styled.img`
  margin-right: 4px;
  margin-bottom: 4px;
  width: 24px;
  height: 24px;
`;
