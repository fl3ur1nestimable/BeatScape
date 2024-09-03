import React from "react";
import { useState } from "react";
import { FaHeart, FaPlus } from "react-icons/fa6";
import "./NowPlaying.css";

const NowPlaying = () => {

    const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="now-playing">
      <div className="song-card">
        <img src="luneArgentee.png" alt="Song Cover" />
        <div className="song-info">
          <h3>Lune Argentée</h3>
          <p>Fleur1nestimable</p>
      </div>
    </div>
      <div className="song-actions">
        <button><FaHeart className={isLiked ? 'liked' : ''} onClick={() => setIsLiked(!isLiked)} /></button>
        <button><FaPlus /></button>
      </div>
    </div>
  )
}

export default NowPlaying
