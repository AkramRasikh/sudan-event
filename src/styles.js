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
  padding: 0px;
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


html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
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
