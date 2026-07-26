import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import content from '../content/content';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);          // mobile
  const [openDesktopSub, setOpenDesktopSub] = useState(null); // desktop
  const desktopNavRef = useRef(null);
  const location = useLocation();
  const { siteName, nav, services, blog, caseStudies } = content;
  const navLinks = nav.links;

  // Build dropdown children from the single content source.
  const dropdowns = {
    '/services': services.items.map((s) => ({ label: s.title, path: `/services/${s.id}` })),
    '/case-studies': caseStudies.items.map((c) => ({ label: c.title, path: `/case-studies/${c.id}` })),
    '/blog': blog.posts.map((p) => ({ label: p.title, path: `/blog/${p.id}` })),
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenSub(null);
    setOpenDesktopSub(null);
  }, [location.pathname]);

  // Close desktop dropdown when clicking outside the nav
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target)) {
        setOpenDesktopSub(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isDark = theme === 'dark';

  // A link is "active" when you're on that page or any of its sub-pages.
  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname === path || location.pathname.startsWith(path + '/');

  const linkColor = (active) =>
    active ? 'text-primary-500' : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black';

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
            <div ref={desktopNavRef} className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                const children = dropdowns[link.path];
                const isOpen = openDesktopSub === link.path;

                if (children) {
                  return (
                    <div
                      key={link.path}
                      className="relative"
                      onMouseEnter={() => setOpenDesktopSub(link.path)}
                      onMouseLeave={() => setOpenDesktopSub(null)}
                    >
                      {/* Label — navigates to the section page on click */}
                      <Link
                        to={link.path}
                        onClick={() => setOpenDesktopSub(null)}
                        className={`inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest transition-all duration-200 ${linkColor(active)}`}
                        aria-expanded={isOpen}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        />
                        {active && (
                          <motion.div
                            layoutId="nav-indicator"
                            className="absolute -bottom-2 left-0 right-0 h-[3px] bg-primary-500"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}
                      </Link>

                      {/* Hover-driven dropdown */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
                          >
                            <div
                              className={`w-72 p-2 border-2 shadow-[6px_6px_0_0_rgba(0,0,0,1)] ${isDark ? 'bg-black border-white/15' : 'bg-white border-black'}`}
                            >
                              {children.map((c) => {
                                const cActive = location.pathname === c.path;
                                return (
                                  <Link
                                    key={c.path}
                                    to={c.path}
                                    onClick={() => setOpenDesktopSub(null)}
                                    className={`block px-4 py-2.5 text-sm font-semibold leading-snug transition-colors ${
                                      cActive
                                        ? 'text-primary-500'
                                        : isDark
                                          ? 'text-gray-300 hover:bg-white/10 hover:text-primary-500'
                                          : 'text-gray-700 hover:bg-black/5 hover:text-primary-500'
                                    }`}
                                  >
                                    {c.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative text-sm font-bold uppercase tracking-widest transition-all duration-200 ${linkColor(active)}`}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-[3px] bg-primary-500"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* CTA */}
              <Link
                to={nav.cta.path}
                className="hidden lg:inline-flex btn-primary !py-2.5 !px-6 !text-sm !font-sans !font-semibold !normal-case !tracking-normal"
              >
                <span>{nav.cta.label}</span>
              </Link>

              {/* Dark/Light toggle */}
              <button
                onClick={toggleTheme}
                className={`w-10 h-10 border-2 flex items-center justify-center transition-colors ${isDark
                    ? 'border-white text-white hover:bg-white hover:text-black'
                    : 'border-black text-black hover:bg-black hover:text-white'
                  }`}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isDark ? 'sun' : 'moon'}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center justify-center"
                  >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.span>
                </AnimatePresence>
              </button>

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
            className={`fixed inset-x-0 top-[80px] bottom-0 z-[99] overflow-y-auto border-b-2 p-6 ${isDark ? 'bg-black border-white/10' : 'bg-white border-black'
              }`}
          >
            <div className="flex flex-col gap-1 max-w-7xl mx-auto">
              {navLinks.map((link, i) => {
                const active = isActive(link.path);
                const children = dropdowns[link.path];

                if (children) {
                  const open = openSub === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenSub(open ? null : link.path)}
                        aria-expanded={open}
                        className={`w-full flex items-center justify-between py-2.5 text-xl font-bold font-display uppercase tracking-wider transition-all ${active ? 'text-primary-500' : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                          }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown size={22} className={`shrink-0 text-primary-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-0.5 pl-3 pb-2 border-l-2 border-primary-500/30 ml-1">
                              {children.map((c) => (
                                <Link
                                  key={c.path}
                                  to={c.path}
                                  className={`py-2 text-sm font-semibold leading-snug transition-colors ${location.pathname === c.path
                                      ? 'text-primary-500'
                                      : isDark
                                        ? 'text-gray-400 hover:text-white'
                                        : 'text-gray-600 hover:text-black'
                                    }`}
                                >
                                  {c.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-2.5 text-xl font-bold font-display uppercase tracking-wider transition-all ${active ? 'text-primary-500' : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                        }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-6 pt-6 border-t-2 border-dashed border-gray-500/30"
              >
                <Link to={nav.cta.path} className="btn-primary w-full justify-center !font-sans !font-semibold !normal-case !tracking-normal">
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
