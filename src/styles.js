import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    a {
      color: ${({ theme }) => theme.colors.secondaryBlue}
    }

    ul {
      padding: 0;
    }
  }
`;
