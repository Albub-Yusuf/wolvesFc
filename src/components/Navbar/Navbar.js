import React from 'react';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <div className="logo">
                <h3>Wolves FC</h3>
            </div>

            <div className="nav-link">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/my-team">My Team</a></li>
                    <li><a href="/players">Players</a></li>
                    <li><FontAwesomeIcon className="ham-menu" icon={faBars}></FontAwesomeIcon></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;