import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Quote, Star } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useCountUp } from '../hooks/useCountUp';
import content from '../content/content';
import { fadeInUp, staggerContainer, scaleIn, pageTransition } from '../utils/animations';
import SectionWrapper from '../components/SectionWrapper';
import ServiceCard from '../components/ServiceCard';
import CaseStudyCard from '../components/CaseStudyCard';
import CTASection from '../components/CTASection';
import AnimatedText from '../components/AnimatedText';
import BrandLogo, { BRAND_LOGOS } from '../components/BrandLogos';

function TestimonialsMarquee({ testimonials, isDark }) {
  const x = useMotionValue(0);
  const paused = useRef(false);
  const items = [...testimonials.items, ...testimonials.items]; // duplicate for seamless loop
  const CARD_W = 380; // px, approximate card width + gap

  useAnimationFrame((_, delta) => {
    if (paused.current) return;
    const next = x.get() - delta * 0.03;
    // Reset when we've scrolled one full set
    if (Math.abs(next) >= CARD_W * testimonials.items.length) {
      x.set(0);
    } else {
      x.set(next);
    }
  });

  return (
    <section className={`py-20 lg:py-28 overflow-hidden ${isDark ? 'bg-surface-darker/50' : 'bg-gray-50/50'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span variants={fadeInUp} className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 mb-4">
            {testimonials.tagline}
          </motion.span>
          <motion.h2 variants={fadeInUp} className={`text-3xl md:text-4xl lg:text-5xl font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {testimonials.heading}
          </motion.h2>
        </motion.div>
      </div>

      {/* Scrolling row - fades at edges */}
      <div
        className="relative"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
        onMouseEnter={() => { paused.current = true; }}
        onMouseLeave={() => { paused.current = false; }}
      >
        <motion.div style={{ x }} className="flex gap-6 w-max px-6">
          {items.map((t, i) => (
            <div
              key={i}
              className={`w-[360px] shrink-0 p-8 border-2 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 ${
                isDark
                  ? 'bg-surface-card border-surface-border hover:border-primary-500 hover:shadow-[4px_4px_0_0_var(--primary)]'
                  : 'bg-white border-black hover:shadow-[4px_4px_0_0_#000]'
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-primary-500 text-primary-500" />)}
              </div>
              <Quote size={24} className={`mb-3 ${isDark ? 'text-primary-500/30' : 'text-primary-500/20'}`} aria-hidden="true" />
              <p className={`text-sm leading-relaxed mb-6 flex-grow ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 border-2 border-black bg-primary-500 flex items-center justify-center shrink-0">
                  <span className="text-black text-xs font-display font-bold">{t.avatar}</span>
                </div>
                <div>
                  <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.name}</p>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ item }) {
  const { count, ref } = useCountUp(item.value, 2000);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-display accent-text mb-2">
        {count}{item.suffix}
      </div>
      <p className={`text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.label}</p>
    </motion.div>
  );
}

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { home, caseStudies } = content;

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Marketive - Australia's #1 Digital Marketing & SEO Agency</title>
        <meta name="description" content="Data-driven digital marketing strategies that fuel exponential growth. SEO, SEM, content, social media & automation for Australian businesses." />
        <link rel="canonical" href="https://marketive.com.au/" />
      </Helmet>

      {/* ======================== HERO ======================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${isDark ? 'bg-surface-dark' : 'bg-[#f5f5f7]'}`} />
          {/* Subtle dot grid */}
          {!isDark && (
            <div
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage: 'radial-gradient(circle, #b0b0b0 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
          )}
          {isDark && (
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
          )}
        </div>

        {/* Animated SVG decorations - light mode only */}
        {!isDark && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {/* Large soft blob top-right */}
            <motion.div
              className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(180,255,100,0.18) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Medium blob bottom-left */}
            <motion.div
              className="absolute bottom-10 -left-20 w-[380px] h-[380px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(180,255,100,0.12) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            />
            {/* Floating ring 1 */}
            <motion.svg
              className="absolute top-[18%] right-[12%]"
              width="90" height="90" viewBox="0 0 90 90"
              animate={{ y: [0, -14, 0], rotate: [0, 30, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <circle cx="45" cy="45" r="40" fill="none" stroke="#c8ff00" strokeWidth="2.5" strokeDasharray="12 8" />
            </motion.svg>
            {/* Floating ring 2 - smaller */}
            <motion.svg
              className="absolute top-[60%] right-[30%]"
              width="44" height="44" viewBox="0 0 44 44"
              animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            >
              <circle cx="22" cy="22" r="19" fill="none" stroke="#1a1a2e" strokeWidth="2" />
            </motion.svg>
            {/* Floating square */}
            <motion.svg
              className="absolute top-[30%] left-[6%]"
              width="28" height="28" viewBox="0 0 28 28"
              animate={{ rotate: [0, 90, 180, 270, 360], y: [0, -8, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              <rect x="3" y="3" width="22" height="22" fill="none" stroke="#c8ff00" strokeWidth="2.5" />
            </motion.svg>
            {/* Small dot cluster */}
            {[[72, 38], [80, 45], [76, 52], [68, 44], [84, 40]].map(([cx, cy], i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[#1a1a2e]"
                style={{ width: 5, height: 5, top: `${cy}%`, left: `${cx}%`, opacity: 0.15 }}
                animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.4, 1] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
              />
            ))}
            {/* Small accent dot */}
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-primary-500"
              style={{ top: '22%', left: '28%' }}
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Plus cross */}
            <motion.svg
              className="absolute bottom-[28%] left-[18%]"
              width="24" height="24" viewBox="0 0 24 24"
              animate={{ rotate: [0, 180, 360], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            >
              <line x1="12" y1="2" x2="12" y2="22" stroke="#c8ff00" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="2" y1="12" x2="22" y2="12" stroke="#c8ff00" strokeWidth="2.5" strokeLinecap="round" />
            </motion.svg>
            {/* Wavy SVG path */}
            <motion.svg
              className="absolute top-[10%] left-[40%] opacity-[0.07]"
              width="260" height="60" viewBox="0 0 260 60"
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path d="M0 30 Q65 0 130 30 T260 30" fill="none" stroke="#1a1a2e" strokeWidth="2" />
            </motion.svg>

            {/* Triangle top-left */}
            <motion.svg
              className="absolute top-[12%] left-[38%]"
              width="36" height="36" viewBox="0 0 36 36"
              animate={{ rotate: [0, 360], y: [0, -10, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            >
              <polygon points="18,3 33,30 3,30" fill="none" stroke="#c8ff00" strokeWidth="2" strokeLinejoin="round" />
            </motion.svg>

            {/* Second wavy path - bottom area */}
            <motion.svg
              className="absolute bottom-[18%] right-[10%] opacity-[0.06]"
              width="320" height="70" viewBox="0 0 320 70"
              animate={{ x: [10, -10, 10] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <path d="M0 35 Q80 5 160 35 T320 35" fill="none" stroke="#1a1a2e" strokeWidth="2.5" />
            </motion.svg>

            {/* Orbit ring - large, slow, center-right */}
            <motion.svg
              className="absolute top-[5%] right-[4%] opacity-30"
              width="200" height="200" viewBox="0 0 200 200"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              <ellipse cx="100" cy="100" rx="95" ry="40" fill="none" stroke="#c8ff00" strokeWidth="1.5" strokeDasharray="6 10" />
              <circle cx="195" cy="100" r="5" fill="#c8ff00" />
            </motion.svg>

            {/* Dashed horizontal line - mid right */}
            <motion.svg
              className="absolute top-[52%] right-[5%] opacity-20"
              width="120" height="4" viewBox="0 0 120 4"
              animate={{ scaleX: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <line x1="0" y1="2" x2="120" y2="2" stroke="#1a1a2e" strokeWidth="2" strokeDasharray="8 5" />
            </motion.svg>

            {/* Hexagon - lower left area */}
            <motion.svg
              className="absolute bottom-[20%] left-[8%]"
              width="48" height="48" viewBox="0 0 48 48"
              animate={{ rotate: [0, 60, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            >
              <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" fill="none" stroke="#c8ff00" strokeWidth="2" />
            </motion.svg>

            {/* Small diagonal arrow lines - decorative */}
            <motion.svg
              className="absolute top-[75%] left-[45%] opacity-15"
              width="50" height="50" viewBox="0 0 50 50"
              animate={{ x: [0, 6, 0], y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            >
              <line x1="5" y1="45" x2="45" y2="5" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" />
              <line x1="25" y1="5" x2="45" y2="5" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" />
              <line x1="45" y1="5" x2="45" y2="25" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" />
            </motion.svg>

            {/* Scattered small dots - extra set */}
            {[[15, 70], [22, 55], [10, 45], [18, 82], [25, 75], [32, 65]].map(([l, t], i) => (
              <motion.div
                key={`dot2-${i}`}
                className="absolute rounded-full"
                style={{ width: i % 2 === 0 ? 4 : 6, height: i % 2 === 0 ? 4 : 6, top: `${t}%`, left: `${l}%`, background: i % 3 === 0 ? '#c8ff00' : '#1a1a2e', opacity: 0.2 }}
                animate={{ opacity: [0.1, 0.35, 0.1], y: [0, -5, 0] }}
                transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
              />
            ))}

            {/* Lime filled circle - small, floating */}
            <motion.div
              className="absolute w-5 h-5 rounded-full bg-primary-500"
              style={{ top: '40%', right: '22%', opacity: 0.5 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            {/* Spiral / arc path - top center-left */}
            <motion.svg
              className="absolute top-[35%] left-[2%] opacity-10"
              width="80" height="80" viewBox="0 0 80 80"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <path d="M40 40 m-30,0 a30,30 0 1,1 60,0 a24,24 0 1,1 -48,0 a18,18 0 1,1 36,0" fill="none" stroke="#1a1a2e" strokeWidth="1.5" />
            </motion.svg>

            {/* Corner bracket - bottom right content area */}
            <motion.svg
              className="absolute bottom-[30%] right-[18%] opacity-20"
              width="40" height="40" viewBox="0 0 40 40"
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
            >
              <path d="M14 4 H4 V14" fill="none" stroke="#c8ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26 36 H36 V26" fill="none" stroke="#c8ff00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>

          </div>
        )}

        {/* Dark mode soft glows */}
        {isDark && (
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(180,255,100,0.06) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(180,255,100,0.04) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            />
          </div>
        )}

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className={`inline-flex items-center gap-3 px-5 py-2 text-xs font-bold font-display uppercase tracking-widest border-2 transition-transform hover:-translate-y-1 hover:translate-x-1 ${
                isDark
                  ? 'bg-primary-500 text-black border-white hover:shadow-[-4px_4px_0_0_#fff]'
                  : 'bg-primary-500 text-black border-black hover:shadow-[-4px_4px_0_0_#000]'
              }`}>
                <span className="w-2.5 h-2.5 bg-black border border-black animate-pulse" />
                Australia&apos;s #1 Digital Marketing Agency
              </span>
            </motion.div>

            <AnimatedText
              text={home.hero.headline}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.08] mb-2"
              style={{ color: isDark ? '#fff' : '#1a1a2e' }}
            />
            <motion.div
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.08] mb-8"
            >
              <span className="accent-text">{home.hero.headlineHighlight}</span>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className={`text-lg md:text-xl max-w-2xl mb-10 leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {home.hero.subheadline}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link to={home.hero.cta.path} className="btn-primary">
                <span>{home.hero.cta.label}</span>
                <ArrowRight size={18} className="relative z-[1]" />
              </Link>
              <Link
                to={home.hero.secondaryCta.path}
                className={isDark ? 'btn-secondary-dark' : 'btn-secondary-light'}
              >
                {home.hero.secondaryCta.label}
              </Link>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* ======================== TRUSTED BY ======================== */}
      <section className={`relative overflow-hidden py-16 lg:py-20 border-y ${
        isDark ? 'bg-surface-darker border-white/5' : 'bg-white border-black/5'
      }`}>
        {/* Subtle depth + brand glow behind the strip (dark mode) for readability */}
        {isDark && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-darker to-surface-dark" />
            <div
              className="absolute left-1/2 top-1/2 h-32 w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
              style={{ background: 'radial-gradient(ellipse, rgba(212,255,0,0.07), transparent 70%)' }}
            />
          </div>
        )}

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`mb-12 text-center text-xs font-bold font-display uppercase tracking-[0.25em] ${
              isDark ? 'text-gray-500' : 'text-gray-400'
            }`}
          >
            Powering campaigns with the world&apos;s best platforms
          </motion.p>

          {/* Seamless marquee — pauses on hover, respects prefers-reduced-motion */}
          <div className="marquee-viewport relative overflow-hidden">
            <div className="marquee-track items-center">
              {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => (
                <div
                  key={i}
                  className="mx-7 flex shrink-0 items-center"
                  aria-hidden={i >= BRAND_LOGOS.length}
                >
                  <BrandLogo
                    name={logo.name}
                    path={logo.path}
                    className={`h-7 w-auto transition-all duration-300 hover:scale-110 ${
                      isDark
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================== SERVICES PREVIEW ======================== */}
      <SectionWrapper
        tagline={home.servicesPreview.tagline}
        heading={home.servicesPreview.heading}
        description={home.servicesPreview.description}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {home.servicesPreview.services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-400 font-medium hover:text-primary-300 transition-colors group"
          >
            View all services
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </SectionWrapper>

      {/* ======================== CASE STUDIES PREVIEW ======================== */}
      <SectionWrapper
        tagline={home.caseStudiesPreview.tagline}
        heading={home.caseStudiesPreview.heading}
        description={home.caseStudiesPreview.description}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {caseStudies.items.slice(0, 3).map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary-400 font-medium hover:text-primary-300 transition-colors group"
          >
            View all case studies
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </SectionWrapper>

      {/* ======================== CTA BANNER ======================== */}
      <CTASection
        heading={home.ctaBanner.heading}
        showForm
      />
    </motion.div>
  );
}
