import React from 'react';
import { Link } from 'react-scroll';
import { useState } from 'react';
import classNames from 'classnames';
import NavLinks from './NavLinks';

const MobileNav = () => {
    const [isOpen, setOpen] = useState(false);

    const active = classNames('burgerMenu', {
        open: isOpen,
    });
    return (
        <header className='mobileNav'>
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
                <div className={active} onClick={() => setOpen(!isOpen)}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
                {isOpen && <NavLinks />}
            </nav>
        </header>
    )
};

export default MobileNav;