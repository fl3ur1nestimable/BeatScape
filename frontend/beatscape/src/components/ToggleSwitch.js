import React from "react";
import "./ToggleSwitch.css";

function ToggleSwitch({isOn, handleToggle}) {
    return (
        <div className={isOn ? "toggle-switch-container-on" : "toggle-switch-container-off"} onClick={handleToggle}>
            <div className={isOn ? "switch-on" : "switch-off"}></div>
        </div>
    );
}

export default ToggleSwitch;