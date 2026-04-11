import React from 'react';
import { motion } from 'framer-motion';
import BigfootCharacter from './BigfootCharacter';
import OrangeOrb from './OrangeOrb';
import { MousePosition } from '../hooks/useMousePosition';

interface ForestSceneProps {
  mousePosition: MousePosition;
}

const ForestScene: React.FC<ForestSceneProps> = ({ mousePosition }) => {
  const peekThreshold = 0.65;
  const rawPeek = Math.max(0, (mousePosition.normalizedX - peekThreshold) / (1 - peekThreshold));
  const peekAmount = -rawPeek * 0.52;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background: '#000000',
      }}
    >
      {/* ── Layer 0: River & distant tree-line ── */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <defs>
          <filter id="bg-rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" seed="5" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="8" />
          </filter>
          <filter id="glow-green">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="river-shimmer">
            <feTurbulence type="turbulence" baseFrequency="0.02 0.08" numOctaves="3" seed="1" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="6" />
          </filter>
          <radialGradient id="sky-grad" cx="52%" cy="20%" r="82%">
            <stop offset="0%" stopColor="#111821" />
            <stop offset="35%" stopColor="#0a1117" />
            <stop offset="70%" stopColor="#05080d" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>
          <linearGradient id="river-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a3a32" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#154a3a" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#0d2a22" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#041410" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="river-reflection" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6a8da3" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#446070" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#1c2b35" stopOpacity="0.04" />
          </linearGradient>
          <linearGradient id="fog-grad" x1="0%" y1="0%" x2="0%" y2="1">
            <stop offset="0%" stopColor="#2a343d" stopOpacity="0" />
            <stop offset="30%" stopColor="#2a343d" stopOpacity="0.08" />
            <stop offset="60%" stopColor="#2a343d" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2a343d" stopOpacity="0" />
          </linearGradient>
          <filter id="tree-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="5" seed="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
          <filter id="atmosphere-blur">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
          <linearGradient id="distant-trees" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0d2a12" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#0a1f0f" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#061408" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="mid-trees" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#112a16" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#0d2010" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#081808" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="1440" height="900" fill="url(#sky-grad)" />

        {/* Stars */}
        {[...Array(52)].map((_, i) => {
          const sx = (i * 137.508 * 11) % 1440;
          const sy = (i * 97.3 * 7) % 420;
          const sr = 0.5 + (i % 3) * 0.4;
          const sop = 0.15 + (i % 5) * 0.07;
          return (
            <circle key={i} cx={sx} cy={sy} r={sr} fill="white" opacity={sop} />
          );
        })}

        {/* Distant tree-line with atmospheric depth */}
        <g filter="url(#bg-rough)" opacity="0.8">
          {/* Far treeline - atmospheric blur */}
          <path
            d="M0 560 Q80 480 160 510 Q220 445 300 475 Q360 430 440 460 Q520 415 600 445 Q680 410 760 435 Q840 415 920 440 Q1000 418 1080 442 Q1160 420 1240 448 Q1320 430 1440 455 L1440 600 L0 600 Z"
            fill="url(#distant-trees)"
            filter="url(#atmosphere-blur)"
          />
          {/* Mid treeline - more detail */}
          <path
            d="M0 590 Q40 545 80 565 Q120 528 170 548 Q210 520 260 542 Q310 515 370 540 Q420 512 480 536 Q540 510 600 532 Q660 508 720 530 Q780 506 840 528 Q900 504 960 526 Q1020 502 1080 524 Q1140 500 1200 522 Q1260 498 1320 520 Q1380 496 1440 518 L1440 660 L0 660 Z"
            fill="url(#mid-trees)"
          />
          {/* Individual distant pines with silhouettes */}
          {[150, 280, 420, 560, 700, 850, 990, 1130, 1280].map((tx, i) => (
            <g key={i}>
              <path
                d={`M${tx} 540 L${tx - 18} 590 L${tx + 18} 590 Z M${tx} 510 L${tx - 13} 545 L${tx + 13} 545 Z M${tx} 485 L${tx - 8} 510 L${tx + 8} 510 Z`}
                fill="#0a2010"
                opacity={0.7 + (i % 3) * 0.1}
              />
              <path
                d={`M${tx + 25} 555 L${tx + 12} 595 L${tx + 38} 595 Z`}
                fill="#081808"
                opacity="0.6"
              />
            </g>
          ))}
        </g>

        {/* River with realistic shimmer and reflections */}
        <g filter="url(#river-shimmer)">
          {/* Main river body */}
          <path
            d="M-60 820 Q180 750 360 790 Q540 760 720 800 Q900 760 1080 795 Q1260 765 1500 800 L1500 900 L-60 900 Z"
            fill="url(#river-grad)"
          />
          {/* River reflections overlay */}
          <path
            d="M-60 820 Q180 750 360 790 Q540 760 720 800 Q900 760 1080 795 Q1260 765 1500 800 L1500 900 L-60 900 Z"
            fill="url(#river-reflection)"
            opacity="0.6"
          />
          {/* Dynamic shimmer lines */}
          <g opacity="0.4">
            <path
              d="M100 830 Q200 820 300 835 Q400 822 500 838"
              stroke="#6b8ea3"
              strokeWidth="2"
              fill="none"
              filter="url(#glow-green)"
            />
            <path
              d="M600 845 Q750 828 900 848 Q1050 832 1200 850"
              stroke="#6b8ea3"
              strokeWidth="1.5"
              fill="none"
              filter="url(#glow-green)"
            />
            <path
              d="M250 860 Q400 845 550 865 Q700 848 850 868"
              stroke="#3f5967"
              strokeWidth="1"
              fill="none"
              opacity="0.7"
            />
            <path
              d="M800 870 Q950 855 1100 875 Q1250 858 1400 878"
              stroke="#3f5967"
              strokeWidth="1"
              fill="none"
              opacity="0.7"
            />
          </g>
          {/* Ripples near edges */}
          <g opacity="0.3">
            <ellipse cx="120" cy="840" rx="25" ry="8" fill="none" stroke="#6b8ea3" strokeWidth="1" />
            <ellipse cx="380" cy="855" rx="20" ry="6" fill="none" stroke="#6b8ea3" strokeWidth="0.8" />
            <ellipse cx="680" cy="845" rx="30" ry="10" fill="none" stroke="#6b8ea3" strokeWidth="1.2" />
            <ellipse cx="920" cy="860" rx="22" ry="7" fill="none" stroke="#6b8ea3" strokeWidth="0.9" />
            <ellipse cx="1180" cy="850" rx="28" ry="9" fill="none" stroke="#6b8ea3" strokeWidth="1.1" />
          </g>
        </g>

        {/* Ground / forest floor */}
        <path
          d="M0 730 Q200 710 400 725 Q600 708 800 722 Q1000 706 1200 720 Q1350 710 1440 718 L1440 900 L0 900 Z"
          fill="#0a1a0a"
        />

        {/* Ferns / undergrowth */}
        <g opacity="0.6" fill="#1a3a1a">
          {[80, 240, 400, 640, 800, 960, 1100, 1300].map((fx, i) => (
            <g key={i}>
              <path d={`M${fx} 740 Q${fx - 20} 715 ${fx - 35} 720`} stroke="#1a4a1a" strokeWidth="2.5" fill="none" />
              <path d={`M${fx} 740 Q${fx + 15} 710 ${fx + 30} 718`} stroke="#1a4a1a" strokeWidth="2.5" fill="none" />
              <path d={`M${fx} 740 Q${fx - 8} 705 ${fx - 5} 695`} stroke="#1a4a1a" strokeWidth="2" fill="none" />
            </g>
          ))}
        </g>

        {/* Fog band */}
        <rect x="0" y="640" width="1440" height="120" fill="url(#fog-grad)" />
      </svg>

      {/* ── Layer 1: Bigfoot (behind right tree) ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: 'clamp(220px, 22vw, 340px)',
          height: 'clamp(330px, 50vh, 500px)',
          zIndex: 2,
          overflow: 'hidden',
        }}
      >
        <BigfootCharacter mousePosition={mousePosition} peekAmount={peekAmount} />
      </div>

      {/* ── Orange Orb ── */}
      <OrangeOrb />

      {/* ── Layer 2: Foreground Trees ── */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 4,
          pointerEvents: 'none',
        }}
      >
        <defs>
          <filter id="tree-rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="6" seed="12" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="10" />
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
          <filter id="tree-rough2">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="5" seed="9" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="8" />
            <feGaussianBlur stdDeviation="0.4" />
          </filter>
          <filter id="bark-detail">
            <feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="4" seed="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
          <filter id="leaf-texture">
            <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" seed="6" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
          
          {/* Realistic tree gradients */}
          <linearGradient id="left-tree-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="20%" stopColor="#0a0f08" />
            <stop offset="50%" stopColor="#0d2010" />
            <stop offset="80%" stopColor="#1a3018" />
            <stop offset="100%" stopColor="#0a0f08" />
          </linearGradient>
          <linearGradient id="right-tree-grad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="20%" stopColor="#0a0f08" />
            <stop offset="50%" stopColor="#0d2010" />
            <stop offset="80%" stopColor="#1a3018" />
            <stop offset="100%" stopColor="#0a0f08" />
          </linearGradient>
          <linearGradient id="bark-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a4028" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#2a5038" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1a4028" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="foliage-grad" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#0d2a12" />
            <stop offset="40%" stopColor="#0a1f0f" />
            <stop offset="80%" stopColor="#061408" />
            <stop offset="100%" stopColor="#030a04" />
          </radialGradient>
          <linearGradient id="teal-stroke" x1="0%" y1="0%" x2="0%" y2="1%">
            <stop offset="0%" stopColor="#6b8ea3" stopOpacity="0.24" />
            <stop offset="50%" stopColor="#567284" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#3f5967" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* LEFT FOREGROUND TREE CLUSTER */}
        <g filter="url(#tree-rough)">
          {/* Main left trunk with realistic bark */}
          <path
            d="M-20 900 Q20 850 10 700 Q0 600 25 450 Q15 350 30 200 Q40 100 50 0 L120 0 Q110 100 100 200 Q115 350 105 450 Q130 600 120 700 Q110 850 150 900 Z"
            fill="url(#left-tree-grad)"
          />
          {/* Bark texture overlay */}
          <path
            d="M-20 900 Q20 850 10 700 Q0 600 25 450 Q15 350 30 200 Q40 100 50 0 L120 0 Q110 100 100 200 Q115 350 105 450 Q130 600 120 700 Q110 850 150 900 Z"
            fill="url(#bark-highlight)"
            opacity="0.6"
            filter="url(#bark-detail)"
          />
          
          {/* Realistic bark grooves */}
          <g opacity="0.4">
            <path d="M40 700 Q50 680 45 650 Q60 620 55 580" stroke="url(#teal-stroke)" strokeWidth="2" fill="none" filter="url(#bark-detail)" />
            <path d="M80 750 Q90 720 85 680 Q100 640 95 590" stroke="url(#teal-stroke)" strokeWidth="1.5" fill="none" filter="url(#bark-detail)" />
            <path d="M60 500 Q70 480 65 450 Q80 420 75 380" stroke="url(#teal-stroke)" strokeWidth="1.8" fill="none" filter="url(#bark-detail)" />
            <path d="M90 400 Q100 380 95 350 Q110 320 105 280" stroke="url(#teal-stroke)" strokeWidth="1.2" fill="none" filter="url(#bark-detail)" />
          </g>

          {/* Left secondary trunk */}
          <path
            d="M-40 900 Q-10 840 -5 720 Q5 620 -15 500 Q-20 380 -5 250 L60 250 Q45 380 50 500 Q70 620 65 720 Q70 840 100 900 Z"
            fill="#0a1a0a"
            opacity="0.9"
            filter="url(#bark-detail)"
          />
          
          {/* Major branch reaching right - more realistic */}
          <g>
            <path
              d="M55 380 Q140 340 200 360 Q240 350 260 370"
              stroke="#1a3018"
              strokeWidth="28"
              fill="none"
              strokeLinecap="round"
              filter="url(#tree-rough)"
            />
            <path
              d="M55 380 Q140 340 200 360 Q240 350 260 370"
              stroke="#0d2010"
              strokeWidth="20"
              fill="none"
              strokeLinecap="round"
            />
            {/* Branch texture */}
            <path
              d="M55 380 Q140 340 200 360 Q240 350 260 370"
              stroke="url(#bark-highlight)"
              strokeWidth="20"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
              filter="url(#bark-detail)"
            />
          </g>
          
          {/* Branch reaching right lower */}
          <g>
            <path
              d="M70 520 Q160 480 220 500 Q260 492 280 510"
              stroke="#1a3018"
              strokeWidth="22"
              fill="none"
              strokeLinecap="round"
              filter="url(#tree-rough)"
            />
            <path
              d="M70 520 Q160 480 220 500 Q260 492 280 510"
              stroke="#0d2010"
              strokeWidth="16"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Realistic moss/foliage on left tree */}
          <g filter="url(#leaf-texture)">
            <path
              d="M-50 200 Q50 130 130 160 Q80 100 150 80 Q100 40 120 0 L180 0 Q160 40 180 80 Q200 110 160 140 Q230 130 200 200 Q160 170 100 190 Q140 240 80 260 Q40 240 -50 260 Z"
              fill="url(#foliage-grad)"
              opacity="0.85"
            />
            <path
              d="M-40 300 Q60 240 140 260 Q90 210 160 190 Q110 230 120 290 Q80 270 30 300 Q60 340 0 360 Q-30 340 -40 300 Z"
              fill="url(#foliage-grad)"
              opacity="0.75"
            />
            {/* Additional foliage layers */}
            <path
              d="M-20 380 Q80 320 160 340 Q110 290 180 270 Q130 310 140 370 Q100 350 50 380 Q80 420 20 440 Q-10 420 -20 380 Z"
              fill="#061408"
              opacity="0.6"
            />
          </g>
        </g>

        {/* RIGHT FOREGROUND TREE CLUSTER */}
        <g filter="url(#tree-rough2)">
          {/* Main right trunk */}
          <path
            d="M1290 900 Q1340 850 1335 700 Q1325 600 1350 450 Q1340 350 1355 200 Q1365 100 1375 0 L1460 0 Q1455 100 1445 200 Q1460 350 1450 450 Q1475 600 1465 700 Q1460 850 1500 900 Z"
            fill="url(#right-tree-grad)"
          />
          {/* Right trunk bark texture */}
          <path
            d="M1290 900 Q1340 850 1335 700 Q1325 600 1350 450 Q1340 350 1355 200 Q1365 100 1375 0 L1460 0 Q1455 100 1445 200 Q1460 350 1450 450 Q1475 600 1465 700 Q1460 850 1500 900 Z"
            fill="url(#bark-highlight)"
            opacity="0.6"
            filter="url(#bark-detail)"
          />
          
          {/* Right trunk bark grooves */}
          <g opacity="0.4">
            <path d="M1360 700 Q1370 670 1365 640" stroke="url(#teal-stroke)" strokeWidth="2" fill="none" filter="url(#bark-detail)" />
            <path d="M1390 600 Q1400 570 1395 540" stroke="url(#teal-stroke)" strokeWidth="1.8" fill="none" filter="url(#bark-detail)" />
            <path d="M1410 500 Q1420 470 1415 440" stroke="url(#teal-stroke)" strokeWidth="1.5" fill="none" filter="url(#bark-detail)" />
            <path d="M1330 800 Q1340 770 1335 740" stroke="url(#teal-stroke)" strokeWidth="1.7" fill="none" filter="url(#bark-detail)" />
          </g>

          {/* Right secondary trunk (tighter, Bigfoot hides here) */}
          <path
            d="M1350 900 Q1375 840 1370 720 Q1360 620 1380 500 Q1375 380 1390 250 Q1400 130 1410 0 L1460 0 Q1445 130 1430 250 Q1445 380 1440 500 Q1460 620 1455 720 Q1460 840 1490 900 Z"
            fill="#0a1a0a"
            filter="url(#bark-detail)"
          />

          {/* Branch reaching left - more realistic */}
          <g>
            <path
              d="M1385 400 Q1300 355 1240 375 Q1200 365 1180 385"
              stroke="#1a3018"
              strokeWidth="28"
              fill="none"
              strokeLinecap="round"
              filter="url(#tree-rough2)"
            />
            <path
              d="M1385 400 Q1300 355 1240 375 Q1200 365 1180 385"
              stroke="#0d2010"
              strokeWidth="20"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M1385 400 Q1300 355 1240 375 Q1200 365 1180 385"
              stroke="url(#bark-highlight)"
              strokeWidth="20"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
              filter="url(#bark-detail)"
            />
          </g>
          
          {/* Branch reaching left lower */}
          <g>
            <path
              d="M1370 540 Q1280 498 1220 518 Q1180 510 1160 528"
              stroke="#1a3018"
              strokeWidth="22"
              fill="none"
              strokeLinecap="round"
              filter="url(#tree-rough2)"
            />
            <path
              d="M1370 540 Q1280 498 1220 518 Q1180 510 1160 528"
              stroke="#0d2010"
              strokeWidth="16"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Realistic moss/foliage on right tree */}
          <g filter="url(#leaf-texture)">
            <path
              d="M1490 200 Q1390 130 1310 160 Q1360 100 1290 80 Q1340 40 1320 0 L1260 0 Q1280 40 1260 80 Q1240 110 1280 140 Q1210 130 1240 200 Q1280 170 1340 190 Q1300 240 1360 260 Q1400 240 1490 260 Z"
              fill="url(#foliage-grad)"
              opacity="0.85"
            />
            <path
              d="M1480 310 Q1380 250 1300 270 Q1350 220 1280 200 Q1330 240 1320 300 Q1360 280 1410 310 Q1380 350 1440 370 Q1470 350 1480 310 Z"
              fill="url(#foliage-grad)"
              opacity="0.75"
            />
            {/* Additional foliage layers */}
            <path
              d="M1460 420 Q1360 360 1280 380 Q1330 330 1260 310 Q1310 350 1320 410 Q1360 390 1410 420 Q1380 460 1440 480 Q1470 460 1460 420 Z"
              fill="#061408"
              opacity="0.6"
            />
          </g>
        </g>

        {/* Subtle edge light on trees */}
        <g opacity="0.2">
          <path
            d="M120 0 Q120 200 105 450 Q130 600 120 700 Q110 850 150 900"
            stroke="#6b8ea3"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow-green)"
          />
          <path
            d="M1290 900 Q1340 850 1335 700 Q1325 600 1350 450 Q1340 350 1355 200 Q1365 100 1375 0"
            stroke="#6b8ea3"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow-green)"
          />
        </g>
      </svg>

      {/* Atmospheric vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 34%, rgba(0,0,0,0.74) 100%)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(20,30,42,0.25) 0%, rgba(8,12,16,0.35) 45%, rgba(0,0,0,0.5) 100%)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />

      {/* Fog drift overlay */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '25%',
          left: '-10%',
          width: '120%',
          height: '18%',
          background:
            'linear-gradient(90deg, transparent, rgba(62,76,90,0.1) 20%, rgba(72,88,100,0.16) 50%, rgba(62,76,90,0.1) 80%, transparent)',
          zIndex: 3,
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
        animate={{
          x: ['-5%', '5%', '-5%'],
          opacity: [0.3, 0.52, 0.3],
          scaleY: [1, 1.12, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default ForestScene;
