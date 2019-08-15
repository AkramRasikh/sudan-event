import React from 'react'

const ProjectCard = ({ project }) => {
   const {
     title,
     description,
     time,
     location,
   } = project;

  return (

    <li>
      <h2>{title}</h2>
      <p><i>{description}</i></p>
      <p>{time}</p>
      <p>{location}</p>
    </li>
)}

export default ProjectCard;
