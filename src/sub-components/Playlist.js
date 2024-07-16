import React from 'react';
import Tracklist from './Tracklist';

const Playlist = ({ name, tracks, onRemoveTrack, onTitleChange }) => {
    return (
        <div className="Playlist">
            <input onChange={onTitleChange} value={name} type="text" />
            <Tracklist tracks={tracks} onRemoveTrack={onRemoveTrack} isRemovable={true}/>
        </div>
    )
};

export default Playlist;