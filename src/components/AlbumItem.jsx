import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { usePlayer } from '../context/PlayerContext'

const AlbumItem = ({image,name,desc,id}) => {
    const navigate=useNavigate()
    const {changeAlbum}=usePlayer();
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]' onClick={()=>{
      changeAlbum(id);
      console.log("album ID",id);
      navigate(`/album/${id}`)
    }}>
        <img src={image} alt="" className="rounded" />
        <p className="font-bold mt-2 mb-1">{name}</p>
        <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  )
}

export default AlbumItem