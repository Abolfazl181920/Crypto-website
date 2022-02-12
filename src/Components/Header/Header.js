import React from 'react';

import NavAnim from 'Assests/loop.webm';

const Header = () => {
    return (
        <header className="header">
            <div className="header_links" style={{ zIndex: '10', position: 'fixed' }}>
                <a href="../Faq/Faq.js">FAQ</a>
                <a href="../Contact/Contact.js">contact</a>
                <button>Create account</button>
            </div>
            <h2 style={{ position: 'fixed', zIndex: '10' }}>Crypto</h2>
            <video className="fullscreen-video" id="myVideo" autoplay="autoplay" muted loop>
                <source src={NavAnim} />
            </video>
        </header>
    );
}

export default Header;