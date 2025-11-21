import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? { backgroundColor: 'var(--accent-pink)' } : {};
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <header style={{
                borderBottom: 'var(--border-thick)',
                padding: 'var(--spacing-md)',
                backgroundColor: 'var(--accent-yellow)',
                position: 'sticky',
                top: 0,
                zIndex: 100
            }}>
                <div className="container header-container">
                    <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase' }}>
                        Takumi Shioda
                    </Link>
                    <nav className="nav-menu">
                        <Link to="/" style={{ ...navLinkStyle, ...isActive('/') }}>Home</Link>
                        <Link to="/about" style={{ ...navLinkStyle, ...isActive('/about') }}>About</Link>
                        <Link to="/research" style={{ ...navLinkStyle, ...isActive('/research') }}>Research</Link>
                        <Link to="/contact" style={{ ...navLinkStyle, ...isActive('/contact') }}>Contact</Link>
                    </nav>
                </div>
            </header>

            <main style={{ flex: 1, padding: 'var(--spacing-lg) 0' }}>
                <Outlet />
            </main>

            <footer style={{
                borderTop: 'var(--border-thick)',
                padding: 'var(--spacing-lg)',
                textAlign: 'center',
                backgroundColor: 'var(--text-main)',
                color: 'var(--bg-primary)'
            }}>
                <p>&copy; {new Date().getFullYear()} Takumi Shioda. All rights reserved.</p>
            </footer>
        </div>
    );
};

const navLinkStyle: React.CSSProperties = {
    border: 'var(--border-thick)',
    padding: '0.5rem 1rem',
    backgroundColor: 'var(--bg-secondary)',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    boxShadow: 'var(--shadow-hard)',
    transition: 'all 0.1s ease-in-out',
    color: 'var(--text-main)'
};

export default Layout;
