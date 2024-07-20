import './App.css';
import React, { useState, useEffect } from 'react';
import SearchResults from './sub-components/SearchResults';
import Playlist from './sub-components/Playlist';
import SearchBar from './sub-components/SearchBar';
import Spotify from './sub-components/Spotify';

function App() {

  const [searchResultsTracks, setSearchResultsTracks] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const [currentAudio, setCurrentAudio] = useState(null);
  const [currentPlayingTrack, setCurrentPlayingTrack] = useState(null);

  useEffect(() => {
    // Trigger authorization on page load
    Spotify.getAccessToken();
  }, []);
  
  const handlePlayPause = (track) => {
    if (currentPlayingTrack && currentPlayingTrack.id === track.id) {
      // Pause if the same track is clicked again
      currentAudio.pause();
      setCurrentPlayingTrack(null);
    } else {
      // Pause the current track if a new track is played
      if (currentAudio) {
        currentAudio.pause();
      }
      // Play the new track
      const newAudio = new Audio(track.preview_url);
      newAudio.play();
      setCurrentAudio(newAudio);
      setCurrentPlayingTrack(track);

      newAudio.addEventListener('ended', () => {
        setCurrentPlayingTrack(null);
        setCurrentAudio(null);
      });
    }
  };
  
  const handleAddTrack = (track) => {
    if (!playlistTracks.find(item => item.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
      setSuccessMessage(false);
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
  
  const handleSave = async () => {
    await Spotify.savePlaylist(playlistTitle, playlistTracks);
    setPlaylistTracks([]); // Reset the playlist
    setPlaylistTitle(''); // Reset the title
    setSuccessMessage(true);
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
        <SearchResults 
          name="Results:" 
          tracks={searchResultsTracks} 
          onAddTrack={handleAddTrack}
          handlePlayPause={handlePlayPause}
          currentPlayingTrack={currentPlayingTrack}
        />
        <Playlist 
          name={playlistTitle} 
          tracks={playlistTracks} 
          onRemoveTrack={handleRemoveTrack} 
          onTitleChange={changePlaylistTitle} 
          onSave={handleSave} 
          onSuccess={successMessage}
          handlePlayPause={handlePlayPause}
          currentPlayingTrack={currentPlayingTrack}
        />
      </div>
    </div>
  );
}

export default App;
