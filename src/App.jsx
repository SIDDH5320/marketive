import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './hooks/useTheme';
import { useScrollProgress } from './hooks/useScrollProgress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const ThankYou = lazy(() => import('./pages/ThankYou'));

function PageLoader() {
  return (
    <div className="min-h-screen pt-32 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="h-8 w-48 bg-white/5 animate-pulse mb-6" />
      <div className="h-14 w-2/3 bg-white/5 animate-pulse mb-4" />
      <div className="h-5 w-1/2 bg-white/5 animate-pulse mb-16" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3].map(i => (
          <div key={i} className="p-8 border-2 border-white/5 flex flex-col gap-4">
            <div className="w-14 h-14 bg-white/5 animate-pulse" />
            <div className="h-5 w-3/4 bg-white/5 animate-pulse" />
            <div className="h-4 w-full bg-white/5 animate-pulse" />
            <div className="h-4 w-4/5 bg-white/5 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let raf;
    const tick = (time) => { lenis.raf(time); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);
  return null;
}

function ScrollProgress() {
  const progress = useScrollProgress();
  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

function AppRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

function Layout() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <div className="noise-overlay" />
      <Navbar />
      <main className="min-h-screen">
        <AppRoutes />
      </main>
      <Footer />
      <ThemeSwitcher />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
            <ScrollToTop />
            <Layout />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
