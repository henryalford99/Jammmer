import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import MockTrackData from './mock data/MockTrackData';
import SearchResults from './sub-components/SearchResults';
import Playlist from './sub-components/Playlist';
import SearchBar from './sub-components/SearchBar';
import Spotify from './sub-components/Spotify';

function App() {
  const hardcodedTracks = MockTrackData;

  const [searchResultsTracks, setSearchResultsTracks] = useState(hardcodedTracks);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState('Playlist Name');
  const [searchTerm, setSearchTerm] = useState('')

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

  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  }
  
  const handleSave = () => {
    // Extract URIs from the playlistTracks
    const trackUris = playlistTracks.map(track => track.uri);
    // Mock saving to Spotify (replace this with actual API call)
    alert("Saving playlist to Spotify with URIs:", trackUris);
    // Reset the playlist
    setPlaylistTracks([]);
  };

  const handleSearch = async (e) => {
    try {
      const searchTerm = e.target.value;
      const results = await Spotify.search(searchTerm);
      console.log('Search Results:', results);
      if (Array.isArray(results)) {
        setSearchResultsTracks(results);
      } else {
        setSearchResultsTracks([]);
        console.error('Search results are not an array:', results);
      }
    } catch(error) {
      console.error('Error during search:', error);
      setSearchResultsTracks([]); // Clear tracks on error
    }
  }

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
      <div>
        <h1>Jammmer</h1>
        <SearchBar onSearch={handleSearch} onChange={updateSearchTerm} value={searchTerm}/>
        <SearchResults name="Search Results" tracks={searchResultsTracks} onAddTrack={handleAddTrack}/>
        <Playlist name={playlistTitle} tracks={playlistTracks} onRemoveTrack={handleRemoveTrack} onTitleChange={changePlaylistTitle} onSave={handleSave}/>
      </div>
    </div>
  );
}

export default App;
