import React from 'react';

import Coin from 'Assests/Swim.webm';

const Content = () => {
    return (
        <div className="content">
            <video className="coin_video1" autoplay="autoplay" muted loop>
                <source src={Coin} />
            </video>

            <video className="coin_video2" autoplay="autoplay" muted loop>
                <source src={Coin} />
            </video>

            <video className="coin_video3" autoplay="autoplay" muted loop>
                <source src={Coin} />
            </video>

            <div className="content_description">
                <p>Create <br /> payment <br /> requests</p>
                <p className="payment">Make a simple payment link in 5 seconds.</p>
                <p className="request">Use our powerful features to customize your request.</p>
            </div>
        </div>
    )
}

export default Content;