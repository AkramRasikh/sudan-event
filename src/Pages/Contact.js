import { membersArray } from '../members';
import MemberCard from '../Components/MemberCard';
import React from 'react';

const AboutUs = props => {
  console.log('props', props);
  return (
      <>
    <h1>Meet the committee</h1>
<ul style={{background: 'white'}}>

    <div class="row">
      <div class="column">
      <div class="card">
<div class="container">
      {membersArray.map((member, index) => <li>
      <MemberCard member={member} key={index}/></li>)}

      
</div>
  </div>
  </div>
  </div>
</ul>
</>
)
}
export default AboutUs;
