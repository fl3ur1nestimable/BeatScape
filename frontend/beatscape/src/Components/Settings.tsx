import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import Themes from "../Data/Themes.json";
import "./Settings.css";

interface SettingsProps {
    onThemeSwitch: (theme: string) => void;
    onAutoplaySwitch: () => void;
    isAutoplay: boolean;
    onLogout: () => void;
}

const Settings: React.FC<SettingsProps> = ({onThemeSwitch, onAutoplaySwitch, isAutoplay, onLogout}) => {

    const themes = Themes.themes;

    return(
        <div className="settings">
            <div className="settings-content">
                <h2>Settings</h2>
                <div className="theme">
                    <h3>Theme</h3>
                    <div className="theme-options">
                        {themes.map((theme, index) => (
                            <div key={index} className="theme-option" onClick={() => onThemeSwitch(theme.name)}>
                                <div className="theme-preview" style={{backgroundColor: theme.color}}></div>
                                <span>{theme.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="autoplay">
                    <h3>Autoplay</h3>
                    <ToggleSwitch isOn={isAutoplay} handleToggle={() => onAutoplaySwitch()} />
                </div>
                <div className="logout">
                    <button onClick={onLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Settings;