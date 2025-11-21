import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="container" style={{ maxWidth: '800px' }}>
            <div className="card" style={{ backgroundColor: 'var(--accent-blue)' }}>
                <h1>Get in Touch</h1>
                <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                    Have a question or want to work together? Send me a message.
                </p>

                <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>Name</label>
                        <input type="text" style={{
                            padding: 'var(--spacing-md)',
                            border: 'var(--border-thick)',
                            boxShadow: 'var(--shadow-hard)',
                            fontFamily: 'inherit'
                        }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>Email</label>
                        <input type="email" style={{
                            padding: 'var(--spacing-md)',
                            border: 'var(--border-thick)',
                            boxShadow: 'var(--shadow-hard)',
                            fontFamily: 'inherit'
                        }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontWeight: 'bold', marginBottom: 'var(--spacing-sm)' }}>Message</label>
                        <textarea rows={5} style={{
                            padding: 'var(--spacing-md)',
                            border: 'var(--border-thick)',
                            boxShadow: 'var(--shadow-hard)',
                            fontFamily: 'inherit'
                        }} />
                    </div>

                    <button type="submit" style={{ marginTop: 'var(--spacing-md)', alignSelf: 'flex-start' }}>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
