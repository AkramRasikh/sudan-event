import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import { projectsArray } from '../projects';

const Projects = props => (
  <div>
  <ul style={{background: 'white'}}>
  <br/>

  <h1><b>Projects</b></h1>
      {projectsArray.map((project, index) =>
      <li>
        <ProjectCard project={project} key={index}/> </li>)}

  </ul>
        </div>
);

export default Projects;
