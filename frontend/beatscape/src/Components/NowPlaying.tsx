import { useState } from "react";
import { FaHeart, FaPlus } from "react-icons/fa6";
import { IoMusicalNotes } from "react-icons/io5";
import "../Styles/NowPlaying.css";

const NowPlaying = () => {

    const generateSeed = () => {
      return Math.floor(Math.random() * 100000);
    };
    const [seed] = useState(generateSeed());
    const [isLiked, setIsLiked] = useState(false);
    const [loaded,setLoaded] = useState(false);

  return (
    <div className="now-playing">
      <div className="song-card">
        <div className="song-img">
          <img 
            src={`https://picsum.photos/seed/${seed}/500`} 
            alt="Song Cover" 
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
          {!loaded &&
                  <div className="img-placeholder-n">
                      <IoMusicalNotes/>
                  </div>
          }
        </div>
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
