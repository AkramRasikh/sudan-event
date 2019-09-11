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

    <NavLink to={{ pathname: '/eventGallery', state: { eventName: name, description: description, images: images, poster: poster} }} exact>

    {name}
    </NavLink>


  )
}


export default EventCard;
