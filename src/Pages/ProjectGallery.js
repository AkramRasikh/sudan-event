import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const ProjectGallery = props => {
    console.log('props', props);
    return (
        <>
            <h1>{props.location.state.eventName}</h1>
            <br/>
      <div class="a">
            <p>{props.location.state.description}</p>
            <br/>
            <div>
            <div>
           </div>
      </div>
<div class="b">
{props.location.state.images.map(img=> (
  <img src={img.url} />))}
</div>
            </div>
        </>
    )
}

export default ProjectGallery;
