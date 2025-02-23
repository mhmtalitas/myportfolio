'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

type AnimationType = 'ecommerce' | 'dashboard' | 'mobile';

interface Project {
  title: string;
  description: string;
  animationType: AnimationType;
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  
  const [animations, setAnimations] = useState({
    hero: null,
    about: null,
    contact: null,
    projects: {
      ecommerce: null,
      dashboard: null,
      mobile: null
    }
  });

  const { language, translations } = useLanguage();

  useEffect(() => {
    // Modern developer animation
    fetch('https://assets5.lottiefiles.com/packages/lf20_vybwn7df.json')
      .then(response => response.json())
      .then(data => setAnimations(prev => ({ ...prev, hero: data })));

    // Tech skills animation
    fetch('https://assets9.lottiefiles.com/packages/lf20_kkflmtur.json')
      .then(response => response.json())
      .then(data => setAnimations(prev => ({ ...prev, about: data })));

    // Contact animation
    fetch('https://assets10.lottiefiles.com/packages/lf20_u25cckyh.json')
      .then(response => response.json())
      .then(data => setAnimations(prev => ({ ...prev, contact: data })));

    // Proje animasyonları
    fetch('https://assets8.lottiefiles.com/packages/lf20_3vbOcw.json')
      .then(response => response.json())
      .then(data => setAnimations(prev => ({ 
        ...prev, 
        projects: { ...prev.projects, ecommerce: data }
      })));

    fetch('https://assets5.lottiefiles.com/packages/lf20_GofK09iPAE.json')
      .then(response => response.json())
      .then(data => setAnimations(prev => ({ 
        ...prev, 
        projects: { ...prev.projects, dashboard: data }
      })));

    fetch('https://assets2.lottiefiles.com/packages/lf20_xlmz9xwm.json')
      .then(response => response.json())
      .then(data => setAnimations(prev => ({ 
        ...prev, 
        projects: { ...prev.projects, mobile: data }
      })));
  }, []);

  const projects: Project[] = [
    {
      title: translations['projects.web.title'][language],
      description: translations['projects.web.description'][language],
      animationType: 'ecommerce'
    },
    {
      title: translations['projects.seo.title'][language],
      description: translations['projects.seo.description'][language],
      animationType: 'dashboard'
    },
    {
      title: translations['projects.mobile.title'][language],
      description: translations['projects.mobile.description'][language],
      animationType: 'mobile'
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
        <motion.div style={{ opacity, scale }} className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-transparent opacity-50"></div>
        </motion.div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center md:text-left md:w-1/2"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500"
              >
                {translations['hero.welcome'][language]}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-400 mb-8 max-w-2xl"
              >
                {translations['hero.description'][language]}
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex justify-center md:justify-start space-x-8"
              >
                <a href="#" className="text-3xl hover:text-teal-300 transition-all duration-300 hover:scale-110">
                  <FiGithub />
                </a>
                <a href="#" className="text-3xl hover:text-teal-300 transition-all duration-300 hover:scale-110">
                  <FiLinkedin />
                </a>
                <a href="#" className="text-3xl hover:text-teal-300 transition-all duration-300 hover:scale-110">
                  <FiMail />
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <div className="relative w-full h-[400px] hover:scale-105 transition-transform duration-500">
                {animations.hero && (
                  <Lottie
                    animationData={animations.hero}
                    loop={true}
                    className="w-full h-full drop-shadow-[0_0_15px_rgba(100,255,218,0.3)]"
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#112240] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="relative w-full h-[400px] group">
                {animations.about && (
                  <Lottie
                    animationData={animations.about}
                    loop={true}
                    className="w-full h-full drop-shadow-[0_0_15px_rgba(100,255,218,0.3)] transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="md:w-1/2"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500"
              >
                {translations['about.title'][language]}
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-gray-400 leading-relaxed mb-8 text-lg"
              >
                {translations['about.description'][language]}
              </motion.p>
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="space-y-4">
                  <h3 className="text-teal-300 font-semibold mb-2">{translations['skills.webDev'][language]}</h3>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-3 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {translations['skills.webDev.fullstack'][language]}
                  </motion.div>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-3 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {translations['skills.webDev.modern'][language]}
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-teal-300 font-semibold mb-2">{translations['skills.digitalMarketing'][language]}</h3>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-3 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {translations['skills.digitalMarketing.seo'][language]}
                  </motion.div>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-3 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {translations['skills.digitalMarketing.performance'][language]}
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-teal-300 font-semibold mb-2">{translations['skills.mobileDev'][language]}</h3>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-3 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {translations['skills.mobileDev.app'][language]}
                  </motion.div>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-3 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {translations['skills.mobileDev.custom'][language]}
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-teal-300 font-semibold mb-2">{translations['skills.businessSolutions'][language]}</h3>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-3 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {translations['skills.businessSolutions.ecommerce'][language]}
                  </motion.div>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-3 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {translations['skills.businessSolutions.automation'][language]}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500"
          >
            {translations['projects.title'][language]}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-[#112240] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#1a365d] to-[#0a192f] group">
                  {animations.projects?.[project.animationType] && (
                    <Lottie
                      animationData={animations.projects[project.animationType]}
                      loop={true}
                      className="w-full h-full drop-shadow-[0_0_15px_rgba(100,255,218,0.3)] transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-teal-300">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#112240] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="relative w-full h-[400px] group">
                {animations.contact && (
                  <Lottie
                    animationData={animations.contact}
                    loop={true}
                    className="w-full h-full drop-shadow-[0_0_15px_rgba(100,255,218,0.3)] transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="md:w-1/2 text-center md:text-left"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500"
              >
                {translations['contact.title'][language]}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-400 mb-8 text-lg"
              >
                {translations['contact.description'][language]}
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <FiMail className="text-teal-300 text-xl" />
                  <a href="mailto:contact@example.com" className="text-gray-400 hover:text-teal-300 transition-colors duration-300">
                    contact@example.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <FiLinkedin className="text-teal-300 text-xl" />
                  <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors duration-300">
                    LinkedIn Profilim
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <FiGithub className="text-teal-300 text-xl" />
                  <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors duration-300">
                    GitHub Profilim
                  </a>
                </div>
              </motion.div>
              <motion.a
                variants={fadeInUp}
                href="mailto:contact@example.com"
                className="inline-block mt-8 bg-gradient-to-r from-teal-300 to-teal-400 text-gray-900 px-8 py-3 rounded-lg font-medium hover:from-teal-400 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {translations['contact.button'][language]}
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-gray-400 bg-[#0a192f] border-t border-gray-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-teal-300 mb-4">Mehmet Ali Taş</h3>
              <p className="text-sm">{translations['footer.role'][language]}</p>
              <p className="text-sm mt-2">{translations['footer.location'][language]}</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-teal-300 mb-4">{translations['footer.quickLinks'][language]}</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-teal-300 transition-colors duration-300">{translations['nav.home'][language]}</a></li>
                <li><a href="#about" className="hover:text-teal-300 transition-colors duration-300">{translations['nav.about'][language]}</a></li>
                <li><a href="#projects" className="hover:text-teal-300 transition-colors duration-300">{translations['nav.projects'][language]}</a></li>
                <li><a href="#contact" className="hover:text-teal-300 transition-colors duration-300">{translations['nav.contact'][language]}</a></li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold text-teal-300 mb-4">{translations['footer.contact'][language]}</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="hover:text-teal-300 transition-colors duration-300" title={translations['footer.social.github'][language]}>
                  <FiGithub className="text-2xl" />
                </a>
                <a href="#" className="hover:text-teal-300 transition-colors duration-300" title={translations['footer.social.linkedin'][language]}>
                  <FiLinkedin className="text-2xl" />
                </a>
                <a href="mailto:contact@example.com" className="hover:text-teal-300 transition-colors duration-300">
                  <FiMail className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-800">
            <p>{translations['footer.copyright'][language]}</p>
            <p className="text-sm mt-2">{translations['footer.slogan'][language]}</p>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
