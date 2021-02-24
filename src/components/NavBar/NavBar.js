import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from "react-router-dom";
import * as route from '../../routes/routes';

export const NavBar = () => {
    return (
        <nav className={styles["NavBar"]}>
            <div>
                <NavLink active={styles["NavBar-activeLink"]} to={route.LANDING}>Bourmet</NavLink>
            </div>
            <div>
                <NavLink active={styles["NavBar-activeLink"]} to={route.MENU}>Menu</NavLink>
            </div>
            <div>
                <NavLink active={styles["NavBar-activeLink"]} to={route.PROFILE}>My Profile</NavLink>
            </div>
        </nav>
    )
}
