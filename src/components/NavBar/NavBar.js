import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from "react-router-dom";
import * as route from '../../routes/routes';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

export const NavBar = () => {
    return (
        <nav>
            <div>
                <NavLink exact activeClassName={styles["NavBar-active"]} to={route.LANDING}>Bourmet</NavLink>
                <NavLink exact activeClassName={styles["NavBar-active"]} to={route.MENU}>Menu</NavLink>
                <NavLink exact activeClassName={styles["NavBar-active"]} to={route.PROFILE}>My Profile</NavLink>
            </div>
            <div>
                <FingerprintIcon className={styles["NavBar-fingerIcon"]} />
            </div>
        </nav>
    )
}
