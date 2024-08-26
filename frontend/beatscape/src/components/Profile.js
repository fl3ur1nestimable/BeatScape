import React from "react";
import { useState } from "react";
import "./Profile.css";

function Profile({user ,onSave}) {

    const [changePwd, setChangePwd] = useState(false);
    const [newPwd, setNewPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [profilePic, setProfilePic] = useState("");

    const handleSave = () => {
        onSave();
    }

    const changeImage = () => {

    }

    return(
        <div className="profile">
            <div className="profile-content">
                <div className="profile-side">
                    <img src={user.profilePic? user.profilePic : "default-profile.png"} alt="profile image" />
                    <span> Joined : {user.joinDate}</span>
                </div>
                <div className="profile-info">
                    <input type="text" defaultValue={user.name}  maxLength="20"/>
                    <input type="text" defaultValue={user.email} />
                    {!changePwd&& 
                        <button className="change-pwd" onClick={() => setChangePwd(true)}>Change Password</button>
                    }
                    {changePwd && 
                        <div className="pwd-inputs">
                            <input type="password" placeholder="New Password" />
                            <input type="password" placeholder="Confirm Password" />
                            <button className="cancel" onClick={() => setChangePwd(false)}>Cancel</button>
                        
                        </div>
                    }   
                    <button className="save">Save</button>
                </div>
            </div>
        </div>
    );

}

export default Profile;