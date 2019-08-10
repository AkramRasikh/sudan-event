import React from 'react';
import { membersArray } from '../members';
import MemberCard from '../Components/MemberCard';

const AboutUs = props => (
    <div>
    <h1>Meet the committee</h1>

  <ul style={{background: 'pink'}}>
      {membersArray.map((member, index) => <div class='gridElement'><li>
      <MemberCard member={member} key={index}/></li></div>)}
  </ul>


</div>
);


export default AboutUs;
