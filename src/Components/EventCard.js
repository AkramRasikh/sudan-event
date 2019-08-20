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
    <NavLink to={{ pathname: '/gallery', state: { eventName: name, description: description, images: images, poster: poster} }} exact><p>{name}</p></NavLink>

    </li>
  )
}


export default EventCard;
