import React from 'react'
import { NavLink } from 'react-router-dom';

const ProjectCard = ({ project }) => {
   const {
     title,
     description,
     time,
     location,
     images,
   } = project;

  return (

    <li>
      <h2>{title}</h2>
      <p><i>{description}</i></p>
      <p>{time}</p>
      <p>{location}</p>
      <NavLink to={{ pathname: '/gallery', state: { eventName: title, description: description, images: images } }} exact><p><div class="white">Read more</div></p></NavLink>

    </li>
)}

export default ProjectCard;
