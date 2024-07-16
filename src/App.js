import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import MockTrackData from './mock data/MockTrackData';
import SearchResults from './sub-components/SearchResults';
import Playlist from './sub-components/Playlist';

function App() {
  const hardcodedTracks = MockTrackData;

  const [searchResultsTracks, setSearchResultsTracks] = useState(hardcodedTracks);
  const [playlistTracks, setSavedTracks] = useState(hardcodedTracks);
  const [playlistTitle, setPlaylistTitle] = useState('placeholder');
  //const [name, setName] = useState('')d;
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
        <h1>Jammmer</h1>
        <SearchResults name="Search Results" tracks={searchResultsTracks}/>
        <Playlist name={playlistTitle} tracks={playlistTracks}/>
      </body>
    </div>
  );
}

export default App;
