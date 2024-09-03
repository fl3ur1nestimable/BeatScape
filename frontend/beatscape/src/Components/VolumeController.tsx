import React from "react";
import { useState } from "react";
import { IoVolumeLow, IoVolumeHigh, IoVolumeMedium, IoVolumeMute } from "react-icons/io5";
import "./VolumeController.css";

interface VolumeControllerProps {
    onVolumeChange: (volume: number) => void;
    volume: number;
    onMute: () => void;
}

const VolumeController: React.FC<VolumeControllerProps> = ({ onVolumeChange, volume, onMute }) => {

    document.body.style.setProperty('--valueVolume', volume + '%');

    const [isMute, setIsMute] = useState(false);
    const [mouseDown, setMouseDown] = useState(false);
    

    const volumeChange = (e: any) => {
        const mousex = e.clientX;
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const percent = (mousex - rect.left) / width * 100;
        e.target.style.setProperty('--valueVolume', percent + '%');
        const clamped = Math.min(100, Math.max(0, percent));
        onVolumeChange(clamped);
    }

    const mute = () => {
        setIsMute(!isMute);
        onMute();
    }

    const onMouseDown = (e : any) => {
        setMouseDown(true);
        volumeChange(e);
    }

    const onMouseMove = (e:any) => {
        if (mouseDown) onMouseDown(e);
    }

    return (
        <div className="volume-controller">
            <button onClick={mute}>
                {volume === 0 ? <IoVolumeMute /> : volume > 70 ? <IoVolumeHigh /> : volume > 20 ? <IoVolumeMedium /> : <IoVolumeLow />}
            </button>
            <input type="range" min="0" max="100" defaultValue={volume} onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={() => setMouseDown(false)} />
        </div>
    );

}

export default VolumeController;