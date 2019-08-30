import React from 'react';
import { eventsArray } from '../events';
import EventCard from '../Components/EventCard';

const Events = props => {
  console.log('props', props);
  return (
      <>
        <div class="a">
        <div class="slide-down">
        <ul class="flex-container" style={{background: '#ebf5ff'}}>
            {eventsArray.map((event, index) =>
              <li>
              <EventCard event={event} key={index} /></li>)}
        </ul>
        </div>
        </div>
        </>
  )
}

export default Events;
