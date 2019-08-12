import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <ul>
      <li><NavLink to='/' exact>Home</NavLink></li>
      <li><NavLink to='/events' exact>Events</NavLink></li>
      <li><NavLink to='/about-us' exact>Contact</NavLink></li>
<<<<<<< HEAD
      <li><NavLink to='/contact' exact>About</NavLink></li>
=======
      <li><NavLink to='/about-us' exact>About</NavLink></li>
>>>>>>> 0af4d49f54b1cb1a20b0c86f050dba3490574bf0
    </ul>
  );
}

export default Navbar;
