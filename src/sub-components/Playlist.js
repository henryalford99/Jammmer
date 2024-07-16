import React from 'react';
import Tracklist from './Tracklist';

const Playlist = ({ name, tracks, onRemoveTrack }) => {
    return (
        <div className="Playlist">
            <h2>{name}</h2>
            <Tracklist tracks={tracks} onRemoveTrack={onRemoveTrack} isRemovable={true}/>
        </div>
    )
};

export default Playlist;