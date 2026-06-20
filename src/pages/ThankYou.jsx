import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../hooks/useTheme';
import { pageTransition } from '../utils/animations';

export default function ThankYou() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Thank You - Marketive</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className={`min-h-screen flex items-center justify-center px-6 ${isDark ? 'bg-surface-dark' : 'bg-[#f8f9fc]'}`}>
        <div className="text-center max-w-xl">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-primary-500 border-4 border-black flex items-center justify-center shadow-[-6px_6px_0_0_#000]">
              <CheckCircle size={40} className="text-black" />
            </div>
          </div>

          {/* Heading */}
          <h1 className={`text-4xl md:text-6xl font-bold font-display uppercase tracking-tight leading-none mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            Message<br />Received!
          </h1>

          <p className={`text-lg mb-10 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Thanks for reaching out. We'll get back to you within 24 hours.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-display font-bold text-sm uppercase tracking-widest border-2 border-black hover:bg-primary-500 hover:text-black hover:shadow-[-6px_6px_0_0_#000] hover:-translate-y-1 hover:translate-x-1 transition-all duration-300"
          >
            Back to Home <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
