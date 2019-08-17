import React from 'react';
import { NavLink } from 'react-router-dom';


const Home = props => (
  <div class="row">
  <div class="column">
<h2 align="left"><b>Sudan UK</b></h2>
<h3>British Sudanese Youth Committee</h3>
<p></p>
<p align="left">
 A youth committe who have united to bridge the gaps between the diaspora in the UK, aswell as honing into our own varied skillsets to help unite us all in our aim to build a new Sudan. <br/>
                <br/>
                </p>

<NavLink to='/contact' exact><p align="left">Meet our youth committee</p></NavLink>
</div>
<div class="column">
<img src={require('../Images/sudanuklogoo.jpg')} align="right" width="400" height="200"/>

</div>
</div>


);

export default Home;
