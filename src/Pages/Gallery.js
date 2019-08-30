import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Gallery = props => {
    console.log('props', props);
    return (
        <>
            <h1>{props.location.state.eventName}</h1>
            <br/>
      <div class="a">
            <p>{props.location.state.description}</p>
            <div>
            <div>
           </div>
      </div>
<div class="b">
  <AwesomeSlider>
    {props.location.state.images.map(img=> (
    <div data-src={img.url} />))}
  </AwesomeSlider>
</div>
            </div>
        </>
    )
}

export default Gallery;
