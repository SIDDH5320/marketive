import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, pageTransition } from '../utils/animations';
import SectionWrapper from '../components/SectionWrapper';
import CTASection from '../components/CTASection';

// ============================================================
// PAGE CONTENT — edit here to update the Strategy & Consulting page
// ============================================================
const WHY_MATTERS = [
  {
    img: '/images/services/process-1.jpg',
    text: 'Many businesses invest in SEO, Google Ads or social media without a clear roadmap. The result is wasted budget, inconsistent messaging and disappointing returns.',
  },
  {
    img: '/images/services/process-2.jpg',
    text: 'Our strategy consulting identifies where your biggest opportunities exist before you invest another marketing dollar.',
  },
];

const HELP_CARDS = [
  { icon: 'Map', title: 'Digital Marketing Strategy', text: 'Create a complete roadmap across SEO, Paid Ads, Social Media and Content.' },
  { icon: 'Target', title: 'Competitor Analysis', text: 'Identify what competitors are doing and uncover opportunities to outperform them.' },
  { icon: 'Search', title: 'Market Research', text: 'Understand your audience, buying behaviour and demand.' },
  { icon: 'Route', title: 'Customer Journey Mapping', text: 'Map every stage from awareness to conversion.' },
  { icon: 'Filter', title: 'Marketing Funnel Strategy', text: 'Improve lead generation and sales processes.' },
  { icon: 'LineChart', title: 'Performance Planning', text: 'Set measurable KPIs and reporting frameworks.' },
];

const INCLUDED = [
  'Website Audit',
  'SEO Audit',
  'Google Ads Audit',
  'Social Media Audit',
  'Competitor Analysis',
  'Audience Research',
  'Keyword Research',
  'Marketing Roadmap',
  'Customer Persona Development',
  'Marketing Planning Services',
  'Budget Planning',
  'KPI Framework',
  '90-Day Action Plan',
];

const PROCESS = [
  { step: '1', title: 'Discovery', text: 'We take the time to understand your business, industry, competitors, customers, and objectives.' },
  { step: '2', title: 'Digital Marketing Audit', text: 'Our team conducts a comprehensive Digital Marketing Audit to identify strengths, weaknesses, technical issues, and growth opportunities.' },
  { step: '3', title: 'Research & Strategy Development', text: 'Using market insights and customer data, we develop a tailored Business Growth Strategy and Online Marketing Strategy designed to achieve your goals.' },
  { step: '4', title: 'Marketing Roadmap', text: "You'll receive a practical Marketing Roadmap outlining recommended channels, campaign priorities, timelines, and investment recommendations." },
  { step: '5', title: 'Ongoing Strategic Support', text: 'As your trusted Marketing Consulting Services partner, we continue refining your strategy based on performance data, market changes, and business growth.' },
];

const WHY_CHOOSE_INTRO =
  'Choosing the right Marketing Strategy Agency can make the difference between wasted marketing spend and sustainable business growth. Our approach combines strategic thinking, market research, data analysis, and AI-powered insights to create marketing strategies that deliver measurable results.';

const WHY_CHOOSE = [
  { icon: 'BarChart3', label: 'Data-Driven Decisions' },
  { icon: 'Sparkles', label: 'AI-Powered Insights' },
  { icon: 'Award', label: 'Certified Digital Experts' },
  { icon: 'FileText', label: 'Transparent Reporting' },
  { icon: 'TrendingUp', label: 'Tailored Growth Plans' },
  { icon: 'MapPin', label: 'Australian Market Experience' },
];


const INDUSTRIES = [
  { icon: 'HeartPulse', label: 'Healthcare' },
  { icon: 'Accessibility', label: 'NDIS' },
  { icon: 'Building2', label: 'Real Estate' },
  { icon: 'Wrench', label: 'Tradies' },
  { icon: 'Briefcase', label: 'Professional Services' },
  { icon: 'GraduationCap', label: 'Education' },
  { icon: 'UtensilsCrossed', label: 'Hospitality' },
  { icon: 'ShoppingCart', label: 'eCommerce' },
];

const FAQS = [
  {
    q: 'What is a Digital Marketing Strategy?',
    a: 'A Digital Marketing Strategy is a customised plan that outlines how your business will use digital channels such as SEO, Google Ads, social media, content marketing, email marketing, and automation to achieve specific business goals. A well-planned Digital Marketing Strategy Australia helps businesses reach the right audience, improve brand visibility, generate qualified leads, and maximise return on investment. As an experienced Digital Marketing Consultant, we develop strategies tailored to your industry, target market, and growth objectives.',
  },
  {
    q: 'Why is strategy important before running ads?',
    a: 'Running paid advertising without a clear strategy can result in wasted budget and inconsistent results. A well-defined Online Marketing Strategy ensures your campaigns target the right audience with the right message at the right time. Our Marketing Strategy Consultant analyses your business goals, competitors, customer journey, and marketing channels before recommending the most effective approach, helping you achieve sustainable business growth rather than short-term wins.',
  },
  {
    q: 'How long does strategy development take?',
    a: 'The timeframe depends on your business size, objectives, and project complexity. In most cases, our Digital Strategy Services are completed within 2 to 4 weeks. During this time, we conduct research, competitor analysis, audience profiling, and a comprehensive Digital Marketing Audit before developing a tailored strategy and actionable implementation plan.',
  },
  {
    q: "What's included?",
    a: {
      intro: 'Our Marketing Consulting Services provide everything you need to build a successful marketing foundation, including:',
      items: [
        'Business discovery workshop',
        'Comprehensive Digital Marketing Audit',
        'Competitor and market analysis',
        'Customer and audience research',
        'SEO and keyword research',
        'Website performance review',
        'Marketing channel recommendations',
        'Budget planning',
        'KPI framework',
        'A customised Marketing Roadmap',
        'A 90-day action plan',
      ],
      outro: 'Every strategy is tailored to your business goals and designed to support long-term growth.',
    },
  },
  {
    q: 'Can you implement the strategy?',
    a: 'Absolutely. As a full-service Marketing Strategy Agency, we don\'t just develop strategies—we also execute them. Our team can implement SEO, Google Ads, social media marketing, content marketing, website optimisation, marketing automation, and ongoing campaign management to ensure your strategy delivers measurable business results.',
  },
  {
    q: 'Do you work with small businesses?',
    a: 'Yes. We work with startups, small businesses, growing companies, and established enterprises across Australia. Whether you\'re launching a new business or looking to scale an existing one, our Marketing Planning Services are tailored to your goals, budget, and growth stage. Every client receives a personalised Business Growth Strategy designed to maximise opportunities and deliver measurable outcomes.',
  },
  {
    q: 'How much does strategy consulting cost?',
    a: 'The cost of strategy consulting varies depending on your business size, objectives, and the scope of work required. After an initial consultation, our Digital Marketing Consultant will recommend a tailored solution based on your goals. We provide transparent pricing with no hidden fees and focus on delivering strategies that generate long-term value and return on investment.',
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes. Strategy isn\'t a one-time activity—it evolves as your business grows and the market changes. Our ongoing Marketing Consulting Services include performance reviews, strategic planning sessions, campaign optimisation, reporting, and continuous improvements to keep your Online Marketing Strategy aligned with your business objectives.',
  },
  {
    q: 'Will I receive a written strategy document?',
    a: 'Yes. Every client receives a comprehensive strategy document that includes market research, competitor analysis, customer insights, recommended marketing channels, KPIs, implementation priorities, and a detailed Marketing Roadmap. This document serves as a practical guide for executing your marketing activities and measuring success over time.',
  },
  {
    q: 'Can you audit our existing marketing?',
    a: 'Yes. We offer a comprehensive Digital Marketing Audit that evaluates every aspect of your current marketing performance, including your website, SEO, paid advertising, social media, content, analytics, and conversion tracking. Our audit identifies strengths, uncovers growth opportunities, and provides actionable recommendations to strengthen your Business Growth Strategy and improve overall marketing performance.',
  },
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
            <div className={`px-6 pb-6 leading-relaxed text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {typeof faq.a === 'string' ? (
                <p>{faq.a}</p>
              ) : (
                <>
                  {faq.a.intro && <p className="mb-3">{faq.a.intro}</p>}
                  {faq.a.items && (
                    <ul className="space-y-1.5 mb-3">
                      {faq.a.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {faq.a.outro && <p>{faq.a.outro}</p>}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function StrategyConsulting() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [openFaq, setOpenFaq] = useState(0);

  const dark = (a, b) => (isDark ? a : b);

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Digital Marketing Strategy & Consulting | Marketive</title>
        <meta name="description" content="Data-driven digital marketing strategy and consulting for Australian businesses. Audits, competitor analysis, marketing roadmaps and a 90-day action plan that drives measurable growth." />
        <link rel="canonical" href="https://marketive.com.au/services/strategy-consulting" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${dark('bg-surface-dark', 'bg-[#f8f9fc]')}`} />
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full bg-primary-500/8 blur-[140px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
              <Link to="/services" className="hover:text-primary-500 transition-colors">Services</Link>
              <span>/</span>
              <span className={dark('text-gray-300', 'text-gray-700')}>Strategy &amp; Consulting</span>
            </motion.div>
            <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-5">
              Strategy &amp; Consulting
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-8 ${dark('text-white', 'text-gray-900')}`}
            >
              Digital Marketing Strategy That Drives Business Growth
            </motion.h1>
            <motion.p variants={fadeInUp} className={`text-lg lg:text-xl font-medium leading-relaxed mb-5 ${dark('text-gray-200', 'text-gray-800')}`}>
              Every successful marketing campaign starts with a strategy - not guesswork.
            </motion.p>
            <motion.p variants={fadeInUp} className={`text-base lg:text-lg leading-relaxed mb-10 max-w-3xl mx-auto ${dark('text-gray-400', 'text-gray-600')}`}>
              As an experienced Digital Marketing Consultant, we help Australian businesses develop data-driven marketing
              plans that increase brand visibility, generate qualified leads, and maximise return on investment.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get in Touch <ArrowRight size={16} />
              </Link>
              <Link to="/case-studies" className={dark('btn-secondary-dark', 'btn-secondary-light')}>
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY STRATEGY MATTERS ── */}
      <SectionWrapper heading="Why Strategy Matters" className={dark('bg-surface-darker/60', 'bg-[#f5f5f7]')}>
        <div className="space-y-16 lg:space-y-24">
          {WHY_MATTERS.map((block, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
              >
                <motion.div
                  variants={imageLeft ? slideInLeft : slideInRight}
                  className={imageLeft ? 'lg:order-1' : 'lg:order-2'}
                >
                  <div className="rounded-2xl overflow-hidden border-2 border-black shadow-xl">
                    <img
                      src={block.img}
                      alt="Marketing strategy planning"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-72 lg:h-80 object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div
                  variants={imageLeft ? slideInRight : slideInLeft}
                  className={imageLeft ? 'lg:order-2' : 'lg:order-1'}
                >
                  <p className={`text-xl lg:text-2xl font-medium leading-relaxed ${dark('text-gray-200', 'text-gray-800')}`}>
                    {block.text}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* ── WHAT WE HELP YOU WITH ── */}
      <SectionWrapper tagline="What We Help You With" heading="Strategy, End to End" className={dark('bg-surface-dark', 'bg-white')}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {HELP_CARDS.map((card) => {
            const Icon = LucideIcons[card.icon] || LucideIcons.Sparkles;
            return (
              <motion.div key={card.title} variants={fadeInUp} className={`p-8 rounded-2xl ${dark('card-dark', 'card-light')}`}>
                <div className="w-12 h-12 rounded-xl bg-primary-500 border-2 border-black flex items-center justify-center mb-5">
                  <Icon size={22} className="text-black" />
                </div>
                <h3 className={`text-xl font-bold font-display mb-3 ${dark('text-white', 'text-gray-900')}`}>{card.title}</h3>
                <p className={`text-sm leading-relaxed ${dark('text-gray-400', 'text-gray-600')}`}>{card.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionWrapper>

      {/* ── WHAT'S INCLUDED ── */}
      <SectionWrapper tagline="What's Included" heading="Everything in Your Strategy" className={dark('bg-surface-darker/60', 'bg-[#f5f5f7]')}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {INCLUDED.map((item) => (
            <motion.div
              key={item}
              variants={fadeInUp}
              className={`flex items-center gap-3 p-4 rounded-xl ${dark('card-dark', 'card-light')}`}
            >
              <div className="w-7 h-7 rounded-lg bg-primary-500 border-2 border-black flex items-center justify-center shrink-0">
                <Check size={15} className="text-black" />
              </div>
              <span className={`text-sm font-medium ${dark('text-gray-200', 'text-gray-800')}`}>{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* ── OUR STRATEGY PROCESS ── */}
      <SectionWrapper tagline="Our Strategy Process" heading="How We Build Your Strategy" className={dark('bg-surface-dark', 'bg-white')}>
        <div className="max-w-3xl mx-auto">
          {PROCESS.map((s, i) => (
            <div key={s.step}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className={`flex gap-5 p-6 lg:p-7 rounded-2xl ${dark('card-dark', 'card-light')}`}
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary-500 border-2 border-black flex items-center justify-center font-display font-bold text-xl text-black">
                  {s.step}
                </div>
                <div>
                  <h3 className={`text-lg lg:text-xl font-bold font-display mb-2 ${dark('text-white', 'text-gray-900')}`}>{s.title}</h3>
                  <p className={`text-sm lg:text-base leading-relaxed ${dark('text-gray-400', 'text-gray-600')}`}>{s.text}</p>
                </div>
              </motion.div>
              {i < PROCESS.length - 1 && (
                <div className="flex justify-center py-3" aria-hidden="true">
                  <ChevronDown size={26} className="text-primary-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── WHY CHOOSE US ── */}
      <SectionWrapper tagline="Why Choose Us" heading="Strategy That Delivers Results" description={WHY_CHOOSE_INTRO} className={dark('bg-surface-darker/60', 'bg-[#f5f5f7]')}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {WHY_CHOOSE.map((item) => {
            const Icon = LucideIcons[item.icon] || LucideIcons.Check;
            return (
              <motion.div
                key={item.label}
                variants={fadeInUp}
                className={`flex items-center gap-4 p-6 rounded-2xl ${dark('card-dark', 'card-light')}`}
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary-500 border-2 border-black flex items-center justify-center">
                  <Icon size={22} className="text-black" />
                </div>
                <span className={`font-bold font-display ${dark('text-white', 'text-gray-900')}`}>{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionWrapper>

      {/* ── INDUSTRIES WE SERVE ── */}
      <SectionWrapper tagline="Industries We Serve" heading="Built for Your Sector" className={dark('bg-surface-darker/60', 'bg-[#f5f5f7]')}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {INDUSTRIES.map((ind) => {
            const Icon = LucideIcons[ind.icon] || LucideIcons.Building2;
            return (
              <motion.div
                key={ind.label}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className={`flex flex-col items-center text-center gap-4 p-7 rounded-2xl ${dark('card-dark', 'card-light')}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-500 border-2 border-black flex items-center justify-center">
                  <Icon size={26} className="text-black" />
                </div>
                <span className={`font-bold font-display ${dark('text-white', 'text-gray-900')}`}>{ind.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionWrapper>

      {/* ── FAQ ── */}
      <SectionWrapper tagline="FAQs" heading="Frequently Asked Questions" className={dark('bg-surface-dark', 'bg-white')}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {FAQS.map((faq, i) => (
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

      {/* ── FINAL CTA ── */}
      <CTASection
        heading="Ready to Grow Your Business?"
        description="Let's build a digital marketing strategy that delivers measurable results."
        cta={{ label: 'Get in Touch', path: '/contact' }}
      />
    </motion.div>
  );
}
