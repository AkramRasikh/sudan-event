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
      <h2>{name}</h2>
      <p><i>{role}</i></p>
      <p>{quote}</p>
      <br/>
    </li>
)}

export default MemberCard;
