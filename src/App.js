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
    Spotify.savePlaylist(playlistTitle, playlistTracks);
    setPlaylistTracks([]); // Reset the playlist
  };

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const searchTerm = e.target.elements.searchBox.value;
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
      <h1>Jammmer</h1>
      <SearchBar onSearch={handleSearch} onChange={updateSearchTerm} value={searchTerm}/>
      <SearchResults name="Search Results" tracks={searchResultsTracks} onAddTrack={handleAddTrack}/>
      <Playlist name={playlistTitle} tracks={playlistTracks} onRemoveTrack={handleRemoveTrack} onTitleChange={changePlaylistTitle} onSave={handleSave}/>
    </div>
  );
}

export default App;
