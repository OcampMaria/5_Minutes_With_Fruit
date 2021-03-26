import React, { Component } from 'react'
import AudioPlayer from 'simple-react-audio-player'
 
const Playlist = (props) => {
    return (
        <ul className="playlist">
            <li key={yourkey}>
                <AudioPlayer src={ 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3' } />
            </li>
            <li key={yourkey}>
                <AudioPlayer src={'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba-online-audio-converter.com_-1.wav'} />
            </li>
            <li key={yourkey}>
                <AudioPlayer src={'https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-FLAC-File.flac'} />
            </li>
 
        </ul>
    )
}
 
export default Playlist