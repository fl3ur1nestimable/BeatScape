import React from "react";
import { Card } from "./Card";
import "./AudioCard.css";

interface TrackCardProps {
    id: number;
    title: string;
    artists: string[];
    img: string;
    onPlay: (id: number, type: string) => void;
    onGoToArtist: (id: number) => void;
}

export const TrackCard: React.FC<TrackCardProps> = ({id, title, artists, img, onPlay, onGoToArtist}) => {
    return(
        <div className="track-card">
            <div className="track-img">
                <Card img={img} onPlay={() => onPlay(id,"track")}/>
            </div>
            <div className="track-card-info">
                <h3 className="track-card-title">{title}</h3>
                <div className="track-card-artists">
                    {artists.map((artist, index) => {
                        return(
                            <p key={index} className="track-card-artist" onClick={() => onGoToArtist(id)}>{artist}</p>
                        );

                    })}
                </div>
            </div>
        </div>
    );

}

interface ArtistCardProps {
    id: number;
    name: string;
    img: string;
    onPlay: (id: number, type: string) => void;
    onGoToArtist: (id: number) => void;
}

export const ArtistCard: React.FC<ArtistCardProps> = ({id, name, img, onPlay, onGoToArtist}) => {
    
    return(
        <div className="artist-card">
            <div className="artist-img">
                <Card img={img} onPlay={() => onPlay(id,"artist")}/>
            </div>
            <div className="artist-card-info">
                <h3 onClick={() => onGoToArtist(id)} className="artist-card-name">{name}</h3>
            </div>
        </div>
    );

}

interface PlaylistCardProps {
    id: number;
    title: string;
    user: string;
    img: string;
    onPlay: (id: number, type: string) => void;
    onGoToPlaylist: (id: number) => void;
    onGoToUser: (id: number) => void;
}

export const PlaylistCard: React.FC<PlaylistCardProps> = ({id, title, user, img, onPlay, onGoToPlaylist, onGoToUser}) => {
    
    return(
        <div className="playlist-card">
            <div className="playlist-img">
                <Card img={img} onPlay={() => onPlay(id,"playlist")}/>
            </div>
            <div className="playlist-card-info">
                <h3 onClick={() => onGoToPlaylist(id)} className="playlist-card-title">{title}</h3>
                <p className="playlist-card-user" onClick={() => onGoToUser(id)}>{user}</p>
            </div>
        </div>
    );

}

interface AlbumCardProps {
    id: number;
    title: string;
    img: string;
    artists: string[];
    onPlay: (id: number, type: string) => void;
    onGoToAlbum: (id: number) => void;
    onGoToArtist: (id: number) => void;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({id, title, img, artists, onPlay, onGoToAlbum, onGoToArtist}) => {
    
    return(
        <div className="album-card">
            <div className="album-img">
                <Card img={img} onPlay={() => onPlay(id,"album")}/>
            </div>
            <div className="album-card-info">
                <h3 onClick={() => onGoToAlbum(id)} className="album-card-title">{title}</h3>
                {artists.map((artist, index) => {
                    return(
                        <p key={index} className="album-card-artist" onClick={() => onGoToArtist(id)}>{artist}</p>
                    );

                })}
            </div>
        </div>
    );

}

