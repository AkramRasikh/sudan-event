import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import Slideshow from './Slideshow';
import Circle from './Circle';
import { SocialIcon } from 'react-social-icons';
import { NavLink } from 'react-router-dom';
const Layout = props => (
    <>
        <Navbar/>
            <div style={{ padding: 20, background: '#ebf5ff'}}>
                {props.children}
            </div>
          <Footer/>
    </>
)



export default Layout;
