import React, { useEffect, useRef, useState } from 'react';
import './cursor.css';

const AdvancedGlowingCursor = () => {
  const cursorRef = useRef(null);
  const cursorGlowRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [speed, setSpeed] = useState(0);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorGlow = cursorGlowRef.current;

    const calculateSpeed = (x, y) => {
      const now = Date.now();
      const dt = now - lastTime.current;
      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy) / dt;
      
      lastPos.current = { x, y };
      lastTime.current = now;
      
      return speed;
    };

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      const currentSpeed = calculateSpeed(clientX, clientY);
      setSpeed(currentSpeed);

      requestAnimationFrame(() => {
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
        cursorGlow.style.left = `${clientX}px`;
        cursorGlow.style.top = `${clientY}px`;
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea');
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    addHoverListeners();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      const interactiveElements = document.querySelectorAll('a, button, input, textarea');
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className={`cursor ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''} ${speed > 0.5 ? 'moving' : ''}`} 
      />
      <div 
        ref={cursorGlowRef} 
        className={`cursor-glow ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''} ${speed > 0.5 ? 'moving' : ''}`}
        style={{
          '--speed': speed
        }}
      />
    </>
  );
};

export default AdvancedGlowingCursor;