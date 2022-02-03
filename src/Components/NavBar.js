import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <DesktopNav />
            <MobileNav />
        </div>
    );
}

export default NavBar;