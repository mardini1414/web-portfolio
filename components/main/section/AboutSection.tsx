'use client';

import React from 'react';
import Image from 'next/image';
import MardiniImage from '@/assets/img/mardini_2.jpg';
import { motion } from 'framer-motion';
import Heading1 from '../text/Heading1';
import Paragraph from '../text/Paragraph';

function AboutSection(): React.ReactNode {
  return (
    <section
      id="about-section"
      className="min-h-min pb-[80px] pt-[80px] md:pt-[100px] flex xl:items-center"
    >
      <div className="container px-4 mx-auto flex lg:justify-between lg:items-center flex-wrap xl:flex-nowrap">
        <div className="flex-1">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: 'tween',
              stiffness: 50,
              duration: 0.8,
            }}
            className="relative h-max w-[90%] lg:w-[340px] xl:w-[420px] 2xl:w-[520px] mt-20 xl:mt-0"
          >
            <div className="absolute w-full h-full border-2 border-black -translate-y-6 translate-x-6"></div>
            <Image className="relative z-10" src={MardiniImage} alt="mardini" />
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.25,
            type: 'tween',
            stiffness: 50,
            duration: 0.8,
          }}
          className="relative mt-10 xl:mt-0"
        >
          <Heading1 text="ABOUT ME" />
          <br />
          <Paragraph text="From Pandeglang Banten, born on June 6 1997, has an educational background at SMAN 12 Pandeglang and graduated from programming bootcamp. I am someone who likes to learn new things about programming. As a software developer, I have skills such as Javascript, PHP, React JS, Laravel and others. I have also contributed to several projects in creating web applications." />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
