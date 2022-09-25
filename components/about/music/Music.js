import { useEffect, useState } from 'react'
import Spotify from './spotify/Spotify.js'

function Music({ tracks }) {
    return (
        <div>
            {tracks && (
                tracks.map(trackInfo => (
                    <Spotify
                        item={trackInfo}
                        key={trackInfo.id}
                    />
                ))
            )}
        </div>
    )
}

export default Music