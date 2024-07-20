import React from 'react';

const Track = ({ track, onAddTrack, onRemoveTrack, isRemovable, handlePlayPause, isPlaying }) => {
    const handleAdd = () => {
        onAddTrack(track);
    };
    const handleRemove = () => {
        onRemoveTrack(track);
    }

    return (
        <div className="Track">
            <div className="album-cover">
                <img className="track-image" src={track.image} alt={track.name} />
                {track.preview_url && (
                    <button className="play-button" onClick={handlePlayPause}>
                        {isPlaying ? <span className="pause-icon"></span> : <span className="play-icon"></span>}
                    </button>
                )}
            </div>
            
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