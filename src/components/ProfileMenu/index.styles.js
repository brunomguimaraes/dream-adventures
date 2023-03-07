import styled from "styled-components/macro";
import { defaultColors } from "styles/colors";

export const ProfileMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 8px 0 16px;
  min-width: 232px;
`;

export const ProfileMenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 8px;
`;

export const TextMenuInfo = styled.span`
  color: ${defaultColors.white};
  font-family: Signika;
  font-size: 14px;
  text-align: end;

  ${({ secondary }) =>
    secondary &&
    `
    font-size: 12px;
    color: ${defaultColors.grey};
  `}
`;

export const ProfileAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Avatar = styled.img`
  margin-top: 4px;
  width: 40px;
  height: 40px;
`;
