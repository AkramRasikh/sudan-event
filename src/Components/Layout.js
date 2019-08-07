import React from 'react';
import Navbar from './NavBar';

const Layout = props => (
    <>
        <div style={{ padding: 40, backgroundColor: 'blue' }}>
            <header style={{ background: 'green' }}>
                Sudan Website
                <Navbar />
            </header>
            <div style={{ padding: 20, background: 'white' }}>
                {props.children}
            </div>
            <footer style={{ background: 'yellow' }}>
                This is a footer
            </footer>
        </div>
    </>
)


export default Layout;