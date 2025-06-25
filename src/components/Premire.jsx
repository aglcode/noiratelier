import React from 'react'
import { motion } from 'framer-motion'
import eyes from '../assets/eyes.jpg';
import video from '../assets/video.mp4';

const Premire = () => {
  return (
    <main>
        <motion.section className="min-h-screen p-0 m-0 bg-[var(--color-dark)] flex flex-col"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div className="w-full bg-[var(--color-dark)] px-4 pt-8 pb-4 z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1 className="text-white text-2xl sm:text-5xl font-normal text-left leading-tight heading"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            >
              From Paris rooftops to downtown streets — our lookbook captures Noir Atelier in motion.
            </motion.h1>
          </motion.div>
          <motion.div className="flex-1 w-full relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          >
            <motion.video
              src={video}
              className="w-full h-full object-cover m-0 p-0 absolute inset-0"
              autoPlay
              loop
              muted
              playsInline
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
            />
          </motion.div>
        </motion.section>
    </main>
  )
}

export default Premire