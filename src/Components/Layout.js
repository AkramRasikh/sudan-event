import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import Slideshow from './Slideshow';
import Circle from './Circle';
import { SocialIcon } from 'react-social-icons';
import { NavLink } from 'react-router-dom';
//header image links to home
const Layout = props => (
    <>
        <Navbar />
            <header style={{ background: 'white'}}>
            </header>
            <div style={{ padding: 0, background: 'white' }}>
                {props.children}
            </div>
            <div style={{ padding: 40, background: 'pink' }}>
          <Footer/>
            </div>

    </>
)



export default Layout;
