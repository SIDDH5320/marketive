import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import content from '../content/content';
import { fadeInUp, staggerContainer } from '../utils/animations';

const socialLabels = {
  LinkedIn: 'Li',
  Instagram: 'Ig',
  Facebook: 'Fb',
  X: '𝕏',
};

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { footer, siteName } = content;

  return (
    <footer className={`relative overflow-hidden border-t-4 ${isDark ? 'bg-black border-white' : 'bg-white border-black'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-primary-500 flex items-center justify-center border-2 border-black transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-[-4px_4px_0_0_#fff]">
                <span className="text-black font-bold text-xl font-display">M</span>
              </div>
              <span className={`text-2xl font-bold font-display uppercase tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>
                {siteName}
              </span>
            </Link>
            <p className={`text-sm leading-relaxed mb-8 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {footer.description}
            </p>
            {/* Social icons temporarily hidden — uncomment to restore
            <div className="flex gap-4">
              {footer.social.map((s) => {
                const label = socialLabels[s.platform] || '↗';
                return (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 flex items-center justify-center font-bold font-display text-lg transition-all border-2 ${
                      isDark
                        ? 'border-white text-white hover:bg-primary-500 hover:text-black hover:border-primary-500 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-4px_4px_0_0_#fff]'
                        : 'border-black text-black hover:bg-primary-500 hover:text-black hover:-translate-y-1 hover:translate-x-1 hover:shadow-[-4px_4px_0_0_#000]'
                    }`}
                    aria-label={s.platform}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
            */}
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className={`text-base font-bold font-display uppercase tracking-widest mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {footer.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                      isDark ? 'text-gray-400 hover:text-primary-500' : 'text-gray-600 hover:text-primary-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h4 className={`text-base font-bold font-display uppercase tracking-widest mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              Services
            </h4>
            <ul className="space-y-4">
              {footer.serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                      isDark ? 'text-gray-400 hover:text-primary-500' : 'text-gray-600 hover:text-primary-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h4 className={`text-base font-bold font-display uppercase tracking-widest mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              Contact
            </h4>
            <div className={`space-y-4 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <p className="hover:text-primary-500 transition-colors cursor-pointer">{content.contact.info.email}</p>
              <p className="hover:text-primary-500 transition-colors cursor-pointer">{content.contact.info.phone}</p>
              <p>{content.contact.info.address}</p>
              <p className="text-xs uppercase tracking-widest mt-6 text-gray-500">{content.contact.info.hours}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className={`mt-20 pt-8 border-t-2 flex flex-col items-center gap-6 ${
          isDark ? 'border-white/20' : 'border-black/20'
        }`}>
          {/* Top row: copyright + bottom links */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm font-bold uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              {footer.copyright}
            </p>
            <div className="flex gap-8">
              {footer.bottomLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Personal credit line */}
          <div className={`flex items-center gap-1.5 text-xs tracking-wide ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            <span>Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-red-500 text-sm select-none"
              aria-label="love"
            >
              ❤️
            </motion.span>
            <span>by</span>
            <a
              href="https://siddh5320.github.io/resume-porfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold transition-colors underline underline-offset-2 decoration-dotted ${
                isDark
                  ? 'text-gray-400 hover:text-primary-500 decoration-gray-600 hover:decoration-primary-500'
                  : 'text-gray-500 hover:text-primary-600 decoration-gray-300 hover:decoration-primary-600'
              }`}
            >
              Siddh Shah
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
