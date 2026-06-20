import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, ArrowUpRight, Check, ChevronDown, TrendingUp } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import content from '../content/content';
import { fadeInUp, staggerContainer, pageTransition } from '../utils/animations';
import SectionWrapper from '../components/SectionWrapper';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';

const PROCESS_STEPS = [
  { step: '01', title: 'Discover', description: "We start by understanding your business, audience, and goals - plus a deep audit of where you stand today." },
  { step: '02', title: 'Strategise', description: 'We build a tailored roadmap with clear priorities, timelines, and KPIs aligned to your growth targets.' },
  { step: '03', title: 'Execute', description: 'Our specialists get to work - implementing, launching, and refining across every relevant channel.' },
  { step: '04', title: 'Optimise & Report', description: 'We track everything that matters and continuously optimise, with transparent reporting every step of the way.' },
];

function FaqItem({ faq, isOpen, onToggle, isDark }) {
  return (
    <div className={`rounded-2xl overflow-hidden ${isDark ? 'card-dark' : 'card-light'}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 text-left p-6"
      >
        <span className={`font-bold font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>{faq.q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 transition-transform duration-300 text-primary-500 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className={`px-6 pb-6 leading-relaxed text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServiceDetail() {
  const { id } = useParams();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [openFaq, setOpenFaq] = useState(0);
  const { services } = content;

  const service = services.items.find((s) => s.id === id);
  if (!service) return <Navigate to="/services" replace />;

  const Icon = LucideIcons[service.icon] || LucideIcons.Lightbulb;
  const otherServices = services.items.filter((s) => s.id !== id).slice(0, 3);

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>{service.title} Services | Marketive</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={`https://marketive.com.au/services/${service.id}`} />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${isDark ? 'bg-surface-dark' : 'bg-[#f8f9fc]'}`} />
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full bg-primary-500/8 blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="mb-10">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
              <Link to="/services" className="hover:text-primary-500 transition-colors">Services</Link>
              <span>/</span>
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{service.title}</span>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.div variants={fadeInUp} className="w-16 h-16 rounded-2xl bg-primary-500 border-2 border-black flex items-center justify-center mb-6">
                <Icon size={28} className="text-black" />
              </motion.div>
              <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-4">
                {service.tagline}
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className={`text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
              >
                {service.title}
              </motion.h1>
              <motion.p variants={fadeInUp} className={`text-lg mb-8 max-w-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {service.description}
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link to={service.cta.path} className="btn-primary">
                  {service.cta.label} <ArrowRight size={16} />
                </Link>
                <Link to="/case-studies" className={isDark ? 'btn-secondary-dark' : 'btn-secondary-light'}>
                  View Case Studies
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className={`rounded-2xl p-8 lg:p-10 ${isDark ? 'card-dark' : 'card-light'}`}
            >
              <p className={`text-xs font-bold uppercase tracking-widest mb-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                Results We Aim For
              </p>
              <div className="grid grid-cols-2 gap-6">
                {service.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl lg:text-3xl font-bold font-display accent-text mb-1">{stat.value}</div>
                    <p className={`text-xs leading-snug ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <SectionWrapper
        tagline="What's Included"
        heading={`Everything You Need to Win With ${service.title}`}
        className={isDark ? 'bg-surface-darker/60' : 'bg-[#f5f5f7]'}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {service.features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`flex items-start gap-4 p-5 rounded-2xl ${isDark ? 'card-dark' : 'card-light'}`}
            >
              <div className="w-8 h-8 rounded-lg bg-primary-500 border-2 border-black flex items-center justify-center shrink-0">
                <Check size={16} className="text-black" />
              </div>
              <span className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ── WHY IT WORKS ── */}
      <SectionWrapper tagline="Why It Works" heading="The Impact You Can Expect">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {service.benefits.map((benefit, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`flex items-start gap-4 p-6 rounded-2xl ${isDark ? 'card-dark' : 'card-light'}`}
            >
              <TrendingUp size={22} className="text-primary-400 shrink-0 mt-0.5" />
              <span className={`font-medium leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{benefit}</span>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ── PROCESS ── */}
      <SectionWrapper
        tagline="Our Process"
        heading="How We Deliver Results"
        className={isDark ? 'bg-surface-darker/60' : 'bg-[#f5f5f7]'}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PROCESS_STEPS.map((step) => (
            <motion.div
              key={step.step}
              variants={fadeInUp}
              className={`rounded-2xl p-6 ${isDark ? 'card-dark' : 'card-light'}`}
            >
              <span className="text-4xl font-bold font-display text-primary-500/40 block mb-3">{step.step}</span>
              <h3 className={`text-lg font-bold font-display mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ── FAQ ── */}
      <SectionWrapper tagline="FAQs" heading={`Common Questions About ${service.title}`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {service.faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <FaqItem
                faq={faq}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                isDark={isDark}
              />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ── RELATED SERVICES ── */}
      <SectionWrapper
        tagline="Explore More"
        heading="Other Ways We Can Help"
        className={isDark ? 'bg-surface-darker/60' : 'bg-[#f5f5f7]'}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {otherServices.map((s) => {
            const SIcon = LucideIcons[s.icon] || LucideIcons.Lightbulb;
            return (
              <motion.div key={s.id} variants={fadeInUp}>
                <Link
                  to={`/services/${s.id}`}
                  className={`group block h-full p-7 rounded-2xl transition-all duration-300 ${isDark ? 'card-dark' : 'card-light'}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500 border-2 border-black flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <SIcon size={20} className="text-black" />
                  </div>
                  <h3 className={`text-lg font-bold font-display mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{s.title}</h3>
                  <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{s.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary-500">
                    Learn More <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionWrapper>

      {/* ── CONTACT FORM ── */}
      <section className={`py-20 lg:py-28 ${isDark ? 'bg-surface-dark' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-3">
                Get Started
              </motion.span>
              <motion.h2 variants={fadeInUp} className={`text-3xl md:text-4xl font-bold font-display mb-5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Ready to talk {service.title.toLowerCase()}?
              </motion.h2>
              <motion.p variants={fadeInUp} className={`text-base leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Tell us about your goals and we'll put together a tailored plan to help you get there. No fluff - just real results.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  'Free initial consultation',
                  'Custom strategy tailored to your business',
                  'No lock-in contracts',
                  'Transparent reporting & communication',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-500 border-2 border-black flex items-center justify-center shrink-0">
                      <Check size={11} className="text-black" />
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
        heading="Ready to Get Started?"
        cta={{ label: 'View All Services', path: '/services' }}
      />
    </motion.div>
  );
}
