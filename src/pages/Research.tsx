import React from 'react';

const Research: React.FC = () => {
    const projects = [
        {
            title: "Project Alpha",
            description: "An investigation into the usability of brutalist interfaces.",
        },
        {
            title: "Project Beta",
            description: "Developing a new framework for accessible web design.",
        },
        {
            title: "Project Gamma",
            description: "A study on color theory in modern web applications.",
        }
    ];

    return (
        <div className="container">
            <h1 style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>Research & Projects</h1>
            <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
                {projects.map((project, index) => (
                    <div key={index} className="card">
                        <h2 style={{ fontSize: '24px', marginBottom: 'var(--spacing-sm)' }}>{project.title}</h2>
                        <p style={{ marginBottom: 'var(--spacing-md)' }}>{project.description}</p>
                        <button style={{ padding: '8px 16px', fontSize: '14px' }}>Read More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Research;
