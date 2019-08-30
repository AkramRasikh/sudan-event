import { membersArray } from '../members';
import MemberCard from '../Components/MemberCard';
import React from 'react';

const AboutUs = props => {
  console.log('props', props);
  return (
      <>
<div class="a">
<div class="slide-down">
    <h1>Youth Committee</h1>
      <ul style={{background: '#ebf5ff'}}>
        <div>
          {membersArray.map((member, index) =>
           <li>
            <MemberCard member={member} key={index}/>
            </li>)}
          </div>
      </ul>
</div>
</div>
</>
)
}
export default AboutUs;
