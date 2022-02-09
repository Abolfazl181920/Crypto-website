import React from 'react';

const List = () => {
    return (
        <div className="dropdown">
            <button className="drop_button">Dropdown</button>
            <div className="dropdown_content">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}

export default List;