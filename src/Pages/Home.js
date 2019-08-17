import React from 'react';
import { NavLink } from 'react-router-dom';


const Home = props => (
  <div>
<div class="a">
<h1 align="left">Sudan UK</h1>
<br/>

<p>British Sudanese Youth Committee</p>
</div>
<br/>
<p></p>
<p align="left">
 We are a youth committe who have united to bridge the gaps between the diaspora in the UK, aswell as honing into our own varied skillsets to help unite us all in our aim to build a new Sudan. <br/>
                <br/>
                </p>
<NavLink to='/contact' exact><p align="left">Meet our youth committee</p></NavLink>
<img src={require('../Images/sudanuklogoo.jpg')} align="right" width="500" height="300"/>

</div>


);

export default Home;
