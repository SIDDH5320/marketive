import { useTheme } from '../hooks/useTheme';

function SkeletonBlock({ className = '' }) {
  const { theme } = useTheme();
  const base = theme === 'dark'
    ? 'bg-white/5 animate-pulse'
    : 'bg-black/8 animate-pulse';
  return <div className={`${base} ${className}`} />;
}

export function CardSkeleton() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <div className={`p-8 border-2 flex flex-col h-full ${isDark ? 'border-surface-border bg-surface-card' : 'border-black bg-white'}`}>
      <SkeletonBlock className="w-14 h-14 mb-8" />
      <SkeletonBlock className="h-6 w-3/4 mb-3" />
      <SkeletonBlock className="h-4 w-full mb-2" />
      <SkeletonBlock className="h-4 w-5/6 mb-2" />
      <SkeletonBlock className="h-4 w-4/6 mb-8" />
      <SkeletonBlock className="h-4 w-1/3 mt-auto" />
    </div>
  );
}

export function GridSkeleton({ count = 3 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export default SkeletonBlock;
