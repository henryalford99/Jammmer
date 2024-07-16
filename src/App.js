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
  const [playlistTitle, setPlaylistTitle] = useState('Playlist Name');

  const handleAddTrack = (track) => {
    if (!playlistTracks.find(item => item.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };
  const handleRemoveTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(item => item.id !== track.id));
  };

  const changePlaylistTitle = (e) => {
    setPlaylistTitle(e.target.value)
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
        <SearchResults name="Search Results" tracks={searchResultsTracks} onAddTrack={handleAddTrack}/>
        <Playlist name={playlistTitle} tracks={playlistTracks} onRemoveTrack={handleRemoveTrack} onTitleChange={changePlaylistTitle}/>
      </body>
    </div>
  );
}

export default App;
