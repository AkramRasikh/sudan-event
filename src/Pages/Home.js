import React from 'react';
import { NavLink } from 'react-router-dom';


const Home = props => (
  <div>
  <br/>
<h1><b>Hi, we are Sudan UK 👋🏾</b></h1>
<p></p>

<p align="center">
 A youth committe who have united to bridge the gaps between the diaspora in the UK, aswell as honing into our own varied skillsets to help unite us all in our aim to build a new Sudan. <br/>
                <br/>
                </p>

<NavLink to='/contact' exact><p align="center">Meet our youth committee</p></NavLink>
<img src={require('../Images/sudanuklogoo.jpg')} width="100%"/>

</div>
);

export default Home;
