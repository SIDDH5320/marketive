import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '../hooks/useTheme';
import content from '../content/content';
import { fadeInUp, staggerContainer, pageTransition } from '../utils/animations';
import BlogCard from '../components/BlogCard';
import CTASection from '../components/CTASection';

export default function Blog() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { blog } = content;
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const filtered = useMemo(() => {
    let posts = activeCategory === 'All' ? blog.posts : blog.posts.filter(p => p.category === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    return posts;
  }, [activeCategory, searchQuery, blog.posts]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Digital Marketing Blog - Insights, Tips & Strategy | Marketive</title>
        <meta name="description" content="Expert insights on SEO, SEM, content strategy, and digital marketing. Stay ahead with Marketive's latest articles and guides." />
        <link rel="canonical" href="https://marketive.com.au/blog" />
      </Helmet>

      {/* ── Hero ── */}
      <section className={`pt-36 pb-16 text-center ${isDark ? 'bg-surface-dark' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span
              variants={fadeInUp}
              className={`text-xs font-bold uppercase tracking-[0.25em] mb-4 block ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
            >
              Blog
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5 ${isDark ? 'text-white' : 'text-[#1a1a3e]'}`}
            >
              Articles &amp; Resources
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className={`text-lg mb-10 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
            >
              {blog.hero.description}
            </motion.p>

            {/* Search bar */}
            <motion.form
              variants={fadeInUp}
              onSubmit={handleSearch}
              className={`flex items-center rounded-full border-2 overflow-hidden max-w-xl mx-auto ${
                isDark ? 'bg-surface-card border-white/10' : 'bg-white border-gray-200'
              }`}
              style={{ boxShadow: isDark ? 'none' : '0 2px 12px rgba(0,0,0,0.06)' }}
            >
              <input
                type="text"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="Search for articles..."
                className={`flex-1 px-6 py-4 text-sm bg-transparent outline-none ${
                  isDark ? 'text-white placeholder:text-gray-500' : 'text-gray-700 placeholder:text-gray-400'
                }`}
              />
              <button
                type="submit"
                className="m-1.5 px-6 py-3 rounded-full bg-primary-500 text-black text-sm font-semibold hover:bg-primary-600 transition-colors shrink-0"
              >
                Search
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* ── Posts ── */}
      <section className={`py-12 lg:py-16 ${isDark ? 'bg-surface-dark' : 'bg-[#f5f5f7]'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {blog.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setSearchQuery(''); setSearchInput(''); }}
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

          {/* No results */}
          {filtered.length === 0 && (
            <div className={`text-center py-20 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              No articles found. Try a different search or category.
            </div>
          )}

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <BlogCard post={post} onClick={() => navigate(`/blog/${post.id}`)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>


      <CTASection
        heading="Stay Ahead of the Curve"
        description="Subscribe to our newsletter for weekly insights, tips, and industry analysis."
        cta={{ label: "Contact Us", path: "/contact" }}
      />
    </motion.div>
  );
}
