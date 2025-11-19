import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.logo}>Research 2025</div>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#methodology">Methodology</a></li>
                        <li><a href="#results">Results</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
