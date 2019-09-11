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
    <li align="center">
      <img src={pic} width="400px"/>
      <h3>{name}</h3>
      <p><i>{role}</i><br/><br/>{quote}</p>
      <br/><br/>
    </li>
)}

export default MemberCard;
