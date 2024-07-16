import React from 'react';
import Tracklist from './Tracklist';

const SearchResults = ({ name, tracks, onAddTrack }) => {
    return (
        <div className="SearchResults">
            <h2>{name}</h2>
            <Tracklist tracks={tracks} onAddTrack={onAddTrack} isRemovable={false}/>
        </div>
    )
};

export default SearchResults;