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
  
.float{
  float: left;
}

    img{
      float: center;
      }
    h1{
      text-align: left;
      color: #005F8D;
    }

    .wrapper {
      border: 2px solid white;
      border-radius: 5px;
      background-color: white;
  }

  .wrapper > div {
      border: 2px solid white;
      border-radius: 5px;
      background-color: #005F8D;
      padding: 1em;
      color: white;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0px;
      overflow: hidden;
      background-color: #005F8D;
    }
  .fixed{
    position: fixed;
  }


/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
p {
  padding: 5px;
}
h1{
  padding: 15px;
}
h2{
  padding: 15px;
}
h3{
  padding: 15px;
}
h4{
  padding: 15px;
}

  li{
    float: right;
  }
  AwesomeSlider{
    width: 100%;
    height: 100%;
    autoPlay: true;
    interval: 3000;
  }
  div.white{
    color: white;
  }
  div.blue{
    color: #005F8D;
  }
  div.a {
    font-size: 21px;
  }
  div.b {
    font-size: 10px;
  }
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 3px 10px;
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


 .flex-container {
   padding: 0;
   margin: 0;
   list-style: none;

   display: -webkit-box;
   display: -moz-box;
   display: -ms-flexbox;
   display: -webkit-flex;
   display: flex;

   -webkit-flex-flow: row wrap;
   justify-content: space-around;
 }

 .flex-item {
   background: #005F8D;
   padding: 5px;
   width: 200px;
   height: 150px;
   margin-top: 10px;

   line-height: 150px;
   color: white;
   font-weight: normal;
   font-size: 1em;
   text-align: center;
 }


a{
  color: #005F8D;
}

.footer {
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
