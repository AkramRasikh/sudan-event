import React from 'react'
import { NavLink } from 'react-router-dom';

const ProjectCard = ({ project }) => {
   const {
     icon,
     title,
     description,
     time,
     location,
     images,
   } = project;

  return (
    <li>
    <p><NavLink to={{ pathname: '/gallery', state: { eventName: title, description: description, images: images } }} exact>{icon}<br/>{title}</NavLink></p>
    </li>
)}

export default ProjectCard;
