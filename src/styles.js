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
      text-align: center;
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
    padding: 14px 16px;
    text-decoration: none;
  }
  .white{
    color: white;

  }
  .circle{
	background: #005F8D;
  	border-radius: 200px;
  	color: white;
  	height: 200px;
  	font-weight: bold;
  	width: 200px;

    animation-duration: 3s;
    animation-name: slidein;
    animation-iteration-count: 1;
}


.block{
	border: 1px solid red;
  	text-align: center;
  	vertical-align: middle;
}
.dropdown{

}
  li a:hover {
    background-color: #000
;
  }
  }
`;
