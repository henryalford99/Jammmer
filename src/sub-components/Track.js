import React from 'react';

const Track = ({ track, onAddTrack, onRemoveTrack, isRemovable }) => {
    const handleAdd = () => {
        onAddTrack(track);
    };
    const handleRemove = () => {
        onRemoveTrack(track);
    }

    return (
        <div className="Track">
            <h3>{track.name}</h3>
            <p>Artist: {track.artist}</p>
            <p>Album: {track.album}</p>
            {isRemovable ? (<button onClick={handleRemove}>Remove</button>) 
            : (<button onClick={handleAdd}>Add</button>)}
        </div>
    )
};

export default Track;