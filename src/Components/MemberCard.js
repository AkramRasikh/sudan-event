import React from 'react'

const MemberCard = ({ member }) => {
   const {
     role,
     name,
     description,
     contact,
   } = member;

  return (
    <li>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{description}</p>
      <p>{contact}</p>
    </li>
)}

export default MemberCard;
