'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds5, exploreWorlds51 } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard5, ExploreCard51, TitleText, TypingText } from '../components';

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
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Events" textStyles="text-center" />
        <TitleText
          title={<>Browse through the Events <br className="md:block hidden" /> for a Quickstart</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds5.map((world, index) => (
            <ExploreCard5
              key={world.id}
              {...world}
              index={index}
              active={active}
              open={open}
              setOpen={setOpen}
              handleClick={setActive}
            />
          ))}
        </div>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds51.map((world, index) => (
            <ExploreCard51
              key={world.id}
              {...world}
              index={index}
              active={active}
              open={open}
              setOpen={setOpen}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
