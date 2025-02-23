'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<Language, string>>;
}

const translations = {
  'nav.home': {
    tr: 'Ana Sayfa',
    en: 'Home'
  },
  'nav.about': {
    tr: 'Hakkımda',
    en: 'About'
  },
  'nav.projects': {
    tr: 'Projeler',
    en: 'Projects'
  },
  'nav.contact': {
    tr: 'İletişim',
    en: 'Contact'
  },
  'hero.welcome': {
    tr: 'Dijital Dünyada İz Bırakın',
    en: 'Make Your Mark in Digital World'
  },
  'hero.description': {
    tr: 'Modern teknolojiler ve yaratıcı çözümlerle markanızı dijital dünyada öne çıkarıyorum. Web siteniz, mobil uygulamanız ve SEO stratejiniz için profesyonel hizmet sunuyorum.',
    en: 'I help your brand stand out in the digital world with modern technologies and creative solutions. I provide professional services for your website, mobile application, and SEO strategy.'
  },
  'about.title': {
    tr: 'Hakkımda',
    en: 'About Me'
  },
  'about.description': {
    tr: '5 yılı aşkın deneyimle web teknolojileri alanında uzmanlaşmış bir yazılım geliştiricisiyim. Modern web teknolojilerini kullanarak, işletmelerin dijital varlıklarını güçlendiriyor ve kullanıcı deneyimini ön planda tutarak yenilikçi çözümler sunuyorum. SEO odaklı geliştirmeler ve mobil öncelikli tasarım yaklaşımıyla, projelerin hem kullanıcılar hem de arama motorları tarafından sevilmesini sağlıyorum.',
    en: 'I am a software developer specialized in web technologies with over 5 years of experience. Using modern web technologies, I strengthen businesses digital presence and provide innovative solutions with a focus on user experience. Through SEO-driven development and mobile-first design approach, I ensure projects are loved by both users and search engines.'
  },
  'skills.webDev': {
    tr: 'Web Geliştirme',
    en: 'Web Development'
  },
  'skills.digitalMarketing': {
    tr: 'Dijital Pazarlama',
    en: 'Digital Marketing'
  },
  'skills.mobileDev': {
    tr: 'Mobil & Yazılım',
    en: 'Mobile & Software'
  },
  'skills.businessSolutions': {
    tr: 'İş Çözümleri',
    en: 'Business Solutions'
  },
  'projects.title': {
    tr: 'Projelerim',
    en: 'My Projects'
  },
  'contact.title': {
    tr: 'İletişime Geçin',
    en: 'Get in Touch'
  },
  'contact.description': {
    tr: 'Web geliştirme, SEO optimizasyonu veya mobil uygulama projeniz için profesyonel çözümler sunuyorum. Projenizi birlikte değerlendirelim ve dijital varlığınızı güçlendirelim.',
    en: 'I offer professional solutions for your web development, SEO optimization, or mobile application project. Let\'s evaluate your project together and strengthen your digital presence.'
  },
  'contact.button': {
    tr: 'Hemen İletişime Geç',
    en: 'Contact Now'
  },
  'footer.copyright': {
    tr: '© 2024 Mehmet Ali Taş. Tüm hakları saklıdır.',
    en: '© 2024 Mehmet Ali Tas. All rights reserved.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 