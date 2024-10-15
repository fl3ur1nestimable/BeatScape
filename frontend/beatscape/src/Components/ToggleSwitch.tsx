import React from "react";
import "../Styles/ToggleSwitch.css";

interface ToggleSwitchProps {
    isOn: boolean;
    handleToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({isOn, handleToggle}) => {
    return (
        <div className={isOn ? "toggle-switch-container-on" : "toggle-switch-container-off"} onClick={handleToggle}>
            <div className={isOn ? "switch-on" : "switch-off"}></div>
        </div>
    );
}

export default ToggleSwitch;