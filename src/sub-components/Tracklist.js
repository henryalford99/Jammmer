import React from 'react';
import Track from './Track';

const Tracklist = ({ tracks, onAddTrack, onRemoveTrack, isRemovable, handlePlayPause, currentPlayingTrack }) => {
    return (
        <div className="Tracklist">
            {tracks.map(track => (
                <Track 
                    key={track.id} 
                    track={track} 
                    isRemovable={isRemovable} 
                    onAddTrack={onAddTrack} 
                    onRemoveTrack={onRemoveTrack}
                    handlePlayPause={() => handlePlayPause(track)}
                    isPlaying={currentPlayingTrack && currentPlayingTrack.id === track.id}
                />
            ))}
        </div>
    )
}

export default Tracklist;