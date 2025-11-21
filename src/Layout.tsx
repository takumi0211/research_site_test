import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const Layout: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            <main style={{ flex: 1, paddingBottom: 'var(--spacing-xxl)' }}>
                <Outlet />
            </main>

            <footer style={{
                borderTop: '1px solid var(--border-light)',
                padding: 'var(--spacing-lg) 0',
                textAlign: 'center',
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-secondary)',
                fontSize: '12px'
            }}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Takumi Shioda. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
