import React from 'react';
import Tracklist from './Tracklist';

const Playlist = ({ name, tracks, onRemoveTrack, onTitleChange, onSave }) => {
    return (
        <div className="Playlist">
            <input name="playlistName" onChange={onTitleChange} value={name} placeholder="Playlist Title" type="text" />
            <button onClick={onSave}>SAVE TO SPOTIFY</button>
            <Tracklist tracks={tracks} onRemoveTrack={onRemoveTrack} isRemovable={true}/>
        </div>
    )
};

export default Playlist;