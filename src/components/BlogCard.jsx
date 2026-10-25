import { useTheme } from '../hooks/useTheme';

const IMAGE_MAP = {
  'gradient-1': '/images/blog/gradient-1.jpg',
  'gradient-2': '/images/blog/gradient-2.jpg',
  'gradient-3': '/images/blog/gradient-3.jpg',
  'gradient-4': '/images/blog/gradient-4.jpg',
  'gradient-5': '/images/blog/gradient-5.jpg',
  'gradient-6': '/images/blog/gradient-6.jpg',
  'ethical-ai': '/images/blog/ethical-ai.png',
  'dental-marketing': '/images/blog/dental-marketing.png',
  'bing-webmaster': '/images/blog/bing-webmaster.png',
};

export default function BlogCard({ post, onClick }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const imgSrc = IMAGE_MAP[post.image] || post.image || IMAGE_MAP['gradient-1'];

  return (
    <article
      onClick={onClick}
      className={`group cursor-pointer flex flex-col rounded-3xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 ${
        isDark ? 'bg-surface-card shadow-black/20' : 'bg-transparent'
      }`}
    >
      {/* Image */}
      <div className="h-56 overflow-hidden rounded-2xl shrink-0 mb-4">
        <img
          src={imgSrc}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            if (e.currentTarget.src !== IMAGE_MAP['gradient-1']) {
              e.currentTarget.src = IMAGE_MAP['gradient-1'];
            }
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-1 py-1">
        {/* Badge + Date */}
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold text-white bg-[#d9661e] shrink-0">
            {post.category}
          </span>
          <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-lg font-bold leading-snug transition-colors group-hover:text-primary-500 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {post.title}
        </h3>

        {/* Excerpt if present */}
        {post.excerpt && (
          <p className={`text-sm leading-relaxed mt-2 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {post.excerpt}
          </p>
        )}
      </div>
    </article>
  );
}

