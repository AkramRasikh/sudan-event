import React from 'react';
import Navbar from './NavBar';

const Layout = props => (
    <>
        <div style={{ padding: 40, backgroundColor: 'blue' }}>
            <header>
                Sudan Website
                <Navbar />
            </header>
            {props.children}
            <footer>
                This is a footer
            </footer>
        </div>
    </>
)


export default Layout;