import React from 'react'
import { motion } from 'framer-motion'
import layingdown from '../assets/layingdown.jpg';

const Highlights = () => {
  return (
    <main className="min-h-screen p-0 m-0">
      <motion.section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${layingdown})` }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
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
            <motion.h1 className="heading text-xl sm:text-2xl text-white mb-2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            >Iconic Silhouettes</motion.h1>
            <motion.p className="sub-heading text-white text-sm sm:text-base"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
            >
              Elevate your presence with garments that sculpt the body and command attention. Each design in this chapter strikes a perfect balance between architectural tailoring and fluid movement.
            </motion.p>
          </motion.div>
          {/* Top Right */}
          <motion.div
            className="self-start justify-self-end text-right max-w-md"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1 className="heading text-4xl sm:text-7xl text-white leading-tight" style={{ lineHeight: 1 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
            >
              Urban<br />Reverie
            </motion.h1>
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
              <motion.h1 className="heading text-xl sm:text-2xl text-white mb-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8, ease: 'easeOut' }}
              >Chromatic Midnight</motion.h1>
              <motion.p className="sub-heading text-white text-sm sm:text-base"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8, ease: 'easeOut' }}
              >
                Dive into a palette where deep obsidian meets subtle undertones of charcoal and ink. Our Chromatic Midnight edit explores texture over color, letting luxe fabrics and precise cuts supply the drama.
              </motion.p>
            </motion.div>
            {/* Bottom Right */}
            <motion.div className="max-w-xs text-right"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8, ease: 'easeOut' }}
            >
              <motion.h1 className="heading text-xl sm:text-2xl text-white mb-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.8, ease: 'easeOut' }}
              >Soft Authority</motion.h1>
              <motion.p className="sub-heading text-white text-sm sm:text-base"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6, duration: 0.8, ease: 'easeOut' }}
              >
                Redefine power dressing through refined drapery and relaxed structure. Crafted from feather‑light wool, silk blends, and sustainably sourced cashmere, these looks exude quiet confidence.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  )
}

export default Highlights