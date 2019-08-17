import React from 'react';
import { eventsArray } from '../events';
import EventCard from '../Components/EventCard';

const Events = props => (
    <div>
        <ul style={{background: 'white'}}>
<div class="a">
        <h1>Events</h1>
        </div>
            {eventsArray.map((event, index) =>
              <li>
              <EventCard event={event} key={index} /></li>)}
        </ul>
    </div>




);

export default Events;
