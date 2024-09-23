import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { usePlayer } from '../context/PlayerContext'

const DisplayHome = () => {
    const {playlist}=usePlayer();
    return (
        <>
            <div className="mb-4">
                <h1 className='my-5 font-bold'>Feature Charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => <AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id}/>)}
                </div>
            </div>

            <div className="mb-4">
                <h1 className='my-5 font-bold'>Today's biggest hits</h1>
                <div className="flex overflow-auto">
                    {playlist.map((item, index) => <SongItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id}/>)}
                </div>
            </div>
        </>
    )
}

export default DisplayHome