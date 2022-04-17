import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --dark: #121212;
    --dark-200: #151515;
    --light: #FFFFFF;
    --primary: #00D2DF;
  }

  body {
    background: var(--dark);
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
`;