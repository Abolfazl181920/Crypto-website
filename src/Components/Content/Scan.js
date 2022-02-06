import React, { useState } from 'react';

const Scan = () => {

    const [ cursorX, setCursorX ] = useState();
    const [ cursorY, setCursorY ] = useState();

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX);
        setCursorY(e.pageY);
    });

    return (
        <>
            <h3 className="scan">Scan <br /> & Go</h3>
            <p className="scan_description">Transform your payment link into a QR code that customers can scan with their <br /> phone to pay.</p>

            <div className="cursor"
                style={{ left: cursorX + 'px', top: cursorY + 'px' }}>
            </div>
        </>
    )
}

export default Scan;