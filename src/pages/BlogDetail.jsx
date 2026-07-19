import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import content from '../content/content';
import { pageTransition } from '../utils/animations';
import CTASection from '../components/CTASection';

const IMAGE_MAP = {
  'gradient-1': '/images/blog/gradient-1.jpg',
  'gradient-2': '/images/blog/gradient-2.jpg',
  'gradient-3': '/images/blog/gradient-3.jpg',
  'gradient-4': '/images/blog/gradient-4.jpg',
  'gradient-5': '/images/blog/gradient-5.jpg',
  'gradient-6': '/images/blog/gradient-6.jpg',
};

function renderContent(text, isDark) {
  return text.split('\n').map((line, i) => {
    if (line.startsWith('## '))
      return (
        <h2 key={i} className={`text-2xl font-bold mt-10 mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {line.replace('## ', '')}
        </h2>
      );
    if (line.startsWith('- '))
      return (
        <li key={i} className={`ml-6 list-disc mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {line.replace('- ', '')}
        </li>
      );
    if (!line.trim()) return <div key={i} className="h-3" />;
    return (
      <p key={i} className={`leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        {line}
      </p>
    );
  });
}

export default function BlogDetail() {
  const { id } = useParams();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  const post = content.blog.posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-32">
        <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Article not found</h1>
        <Link to="/blog" className="text-primary-500 hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  const imgSrc = IMAGE_MAP[post.image] || IMAGE_MAP['gradient-1'];
  const related = content.blog.posts.filter(p => p.id !== id && p.category === post.category).slice(0, 3);

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>{post.title} - Marketive Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Hero image */}
      <div className="relative pt-20">
        <div className="h-[420px] md:h-[520px] overflow-hidden">
          <img src={imgSrc} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {/* Overlay text */}
        <div className="absolute bottom-0 left-0 right-0 pb-12 px-6">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-black bg-primary-500 mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-white/70">
              <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <section className={`py-16 ${isDark ? 'bg-surface-dark' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-6">
          <button
            onClick={() => navigate('/blog')}
            className={`inline-flex items-center gap-2 text-sm font-medium mb-10 transition-colors ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <ArrowLeft size={16} />
            Back to articles
          </button>

          {/* Lead excerpt */}
          <p className={`text-xl leading-relaxed mb-8 font-medium border-l-4 border-primary-500 pl-5 ${
            isDark ? 'text-gray-200' : 'text-gray-700'
          }`}>
            {post.excerpt}
          </p>

          <div className="prose-content">
            {renderContent(post.content, isDark)}
          </div>

          {/* Author card */}
          <div className={`mt-14 p-6 rounded-2xl flex items-center gap-5 ${
            isDark ? 'bg-surface-card' : 'bg-gray-50'
          }`}>
            <div className="w-14 h-14 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
              <span className="text-black font-bold text-xl">{post.author.charAt(0)}</span>
            </div>
            <div>
              <p className={`font-bold text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>{post.author}</p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Digital Marketing Strategist at Marketive</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className={`py-16 ${isDark ? 'bg-surface-darker/50' : 'bg-[#f5f5f7]'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(r => (
                <Link
                  key={r.id}
                  to={`/blog/${r.id}`}
                  className={`group rounded-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${
                    isDark ? 'bg-surface-card' : 'bg-white shadow-sm'
                  }`}
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={IMAGE_MAP[r.image] || IMAGE_MAP['gradient-1']}
                      alt={r.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-black bg-primary-500">{r.category}</span>
                      <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{r.date}</span>
                    </div>
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
        heading="Ready to Grow Your Business?"
        cta={{ label: "Get in Touch", path: "/contact" }}
      />
    </motion.div>
  );
}
