import React, { Component } from 'react';
import ResponsiveMenu from 'react-responsive-navbar';

import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <ResponsiveMenu
        menuOpenButton={<div />}
        menuCloseButton={<div />}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
    <ul>
      <li><NavLink to='/events' exact>Events</NavLink></li>
      <li><NavLink to='/contact' exact>Initiatives</NavLink></li>
      <li><NavLink to='/about-us' exact>About</NavLink></li>
      <li><NavLink to='/contact' exact>Contact</NavLink></li>
    </ul>}/>

  );
}

export default Navbar;
