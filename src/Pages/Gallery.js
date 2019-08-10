import React from 'react';

const Gallery = props => {
    console.log('props', props);
    return (
        <>
            <h1>{props.location.state.eventName}</h1>
            <br/>
            <div>
                {props.location.state.images.map(img => (
                    <img src={img.url} alt={img.description} />
                ))}
            </div>
        </>
    )
}

export default Gallery;
