import React from 'react';

import Request from 'Assests/Att.webm';

const Requests = () => {
    return (
        <section>
            <video className="request_video" autoplay="autoplay" muted loop>
                <source src={Request} />
            </video>
        </section>
    );
}

export default Requests;