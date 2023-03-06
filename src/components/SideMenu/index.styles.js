import styled from "styled-components/macro";
import { defaultColors } from "styles/colors";

export const SideMenu = styled.div``;

export const MenuItem = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  margin: 8px 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 80px;
  height: 80px;
  border-radius: 16px;
  ${({ active }) => active && `background-color: ${defaultColors.primary};`}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${defaultColors.primary};
  }
`;

export const TextMenu = styled.span`
  font-family: Signika;
  margin-top: 4px;
  text-transform: uppercase;
  color: ${defaultColors.white};
  font-size: 12px;
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
`;
