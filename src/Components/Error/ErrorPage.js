import React from 'react';

import Error404 from 'Assests/404.png';

const ErrorPage = () => {
    return(
        <>
            <img src={Error404} className="error404" />
            <button className="redirect_button">Take me back to HomePage</button>
        </>
    );
}

export default ErrorPage;