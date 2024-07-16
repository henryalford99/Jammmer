import React from 'react';
import Tracklist from './Tracklist';

const Playlist = ({ name, tracks }) => {
    return (
        <div className="Playlist">
            <h2>{name}</h2>
            <Tracklist tracks={tracks}/>
        </div>
    )
};

export default Playlist;