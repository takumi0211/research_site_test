import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className }) => {
    return (
        <section id={id} className={`${styles.section} ${className || ''}`}>
            <div className="container">
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;
