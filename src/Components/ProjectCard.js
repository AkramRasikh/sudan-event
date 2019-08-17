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
      <h2><b>{title}</b></h2>
      <p>{time}</p>
      <br/>
      <p align="left"><b>Location:</b>{location}</p>
      <NavLink to={{ pathname: '/gallery', state: { eventName: title, description: description, images: images } }} exact><p align="left">Read more</p></NavLink>

    </li>
)}

export default ProjectCard;
