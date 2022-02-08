import React from 'react';

import NavAnim from 'Assests/loop.webm';

const Footer = () => {
    return (
        <footer>
            <video className="footer_video" autoplay="autoplay" muted loop>
                <source src={NavAnim} />
            </video>
        </footer>
    )
}

export default Footer;