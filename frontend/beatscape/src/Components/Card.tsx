import React from "react";
import { useState } from "react";
import { FaRegCirclePlay} from "react-icons/fa6";
import "./Card.css";

interface CardProps {
    img: string;
    onPlay: () => void;
}

export const Card: React.FC<CardProps> = ({img, onPlay}) => {

    const generateSeed = () => {
        return Math.floor(Math.random() * 100000);
    }

    const [seed] = useState(generateSeed());
    
    return(
        <div className="card">
            <img src={`https://picsum.photos/seed/${seed}/200`} alt="card image" className="card-img"/>
            <button className="card-play" onClick={() => onPlay()}>
                <FaRegCirclePlay/>
            </button>
        </div>
    );

}
