import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../hooks/useTheme';
import { fadeInUp, staggerContainer, pageTransition } from '../utils/animations';
import content from '../content/content';

// ============================================================
// Privacy Policy page. All copy lives in content.js under `privacy`.
// ============================================================

function Block({ block, dark }) {
  if (block.type === 'p') {
    return <p className={`leading-relaxed ${dark('text-gray-300', 'text-gray-700')}`}>{block.text}</p>;
  }
  if (block.type === 'list') {
    return (
      <ul className="space-y-2">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
            <span className={`leading-relaxed ${dark('text-gray-300', 'text-gray-700')}`}>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === 'defs') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {block.items.map((item) => (
          <div key={item.term} className={`p-5 rounded-xl ${dark('card-dark', 'card-light')}`}>
            <span className={`block font-bold font-display mb-1 ${dark('text-white', 'text-gray-900')}`}>{item.term}</span>
            <span className={`text-sm leading-relaxed ${dark('text-gray-400', 'text-gray-600')}`}>{item.desc}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export default function Privacy() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const dark = (a, b) => (isDark ? a : b);
  const { privacy } = content;

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>{privacy.seo.title}</title>
        <meta name="description" content={privacy.seo.description} />
        <link rel="canonical" href={privacy.seo.canonical} />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${dark('bg-surface-dark', 'bg-[#f8f9fc]')}`} />
          <div className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full bg-primary-500/8 blur-[140px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.h1
              variants={fadeInUp}
              className={`text-4xl md:text-5xl font-bold font-display leading-tight mb-6 ${dark('text-white', 'text-gray-900')}`}
            >
              {privacy.heading}
            </motion.h1>
            <motion.p variants={fadeInUp} className={`text-base lg:text-lg leading-relaxed ${dark('text-gray-400', 'text-gray-600')}`}>
              {privacy.intro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTIONS ── */}
      <section className={`pb-24 ${dark('bg-surface-dark', 'bg-white')}`}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">
          {privacy.sections.map((section) => (
            <motion.div
              key={section.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <h2 className={`text-xl lg:text-2xl font-bold font-display mb-4 ${dark('text-white', 'text-gray-900')}`}>{section.title}</h2>
              <div className="space-y-4">
                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} dark={dark} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
