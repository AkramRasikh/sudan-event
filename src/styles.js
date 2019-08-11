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
    .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
    .bigText{
      font-size: 25px;
      text-align: center;
    }
    .gridElement{
      display: inline-block;
      vertical-align: top;
      padding: 18px;
    }
    .missionStatement{
      align: center;
      background-color: #E0EEE0;
    }
    p{
      font-size: 18px;
    }
    img{
      max-width: 100%;
      max-height: 100%;
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

    h1
    {
      text-align: center;
    }
    li
    {
      float: left;
    }
    .greenText{
      color: black	;
      text-align: left;
      font-weight: bold;

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
     background-color: #8FD8D8;
   }
  }
`;
