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
      float: center;
      }
    h1{
      text-align: left;
      color: #005F8D;
    }
    .white{
      color: white;
    }
    h2{
      color: #005F8D;
      text-align: left;
    }
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #005F8D;
    }
  .fixed{
    position: fixed;
  }
  li{
    float: left;
  }
  AwesomeSlider{
    width: 100%;
  }
  @keyframes slidein {

    from {
      margin-left: 100%;
      width: 300%;
    }
    to {
      margin-left: 0%;
      width: 100%;
    }

  }
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 10px 30px;
    text-decoration: none;
  }
  .white{
    color: white;

  }

   ul {
     margin: 0 auto;
     text-align: center;
 }

 li {
     display: inline-block;
     vertical-align: top;
     padding: 0px;
 }
 * {
   box-sizing: border-box;
 }

 /* Create two equal columns that floats next to each other */
 .column {
   float: left;
   width: 50%;
   padding: 10px;
   height: 300px; /* Should be removed. Only for demonstration */
 }

 /* Clear floats after the columns */
 .row:after {
   content: "";
   display: table;
   clear: both;
 }

a{
  color: #005F8D;
}

.footer {
  padding: 10px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #005F8D;
  color: white;
  text-align: center;
}
}

  }
`;
