import React from 'react';
import Navbar from './NavBar';
import Slideshow from './Slideshow';
import { SocialIcon } from 'react-social-icons';
import { NavLink } from 'react-router-dom';

//header image links to home
const Layout = props => (
    <>
        <div style={{ padding: 40, background: '#E6E6FA' }}>
            <header style={{ background: '#E6E6FA'}}>
            <NavLink to='/' exact>  <img src={require('../Images/sudanuklogoo.jpg')}/></NavLink>
              <Navbar />
                <Slideshow/>
            </header>
            <div style={{ padding: 20, background: '#E0EEEE' }}>
                {props.children}
            </div>
            <div style={{ padding: 20, background: '#E0EEEE' }}>
            <footer>
            <SocialIcon url="https://mail.google.com/mail/u/1/?tab=wm&ogbl#inbox?compose=CllgCJZfSDRnNCQFNdhrcXdDTZZNHBhzqkgxtjdRBlkgbkNKgCCKJRHBtgKmCzXXgVzXvmJglkL"/>
            <SocialIcon url="http://instagram.com/sudanuk_" />
            <SocialIcon url="https://www.facebook.com/Sudanuk_-112774156737439/?__tn__=%2Cd%2CP-R&eid=ARDGY6_fdoxU-qmh387l6_ibFHrPziPIEawvq965e6mvKKCJXW2by16Okab6cZc1ft0bJ9S_6xbYNmvH" />
            </footer>
            </div>
        </div>
    </>
)


export default Layout;
