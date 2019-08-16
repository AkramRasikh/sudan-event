import React from 'react';
import { NavLink } from 'react-router-dom';

const EventCard = ({ event }) => {
  const {
    description,
    location,
    time,
    date,
    images,
    name,
  } = event;

  return (
    <li>
      <h2><b>{name}</b></h2>
      <p align="center"><div class ="white">{location}</div></p>
      <p align="center" ><div class ="white">{date}</div></p>
      <NavLink to={{ pathname: '/gallery', state: { eventName: name, description: description, images: images } }} exact><p><div class="white">Read more</div></p></NavLink>
    </li>
  )
}


export default EventCard;
