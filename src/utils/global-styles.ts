import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Outfit';
    src: url('/fonts/Outfit-Regular.woff2') format('woff2'),
         url('/fonts/Outfit-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Outfit';
    src: url('/fonts/Outfit-Medium.woff2') format('woff2'),
         url('/fonts/Outfit-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Outfit';
    src: url('/fonts/Outfit-SemiBold.woff2') format('woff2'),
         url('/fonts/Outfit-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    padding: 0 1rem;
    font-family: 'Outfit', 'Arial', sans-serif;
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    border: 0;
    outline: none;
  }
`;
