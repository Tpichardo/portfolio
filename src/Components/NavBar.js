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
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
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
                        >
                            Skills|Tools
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}
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
                        >
                            Contact
                        </Link>
                    </li>
                    <li onClick={() => window.open('https://drive.google.com/file/d/1_udUkEmVZC4Sg7m-ZSx6hiWNhy5-Xj2b/view?usp=sharing')}>
                        Resume
                    </li>
                </ul>
            </nav>
        </header>);
}

export default NavBar;