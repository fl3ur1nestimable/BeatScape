import React from "react";
import { useState } from "react";
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { LuRepeat,LuRepeat1 } from "react-icons/lu";
import { IoShuffle } from "react-icons/io5";
import "./MusicController.css";

function MusicController({ onPlay, onPause, onPrevious, onNext, onRepeat, onShuffle, onSeek, currentTime, duration }) {
    
    document.body.style.setProperty('--value', currentTime / duration * 100 + '%');
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [isRepeat, setIsRepeat] = useState(0);
    const [isShuffle, setIsShuffle] = useState(false);

    const [mouseDown, setMouseDown] = useState(false);

    const play = () => {
        setIsPlaying(true);
        onPlay();
    }

    const pause = () => {
        setIsPlaying(false);
        onPause();
    }

    const previous = () => {
        onPrevious();
    }

    const next = () => {
        onNext();
    }

    const repeat = () => {
        setIsRepeat(isRepeat === 0 ? 1 : isRepeat === 1 ? 2 : 0);
        onRepeat(isRepeat);
    }

    const shuffle = () => {
        setIsShuffle(!isShuffle);
        document.querySelector('.shuffle').classList.toggle('active');
        onShuffle();
    }

    const seek = (e) => {
        setMouseDown(false);
        onSeek(e.target.value);
    }

    const onMouseDown = (e) => {
        setMouseDown(true);
        const mousex = e.clientX;
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const percent = (mousex - rect.left) / width * 100;
        e.target.style.setProperty('--value', percent + '%');
    }

    const onMouseMove = (e) => {
        if(mouseDown) onMouseDown(e);
    }

    return(
        <div className="music-controler">
            <div className="controls">
                <button className="shuffle" onClick={shuffle}><IoShuffle /></button>
                <button className="previous" onClick={previous}><GiPreviousButton /></button>
                {isPlaying ? <button onClick={pause}><FaRegCirclePause /></button> : <button onClick={play}><FaRegCirclePlay /></button>}
                <button onClick={next}><GiNextButton /></button>
                <button className="repeatbtn" onClick={repeat}>{isRepeat === 0 ? <LuRepeat className="norepeat" /> : isRepeat === 1 ? <LuRepeat className="repeat" /> : <LuRepeat1 className="repeat-one" />}</button>
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
