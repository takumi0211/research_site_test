import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="container">
            <section className="hero-section">
                <h1 className="hero-title">RESEARCH & DESIGN</h1>
                <p className="hero-subtitle">
                    Exploring the intersection of technology, humanity, and brutal aesthetics.
                </p>
                <div className="hero-buttons">
                    <Link to="/research">
                        <button className="hero-btn">View Research</button>
                    </Link>
                    <Link to="/about">
                        <button className="hero-btn" style={{ backgroundColor: 'var(--bg-secondary)' }}>About Me</button>
                    </Link>
                </div>
            </section>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-lg)' }}>
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
