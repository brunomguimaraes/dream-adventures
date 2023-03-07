import styled from "styled-components/macro";
import { defaultColors, backgroundColors } from "styles/colors";

const GIF_WIDTH = "112px";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 4px solid ${backgroundColors.darkSecondary};
  border-radius: 8px;
  padding: 8px;
  min-width: 360px;
`;

export const CardLeft = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CardCenter = styled.div`
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardRight = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CardTitle = styled.span`
  display: flex;
  align-items: center;
  font-family: Signika;
  font-size: 16px;
  font-weight: 200;
  color: ${defaultColors.white};
  margin-top: 4px;
`;

export const Gif = styled.img`
  min-width: ${GIF_WIDTH};
  object-fit: contain;
`;

export const Ball = styled.img`
  width: 16px;
  height: 16px;
`;

export const TypeIcon = styled.img`
  margin-top: 4px;
  width: 24px;
  height: 24px;
`;

export const StatsBar = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4px;
`;

export const StatusBarRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 120px;
  align-items: center;
`;

export const StatsBarIcon = styled.img`
  margin-right: 2px;
  width: 12px;
  height: 12px;
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

export const StatsRow = styled.div`
  margin-top: 4px;
  flex-wrap: nowrap;
`;

export const StatsText = styled.span`
  font-family: Signika;
  font-size: 12px;
  color: ${defaultColors.white};
  ${({ bold }) => bold && "font-weight: bold;"}
  margin-right: 2px;
`;

export const Empty = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyIcon = styled.img`
  width: 56px;
  height: 56px;
`;
