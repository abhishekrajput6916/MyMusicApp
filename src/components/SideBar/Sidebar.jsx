import React from 'react'
import { assets } from '../../assets/assets'

const Sidebar = () => {
    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex '>
            <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around ">
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img src={assets.home_icon} alt="home icon" />
                    <p className='font-bold'>Home</p>
                </div>
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img src={assets.search_icon} alt="search icon" />
                    <p className='font-bold'>Search</p>
                </div>
            </div>
            <div className="rounded bg-[#121212] h-[85%]">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src={assets.stack_icon} alt="library icon" />
                        <p className='font-bold'>Your Library</p>
                    </div>
                    <div className="flex items-center">
                        <img src={assets.arrow_icon} className='w-5' alt="" />
                        <img src={assets.plus_icon} className='w-5' alt="" />
                    </div>
                    <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start">
                        <h1>Create your first playlist</h1>
                        <p className="font-light">it's easy we'll help you</p>
                        <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 '>Create Playlist</button>
                    </div>
                    <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start">
                        <h1>Let's find some podcasts to follow</h1>
                        <p className="font-light">we'll keep you updated on new episodes</p>
                        <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 '>Browse Podcasts Playlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar