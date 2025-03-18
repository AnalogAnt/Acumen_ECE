/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import {TitleText,TypingText} from '../components'
import { About } from '.';
const Hero = () => (
  <section className={`${styles.yPaddings} bg-[url('/Acumen_25.png')] bg-cover  h-screen text-center `}>
    
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto p-0 flex flex-col will-change-transform will-change-opacity`}
    >
    <div className="flex flex-col justify-start items-center z-5 mt-0">
          <TitleText title="ACUMEN ECE 2025" textStyles="text-center text-[90px] font-anta bg-gradient-to-r from-[#ff3bff] via-[#ECBFBF] via-[#5C24FF] to-[#D94FD5] text-transparent bg-clip-text gradient-move "/>
      </div> 

      <div className='hidden justify-center mt-2 md:flex pr-4'>
          {/* <button className='border-none bg-transparent text-black mr-4'>
            Sign In
          </button> */}
          <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSeb6zczOuTsxp_SIuijQcE67rkeUSqOhORpVfwbROt9CSSzfw/viewform"
  target="_blank"
  rel="noreferrer"
>

  <button className="relative p-[2px] bg-gradient-to-r from-[#ff3bff] to-[#5C24FF] rounded-[32px]">
    <span className="block bg-black px-6 py-4 text-white text-[16px] font-normal rounded-[30px]">
      Register Here
    </span>
  </button>
</a>

        </div>
      
    </motion.div>
  </section>
);

export default Hero;
