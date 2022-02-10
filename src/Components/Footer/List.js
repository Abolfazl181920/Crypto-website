import React, { useState } from 'react';

import Flag from 'react-world-flags';

const List = () => {

    const [ showItems, setShowItems ] = useState(false);

    const showDropItems = () => {
        setShowItems(!showItems);
    }

    return (
        <div className="dropdown">
            <button onClick={showDropItems} className="drop_button">></button>
            <div className={showItems ? 'dropdown_content_true' : 'dropdown_content'}>
                <Flag className="flag" code="irn"/>
                <Flag className="flag" code="deu" />
            </div>
        </div>
    );
}

export default List;