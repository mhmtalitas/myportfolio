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
  'skills.webDev.fullstack': {
    tr: 'Full Stack Geliştirme',
    en: 'Full Stack Development'
  },
  'skills.webDev.modern': {
    tr: 'Modern Web Teknolojileri',
    en: 'Modern Web Technologies'
  },
  'skills.digitalMarketing': {
    tr: 'Dijital Pazarlama',
    en: 'Digital Marketing'
  },
  'skills.digitalMarketing.seo': {
    tr: 'SEO & SEM',
    en: 'SEO & SEM'
  },
  'skills.digitalMarketing.performance': {
    tr: 'Performans Analizi',
    en: 'Performance Analysis'
  },
  'skills.mobileDev': {
    tr: 'Mobil & Yazılım',
    en: 'Mobile & Software'
  },
  'skills.mobileDev.app': {
    tr: 'Mobil Uygulama Geliştirme',
    en: 'Mobile App Development'
  },
  'skills.mobileDev.custom': {
    tr: 'Özel Yazılım Çözümleri',
    en: 'Custom Software Solutions'
  },
  'skills.businessSolutions': {
    tr: 'İş Çözümleri',
    en: 'Business Solutions'
  },
  'skills.businessSolutions.ecommerce': {
    tr: 'E-Ticaret Sistemleri',
    en: 'E-Commerce Systems'
  },
  'skills.businessSolutions.automation': {
    tr: 'İş Süreç Otomasyonu',
    en: 'Business Process Automation'
  },
  'projects.title': {
    tr: 'Projelerim',
    en: 'My Projects'
  },
  'projects.web.title': {
    tr: 'Modern Web Tasarımı',
    en: 'Modern Web Design'
  },
  'projects.web.description': {
    tr: 'Next.js ve TailwindCSS ile geliştirilmiş, etkileyici animasyonlara sahip kurumsal web siteleri.',
    en: 'Corporate websites developed with Next.js and TailwindCSS, featuring impressive animations.'
  },
  'projects.seo.title': {
    tr: 'SEO Optimizasyonu',
    en: 'SEO Optimization'
  },
  'projects.seo.description': {
    tr: 'Google sıralamasını iyileştiren, organik trafiği artıran ve dönüşüm oranını yükselten SEO çözümleri.',
    en: 'SEO solutions that improve Google rankings, increase organic traffic, and enhance conversion rates.'
  },
  'projects.mobile.title': {
    tr: 'Mobil Uygulama',
    en: 'Mobile Application'
  },
  'projects.mobile.description': {
    tr: 'iOS ve Android platformları için React Native ile geliştirilmiş, yüksek performanslı mobil uygulamalar.',
    en: 'High-performance mobile applications developed with React Native for iOS and Android platforms.'
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
  },
  'footer.role': {
    tr: 'Full Stack Developer & SEO Uzmanı',
    en: 'Full Stack Developer & SEO Expert'
  },
  'footer.location': {
    tr: 'Trabzon, Türkiye',
    en: 'Trabzon, Turkey'
  },
  'footer.quickLinks': {
    tr: 'Hızlı Bağlantılar',
    en: 'Quick Links'
  },
  'footer.contact': {
    tr: 'İletişim',
    en: 'Contact'
  },
  'footer.slogan': {
    tr: 'Modern Web Çözümleri & Dijital Dönüşüm',
    en: 'Modern Web Solutions & Digital Transformation'
  },
  'footer.social.linkedin': {
    tr: 'LinkedIn Profilim',
    en: 'My LinkedIn Profile'
  },
  'footer.social.github': {
    tr: 'GitHub Profilim',
    en: 'My GitHub Profile'
  },
  'contact.linkedin': {
    tr: 'LinkedIn Profilim',
    en: 'My LinkedIn Profile'
  },
  'contact.github': {
    tr: 'GitHub Profilim',
    en: 'My GitHub Profile'
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