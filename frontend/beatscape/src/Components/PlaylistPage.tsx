import React from "react";
import { Card } from "./Card";
import "./PlaylistPage.css";

type playlistTitle = {
    id : number;
    title: string;
    artists : string[];
    album : string;
    duration : string;
    img : string;
}

interface PlaylistPageProps {
    id : number;
    title : string;
    user : string;
    img : string;
    playlist: playlistTitle[];
    onPlay: (id: number, type: string) => void;
    onGoToArtist: (id: number) => void;
    onGoToAlbum: (id: number) => void;
    onGoToUser: (id: number) => void;
}

const PlaylistPage: React.FC<PlaylistPageProps> = ({id, title, user, img, playlist, onPlay, onGoToArtist, onGoToAlbum, onGoToUser}) => {
    const totalDuration = playlist.reduce((acc, curr) => {
        const time = curr.duration.split(":");
        return acc + parseInt(time[0])*60 + parseInt(time[1]);
    }, 0);
    const totalDurationHours = Math.floor(totalDuration/3600);
    const totalDurationMinutes = Math.floor((totalDuration%3600)/60);
    const totalDurationSeconds = totalDuration%60;

    const length = playlist.length;

    return(
        <div className="playlist-page">
            <div className="playlist-page-header">
                <div className="playlist-page-img">
                    <Card img={img} onPlay={() => onPlay(id,"playlist")}/>
                </div>
                <div className="playlist-page-info">
                    <h1 className="playlist-page-title">{title}</h1>
                    <p className="playlist-page-user" onClick={() => onGoToUser(id)}>{user}</p>
                    <p className="playlist-page-length">{length} songs, {totalDurationHours} hours {totalDurationMinutes} minutes {totalDurationSeconds} seconds</p>
                </div>
            </div>
            <div className="playlist-page-songs">
                <div className="playlist-page-songs-header">
                    <p className="playlist-page-songs-header-title">Title</p>
                    <p className="playlist-page-songs-header-album">Album</p>
                    <p className="playlist-page-songs-header-duration">Duration</p>
                </div>
                {playlist.map((song) => (
                    <div className="playlist-page-song">
                        <div className="playlist-page-song-card">
                            <div className="song-img-info">
                                <Card img={song.img} onPlay={() => onPlay(song.id,"track")}/>
                            </div>
                            <div className="song-info">
                                <div className="playlist-page-song-title" onClick={() => onPlay(song.id,"track")}>{song.title}</div>
                                <div className="playlist-page-song-artist" onClick={() => onGoToArtist(song.id)}>{song.artists.join(", ")}</div>
                            </div>
                        </div>
                        <div className="playlist-page-song-album" onClick={() => onGoToAlbum(song.id)}>{song.album}</div>
                        <div className="playlist-page-song-duration">{song.duration}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlaylistPage;




