import React, { useState, useEffect } from "react";
import {
    IoVolumeLow,
    IoVolumeHigh,
    IoVolumeMedium,
    IoVolumeMute,
} from "react-icons/io5";
import "../Styles/VolumeController.css";

interface VolumeControllerProps {
    onVolumeChange: (volume: number) => void;
    volume: number;
    onMute: () => void;
}

const VolumeController: React.FC<VolumeControllerProps> = ({
    onVolumeChange,
    volume,
    onMute,
}) => {
    document.body.style.setProperty("--valueVolume", volume + "%");

    const [lastVolume, setLastVolume] = useState(volume > 0 ? volume : 50); // Initialize with the current volume or 50
    const [mouseDown, setMouseDown] = useState(false);

    // Update lastVolume when volume changes and it's not 0 (not muted)
    useEffect(() => {
        if (volume > 0) {
            setLastVolume(volume);
        }
    }, [volume]);

    const volumeChange = (e: React.MouseEvent<HTMLInputElement>) => {
        const mouseX = e.clientX;
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const percent = ((mouseX - rect.left) / width) * 100;
        const clamped = Math.min(100, Math.max(0, percent));

        onVolumeChange(clamped);
    };

    const mute = () => {
        if (volume > 0) {
            onVolumeChange(0); // Mute
        } else {
            onVolumeChange(lastVolume); // Unmute and restore to last non-zero volume
        }
        onMute(); // Toggle mute state
    };

    const onMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
        setMouseDown(true);
        volumeChange(e);
    };

    const onMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
        if (mouseDown) volumeChange(e);
    };

    return (
        <div className="volume-controller">
            <button onClick={mute}>
                {volume === 0 ? (
                    <IoVolumeMute />
                ) : volume > 70 ? (
                    <IoVolumeHigh />
                ) : volume > 20 ? (
                    <IoVolumeMedium />
                ) : (
                    <IoVolumeLow />
                )}
            </button>
            <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={() => setMouseDown(false)}
                onChange={(e) => onVolumeChange(Number(e.target.value))}
            />
        </div>
    );
};

export default VolumeController;
