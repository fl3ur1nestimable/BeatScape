import React from "react";
import { useState } from "react";
import "./Login.css";
import TitleBar from "./components/TitleBar.js";

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [error, setError] = useState('');
    

    const handleSignup = () => {
        if(!name || !email || !password || !confirmPwd){
            setError('All fields are required');
            return;
        }
        if(password !== confirmPwd){
            setError('Passwords do not match');
            return;
        }
        setError('');
    }

    const handleLogin = () => {
        if(!email || !password){
            setError('All fields are required');
            return;
        }
        setError('');
    }

    const swap = () => {
        setIsLogin(!isLogin);
        setError('');
    }



    return (
        <div className="login">
            <div className="login-header">
                <h1>Beatscape</h1>
                <TitleBar />
            </div>
            <div className= {isLogin ? "login-image right" : "login-image left"}>
                <img src="logo512.png" alt="logo"/>
            </div>
            <div className="login-form">
                {isLogin ? 
                    <div className="login-login">
                        <h2>Login</h2>
                        <label>Email</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} />
                        <label>Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleLogin}>Submit</button>
                        {error && <p className="error">{error}</p>}
                        <p>Don't have an account? <span onClick={() => swap()}>Sign up</span></p>
                    </div> :
                    <div className="login-signup">
                        <h2>Sign Up</h2>
                        <label>Name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} />
                        <label>Email</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} />
                        <label>Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                        <label>Confirm Password</label>
                        <input type="password" onChange={(e) => setConfirmPwd(e.target.value)} />
                        <button onClick={handleSignup}>Sign Up</button>
                        {error && <p className="error">{error}</p>}
                        <p>Already have an account? <span onClick={() => swap()}>Login</span></p>
                    </div>
                }
            </div>
        </div>
    );

}

export default Login;

