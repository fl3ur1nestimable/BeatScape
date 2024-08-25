import './App.css';
import React from 'react';
import { useState } from 'react';
import { BsThreeDots, BsPip } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOpenInFull, MdOutlineCloseFullscreen } from "react-icons/md";
import TitleBar from './components/TitleBar.js';
import SearchBar from './components/SearchBar.js';
import MusicController from './components/MusicController.js';
import VolumeController from './components/VolumeController.js';


function App() {

  const [centerPanel, setCenterPanel] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [searchInput, setSearchInput] = useState('');

  const [currentTime, setCurrentTime] = useState(100);
  const [duration, setDuration] = useState(180);

  const [volume, setVolume] = useState(50);

  const toggleFullScreen = () => {
    window.electronAPI.toogleFullScreen();
    setIsFullScreen(!isFullScreen);
  }


  const showAltMenu = () => {
    console.log('showAltMenu');
  }

  const onPlay = () => {
    console.log('play');
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

  const onRepeat = (isRepeat) => {
    console.log('repeat', isRepeat);
  }

  const onShuffle = () => {
    console.log('shuffle');
  }

  const onSeek = (percent) => {
    console.log('seek', percent);
  }

  const onSearch = (value) => {
    console.log('search', value);
    setSearchInput(value);
    setCenterPanel(true);
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
                <button className='dots' onClick={() => showAltMenu()}><BsThreeDots /></button>
                <button className='toogle-center-panel' onClick={()=> setCenterPanel(!centerPanel)}>
                  <img src="logo192nobg.png" alt="logo" loading='lazy' />
                </button>
              </div>
              <SearchBar onSearch={(value) => onSearch(value)} />
              <div className='top-bar-right'>
                {//TOCOMPLETE
                }
                <button className='profile-button'>
                  <img src="logo fraise.png" alt="logo" loading='lazy' />
                </button>
                <button className='settings-button'><IoSettingsOutline /></button>
              </div>
            </section>
            <div className='app-panels'>
              <section className='left-panel'>
                  left panel
              </section>
              <section className={centerPanel ? 'center-panel show' : 'center-panel hide'}>
                  center panel
              </section>
              <section className='right-panel'>
                  right panel
              </section>
            </div>
            <section className='bottom-bar'>
              <VolumeController
                onVolumeChange={(volume) => console.log('volume', volume)}
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
                
                className='music-controller'
              />
              <div className='bottom-bar-right'>
                <button className='pip'><BsPip /></button>
                <button className='fullscreen' onClick={() => toggleFullScreen()}><MdOpenInFull /></button>
              </div>
            </section>
            <img src="logo192.png" className="app-center-logo" alt="logo" loading='lazy' />
          </div>
        </div>
      }
      </div>
  );
}

export default App;