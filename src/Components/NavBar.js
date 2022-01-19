import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <header>
            <h1 className="logo">
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500} >
                    TP
                </Link>
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link
                            activeClass="active"
                            to="home" spy={true}
                            smooth={true}
                            duration={500} >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="about" spy={true}
                            smooth={true}
                            duration={500} >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500}
                            to="skills-tools">
                            Skills|Tools
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500}
                            to="projects">
                            Projects
                        </Link >
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={500}
                            to="contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>);
}

export default NavBar;