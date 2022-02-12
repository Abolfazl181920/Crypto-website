import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header_links" style={{ zIndex: '10', position: 'fixed' }}>
                <Link to="/faq" style={{ textDecoration: 'none' }}>FAQ</Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>contact</Link>
                <button>Create account</button>
            </div>
            <Link to="/">
                <h2 style={{ position: 'fixed', zIndex: '10' }}>Crypto</h2>
            </Link>
        </header>
    );
}

export default Header;