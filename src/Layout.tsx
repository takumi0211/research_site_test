import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <header style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backgroundColor: 'var(--bg-primary)',
                borderBottom: '1px solid transparent', // Minimal border
                padding: 'var(--spacing-md) 0'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                        OpenResearch
                    </Link>
                    <nav>
                        <ul style={{ display: 'flex', listStyle: 'none', gap: 'var(--spacing-lg)' }}>
                            <li><Link to="/research" style={{ fontSize: '0.95rem', fontWeight: 500 }}>Research</Link></li>
                            <li><Link to="/about" style={{ fontSize: '0.95rem', fontWeight: 500 }}>About</Link></li>
                            <li><Link to="/contact" style={{ fontSize: '0.95rem', fontWeight: 500 }}>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main style={{ flex: 1 }}>
                <Outlet />
            </main>

            <footer style={{
                backgroundColor: 'var(--text-main)',
                color: '#fff',
                padding: 'var(--spacing-xxl) 0',
                marginTop: 'var(--spacing-xxl)'
            }}>
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 'var(--spacing-xl)' }}>
                        <div>
                            <h4 style={{ color: '#fff', marginBottom: 'var(--spacing-md)' }}>Research</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                                <li><Link to="/research" style={{ color: '#999' }}>Overview</Link></li>
                                <li><Link to="/research" style={{ color: '#999' }}>Index</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ color: '#fff', marginBottom: 'var(--spacing-md)' }}>Company</h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                                <li><Link to="/about" style={{ color: '#999' }}>About</Link></li>
                                <li><Link to="/contact" style={{ color: '#999' }}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ marginTop: 'var(--spacing-xxl)', borderTop: '1px solid #333', paddingTop: 'var(--spacing-lg)', display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '0.875rem' }}>
                        <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} OpenResearch. All rights reserved.</p>
                        <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                            <span>Privacy Policy</span>
                            <span>Terms of Use</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
