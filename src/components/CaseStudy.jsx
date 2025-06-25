import React from 'react'
import { motion } from 'framer-motion'
import bag from '../assets/bag.png';
import manbag from '../assets/manbag.png';

const CaseStudy = () => {
  return (
    <main>
        <motion.section className="bg-[var(--color-light)] px-4 py-16 sm:px-8 sm:py-32 min-h-[80vh] flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
           <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full max-w-3xl"
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
           >
             <motion.div className="flex-1 flex justify-center"
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
             >
               <motion.img 
                 src={bag} 
                 alt="Bag" 
                 className="w-full max-w-xs sm:max-w-md h-auto rounded-xl object-cover"
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
               />
             </motion.div>
             <motion.div className="flex-1 flex justify-center"
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
             >
               <motion.img 
                 src={manbag} 
                 alt="Man Bag" 
                 className="w-full max-w-xs sm:max-w-md h-auto rounded-xl object-cover"
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
               />
             </motion.div>
           </motion.div>
           <motion.p className="sub-heading text-center m-0"
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
           >Case Studies</motion.p>
        </motion.section>
    </main>
  )
}

export default CaseStudy