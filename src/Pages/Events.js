import React from 'react';
import { eventsArray } from '../events';
import EventCard from '../Components/EventCard';

const Events = props => {
  console.log('props', props);
  return (
      <>
        <div class="a">
        <h1>Events</h1>
        <div class="slide-down">
        <ul class="flex-container" style={{background: '#ebf5ff'}}>
        <h3> Sudanese events happening in the UK...</h3>

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
