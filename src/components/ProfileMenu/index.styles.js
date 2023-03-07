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
  font-size: 16px;
  text-align: end;

  ${({ secondary }) =>
    secondary &&
    `
    font-size: 14px;
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
  width: 48px;
  height: 48px;
  vertical-align: middle;
  border-radius: 50%;
`;

export const NotificationArea = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;
  cursor: pointer;
`;

export const MenuArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 8px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;

  ${({ small }) =>
    small &&
    `
    width: 12px;
    height: 12px;
  `}
`;
