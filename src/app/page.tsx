'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

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

  const projects = [
    {
      title: 'Modern Web Tasarımı',
      desc: 'Next.js ve TailwindCSS ile geliştirilmiş, etkileyici animasyonlara sahip kurumsal web siteleri',
      animation: animations.projects?.ecommerce
    },
    {
      title: 'SEO Optimizasyonu',
      desc: 'Google sıralamasını iyileştiren, organik trafiği artıran ve dönüşüm oranını yükselten SEO çözümleri',
      animation: animations.projects?.dashboard
    },
    {
      title: 'Mobil Uygulama',
      desc: 'iOS ve Android platformları için React Native ile geliştirilmiş, yüksek performanslı mobil uygulamalar',
      animation: animations.projects?.mobile
    }
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
                Dijital Dünyada İz Bırakın
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-400 mb-8 max-w-2xl"
              >
                Modern teknolojiler ve yaratıcı çözümlerle markanızı dijital dünyada öne çıkarıyorum. Web siteniz, mobil uygulamanız ve SEO stratejiniz için profesyonel hizmet sunuyorum.
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
                Hakkımda
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-gray-400 leading-relaxed mb-8 text-lg"
              >
                5 yılı aşkın deneyimle web teknolojileri alanında uzmanlaşmış bir yazılım geliştiricisiyim.
                Modern web teknolojilerini kullanarak, işletmelerin dijital varlıklarını güçlendiriyor ve
                kullanıcı deneyimini ön planda tutarak yenilikçi çözümler sunuyorum. SEO odaklı geliştirmeler ve
                mobil öncelikli tasarım yaklaşımıyla, projelerin hem kullanıcılar hem de arama motorları
                tarafından sevilmesini sağlıyorum.
              </motion.p>
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="space-y-4">
                  <h3 className="text-teal-300 font-semibold mb-2">Frontend Geliştirme</h3>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-3 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    React & Next.js
                  </motion.div>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-3 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    TypeScript
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-teal-300 font-semibold mb-2">Tasarım & SEO</h3>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-3 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    UI/UX Tasarım
                  </motion.div>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-3 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    SEO & Analytics
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-teal-300 font-semibold mb-2">Mobil Geliştirme</h3>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-3 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    React Native
                  </motion.div>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-3 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Cross-Platform
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-teal-300 font-semibold mb-2">Araçlar & Teknolojiler</h3>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-3 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Tailwind CSS
                  </motion.div>
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-3 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Git & GitHub
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
            Projelerim
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
                  {project.animation && (
                    <Lottie
                      animationData={project.animation}
                      loop={true}
                      className="w-full h-full drop-shadow-[0_0_15px_rgba(100,255,218,0.3)] transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-teal-300">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.desc}</p>
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
                Profesyonel İş Birliği
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-400 mb-8 text-lg"
              >
                Web geliştirme, SEO optimizasyonu veya mobil uygulama projeniz için profesyonel çözümler sunuyorum. 
                Projenizi birlikte değerlendirelim ve dijital varlığınızı güçlendirelim.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <FiMail className="text-teal-300 text-xl" />
                  <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-teal-300 transition-colors duration-300">
                    your.email@example.com
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
                href="mailto:your.email@example.com"
                className="inline-block mt-8 bg-gradient-to-r from-teal-300 to-teal-400 text-gray-900 px-8 py-3 rounded-lg font-medium hover:from-teal-400 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Hemen İletişime Geç
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
              <p className="text-sm">Full Stack Developer & SEO Uzmanı</p>
              <p className="text-sm mt-2">Trabzon, Türkiye</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-teal-300 mb-4">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-teal-300 transition-colors duration-300">Ana Sayfa</a></li>
                <li><a href="#about" className="hover:text-teal-300 transition-colors duration-300">Hakkımda</a></li>
                <li><a href="#projects" className="hover:text-teal-300 transition-colors duration-300">Projeler</a></li>
                <li><a href="#contact" className="hover:text-teal-300 transition-colors duration-300">İletişim</a></li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold text-teal-300 mb-4">İletişim</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="hover:text-teal-300 transition-colors duration-300">
                  <FiGithub className="text-2xl" />
                </a>
                <a href="#" className="hover:text-teal-300 transition-colors duration-300">
                  <FiLinkedin className="text-2xl" />
                </a>
                <a href="mailto:your.email@example.com" className="hover:text-teal-300 transition-colors duration-300">
                  <FiMail className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-800">
            <p>© 2025 Mehmet Ali Taş. Tüm hakları saklıdır.</p>
            <p className="text-sm mt-2">Modern Web Çözümleri & Dijital Dönüşüm</p>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
