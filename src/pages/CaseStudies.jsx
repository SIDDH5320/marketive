import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import content from '../content/content';
import { fadeInUp, staggerContainer, pageTransition } from '../utils/animations';
import CaseStudyCard from '../components/CaseStudyCard';
import CTASection from '../components/CTASection';

export default function CaseStudies() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { caseStudies } = content;
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? caseStudies.items
      : caseStudies.items.filter(s => s.category === activeCategory);

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Case Studies — Real Results for Australian Businesses | Marketive</title>
        <meta name="description" content="See how Marketive has transformed brands across Australia. Real campaigns, measurable results, and proven ROI across SEO, SEM, and content." />
        <link rel="canonical" href="https://marketive.com.au/case-studies" />
      </Helmet>

      {/* ── Hero ── */}
      <section className={`pt-36 pb-16 text-center ${isDark ? 'bg-surface-dark' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span
              variants={fadeInUp}
              className={`text-xs font-bold uppercase tracking-[0.25em] mb-4 block ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
            >
              {caseStudies.hero.tagline}
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5 ${isDark ? 'text-white' : 'text-[#1a1a3e]'}`}
            >
              {caseStudies.hero.heading}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
            >
              {caseStudies.hero.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className={`py-14 lg:py-20 ${isDark ? 'bg-surface-dark' : 'bg-[#f5f5f7]'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {caseStudies.categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gray-900 text-white border-gray-900'
                    : isDark
                    ? 'bg-transparent border-white/20 text-gray-300 hover:border-white/50 hover:text-white'
                    : 'bg-white border-gray-300 text-gray-600 hover:border-gray-500 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map(study => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <CaseStudyCard
                    study={study}
                    onClick={() => navigate(`/case-studies/${study.id}`)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection
        heading="Want Results Like These?"
        description="Let's discuss how we can achieve similar outcomes for your business."
        cta={{ label: "Start Your Project", path: "/contact" }}
      />
    </motion.div>
  );
}
