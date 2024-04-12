/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  
<motion.footer
  variants={footerVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.xPaddings} py-8 relative`}
>
  <div className="footer-gradient" />
  <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
    <div className="flex items-center justify-between flex-wrap gap-5">
      <h4 className="font-bold md:text-[64px] text-[44px] text-white">
        Register for Acumen
      </h4>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeb6zczOuTsxp_SIuijQcE67rkeUSqOhORpVfwbROt9CSSzfw/viewform" target="_blank" rel="noreferrer">
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
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

    <div className="flex flex-col">
      <div className="mb-[50px] h-[2px] bg-white opacity-10" />

      <div className="flex items-center justify-between h-50 flex-wrap gap-4">

        <h4 className="w-screen font-extrabold mb-2 text-[24px] text-white">
          ACUMEN
        </h4>
        <div className='mb-5'>
          <dl className='text-white'>
            <dt className='font-bold'>Contact:-</dt>
            <dd>D.Nithin: +91-7659972439 </dd>
            <dd>Anjana Shroff: +91-7893909029 </dd>
          </dl>

        </div>
        <div className='flex-col w-25 mb-5'>
          <div className='flex flex-col gap-2'>
            <p className='text-white '><span className='font-bold'>Address:-</span> Vasavi College of Engineering, Ibrahim Bagh, <br />Hyderabad, Telangana 500031</p>
            <a href='https://maps.app.goo.gl/Fvpc2fscM3xVzH1q6' className='text-sky-500 underline' target="_blank" rel="noreferrer">
              MAPS
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          {socials.map((social) => (
            <a href={social.url} target='_blank' rel='noreferrer'>
              <img
                key={social.name}
                src={social.imgUrl}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            </a>
          ))}
        </div>

      </div>
    </div>
  </div>
</motion.footer>
);

export default Footer;
