import { useTheme } from '../hooks/useTheme';

const IMAGE_MAP = {
  'gradient-1': 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80',
  'gradient-2': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
  'gradient-3': 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80',
  'gradient-4': 'https://images.unsplash.com/photo-1611162616305-c69b3037dff8?w=600&q=80',
  'gradient-5': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  'gradient-6': 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
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
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Badge + Date */}
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-[#e85d04] shrink-0">
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
