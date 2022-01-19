import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <h1 className="logo">TP</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills-tools">Skills|Tools</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;