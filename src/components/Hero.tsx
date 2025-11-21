import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import heroBg from '../assets/hero_bg.png';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.bgWrapper}>
                <img src={heroBg} alt="Abstract Background" className={styles.bgImage} />
            </div>
            <div className={`container ${styles.contentContainer}`}>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Exploring the <br />
                    <span className={styles.highlight}>Future of</span> <br />
                    Interaction
                </motion.h1>
                <motion.div
                    className={styles.meta}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <p>Graduation Research 2025</p>
                    <p>Takumi Shioda</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
