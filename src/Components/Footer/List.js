import React, { useState } from 'react';

const List = () => {

    const [ showItems, setShowItems ] = useState(true);

    const showDropItems = () => {
        setShowItems(!showItems);
    }

    return (
        <div className="dropdown">
            <button onClick={showDropItems} className="drop_button">Dropdown</button>
            <div className={showItems ? 'dropdown_content_true' : 'dropdown_content'}>
                <a>Home</a>
                <a>About</a>
                <a>Contact</a>
            </div>
        </div>
    );
}

export default List;