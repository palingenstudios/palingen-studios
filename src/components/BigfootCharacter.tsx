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
  const pupilRadius = 6;

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
          {/* Realistic fur texture filters */}
          <filter id="fur-body" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="5" seed="7" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="4" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
          <filter id="fur-heavy" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="6" seed="3" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="6" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
          <filter id="skin-rough" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" seed="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          
          {/* Sophisticated gradients for realistic appearance */}
          <radialGradient id="body-grad" cx="45%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#8b6b5d" />
            <stop offset="25%" stopColor="#7a5a4c" />
            <stop offset="55%" stopColor="#6a4a3c" />
            <stop offset="85%" stopColor="#5a3a2c" />
            <stop offset="100%" stopColor="#4a2a1c" />
          </radialGradient>
          
          <radialGradient id="face-grad" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#9b7b6d" />
            <stop offset="30%" stopColor="#8a6a5c" />
            <stop offset="70%" stopColor="#7a5a4c" />
            <stop offset="100%" stopColor="#6a4a3c" />
          </radialGradient>
          
          <radialGradient id="shoulder-grad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#6a4a3c" />
            <stop offset="50%" stopColor="#5a3a2c" />
            <stop offset="100%" stopColor="#4a2a1c" />
          </radialGradient>
          
          {/* Eye gradients for realistic look */}
          <radialGradient id="eye-white" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff8f0" />
            <stop offset="60%" stopColor="#ffe8d8" />
            <stop offset="100%" stopColor="#ffd8c0" />
          </radialGradient>
          
          <radialGradient id="iris-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b4513" />
            <stop offset="40%" stopColor="#6b3410" />
            <stop offset="80%" stopColor="#4b220d" />
            <stop offset="100%" stopColor="#2b1106" />
          </radialGradient>
          
          <radialGradient id="eye-glow" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#ffcc66" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#ff9933" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ff6600" stopOpacity="0" />
          </radialGradient>
          
          {/* Shadow and highlight filters */}
          <filter id="shadow-soft">
            <feGaussianBlur stdDeviation="3" />
            <feOffset dx="2" dy="2" />
          </filter>
          
          <filter id="highlight">
            <feGaussianBlur stdDeviation="1" />
          </filter>
        </defs>

        {/* Shadow on ground */}
        <ellipse cx="140" cy="415" rx="90" ry="15" fill="black" opacity="0.4" filter="url(#shadow-soft)" />

        {/* Main body - more realistic proportions */}
        <ellipse cx="140" cy="320" rx="75" ry="110" fill="url(#body-grad)" filter="url(#fur-body)" />
        
        {/* Chest area - lighter fur */}
        <ellipse cx="140" cy="310" rx="45" ry="70" fill="#8b6b5d" opacity="0.3" filter="url(#fur-body)" />

        {/* Shoulders - more anatomically correct */}
        <ellipse cx="85" cy="250" rx="40" ry="35" fill="url(#shoulder-grad)" filter="url(#fur-heavy)" />
        <ellipse cx="195" cy="248" rx="40" ry="35" fill="url(#shoulder-grad)" filter="url(#fur-heavy)" />

        {/* Upper arms */}
        <ellipse cx="70" cy="280" rx="25" ry="45" fill="url(#body-grad)" filter="url(#fur-body)" transform="rotate(-15 70 280)" />
        <ellipse cx="210" cy="278" rx="25" ry="45" fill="url(#body-grad)" filter="url(#fur-body)" transform="rotate(15 210 278)" />

        {/* Head - more realistic shape */}
        <ellipse cx="140" cy="160" rx="58" ry="70" fill="url(#face-grad)" filter="url(#fur-body)" />
        
        {/* Jawline */}
        <path d="M95 185 Q140 195 185 185" stroke="#6a4a3c" strokeWidth="3" fill="none" filter="url(#skin-rough)" />

        {/* Brow ridge - more prominent */}
        <path
          d="M85 125 Q140 110 195 125"
          stroke="#4a2a1c"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          filter="url(#skin-rough)"
        />

        {/* Nose - more realistic */}
        <ellipse cx="140" cy="165" rx="16" ry="10" fill="#6a4a3c" opacity="0.8" filter="url(#skin-rough)" />
        <ellipse cx="133" cy="167" rx="4" ry="3" fill="#4a2a1c" opacity="0.7" />
        <ellipse cx="147" cy="167" rx="4" ry="3" fill="#4a2a1c" opacity="0.7" />

        {/* Mouth - subtle */}
        <path
          d="M118 185 Q140 192 162 185"
          stroke="#5a3a2c"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          filter="url(#skin-rough)"
        />

        {/* Eye sockets - deeper */}
        <ellipse cx="100" cy="135" rx="18" ry="16" fill="#4a2a1c" opacity="0.6" />
        <ellipse cx="160" cy="133" rx="18" ry="16" fill="#4a2a1c" opacity="0.6" />

        {/* Eye glow effect */}
        <ellipse cx="100" cy="135" rx="16" ry="14" fill="url(#eye-glow)" opacity="0.7" />
        <ellipse cx="160" cy="133" rx="16" ry="14" fill="url(#eye-glow)" opacity="0.7" />

        {/* Eye whites - more realistic */}
        <ellipse cx="100" cy="135" rx="12" ry="11" fill="url(#eye-white)" />
        <ellipse cx="160" cy="133" rx="12" ry="11" fill="url(#eye-white)" />

        {/* Irises - tracking cursor */}
        <ellipse cx={leftPupilX} cy={leftPupilY} rx="7" ry="8" fill="url(#iris-grad)" />
        <ellipse cx={rightPupilX} cy={rightPupilY} rx="7" ry="8" fill="url(#iris-grad)" />

        {/* Pupils */}
        <circle cx={leftPupilX} cy={leftPupilY} r="4" fill="#1a0a00" />
        <circle cx={rightPupilX} cy={rightPupilY} r="4" fill="#1a0a00" />

        {/* Eye shine - more realistic */}
        <circle cx={leftPupilX - 1.5} cy={leftPupilY - 1.5} r="2" fill="white" opacity="0.9" />
        <circle cx={leftPupilX - 3} cy={leftPupilY - 3} r="0.8" fill="white" opacity="0.7" />
        <circle cx={rightPupilX - 1.5} cy={rightPupilY - 1.5} r="2" fill="white" opacity="0.9" />
        <circle cx={rightPupilX - 3} cy={rightPupilY - 3} r="0.8" fill="white" opacity="0.7" />

        {/* Hair details - more realistic strands */}
        <g opacity="0.7">
          <path d="M75 95 Q70 75 78 60" stroke="#6a4a3c" strokeWidth="2.5" fill="none" filter="url(#fur-body)" />
          <path d="M90 88 Q88 68 96 54" stroke="#6a4a3c" strokeWidth="2" fill="none" filter="url(#fur-body)" />
          <path d="M105 82 Q103 62 111 48" stroke="#6a4a3c" strokeWidth="2" fill="none" filter="url(#fur-body)" />
          <path d="M195 95 Q200 75 192 60" stroke="#6a4a3c" strokeWidth="2.5" fill="none" filter="url(#fur-body)" />
          <path d="M180 88 Q182 68 174 54" stroke="#6a4a3c" strokeWidth="2" fill="none" filter="url(#fur-body)" />
          <path d="M165 82 Q167 62 159 48" stroke="#6a4a3c" strokeWidth="2" fill="none" filter="url(#fur-body)" />
        </g>

        {/* Facial hair - more realistic */}
        <g opacity="0.5">
          <path d="M85 155 Q80 160 82 165" stroke="#5a3a2c" strokeWidth="1.5" fill="none" />
          <path d="M195 155 Q200 160 198 165" stroke="#5a3a2c" strokeWidth="1.5" fill="none" />
          <path d="M95 170 Q92 175 94 180" stroke="#5a3a2c" strokeWidth="1" fill="none" />
          <path d="M185 170 Q188 175 186 180" stroke="#5a3a2c" strokeWidth="1" fill="none" />
        </g>

        {/* Arm partially visible - more realistic */}
        <path
          d="M55 240 Q30 280 40 340"
          stroke="#6a4a3c"
          strokeWidth="26"
          fill="none"
          strokeLinecap="round"
          filter="url(#fur-heavy)"
          opacity="0.9"
        />
        
        {/* Hand/fingers hint */}
        <ellipse cx="42" cy="345" rx="12" ry="8" fill="#5a3a2c" opacity="0.8" filter="url(#skin-rough)" />
        
        {/* Muscle definition on body */}
        <ellipse cx="120" cy="300" rx="15" ry="25" fill="#5a3a2c" opacity="0.2" filter="url(#fur-body)" />
        <ellipse cx="160" cy="300" rx="15" ry="25" fill="#5a3a2c" opacity="0.2" filter="url(#fur-body)" />
      </svg>
    </motion.div>
  );
};

export default BigfootCharacter;
