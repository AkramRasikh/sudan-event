import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import { projectsArray } from '../projects';

const Projects = props => (
  <div>
  <ul class="flex-container" style={{background: 'white'}}>
<div class="a">
  <h1><b>What we're doing now</b></h1>
  </div>
<div>
      {projectsArray.map((project, index) =>
      <div><li class="flex-item">
        <ProjectCard project={project} key={index}/></li></div>)}
        </div>
  </ul>
        </div>
);

export default Projects;
