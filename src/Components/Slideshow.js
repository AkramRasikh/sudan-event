import React from 'react';
import { Slide } from 'react-slideshow-image';

//cant use these yet
const slideImages = [
  '../Images/salamat1.jpg',
  '../Images/salamat2.jpg',
  '../Images/salamat3.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span> <img src={require('../Images/salamat1.jpg')} height='450' width='700'/></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>
              <img src={require('../Images/salamat2.jpg')} height='450' width='700'/>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span> <img src={require('../Images/salamat3.jpg')} height='450' width='700'/>
              </span>
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow;
