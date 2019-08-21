import React from 'react'
import { NavLink } from 'react-router-dom';

const MemberCard = ({ member }) => {
   const {
     role,
     name,
     description,
     quote,
     contact,
     pic,
   } = member;

  return (
    <li>
      <img src={pic} width="100%"/>
      <h4>{name}</h4>
      <p align="left"><i><div class="blue">{role}</div></i></p>
      <p align="left">{quote}</p>

      <br/>
    </li>
)}

export default MemberCard;
