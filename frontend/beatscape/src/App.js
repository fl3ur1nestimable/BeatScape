import './App.css';
import TitleBar from './components/TitleBar.js';


function App() {
  return (
    <div className="app">
      <header className='app-header'>
        <h1>Beatscape</h1>
        <TitleBar />
      </header>
      <div className='app-main-container'>
        <section className='top-bar'>
            <p>top bar</p>
            <p>top bar</p>
        </section>
        <div className='app-panels'>
          <section className='left-panel'>
              left panel
          </section>
          <section className='center-panel'>
              center panel
          </section>
          <section className='right-panel'>
              right panel
          </section>
        </div>
        <section className='bottom-bar'>
            <p>bottom bar</p>
            <p>bottom bar</p>
        </section>
        <img src="logo192.png" className="app-center-logo" alt="logo" loading='lazy' />
      </div>
    </div>
  );
}

export default App;