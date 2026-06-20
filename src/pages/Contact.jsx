import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import content from '../content/content';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, pageTransition } from '../utils/animations';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { contact } = content;

  const infoItems = [
    { icon: Mail, label: 'Email', value: contact.info.email },
    { icon: Phone, label: 'Phone', value: contact.info.phone },
    { icon: MapPin, label: 'Address', value: contact.info.address },
    { icon: Clock, label: 'Hours', value: contact.info.hours },
  ];

  return (
    <motion.div {...pageTransition}>
      <Helmet>
        <title>Contact Marketive - Get a Free Digital Marketing Audit</title>
        <meta name="description" content="Get in touch with Marketive's team. Request a free audit, discuss your growth goals, or ask about our SEO, SEM, and content services." />
        <link rel="canonical" href="https://marketive.com.au/contact" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${isDark ? 'bg-surface-dark' : 'bg-[#f8f9fc]'}`} />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-500/8 blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeInUp} className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 mb-4">
              {contact.hero.tagline}
            </motion.span>
            <motion.h1 variants={fadeInUp} className={`text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {contact.hero.heading}
            </motion.h1>
            <motion.p variants={fadeInUp} className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {contact.hero.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className={`text-2xl font-bold font-display mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {contact.form.heading}
              </h2>
              <ContactForm redirectTo="/thank-you" />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="space-y-5 mb-10">
                {infoItems.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-4 p-5 border-2 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 ${
                      isDark
                        ? 'bg-surface-card border-surface-border hover:border-primary-500 hover:shadow-[4px_4px_0_0_var(--primary)]'
                        : 'bg-white border-black hover:shadow-[4px_4px_0_0_#000]'
                    }`}
                  >
                    <div className="w-10 h-10 bg-primary-500 border-2 border-black flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-black" aria-hidden="true" />
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        {item.label}
                      </p>
                      <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map - Melbourne CBD */}
              <div className={`h-52 overflow-hidden border-2 ${isDark ? 'border-surface-border' : 'border-black'}`}>
                <iframe
                  title="Marketive office location - Melbourne CBD"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353!3d-37.8162792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ceed30!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1718000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: isDark ? 'invert(90%) hue-rotate(180deg)' : 'none' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        heading={contact.cta.heading}
        description={contact.cta.description}
        cta={contact.cta.cta}
      />
    </motion.div>
  );
}
