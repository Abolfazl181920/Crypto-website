import React from 'react';

import Profile from 'Assests/Profile.jpg';
import Profile2 from 'Assests/Profile2.jpg';
import Profile3 from 'Assests/Profile3.jpg';
import Profile4 from 'Assests/Profile4.jpg';

const ImageSource = [
    { source: Profile, id:1 },
    { source: Profile2, id:2 },
    { source: Profile3, id:3 },
    { source: Profile4, id:4 }
]

const Members = () => {
    return (
        <div>
            {
                ImageSource.map(({ source, id }) => {
                    return <img className="profile_img" src={source} key={id} />
                })
            }
            <button className="profile_img_button">Show All</button>
        </div>
    )
}

export default Members;