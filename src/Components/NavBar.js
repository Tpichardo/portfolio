import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css'

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
                </ul>
            </nav>
        </header>);
}

export default NavBar;