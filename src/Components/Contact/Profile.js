import React, { useState } from 'react';

import Information from 'Components/Contact/Information';

import ProfileImage from 'Assests/Profile.jpg';

import { DiCode } from 'react-icons/di';
import { MdOutlineMail } from 'react-icons/md';
import { MdEmojiFlags } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs'

const Profile = () => {

    const [showProfileInfo, setShowProfileInfo] = useState(false);

    const handleShowProfileInfo = () => {
        setShowProfileInfo(!showProfileInfo);
    }

    return (
        <div className="profile">
            <BsThreeDotsVertical onClick={handleShowProfileInfo} className="profile_menu" />
            {
                showProfileInfo ? <Information /> : null
            }
            <img className="ProfileImage" src={ProfileImage} />
            <div className="profile_items">
                <span>Statics <br /> 33</span>
                <span>Users <br /> 66</span>
                <span>Details <br /> 99</span>
            </div>
            <div className="profile_icons">
                <span>
                    <DiCode />
                </span>
                <span>
                    <MdOutlineMail />
                </span>
                <span>
                    <MdEmojiFlags />
                </span>
            </div>
        </div>
    )
}

export default Profile;