import React from 'react';
import { eventsArray } from '../events';
import EventCard from '../Components/EventCard';

const Events = props => (
    <div>
        <h1>Events</h1>
        <ul style={{background: '#E0EEE0'}}>
            {eventsArray.map((event, index) =>
              <div class='gridElement'><li>
              <EventCard event={event}  key={index} /></li></div>)}

        </ul>
    </div>
);

export default Events;
