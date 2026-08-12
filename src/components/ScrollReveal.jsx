// src/components/ScrollReveal.jsx
'use client';

import { motion } from 'framer-motion';

const LUXURY_EASE = [0.215, 0.61, 0.355, 1];

export default function ScrollReveal({ 
  children, 
  variant = 'fade-up', // 'fade-up', 'blur-in', 'zoom-in', 'slide-left', 'slide-right'
  delay = 0,
  duration = 0.85,
  className = '',
  once = true // Set to false if you want elements to re-animate every time you scroll back up
}) {
  const variants = {
    'fade-up': {
      hidden: { opacity: 0, y: 35 },
      visible: { opacity: 1, y: 0 }
    },
    'blur-in': {
      hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
      visible: { opacity: 1, filter: 'blur(0px)', y: 0 }
    },
    'zoom-in': {
      hidden: { opacity: 0, scale: 0.94, y: 20 },
      visible: { opacity: 1, scale: 1, y: 0 }
    },
    'slide-left': {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 }
    },
    'slide-right': {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 }
    }
  };

  const selectedVariant = variants[variant] || variants['fade-up'];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
            duration,
            delay,
            ease: LUXURY_EASE,
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}