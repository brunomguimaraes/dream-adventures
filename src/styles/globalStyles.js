import { createGlobalStyle } from 'styled-components';

import { backgroundColors } from './colors';
 
const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}
  body {
    margin: 0;
    padding: 0;
    background-color: ${backgroundColors.darkPrimary};
    height: 100%;
  }
`;
 
export default GlobalStyle;