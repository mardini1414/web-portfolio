'use client';

import React from 'react';
import Image from 'next/image';
import MardiniImage from '@/assets/img/mardini.jpg';
import { motion } from 'framer-motion';
import Heading1 from '../text/Heading1';
import Paragraph from '../text/Paragraph';

function HeroSection(): React.ReactNode {
  return (
    <section
      id="hero-section"
      className="min-h-min pb-[80px] pt-[80px] md:pt-[100px] bg-slate-100 flex xl:items-center"
    >
      <div className="container px-4 mx-auto flex justify-center xl:justify-between items-center flex-wrap-reverse lg:flex-nowrap mt-14 xl:mt-5">
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.25,
            type: 'tween',
            stiffness: 50,
            duration: 0.8,
          }}
          className="relative flex-1 mt-10 lg:mt-0 xl:max-w-[60%]"
        >
          <Heading1 text={'EXPERIENCED'} />
          <Heading1 text={'SOFTWARE DEVELOPER'} />
          <br />
          <Paragraph text="Hi, I'm Mardini, an experienced software developer focusing on web frontend and backend development. I excel in creating user-friendly interfaces and robust server-side solutions. Passionate about innovation and always eager to learn." />
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.5,
            type: 'tween',
            stiffness: 50,
            duration: 0.8,
          }}
          className="relative h-max w-[90%] bg-blue-500 lg:w-[340px] xl:w-[420px] 2xl:w-[520px]"
        >
          <div className="absolute w-full h-full border-2 border-black -translate-y-6 -translate-x-6"></div>
          <Image className="relative z-10" src={MardiniImage} alt="mardini" />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
