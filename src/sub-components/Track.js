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
            <img src={track.image} alt={track.name} className="track-image"/>
            <div className="track-info">
                <h3 className="track-name">{track.name}</h3>
                <p className="track-details">{track.artist} | {track.album}</p>
            </div>
            <div className="track-actions">
                {isRemovable ? (
                    <button onClick={handleRemove}>-</button>
                ) : (
                    <button onClick={handleAdd}>+</button>
                )}
            </div>
        </div>
    )
};

export default Track;