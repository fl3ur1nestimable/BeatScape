import './App.css';
import React from 'react';
import { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import TitleBar from './components/TitleBar.js';
import SearchBar from './components/SearchBar.js';


function App() {

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [centerPanel, setCenterPanel] = useState(true);

  const showAltMenu = () => {
    console.log('showAltMenu');
  }

  return (
    <div>
      {isFullScreen ? <div>fullscreen</div> : 
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
              <SearchBar onSearch={(value) => setSearchInput(value)} />
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
                <p>bottom bar</p>
                <p>bottom bar</p>
                <p>bottom bar</p>
            </section>
            <img src="logo192.png" className="app-center-logo" alt="logo" loading='lazy' />
          </div>
        </div>
      }
      </div>
  );
}

export default App;