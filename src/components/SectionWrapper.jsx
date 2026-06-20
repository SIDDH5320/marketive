import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useTheme } from '../hooks/useTheme';

export default function SectionWrapper({
  children,
  tagline,
  heading,
  description,
  className = '',
  id,
  noPadding = false,
}) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id={id} className={`${noPadding ? '' : 'py-20 lg:py-28'} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {(tagline || heading || description) && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-14 lg:mb-16 max-w-3xl mx-auto"
          >
            {tagline && (
              <motion.span
                variants={fadeInUp}
                className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 mb-4"
              >
                {tagline}
              </motion.span>
            )}
            {heading && (
              <motion.h2
                variants={fadeInUp}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight mb-5 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {heading}
              </motion.h2>
            )}
            {description && (
              <motion.p
                variants={fadeInUp}
                className={`text-base lg:text-lg leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
