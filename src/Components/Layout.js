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
            <header style={{ background: '#FFCC01'}}>
            </header>
            <div style={{ padding: 20, background: '#08C3CC'}}>
                {props.children}
            </div>
            <div style={{ padding: 10, background: '#FFCC01' }}>
          <Footer/>
            </div>
    </>
)



export default Layout;
