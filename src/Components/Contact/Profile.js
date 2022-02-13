import React from 'react';

import ProfileImage from 'Assests/Profile.jpg';

import { DiCode } from 'react-icons/di';
import { MdOutlineMail } from 'react-icons/md';
import { MdEmojiFlags } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs'

const Profile = () => {
    return (
        <div className="profile">
            <BsThreeDotsVertical className="profile_menu" />
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