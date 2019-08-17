import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    font-family: 'Verdana', sans-serif;
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
.float{
  float: left;
}
    p{
      font-size: 16px;
      color: #005F8D;
    }
    img{
      float: center;
      }
    h1{
      text-align: left;
      color: #005F8D;
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
    float: right;
  }
  AwesomeSlider{
    width: 100%;
  }

  div.a {
    font-size: 21px;
  }
  div.b {
    font-size: 1px;
  }
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 10px 10px;
    text-decoration: none;
  }

 li {
     display: inline-block;
     vertical-align: top;
     padding: 0px;
 }
 * {
   box-sizing: border-box;
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
