import React from 'react';

const Navigation: React.FC = () => (
  <nav
    style={{
      position:       'fixed',
      top:            0,
      left:           0,
      right:          0,
      zIndex:         150,
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'space-between',
      padding:        '18px 32px',
      background:     'linear-gradient(to bottom, rgba(3,4,14,0.92) 0%, rgba(3,4,14,0) 100%)',
    }}
  >
    {/* Wordmark */}
    <div style={{
      display:       'flex',
      flexDirection: 'column',
      lineHeight:    1,
    }}>
      <span style={{
        fontFamily:    "'Palatino Linotype','Book Antiqua',Georgia,serif",
        fontSize:      'clamp(0.95rem, 2vw, 1.25rem)',
        fontWeight:    600,
        color:         'rgba(216,200,144,0.92)',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
      }}>
        Palingen
      </span>
      <span style={{
        fontFamily:    "'Palatino Linotype','Book Antiqua',Georgia,serif",
        fontSize:      'clamp(0.48rem, 0.9vw, 0.6rem)',
        color:         'rgba(180,160,100,0.60)',
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
        marginTop:     2,
      }}>
        Studios
      </span>
    </div>

    {/* Subtitle */}
    <span style={{
      fontFamily:    'Georgia,serif',
      fontSize:      10,
      color:         'rgba(150,132,85,0.55)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
    }}>
      <span style={{ marginRight: 14 }}>Cosmic Cartography</span>
      <a
        href="/palingen-studios/florida/"
        style={{
          color: 'rgba(216,200,144,0.85)',
          textDecoration: 'none',
          marginRight: 12,
          pointerEvents: 'auto',
        }}
      >
        Florida Installations
      </a>
      <a
        href="mailto:palingenstudios@gmail.com"
        style={{
          color: 'rgba(216,200,144,0.70)',
          textDecoration: 'none',
          pointerEvents: 'auto',
        }}
      >
        Email
      </a>
    </span>
  </nav>
);

export default Navigation;
