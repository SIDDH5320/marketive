import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { fadeInUp } from '../utils/animations';

export default function ServiceCard({ service, index }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const Icon = service.icon ? LucideIcons[service.icon] : null;

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className={`group relative p-8 flex flex-col h-full ${isDark ? 'card-dark' : 'card-light'}`}
    >
      <div className="w-14 h-14 bg-primary-500 border-2 border-black flex items-center justify-center mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[-4px_4px_0_0_#fff]">
        {Icon
          ? <Icon size={24} className="text-black" aria-hidden="true" />
          : <span className="text-black font-display font-bold text-xl">{index + 1}</span>
        }
      </div>

      <h3 className={`text-2xl font-bold font-display uppercase tracking-wider mb-4 ${isDark ? 'text-white' : 'text-black'
        }`}>
        {service.title}
      </h3>

      <p className={`text-base leading-relaxed mb-8 flex-grow font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
        {service.description}
      </p>

      <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary-500 group-hover:text-primary-400 transition-colors">
        <span className="relative">
          Explore Service
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full" />
        </span>
        <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </motion.div>
  );
}
