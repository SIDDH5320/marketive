import { useTheme } from '../hooks/useTheme';
import { ArrowRight } from 'lucide-react';

const IMAGE_MAP = {
  'gradient-1': '/images/case-studies/gradient-1.jpg', // SEO/analytics dashboard
  'gradient-2': '/images/case-studies/gradient-2.jpg', // Google Ads / SEM
  'gradient-3': '/images/case-studies/gradient-3.jpg', // Content / writing
  'gradient-4': '/images/case-studies/gradient-4.jpg', // Social media / healthcare
  'gradient-5': '/images/case-studies/gradient-5.jpg', // Automation / email
  'gradient-6': '/images/case-studies/gradient-6.jpg', // Cloud / tech
};

const CATEGORY_COLOR = {
  SEO: '#3b82f6',
  SEM: '#8b5cf6',
  Content: '#10b981',
  'Social Media': '#f59e0b',
  Automation: '#e85d04',
};

export default function CaseStudyCard({ study, onClick }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const imgSrc = IMAGE_MAP[study.image] || IMAGE_MAP['gradient-1'];
  const badgeColor = CATEGORY_COLOR[study.category] || '#e85d04';
  const topResult = study.results?.[0];

  return (
    <article
      onClick={onClick}
      className={`group cursor-pointer flex flex-col rounded-2xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isDark ? 'bg-surface-card shadow-black/20' : 'bg-white shadow-sm'
      }`}
    >
      {/* Image with result overlay */}
      <div className="relative h-52 overflow-hidden shrink-0">
        <img
          src={imgSrc}
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {topResult && (
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{ background: badgeColor }}
            >
              {study.category}
            </span>
            <div className="text-right">
              <p className="text-2xl font-bold text-white leading-none">{topResult.value}</p>
              <p className="text-xs text-white/70">{topResult.metric}</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          {study.industry}
        </p>
        <h3 className={`text-base font-bold leading-snug mb-3 transition-colors group-hover:text-primary-500 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {study.title}
        </h3>
        <p className={`text-sm leading-relaxed line-clamp-3 mb-5 flex-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {study.problem}
        </p>

        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 group-hover:underline">
          View case study <ArrowRight size={14} />
        </span>
      </div>
    </article>
  );
}
