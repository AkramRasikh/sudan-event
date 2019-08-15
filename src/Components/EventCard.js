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
      <br/>
      <p align="center">{location}</p>
      <p align="center">{date}</p>
      <NavLink to={{ pathname: '/gallery', state: { eventName: name, description: description, images: images } }} exact>Read more</NavLink>
    </li>
  )
}


export default EventCard;
