import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { fadeInUp, staggerContainer } from '../utils/animations';
import ContactForm from './ContactForm';

export default function CTASection({ heading, description, cta, showForm = false }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative bg-accent-solid border-4 border-black"
        >
          {/* Brutalist diagonal stripes */}
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 12px)' }}
          />

          <div className={`relative px-8 py-20 md:px-20 ${showForm ? 'md:py-16' : 'md:py-32'} text-center`}>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-7xl font-bold font-display text-black mb-8 leading-none uppercase tracking-tight"
            >
              {heading}
            </motion.h2>

            {showForm ? (
              <motion.div variants={fadeInUp} className="mt-10">
                <ContactForm variant="onAccent" redirectTo="/thank-you" />
              </motion.div>
            ) : (
              <>
                {description && (
                  <motion.p
                    variants={fadeInUp}
                    className="text-xl md:text-2xl text-black font-medium max-w-3xl mx-auto mb-12"
                  >
                    {description}
                  </motion.p>
                )}
                <motion.div variants={fadeInUp}>
                  <Link
                    to={cta.path}
                    className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 font-display font-bold text-xl uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black hover:shadow-[-8px_8px_0_0_#000] hover:-translate-y-2 hover:translate-x-2 transition-all duration-300"
                  >
                    {cta.label}
                    <ArrowRight size={24} />
                  </Link>
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
