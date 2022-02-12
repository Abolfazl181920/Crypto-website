import React from 'react';

import NavAnim from 'Assests/loop.webm';

const Anim = () => {
    return (
        <video className="fullscreen-video" id="myVideo" autoplay="autoplay" muted loop>
            <source src={NavAnim} />
        </video>
    )
}

export default Anim;