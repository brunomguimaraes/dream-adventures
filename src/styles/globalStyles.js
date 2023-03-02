import { createGlobalStyle } from 'styled-components';

import { backgroundColors } from './colors';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${backgroundColors.darkPrimary}
  }
`;
 
export default GlobalStyle;