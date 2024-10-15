import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import "../Styles/Profile.css";

interface ProfileProps {
    user: {
      name: string;
      email: string;
      joinDate: string;
      profilePic: string;
    };
    onSave: () => void; 
}

const Profile: React.FC<ProfileProps> = ({ user, onSave }) => {

    const [changePwd, setChangePwd] = useState(false);


    const handleSave = () => {
        setChangePwd(false);
        close();
        onSave();
    }

    const open = () => {
        const dialog = document.querySelector('.profile-change') as HTMLDialogElement;
        dialog.showModal();
    }

    const close = () => {
        setChangePwd(false);
        const dialog = document.querySelector('.profile-change') as HTMLDialogElement;
        dialog.close();
    }

    return(
        <div className="profile">
            <div className="profile-content">
                <h1>Profile</h1>
                <div className="profile-header">
                    <img 
                        src="logo fraise.png" 
                        alt="profile image" 
                        loading="lazy"
                    />
                    <div className="user-header">
                        <h2>{user.name}</h2>
                        <span>Joined : {user.joinDate}</span>
                    </div>
                </div>
                <p>Email: {user.email}</p>
                <button className="modify-btn" onClick={() => open()}>Modify profile</button>
                
                <dialog className="profile-change">
                    <div className="dialog-header">
                        <h2>Modify Profile</h2>
                        <button onClick={() => close()}><IoClose/></button>
                    </div>
                    <div className="dialog-content">
                        <label>Name</label>
                        <input type="text" placeholder="Name" value={user.name} maxLength={20} />
                        {!changePwd && <button onClick={() => setChangePwd(true)}>Change Password</button>}
                        {changePwd &&
                            <div className="pwd">
                                <input type="password" placeholder="New Password" />
                                <input type="password" placeholder="Confirm Password"  />
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
