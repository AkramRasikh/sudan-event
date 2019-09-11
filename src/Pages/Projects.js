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
  <ul>
      {projectsArray.map((project, index) =>
      <button class="btn"><div>
        <ProjectCard project={project} key={index}/></div></button>)}
  </ul>
  </div>
  </div>
        </div>
);

export default Projects;
