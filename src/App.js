import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import MockTrackData from './mock data/MockTrackData';
import SearchResults from './sub-components/SearchResults';
import Playlist from './sub-components/Playlist';

function App() {
  const hardcodedTracks = MockTrackData;

  const [searchResultsTracks, setSearchResultsTracks] = useState(hardcodedTracks);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState('placeholder');

  const addTrack = (track) => {
    if (!playlistTracks.find(item => item.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };
  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(item => item.id !== track.id));
  };

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
        <SearchResults name="Search Results" tracks={searchResultsTracks} onAddTrack={addTrack}/>
        <Playlist name={playlistTitle} tracks={playlistTracks} onRemoveTrack={removeTrack}/>
      </body>
    </div>
  );
}

export default App;
