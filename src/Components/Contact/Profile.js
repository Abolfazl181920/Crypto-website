import React from 'react';

import ProfileImage from 'Assests/Profile.jpg';

const Profile = () => {
    return (
        <div className="profile">
            <img className="ProfileImage" src={ProfileImage} />
            <div className="profile_items">
                <span>Statics <br /> 33</span>
                <span>Users <br /> 66</span>
                <span>Details <br /> 99</span>
            </div>
        </div>
    )
}

export default Profile;