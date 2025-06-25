import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <main>
        <motion.section className="bg-[var(--color-light)] px-4 py-8 sm:px-8 sm:py-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
         >
            <motion.h1
              className="text-3xl sm:text-6xl md:text-9xl font-normal leading-tight text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            >
              Noir Atelier redefines modern fashion with a distinctive edge. Our collections are built on strong tailoring, rich textures, and thoughtful detail — creating garments that embody confidence, sophistication, and quiet rebellion.
            </motion.h1>
         </motion.div>
        </motion.section>
    </main>
  )
}

export default About