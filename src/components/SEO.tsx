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
    "name": "Mehmet Alitaş",
    "url": "https://www.mehmetalitas.com",
    "logo": "https://www.mehmetalitas.com/favicon.png",
    "description": language === 'tr' 
      ? "Trabzon merkezli, tüm Türkiye'ye hizmet veren profesyonel web geliştirme, mobil uygulama ve SEO hizmetleri." 
      : "Trabzon-based professional web development, mobile application and SEO services serving all of Turkey.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Trabzon",
      "addressRegion": "Trabzon",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0015",
      "longitude": "39.7178"
    },
    "telephone": "+905436977668",
    "email": "info@mehmetalitas.com",
    "sameAs": [
      "https://twitter.com/mehmetalitas",
      "https://www.instagram.com/mehmetalitas"
    ],
    "priceRange": "₺₺",
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "41.0015",
        "longitude": "39.7178"
      },
      "geoRadius": "500000"
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
          "name": language === 'tr' ? "SEO Hizmetleri" : "SEO Services"
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
        <link rel="canonical" href="https://www.mehmetalitas.com" />
        {/* Hreflang Etiketleri */}
        <link rel="alternate" href="https://www.mehmetalitas.com" hrefLang="tr" />
        <link rel="alternate" href="https://www.mehmetalitas.com/en" hrefLang="en" />
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