'use client';

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-cream"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative mb-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="36" stroke="#228B22" strokeWidth="4" strokeDasharray="180 60" />
          <circle cx="40" cy="40" r="26" stroke="#FFD700" strokeWidth="3" strokeDasharray="120 50" opacity="0.6" />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <h2 className="font-heading text-2xl font-bold text-primary mb-2">FAPPK</h2>
        <p className="text-sm text-gray-500 tracking-widest uppercase">Ferme Agropastorale</p>
      </motion.div>
      <motion.div
        className="mt-8 flex gap-2"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {['🐔', '🐰', '🐷', '🐟', '🐌'].map((emoji, i) => (
          <motion.span
            key={i}
            className="text-2xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { repeat: Infinity, repeatType: 'reverse', duration: 0.8 } },
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
