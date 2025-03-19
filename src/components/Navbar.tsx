'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, translations } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: translations['nav.home'][language], href: '#home' },
    { name: translations['nav.about'][language], href: '#about' },
    { name: translations['nav.projects'][language], href: '#projects' },
    { name: translations['nav.partners'][language], href: '#partners' },
    { name: translations['nav.contact'][language], href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a192f]/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="#home" className="text-2xl font-bold hover:text-teal-300 transition-colors duration-300">
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-teal-300 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 hover:text-teal-300 transition-colors duration-300 group"
            >
              <FiGlobe className="text-xl group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 hover:text-teal-300 transition-colors duration-300 group"
            >
              <FiGlobe className="text-xl group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl focus:outline-none hover:text-teal-300 transition-colors duration-300"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-teal-300 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 