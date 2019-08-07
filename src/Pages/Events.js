import React from 'react';
import { eventsArray } from '../events';
import EventCard from '../Components/EventCard';

const Events = props => (
    <div>
        <h1>Sudanese events</h1>
        <ul>
            {eventsArray.map((event, index) => <EventCard event={event} key={index} />)}
        </ul>
    </div>
);

export default Events;

