import React from 'react'
import { motion } from 'framer-motion'
import leftimg from '../assets/walk.jpg';
import rightimg from '../assets/twogirls.jpg';
import man from '../assets/man.mp4';
import TiltedCard from '@/components/ui/TiltedCard';
import '@/components/ui/TiltedCard.css';

const Catalog = () => {
  return (
    <main className="min-h-screen m-0 p-0">
      <motion.section className="min-h-screen px-4 py-8 sm:px-8 sm:py-8 bg-[var(--color-light)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1 className="heading text-2xl sm:text-4xl font-normal mb-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >Catalog</motion.h1>
        <motion.p className="sub-heading text-base text-gray-700 max-w-2xl mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        >
          Discover the Noir Atelier Catalog — a curated selection of our signature pieces designed for the modern muse. From structured tailoring to fluid drapery, each garment embodies power and precision. Explore timeless silhouettes and bold statements crafted to elevate every moment.
        </motion.p>
        <motion.h1 className="text-lg sm:text-2xl font-normal mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        >Visuals</motion.h1>

        <motion.div className="flex flex-col md:flex-row gap-8 items-start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
        >
          {/* Left Section */}
          <motion.div className="flex-1 w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
          >
          <TiltedCard
            imageSrc={leftimg}
            altText="Left Image"
            captionText="Craftable Future"
            containerHeight="20rem"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={12}
            scaleOnHover={1.08}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
          />
            <motion.p className="sub-heading text-gray-700 text-base"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
            >
              From tailored classics to daring statements 2025
            </motion.p> <br />
            
            {/* Video with hover effect */}
            <motion.div 
              className="relative w-full h-48 sm:h-80 rounded-2xl mb-2 overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.8, ease: 'easeOut' }}
            >
              <motion.video 
                src={man}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:brightness-50"
                autoPlay
                loop 
                muted
                playsInline
              />
              {/* Hover text overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:brightness-50 transition-opacity duration-700 ease-in-out">
                <p className="sub-heading text-white text-center px-4 max-w-xs mb-2 drop-shadow-lg font-medium">
                  Experience the artistry of modern tailoring in motion
                </p>
                <p className="sub-heading text-white text-center px-4 max-w-xs mb-2 drop-shadow-lg font-medium">
                  Make your way to the top and create multile miracles
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div className="w-full md:max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8, ease: 'easeOut' }}
          >
            <TiltedCard
              imageSrc={rightimg}
              altText="Right Image"
              captionText="Visual Ecentric"
              containerHeight="43rem"
              containerWidth="100%"
              imageHeight="43rem"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.08}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
            <motion.p className="sub-heading text-gray-700 text-base"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8, ease: 'easeOut' }}
            >
              These are garments made to last — in construction, and in memory.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  )
}

export default Catalog