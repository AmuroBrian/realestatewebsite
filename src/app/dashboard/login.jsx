'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const properties = [
  { name: 'Megaworld', img: '/images/megaworld.png' },
  { name: 'Ayala', img: '/images/AYALA.png' },
  { name: 'SMDC', img: '/images/SMDC.png' },
  { name: 'DMCI', img: '/images/DMCI.png' },
  { name: 'Robinsons', img: '/images/robinson.png' },
  { name: 'Golden Topper', img: '/images/Golden Topper.png' },
  { name: 'Prosperity Realty', img: '/images/ipos.jpg' },
  { name: 'Vista Residences', img: '/images/Vista Land.png' },
];

export default function RealEstateListing() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerSlide = 8;
  const totalSlides = Math.ceil(properties.length / itemsPerSlide);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const currentItems = properties.slice(
    index * itemsPerSlide,
    index * itemsPerSlide + itemsPerSlide
  );

  while (currentItems.length < itemsPerSlide) {
    currentItems.push({ name: '', img: '' });
  }

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 100 : -100, opacity: 0 }),
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 sm:px-16">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-xl font-bold text-amber-400">INSPIRE REAL ESTATE</h1>
        <div className="space-x-4">
          <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">
            Log In
          </button>
          <button className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">
            Register
          </button>
        </div>
      </header>

      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif font-bold text-black mb-2">
          REAL ESTATE LISTING
        </h2>
        <p className="text-gray-600">Trusted developers & property partners</p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto">
        <div className="overflow-hidden relative h-[400px]">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {currentItems.map((item, idx) => (
                <motion.div
                  key={`${index}-${idx}`}
                  whileHover={{ y: -10 }}
                  className="rounded-xl overflow-hidden shadow bg-white "
                >
                  {item.img ? (
                    <div className="relative h-48 w-full">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400">Coming Soon</span>
                    </div>
                  )}
                  {item.name && (
                    <div className="p-7 text-center">
                      <h3 className="font-semibold text-amber-800">{item.name}</h3>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-amber-700" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-amber-700" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === i ? 'bg-black w-6' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
