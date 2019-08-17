import React from 'react';
import { eventsArray } from '../events';
import EventCard from '../Components/EventCard';

const Events = props => (
    <div>
        <ul style={{background: 'white'}}><h1><b>Events</b></h1>
            {eventsArray.map((event, index) =>
              <li>
              <EventCard event={event} key={index} /></li>)}
        </ul>
    </div>




);

export default Events;
