import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, TrendingUp, Target, Lightbulb, CheckCircle } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import content from '../content/content';
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations';
import CTASection from '../components/CTASection';

const IMAGE_MAP = {
  'gradient-1': '/images/case-studies/gradient-1.jpg',
  'gradient-2': '/images/case-studies/gradient-2.jpg',
  'gradient-3': '/images/case-studies/gradient-3.jpg',
  'gradient-4': '/images/case-studies/gradient-4.jpg',
  'gradient-5': '/images/case-studies/gradient-5.jpg',
  'gradient-6': '/images/case-studies/gradient-6.jpg',
};

const CATEGORY_COLOR = {
  SEO: '#3b82f6',
  SEM: '#8b5cf6',
  Content: '#10b981',
  'Social Media': '#f59e0b',
  Automation: '#e85d04',
};

const SIDEBAR_IMAGES = {
  'gradient-1': '/images/case-studies/sidebar/gradient-1.jpg',
  'gradient-2': '/images/case-studies/sidebar/gradient-2.jpg',
  'gradient-3': '/images/case-studies/sidebar/gradient-3.jpg',
  'gradient-4': '/images/case-studies/sidebar/gradient-4.jpg',
  'gradient-5': '/images/case-studies/sidebar/gradient-5.jpg',
  'gradient-6': '/images/case-studies/sidebar/gradient-6.jpg',
};

export default function CaseStudyDetail() {
  const { id } = useParams();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  const study = content.caseStudies.items.find(s => s.id === id);

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-32">
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Case study not found</h1>
        <Link to="/case-studies" className="text-primary-500 hover:underline">← Back to Case Studies</Link>
      </div>
    );
  }

  const imgSrc = IMAGE_MAP[study.image] || IMAGE_MAP['gradient-1'];
  const sideImg = SIDEBAR_IMAGES[study.image] || SIDEBAR_IMAGES['gradient-1'];
  const badgeColor = CATEGORY_COLOR[study.category] || '#e85d04';
  const related = content.caseStudies.items.filter(s => s.id !== id && s.category === study.category).slice(0, 3);

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>{study.title} - Marketive Case Study</title>
        <meta name="description" content={study.problem} />
      </Helmet>

      {/* ── Hero Banner ── */}
      <div className="relative pt-20">
        <div className="h-[460px] md:h-[540px] overflow-hidden">
          <img src={imgSrc} alt={study.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 pb-14 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: badgeColor }}>
                {study.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-sm">
                {study.industry}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
              {study.title}
            </h1>
          </div>
        </div>
      </div>

      {/* ── Results Strip ── */}
      <div className={`${isDark ? 'bg-surface-card' : 'bg-[#1a1a3e]'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {study.results.map((r, i) => (
              <div key={i} className="py-8 px-6 text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary-500 mb-1">{r.value}</p>
                <p className="text-sm text-white/60">{r.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <section className={`py-16 lg:py-24 ${isDark ? 'bg-surface-dark' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <button
            onClick={() => navigate('/case-studies')}
            className={`inline-flex items-center gap-2 text-sm font-medium mb-12 transition-colors ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <ArrowLeft size={16} />
            Back to Case Studies
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* The Challenge */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-500/10">
                    <Target size={20} className="text-red-500" />
                  </div>
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>The Challenge</h2>
                </motion.div>
                <motion.p variants={fadeInUp} className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {study.problem}
                </motion.p>
              </motion.div>

              <div className={`border-t ${isDark ? 'border-white/10' : 'border-gray-100'}`} />

              {/* Our Approach */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-500/10">
                    <Lightbulb size={20} className="text-blue-500" />
                  </div>
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Approach</h2>
                </motion.div>
                <motion.p variants={fadeInUp} className={`text-base leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {study.solution}
                </motion.p>
                <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden">
                  <img src={sideImg} alt="Strategy in action" loading="lazy" decoding="async" className="w-full h-64 object-cover" />
                </motion.div>
              </motion.div>

              <div className={`border-t ${isDark ? 'border-white/10' : 'border-gray-100'}`} />

              {/* Results */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-green-500/10">
                    <TrendingUp size={20} className="text-green-500" />
                  </div>
                  <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>The Results</h2>
                </motion.div>
                <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                  {study.results.map((r, i) => (
                    <div
                      key={i}
                      className={`p-6 rounded-2xl text-center ${isDark ? 'bg-surface-card' : 'bg-gray-50'}`}
                    >
                      <p className="text-3xl font-bold text-primary-500 mb-1">{r.value}</p>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{r.metric}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project snapshot */}
              <div className={`rounded-2xl p-6 ${isDark ? 'bg-surface-card' : 'bg-gray-50'}`}>
                <h3 className={`font-bold text-lg mb-5 ${isDark ? 'text-white' : 'text-gray-900'}`}>Project Snapshot</h3>
                <dl className="space-y-4">
                  {[
                    { label: 'Industry', value: study.industry },
                    { label: 'Service', value: study.category },
                    { label: 'Results', value: `${study.results.length} key metrics improved` },
                  ].map(item => (
                    <div key={item.label}>
                      <dt className={`text-xs font-semibold uppercase tracking-widest mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{item.label}</dt>
                      <dd className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* What we delivered */}
              <div className={`rounded-2xl p-6 ${isDark ? 'bg-surface-card' : 'bg-gray-50'}`}>
                <h3 className={`font-bold text-lg mb-5 ${isDark ? 'text-white' : 'text-gray-900'}`}>What We Delivered</h3>
                <ul className="space-y-3">
                  {(content.services.items.find(s => s.id === study.category.toLowerCase().replace(' ', '-') || s.title.toLowerCase().includes(study.category.toLowerCase()))?.features || [
                    'Strategic planning & roadmap',
                    'Full campaign execution',
                    'Performance tracking & reporting',
                    'Continuous optimisation',
                    'Monthly strategy reviews',
                  ]).slice(0, 5).map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle size={16} className="text-primary-500 mt-0.5 shrink-0" />
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="rounded-2xl p-6 bg-[#1a1a3e] text-white">
                <h3 className="font-bold text-lg mb-3">Want similar results?</h3>
                <p className="text-sm text-white/70 mb-5">Let's talk about how we can grow your business with a tailored strategy.</p>
                <Link
                  to="/contact"
                  className="block text-center px-5 py-3 rounded-full bg-primary-500 text-black text-sm font-semibold hover:bg-primary-600 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related case studies ── */}
      {related.length > 0 && (
        <section className={`py-16 ${isDark ? 'bg-surface-darker/50' : 'bg-[#f5f5f7]'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Related Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(r => (
                <Link
                  key={r.id}
                  to={`/case-studies/${r.id}`}
                  className={`group rounded-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${
                    isDark ? 'bg-surface-card' : 'bg-white shadow-sm'
                  }`}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={IMAGE_MAP[r.image] || IMAGE_MAP['gradient-1']}
                      alt={r.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white" style={{ background: CATEGORY_COLOR[r.category] || '#e85d04' }}>
                      {r.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{r.industry}</p>
                    <h3 className={`font-bold text-sm leading-snug group-hover:text-primary-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading="Ready to Write Your Success Story?"
        cta={{ label: "Start Your Project", path: "/contact" }}
      />
    </motion.div>
  );
}
