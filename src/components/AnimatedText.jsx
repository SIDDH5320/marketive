import { motion } from 'framer-motion';

export default function AnimatedText({ text, className = '', tag = 'span' }) {
  const words = text.split(' ');
  const Tag = tag;

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.04 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: 'spring', damping: 15, stiffness: 200 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`flex flex-wrap ${className}`}
      style={{ perspective: '500px' }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block mr-[0.3em]"
          style={{ transformOrigin: 'bottom' }}
          aria-hidden="true"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
