import React from 'react';

import Request from 'Assests/Att.webm';

const Requests = () => {
    return (
        <section>
            <video className="request_video" autoplay="autoplay" muted loop>
                <source src={Request} />
            </video>
            <h3>Easily <br /> send requests <br /> via e-mail or SMS</h3>
            <p>... or copy-paste the link</p>
        </section>
    );
}

export default Requests;