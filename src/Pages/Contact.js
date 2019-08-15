import { membersArray } from '../members';
import MemberCard from '../Components/MemberCard';
import React from 'react';

const AboutUs = props => (
    <div>
  <ul style={{background: '#E0EEE0'}}><br/><h1>Meet the committee 👋🏾</h1>
      {membersArray.map((member, index) => <div class='gridElement'><li>
      <MemberCard member={member} key={index}/></li></div>)}
  </ul>


</div>
);
export default AboutUs;
