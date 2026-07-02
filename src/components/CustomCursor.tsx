import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);

  // High performance, smooth spring physics coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is touch based
    const isTouchDevice = 
      window.matchMedia('(pointer: coarse)').matches || 
      'ontouchstart' in window;

    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Dynamic hover listeners
    const addEventListeners = () => {
      document.querySelectorAll('a, button, select, [role="button"], .cursor-pointer').forEach((el) => {
        el.addEventListener('mouseenter', () => setCursorType('pointer'));
        el.addEventListener('mouseleave', () => setCursorType('default'));
      });

      document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="number"], textarea').forEach((el) => {
        el.addEventListener('mouseenter', () => setCursorType('text'));
        el.addEventListener('mouseleave', () => setCursorType('default'));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Initial run & mutation observer to watch for dynamic list rendering
    addEventListeners();
    const observer = new MutationObserver(addEventListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[999999] will-change-transform block"
      style={{
        x: cursorX,
        y: cursorY,
        // Compensate for center of mass alignment depending on state
        translateX: cursorType === 'pointer' ? -12 : cursorType === 'text' ? -6 : -4,
        translateY: cursorType === 'pointer' ? -12 : cursorType === 'text' ? -12 : -3,
      }}
    >
      <motion.div
        animate={cursorType}
        variants={{
          default: {
            scale: 1,
            rotate: 0,
          },
          pointer: {
            scale: 1.15,
            rotate: -15,
          },
          text: {
            scale: 1,
            rotate: 0,
          }
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="relative"
      >
        {/* Render clean, vector shapes for premium pixel accuracy */}
        {cursorType === 'default' && (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
          >
            {/* Elegant, hyper-minimalist sharp custom vector pointer */}
            <path
              d="M4.5 3V18.2L9.1 13.8L12.1 20.2L14.4 19.1L11.4 12.7H17.7L4.5 3Z"
              fill="url(#goldGradient)"
              stroke="#111111"
              strokeWidth="1.5"
              strokeLinejoin="miter"
            />
            <defs>
              <linearGradient id="goldGradient" x1="4.5" y1="3" x2="17.7" y2="18.2" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {cursorType === 'pointer' && (
          <div className="relative flex items-center justify-center">
            {/* Modern hollow luxury ring behind pointer dot */}
            <motion.div
              animate={{ scale: [0.9, 1.1, 0.9] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute h-8 w-8 rounded-full border border-gold-400/40 bg-gold-400/5 backdrop-blur-[1px]"
            />
            
            {/* Elegant tiny solid gold focus core dot */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] z-10"
            >
              <circle
                cx="12"
                cy="12"
                r="4.5"
                fill="url(#goldGradientPointer)"
                stroke="#111111"
                strokeWidth="1.2"
              />
              <defs>
                <linearGradient id="goldGradientPointer" x1="7.5" y1="7.5" x2="16.5" y2="16.5" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}

        {cursorType === 'text' && (
          <svg
            width="12"
            height="24"
            viewBox="0 0 12 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
          >
            {/* Elegant luxury gold serif I-Beam text input indicator */}
            <path
              d="M2 3H10M6 3V21M2 21H10M4 3.5H8M4 20.5H8"
              stroke="#fbbf24"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        )}
      </motion.div>
    </motion.div>
  );
}
