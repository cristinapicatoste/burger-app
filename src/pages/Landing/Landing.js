import React from 'react';
import styles from './Landing.module.css';

export const Landing = () => {
    return (
        <div className={styles["Landing-wrap"]}>
            <div className={styles["Landing-content"]} >
                <h1>Bourmet</h1>
                <h4>The Best Gourmet Burgers</h4>
            </div>
        </div>
    )
}
