import React from "react";
import { Card } from "./Card";
import { FaRegCirclePlay} from "react-icons/fa6";
import "../Styles/Page.css";

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

export const PlaylistPage: React.FC<PlaylistPageProps> = ({id, title, user, img, playlist, onPlay, onGoToArtist, onGoToAlbum, onGoToUser}) => {
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
                    <p className="playlist-page-length">Playlist - {length} songs, {totalDurationHours} hours {totalDurationMinutes} minutes {totalDurationSeconds} seconds</p>
                </div>
            </div>
                <div className="playlist-page-songs-header">
                    <p className="playlist-page-songs-header-title">Title</p>
                    <p className="playlist-page-songs-header-album">Album</p>
                    <p className="playlist-page-songs-header-duration">Duration</p>
                </div>
            <div className="playlist-page-songs">
                {playlist.map((song) => (
                    <div className="playlist-page-song">
                        <div className="playlist-page-song-card">
                            <div className="song-img-info">
                                <Card img={song.img} onPlay={() => onPlay(song.id,"track")}/>
                            </div>
                            <div className="song-info">
                                <div className="playlist-page-song-title">{song.title}</div>
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


type albumTitle = {
    id : number;
    title: string;
    duration : string;
    plays : number;
}

interface AlbumPageProps {
    id : number;
    title : string;
    artist : string;
    img : string;
    fulldate : string;
    year : number;
    album: albumTitle[];
    onPlay: (id: number, type: string) => void;
    onGoToArtist: (id: number) => void;
}

export const AlbumPage: React.FC<AlbumPageProps> = ({id, title, artist, img, fulldate, year, album, onPlay, onGoToArtist}) => {
    const length = album.length;
    const totalDuration = album.reduce((acc, curr) => {
        const time = curr.duration.split(":");
        return acc + parseInt(time[0])*60 + parseInt(time[1]);
    }, 0);
    const totalDurationHours = Math.floor(totalDuration/3600);
    const totalDurationMinutes = Math.floor((totalDuration%3600)/60);
    const totalDurationSeconds = totalDuration%60;

    return(
        <div className="album-page">
            <div className="album-page-header">
                <div className="album-page-img">
                    <Card img={img} onPlay={() => onPlay(id,"album")}/>
                </div>
                <div className="album-page-info">
                    <h1 className="album-page-title">{title}</h1>
                    <p className="album-page-artist" onClick={() => onGoToArtist(id)}>{artist}</p>
                    <p className="album-page-length">Album - {length} songs, {totalDurationHours} hours {totalDurationMinutes} minutes {totalDurationSeconds} seconds</p>
                    <p className="album-page-year">{year}</p>
                </div>
            </div>
            <div className="album-page-songs-header">
                <p className="album-page-songs-header-title">Title</p>
                <p className="album-page-songs-header-plays">Plays</p>
                <p className="album-page-songs-header-duration">Duration</p>
            </div>
            <div className="album-page-songs">
                {album.map((song) => (
                    <div className="album-page-song">
                        <div className="album-page-song-card">
                            <p className="album-page-song-play" onClick={() => onPlay(song.id,"track")}><FaRegCirclePlay/></p>
                            <div className="album-page-song-title">{song.title}</div>
                        </div>
                        <div className="album-page-song-plays">{song.plays}</div>
                        <div className="album-page-song-duration">{song.duration}</div>
                    </div>
                ))}
            </div>
            <div className="album-page-year"> {fulldate} </div>
        </div>
    );
}

type artistTitle = {
    id : number;
    title: string;
    plays : number;
    duration : string;
    img : string;
}

type artistAlbum = {
    id : number;
    title: string;
    img : string;
    year : number;
}

interface ArtistPageProps {
    id : number;
    name : string;
    img : string;
    popular: artistTitle[];
    albums: artistAlbum[];
    onPlay: (id: number, type: string) => void;
    onGoToAlbum: (id: number) => void;
}

export const ArtistPage: React.FC<ArtistPageProps> = ({id, name, img, popular, albums, onPlay, onGoToAlbum}) => {
    return(
        <div className="artist-page">
            <div className="artist-page-header">
                <div className="artist-page-img">
                    <Card img={img} onPlay={() => onPlay(id,"artist")}/>
                </div>
                <div className="artist-page-info">
                    <h1 className="artist-page-title">{name}</h1>
                    <p>Artist</p>
                </div>
            </div>
            <h3 className="artist-page-popular">Popular</h3>
            <div className="artist-page-songs">
                {popular.map((song) => (
                    <div className="artist-page-song">
                        <div className="artist-page-song-card">
                            <div className="song-cardimg">
                                <Card img={song.img} onPlay={() => onPlay(song.id,"track")}/>
                            </div>
                            <div className="artist-page-song-title">{song.title}</div>
                        </div>
                        <div className="artist-page-song-plays">{song.plays}</div>
                        <div className="artist-page-song-duration">{song.duration}</div>
                    </div>
                ))}
            </div>
            <h3 className="artist-page-albums-title">Discography</h3>
            <div className="artist-page-albums">
                {albums.map((album) => (
                    <div className="artist-page-album">
                        <div className="artist-page-album-card">
                            <Card img={album.img} onPlay={() => onPlay(album.id,"album")}/>
                        </div>
                        <div className="artist-page-album-info">
                            <p className="artist-page-album-title" onClick={() => onGoToAlbum(album.id)}>{album.title}</p>
                            <p className="artist-page-album-year">{album.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}




