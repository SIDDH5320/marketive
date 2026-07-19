import { useTheme } from '../hooks/useTheme';

const IMAGE_MAP = {
  'gradient-1': '/images/blog/gradient-1.jpg',
  'gradient-2': '/images/blog/gradient-2.jpg',
  'gradient-3': '/images/blog/gradient-3.jpg',
  'gradient-4': '/images/blog/gradient-4.jpg',
  'gradient-5': '/images/blog/gradient-5.jpg',
  'gradient-6': '/images/blog/gradient-6.jpg',
};

export default function BlogCard({ post, onClick }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const imgSrc = IMAGE_MAP[post.image] || IMAGE_MAP['gradient-1'];

  return (
    <article
      onClick={onClick}
      className={`group cursor-pointer flex flex-col rounded-2xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isDark ? 'bg-surface-card shadow-black/20' : 'bg-white shadow-sm'
      }`}
    >
      {/* Image */}
      <div className="h-52 overflow-hidden shrink-0">
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
      <div className="flex flex-col flex-1 p-6">
        {/* Badge + Date */}
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold text-black bg-primary-500 shrink-0">
            {post.category}
          </span>
          <span className={`text-sm truncate ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-base font-bold leading-snug mb-3 transition-colors group-hover:text-primary-500 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className={`text-sm leading-relaxed line-clamp-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {post.excerpt}
        </p>
      </div>
    </article>
  );
}
