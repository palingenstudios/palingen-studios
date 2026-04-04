import React from 'react';
import { motion } from 'framer-motion';

interface Card {
  icon: string;
  title: string;
  body: string;
}

const cards: Card[] = [
  {
    icon: '🌿',
    title: 'Art & Interactive Exhibits',
    body: 'Family-run studio crafting immersive, handcrafted experiences that blur the line between observer and participant — indoors, outdoors, and beyond.',
  },
  {
    icon: '🌀',
    title: 'The Divine Council Worldview',
    body: 'Exploring the ancient cosmology of the Hebrew scriptures: where elohim, principalities, and unseen realms intersect with human history and destiny.',
  },
  {
    icon: '🔶',
    title: 'The Orange Orb',
    body: 'An interdimensional signature. Wherever the liminal veil grows thin, the orange orb appears — a marker of threshold beings moving between worlds.',
  },
  {
    icon: '👣',
    title: 'Sasquatch as Hybrid Entity',
    body: 'Not merely a cryptid — understood here as an interdimensional hybrid presence. Its appearances correlate with the orange orb, suggesting a non-terrestrial origin woven into Indigenous memory.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const InfoSection: React.FC = () => {
  return (
    <section
      id="worldview"
      style={{
        background: '#000000',
        padding: 'clamp(4rem, 8vh, 7rem) clamp(1.5rem, 5vw, 5rem)',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
      >
        <p
          style={{
            fontFamily: '"Lato", sans-serif',
            fontSize: '0.75rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#4ecdc4',
            marginBottom: '0.75rem',
            opacity: 0.85,
          }}
        >
          What We Create
        </p>
        <h2
          style={{
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#e8e0d0',
            letterSpacing: '0.06em',
            lineHeight: 1.2,
          }}
        >
          Art at the Threshold
        </h2>
        <div
          style={{
            width: '60px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #4ecdc4, transparent)',
            margin: '1.2rem auto 0',
          }}
        />
      </motion.div>

      {/* Cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 'clamp(1.2rem, 2.5vw, 2rem)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            variants={cardVariants}
            whileHover={{ y: -6, borderColor: 'rgba(78,205,196,0.5)' }}
            style={{
              background: 'rgba(10,20,12,0.7)',
              border: '1px solid rgba(78,205,196,0.15)',
              borderRadius: '4px',
              padding: 'clamp(1.5rem, 3vw, 2.2rem)',
              backdropFilter: 'blur(4px)',
              cursor: 'default',
              transition: 'border-color 0.3s',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{card.icon}</div>
            <h3
              style={{
                fontFamily: '"Cinzel", serif',
                fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
                fontWeight: 700,
                color: '#4ecdc4',
                letterSpacing: '0.05em',
                marginBottom: '0.75rem',
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                fontFamily: '"Lato", sans-serif',
                fontSize: '0.88rem',
                lineHeight: 1.75,
                color: '#b0c8b8',
                fontWeight: 300,
              }}
            >
              {card.body}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <div
        style={{
          marginTop: 'clamp(4rem, 8vh, 6rem)',
          borderTop: '1px solid rgba(78,205,196,0.1)',
        }}
      />

      {/* Exhibits teaser */}
      <motion.div
        id="exhibits"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
        style={{ textAlign: 'center', paddingTop: 'clamp(3rem, 6vh, 5rem)' }}
      >
        <p
          style={{
            fontFamily: '"Lato", sans-serif',
            fontSize: '0.75rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#4ecdc4',
            marginBottom: '0.75rem',
            opacity: 0.85,
          }}
        >
          Interactive Experiences
        </p>
        <h2
          style={{
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
            fontWeight: 700,
            color: '#e8e0d0',
            letterSpacing: '0.06em',
            marginBottom: '1.5rem',
          }}
        >
          Coming to You
        </h2>
        <p
          style={{
            fontFamily: '"Lato", sans-serif',
            fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
            color: '#b0c8b8',
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          Outdoor immersive experiences, gallery installations, and travelling exhibits that invite 
          you to step through the veil and see what waits on the other side.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-block',
            fontFamily: '"Lato", sans-serif',
            fontSize: '0.8rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#000',
            background: '#4ecdc4',
            padding: '0.85rem 2.4rem',
            borderRadius: '2px',
            textDecoration: 'none',
            fontWeight: 700,
          }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  );
};

export default InfoSection;
