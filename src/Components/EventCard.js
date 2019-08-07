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
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{location}</p>
      <p>{time}</p>
      <p><strong>{date}</strong></p>
      <NavLink to={{ pathname: '/gallery', state: { eventName: name, images: images } }} exact>See images</NavLink>
    </li>
  )
}


export default EventCard;
