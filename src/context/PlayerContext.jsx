import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { albumsData } from '../assets/assets';

export const PlayerContext = createContext();
const PlayerContextProvider = ({ children }) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const [loop, setLoop] = useState(false);
    const [shuffled, setShuffled] = useState(false);
    const [currAlbum,setCurrAlbum]=useState({...albumsData[0]})
    const [songsData,setSongsData]=useState([...currAlbum.allSongs])
    
    const [playlist, setPlaylist] = useState([...songsData]);

    const [track, setTrack] = useState(playlist[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0,
        },
        totalTime: {
            second: 0,
            minute: 0,
        }
    })
    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }
    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }
    const toggleLoop = () => {
        setLoop(old => !old);
    }

    const shuffleSongs = async () => {
        if (shuffled) {
            await songsData.map((song,index)=>song.id=index);
            await setPlaylist([...songsData]);
            setShuffled(false);
        } else {
            let shuffledList = [...playlist];
            for (let i = shuffledList.length - 1; i > 0; i--) {
                const newId=i;
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledList[i].id, shuffledList[j].id] = [shuffledList[j].id, shuffledList[i].id];
                [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
            }
            await setPlaylist(shuffledList);
            setShuffled(true);
        }
        playWithId(0);
        console.log(songsData);
    };



    const playWithId = async (id) => {
        await setTrack(playlist[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    }

    const previous = async (e) => {
        if (track.id > 0) {
            e.target.style.backgroundColor = "";
            await setTrack(playlist[track?.id - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }
    const next = async (e) => {
        if (track.id < playlist.length - 1) {
            await setTrack(playlist[track?.id + 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    }
    const changeAlbum=(id)=>{
        setCurrAlbum(albumsData[id])
    }
    const seekSong = async (e) => {
        // console.log(e);
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)
    }

    useEffect(() => {
        if (audioRef.current.currentTime === audioRef.current.duration) {
            loop ? next() : setPlayStatus(false);
        }
    })

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%"
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60),
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60),
                    }
                })
            }
        }, 1000)
    }, [audioRef])

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        playlist,setPlaylist,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWithId,
        previous, next,
        seekSong,
        loop, toggleLoop,
        shuffled, shuffleSongs,
        songsData,setSongsData,
        currAlbum,changeAlbum
    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProvider;

export const usePlayer = () => {
    const { ...all } = useContext(PlayerContext);
    return all;
}
