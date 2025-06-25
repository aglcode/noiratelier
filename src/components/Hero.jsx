import React from 'react'
import { motion } from 'framer-motion'
import herovid from '../assets/herovid.mp4'

const Hero = () => {
  return (
    <main>
      <motion.section
        className="pt-32 sm:pt-96 pb-8 bg-[var(--color-dark)] text-[var(--color-light)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div className="px-4 sm:px-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1 className="heading text-4xl sm:text-9xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          >Noir Atelier</motion.h1>
          <motion.h4 className="sub-heading text-lg sm:text-3xl tracking-widest"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          >
            Crafted for the Bold. Designed for the Refined.
          </motion.h4>
        </motion.div>
      </motion.section>

      <motion.div className="w-full overflow-hidden h-64 sm:h-[900px] relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
      >
        <motion.video src={herovid} 
         autoPlay
         loop
         muted
         playsInline
        className="w-full h-full object-cover object-center block"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
      </motion.div>
    </main>
  )
}

export default Hero