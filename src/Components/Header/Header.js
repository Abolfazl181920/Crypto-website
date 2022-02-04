import React from 'react';

import NavAnim from 'Assests/loop.webm';

const Header = () => {
    return (
        <header className="header">
            <h2 style={{ position: 'absolute', zIndex: '10' }}>something</h2>
            <video className="fullscreen-video" id="myVideo" autoplay="autoplay" muted loop>
                <source src={NavAnim} />
            </video>
        </header>
    );
}

export default Header;