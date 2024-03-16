import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={`${styles.nav} ${styles.p3}`}> {/* Use backticks to concatenate multiple class names */}
            <div className={styles.container}>
                <div className={`${styles.row}${styles.p3}`}>
                    <div className={`${styles.col} ${styles.p3}`}>
                        <nav>
                            <ul className={`${styles.nav} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}>
                                <li className={`${styles.navItem} ${styles.textStart}`}>
                                    <h1>Hi, I am Rahul Binu</h1>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="#about">About</a>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="#portfolio">Portfolio</a>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
