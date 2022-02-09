import React from 'react';

const List = () => {
    return (
        <div className="dropdown">
            <button className="drop_button">Dropdown</button>
            <div className="dropdown_content">
                <a>Home</a>
                <a>About</a>
                <a>Contact</a>
            </div>
        </div>
    );
}

export default List;