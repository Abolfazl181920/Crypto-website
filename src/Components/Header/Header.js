import React from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const Header = () => {

    const { t, i18n } = useTranslation();

    return (
        <header className="header">
            <div className="header_links" style={{ zIndex: '10', position: 'fixed' }}>
                <Link to="/faq" style={{ textDecoration: 'none' }}>FAQ</Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>contact</Link>
                <Link to="/signup">
                    <button>{t ('Create account') }</button>
                </Link>
            </div>
            <Link to="/">
                <h2 style={{ position: 'fixed', zIndex: '10' }}>Crypto</h2>
            </Link>
        </header>
    );
}

export default Header;