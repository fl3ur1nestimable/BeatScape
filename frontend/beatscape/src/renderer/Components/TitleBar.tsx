// src/components/TitleBar.js
import { useState, useEffect } from 'react';
import { FaMinus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaRegWindowRestore } from "react-icons/fa";
import { FaRegWindowMaximize } from "react-icons/fa"; 
import './TitleBar.css';


const TitleBar = () => {

    const [isMaximized, setIsMaximized] = useState(false);
    

    const handleMinimize = () => {
        window.electron.ipcRenderer.sendMessage('window-action', 'minimize');
    };

    const handleMaximize = () => {
        setIsMaximized(!isMaximized);
        window.electron.ipcRenderer.sendMessage('window-action', 'maximize');
    };

    const handleClose = () => {
        window.electron.ipcRenderer.sendMessage('window-action', 'close');
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
