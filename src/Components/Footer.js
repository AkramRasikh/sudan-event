import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div class = "footer">

    <p align="center"><img src={require('../Images/sudanuklogoo.jpg')} width="140" height="90"/></p>

 <p align="center">
<br/>
 GET SOCIAL WITH US<br/>
 <br/><SocialIcon url="http://instagram.com/sudanuk_" />
  <SocialIcon url="https://www.facebook.com/Sudanuk_-112774156737439/?__tn__=%2Cd%2CP-R&eid=ARDGY6_fdoxU-qmh387l6_ibFHrPziPIEawvq965e6mvKKCJXW2by16Okab6cZc1ft0bJ9S_6xbYNmvH" />
  <SocialIcon url="https://mail.google.com/mail/u/1/?tab=wm&ogbl#inbox?compose=CllgCJZfSDRnNCQFNdhrcXdDTZZNHBhzqkgxtjdRBlkgbkNKgCCKJRHBtgKmCzXXgVzXvmJglkL"/>
<br/><br/>
All images taken by @dunicaptures<br/>


  </p>


  <p align="center"><i>made with 💗by Sarah Elderderi </i></p>


  </div>

  );
}

export default Footer;
