import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
    margin: 0;

    .gridList{
      margin: 0 auto;
      text-align: center;
    }
    .gridElement{
      display: inline-block;
      vertical-align: top;
      padding: 18px;
    }
    .missionStatement{
      align: center;

    }
    a
    {
      color: ${({ theme }) => theme.colors.secondaryBlue}
    }

    ul
    {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333333;
    }
    p
    {
      text-align: left;
      font: 15px Verdana, Geneva, sans-serif;
    }
    h1
    {
      text-align: center;
    }
    li
    {
      float: left;
    }

    li a
    {
      display: block;
      color: white;
      text-align: left;
      padding: 16px;
      text-decoration: none;
   }
   li a:hover
   {
     background-color: #111111;
   }
  }
`;
