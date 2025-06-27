import React, { useState } from 'react'
import { motion } from 'framer-motion'
import herovid from '../assets/herovid.mp4'
import { TextScramble } from "@/components/ui/text-scramble";

const Hero = () => {
  const [headingTrigger, setHeadingTrigger] = useState(false);
  const [subheadingTrigger, setSubheadingTrigger] = useState(false);

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
          <TextScramble
            className="heading text-4xl sm:text-9xl"
            as="h1"
            trigger={headingTrigger}
            onHoverStart={() => setHeadingTrigger(true)}
            onScrambleComplete={() => setHeadingTrigger(false)}
          >
            Noir Atelier
          </TextScramble>
          <TextScramble
            className="sub-heading text-lg sm:text-3xl tracking-widest"
            as="h4"
            duration={1.2}
            trigger={subheadingTrigger}
            onHoverStart={() => setSubheadingTrigger(true)}
            onScrambleComplete={() => setSubheadingTrigger(false)}
          >
            Crafted for the Bold. Designed for the Refined.
          </TextScramble>
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
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="w-auto mx-auto text-white text-xs sm:text-base flex items-center gap-2">
            Craft
            <span className="inline-block w-4 sm:w-8 h-0.5 bg-white opacity-70"></span>
            Envision
            <span className="inline-block w-4 sm:w-8 h-0.5 bg-white opacity-70"></span>
            Modify
          </span>
        </div>
      </motion.div>
    </main>
  )
}

export default Hero