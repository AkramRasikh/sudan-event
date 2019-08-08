import React from 'react';
import { Slide } from 'react-slideshow-image';

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
  }
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url('../Images/salamat1.jpg')`}}>
              <span>Slide 1<img src='../Images/salamat2.jpg' alt="../Images/salamat1.jpg" width="700" height="400"></img></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow;
