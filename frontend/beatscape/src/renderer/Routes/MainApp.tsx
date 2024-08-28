import './MainApp.css';
import React, { useState, useEffect, useRef, EventHandler } from 'react';
import { BsThreeDots, BsPip } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOpenInFull, MdOutlineCloseFullscreen } from "react-icons/md";
import TitleBar from '../Components/TitleBar';
import SearchBar from '../Components/SearchBar';
import MusicController from '../Components/MusicController';
import VolumeController from '../Components/VolumeController';
import DropdownMenu from '../Components/DropdownMenu';
import Profile from '../Components/Profile';
import Settings from '../Components/Settings';
import SearchResult from '../Components/SearchResult';
import menuDataJson from '../Data/dropdownData.json';
import sampleDate from '../Data/sampleData.json';
import sampleResult from '../Data/sampleResult.json';
import Themes from '../Data/Themes.json';
import logo1 from '../../../assets/logo192nobg.png';
import logo2 from '../../../assets/logo192.png';
import logoF from '../../../assets/logo fraise.png';



function MainApp() {

  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuData = menuDataJson.menuData;
  const shortcuts = menuDataJson.shortcutActions;
  const user = sampleDate.user;
  const themes = Themes.themes;
  const searchResult = sampleResult.searchResult;

  const [centerPanel, setCenterPanel] = useState(false);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [searchInput, setSearchInput] = useState('');

  const [currentTime, setCurrentTime] = useState(100);
  const [duration, setDuration] = useState(180);

  const [centerPanelContent, setCenterPanelContent] = useState(0);

  const [volume, setVolume] = useState(50);

  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  
  const [isAutoplay, setIsAutoplay] = useState(false);


  const onAutoplaySwitch = () => {
    setIsAutoplay(!isAutoplay);
  }

  const onThemeSwitch =(theme : string) => {
      themes.map((t) => {
          if(t.name === theme){
            const root = document.documentElement;
            t.vars.map((v) => {
                root.style.setProperty(v.name, v.value);
            });
          }
      });
  }

  const handleAction = (action : string) => {
    console.log(action);
    setIsDropdownMenuOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (event : any ) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleCenterPanel = () => {
    if (centerPanel) {
      setCenterPanel(false);
    }
    else {
      if(centerPanelContent!==0){
        setCenterPanel(true);
      }
    }
  }

  const toggleFullScreen = () => {
    window.electron.ipcRenderer.sendMessage('fullscreen', !isFullScreen);
    setIsFullScreen(!isFullScreen);
  }

  const showProfile = () => {
    setCenterPanelContent(1);
    setCenterPanel(true);
  }

  const showSettings = () => {
    setCenterPanelContent(2);
    setCenterPanel(true);
  }

  const onPlay = (id : number, type : string) => {
    console.log('play', id, type);
  }

  const onPause = () => {
    console.log('pause');
  }

  const onPrevious = () => {
    console.log('previous');
  }

  const onNext = () => {
    console.log('next');
  }

  const onRepeat = (repeat : number) => {
    console.log('repeat', isRepeat);
  }

  const onShuffle = () => {
    console.log('shuffle');
  }

  const onSeek = (percent : number) => {
    console.log('seek', percent);
  }

  const onSearch = (value : string) => {
    console.log('search', value);
    setSearchInput(value);
    setCenterPanelContent(3);
    setCenterPanel(true);
  }

  const onLogout = () => {
    console.log('logout');
  }

  const onGoToArtist = (id : number) => {
    console.log('go to artist', id);
  }

  const onGoToAlbum = (id : number) => {
    console.log('go to album', id);
  }

  const onGoToPlaylist = (id : number) => {
    console.log('go to playlist', id);
  }

  const onGoToUser = (id : number) => {
    console.log('go to user', id);
  }

  const handleProfileSave = () => {
    console.log('profile save');
  }





  return (
    <div>
      {isFullScreen ? <div>
        <button className='close-fullscreen' onClick={() => toggleFullScreen()}>
          <MdOutlineCloseFullscreen />
        </button>
      </div> : 
      <div className='app'>
          <header className='app-header'>
            <h1>Beatscape</h1>
            <TitleBar />
          </header>
          <div className='app-main-container'>
            <section className='top-bar'>
              <div className='top-bar-left'>
                <div className='dropdown-container' ref={dropdownRef}>
                  <button className='dots' onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}><BsThreeDots /></button>
                  {isDropdownMenuOpen && <DropdownMenu menuData={menuData} onAction={handleAction} />}
                </div>
                
                <button className='toogle-center-panel' onClick={()=> toggleCenterPanel()}>
                  <img src={logo1} alt="logo" loading='lazy' />
                </button>
              </div>
              <SearchBar onSearch={(value : string) => onSearch(value)} />
              <div className='top-bar-right'>
                {//TOCOMPLETE
                }
                <button className='profile-button' onClick={() => showProfile()}>
                  <img src={logoF} alt="logo" loading='lazy' />
                </button>
                <button className='settings-button' onClick={() => showSettings()}><IoSettingsOutline /></button>
              </div>
            </section>
            <div className='app-panels'>
              <section className='left-panel'>
                  left panel
              </section>
              <section className={centerPanel ? 'center-panel show' : 'center-panel hide'}>
                {centerPanelContent === 1 && <Profile user={user} onSave={handleProfileSave}/>}
                {centerPanelContent === 2 && <Settings onThemeSwitch={onThemeSwitch} onAutoplaySwitch={onAutoplaySwitch} isAutoplay={isAutoplay} onLogout={onLogout}/>}
                {centerPanelContent === 3 && <SearchResult result={searchResult} onPlay={onPlay} onGoToArtist={onGoToArtist} onGoToAlbum={onGoToAlbum} onGoToPlaylist={onGoToPlaylist} onGoToUser={onGoToUser}/>}
              </section>
              <section className='right-panel'>
                  right panel
              </section>
            </div>
            <section className='bottom-bar'>
              <VolumeController
                onVolumeChange={(volume?: number) => console.log('volume', volume)}
                volume={volume}
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
              />
              <div className='bottom-bar-right'>
                <button className='pip'><BsPip /></button>
                <button className='fullscreen' onClick={() => toggleFullScreen()}><MdOpenInFull /></button>
              </div>
            </section>
            <img src={logo2} className="app-center-logo" alt="logo" loading='lazy' />
          </div>
        </div>
      }
      </div>
  );
}

export default MainApp;