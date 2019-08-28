import React from 'react';
import { eventsArray } from '../events';
import EventCard from '../Components/EventCard';

const Events = props => {
  console.log('props', props);
  return (
      <>
        <ul class="flex-container" style={{background: '#FFCC01'}}>

        <h1>Events</h1>
        <h3> Sudanese events happening in the UK...</h3>

            {eventsArray.map((event, index) =>
              <li>
              <EventCard event={event} key={index} /></li>)}

        </ul>
        </>
  )
}

export default Events;
