import React from 'react';

import NavAnim from 'Assests/NavAnim.mp4';

const Header = () => {
    return (
        <header className="header">
            <video autoPlay loop muted playsInline controls className="video">
                <source src={NavAnim} type="video/mp4" />
            </video>
        </header>
    );
}

export default Header;