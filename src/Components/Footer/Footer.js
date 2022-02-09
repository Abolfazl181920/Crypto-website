import React from 'react';

import List from 'Components/Footer/List';

import NavAnim from 'Assests/loop.webm';

const Footer = () => {
    return (
        <footer>
            <h2>Start for <br /> free today</h2>
            <button>Login now</button>
            <video className="footer_video" autoplay="autoplay" muted loop>
                <source src={NavAnim} />
            </video>
            <span>Create by Abolfazl369 with Love.</span>
            <List />
        </footer>
    );
}

export default Footer;