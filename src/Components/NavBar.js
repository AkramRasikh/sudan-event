import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
<div>
<ul>
  <li><NavLink to='/contact' exact>Committee</NavLink></li>
  <li><NavLink to='/about-us' exact>About</NavLink></li>
  <li><NavLink to='/events' exact>Events</NavLink></li>
  <li><NavLink to='/projects' exact>Now</NavLink></li>
<div class="float">
  <li><NavLink to='/' exact>SudanUK</NavLink></li>
  </div>

 </ul>
 </div>
  );
}

export default Navbar;
