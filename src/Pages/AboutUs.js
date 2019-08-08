import React from 'react';
import { membersArray } from '../members';
import MemberCard from '../Components/MemberCard';

const AboutUs = props => (
    <div>
    <h1>Meet the committee</h1>

  <ul>
      {membersArray.map((member, index) => <MemberCard member={member} key={index} />)}
  </ul>


</div>
);


export default AboutUs;
