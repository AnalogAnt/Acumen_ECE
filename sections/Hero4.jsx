/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { TitleText } from '@/components';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero4 = () => (
  <section className={`${styles.yPaddings}   flex flex-col justify-center`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col justify-center will-change-transform will-change-opacity`}
    >
      <div className="flex justify-center items-center flex-col relative py-8 z-10">
        <TitleText title="Technical Events" textStyles="text-center text-[90px] font-anta bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text font-bold drop-shadow-lg gradient-move "/>
      </div>

      
    </motion.div>
  </section>
);

export default Hero4;
