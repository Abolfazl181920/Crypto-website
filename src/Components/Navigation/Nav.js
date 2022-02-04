import React, { useEffect } from 'react';

import WOW from 'wowjs';

const Nav = () => {

    useEffect(() => {
        new WOW.WOW().init();
    });

    return (
        <nav>
            <p className="description">Send payment <br /> requests, get paid <br /> fast!</p>
            <p className="mini_description">86% of our payment requests get paid within 12 hours.</p>
        </nav>
    );
}

export default Nav;