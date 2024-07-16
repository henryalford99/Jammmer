import logo from './logo.svg';
import './App.css';
import React from 'react';
import MockTrackData from './mock data/MockTrackData';
import Tracklist from './sub-components/Tracklist';

function App() {
  const hardcodedTracks = MockTrackData;

  //const [name, setName] = useState('');
  //const [artist, setArtist] = useState('');
  //const [album, setAlbum] = useState('');
  //const [id, setId] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <div className="App">
          <h1>Jammmer</h1>
          <Tracklist tracks={hardcodedTracks}/>
        </div>
      </body>
    </div>
  );
}

export default App;
