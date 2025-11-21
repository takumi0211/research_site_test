import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />

            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-lg)',
                    marginBottom: 'var(--spacing-xxl)'
                }}>
                    <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: 'var(--spacing-md)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>Latest Work</h3>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Check out my most recent publication on Human-Computer Interaction.</p>
                        <Link to="/research" style={{ textDecoration: 'underline', fontSize: '0.95rem' }}>Read more</Link>
                    </div>
                    <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: 'var(--spacing-md)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>Design Philosophy</h3>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Focused on clarity, simplicity, and user-centric interactions.</p>
                        <Link to="/about" style={{ textDecoration: 'underline', fontSize: '0.95rem' }}>Learn more</Link>
                    </div>
                    <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: 'var(--spacing-md)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>Contact</h3>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Interested in collaboration? Let's get in touch.</p>
                        <Link to="/contact" style={{ textDecoration: 'underline', fontSize: '0.95rem' }}>Get in touch</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
