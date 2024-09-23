import React, { useEffect } from 'react'
import { assets } from '../assets/assets'
import { TbArrowsRight, TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb';
import { FaPause, FaPlay, FaStopCircle } from 'react-icons/fa';
import { ImLoop } from 'react-icons/im';
import axios from 'axios';
import { usePlayer } from '../context/PlayerContext';
import { FaRegCircleStop, FaShuffle } from 'react-icons/fa6';

const Player = () => {
    // const {  } = useContext(PlayerContext);
    const { play, seekBar, seekBg, pause, playStatus, time, previous, next, seekSong, track, loop, toggleLoop, shuffleSongs, shuffled, playlist,notifyRef,notify,message } = usePlayer();
    // const getData = async () => {

    //     const config = {
    //         params: {
    //             ids: '3IBcauSj5M2A6lTeffJzdv'
    //         },
    //         headers: {
    //             'x-rapidapi-key': '0631463a27msh368d41241b3b3a3p1810c4jsn5fe74b25f7c5',
    //             'x-rapidapi-host': 'spotify23.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         const response = await axios.get("https://spotify23.p.rapidapi.com/albums/",config);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    useEffect(() => {
        // console.log("Player loaded",track)
        console.log({
            shuffled,
            loop,
            track,
            playlist,
        })
        // getData();
    }, [shuffled, loop, track, playlist])

    return (
        <div className='h-[10%] relative bg-black justify-between flex gap-8 items-center text-white px-4' >
            <div ref={notifyRef} className={`absolute text-xs w-40 text-center right-1/2 translate-x-1/2 bottom-20 xl:bottom-28 xl:text-base rounded-full py-1 px-3 bg-black/80 text-white ${message?"visible":"invisible"}`}>{message}</div>
            <div className=' hidden lg:flex items-center gap-4'>
                <img className='w-12' src={playlist[track.id].image} alt="" />
                <div>
                    <p className='font-medium'>{playlist[track.id].name}</p>
                    <p className='text-sm'>{playlist[track.id].desc}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 mx-auto" >
                <div className="flex gap-4">
                    {!shuffled ? <TbArrowsRight className='w-4 cursor-pointer' onClick={shuffleSongs} /> : <FaShuffle className='w-4 cursor-pointer' onClick={shuffleSongs} />}

                    <TbPlayerTrackPrevFilled onClick={previous} className={`w-4 cursor-pointer ${track?.id <= 0 ? 'text-neutral-500' : ''}`} />
                    {!playStatus ? <FaPlay onClick={play} className='w-4 cursor-pointer' />
                        : <FaPause className='w-4 cursor-pointer' onClick={pause} />}
                    <TbPlayerTrackNextFilled onClick={next} className={`w-4 cursor-pointer ${track?.id >= playlist.length - 1 ? 'text-gray-500' : ''}`} />
                    {loop ? <ImLoop className='w-4 cursor-pointer' onClick={toggleLoop} /> : <FaStopCircle className='w-4 cursor-pointer' onClick={toggleLoop} />}
                </div>
                <div className="flex items-center gap-5">
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p>{time.totalTime.minute || '00'}:{time.totalTime.second || '00'}</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 opacity-75" >
                <img className='w-4' src={assets.plays_icon} alt="" />
                <img className='w-4' src={assets.mic_icon} alt="" />
                <img className='w-4' src={assets.queue_icon} alt="" />
                <img className='w-4' src={assets.speaker_icon} alt="" />
                <img className='w-4' src={assets.volume_icon} alt="" />
                <div className="w-20 bg-slate-50 h-1 rounded">

                </div>
                <img className='w-4' src={assets.mini_player_icon} alt="" />
                <img className='w-4' src={assets.zoom_icon} alt="" />
            </div>

        </div>
    )
}

export default Player