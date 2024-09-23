import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setISOpen] = useState(false);
  const toggleOwner = () => {
    setISOpen(old => !old);
  }
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className="flex items-center gap-2 ">
          <img src={assets.arrow_left} alt="" onClick={() => navigate(-1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" />
          <img src={assets.arrow_right} alt="" onClick={() => navigate(1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" />
        </div>
        <div className="flex items-center gap-4 ">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer hidden md:block">Explore Premium </p>
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">Install App</p>
          <div className='relative group w-fit'>
            <p className="bg-purple-500 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer" onClick={toggleOwner}>A</p>
            {
              isOpen && <div className='absolute flex flex-col gap-1 max-w-sm right-0 -translate-x-1 top-8 md:text-[15px] rounded-lg bg-zinc-600/30 backdrop-blur-md py-2 px-4 text-[12px] cursor-pointer'>
                <p>Made by Abhishek with ❤️</p>
                <Link to={'https://www.linkedin.com/in/fsd-abhiii/'} className='flex gap-2 items-center cursor-pointer'><FaLinkedin className='min-w-4' /><p className='text-nowrap text-sm'>linkedin.com/in/fsd-abhiii/</p></Link>
                <Link to={'https://github.com/abhishekrajput6916/'} className='flex gap-2 items-center cursor-pointer'><FaGithub className='min-w-4' /><p className='text-nowrap text-sm'>github.com/abhishekrajput6916</p></Link>
              </div>
            }
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4 ">
        <p className="bg-white text-black px-4 py-1 rounded-2xl ">All</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer ">Music</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer ">Podcast</p>

      </div>
    </>
  )
}

export default Navbar