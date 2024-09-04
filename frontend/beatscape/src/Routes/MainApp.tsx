import "./MainApp.css";
import { useState, useEffect, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOpenInFull, MdOutlineCloseFullscreen } from "react-icons/md";
import SearchBar from "../Components/SearchBar";
import MusicController from "../Components/MusicController";
import VolumeController from "../Components/VolumeController";
import DropdownMenu from "../Components/DropdownMenu";
import Profile from "../Components/Profile";
import Settings from "../Components/Settings";
import SearchResult from "../Components/SearchResult";
import { Library } from "../Components/Library";
import { LibraryAlbumProps, LibraryArtistProps, LibraryPlaylistProps } from "../Components/LibraryItem";
import ShortcutListener from "../Components/ShorcutListener";
import NowPlaying from "../Components/NowPlaying";
import {PlaylistPage, AlbumPage, ArtistPage} from "../Components/Page";
import menuDataJson from "../Data/dropdownData.json";
import sampleDate from "../Data/sampleData.json";
import sampleResult from "../Data/sampleResult.json";
import Themes from "../Data/Themes.json";
import sampleLibrary from "../Data/sampleLibrary.json";
import Playlist from "../Data/Playlist.json";
import Album from "../Data/Album.json";
import Artist from "../Data/Artist.json";
import Login from "./Login";

function MainApp() {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuData = menuDataJson.menuData;
  const shortcuts = menuDataJson.shortcutActions;
  const user = sampleDate.user;
  const themes = Themes.themes;
  const searchResult = sampleResult.searchResult;
  const library = sampleLibrary.content;
  const playlists = new Array<LibraryPlaylistProps>();
  const albums = new Array<LibraryAlbumProps>();
  const artists = new Array<LibraryArtistProps>();
  library.playlists.map((playlist) => {
    const newPlaylist: LibraryPlaylistProps = {
      name: playlist.name,
      user: playlist.user,
      img: playlist.img,
      added: playlist.added,
      onGoToPlaylist: (id: number) => onGoToPlaylist(id),
    };
    playlists.push(newPlaylist);
  });

  library.albums.map((album) => {
    const newAlbum: LibraryAlbumProps = {
      name: album.name,
      artist: album.artist,
      img: album.img,
      added: album.added,
      onGoToAlbum: (id: number) => onGoToAlbum(id),
    };
    albums.push(newAlbum);
  });

  library.artists.map((artist) => {
    const newArtist: LibraryArtistProps = {
      name: artist.name,
      img: artist.img,
      added: artist.added,
      onGoToArtist: (id: number) => onGoToArtist(id),
    };
    artists.push(newArtist);
  });


  const [isLogged, setIsLogged] = useState(false);

  const [centerPanel, setCenterPanel] = useState(false);
  const [centerPanelContent, setCenterPanelContent] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  const [searchInput, setSearchInput] = useState("");

  const [currentTime, setCurrentTime] = useState(100);
  const [duration, setDuration] = useState(180);
  const [volume, setVolume] = useState(50);
  const [lastVolume, setLastVolume] = useState(50);

  const [Repeat, setRepeat] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(false);

  const [theme, setTheme] = useState("Classic");

  const onLogged = () => {
    setIsLogged(true);
  };

  const onAutoplaySwitch = () => {
    setIsAutoplay(!isAutoplay);
  };

  const onThemeSwitch = (theme: string) => {
    themes.map((t) => {
      if (t.name === theme) {
        const root = document.documentElement;
        t.vars.map((v) => {
          root.style.setProperty(v.name, v.value);
        });
        setTheme(theme);
      }
    });
  };

  const handleAction = (action: string) => {
    setIsDropdownMenuOpen(false);
    switch (action) {
      case "Play/Pause":
        if (isPlaying) {
          setIsPlaying(false);
        } else {
          setIsPlaying(true);
        }
        break;
      case "Next":
        console.log("next");
        break;
      case "Previous":
        console.log("previous");
        break;
      case "Repeat":
        setRepeat(Repeat === 2 ? 0 : Repeat + 1);
        break;
      case "Shuffle":
        setIsShuffle(!isShuffle);
        break;
      case "VolumeUp":
        setVolume(volume < 100 ? volume + 10 : 100);
        break;
      case "VolumeDown":
        setVolume(volume > 0 ? volume - 10 : 0);
        break;
      case "Mute":
        setVolume(volume === 0 ? lastVolume : 0);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownMenuOpen(false);
      }
    };

    const handleEscape = (event: any) => {
      if (event.key === "Escape") {
        if(document.fullscreenElement){
          toggleFullScreen();
        }
      }
    };

    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, [dropdownRef]);

  const toggleCenterPanel = () => {
    if (centerPanel) {
      setCenterPanel(false);
    } else {
      if (centerPanelContent !== 0) {
        setCenterPanel(true);
      }
    }
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  

  const showProfile = () => {
    setCenterPanelContent(1);
    setCenterPanel(true);
  };

  const showSettings = () => {
    setCenterPanelContent(2);
    setCenterPanel(true);
  };


  const onPlay = (id: number, type: string) => {
    console.log("play", id, type);
    setIsPlaying(true);
  };

  const onPause = () => {
    console.log("pause");
    setIsPlaying(false);
  };

  const onPrevious = () => {
    console.log("previous");
  };

  const onNext = () => {
    console.log("next");
  };

  const onRepeat = (repeat: number) => {
    setRepeat(repeat);
  };

  const onShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const onSeek = (percent: number) => {
    const newTime = Math.floor((duration * percent) / 100);
    setCurrentTime(newTime);
  };

  const onSearch = (value: string) => {
    setSearchInput(value);
    setCenterPanelContent(3);
    setCenterPanel(true);
  };

  const onLogout = () => {
    onThemeSwitch("Classic");
    setIsLogged(false);
  };

  const onGoToArtist = (id: number) => {
    console.log("go to artist", id);
    setCenterPanelContent(6);
  };

  const onGoToAlbum = (id: number) => {
    console.log("go to album", id);
    setCenterPanelContent(5);
  };

  const onGoToPlaylist = (id: number) => {
    console.log("go to playlist", id);
    setCenterPanelContent(4);
  };

  const onGoToUser = (id: number) => {
    console.log("go to user", id);
  };

  const handleProfileSave = () => {
    console.log("profile save");
  };

  const onVolumeChange = (volume: number) => {
    setVolume(volume);
    if (volume !== 0) {
      setLastVolume(volume);
    }
  };

  return (
    <div>
        <div className={isFullScreen ? "fullscreen-app show" : "fullscreen-app hide"}>
          <img
            src={`logo512${theme.toLowerCase()}.png`}
            className="center-logo-fs"
            alt="logo"
            loading="lazy"
          />
          <div className="nowplaying-fs">
            <h3>Lune Argentée</h3>
            <p>Fl3ur1nestimable</p>
          </div>
          <div className="bottom-fs">
            <VolumeController
              onVolumeChange={(volume: number) => onVolumeChange(volume)}
              volume={volume}
              onMute={() => onVolumeChange(volume === 0 ? lastVolume : 0)}
            />
            <MusicController
              onPlay={onPlay}
              onPause={onPause}
              onPrevious={onPrevious}
              onNext={onNext}
              onRepeat={onRepeat}
              onShuffle={onShuffle}
              onSeek={onSeek}
              currentTime={currentTime}
              duration={duration}
              isPlaying={isPlaying}
              isShuffle={isShuffle}
              repeat={Repeat}
            />
            <div className="bottom-bar-right">
              <button className="fullscreen" onClick={() => toggleFullScreen()}>
                <MdOutlineCloseFullscreen />
              </button>
            </div>
          </div>
        </div>
      {isLogged ? (
        <div className={isFullScreen ? "app hide" : "app show"}>
          <ShortcutListener
            shortcutActions={shortcuts}
            onAction={handleAction}
          />
          <div className="app-main-container">
            <section className="top-bar">
              <div className="top-bar-left">
                <div className="dropdown-container" ref={dropdownRef}>
                  <button
                    className="dots"
                    onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
                  >
                    <BsThreeDots />
                  </button>
                  {isDropdownMenuOpen && (
                    <DropdownMenu menuData={menuData} onAction={handleAction} />
                  )}
                </div>

                <button
                  className="toogle-center-panel"
                  onClick={() => toggleCenterPanel()}
                >
                  <img
                    src={
                      theme === "Light" ? "logo192black.png" : "logo192nobg.png"
                    }
                    alt="logo"
                    loading="lazy"
                  />
                </button>
              </div>
              <SearchBar onSearch={(value: string) => onSearch(value)} />
              <div className="top-bar-right">
                {
                  //TOCOMPLETE
                }
                <button
                  className="profile-button"
                  onClick={() => showProfile()}
                >
                  <img src="logo fraise.png" alt="logo" loading="lazy" />
                </button>
                <button
                  className="settings-button"
                  onClick={() => showSettings()}
                >
                  <IoSettingsOutline />
                </button>
              </div>
            </section>
            <div className="app-panels">
              <section className="left-panel">
                <Library
                  playlists={playlists}
                  albums={albums}
                  artists={artists}
                  onGoToPlaylist={onGoToPlaylist}
                  onGoToAlbum={onGoToAlbum}
                  onGoToArtist={onGoToArtist}
                />
              </section>
              <section
                className={
                  centerPanel ? "center-panel show" : "center-panel hide"
                }
              >
                {centerPanelContent === 1 && (
                  <Profile user={user} onSave={handleProfileSave} />
                )}
                {centerPanelContent === 2 && (
                  <Settings
                    onThemeSwitch={onThemeSwitch}
                    onAutoplaySwitch={onAutoplaySwitch}
                    isAutoplay={isAutoplay}
                    onLogout={onLogout}
                  />
                )}
                {centerPanelContent === 3 && (
                  <SearchResult
                    result={searchResult}
                    onPlay={onPlay}
                    onGoToArtist={onGoToArtist}
                    onGoToAlbum={onGoToAlbum}
                    onGoToPlaylist={onGoToPlaylist}
                    onGoToUser={onGoToUser}
                  />
                )}
                {centerPanelContent === 4 && (
                  <PlaylistPage
                    id={Playlist.id}
                    title = {Playlist.title}
                    user={Playlist.user}
                    img={Playlist.img}
                    playlist={Playlist.playlist}
                    onPlay={onPlay}
                    onGoToArtist={onGoToArtist}
                    onGoToAlbum={onGoToAlbum}
                    onGoToUser={onGoToUser}
                  />
                )}
                {centerPanelContent === 5 && (
                  <AlbumPage
                    id={Album.id}
                    title = {Album.title}
                    artist={Album.artist}
                    img={Album.img}
                    fulldate={Album.fulldate}
                    year={Album.year}
                    album={Album.album}
                    onPlay={onPlay}
                    onGoToArtist={onGoToArtist}
                  />
                )}
                {centerPanelContent === 6 && (
                  <ArtistPage
                    id={Artist.id}
                    name = {Artist.name}
                    img={Artist.img}
                    popular={Artist.popular}
                    albums={Artist.albums}
                    onPlay={onPlay}
                    onGoToAlbum={onGoToAlbum}
                  />
                )}
              </section>
              <section className="right-panel">
                <NowPlaying />
              </section>
            </div>
            <section className="bottom-bar">
              <VolumeController
                onVolumeChange={(volume: number) => onVolumeChange(volume)}
                volume={volume}
                onMute={() => onVolumeChange(volume === 0 ? lastVolume : 0)}
              />
              <MusicController
                onPlay={onPlay}
                onPause={onPause}
                onPrevious={onPrevious}
                onNext={onNext}
                onRepeat={onRepeat}
                onShuffle={onShuffle}
                onSeek={onSeek}
                currentTime={currentTime}
                duration={duration}
                isPlaying={isPlaying}
                isShuffle={isShuffle}
                repeat={Repeat}
              />
              <div className="bottom-bar-right">
                <button
                  className="fullscreen"
                  onClick={() => toggleFullScreen()}
                >
                  <MdOpenInFull />
                </button>
              </div>
            </section>
            <img
              src={`logo512${theme.toLowerCase()}.png`}
              className="app-center-logo"
              alt="logo"
              loading="lazy"
            />
          </div>
        </div>
      ) : (
        <div>
          <Login onLogged={onLogged} />
        </div>
      )}
    </div>
  );
}

export default MainApp;
