import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import { projectsArray } from '../projects';

const Projects = props => (
  <div>
  <ul style={{background: 'white'}}>
<div class="a">
  <h1><b>What we're doing now</b></h1>
  </div>

      {projectsArray.map((project, index) =>
      <li>
        <ProjectCard project={project} key={index}/> </li>)}
  </ul>
        </div>
);

export default Projects;
