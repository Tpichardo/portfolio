import React from 'react';
import { Link } from 'react-scroll';
import { useState } from 'react';
import classNames from 'classnames';
import NavLinks from './NavLinks';

const MobileNav = () => {
    const [isOpen, setOpen] = useState(false);

    //Appends the open class to burgerMenu when isOpen is true
    const active = classNames('burgerMenu', {
        open: isOpen,
    });

    // function to close burgerMenu after link is selected
    const closeBurgerMenu = () => setOpen(false);

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
                {isOpen && <NavLinks isMobile={true} closeBurgerMenu={closeBurgerMenu} />}
            </nav>
        </header>
    )
};

export default MobileNav;