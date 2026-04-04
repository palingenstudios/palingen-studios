import React from 'react';
import { motion } from 'framer-motion';

const OrangeOrb: React.FC = () => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '18%',
        right: '22%',
        width: '72px',
        height: '72px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #fff5e6, #ffcc66 20%, #ff9933 45%, #ff6600 70%, #cc3300 90%, #660000)',
        boxShadow:
          '0 0 40px #ff9933, 0 0 80px #ff6600, 0 0 140px #ff4400, 0 0 220px rgba(255,80,0,0.4), inset -5px -5px 15px rgba(255,255,255,0.3)',
        zIndex: 3,
        cursor: 'pointer',
      }}
      animate={{
        y: [0, -18, -8, -22, 0],
        x: [0, 8, -6, 12, 0],
        scale: [1, 1.08, 0.96, 1.05, 1],
        rotate: [0, 5, -3, 7, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        times: [0, 0.25, 0.5, 0.75, 1],
      }}
      whileHover={{
        scale: 1.3,
        boxShadow:
          '0 0 60px #ffcc00, 0 0 120px #ff8800, 0 0 200px #ff5500, 0 0 320px rgba(255,80,0,0.6), inset -8px -8px 20px rgba(255,255,255,0.4)',
        transition: { duration: 0.4 },
      }}
    >
      {/* Inner energy core */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '10px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.9), rgba(255,200,100,0.7) 40%, rgba(255,140,0,0.4) 80%, transparent)',
        }}
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{ 
          rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }}
      />
      
      {/* Pulsing energy rings */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-20px',
          borderRadius: '50%',
          border: '2px solid rgba(255,160,0,0.3)',
          boxShadow: '0 0 20px rgba(255,120,0,0.4)',
        }}
        animate={{ 
          rotate: -360, 
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: 'linear',
          opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }}
      />
      
      <motion.div
        style={{
          position: 'absolute',
          inset: '-35px',
          borderRadius: '50%',
          border: '1px solid rgba(255,180,0,0.2)',
          boxShadow: '0 0 15px rgba(255,140,0,0.3)',
        }}
        animate={{ 
          rotate: 360, 
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: 'linear',
          opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }}
      />
      
      {/* Energy particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#ffcc66',
            boxShadow: '0 0 6px #ff9933',
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [0, Math.cos(i * Math.PI / 3) * 40, 0],
            y: [0, Math.sin(i * Math.PI / 3) * 40, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Central bright core */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '20%',
          height: '20%',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.9)',
          boxShadow: '0 0 10px white',
        }}
      />
    </motion.div>
  );
};

export default OrangeOrb;
