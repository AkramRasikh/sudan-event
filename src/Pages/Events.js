import React from 'react';
import { eventsArray } from '../events';
import EventCard from '../Components/EventCard';

const Events = props => (
    <div>
        <ul style={{background: 'white'}}><br/> <h1><b>Events</b></h1>
        <br/>
            {eventsArray.map((event, index) =>
              <div class='circle'><li>
              <EventCard event={event} key={index} /></li></div>)}
        </ul>
    </div>



);

export default Events;
