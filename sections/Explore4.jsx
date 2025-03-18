'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds4, exploreWorlds41, exploreWorlds42 } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard4, ExploreCard, TitleText, TypingText } from '../components';
import ExploreCard6 from '@/components/ExploreCard42';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  const [open, setOpen] = useState(false)
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col will-change-transform will-change-opacity`}
      >
      
        <TitleText
          title="The Events"
          textStyles="text-center text-white text-[40px]"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds4.map((world, index) => (
            <ExploreCard4
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds41.map((world, index) => (
            <ExploreCard6
              key={world.id}
              {...world}
              index={index}
              active={active}

              handleClick={setActive}
            />
          ))}
        </div>
        
      </motion.div>
    </section>
  );
};

export default Explore;
