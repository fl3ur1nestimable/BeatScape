import React from "react";
import { FaRegCirclePlay} from "react-icons/fa6";
import "./Card.css";

interface CardProps {
    img: string;
    onPlay: () => void;
}

export const Card: React.FC<CardProps> = ({img, onPlay}) => {
    
    return(
        <div className="card">
            <img src={img} alt="card image" className="card-img" style={{
                width : "50px",
                height : "50px"
            }}/>
            <button className="card-play" onClick={() => onPlay()}>
                <FaRegCirclePlay/>
            </button>
        </div>
    );

}
