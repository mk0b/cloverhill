import React from 'react';
import { NavLink, HashRouter, Link } from 'react-router-dom';

//nav bar 
const Nav = (props) => (
    <HashRouter>
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/contactus">Conact Us</NavLink></li>
            </ul>
        </nav>
    </HashRouter>
);

export default Nav;