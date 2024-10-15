import React from "react";
import { useState } from "react";
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { LuRepeat,LuRepeat1 } from "react-icons/lu";
import { IoShuffle } from "react-icons/io5";
import "../Styles/MusicController.css";

interface MusicControllerProps {
    onPlay: (id : number, type : string) => void;
    onPause: () => void;
    onPrevious: () => void;
    onNext: () => void;
    onRepeat: (repeat: number) => void;
    onShuffle: () => void;
    onSeek: (value: number) => void;
    currentTime: number;
    duration: number;
    isPlaying: boolean;
    isShuffle: boolean;
    repeat: number;
}

const MusicController: React.FC<MusicControllerProps> = ({ onPlay, onPause, onPrevious, onNext, onRepeat, onShuffle, onSeek, currentTime, duration, isPlaying, isShuffle, repeat }) => {
    
    document.body.style.setProperty('--value', currentTime / duration * 100 + '%');

    const [mouseDown, setMouseDown] = useState(false);

    const play = () => {
        onPlay(0, 'track');
    }

    const pause = () => {
        onPause();
    }

    const previous = () => {
        onPrevious();
    }

    const next = () => {
        onNext();
    }

    const handlerepeat = () => {
        onRepeat(repeat === 0 ? 1 : repeat === 1 ? 2 : 0);
    }

    const shuffle = () => {
        onShuffle();
    }

    const seek = (e : any) => {
        setMouseDown(false);
        onSeek(e.target.value);
    }

    const onMouseDown = (e : any) => {
        setMouseDown(true);
        const mousex = e.clientX;
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const percent = (mousex - rect.left) / width * 100;
        e.target.style.setProperty('--value', percent + '%');
        const clamped = Math.min(100, Math.max(0, percent));
        onSeek(clamped);
    }

    const onMouseMove = (e : any) => {
        if(mouseDown) onMouseDown(e);
    }

    return(
        <div className="music-controler">
            <div className="controls">
                <button className={"shuffle" + (isShuffle ? " active" : "")} onClick={shuffle}><IoShuffle /></button>
                <button className="previous" onClick={previous}><GiPreviousButton /></button>
                {isPlaying ? <button onClick={pause}><FaRegCirclePause /></button> : <button onClick={play}><FaRegCirclePlay /></button>}
                <button onClick={next}><GiNextButton /></button>
                <button className="repeatbtn" onClick={handlerepeat}>{repeat === 0 ? <LuRepeat className="norepeat" /> : repeat === 1 ? <LuRepeat className="repeat" /> : <LuRepeat1 className="repeat-one" />}</button>
            </div>
            <div className="progress-bar">
                <span className="time">{Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')}</span>
                <input type="range" min="0" max="100" defaultValue={currentTime / duration * 100} onMouseUp={seek} onMouseDown={onMouseDown} onMouseMove={onMouseMove} />
                <span className="time">{Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}</span>
            </div>
        </div>
    );
}

export default MusicController;
