import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css'

const NavBar = () => {
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
                <Link className="hamburger_menu hide-for-desktop">
                    <span className="header_span"></span>
                    <span className="header_span"></span>
                    <span className="header_span"></span>
                </Link>
                <ul className='primary-nav hide-for-mobile'>
                    <li>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="nav-item"
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
                        >
                            Contact
                        </Link>
                    </li>
                    <li onClick={() => window.open('https://drive.google.com/file/d/1_udUkEmVZC4Sg7m-ZSx6hiWNhy5-Xj2b/view?usp=sharing')}
                        className="nav-item resume"
                    >
                        Resume
                    </li>
                </ul>
            </nav>
        </header>);
}

export default NavBar;