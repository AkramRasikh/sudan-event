import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosInformationCircle, IoIosHome, IoIosListBox , IoMdPerson, IoIosGlobe, IoMdCalendar} from "react-icons/io";

function Navbar() {
  return (
<div>
<ul>
  <li><NavLink to='/contact' exact><IoMdPerson/>Committee</NavLink></li>
  <li><NavLink to='/events' exact><IoMdCalendar/>Events</NavLink></li>
  <li><NavLink to='/projects' exact><IoIosGlobe/>Now</NavLink></li>
<div class="float">
  <li><NavLink to='/' exact><IoIosHome/>SudanUK</NavLink></li>

  </div>

 </ul>
 </div>
  );
}

export default Navbar;
