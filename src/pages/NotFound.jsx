import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../hooks/useTheme';
import content from '../content/content';
import { pageTransition } from '../utils/animations';

export default function NotFound() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { code, heading, description, primaryCta, secondaryCta } = content.notFound;

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>{heading} - Marketive</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className={`min-h-screen flex items-center justify-center px-6 ${isDark ? 'bg-surface-dark' : 'bg-[#f8f9fc]'}`}>
        <div className="text-center max-w-xl">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-primary-500 border-4 border-black flex items-center justify-center shadow-[-6px_6px_0_0_#000]">
              <Compass size={40} className="text-black" />
            </div>
          </div>

          {/* Code */}
          <p className="text-primary-500 font-display font-bold text-7xl md:text-8xl leading-none mb-4">{code}</p>

          <h1 className={`text-3xl md:text-5xl font-bold font-display uppercase tracking-tight leading-none mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            {heading}
          </h1>

          <p className={`text-lg mb-10 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={primaryCta.path}
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-display font-bold text-sm uppercase tracking-widest border-2 border-black hover:bg-primary-500 hover:text-black hover:shadow-[-6px_6px_0_0_#000] hover:-translate-y-1 hover:translate-x-1 transition-all duration-300"
            >
              {primaryCta.label} <ArrowRight size={18} />
            </Link>
            <Link
              to={secondaryCta.path}
              className={`inline-flex items-center gap-3 px-8 py-4 font-display font-bold text-sm uppercase tracking-widest border-2 transition-all duration-300 ${
                isDark
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              <ArrowLeft size={18} /> {secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
