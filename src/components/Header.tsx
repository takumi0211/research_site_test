import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? styles.active : '';
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link to="/" className={styles.logo}>
                    Takumi Shioda
                </Link>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>
                            <Link to="/" className={`${styles.navLink} ${isActive('/')}`}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={`${styles.navLink} ${isActive('/about')}`}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/research" className={`${styles.navLink} ${isActive('/research')}`}>
                                Research
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={`${styles.navLink} ${isActive('/contact')}`}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
