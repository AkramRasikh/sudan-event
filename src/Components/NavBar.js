import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosInformationCircle, IoIosHome, IoIosListBox , IoIosPerson, IoIosGlobe, IoMdCalendar} from "react-icons/io";

function Navbar() {
  return (
<div>
<div id="nav">
<ul>
  <li><NavLink to='/contact' exact><IoIosPerson/>Committee</NavLink></li>
  <li><NavLink to='/events' exact><IoMdCalendar/>Events</NavLink></li>
  <li><NavLink to='/projects' exact><IoIosGlobe/>Now</NavLink></li>
<div class="float">
  <li><NavLink to='/' exact><IoIosHome/>SudanUK</NavLink></li>
</div>
 </ul>
 </div>
 </div>
  );
}

export default Navbar;
