import React from 'react';
import { Wave } from 'react-animated-text';

const Home = props => (
  <div class='missionStatement'>
  <br/>
<h1><b>Sudan UK</b></h1>

  <br/>
  <p><Wave text="Hi, we are Sudan UK" speed='17' /> 👋🏾</p>
<br/><br/>
<p>
 A youth committe who have united to bridge the gaps between the diaspora in the UK, aswell as honing into our own varied skillsets to help unite us all in our aim to build a new Sudan. <br/>
                <br/>

                <img src={require('../Images/sudanuklogoo.jpg')}/>

                </p>
</div>
);

export default Home;
