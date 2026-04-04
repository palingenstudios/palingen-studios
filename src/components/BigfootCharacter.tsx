import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MousePosition } from '../hooks/useMousePosition';

interface BigfootCharacterProps {
  mousePosition: MousePosition;
  peekAmount: number;
}

const BigfootCharacter: React.FC<BigfootCharacterProps> = ({ mousePosition, peekAmount }) => {
  const bodyRef = useRef<SVGSVGElement>(null);

  const getEyeAngle = (eyeCenterX: number, eyeCenterY: number): number => {
    if (!bodyRef.current) return 0;
    const rect = bodyRef.current.getBoundingClientRect();
    const worldX = rect.left + eyeCenterX * (rect.width / 280);
    const worldY = rect.top + eyeCenterY * (rect.height / 420);
    const dx = mousePosition.x - worldX;
    const dy = mousePosition.y - worldY;
    return Math.atan2(dy, dx);
  };

  const leftEyeAngle = getEyeAngle(100, 130);
  const rightEyeAngle = getEyeAngle(160, 128);
  const pupilRadius = 5;

  const leftPupilX = 100 + Math.cos(leftEyeAngle) * pupilRadius;
  const leftPupilY = 130 + Math.sin(leftEyeAngle) * pupilRadius;
  const rightPupilX = 160 + Math.cos(rightEyeAngle) * pupilRadius;
  const rightPupilY = 128 + Math.sin(rightEyeAngle) * pupilRadius;

  return (
    <motion.div
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '280px',
        height: '420px',
        zIndex: 2,
        transformOrigin: 'bottom right',
      }}
      animate={{ x: `${peekAmount * 100}%` }}
      transition={{ type: 'spring', stiffness: 60, damping: 20 }}
    >
      <svg
        ref={bodyRef}
        viewBox="0 0 280 420"
        width="100%"
        height="100%"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <filter id="rough-body" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.065" numOctaves="4" seed="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="fur-texture" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="turbulence" baseFrequency="0.04 0.08" numOctaves="5" seed="7" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <radialGradient id="body-grad" cx="45%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#d4a0b0" />
            <stop offset="40%" stopColor="#b87a90" />
            <stop offset="100%" stopColor="#7a4055" />
          </radialGradient>
          <radialGradient id="eye-glow-l" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffeecc" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#ffe090" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff9900" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="eye-glow-r" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffeecc" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#ffe090" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff9900" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Body */}
        <ellipse cx="140" cy="300" rx="85" ry="120" fill="url(#body-grad)" filter="url(#fur-texture)" />

        {/* Shoulders */}
        <ellipse cx="80" cy="230" rx="45" ry="30" fill="#b87a90" filter="url(#fur-texture)" />
        <ellipse cx="200" cy="228" rx="45" ry="30" fill="#b87a90" filter="url(#fur-texture)" />

        {/* Head */}
        <ellipse cx="140" cy="150" rx="65" ry="75" fill="url(#body-grad)" filter="url(#fur-texture)" />

        {/* Brow ridge */}
        <path
          d="M90 110 Q140 95 190 110"
          stroke="#7a4055"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          filter="url(#rough-body)"
        />

        {/* Nose */}
        <ellipse cx="140" cy="165" rx="18" ry="12" fill="#7a4055" opacity="0.7" filter="url(#rough-body)" />
        <ellipse cx="133" cy="168" rx="5" ry="4" fill="#4a2035" opacity="0.8" />
        <ellipse cx="147" cy="168" rx="5" ry="4" fill="#4a2035" opacity="0.8" />

        {/* Mouth */}
        <path
          d="M115 185 Q140 198 165 185"
          stroke="#7a4055"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          filter="url(#rough-body)"
        />

        {/* Eye sockets */}
        <ellipse cx="100" cy="130" rx="20" ry="18" fill="#4a2035" opacity="0.5" />
        <ellipse cx="160" cy="128" rx="20" ry="18" fill="#4a2035" opacity="0.5" />

        {/* Eye glow */}
        <ellipse cx="100" cy="130" rx="18" ry="16" fill="url(#eye-glow-l)" opacity="0.8" />
        <ellipse cx="160" cy="128" rx="18" ry="16" fill="url(#eye-glow-r)" opacity="0.8" />

        {/* Eye whites */}
        <ellipse cx="100" cy="130" rx="13" ry="12" fill="#fffbe6" />
        <ellipse cx="160" cy="128" rx="13" ry="12" fill="#fffbe6" />

        {/* Pupils - tracking cursor */}
        <circle cx={leftPupilX} cy={leftPupilY} r="7" fill="#1a0a00" />
        <circle cx={rightPupilX} cy={rightPupilY} r="7" fill="#1a0a00" />

        {/* Eye shine */}
        <circle cx={leftPupilX - 2} cy={leftPupilY - 2} r="2.5" fill="white" opacity="0.8" />
        <circle cx={rightPupilX - 2} cy={rightPupilY - 2} r="2.5" fill="white" opacity="0.8" />

        {/* Fur details - strokes */}
        <path d="M85 95 Q80 75 88 60" stroke="#c090a0" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M100 88 Q98 68 106 54" stroke="#c090a0" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M195 95 Q200 75 192 60" stroke="#c090a0" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M180 88 Q182 68 174 54" stroke="#c090a0" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M60 220 Q40 210 30 195" stroke="#b87a90" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M220 218 Q240 208 250 193" stroke="#b87a90" strokeWidth="3" fill="none" opacity="0.5" />

        {/* Arm partially visible */}
        <path
          d="M55 240 Q30 280 40 340"
          stroke="#b87a90"
          strokeWidth="28"
          fill="none"
          strokeLinecap="round"
          filter="url(#fur-texture)"
          opacity="0.85"
        />
      </svg>
    </motion.div>
  );
};

export default BigfootCharacter;
