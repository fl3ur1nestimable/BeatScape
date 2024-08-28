import React from "react";
import { useState } from "react";
import "./Login.css";
import TitleBar from "../Components/TitleBar";
import logo from '../../../assets/logo512.png';

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [error, setError] = useState('');

    const passwordIsStrong = (pwd : string) => {
        return pwd.length >= 8 && /[A-Z]/.test(pwd) && /[a-z]/.test(pwd) && /[0-9]/.test(pwd) && /[!@#$%^&*-_]/.test(pwd);
    }

    const validateEmail = (email : string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleSignup = () => {
        if(!name || !email || !password || !confirmPwd){
            setError('All fields are required');
            return;
        }
        if(!validateEmail(email)){
            setError('Invalid email address');
            return;
        }
        if(!passwordIsStrong(password)){
            setError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
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
        if(!validateEmail(email)){
            setError('Invalid email address');
            return;
        }
        setError('');
    }

    const swap = () => {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPwd('');
        setIsLogin(!isLogin);
        setError('');
        //empty all fields
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.value = '';
        });
    }


    return (
        <div className="login">
            <div className="login-header">
                <h1>Beatscape</h1>
                <TitleBar />
            </div>
            <div className={isLogin ? "login-image right" : "login-image left"}>
            <img src={logo} alt="logo" />
            <svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
                <path id="curve" d="
                    M 400, 0
                    a 400,400 0 1,1 0,800
                    a 400,400 0 1,1 0,-800
                " stroke="none" fill="none" />
                <text className={isLogin ? "login-text onright" : "login-text onleft"} 
                    dominantBaseline="hanging" 
                    textAnchor="middle">
                    <textPath xlinkHref="#curve" startOffset={isLogin ? "75%" : "25%"} >
                        {isLogin ? "LOGIN" : "SIGN UP"}
                    </textPath>
                </text>
            </svg>
        </div>

            <div className="login-form">
                {isLogin ? 
                    <div className="login-login">
                        <label>Email</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} />
                        <label>Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleLogin}>Submit</button>
                        {error && <p className="error">{error}</p>}
                        <p>Don't have an account? <span onClick={() => swap()}>Sign up</span></p>
                    </div> :
                    <div className="login-signup">
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

