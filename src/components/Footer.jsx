import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Messenger, Pinterest, TikTok, XDark, YouTube} from 'developer-icons';

const Footer = () => {
  return (
    <main>
      <motion.section className="bg-[var(--color-light)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div className="max-w-5xl mx-auto px-4 pt-10 pb-0 text-black"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          {/* Top: Logo + Description */}
          <motion.div className="flex flex-col sm:flex-row items-start gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div className="min-w-[48px] mr-4 mb-4 sm:mb-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            >
              {/* SVG Logo */}
              <div className="w-10 h-10 flex items-center justify-center">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_105_284)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H50V50H0V0ZM100 50H50V100H0V150H50V200H100V150H150V200H200V150H150V100H200V50H150V0H100V50ZM100 100H150V50H100V100ZM100 100V150H50V100H100Z" fill="url(#paint0_linear_105_284)"/> </g> <defs> <linearGradient id="paint0_linear_105_284" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#A7B5FF"/> <stop offset="1" stop-color="#F3ACFF"/> </linearGradient> <clipPath id="clip0_105_284"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
              </div>
            </motion.div>
            <motion.p className="leading-relaxed text-base sm:text-lg max-w-2xl text-black"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
            >
             Noir Atelier is a fashion house rooted in bold expression and refined craftsmanship. Each collection is a study in contrast — structured yet fluid, minimal yet commanding. Our pieces are designed not just to be worn, but to be lived in, with an effortless sophistication that moves with you.

            We are committed to intentional creation. Every garment is made in limited quantities, using ethically sourced materials and timeless construction techniques. From first sketch to final stitch, our process is guided by quality, sustainability, and respect for the art of fashion.

            Thank you for stepping into our world of quiet power and modern luxury. Join our community to receive early access to new releases, private events, and style inspiration curated by the Noir Atelier team. Because what you wear should never whisper — it should speak with purpose.
            </motion.p>
          </motion.div>

          {/* Middle: Links */}
          <motion.hr className="border-t border-gray-800 my-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
          />
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-left text-sm mb-8 text-black"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          >
            <div>
              <div className="text-black">About</div>
              <div className="mt-2 text-gray-600">Works</div>
              <div className="text-gray-600">Pricing</div>
            </div>
            <div>
              <div className="text-black">Products</div>
              <div className="mt-2 text-gray-600">Agency</div>
              <div className="text-gray-600">Dashboard</div>
            </div>
            <div>
              <div className="text-black">DIcons</div>
              <div className="mt-2 text-gray-600">DShapes</div>
              <div className="text-gray-600">Graaadients</div>
            </div>
            <div>
              <div className="text-black">Design</div>
              <div className="mt-2 text-gray-600">Components</div>
              <div className="text-gray-600">Blogs</div>
            </div>
            <div>
              <div className="text-black">Graphic</div>
              <div className="mt-2 text-gray-600">3D Icons</div>
              <div className="text-gray-600">Colors</div>
            </div>
            <div>
              <div className="text-black">Contact</div>
              <div className="mt-2 text-gray-600">Terms</div>
              <div className="text-gray-600">Privacy</div>
            </div>
          </motion.div>
          <motion.hr className="border-t border-gray-800 mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
          />

          {/* Bottom: Socials + Copyright */}
          <motion.div className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div className="flex flex-wrap justify-center gap-6 mb-2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8, ease: 'easeOut' }}
            >
              {/* Social icons as placeholders */}
            <Facebook size={24}/>
            <Messenger size={24}/>
            <Pinterest size={24}/>
            <TikTok size={24}/>
            <XDark size={24}/>
            <YouTube size={24}/>
            </motion.div>
            <motion.div className="text-sm text-gray-600 mb-2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8, ease: 'easeOut' }}
            >
              © 2025 All Rights Reserved.
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
};

const iconStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  background: '#111',
  borderRadius: 12,
  fontSize: 22,
  color: '#fff',
  cursor: 'pointer'
};

export default Footer;