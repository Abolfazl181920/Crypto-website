import React, { useState } from 'react';

const List = () => {

    const [ showItems, setShowItems ] = useState(true);

    const showDropItems = () => {
        setShowItems(!showItems);
    }

    return (
        <div className="dropdown">
            <button onClick={showDropItems} className="drop_button">></button>
            <div className={showItems ? 'dropdown_content_true' : 'dropdown_content'}>
                <div>English</div>
                <div>Deutsch</div>
                <div>Persian</div>
            </div>
        </div>
    );
}

export default List;