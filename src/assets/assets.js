import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import HustleBanner from './HustleBanner.jpeg'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import BhaktiBanner from './BhaktiBanner.jpeg'

import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'
// Hustle Songs
import BadmosChora from './HustleSongs/BadmosChora.mp3'
import BabamBam from './HustleSongs/BabamBam.mp3'
import CheckItOut from './HustleSongs/CheckItOut.mp3'
import Jaadugar from './HustleSongs/Jaadugar.mp3'
import NainaKiTalwar from './HustleSongs/NainaKiTalwar.mp3'
import Payal from './HustleSongs/Payal.mp3'
import RamRam from './HustleSongs/RamRam.mp3'
import _2Woofer from './HustleSongs/_2Woofer.mp3'
//Bhakti Songs
import ShivShivShankara from './BhaktiSongs/ShivShivShankara.mp3';
import ShivKailashoKeVasi from './BhaktiSongs/ShivKailashoKeVasi.mp3';
import ShivSamaRahe from './BhaktiSongs/ShivSamaRahe.mp3';
import KishoriKuchAisa from './BhaktiSongs/KishoriKuchAisa.mp3';
import MeraAapkiKripaSe from './BhaktiSongs/MeraAapkiKripaSe.mp3';
import ShreeKrishnaGovind from './BhaktiSongs/ShreeKrishnaGovind.mp3';
import ParvatiBoliShankarSe from './BhaktiSongs/ParvatiBoliShankarSe.mp3';
import ShivKaDas from './BhaktiSongs/ShivKaDas.mp3';
import KeejoKesariKeLal from './BhaktiSongs/KeejoKesariKeLal.mp3';



export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}


export const BhaktiSongs = [
    {
        id:0,
        name: "Shiv Shiv Shankara",    
        image: BhaktiBanner,
        file:ShivShivShankara,
        desc:"Put a smile on your face.",
        duration:"3:00"
    },
    {
        id:1,
        name: "Shiv Kailasho Ke Vasi",
        image: BhaktiBanner,
        file:ShivKailashoKeVasi,
        desc:"Put a smile on your face.",
        duration:"2:20"
    },
    {
        id:2,
        name: "Shiv Sama Rahe",
        image: BhaktiBanner,
        file:ShivSamaRahe,
        desc:"Put a smile on your face.",
        duration:"2:32"
    },
    {
        id:3,
        name: "Kishori Kuch Aisa Intezam Hojaye",
        image: BhaktiBanner,
        file:KishoriKuchAisa,
        desc:"Put a smile on your face.",
        duration:"2:50"
    },
    {
        id:4,
        name: "Mera Aapki Kripa Se",
        image: BhaktiBanner,
        file:MeraAapkiKripaSe,
        desc:"Put a smile on your face.",
        duration:"3:10"
    },
    {
        id:5,
        name: "Shree Krishna Govind",
        image: BhaktiBanner,
        file:ShreeKrishnaGovind,
        desc:"Put a smile on your face.",
        duration:"3:10"
    },
    {
        id:6,
        name: "Parvati Boli Shankar Se",
        image: BhaktiBanner,
        file:ParvatiBoliShankarSe,
        desc:"Put a smile on your face.",
        duration:"3:10"
    },
    {
        id:7,
        name: "Shiv Ka Das",
        image: BhaktiBanner,
        file:ShivKaDas,
        desc:"Put a smile on your face.",
        duration:"3:10"
    },
    {
        id:8,
        name: "Keejo Kesari Ke Lal",
        image: BhaktiBanner,
        file:KeejoKesariKeLal,
        desc:"Put a smile on your face.",
        duration:"3:10"
    }
]

export const HustleSongs = [
    {
        id:0,
        name: "Ram Ram",    
        image: HustleBanner,
        file:RamRam,
        desc:"Put a smile on your face.",
        duration:"3:00"
    },
    {
        id:1,
        name: "Badmos Chora",
        image: HustleBanner,
        file:BadmosChora,
        desc:"Put a smile on your face.",
        duration:"2:20"
    },
    {
        id:2,
        name: "Payal",
        image: HustleBanner,
        file:Payal,
        desc:"Put a smile on your face.",
        duration:"2:32"
    },
    {
        id:3,
        name: "NainaKi Talwar",
        image: HustleBanner,
        file:NainaKiTalwar,
        desc:"Put a smile on your face.",
        duration:"2:50"
    },
    {
        id:4,
        name: "Babam Bam",
        image: HustleBanner,
        file:BabamBam,
        desc:"Put a smile on your face.",
        duration:"3:10"
    },
    {
        id:5,
        name: "Jaadugar",
        image: HustleBanner    ,
        file:Jaadugar,
        desc:"Put a smile on your face.",
        duration:"2:45"
    },
    {
        id:6,
        name: "Check It Out",
        image: HustleBanner,
        file:CheckItOut,
        desc:"Put a smile on your face.",
        duration:"2:18"
    },
    {
        id:7,
        name: "2 Woofer",
        image: HustleBanner,
        file:_2Woofer,
        desc:"Put a smile on your face.",
        duration:"2:35"
    }
]

export const albumsData = [
    {   
        id:0,
        name: "Top Hustle 2.0",
        image: HustleBanner,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#56165C",
        allSongs:HustleSongs, 
    },
    {   
        id:1,
        name: "Top Bhakti Songs",
        image: BhaktiBanner,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#EC4007",
        allSongs:BhaktiSongs, 
    },
    {   
        id:2,
        name: "Mega Hits,",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:3,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]
