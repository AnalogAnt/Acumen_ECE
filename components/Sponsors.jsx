'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';


import { sponsorsList } from '../constants';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from '../styles';

const Sponsors = () => {

  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Only render the slider when windowWidth is defined
  if (!windowWidth) return null;
  

  const containerSize = windowWidth / 4 - 20; // calculate the container size based on the screen width and number of containers

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
  };

  const sponsorItems = sponsorsList.map((sponsor) => (
    <div
      key={sponsor.id}
      className="p-4"
      style={{ padding: "0 10px", width: `${containerSize}px` }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: `${containerSize}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "14px",
        }}
      >
        <img
          className="cursor-pointer"
          src={sponsor.imgUrl}
          alt={sponsor.title}
          style={{
            height: "auto",
            width: "auto",
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
      </div>
    </div>
  ));

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| Sponsors" textStyles="text-center" />
      </motion.div>
      <div style={{ width: "75%", margin: "0 auto" }}>
        <Slider {...settings}>{sponsorItems}</Slider>
      </div>
    </section>
  );
};

export default Sponsors;