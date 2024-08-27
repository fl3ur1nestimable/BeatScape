import React from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import "./Profile.css";

function Profile({user}) {

    const [changePwd, setChangePwd] = useState(false);
    const [newPwd, setNewPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [name, setName] = useState(user.name);
    const [profilePic, setProfilePic] = useState("");

    const handleSave = () => {
        close();
        
    }

    const changeImage = () => {

    }

    const open = () => {
        document.querySelector('.profile-change').showModal();
    }

    const close = () => {
        document.querySelector('.profile-change').close();
    }

    return(
        <div className="profile">
            <div className="profile-content">
                <h1>Profile</h1>
                <div className="profile-header">
                    <img src={user.profilePic? user.profilePic : "default-profile.png"} alt="profile image" />
                    <div className="user-header">
                        <h2>{user.name}</h2>
                        <span> Joined : {user.joinDate}</span>
                    </div>
                </div>
                <p>Email : {user.email}</p>
                <button className="modify-btn" onClick={() => open()}>Modify profile</button>
                
                <dialog className="profile-change">
                    <div className="dialog-header">
                        <h2>Modify Profile</h2>
                        <button onClick={() => close()}><IoClose/></button>
                    </div>
                    <div className="dialog-content">
                        <label>Name</label>
                        <input type="text" placeholder="Name" defaultValue={user.name} maxLength="20" onChange={(e) => setName(e.target.value)} />
                        {!changePwd && <button onClick={() => setChangePwd(true)}>Change Password</button>}
                        {changePwd &&
                            <div className="pwd">
                                <input type="password" placeholder="New Password" onChange={(e) => setNewPwd(e.target.value)} />
                                <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPwd(e.target.value)} />
                                <button className="cancel" onClick={() => setChangePwd(false)}>Cancel</button>
                            </div>
                        }
                        <label>Profile Picture</label>
                        <input type="file" accept="image/*" />
                        <button onClick={() => handleSave()}>Save</button>
                    </div>
                </dialog>
            </div>
        </div>
    );

}

export default Profile;