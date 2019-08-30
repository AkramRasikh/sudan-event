import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import { projectsArray } from '../projects';

const Projects = props => (
  <div>
  <div class="a">
  <h1>SudanUK Projects</h1>
  <ul class="flex-container" style={{background: '#ebf5ff'}}>
<div>
      {projectsArray.map((project, index) =>
      <div><li class="flex-item">
        <ProjectCard project={project} key={index}/></li></div>)}
        </div>
  </ul>
  </div>
        </div>
);

export default Projects;
