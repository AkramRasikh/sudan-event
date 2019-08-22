import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import { IconContext } from "react-icons";

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
    <NavLink to={{ pathname: '/gallery', state: { eventName: name, description: description, images: images, poster: poster} }} exact><p><div class="white">{name}</div></p></NavLink>

    </li>
  )
}


export default EventCard;
