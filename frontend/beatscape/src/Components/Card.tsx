import React from "react";
import { useState } from "react";
import { FaRegCirclePlay} from "react-icons/fa6";
import { IoMusicalNotes } from "react-icons/io5";
import "./Card.css";

interface CardProps {
    img: string;
    onPlay: () => void;
}

export const Card: React.FC<CardProps> = ({img, onPlay}) => {
    console.log(img)

    const generateSeed = () => {
        return Math.floor(Math.random() * 100000);
    }

    const [seed] = useState(generateSeed());
    const [loaded, setLoaded] = useState(false);
    
    return(
        <div className="card">
            <img src={`https://picsum.photos/seed/${seed}/200`} alt="card image" className="card-img" loading="lazy" onLoad={() => setLoaded(true)}/>
            {!loaded &&
                <div className="img-placeholder">
                    <IoMusicalNotes/>
                </div>
            }
            <button className="card-play" onClick={() => onPlay()}>
                <FaRegCirclePlay/>
            </button>
        </div>
    );

}
