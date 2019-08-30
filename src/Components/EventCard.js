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

    <NavLink to={{ pathname: '/gallery', state: { eventName: name, description: description, images: images, poster: poster} }} exact>
    <div class="white">
    {name}</div>
    </NavLink>


  )
}


export default EventCard;
