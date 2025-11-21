import React from 'react';

const About: React.FC = () => {
    return (
        <div className="container">
            <div className="card">
                <h1>About Me</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-md)' }}>
                    I am a researcher and designer focused on creating impactful digital experiences.
                </p>
                <div style={{
                    border: 'var(--border-thick)',
                    padding: 'var(--spacing-md)',
                    backgroundColor: 'var(--accent-green)',
                    marginBottom: 'var(--spacing-md)'
                }}>
                    <h3>Background</h3>
                    <p>
                        With a background in Computer Science and Design, I bridge the gap between technical feasibility and aesthetic excellence.
                    </p>
                </div>
                <div style={{
                    border: 'var(--border-thick)',
                    padding: 'var(--spacing-md)',
                    backgroundColor: 'var(--accent-yellow)'
                }}>
                    <h3>Skills</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>- UI/UX Design</li>
                        <li>- Frontend Development</li>
                        <li>- User Research</li>
                        <li>- Prototyping</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
