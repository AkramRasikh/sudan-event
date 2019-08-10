import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  '../Images/salamat1.jpg',
  '../Images/salamat2.jpg',
  './salamat3.jpg'
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
            <span> <img src='../Images/salamat1.jpg' alt='hanak'height='50' width='50'/></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span> <img src='../Images/salamat1.jpg'height='500'/>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow;
