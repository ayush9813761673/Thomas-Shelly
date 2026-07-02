import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  decay: number;
  color: string;
}

export default function GoldDustCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0, speed: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check if the device is touch-based; disable simulation to save battery & performance
    const isTouchDevice = 
      window.matchMedia('(pointer: coarse)').matches || 
      'ontouchstart' in window;

    if (isTouchDevice) {
      canvas.style.display = 'none';
      return;
    }

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 140; // Balanced limit for ambient gold dust density

    // Luxury warm gold palettes with varying transparency
    const goldPalettes = [
      'rgba(212, 175, 55, ',  // Metallic Gold
      'rgba(245, 158, 11, ',  // Warm Amber
      'rgba(251, 191, 36, ',  // Golden yellow
      'rgba(197, 160, 89, ',  // Dull luxury gold
    ];

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.lastX = mouseRef.current.x;
      mouseRef.current.lastY = mouseRef.current.y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      const dx = mouseRef.current.x - mouseRef.current.lastX;
      const dy = mouseRef.current.y - mouseRef.current.lastY;
      mouseRef.current.speed = Math.sqrt(dx * dx + dy * dy);

      // Dynamically seed particles when mouse moves above a certain speed
      if (mouseRef.current.speed > 1.5 && particles.length < maxParticles) {
        // Spawn a subtle golden particle with delicate drift forces
        const baseColor = goldPalettes[Math.floor(Math.random() * goldPalettes.length)];
        const size = Math.random() * 1.6 + 0.5; // Very fine dust particles

        particles.push({
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          // Light scattering speeds
          vx: (Math.random() - 0.5) * 0.4 + (dx * 0.02),
          vy: (Math.random() - 0.5) * 0.4 + (dy * 0.02) - 0.2, // Gentle upward buoyant drift
          size,
          alpha: 0, // Fade in
          targetAlpha: Math.random() * 0.5 + 0.15, // Gentle cap
          decay: Math.random() * 0.009 + 0.006, // Slow degradation
          color: baseColor
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Physics & Draw loop
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Ambient persistent gold dust background generator
      // If there's capacity, gently sprinkle new background particles
      if (particles.length < 90 && Math.random() < 0.18) {
        const baseColor = goldPalettes[Math.floor(Math.random() * goldPalettes.length)];
        const size = Math.random() * 1.5 + 0.4; // Exquisite fine size
        
        // Spawn randomly across the viewport (often near the bottom to drift upwards, or scattered)
        const spawnOnBottom = Math.random() > 0.3;
        particles.push({
          x: Math.random() * window.innerWidth,
          y: spawnOnBottom ? window.innerHeight + 10 : Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.15, // Very slow lateral drift
          vy: -(Math.random() * 0.25 + 0.08), // Gentle upward buoyancy
          size,
          alpha: 0,
          targetAlpha: Math.random() * 0.3 + 0.1, // Softer opacity for ambient particles
          decay: Math.random() * 0.004 + 0.002, // Longer, luxurious lifetimes
          color: baseColor
        });
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Apply velocities with minor friction deceleration
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Apply a tiny bit of horizontal floating breeze
        p.vx += (Math.sin(p.y * 0.008 + i) * 0.003);

        // Handle clean fades
        if (p.alpha < p.targetAlpha) {
          p.alpha += 0.02; // Smooth fade-in speed
        } else {
          p.alpha -= p.decay; // Soft atmospheric decay
        }

        // Out of bounds check or complete decay
        if (p.alpha <= 0 || p.y < -10 || p.x < -10 || p.x > window.innerWidth + 10) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        
        // Add subtle radial light glow for glittering star effect (only on larger dust specs)
        if (p.size > 1.2) {
          ctx.shadowBlur = 3;
          ctx.shadowColor = 'rgba(212, 175, 55, 0.3)';
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[1] mix-blend-screen opacity-70"
      id="gold-dust-canvas"
    />
  );
}
