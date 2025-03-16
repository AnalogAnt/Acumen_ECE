/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import { useRouter } from 'next/router';

import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Router from 'next/router'


const Navbar = ({ exploreRef }) => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const router = useRouter();

    
    const handleScrollToExplore = () => {
      if (router.pathname === '/') {
        // ✅ Scroll with offset to prevent About section from showing
        exploreRef?.current?.scrollIntoView({ behavior: 'smooth', });
      } else {
        // ✅ If on another page, navigate to home first
        router.push('/').then(() => {
          setTimeout(() => {
            document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 500); // Delay to ensure the page loads before scrolling
        });
      }
    };
    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-50 bg-black fixed drop-shadow-lg '>
      <div className='px-2 flex justify-between items-center w-full h-full'>
      <div>
          <a href="https://vce.ac.in/" target='_blank' rel='norefferer'>
            <img src="/logo_vce.png" alt="vce_logo" className='w-[100px] h-[80px] mr-3 object-contain gap-4' />
          </a>
        </div>
        
          
          <ul className='hidden gap-2  md:flex  cursor-pointer mx-11'>
          <li className='text-center flex flex-col justify-center'><button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group " onClick={handleScrollToExplore}><span className="px-5 py-2.5 rounded-md">Events</span></button></li>
          <li className='text-center flex flex-col justify-center'><button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group" onClick={() => Router.push('/Poster')}><span className="relative px-5 py-2.5 rounded-md">
              Core Team</span></button></li>
          <li className='text-center flex flex-col justify-center'><button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group" onClick={() => Router.push('/ProjectExpo')}><span className="relative px-5 py-2.5">Gallery</span></button></li>
          </ul>

          <div className='cursor-pointer'onClick={() => Router.push('/')}>
        
          <img
            src="/logo_acumen.png"
            alt="search"
            className="w-[100px] h-[80px]  object-contain gap-4"
          />
        
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
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeb6zczOuTsxp_SIuijQcE67rkeUSqOhORpVfwbROt9CSSzfw/viewform" target="_blank" rel="noreferrer">
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
        </a>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;