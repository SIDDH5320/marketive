import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import content from '../content/content';

export default function Navbar() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const { siteName, nav } = content;
  const navLinks = nav.links;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const isDark = theme === 'dark';

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled
            ? isDark
              ? 'bg-black border-b-2 border-white/10'
              : 'bg-white border-b-2 border-black'
            : 'bg-transparent border-b-2 border-transparent'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[80px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary-500 flex items-center justify-center border-2 border-black transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-[-4px_4px_0_0_#fff]">
                <span className="text-black font-bold text-xl font-display">M</span>
              </div>
              <span className={`text-2xl font-bold font-display uppercase tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>
                {siteName}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-bold uppercase tracking-widest transition-all duration-200 ${location.pathname === link.path
                      ? 'text-primary-500'
                      : isDark
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-black'
                    }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[3px] bg-primary-500"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* CTA */}
              <Link
                to={nav.cta.path}
                className="hidden lg:inline-flex btn-primary !py-2.5 !px-6 !text-xs"
              >
                <span>{nav.cta.label}</span>
              </Link>

              {/* Mobile toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={`lg:hidden p-2 transition-colors hover:text-primary-500 ${isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-x-0 top-[80px] z-[99] border-b-2 p-6 ${isDark ? 'bg-black border-white/10' : 'bg-white border-black'
              }`}
          >
            <div className="flex flex-col gap-4 max-w-7xl mx-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block text-xl font-bold font-display uppercase tracking-wider transition-all ${location.pathname === link.path
                        ? 'text-primary-500'
                        : isDark
                          ? 'text-gray-400 hover:text-white'
                          : 'text-gray-600 hover:text-black'
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-6 pt-6 border-t-2 border-dashed border-gray-500/30"
              >
                <Link to={nav.cta.path} className="btn-primary w-full justify-center">
                  <span>{nav.cta.label}</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
