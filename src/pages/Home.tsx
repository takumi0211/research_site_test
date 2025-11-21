import React from 'react';
import Hero from '../components/Hero';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />

            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                    <div className="card">
                        <h3>Latest Work</h3>
                        <p>Check out my most recent publication on Human-Computer Interaction.</p>
                    </div>
                    <div className="card">
                        <h3>Design Philosophy</h3>
                        <p>Focused on clarity, simplicity, and user-centric interactions.</p>
                    </div>
                    <div className="card">
                        <h3>Contact</h3>
                        <p>Interested in collaboration? Let's get in touch.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
