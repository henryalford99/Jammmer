import './App.css';
import React, { useState, useEffect } from 'react';
import SearchResults from './sub-components/SearchResults';
import Playlist from './sub-components/Playlist';
import SearchBar from './sub-components/SearchBar';
import Spotify from './sub-components/Spotify';

function App() {

  const [searchResultsTracks, setSearchResultsTracks] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState('Playlist Name');
  const [searchTerm, setSearchTerm] = useState('');
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Trigger authorization on page load
    Spotify.getAccessToken();
  }, []);
  
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
    console.log('handleSearch triggered');

    try {
      const searchTerm = e.target.elements.searchBox.value;
      console.log('Search Term:', searchTerm);
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
    };
    setIsContentVisible(true);
  }

  return (
    <div className="App">
      <h1 id="one">Ja</h1>
      <h1 id="two">mmm</h1>
      <h1 id="three">er</h1>
      <SearchBar onSearch={handleSearch} onChange={updateSearchTerm} value={searchTerm}/>
      <div className="content" style={{ display: isContentVisible ? 'flex' : 'none' }}>
        <SearchResults name="Search Results" tracks={searchResultsTracks} onAddTrack={handleAddTrack}/>
        <Playlist name={playlistTitle} tracks={playlistTracks} onRemoveTrack={handleRemoveTrack} onTitleChange={changePlaylistTitle} onSave={handleSave}/>
      </div>
    </div>
  );
}

export default App;
