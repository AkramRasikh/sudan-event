import React from 'react';
import { eventsArray } from '../events';
import EventCard from '../Components/EventCard';

const Events = props => (
    <div>
        <ul class="flex-container" style={{background: '#FFCC01'}}>
<div class="a">
        <h1>Events</h1>
        <h3> Sudanese events happening in the UK...</h3>
        </div>
            {eventsArray.map((event, index) =>
              <div><li class="flex-item">
              <EventCard event={event} key={index} /></li></div>)}

        </ul>
    </div>




);

export default Events;
