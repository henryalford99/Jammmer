import React from 'react';
import Track from './Track';

const Tracklist = ({ tracks, onAddTrack, onRemoveTrack, isRemovable }) => {
    return (
        <div className="Tracklist">
            {tracks.map(track => (
                <Track key={track.id} track={track} isRemovable={isRemovable} onAddTrack={onAddTrack} onRemoveTrack={onRemoveTrack}/>
            ))}
        </div>
    )
}

export default Tracklist;