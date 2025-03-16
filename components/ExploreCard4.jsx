//ROBOTIC EVENTS
/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import { Typography } from '@mui/material';
import { TitleText2 } from './CustomTexts';


const ExploreCard4 = ({ id, imgUrl, Poster, title, subtitle, open, setOpen, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onMouseOver={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white bg-black p-2 rounded-xl absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
      
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px] bg-sky-500 hover:bg-[#64559d]`}
        >
          <img
            src="/headset.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain" onClick={() => setOpen(true)}
          />
          <Modal
  open={open}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <ModalDialog 
    layout="center" 
    size="lg" 
    variant="soft"
    className="bg-transparent shadow-none backdrop-blur-sm flex flex-row items-center p-6 rounded-lg w-full max-w-3xl"
    sx={{
      display: "flex",
      flexDirection: "row", // ✅ Forces horizontal layout
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "black",  // ✅ Ensures transparency
      boxShadow: "none",  // ✅ Removes default shadow
    }}
  >
    <ModalClose onClick={() => setOpen(false)} className="absolute top-4 right-4 text-white" />
    
    {/* Left Side - Poster Image */}
    <div className="w-1/2 p-4">
      <img src={Poster} alt="Event Poster" className="w-full h-auto rounded-lg shadow-lg" />
    </div>

    {/* Right Side - Event Content */}
    <div className="w-1/2 p-4 text-white text-center flex flex-col justify-center">
      <TitleText2 title={title} textStyles='text-white' />
      <Typography className="italic text-sm mt-2">
        {subtitle}
      </Typography>
    </div>
  </ModalDialog>
</Modal>


        </div>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Click the Headset for the Event Poster
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px]  bg-black p-2 rounded-xl text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard4;

