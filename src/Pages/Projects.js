import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import { projectsArray } from '../projects';

const Projects = props => (
  <div>
  <div class="a">
  <h1>SudanUK Projects</h1>
  <div id="projects">
  <ul style={{background: '#ebf5ff'}}>
      {projectsArray.map((project, index) =>
      <div class="slide-down">
        <ProjectCard project={project} key={index}/></div>)}
  </ul>
  </div>
  </div>
        </div>
);

export default Projects;
