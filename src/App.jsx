import { useContext, useState } from 'react'
import Sidebar from './components/Sidebar' 
import Player from './components/Player'
import { Router } from 'react-router-dom'
import Display from './components/Display'
import {usePlayer } from './context/PlayerContext'
function App() {
  const {audioRef,track}=usePlayer()
    return (
     <div className="h-svh bg-black">
      <div className="h-[90%] flex">
        <Sidebar/>
        <Display/>
      </div>

      <Player/>
      <audio ref={audioRef} src={track?.file} preload='auto'></audio>
     </div>
  )
}

export default App
