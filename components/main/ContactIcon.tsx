'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type ContactIconProp = {
  icon: IconProp;
  url: string;
  delay: number;
};

function ContactIcon(props: ContactIconProp): React.ReactNode {
  const { icon, url, delay } = props;
  return (
    <motion.a
      initial={{
        scale: 0,
        opacity: 0,
      }}
      transition={{ delay: delay }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      className="block w-max"
      href={url}
      target="_blank"
    >
      <FontAwesomeIcon icon={icon} size="2x" />
    </motion.a>
  );
}

export default ContactIcon;
