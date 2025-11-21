import React from 'react';
import Section from '../components/Section';

const Contact: React.FC = () => {
    return (
        <div className="container" style={{ maxWidth: '600px' }}>
            <Section title="Get in Touch">
                <p style={{ marginBottom: 'var(--spacing-lg)' }}>
                    Have a question or want to work together? Send me a message.
                </p>

                <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontWeight: '600', marginBottom: 'var(--spacing-xs)', fontSize: '14px' }}>Name</label>
                        <input type="text" style={{
                            padding: '12px',
                            border: '1px solid var(--border-light)',
                            borderRadius: 'var(--radius-md)',
                            fontFamily: 'inherit',
                            fontSize: '16px',
                            backgroundColor: 'var(--bg-primary)'
                        }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontWeight: '600', marginBottom: 'var(--spacing-xs)', fontSize: '14px' }}>Email</label>
                        <input type="email" style={{
                            padding: '12px',
                            border: '1px solid var(--border-light)',
                            borderRadius: 'var(--radius-md)',
                            fontFamily: 'inherit',
                            fontSize: '16px',
                            backgroundColor: 'var(--bg-primary)'
                        }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ fontWeight: '600', marginBottom: 'var(--spacing-xs)', fontSize: '14px' }}>Message</label>
                        <textarea rows={5} style={{
                            padding: '12px',
                            border: '1px solid var(--border-light)',
                            borderRadius: 'var(--radius-md)',
                            fontFamily: 'inherit',
                            fontSize: '16px',
                            backgroundColor: 'var(--bg-primary)',
                            resize: 'vertical'
                        }} />
                    </div>

                    <button type="submit" style={{ marginTop: 'var(--spacing-md)', width: '100%' }}>Send Message</button>
                </form>
            </Section>
        </div>
    );
};

export default Contact;
