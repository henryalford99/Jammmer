import React from 'react';
import Tracklist from './Tracklist';

const SearchResults = ({ name, tracks }) => {
    return (
        <div className="SearchResults">
            <h2>{name}</h2>
            <Tracklist tracks={tracks}/>
        </div>
    )
};

export default SearchResults;