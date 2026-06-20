import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import * as LucideIcons from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import content from '../content/content';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, pageTransition } from '../utils/animations';
import CTASection from '../components/CTASection';

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { about } = content;

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>About Marketive - Australia's Results-Driven Digital Marketing Agency</title>
        <meta name="description" content="Meet the team behind Australia's most results-driven digital marketing agency. Our mission, values, and the story of how we help brands grow." />
        <link rel="canonical" href="https://marketive.com.au/about" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${isDark ? 'bg-surface-dark' : 'bg-[#f8f9fc]'}`} />
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full bg-accent-500/8 blur-[140px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeInUp} className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 mb-4">
              {about.hero.tagline}
            </motion.span>
            <motion.h1 variants={fadeInUp} className={`text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 max-w-4xl mx-auto ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {about.hero.heading}
            </motion.h1>
            <motion.p variants={fadeInUp} className={`text-lg max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {about.hero.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`p-8 lg:p-10 rounded-2xl ${
                isDark
                  ? 'bg-surface-card border border-surface-border'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-5">
                <LucideIcons.Rocket size={22} className="text-primary-400" />
              </div>
              <h3 className={`text-2xl font-bold font-display mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {about.mission.heading}
              </h3>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {about.mission.description}
              </p>
            </motion.div>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`p-8 lg:p-10 rounded-2xl ${
                isDark
                  ? 'bg-surface-card border border-surface-border'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mb-5">
                <LucideIcons.Eye size={22} className="text-primary-400" />
              </div>
              <h3 className={`text-2xl font-bold font-display mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {about.vision.heading}
              </h3>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {about.vision.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`py-20 lg:py-24 ${isDark ? 'bg-surface-darker/50' : 'bg-gray-50/50'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeInUp} className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 mb-4">
              Our Core Values
            </motion.span>
            <motion.h2 variants={fadeInUp} className={`text-3xl md:text-4xl font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>
              What Drives Us Every Day
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {about.values.map((value, i) => {
              const Icon = LucideIcons[value.icon] || LucideIcons.Sparkles;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  className={`group p-7 rounded-2xl text-center transition-all duration-300 ${
                    isDark ? 'card-dark' : 'card-light'
                  }`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/15 to-accent-500/15 flex items-center justify-center mx-auto mb-5 group-hover:from-primary-500/25 group-hover:to-accent-500/25 transition-all">
                    <Icon size={24} className="text-primary-400" />
                  </div>
                  <h3 className={`text-lg font-semibold font-display mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {value.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 mb-4">
              Our Journey
            </motion.span>
            <motion.h2 variants={fadeInUp} className={`text-3xl md:text-4xl font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>
              From Startup to Industry Leader
            </motion.h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className={`absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 ${
              isDark ? 'bg-white/10' : 'bg-black/10'
            }`} />

            {about.timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={i % 2 === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500 shadow-lg shadow-primary-500/30 z-10 mt-2" />

                {/* Content */}
                <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="text-sm font-bold gradient-text">{item.year}</span>
                  <h3 className={`text-lg font-semibold font-display mt-1 mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`py-20 lg:py-24 ${isDark ? 'bg-surface-darker/50' : 'bg-gray-50/50'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeInUp} className={`text-3xl md:text-4xl font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {about.team.heading}
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {about.team.members.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className={`group p-7 rounded-2xl text-center transition-all duration-300 ${
                  isDark ? 'card-dark' : 'card-light'
                }`}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-5 text-white text-xl font-bold font-display">
                  {member.avatar}
                </div>
                <h3 className={`text-lg font-semibold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {member.name}
                </h3>
                <p className="text-sm text-primary-400 mb-2">{member.role}</p>
                <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        heading="Want to Join Our Team?"
        description="We're always looking for talented people who share our passion for digital excellence."
        cta={{ label: "Get in Touch", path: "/contact" }}
      />
    </motion.div>
  );
}
