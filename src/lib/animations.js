// src/lib/animations.js

export const LUXURY_EASE = [0.215, 0.61, 0.355, 1];

// Page entrance transition
export const pageVariants = {
  hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: LUXURY_EASE } 
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    filter: 'blur(2px)',
    transition: { duration: 0.4, ease: 'easeIn' } 
  }
};

// Section Header Reveal
export const headerVariants = {
  hidden: { opacity: 0, y: -20, filter: 'blur(4px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: LUXURY_EASE } 
  }
};

// Grid Parent (Staggered Children)
export const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Individual Card / Element Reveal
export const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96, filter: 'blur(6px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.85, 
      ease: LUXURY_EASE 
    } 
  }
};