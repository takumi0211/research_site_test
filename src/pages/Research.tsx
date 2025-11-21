import React from 'react';

const Research: React.FC = () => {
    const projects = [
        {
            title: "Project Alpha",
            description: "An investigation into the usability of brutalist interfaces.",
            color: "var(--accent-pink)"
        },
        {
            title: "Project Beta",
            description: "Developing a new framework for accessible web design.",
            color: "var(--accent-blue)"
        },
        {
            title: "Project Gamma",
            description: "A study on color theory in modern web applications.",
            color: "var(--accent-yellow)"
        }
    ];

    return (
        <div className="container">
            <h1 style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>Research & Projects</h1>
            <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
                {projects.map((project, index) => (
                    <div key={index} className="card" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: project.color,
                        transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`
                    }}>
                        <h2 style={{ borderBottom: 'var(--border-thick)', paddingBottom: 'var(--spacing-sm)' }}>{project.title}</h2>
                        <p style={{ fontSize: '1.2rem', marginTop: 'var(--spacing-md)' }}>{project.description}</p>
                        <button style={{ alignSelf: 'flex-start', marginTop: 'var(--spacing-md)', backgroundColor: 'var(--bg-secondary)' }}>Read More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Research;
