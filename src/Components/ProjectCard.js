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
    <p align="center"><NavLink to={{ pathname: '/gallery', state: { eventName: title, description: description, images: images } }} exact><div class="white">{title}</div></NavLink></p>
    </li>
)}

export default ProjectCard;
