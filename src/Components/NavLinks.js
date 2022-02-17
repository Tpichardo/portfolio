import React from 'react';
import { Link } from 'react-scroll';

const NavLinks = (props) => {
    return (
        <ul className='primary-nav'>
            <li>
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-item"
                    // closes mobile menu after a link is selected
                    onClick={() => props.isMobile && props.closeBurgerMenu()}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-item"
                    // closes mobile menu after a link is selected
                    onClick={() => props.isMobile && props.closeBurgerMenu()}
                >
                    About
                </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="skills-tools"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-item"
                    // closes mobile menu after a link is selected
                    onClick={() => props.isMobile && props.closeBurgerMenu()}
                >
                    Skills
                </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-item"
                    // closes mobile menu after a link is selected
                    onClick={() => props.isMobile && props.closeBurgerMenu()}
                >
                    Projects
                </Link >
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-item"
                    // closes mobile menu after a link is selected
                    onClick={() => props.isMobile && props.closeBurgerMenu()}
                >
                    Contact
                </Link>
            </li>
            <li onClick={() => window.open('https://drive.google.com/file/d/1-uUi7_0MC7j4FdUQoX6MuNFcQ7-HUKBF/view?usp=sharing')}
                className="nav-item resume"
            >
                Resume
            </li>
        </ul>

    )
};

export default NavLinks;