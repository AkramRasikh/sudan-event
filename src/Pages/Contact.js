import { membersArray } from '../members';
import MemberCard from '../Components/MemberCard';
import React from 'react';

const AboutUs = props => (
    <div>
  <ul style={{background: 'white'}}><br/><h1><b><u>Meet the committee 👋🏾 </u></b></h1>
      {membersArray.map((member, index) => <div class='gridElement'><li>
      <MemberCard member={member} key={index}/></li></div>)}
  </ul>


</div>
);
export default AboutUs;
