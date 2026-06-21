import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Search, BarChart3, FileText, Share2, Lightbulb, Zap, TrendingUp, Target } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import content from '../content/content';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, pageTransition } from '../utils/animations';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';

const ICON_MAP = {
  Lightbulb, Search, BarChart3, FileText, Share2, Zap, TrendingUp, Target,
};

const STATS = [
  {
    icon: '📊',
    label: 'Businesses with a documented digital strategy are',
    highlight: '313% more likely',
    suffix: 'to achieve their marketing goals.',
  },
  {
    icon: '🚀',
    label: 'Companies that invest in data-driven marketing see',
    highlight: '5-8× higher ROI',
    suffix: "compared to those that don't.",
  },
];

const PROCESS = [
  {
    step: '01',
    title: 'Analyse',
    description:
      'We deep-dive into your current digital presence - auditing your website, SEO, paid campaigns, social media, and competitors - to identify gaps and opportunities.',
    img: '/images/services/process-1.jpg',
  },
  {
    step: '02',
    title: 'Strategise',
    description:
      'Armed with data, we craft a tailored growth roadmap - defining target audiences, channel mix, KPIs, and a clear budget allocation aligned to your business goals.',
    img: '/images/services/process-2.jpg',
  },
  {
    step: '03',
    title: 'Implement',
    description:
      'Our specialists execute across every channel with precision - launching campaigns, publishing content, tracking results, and continuously optimising for growth.',
    img: '/images/services/process-3.jpg',
  },
];

export default function Services() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { services } = content;

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Digital Marketing Services | SEO, SEM, Content & More - Marketive</title>
        <meta name="description" content="Full-stack digital marketing services: SEO, Google Ads, content strategy, social media, and marketing automation. Tailored for Australian businesses." />
        <link rel="canonical" href="https://marketive.com.au/services" />
      </Helmet>

      {/* ── HERO ── */}
      <section className={`pt-32 pb-20 overflow-hidden ${isDark ? 'bg-surface-dark' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#e85d04] mb-4">
                {services.hero.tagline}
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${isDark ? 'text-white' : 'text-[#1a1a3e]'}`}
              >
                {services.hero.heading}
              </motion.h1>
              <motion.p variants={fadeInUp} className={`text-lg mb-8 max-w-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {services.hero.description}
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#e85d04] text-white font-semibold text-sm hover:bg-[#cf5204] transition-colors">
                  Get in touch <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/services/hero.jpg"
                  alt="Digital marketing strategy"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className={`absolute -bottom-5 -left-5 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 ${isDark ? 'bg-surface-card' : 'bg-white'}`}>
                <span className="text-3xl">📈</span>
                <div>
                  <p className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Average client growth</p>
                  <p className="text-[#e85d04] font-bold text-xl">+347% ROI</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DID YOU KNOW ── */}
      <section className={`py-16 ${isDark ? 'bg-surface-darker/60' : 'bg-[#f5f5f7]'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`rounded-2xl p-8 flex gap-5 ${isDark ? 'bg-surface-card' : 'bg-white'}`}
              >
                <span className="text-4xl shrink-0">{s.icon}</span>
                <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {s.label}{' '}
                  <span className="font-bold text-[#e85d04]">{s.highlight}</span>{' '}
                  {s.suffix}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className={`py-20 lg:py-28 ${isDark ? 'bg-surface-dark' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#e85d04] mb-3">
              What We Do
            </motion.span>
            <motion.h2 variants={fadeInUp} className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-[#1a1a3e]'}`}>
              Our Core Services
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.items.map((service, i) => {
              const Icon = ICON_MAP[service.icon] || Lightbulb;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className={`group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isDark
                      ? 'bg-surface-card hover:bg-surface-card/80'
                      : 'bg-white border border-gray-100 shadow-sm hover:border-[#e85d04]/20'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e85d04]/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#e85d04]" />
                  </div>
                  <Link to={`/services/${service.id}`}>
                    <h3 className={`text-xl font-bold mb-3 hover:text-[#e85d04] transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{service.title}</h3>
                  </Link>
                  <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2">
                        <Check size={14} className="text-[#e85d04] mt-0.5 shrink-0" />
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#e85d04] group-hover:underline"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`py-20 lg:py-28 ${isDark ? 'bg-surface-darker/60' : 'bg-[#f5f5f7]'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#e85d04] mb-3">
              Our Process
            </motion.span>
            <motion.h2 variants={fadeInUp} className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-[#1a1a3e]'}`}>
              How We Deliver Results
            </motion.h2>
          </motion.div>

          <div className="space-y-20">
            {PROCESS.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  <motion.div variants={isEven ? slideInLeft : slideInRight} className={!isEven ? 'lg:order-2' : ''}>
                    <span className="text-6xl font-bold text-[#e85d04]/20 font-display block mb-2">{step.step}</span>
                    <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{step.description}</p>
                  </motion.div>
                  <motion.div variants={isEven ? slideInRight : slideInLeft} className={!isEven ? 'lg:order-1' : ''}>
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img src={step.img} alt={step.title} loading="lazy" decoding="async" className="w-full h-72 object-cover" />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className={`py-20 lg:py-28 ${isDark ? 'bg-surface-dark' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#e85d04] mb-3">
                Get Started
              </motion.span>
              <motion.h2 variants={fadeInUp} className={`text-3xl md:text-4xl font-bold mb-5 ${isDark ? 'text-white' : 'text-[#1a1a3e]'}`}>
                Ready to grow your business?
              </motion.h2>
              <motion.p variants={fadeInUp} className={`text-base leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Tell us about your goals and we'll put together a tailored strategy to help you dominate your market. No fluff - just real results.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  'Initial consultation',
                  'Custom strategy tailored to your business',
                  'No lock-in contracts',
                  'Transparent reporting & communication',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#e85d04]/15 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#e85d04]" />
                    </div>
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm redirectTo="/thank-you" />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Let's Build Something Great"
        cta={{ label: "View Case Studies", path: "/case-studies" }}
      />
    </motion.div>
  );
}
