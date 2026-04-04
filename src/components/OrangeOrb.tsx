import React from 'react';
import { motion } from 'framer-motion';

const OrangeOrb: React.FC = () => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '18%',
        right: '22%',
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 35%, #ffe0a0, #ff9900 45%, #cc4400 80%, #550000)',
        boxShadow:
          '0 0 24px #ff8c00, 0 0 48px #ff6600, 0 0 90px #ff4400, 0 0 150px rgba(255,100,0,0.3)',
        zIndex: 3,
        cursor: 'pointer',
      }}
      animate={{
        y: [0, -14, -6, -18, 0],
        x: [0, 6, -4, 8, 0],
        scale: [1, 1.07, 0.97, 1.05, 1],
        boxShadow: [
          '0 0 24px #ff8c00, 0 0 48px #ff6600, 0 0 90px #ff4400',
          '0 0 36px #ffaa00, 0 0 72px #ff8800, 0 0 130px #ff6600',
          '0 0 20px #ff8c00, 0 0 40px #ff5500, 0 0 80px #ff3300',
          '0 0 30px #ffcc00, 0 0 60px #ffaa00, 0 0 110px #ff7700',
          '0 0 24px #ff8c00, 0 0 48px #ff6600, 0 0 90px #ff4400',
        ],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
      whileHover={{
        scale: 1.25,
        boxShadow:
          '0 0 50px #ffcc00, 0 0 100px #ff8800, 0 0 180px #ff5500, 0 0 250px rgba(255,80,0,0.5)',
        transition: { duration: 0.3 },
      }}
    >
      {/* Inner swirl */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '8px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 40% 30%, rgba(255,255,200,0.9), rgba(255,160,0,0.5) 60%, transparent)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      {/* Outer halo ring */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-16px',
          borderRadius: '50%',
          border: '1.5px solid rgba(255,160,0,0.25)',
          boxShadow: '0 0 12px rgba(255,120,0,0.3)',
        }}
        animate={{ rotate: -360, scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
};

export default OrangeOrb;
