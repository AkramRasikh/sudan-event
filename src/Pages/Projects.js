import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import { projectsArray } from '../projects';
import {IoIosGlobe} from "react-icons/io";

const Projects = props => (
  <div>
  <div class="a">
  <h1><IoIosGlobe/>SudanUK Projects</h1>
  <div id="projects">
  <p> Initiatives we're working on, and our very own events.</p>
  <br/>
  <ul style={{background: '#ebf5ff'}}>
      {projectsArray.map((project, index) =>
      <div class="slide-down"><button class="btn">
        <ProjectCard project={project} key={index}/></button></div>)}
  </ul>
  </div>
  </div>
        </div>
);

export default Projects;
