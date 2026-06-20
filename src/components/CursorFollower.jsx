import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFollower() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const x = useSpring(rawX, { stiffness: 180, damping: 20, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 180, damping: 20, mass: 0.5 });

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const move = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const over = (e) => {
      const el = e.target.closest('a, button, [data-cursor-hover]');
      setHovered(!!el);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Large ring — follows with spring lag */}
      <motion.div
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: hovered ? 1.8 : 1, opacity: hovered ? 0.6 : 0.35 }}
        transition={{ scale: { duration: 0.2 }, opacity: { duration: 0.2 } }}
        className="fixed top-0 left-0 w-9 h-9 border-2 border-primary-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
      {/* Small dot — instant */}
      <motion.div
        style={{ x: rawX, y: rawY, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: hovered ? 0 : 1 }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary-500 rounded-full pointer-events-none z-[9999]"
      />
    </>
  );
}
