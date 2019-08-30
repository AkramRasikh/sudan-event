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
  background-color: #5397d4;
}

    img{
      float: center;
      }
    h1{
      text-align: center;
      background-color: #ebf5ff;
      color: black;
    }

    .wrapper {
      border: 2px solid white;
      border-radius: 5px;
      background-color: whte;
  }

  .wrapper > div {
      border: 2px solid white;
      border-radius: 5px;
      background-color: white;
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
      background-color: #5397d4;
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

  align: center;
}
h2{
  padding: 15px;

  align: center;
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
  align: center;
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
  color: black;
  background-color: white;
  align: center;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
  align: center;
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
    interval: 1000;
  }


  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 3px 10px;
    text-decoration: none;
  }
  li a:hover{

  }

 li {
     display: inline-block;
     vertical-align: top;
     padding: 0px;
 }
 * {
   box-sizing: border-box;
 }

 div.a {
   height: 1600px;
   background-color: #ebf5ff;
 }
 div.b {
   height: 1500px;
   background-color: #ebf5ff;
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
   background: white;
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

div.slide-down {
  width:100%;
  overflow:hidden;
}
div.slide-down p {
  animation: 3s slide-down;
  margin-top:0%;
}
div.slide-down h1 {
  animation: 2s slide-down;
  margin-top:0%;
}
div.slide-down img {
  animation: 1s slide-down;
  margin-top:0%;
}
div.slide-down ul {
  animation: 1s slide-down;
  margin-top:0%;
}
@keyframes slide-down {
  from {
    margin-top: -100%;
    height: 300%;
  }

  to {
    margin-top: 0%;
    height: 100%;
  }
}

.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #5397d4;
  color: white;
  text-align: center;
}


}
  }
`;
