import React from 'react';
import { NavLink } from 'react-router-dom';

const EventCard = ({ event }) => {
  const {
    description,
    poster,
    location,
    time,
    date,
    images,
    name,
  } = event;

  return (
    <li>
      <h2 align="center">{name}</h2><br/>
      <p align="center"><div class="white">{location}</div></p>
      <p align="center"><div class="white">{date}</div></p>
      <NavLink to={{ pathname: '/gallery', state: { eventName: name, description: description, images: images } }} exact>Read more</NavLink>
    </li>
  )
}


export default EventCard;
