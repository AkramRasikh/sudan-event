import React from 'react'

const MemberCard = ({ member }) => {
   const {
     role,
     name,
     description,
     quote,
     contact,
     insta,
   } = member;

  return (
    <li>
      <h4>{name}</h4>
      <p align="left"><i><div class="blue">{role}</div></i></p>
      <p align="left">{quote}</p>
      
      <br/>
    </li>
)}

export default MemberCard;
