import React from 'react';
import Tracklist from './Tracklist';

const Playlist = ({ name, tracks, onRemoveTrack, onTitleChange, onSave }) => {
    return (
        <div className="Playlist">
            <input name="playlistName" onChange={onTitleChange} value={name} type="text" />
            <Tracklist tracks={tracks} onRemoveTrack={onRemoveTrack} isRemovable={true}/>
            <button onClick={onSave}>Save To Spotify</button>
        </div>
    )
};

export default Playlist;