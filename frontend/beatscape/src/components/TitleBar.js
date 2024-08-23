// src/components/TitleBar.js
import React from 'react';
import { useState, useEffect } from 'react';
import { FaMinus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaRegWindowRestore } from "react-icons/fa";
import { FaRegWindowMaximize } from "react-icons/fa"; 
import './TitleBar.css';


const TitleBar = () => {

    useEffect(() => {
        window.electronAPI.onWindowMaximized(() => {
            setIsMaximized(true);
        });

        window.electronAPI.onWindowRestored(() => {
            setIsMaximized(false);
        });
    }, []);

    const [isMaximized, setIsMaximized] = useState(false);
    

    const handleMinimize = () => {
        window.electronAPI.minimize();
    };

    const handleMaximize = () => {
        window.electronAPI.maximize();
        setIsMaximized(!isMaximized);
    };

    const handleClose = () => {
        window.electronAPI.close();
    };

    return (
        <div className="title-bar">
            <div className="title-bar-content">
                <button onClick={handleMinimize} className="title-bar-button">
                    <FaMinus />
                </button>
                <button onClick={handleMaximize} className="title-bar-button">
                    {isMaximized ? <FaRegWindowRestore /> : <FaRegWindowMaximize />}
                </button>
                <button onClick={handleClose} className="title-bar-button close">
                    <IoClose />
                </button>
            </div>
        </div>
    );
};

export default TitleBar;
