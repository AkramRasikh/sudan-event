import React from 'react'

const EventCard = ({ event }) => {
  const {
    description,
    location,
    time,
    date,
    link,
    name,
  } = event;
  
  return (
  <li>
    <h2>{name}</h2>
    <p>{description}</p>
    <p>{location}</p>
    <p>{time}</p>
    <p><strong>{date}</strong></p>
    <a href="#">{link}</a>           
  </li>
)}

export default EventCard;