import React from 'react';
import { eventsArray } from '../events';
import EventCard from '../Components/EventCard';
import {IoMdCalendar} from "react-icons/io";

const Events = props => {
  console.log('props', props);
  return (
      <>
        <div class="a">
        <h1><IoMdCalendar/>Events</h1>

        <ul class="flex-container">
            {eventsArray.map((event, index) =>
              <button class="btn"><div>
              <li>
              <EventCard event={event} key={index} /></li></div></button>)}
        </ul>
        </div>
        </>
  )
}

export default Events;
