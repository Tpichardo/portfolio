import React from 'react';
import { Link } from 'react-scroll';
import NavLinks from './NavLinks';

const MobileNav = () => {
    return (
        <header>
            <div className="logo">
                <h1>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        TP
                    </Link>
                </h1>
            </div>
            <nav>
                <NavLinks />
            </nav>
        </header>
    )
};

export default MobileNav;