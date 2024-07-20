import React from 'react';
import Tracklist from './Tracklist';

const SearchResults = ({ name, tracks, onAddTrack, handlePlayPause, currentPlayingTrack }) => {
    return (
        <div className="SearchResults">
            <h2>{name}</h2>
            <Tracklist 
                tracks={tracks} 
                onAddTrack={onAddTrack} 
                isRemovable={false}
                handlePlayPause={handlePlayPause}
                currentPlayingTrack={currentPlayingTrack}
            />
        </div>
    )
};

export default SearchResults;