import { createGlobalStyle } from 'styled-components';

import { backgroundColors } from './colors';
 
const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}
  body {
    background-color: ${backgroundColors.darkPrimary};
    height: 100%;
    margin: 0;
  }
`;
 
export default GlobalStyle;