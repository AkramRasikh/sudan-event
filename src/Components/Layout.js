import React from 'react';
import Navbar from './NavBar';
import Slideshow from './Slideshow';
const Layout = props => (
    <>
        <div style={{ padding: 40, backgroundColor: 'cream' }}>
            <header style={{ background: 'pink' }}>
            <h1>Sudan UK</h1>
            <Slideshow/>
                <Navbar />
            </header>
            <div style={{ padding: 20, background: 'pink' }}>
                {props.children}
            </div>
            <div style={{ padding: 20, background: 'pink' }}>
            <footer>
            <p style={{float: 'right'}}>sudanuk@gmail.com</p>
            </footer>
            </div>
        </div>
    </>
)


export default Layout;
