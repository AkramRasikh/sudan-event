import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Gallery = props => {
    console.log('props', props);
    return (
        <>
            <h1>{props.location.state.eventName}</h1>
            <br/>
            <p>{props.location.state.description}</p>
            <br/>
            <div>
  <AwesomeSlider>
    {props.location.state.images.map(img=> (
    <div data-src={img.url} />))}
  </AwesomeSlider>
            </div>
        </>
    )
}

export default Gallery;
