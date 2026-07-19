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
import content from '../content/content';

// ============================================================
// Generic service detail page. All copy lives in content.js
// under `servicePages[slug]`. This file only renders it — the
// same structure as the /services/strategy-consulting reference.
// ============================================================

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

export default function ServicePage({ slug }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [openFaq, setOpenFaq] = useState(0);

  const dark = (a, b) => (isDark ? a : b);
  const data = content.servicePages?.[slug];

  if (!data) return null;

  // Alternate section backgrounds across whatever sections are present.
  let sectionIndex = 0;
  const nextBg = () => (sectionIndex++ % 2 === 0
    ? dark('bg-surface-darker/60', 'bg-[#f5f5f7]')
    : dark('bg-surface-dark', 'bg-white'));

  const { seo, hero, whyMatters, help, included, process, whyChoose, platforms, industries, faqs, finalCta } = data;

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
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
              <span className={dark('text-gray-300', 'text-gray-700')}>{hero.breadcrumb}</span>
            </motion.div>
            {hero.tagline && (
              <motion.span variants={fadeInUp} className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-400 mb-5">
                {hero.tagline}
              </motion.span>
            )}
            <motion.h1
              variants={fadeInUp}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-8 ${dark('text-white', 'text-gray-900')}`}
            >
              {hero.heading}
            </motion.h1>
            {hero.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className={
                  hero.paragraphs.length > 1 && i === 0
                    ? `text-lg lg:text-xl font-medium leading-relaxed mb-5 ${dark('text-gray-200', 'text-gray-800')}`
                    : `text-base lg:text-lg leading-relaxed mb-10 max-w-3xl mx-auto ${dark('text-gray-400', 'text-gray-600')}`
                }
              >
                {para}
              </motion.p>
            ))}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Link to={hero.primaryCta.path} className="btn-primary">
                {hero.primaryCta.label} <ArrowRight size={16} />
              </Link>
              {hero.secondaryCta && (
                <Link to={hero.secondaryCta.path} className={dark('btn-secondary-dark', 'btn-secondary-light')}>
                  {hero.secondaryCta.label}
                </Link>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      {whyMatters && (
        <SectionWrapper heading={whyMatters.heading} description={whyMatters.description} className={nextBg()}>
          <div className="space-y-16 lg:space-y-24">
            {whyMatters.blocks.map((block, i) => {
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
                  <motion.div variants={imageLeft ? slideInLeft : slideInRight} className={imageLeft ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="rounded-2xl overflow-hidden border-2 border-black shadow-xl">
                      <img src={block.img} alt={whyMatters.heading} loading="lazy" decoding="async" className="w-full h-72 lg:h-80 object-cover" />
                    </div>
                  </motion.div>
                  <motion.div variants={imageLeft ? slideInRight : slideInLeft} className={imageLeft ? 'lg:order-2' : 'lg:order-1'}>
                    <p className={`text-xl lg:text-2xl font-medium leading-relaxed ${dark('text-gray-200', 'text-gray-800')}`}>{block.text}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          {whyMatters.stats && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto mt-16"
            >
              {whyMatters.stats.map((item) => (
                <motion.div key={item} variants={fadeInUp} className={`flex items-start gap-3 p-4 rounded-xl ${dark('card-dark', 'card-light')}`}>
                  <div className="w-7 h-7 rounded-lg bg-primary-500 border-2 border-black flex items-center justify-center shrink-0">
                    <Check size={15} className="text-black" />
                  </div>
                  <span className={`text-sm font-medium ${dark('text-gray-200', 'text-gray-800')}`}>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </SectionWrapper>
      )}

      {/* ── WHAT WE HELP YOU WITH ── */}
      {help && (
        <SectionWrapper tagline={help.tagline} heading={help.heading} description={help.description} className={nextBg()}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {help.cards.map((card) => {
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
      )}

      {/* ── WHAT'S INCLUDED ── */}
      {included && (
        <SectionWrapper tagline={included.tagline} heading={included.heading} description={included.description} className={nextBg()}>
          {typeof included.items[0] === 'string' ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
            >
              {included.items.map((item) => (
                <motion.div key={item} variants={fadeInUp} className={`flex items-center gap-3 p-4 rounded-xl ${dark('card-dark', 'card-light')}`}>
                  <div className="w-7 h-7 rounded-lg bg-primary-500 border-2 border-black flex items-center justify-center shrink-0">
                    <Check size={15} className="text-black" />
                  </div>
                  <span className={`text-sm font-medium ${dark('text-gray-200', 'text-gray-800')}`}>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto"
            >
              {included.items.map((item) => (
                <motion.div key={item.title} variants={fadeInUp} className={`flex items-start gap-3 p-5 rounded-xl ${dark('card-dark', 'card-light')}`}>
                  <div className="w-7 h-7 rounded-lg bg-primary-500 border-2 border-black flex items-center justify-center shrink-0">
                    <Check size={15} className="text-black" />
                  </div>
                  <div>
                    <span className={`block text-sm font-bold mb-1 ${dark('text-white', 'text-gray-900')}`}>{item.title}</span>
                    <span className={`text-sm leading-relaxed ${dark('text-gray-400', 'text-gray-600')}`}>{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </SectionWrapper>
      )}

      {/* ── PROCESS ── */}
      {process && (
        <SectionWrapper tagline={process.tagline} heading={process.heading} description={process.description} className={nextBg()}>
          <div className="max-w-3xl mx-auto">
            {process.steps.map((s, i) => (
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
                {i < process.steps.length - 1 && (
                  <div className="flex justify-center py-3" aria-hidden="true">
                    <ChevronDown size={26} className="text-primary-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* ── WHY CHOOSE US ── */}
      {whyChoose && (
        <SectionWrapper tagline={whyChoose.tagline} heading={whyChoose.heading} description={whyChoose.description} className={nextBg()}>
          {whyChoose.items[0] && whyChoose.items[0].text ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {whyChoose.items.map((item) => {
                const Icon = LucideIcons[item.icon] || LucideIcons.Check;
                return (
                  <motion.div key={item.title} variants={fadeInUp} className={`p-8 rounded-2xl ${dark('card-dark', 'card-light')}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary-500 border-2 border-black flex items-center justify-center mb-5">
                      <Icon size={22} className="text-black" />
                    </div>
                    <h3 className={`text-xl font-bold font-display mb-3 ${dark('text-white', 'text-gray-900')}`}>{item.title}</h3>
                    <p className={`text-sm leading-relaxed ${dark('text-gray-400', 'text-gray-600')}`}>{item.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {whyChoose.items.map((item) => {
                const Icon = LucideIcons[item.icon] || LucideIcons.Check;
                return (
                  <motion.div key={item.label} variants={fadeInUp} className={`flex items-center gap-4 p-6 rounded-2xl ${dark('card-dark', 'card-light')}`}>
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-primary-500 border-2 border-black flex items-center justify-center">
                      <Icon size={22} className="text-black" />
                    </div>
                    <span className={`font-bold font-display ${dark('text-white', 'text-gray-900')}`}>{item.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </SectionWrapper>
      )}

      {/* ── PLATFORMS WE WORK WITH ── */}
      {platforms && (
        <SectionWrapper tagline={platforms.tagline} heading={platforms.heading} description={platforms.description} className={nextBg()}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {platforms.items.map((platform) => (
              <motion.div key={platform} variants={fadeInUp} className={`px-6 py-3 rounded-xl font-bold font-display ${dark('card-dark text-white', 'card-light text-gray-900')}`}>
                {platform}
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>
      )}

      {/* ── INDUSTRIES WE SERVE ── */}
      {industries && (
        <SectionWrapper tagline={industries.tagline} heading={industries.heading} description={industries.description} className={nextBg()}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {industries.items.map((ind) => {
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
                  {ind.text && <span className={`text-xs leading-relaxed ${dark('text-gray-400', 'text-gray-600')}`}>{ind.text}</span>}
                </motion.div>
              );
            })}
          </motion.div>
        </SectionWrapper>
      )}

      {/* ── FAQ ── */}
      {faqs && (
        <SectionWrapper tagline={faqs.tagline} heading={faqs.heading} description={faqs.description} className={nextBg()}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {faqs.items.map((faq, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <FaqItem faq={faq} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} isDark={isDark} />
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>
      )}

      {/* ── FINAL CTA ── */}
      {finalCta && (
        <CTASection
          heading={finalCta.heading}
          description={finalCta.description}
          cta={{ label: 'Get in Touch', path: '/contact' }}
        />
      )}
    </motion.div>
  );
}
