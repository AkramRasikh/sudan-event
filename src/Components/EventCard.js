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
      <p>{location}</p>
      <p>{date}</p>
<<<<<<< HEAD
      <NavLink to={{ pathname: '/gallery', state: { eventName: name, description: description, images: images } }} exact>See event</NavLink>
=======
      <NavLink to={{ pathname: '/gallery', state: { eventName: name, images: images } }} exact>See images</NavLink>
>>>>>>> 0af4d49f54b1cb1a20b0c86f050dba3490574bf0
    </li>
  )
}


export default EventCard;
