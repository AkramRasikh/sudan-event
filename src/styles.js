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

    .missionStatement{
      width: 100%;
      background-color: white;
    }
    p{
      font-size: 18px;
      color: #005F8D;
    }
    img{
      float: right;
    }
.blue{
  color: blue;
}
    h1
    {
      text-align: center;
      color: #005F8D;
    }

    h2
    {
      color: #005F8D;
    }
    ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #005F8D;
  }
  .fixed
  {
    position: fixed;
  }
  .footer
  {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  li {
    float: left;
  }


  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #FFD700;
  }
  }
`;
