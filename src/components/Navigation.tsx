import React, { useState } from 'react';

const GOLD = 'rgba(216,200,144,0.85)';
const GOLD_DIM = 'rgba(216,200,144,0.70)';
const SERIF = "'Palatino Linotype','Book Antiqua',Georgia,serif";

const CITY_LINKS = [
  { label: 'Florida',      href: '/palingen-studios/florida/'      },
  { label: 'Orlando',      href: '/palingen-studios/orlando/'      },
  { label: 'Winter Park',  href: '/palingen-studios/winter-park/'  },
  { label: 'Windermere',   href: '/palingen-studios/windermere/'   },
];

const Navigation: React.FC = () => {
  const [instOpen, setInstOpen] = useState(false);

  return (
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
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{
          fontFamily:    SERIF,
          fontSize:      'clamp(0.95rem, 2vw, 1.25rem)',
          fontWeight:    600,
          color:         'rgba(216,200,144,0.92)',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
        }}>
          Palingen
        </span>
        <span style={{
          fontFamily:    SERIF,
          fontSize:      'clamp(0.48rem, 0.9vw, 0.6rem)',
          color:         'rgba(180,160,100,0.60)',
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          marginTop:     2,
        }}>
          Studios
        </span>
      </div>

      {/* Right links */}
      <span style={{
        fontFamily:    'Georgia,serif',
        fontSize:      10,
        color:         'rgba(150,132,85,0.55)',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        display:       'flex',
        alignItems:    'center',
        gap:           14,
      }}>
        <span>Cosmic Cartography</span>

        {/* Installations dropdown */}
        <span
          style={{ position: 'relative', pointerEvents: 'auto' }}
          onMouseEnter={() => setInstOpen(true)}
          onMouseLeave={() => setInstOpen(false)}
        >
          <span style={{ color: GOLD, cursor: 'pointer', userSelect: 'none' }}>
            Installations ▾
          </span>
          {instOpen && (
            <div style={{
              position:   'absolute',
              top:        '100%',
              right:      0,
              marginTop:  8,
              background: 'rgba(3,4,14,0.97)',
              border:     '1px solid rgba(216,200,144,0.18)',
              borderRadius: 4,
              minWidth:   148,
              zIndex:     200,
              overflow:   'hidden',
            }}>
              {CITY_LINKS.map(c => (
                <a
                  key={c.href}
                  href={c.href}
                  style={{
                    display:       'block',
                    padding:       '9px 16px',
                    color:         GOLD,
                    textDecoration:'none',
                    fontFamily:    SERIF,
                    fontSize:      11,
                    letterSpacing: '0.08em',
                    borderBottom:  '1px solid rgba(216,200,144,0.07)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(216,200,144,0.08)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  {c.label}
                </a>
              ))}
            </div>
          )}
        </span>

        <a
          href="mailto:palingenstudios@gmail.com"
          style={{ color: GOLD_DIM, textDecoration: 'none', pointerEvents: 'auto' }}
        >
          Email
        </a>
      </span>
    </nav>
  );
};

export default Navigation;
