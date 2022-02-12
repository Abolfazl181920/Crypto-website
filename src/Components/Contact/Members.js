import React from 'react';

import ImageSource from 'Components/Contact/ImageSource.json';

import Profile from 'Assests/Profile.jpg';

const Members = () => {
    return (
        <div>         
            {
                ImageSource.map((source, id) => {
                    return <img src={source.source} key={id.id} />
                })
            }
        </div>
    )
}

export default Members;