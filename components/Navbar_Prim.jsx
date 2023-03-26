/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'


import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Router from 'next/router'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-50 bg-black fixed drop-shadow-lg '>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center text-white'>
        <div className='cursor-pointer'onClick={() => Router.push('/')}>
          <img
            src="/stamp.png"
            alt="search"
            className="w-[60px] h-[60px] mr-4 object-contain gap-4"
          />
        </div>
          <h1 className='text-3xl flex font-bold mr-20 sm:text-4xl cursor-pointer' onClick={() => Router.push('/')}>ACUMEN</h1>
          <ul className='hidden md:flex  cursor-pointer mx-11'>
          <li className='text-center '><button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={() => Router.push('/Paper')}><span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Paper<br />Presentations</span></button></li>
          <li className='text-center'><button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={() => Router.push('/Poster')}><span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Poster<br />Presentations</span></button></li>
          <li className='text-center'><button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={() => Router.push('/ProjectExpo')}><span class="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Project<br />Expo</span></button></li>
          <li className='text-center'><button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={() => Router.push('/RoboticEvents')}><span class="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Robotic<br />Events</span></button></li>
          <li className='text-center'><button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={() => Router.push('/TechnicalEvents')}><span class="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Technical<br />Events</span></button></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          {/* <button className='border-none bg-transparent text-black mr-4'>
            Sign In
          </button> */}
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]" >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Register Here
          </span>
      </button>
        </div>
        <div className='md:hidden mr-4 bg-indigo-600' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full cursor-pointer' onClick={() => Router.push('/Paper')}>Paper Presentations</li>
          <li className='border-b-2 border-zinc-300 w-full cursor-pointer' onClick={() => Router.push('/Poster')}>Poster Presentations</li>
          <li className='border-b-2 border-zinc-300 w-full cursor-pointer' onClick={() => Router.push('/ProjectExpo')}>Project Expo</li>
          <li className='border-b-2 border-zinc-300 w-full cursor-pointer' onClick={() => Router.push('/RoboticEvents')}>Robotic Events</li>
          <li className='border-b-2 border-zinc-300 w-full cursor-pointer' onClick={() => Router.push('/TechnicalEvents')}>Technical Events</li>

        <div className='flex flex-col my-4'>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] hover:bg-black rounded-[32px] gap-[12px]" style={{"marginTop": "-12px"}}>
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Register Here
          </span>
        </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;