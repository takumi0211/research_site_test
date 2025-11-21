import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="container">
            <section style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                marginBottom: 'var(--spacing-xl)',
                padding: 'var(--spacing-xl) 0',
                border: 'var(--border-thick)',
                backgroundColor: 'var(--accent-blue)',
                boxShadow: 'var(--shadow-hard)'
            }}>
                <h1 style={{ fontSize: '4rem', marginBottom: 'var(--spacing-md)' }}>RESEARCH & DESIGN</h1>
                <p style={{ fontSize: '1.5rem', maxWidth: '800px', marginBottom: 'var(--spacing-lg)', fontWeight: 'bold' }}>
                    Exploring the intersection of technology, humanity, and brutal aesthetics.
                </p>
                <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                    <Link to="/research">
                        <button style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>View Research</button>
                    </Link>
                    <Link to="/about">
                        <button style={{ fontSize: '1.2rem', padding: '1rem 2rem', backgroundColor: 'var(--bg-secondary)' }}>About Me</button>
                    </Link>
                </div>
            </section>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                <div className="card" style={{ backgroundColor: 'var(--accent-pink)' }}>
                    <h3>Latest Work</h3>
                    <p>Check out my most recent publication on Human-Computer Interaction.</p>
                </div>
                <div className="card" style={{ backgroundColor: 'var(--accent-green)' }}>
                    <h3>Design Philosophy</h3>
                    <p>Why Neo-Brutalism? It's honest, raw, and functional.</p>
                </div>
                <div className="card" style={{ backgroundColor: 'var(--accent-yellow)' }}>
                    <h3>Contact</h3>
                    <p>Interested in collaboration? Let's get in touch.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
