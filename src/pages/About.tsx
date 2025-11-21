import React from 'react';
import Section from '../components/Section';

const About: React.FC = () => {
    return (
        <div className="container">
            <Section title="About Me">
                <p style={{ fontSize: '19px', lineHeight: '1.5', marginBottom: 'var(--spacing-lg)' }}>
                    I am a researcher and designer focused on creating impactful digital experiences.
                </p>

                <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <h3 style={{ fontSize: '24px', marginBottom: 'var(--spacing-sm)' }}>Background</h3>
                    <p>
                        With a background in Computer Science and Design, I bridge the gap between technical feasibility and aesthetic excellence.
                    </p>
                </div>

                <div>
                    <h3 style={{ fontSize: '24px', marginBottom: 'var(--spacing-sm)' }}>Skills</h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--spacing-sm)' }}>
                        <li>UI/UX Design</li>
                        <li>Frontend Development</li>
                        <li>User Research</li>
                        <li>Prototyping</li>
                    </ul>
                </div>
            </Section>
        </div>
    );
};

export default About;
