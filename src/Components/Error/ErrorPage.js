import React from 'react';
import { useNavigate, Router } from 'react-router-dom';

import Error404 from 'Assests/404.png';

const ErrorPage = () => {

    let navigate = useNavigate();

    const handleNavigate = () => {
        if (window.history.length > 1 && document.referrer.includes(window.location.host) !== 1) {
            navigate(-1);
        } else {
            navigate("/");
        }
    }
    
    return(
        <>
            <img src={Error404} className="error404" />
            <button onClick={handleNavigate} className="redirect_button">Take me back to HomePage</button>
        </>
    );
}

export default ErrorPage;