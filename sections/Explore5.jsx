'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles';
import { exploreWorlds5 } from '../constants';
import { staggerContainer } from '../utils/motion';
import { TitleText, TitleText3 } from '@/components/CustomTexts';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col will-change-transform will-change-opacity`}
      >
        <TitleText title="The Events" textStyles="text-center text-white text-[40px]" />

        
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={true}
          lazy={true}
          touchStartForcePreventDefault={false} 
          touchReleaseOnEdges={true} 
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-5xl"
        >
          {exploreWorlds5.map((world) => (
            <SwiperSlide key={world.id} className="flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[60vh] max-h-[400px]">
                <img
                  src={world.Poster}
                  alt={world.title}
                  className="w-full h-full object-cover rounded-lg pointer-events-none" 
                  loading="lazy"
                />
              </div>
              <TitleText3 textStyles="text-[22px] mt-4 text-center" title={world.title} />
            </SwiperSlide>
          ))}
        </Swiper>


      </motion.div>
    </section>
  );
};

export default Explore;
