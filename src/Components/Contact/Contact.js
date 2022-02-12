import React from 'react';

import Header from 'Components/Header/Header';
import Profile from './Profile';
import Bar from 'Components/Contact/Bar';

const Contact = () => {
    return (
        <div className="contact">
            <Header />
            <Profile />
            <Bar />
        </div>
    )
}

export default Contact;