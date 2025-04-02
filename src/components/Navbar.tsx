'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

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
        scrolled ? 'bg-[#0a192f]/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <Image
              src="/favicon.png"
              alt="MAT Logo"
              width={160}
              height={50}
              className="object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
              {language === 'tr' ? 'Ana Sayfa' : 'Home'}
            </a>
            <a href="#about" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
              {language === 'tr' ? 'Hakkımda' : 'About'}
            </a>
            <a href="#projects" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
              {language === 'tr' ? 'Projeler' : 'Projects'}
            </a>
            <a href="#partners" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
              {language === 'tr' ? 'Referanslar' : 'References'}
            </a>
            <a href="#contact" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
              {language === 'tr' ? 'İletişim' : 'Contact'}
            </a>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-300 hover:text-teal-300 transition-colors duration-300"
            >
              <FiGlobe className="text-xl" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-teal-300 transition-colors duration-300"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                {language === 'tr' ? 'Ana Sayfa' : 'Home'}
              </a>
              <a href="#about" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                {language === 'tr' ? 'Hakkımda' : 'About'}
              </a>
              <a href="#projects" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                {language === 'tr' ? 'Projeler' : 'Projects'}
              </a>
              <a href="#partners" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                {language === 'tr' ? 'Referanslar' : 'References'}
              </a>
              <a href="#contact" className="text-gray-300 hover:text-teal-300 transition-colors duration-300">
                {language === 'tr' ? 'İletişim' : 'Contact'}
              </a>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-gray-300 hover:text-teal-300 transition-colors duration-300"
              >
                <FiGlobe className="text-xl" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 