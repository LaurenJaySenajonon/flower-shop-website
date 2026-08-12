'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RosePage() {
  const products = [
    { 
      id: 1, 
      name: 'Eternal Red Roses | Luxury Handcrafted Bouquet', 
      originalPrice: '₱2,200.00 PHP',
      price: '₱1,800.00 PHP', 
      image: '/images/Rose/1.png',
      isSale: true
    },
      { 
      id: 2, 
      name: 'Eternal Red Roses | Luxury Handcrafted Bouquet', 
      originalPrice: '₱2,200.00 PHP',
      price: '₱1,800.00 PHP', 
      image: '/images/Rose/1.png',
      isSale: true
    },
      { 
      id: 3, 
      name: 'Eternal Red Roses | Luxury Handcrafted Bouquet', 
      originalPrice: '₱2,200.00 PHP',
      price: '₱1,800.00 PHP', 
      image: '/images/Rose/1.png',
      isSale: true
    },
      { 
      id: 4, 
      name: 'Eternal Red Roses | Luxury Handcrafted Bouquet', 
      originalPrice: '₱2,200.00 PHP',
      price: '₱1,800.00 PHP', 
      image: '/images/Rose/1.png',
      isSale: true
    },
  ];

  // Luxury scroll animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20, filter: 'blur(4px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.9, ease: [0.215, 0.61, 0.355, 1] } 
    }
  };

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96, filter: 'blur(6px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      filter: 'blur(0px)',
      transition: { 
        duration: 0.85, 
        ease: [0.215, 0.61, 0.355, 1] 
      } 
    }
  };

  return (
    <main className="min-h-screen bg-[#0f172a] pt-40 pb-24 overflow-hidden relative">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f97316]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Container aligned with Navbar max-w-6xl and px-5 sm:px-8 padding */}
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >

        </motion.div>

        {/* Collection Header */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="mb-10"
        >
          <span className="font-[family-name:var(--font-cormorant)] text-[#f97316] text-xs sm:text-sm font-semibold tracking-[0.4em] uppercase block mb-3">
            Handcrafted Collection
          </span>
          <h1 className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-5xl text-white/95 font-bold tracking-wide">
            Rose Arrangements
          </h1>
        </motion.div>

        {/* Products Grid - Tightened Gap (gap-3 sm:gap-4) & 1:1 Aspect Ratio */}
        <motion.div 
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex flex-col group bg-transparent rounded-none overflow-hidden"
            >
              {/* Image Container with Square Aspect Ratio (1:1) */}
              <div className="relative aspect-square w-full bg-slate-900 rounded-none overflow-hidden border border-white/10 mb-2.5 shadow-md">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  sizes="(max-width: 640px) 50vw, 25vw" 
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                
                {/* Sale Badge */}
                {product.isSale && (
                  <div className="absolute top-2.5 left-2.5 bg-[#1e1b18]/85 backdrop-blur-md border border-white/10 px-2.5 py-0.5 rounded-none shadow-sm">
                    <span className=" text-[10px] sm:text-[11px] tracking-widest uppercase text-white font-medium">
                      Sale
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info Section */}
              <div className="flex flex-col flex-grow px-0.5">
                <h3 className="text-xs sm:text-sm text-white/90 leading-snug font-normal hover:text-[#f97316] transition-colors duration-300 line-clamp-2">
                  {product.name}
                </h3>

                <span className="text-[9px] sm:text-[10px] tracking-wider text-white/40 uppercase mt-1 mb-1.5">
                  MON&apos;S CRAFT LUPON
                </span>

                <div className="flex items-center gap-1.5 sm:gap-2 mt-auto pt-0.5">
                  <span className="text-[11px] sm:text-xs text-white/40 line-through">
                    {product.originalPrice}
                  </span>
                  <span className="text-xs sm:text-sm text-white font-semibold">
                    {product.price}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </main>
  );
}