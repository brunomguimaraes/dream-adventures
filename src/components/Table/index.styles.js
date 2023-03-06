import styled from "styled-components/macro";

import { defaultColors, backgroundColors } from "styles/colors";

export const TableArea = styled.table`
  width: 100%;
  padding: 8px 16px;
  background: ${backgroundColors.darkPrimary};
  border-radius: 8px;
  margin: 32px;
  border-collapse: collapse;
`;

export const TableHeadingRow = styled.tr`
  color: ${defaultColors.white};
  font-size: 12px;
  font-family: "Press Start 2P";
  border-bottom: 4px solid ${backgroundColors.darkSecondary};
  text-align: left;
`;

export const TableHeading = styled.th`
  padding: 8px;
`;

export const TableRow = styled.tr``;

export const TableItem = styled.td`
  color: ${defaultColors.grey};
  font-size: 12px;
  font-family: "Signika";
  padding: 8px;
`;

export const ItemIcon = styled.img`
  width: 32px;
  height: 32px;
`;
