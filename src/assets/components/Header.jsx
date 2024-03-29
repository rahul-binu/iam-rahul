import React from 'react';
import styles from '../styles/Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigateTo = useNavigate();

    function handleHomeClick() {
        navigateTo('/');
    }

    function handleContactClick(){
        navigateTo('/contact')
    }

    return (
        <header className={`${styles.nav} ${styles.p3} ${styles.fixedTop}`}> {/* Use backticks to concatenate multiple class names */}
            <div className={styles.container}>
                <div className={`${styles.row}${styles.p3}`}>
                    <div className={`${styles.col} ${styles.p3}`}>
                        <nav>
                            <ul className={`${styles.nav} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}>
                                <li className={`${styles.navItem} ${styles.textStart}`}>
                                    <h1 onClick={handleHomeClick}>Hi, I am Rahul Binu</h1>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="">About</a>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="">Portfolio</a>
                                </li>
                                <li className={styles.navItem} onClick={handleContactClick}>
                                    <a href="">Contact</a>
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
