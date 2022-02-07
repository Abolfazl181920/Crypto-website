import React from 'react';

import MethodBanner from 'Assests/Plats.png';

const Methods = () => {
    return (
        <div className="methods">
            <h3>All major <br /> payment methods</h3>
            <p>Plink works with Mollie. Your customer can complete the payment requests using <br /> all major payment methods, like creditcard or iDEAL.</p>
            <img src={MethodBanner} className="method_banner" />
        </div>
    );
}

export default Methods;