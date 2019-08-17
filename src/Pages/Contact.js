import { membersArray } from '../members';
import MemberCard from '../Components/MemberCard';
import React from 'react';

const AboutUs = props => (
    <div>
  <ul style={{background: 'white'}}>

  <div class="a">
  <h1>Meet the committee</h1>
  </div>

      {membersArray.map((member, index) => <div class='gridElement'><li>
      <MemberCard member={member} key={index}/></li></div>)}
  </ul>
</div>
);
export default AboutUs;
