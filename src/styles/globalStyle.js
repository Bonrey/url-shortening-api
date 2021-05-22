import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';
import { smallerScreens } from './responsive';

export const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  html, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;

    @media ${smallerScreens} {
      font-size: calc(100vw / 375 * 18);
    }
  }

  body {
    overflow: ${({ menuVisible, scrollable }) => menuVisible || !scrollable ? "hidden" : "visible"};
  }

  h1, h2, h3 {
    color: ${colors['very-dark-blue']};
  }

  p {
    color: ${colors["grayish-violet"]};
    font-weight: 400;
    font-size: 0.875rem;
  }
`;
