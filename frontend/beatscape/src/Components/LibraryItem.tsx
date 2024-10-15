import React, { useState} from "react";
import { IoMusicalNotes } from "react-icons/io5";
import "../Styles/LibraryItem.css";

const generateSeed = () => {
    return Math.floor(Math.random() * 100000);
};

export interface LibraryPlaylistProps {
    name: string;
    user: string;
    img: string;
    added: string;
    onGoToPlaylist: (id: number) => void;
}

export const LibraryPlaylist: React.FC<LibraryPlaylistProps> = ({ name, user, img, onGoToPlaylist }) => {
    const [seed] = useState(generateSeed());
    const [loaded,setLoaded] = useState(false);
    console.log(img)

    return (
        <div className="library-item" onClick={() => onGoToPlaylist(0)}>
            <img
                src={`https://picsum.photos/seed/${seed}/200`}
                alt="playlist image"
                className="library-item-img"
                loading="lazy"
                onLoad={() => setLoaded(true)}
            />
            {!loaded &&
                <div className="img-placeholder-l">
                    <IoMusicalNotes/>
                </div>
            }
            <div className="library-item-info">
                <h3 className="library-item-name">{name}</h3>
                <p className="library-item-desc">Playlist - {user}</p>
            </div>
        </div>
    );
};

export interface LibraryAlbumProps {
    name: string;
    artist: string;
    img: string;
    added: string;
    onGoToAlbum: (id: number) => void;
}

export const LibraryAlbum: React.FC<LibraryAlbumProps> = ({ name, artist, img, onGoToAlbum }) => {
    const [seed] = useState(generateSeed());
    const [loaded,setLoaded] = useState(false);
    console.log(img)

    return (
        <div className="library-item" onClick={() => onGoToAlbum(0)}>
            <img
                src={`https://picsum.photos/seed/${seed}/200`}
                alt="album image"
                className="library-item-img"
                loading="lazy"
                onLoad={() => setLoaded(true)}
            />
            {!loaded &&
                <div className="img-placeholder-l">
                    <IoMusicalNotes/>
                </div>
            }
            <div className="library-item-info">
                <h3 className="library-item-name">{name}</h3>
                <p className="library-item-desc">Album - {artist}</p>
            </div>
        </div>
    );
};

export interface LibraryArtistProps {
    name: string;
    img: string;
    added: string;
    onGoToArtist: (id: number) => void;
}

export const LibraryArtist: React.FC<LibraryArtistProps> = ({ name, img, onGoToArtist }) => {
    const [seed] = useState(generateSeed());
    const [loaded,setLoaded] = useState(false);
    console.log(img)


    return (
        <div className="library-item" onClick={() => onGoToArtist(0)}>
            <img
                src={`https://picsum.photos/seed/${seed}/200`}
                alt="artist image"
                className="library-item-img"
                loading="lazy"
                onLoad={() => setLoaded(true)}
            />
            {!loaded &&
                <div className="img-placeholder-l">
                    <IoMusicalNotes/>
                </div>
            }
            <div className="library-item-info">
                <h3 className="library-item-name">{name}</h3>
                <p className="library-item-desc">Artist</p>
            </div>
        </div>
    );
};
