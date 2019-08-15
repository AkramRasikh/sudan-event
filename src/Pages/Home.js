import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = props => (
  <div>
  <br/>
<h1><b>Sudan UK</b></h1>
<p>Hi, we are Sudan UK 👋🏾</p>
<p>
 A youth committe who have united to bridge the gaps between the diaspora in the UK, aswell as honing into our own varied skillsets to help unite us all in our aim to build a new Sudan. <br/>
                <br/>
                <img src={require('../Images/sudanuklogoo.jpg')}/>
                </p>

<NavLink to='/contact' exact><p>Meet our youth committee</p></NavLink>

</div>
);

export default Home;
