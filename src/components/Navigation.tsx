import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Exhibits', href: '#exhibits' },
  { label: 'The Worldview', href: '#worldview' },
  { label: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 2rem',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, transparent 100%)',
        backdropFilter: 'blur(2px)',
      }}
    >
      {/* Logo */}
      <motion.a
        href="#home"
        style={{
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          lineHeight: 1,
        }}
        whileHover={{ scale: 1.03 }}
      >
        <span
          style={{
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontWeight: 900,
            color: '#4ecdc4',
            letterSpacing: '0.12em',
            textShadow: '0 0 12px #4ecdc4, 0 0 24px rgba(78,205,196,0.4)',
          }}
        >
          PALINGEN
        </span>
        <span
          style={{
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(0.55rem, 1.2vw, 0.72rem)',
            color: '#a8e6d0',
            letterSpacing: '0.28em',
            opacity: 0.85,
          }}
        >
          STUDIOS
        </span>
      </motion.a>

      {/* Desktop Links */}
      <ul
        style={{
          display: 'flex',
          gap: 'clamp(1rem, 2.5vw, 2.5rem)',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
        className="nav-desktop"
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <motion.a
              href={link.href}
              style={{
                fontFamily: '"Lato", sans-serif',
                fontSize: '0.82rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#c8e6c0',
                textDecoration: 'none',
                opacity: 0.8,
              }}
              whileHover={{
                opacity: 1,
                color: '#4ecdc4',
                textShadow: '0 0 8px #4ecdc4',
              }}
              transition={{ duration: 0.15 }}
            >
              {link.label}
            </motion.a>
          </li>
        ))}
      </ul>

      {/* Mobile burger */}
      <motion.button
        onClick={() => setMenuOpen((o) => !o)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          display: 'none',
          flexDirection: 'column',
          gap: '5px',
        }}
        className="nav-burger"
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#4ecdc4',
              borderRadius: '2px',
            }}
            animate={
              menuOpen
                ? i === 0
                  ? { rotate: 45, y: 7 }
                  : i === 1
                  ? { opacity: 0 }
                  : { rotate: -45, y: -7 }
                : { rotate: 0, y: 0, opacity: 1 }
            }
          />
        ))}
      </motion.button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            style={{
              position: 'absolute',
              top: '72px',
              left: 0,
              right: 0,
              background: 'rgba(0,0,0,0.95)',
              borderBottom: '1px solid rgba(78,205,196,0.2)',
              padding: '1.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: '"Lato", sans-serif',
                  fontSize: '0.9rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#c8e6c0',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
