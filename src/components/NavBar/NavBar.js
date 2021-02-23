import React from 'react';
// import styles from './NavBar.module.css';
import { Link } from "react-router-dom";
import * as route from '../../routes/routes';

export const NavBar = () => {
    return (
        <nav>
            <ul>
                {/* <li>
                    <NavLink active={styles["NavBar-activeLink"]} to="/">Burg</NavLink>
                </li> */}
                <li>
                    <Link exact to={route.LANDING}>Home</Link>
                </li>
                <li>
                    <Link exact to={route.MENU}>Menu</Link>
                </li>
                <li>
                    <Link exact to={route.PROFILE}>My Profile</Link>
                </li>
            </ul>
        </nav>
    )
}
