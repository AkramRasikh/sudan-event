import React, { useEffect } from 'react';
// import EventsArray from '../events';

const Gallery = props => {
    console.log('props', props);
    // useEffect(() => {
    //     if (condition) {
    //         // if props.location.state is an empty array, then set them here dynamically or go back to the events page

    //         // each event also needs an id
    //     }
    // }, []);
    return (
        <>
            <h1>{props.location.state.eventName}</h1>
            <div>
                {props.location.state.images.map(img => (
                    <img src={img.url} alt={img.description} />
                ))}
            </div>
        </>
    )
}

export default Gallery