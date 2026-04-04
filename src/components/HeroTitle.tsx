import React from 'react';
import { motion } from 'framer-motion';

const HeroTitle: React.FC = () => {
  return (
    <div
      id="home"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 6,
        width: '100%',
        padding: '0 1rem',
        pointerEvents: 'none',
      }}
    >
      <motion.p
        initial={{ opacity: 0, letterSpacing: '0.6em' }}
        animate={{ opacity: 0.75, letterSpacing: '0.42em' }}
        transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
        style={{
          fontFamily: '"Lato", sans-serif',
          fontSize: 'clamp(0.6rem, 1.2vw, 0.78rem)',
          letterSpacing: '0.42em',
          textTransform: 'uppercase',
          color: '#4ecdc4',
          marginBottom: '1rem',
        }}
      >
        A Family Studio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.6, ease: 'easeOut' }}
        style={{
          fontFamily: '"Cinzel", serif',
          fontSize: 'clamp(2.4rem, 7vw, 6rem)',
          fontWeight: 900,
          color: '#ffffff',
          letterSpacing: '0.08em',
          lineHeight: 1.05,
          textShadow:
            '0 0 30px rgba(78,205,196,0.3), 0 0 60px rgba(78,205,196,0.15)',
          margin: 0,
        }}
      >
        PALINGEN
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
        style={{
          fontFamily: '"Cinzel", serif',
          fontSize: 'clamp(0.9rem, 2.5vw, 2rem)',
          fontWeight: 400,
          color: '#a8e6d0',
          letterSpacing: '0.38em',
          margin: '0.3rem 0 0',
        }}
      >
        STUDIOS
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
        style={{
          width: '80px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #4ecdc4, transparent)',
          margin: '1.4rem auto',
        }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          fontFamily: '"Special Elite", cursive',
          fontSize: 'clamp(0.8rem, 1.8vw, 1.1rem)',
          color: '#c8d8c0',
          letterSpacing: '0.06em',
          lineHeight: 1.6,
          maxWidth: '540px',
          margin: '0 auto',
        }}
      >
        Art · Interactive Exhibits · Liminal Experiences
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        style={{
          fontFamily: '"Lato", sans-serif',
          fontSize: 'clamp(0.62rem, 1vw, 0.72rem)',
          color: '#4ecdc4',
          letterSpacing: '0.22em',
          marginTop: '2rem',
          textTransform: 'uppercase',
        }}
      >
        Move your cursor right · Click to bloom
      </motion.p>
    </div>
  );
};

export default HeroTitle;
