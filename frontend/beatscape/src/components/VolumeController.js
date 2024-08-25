import React from "react";
import { useState } from "react";
import { IoVolumeLow, IoVolumeHigh, IoVolumeMedium, IoVolumeMute } from "react-icons/io5";
import "./VolumeController.css";

function VolumeController({ onVolumeChange, volume }) {

    document.body.style.setProperty('--valueVolume', volume + '%');

    const [isMute, setIsMute] = useState(false);
    const [mouseDown, setMouseDown] = useState(false);
    

    const volumeChange = (e) => {
        const mousex = e.clientX;
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const percent = (mousex - rect.left) / width * 100;
        e.target.style.setProperty('--valueVolume', percent + '%');
        onVolumeChange(e.target.value);
    }

    const mute = () => {
        setIsMute(!isMute);
        onVolumeChange();
    }

    const onMouseDown = (e) => {
        setMouseDown(true);
        volumeChange(e);
    }

    const onMouseMove = (e) => {
        if (mouseDown) onMouseDown(e);
    }

    return (
        <div className="volume-controller">
            <button onClick={mute}>
                {isMute ? <IoVolumeMute /> : volume > 50 ? <IoVolumeHigh /> : volume > 20 ? <IoVolumeMedium /> : <IoVolumeLow />}
            </button>
            <input type="range" min="0" max="100" defaultValue={volume} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={() => setMouseDown(false)} />
        </div>
    );

}

export default VolumeController;