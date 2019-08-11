import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <ul>
      <li><NavLink to='/' exact>Home</NavLink></li>
      <li><NavLink to='/events' exact>Events</NavLink></li>
      <li><NavLink to='/about-us' exact>Contact</NavLink></li>
      <li><NavLink to='/contact' exact>About</NavLink></li>
    </ul>
  );
}

export default Navbar;
