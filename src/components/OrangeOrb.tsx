import React from 'react';
import { motion } from 'framer-motion';

const OrangeOrb: React.FC = () => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '19%',
        right: '22%',
        width: '58px',
        height: '58px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 34% 34%, #ffe4b8 0%, #e8a35e 28%, #b66c34 60%, #5d2f1a 100%)',
        boxShadow:
          '0 0 16px rgba(221,148,79,0.75), 0 0 34px rgba(167,101,50,0.48), 0 0 64px rgba(116,64,35,0.32), inset -4px -4px 10px rgba(255,239,208,0.18)',
        zIndex: 3,
        cursor: 'default',
      }}
      animate={{
        y: [0, -8, -4, -10, 0],
        x: [0, 2, -2, 3, 0],
        scale: [1, 1.03, 0.99, 1.02, 1],
        rotate: [0, 1.6, -1, 2, 0],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: 'easeInOut',
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
      whileHover={{
        scale: 1.08,
        boxShadow:
          '0 0 22px rgba(231,161,93,0.9), 0 0 46px rgba(188,112,59,0.55), 0 0 80px rgba(122,71,38,0.38), inset -5px -5px 10px rgba(255,239,208,0.24)',
        transition: { duration: 0.28 },
      }}
    >
      {/* Inner practical core */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '8px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 40% 40%, rgba(255,245,225,0.9), rgba(228,170,110,0.55) 45%, rgba(125,74,40,0.25) 88%, transparent)',
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.04, 0.98, 1.03, 1],
        }}
        transition={{
          rotate: { duration: 18, repeat: Infinity, ease: 'linear' },
          scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
        }}
      />

      {/* Soft diffusion ring */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-14px',
          borderRadius: '50%',
          border: '1px solid rgba(226,167,103,0.25)',
          boxShadow: '0 0 16px rgba(157,94,52,0.32)',
        }}
        animate={{
          rotate: -360,
          scale: [1, 1.07, 1],
          opacity: [0.4, 0.62, 0.4],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
          opacity: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' }
        }}
      />

      {/* Central bright core */}
      <div
        style={{
          position: 'absolute',
          top: '28%',
          left: '28%',
          width: '16%',
          height: '16%',
          borderRadius: '50%',
          background: 'rgba(255,244,224,0.78)',
          boxShadow: '0 0 6px rgba(255,238,210,0.65)',
        }}
      />
    </motion.div>
  );
};

export default OrangeOrb;
