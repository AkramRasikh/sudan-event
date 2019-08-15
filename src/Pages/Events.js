import React from 'react';
import { eventsArray } from '../events';
import EventCard from '../Components/EventCard';

const Events = props => (
    <div>
        <ul style={{background: '#005F8D'}}>
        <br/>
        <h1>Events</h1>
            {eventsArray.map((event, index) =>
              <div class='gridElement'><li>
              <EventCard event={event}  key={index} /></li></div>)}

        </ul>
    </div>
);

export default Events;
