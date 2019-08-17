import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import Slideshow from './Slideshow';
import Circle from './Circle';
import { SocialIcon } from 'react-social-icons';
import { NavLink } from 'react-router-dom';
const Layout = props => (
    <>
        <Navbar />
        <br/>
            <header style={{ background: 'white'}}>
            </header>
            <div style={{ padding: 8, background: 'white'}}>
                {props.children}
            </div>
            <div style={{ padding: 8, background: 'white' }}>
          <Footer/>
            </div>
    </>
)



export default Layout;
