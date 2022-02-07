import React, { useState } from 'react';

import QR from 'Assests/QR.png';

const Scan = () => {

    const [ cursorX, setCursorX ] = useState();
    const [ cursorY, setCursorY ] = useState();

    const [ Qr, setQr ] = useState(false);

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX);
        setCursorY(e.pageY);
    });

    const handleQR = () => {
        setQr(true);
    }
    
    return (
        <>
            <h3 className="scan">Scan <br /> & Go</h3>
            <p className="scan_description">Transform your payment link into a QR code that customers can scan with their <br /> phone to pay.</p>
            <img onMouseOver={handleQR} className={Qr ? 'QR_cover' : 'QR'} src={QR} alt="QR code" />
        </>
    );
}

export default Scan;