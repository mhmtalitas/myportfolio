'use client';

import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useLanguage } from '@/context/LanguageContext';

const SEO = () => {
  const { language } = useLanguage();
  
  // JSON-LD için şirket ve hizmet bilgileri
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MAT Yazılım",
    "url": "https://www.matyazilim.com",
    "logo": "https://www.matyazilim.com/favicon.png",
    "description": language === 'tr' 
      ? "Profesyonel web geliştirme, özel yazılım çözümleri ve mobil uygulama hizmetleri." 
      : "Professional web development, custom software solutions and mobile application services.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0082",
      "longitude": "28.9784"
    },
    "telephone": "+905436977668",
    "email": "info@matyazilim.com",
    "sameAs": [
      "https://twitter.com/matyazilim",
      "https://www.facebook.com/matyazilim",
      "https://www.instagram.com/matyazilim"
    ],
    "priceRange": "₺₺",
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "41.0082",
        "longitude": "28.9784"
      },
      "geoRadius": "50000"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": language === 'tr' ? "Web Sitesi Geliştirme" : "Web Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": language === 'tr' ? "Mobil Uygulama Geliştirme" : "Mobile App Development" 
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": language === 'tr' ? "Özel Yazılım Çözümleri" : "Custom Software Solutions"
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <meta 
          name="google-site-verification" 
          content="YOUR_VERIFICATION_CODE" 
          // Google Search Console'dan alacağınız doğrulama kodunu buraya ekleyin
        />
        <link rel="canonical" href="https://www.matyazilim.com" />
        {/* Hreflang Etiketleri */}
        <link rel="alternate" href="https://www.matyazilim.com" hrefLang="tr" />
        <link rel="alternate" href="https://www.matyazilim.com/en" hrefLang="en" />
      </Head>
      
      {/* JSON-LD Structured Data */}
      <Script
        id="schema-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
};

export default SEO; 