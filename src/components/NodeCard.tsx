import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CosmicNode, LINKS } from '../data/cosmicNodes';

const CAT_LABEL: Record<string, string> = {
  celestial: 'Celestial Being',
  creature:  'Entity / Cryptid',
  place:     'Sacred Site',
  concept:   'Doctrine & Concept',
  palingen:  'Palingen Studios',
};

const CAT_COLOR: Record<string, string> = {
  celestial: '#c9a227',
  creature:  '#bf3b30',
  place:     '#22a882',
  concept:   '#7a56a8',
  palingen:  '#d8c890',
};

interface NodeCardProps {
  node:     CosmicNode | null;
  allNodes: CosmicNode[];
  onClose:  () => void;
}

const NodeCard: React.FC<NodeCardProps> = ({ node, allNodes, onClose }) => {
  const color = node ? (CAT_COLOR[node.category] ?? '#d8c890') : '#d8c890';

  const connected: CosmicNode[] = node
    ? LINKS
        .filter(l => l.source === node.id || l.target === node.id)
        .map(l  => (l.source === node.id ? l.target : l.source))
        .map(id => allNodes.find(n => n.id === id))
        .filter((n): n is CosmicNode => Boolean(n))
    : [];

  return (
    <AnimatePresence>
      {node && (
        <motion.div
          key={node.id}
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0,      opacity: 1 }}
          exit={{    x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 320 }}
          style={{
            position:       'fixed',
            top:            0,
            right:          0,
            width:          'min(430px, 92vw)',
            height:         '100vh',
            background:     'rgba(5, 6, 20, 0.97)',
            borderLeft:     `1px solid ${color}28`,
            backdropFilter: 'blur(14px)',
            padding:        '36px 28px 40px',
            overflowY:      'auto',
            zIndex:         200,
            boxShadow:      `-6px 0 70px rgba(0,0,0,0.85)`,
          }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position:        'absolute',
              top:             20,
              right:           20,
              width:           32,
              height:          32,
              borderRadius:    '50%',
              background:      'transparent',
              border:          '1px solid rgba(255,255,255,0.18)',
              color:           'rgba(255,255,255,0.6)',
              cursor:          'pointer',
              fontSize:        15,
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              lineHeight:      1,
              transition:      'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = color;
              (e.currentTarget as HTMLButtonElement).style.color       = color;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.18)';
              (e.currentTarget as HTMLButtonElement).style.color       = 'rgba(255,255,255,0.6)';
            }}
          >
            ✕
          </button>

          {/* Category badge */}
          <div style={{
            display:       'inline-block',
            padding:       '3px 11px',
            borderRadius:  12,
            background:    `${color}18`,
            border:        `1px solid ${color}55`,
            color:         color,
            fontSize:      10,
            fontFamily:    'Georgia, serif',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom:  18,
          }}>
            {CAT_LABEL[node.category] ?? node.category}
          </div>

          {/* Title */}
          <h2 style={{
            margin:     '0 0 18px',
            color:      '#f0e8d0',
            fontFamily: "'Palatino Linotype','Book Antiqua',Georgia,serif",
            fontSize:   'clamp(20px, 4vw, 26px)',
            fontWeight: 600,
            lineHeight: 1.2,
          }}>
            {node.label}
          </h2>

          {/* Ruled divider */}
          <div style={{
            height:       1,
            background:   `linear-gradient(90deg, ${color}55, transparent)`,
            marginBottom: 20,
          }} />

          {/* Scripture pull-quote */}
          {node.scripture && (
            <div style={{
              margin:       '0 0 22px',
              padding:      '12px 16px',
              borderLeft:   `3px solid ${color}88`,
              background:   `${color}0a`,
              borderRadius: '0 6px 6px 0',
            }}>
              <p style={{
                margin:     0,
                color:      `${color}cc`,
                fontFamily: "'Palatino Linotype','Book Antiqua',Georgia,serif",
                fontSize:   13,
                lineHeight: 1.65,
                fontStyle:  'italic',
              }}>
                {node.scripture}
              </p>
            </div>
          )}

          {/* Description */}
          <p style={{
            margin:     '0 0 30px',
            color:      'rgba(208,192,158,0.90)',
            fontFamily: "'Palatino Linotype','Book Antiqua',Georgia,serif",
            fontSize:   15,
            lineHeight: 1.75,
          }}>
            {node.description}
          </p>

          {/* Connected nodes */}
          {connected.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <p style={{
                margin:        '0 0 12px',
                color:         'rgba(170,148,90,0.65)',
                fontSize:      10,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily:    'Georgia,serif',
              }}>
                Connected
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {connected.map(cn => (
                  <span key={cn.id} style={{
                    padding:      '4px 11px',
                    borderRadius: 10,
                    background:   'rgba(255,255,255,0.05)',
                    border:       '1px solid rgba(255,255,255,0.11)',
                    color:        'rgba(200,183,140,0.82)',
                    fontSize:     11,
                    fontFamily:   'Georgia,serif',
                  }}>
                    {cn.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA — Commission node */}
          {node.id === 'contact' && (
            <a
              href="mailto:hello@palingenstudios.com"
              style={{
                display:        'block',
                marginTop:      8,
                padding:        '13px 20px',
                background:     `${color}14`,
                border:         `1px solid ${color}44`,
                color:          color,
                borderRadius:   8,
                textAlign:      'center',
                textDecoration: 'none',
                fontFamily:     'Georgia,serif',
                fontSize:       13,
                letterSpacing:  '0.07em',
                transition:     'background 0.2s',
              }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLAnchorElement).style.background = `${color}26`)
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLAnchorElement).style.background = `${color}14`)
              }
            >
              Get in Touch
            </a>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NodeCard;
