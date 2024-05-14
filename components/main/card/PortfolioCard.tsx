'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import Heading2 from '../text/Heading2';

type PortfolioCardProp = {
  title: string;
  image: StaticImageData;
};

function PortfolioCard(props: PortfolioCardProp): React.ReactNode {
  const { title, image } = props;
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: 'tween', stiffness: 50, duration: 0.8, delay: 0.25 }}
    >
      <Heading2 text={title} className="mb-3" />
      <Image className="aspect-video object-cover" src={image} alt={title} />
    </motion.div>
  );
}

export default PortfolioCard;
