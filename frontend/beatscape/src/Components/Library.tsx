import React from "react";
import { LibraryAlbum, LibraryArtist, LibraryPlaylist, LibraryAlbumProps, LibraryArtistProps, LibraryPlaylistProps } from "./LibraryItem";
import "./Library.css";

type LibraryItem = LibraryPlaylistProps | LibraryAlbumProps | LibraryArtistProps;

interface LibraryProps {
    playlists: LibraryPlaylistProps[];
    albums: LibraryAlbumProps[];
    artists: LibraryArtistProps[];
}

export const Library: React.FC<LibraryProps> = ({playlists, albums, artists}) => {
    let allItems: LibraryItem[] = [...playlists, ...albums, ...artists];
    allItems.sort((a, b) => {
        return Date.parse(b.added) - Date.parse(a.added);
    });

    return(
        <div className="library">
            <h2 className="library-title">Library</h2>
            <div className="library-items">
                {allItems.map((item, index) => {
                    if("user" in item){
                        return <LibraryPlaylist key={index} name={item.name} user={item.user} img={item.img} added={item.added}/>
                    }else if("artist" in item){
                        return <LibraryAlbum key={index} name={item.name} artist={item.artist} img={item.img} added={item.added}/>
                    }else{
                        return <LibraryArtist key={index} name={item.name} img={item.img} added={item.added}/>
                    }
                })}
            </div>
        </div>
    );
}
