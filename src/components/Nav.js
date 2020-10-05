import React from 'react';
import { NavLink, HashRouter, Link } from 'react-router-dom';

//nav bar 
const Nav = (props) => (
    <HashRouter>
        <nav>
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
            </ul>
        </nav>
    </HashRouter>
);

export default Nav;