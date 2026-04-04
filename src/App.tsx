import React, { useState, useEffect, useRef } from 'react';
import { useMousePosition } from './hooks/useMousePosition';
import ForestScene from './components/ForestScene';
import HeroTitle from './components/HeroTitle';
import FlowerCanvas from './components/FlowerCanvas';
import Navigation from './components/Navigation';
import InfoSection from './components/InfoSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  const mousePosition = useMousePosition();
  const [isMoving, setIsMoving] = useState(false);
  const moveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleMove = () => {
      setIsMoving(true);
      if (moveTimerRef.current) clearTimeout(moveTimerRef.current);
      moveTimerRef.current = setTimeout(() => setIsMoving(false), 200);
    };
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (moveTimerRef.current) clearTimeout(moveTimerRef.current);
    };
  }, []);

  return (
    <div
      style={{
        background: '#000000',
        minHeight: '100vh',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <Navigation />

      {/* Hero section */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <ForestScene mousePosition={mousePosition} />
        <HeroTitle />
      </section>

      {/* Content sections below the fold */}
      <InfoSection />
      <ContactSection />

      {/* Canvas flower layer — fixed, always on top */}
      <FlowerCanvas
        mouseX={mousePosition.x}
        mouseY={mousePosition.y}
        isMoving={isMoving}
      />
    </div>
  );
};

export default App;
