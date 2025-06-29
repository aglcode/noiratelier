import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import layingdown from '../assets/layingdown.jpg';
import darkgreen from '../assets/darkgreen.jpg';
import feet from '../assets/feet.jpg';
import greenback from '../assets/greenback.jpg';
import greenlayingdown from '../assets/greenlayingdown.jpg';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect.tsx';

const images = [layingdown, darkgreen, feet, greenback, greenlayingdown];

const Highlights = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [prevBgIndex, setPrevBgIndex] = useState(images.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevBgIndex(bgIndex);
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bgIndex]);

  return (
    <main className="min-h-screen p-0 m-0">
      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden">
       {/* Ghost overlay cross-fade */}
        <motion.div
          key={prevBgIndex}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${images[prevBgIndex]})`,
            backgroundColor: 'black',
            opacity: 1
          }}
        />
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${images[bgIndex]})`,
            backgroundColor: 'black',
            opacity: 1
          }}
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* Grid content */}
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-2 grid-rows-2 h-full w-full z-20 gap-4 sm:gap-8 p-4 sm:p-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          {/* Top Left */}
          <motion.div className="self-start justify-self-start max-w-xs"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          >
            <TextGenerateEffect
              words="Iconic Silhouettes"
              className="heading text-xl sm:text-2xl text-white mb-2"
              duration={1}
              filter={false}
            />
            <TextGenerateEffect
              words="Elevate your presence with garments that sculpt the body and command attention. Each design in this chapter strikes a perfect balance between architectural tailoring and fluid movement."
              className="sub-heading text-white text-sm sm:text-base"
              duration={1.2}
              filter={true}
            />
          </motion.div>
          {/* Top Right */}
          <motion.div
            className="self-start justify-self-end text-right max-w-md"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
          >
            <TextGenerateEffect
              words="Urban Reverie"
              className="heading text-4xl sm:text-7xl text-white leading-tight"
              duration={1}
              filter={false}
            />
          </motion.div>
          {/* Bottom Left (empty for spacing) */}
          <div className="hidden md:block" />
          {/* Bottom Center and Right */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-end gap-4 sm:gap-8 w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
          >
            {/* Bottom Center */}
            <motion.div className="max-w-xs"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8, ease: 'easeOut' }}
            >
              <TextGenerateEffect
                words="Chromatic Midnight"
                className="heading text-xl sm:text-2xl text-white mb-2"
                duration={1}
                filter={false}
              />
              <TextGenerateEffect
                words="Dive into a palette where deep obsidian meets subtle undertones of charcoal and ink. Our Chromatic Midnight edit explores texture over color, letting luxe fabrics and precise cuts supply the drama."
                className="sub-heading text-white text-sm sm:text-base"
                duration={1.2}
                filter={true}
              />
            </motion.div>
            {/* Bottom Right */}
            <motion.div className="max-w-xs text-right"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8, ease: 'easeOut' }}
            >
              <TextGenerateEffect
                words="Soft Authority"
                className="heading text-xl sm:text-2xl text-white mb-2"
                duration={1}
                filter={false}
              />
              <TextGenerateEffect
                words="Redefine power dressing through refined drapery and relaxed structure. Crafted from feather‑light wool, silk blends, and sustainably sourced cashmere, these looks exude quiet confidence."
                className="sub-heading text-white text-sm sm:text-base"
                duration={1.2}
                filter={true}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}

export default Highlights