import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
  <ul>
  <li><NavLink to='/contact' exact>Contact</NavLink></li>
     <li><NavLink to='/about-us' exact>About</NavLink></li>
     <li><NavLink to='/projects' exact>Projects</NavLink></li>
       <li><NavLink to='/events' exact>Events</NavLink></li>
       <li><NavLink to='/' exact>Home</NavLink></li>

 </ul>
  );
}

export default Navbar;
