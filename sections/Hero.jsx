/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import { About } from '.';

const Hero = () => (
  <section 
    className={` h-screen text-center flex flex-col justify-start 
    bg-cover bg-[url('/main.png')] sm:bg-[url('/Acumen_25.png')]`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto p-0 flex flex-col justify-start relative z-10 will-change-transform will-change-opacity`}
    >
      <div className="flex flex-col justify-start items-center z-5 mt-0">
        {/* <div className="block md:hidden">
          <TitleText 
            title={<>ACUMEN<br />ECE<br />2025</>}
            textStyles="text-center text-[55px] xs:text-[65px] sm:text-[80px] font-anta bg-gradient-to-r from-[#ff3bff] via-[#ECBFBF] via-[#5C24FF] to-[#D94FD5] text-transparent bg-clip-text gradient-move leading-tight"
          />
        </div>
        <div className="hidden md:block">
          <TitleText 
            title="ACUMEN ECE 2025"
            textStyles="text-center text-[90px] lg:text-[120px] xl:text-[140px] 2xl:text-[160px] font-anta bg-gradient-to-r from-[#ff3bff] via-[#ECBFBF] via-[#5C24FF] to-[#D94FD5] text-transparent bg-clip-text gradient-move"
          />
        </div> */}

        <div className="flex flex-col justify-start items-center z-5 mt-10 md:mt-0">
          <TitleText 
            title="ACUMEN ECE" 
            textStyles="text-center text-[70px] lg:text-[90px] xl:text-[90px] 2xl:text-[90px] font-anta bg-gradient-to-r from-[#ff3bff] via-[#ECBFBF] via-[#5C24FF] to-[#D94FD5] text-transparent bg-clip-text gradient-move"
          />
          <TitleText 
            title="10-04-2025" 
            textStyles="text-center text-[40px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px] font-anta bg-gradient-to-r from-[#ff3bff] via-[#ECBFBF] via-[#5C24FF] to-[#D94FD5] text-transparent bg-clip-text gradient-move"
          />
        </div>


        
        
      </div> 

      
      


      <div className='flex flex-row items-center justify-center mt-2 mb-36 md:flex pr-4'>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeb6zczOuTsxp_SIuijQcE67rkeUSqOhORpVfwbROt9CSSzfw/viewform"
          target="_blank"
          rel="noreferrer"
        >
          <button className=" p-[2px] align-middle bg-gradient-to-r from-[#ff3bff] to-[#5C24FF] rounded-[32px]">
            <span className="block bg-black px-4 py-4 text-white text-[16px] font-normal rounded-[30px]">
              Register Here
            </span>
          </button>
        </a>
      </div>
    </motion.div>
  </section>
);

export default Hero;
