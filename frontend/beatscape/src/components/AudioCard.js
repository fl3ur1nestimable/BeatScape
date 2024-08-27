import React from "react";
import { FaRegCirclePlay} from "react-icons/fa6";
import "./AudioCard.css";

function AudioCard({audiotype, audioData, onPlay, onOpen}) {

    const data = {};
    switch(audiotype){
        case "Track":
            data = {
                ID : audioData.id,
                Title : audioData.title,
                Artist : audioData.artist,
                Img : audioData.img,
            }
            break;
        case "Album":
            data = {
                ID : audioData.id,
                Title : audioData.title,
                Artist : audioData.artist,
                Img : audioData.img,
            }
            break;
        case "Playlist":
            data = {
                ID : audioData.id,
                Title : audioData.title,
                User : audioData.user,
                Img : audioData.img,
            }
            break;
        case "Genre" :
            data = {
                ID : audioData.id,
                Title : audioData.title,
                Img : audioData.img,
            }
            break;
    }
    
    return(
        <div className="audio-card">
            <div className="audio-card-img">
                <img src={data.Img} alt="audio card" />
                <button className="play-btn" onClick={() => onPlay(data.ID,audiotype)}><FaRegCirclePlay /></button>
            </div>
            <div className="audio-card-info">
                <h3>{data.Title}</h3>
                {data.Artist ? <p>{data.Artist}</p> : data.User ? <p>{data.User}</p> : null} 
            </div>
        </div>
    );

}

export default AudioCard;