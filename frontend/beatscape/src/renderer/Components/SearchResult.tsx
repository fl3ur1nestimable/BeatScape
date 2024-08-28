import React from "react";
import { TrackCard, ArtistCard, PlaylistCard, AlbumCard} from "./AudioCard";
import "./SearchResult.css";
import logoF from '../../../assets/logo fraise.png';

interface SearchResultProps {
    result: any;
    onPlay: (id: number, type: string) => void;
    onGoToArtist: (id: number) => void;
    onGoToAlbum: (id: number) => void;
    onGoToPlaylist: (id: number) => void;
    onGoToUser: (id: number) => void;
}

const SearchResult: React.FC<SearchResultProps> = ({result, onPlay, onGoToArtist, onGoToAlbum, onGoToPlaylist, onGoToUser}) => {

    const tracks = result.tracks;
    const albums = result.albums;
    const artists = result.artists;
    const playlists = result.playlists;
    console.log(result.tracks);

    return(
        <div className="search-result">
            <div className="search-result-tracks">
                <h2>Tracks</h2>
                <div className="search-result-tracks-list">
                    {tracks.map((track : any, index : number) => {
                        return(
                            <TrackCard key={index} id={track.id} title={track.title} artists={track.artists} img={logoF} onPlay={onPlay} onGoToArtist={onGoToArtist}/>
                        );
                    })}
                </div>
            </div>
            <div className="search-result-albums">
                <h2>Albums</h2>
                <div className="search-result-albums-list">
                    {albums.map((album :any, index : number) => {
                        return(
                            <AlbumCard key={index} id={album.id} title={album.title} artists={album.artists} img={logoF} onPlay={onPlay} onGoToArtist={onGoToArtist} onGoToAlbum={onGoToAlbum}/>
                        );
                    })}
                </div>
            </div>
            <div className="search-result-artists">
                <h2>Artists</h2>
                <div className="search-result-artists-list">
                    {artists.map((artist : any, index: number) => {
                        return(
                            <ArtistCard key={index} id={artist.id} name={artist.name} img={logoF} onPlay={onPlay} onGoToArtist={onGoToArtist}/>
                        );
                    })}
                </div>
            </div>
            <div className="search-result-playlists">
                <h2>Playlists</h2>
                <div className="search-result-playlists-list">
                    {playlists.map((playlist : any, index : number) => {
                        return(
                            <PlaylistCard key={index} id={playlist.id} title={playlist.title} user={playlist.user} img={logoF} onPlay={onPlay} onGoToPlaylist={onGoToPlaylist} onGoToUser={onGoToUser}/>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SearchResult;