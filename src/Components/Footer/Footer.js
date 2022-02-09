import React from 'react';

import NavAnim from 'Assests/loop.webm';

const Footer = () => {
    return (
        <footer>
            <h2>Start for free today</h2>
            <button>Login now</button>
            <video className="footer_video" autoplay="autoplay" muted loop>
                <source src={NavAnim} />
            </video>
        </footer>
    )
}

export default Footer;