import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <h1 className={styles.title}>
                    Exploring the <br />
                    <span className={styles.highlight}>Future of</span> <br />
                    Interaction
                </h1>
                <div className={styles.meta}>
                    <p>Graduation Research 2025</p>
                    <p>Takumi Shioda</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
