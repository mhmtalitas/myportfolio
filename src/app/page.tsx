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
      title: 'E-Ticaret Uygulaması',
      desc: 'Next.js ve Stripe entegrasyonlu modern e-ticaret platformu',
      animation: animations.projects?.ecommerce
    },
    {
      title: 'Sosyal Medya Paneli',
      desc: 'Analitik ve kullanıcı yönetimi içeren gerçek zamanlı panel',
      animation: animations.projects?.dashboard
    },
    {
      title: 'Mobil Uygulama',
      desc: 'React Native ile geliştirilmiş çoklu platform mobil uygulaması',
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
                Portfolyoma Hoş Geldiniz
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-400 mb-8"
              >
                Güzel ve fonksiyonel web deneyimleri oluşturuyorum
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
                Modern teknolojilerde uzmanlığa sahip tutkulu bir web geliştiricisiyim.
                Kullanıcı dostu ve duyarlı web siteleri oluşturmayı seviyorum ve
                harika kullanıcı deneyimleri sunmayı hedefliyorum.
              </motion.p>
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 gap-4"
              >
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                  <motion.div
                    key={skill}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] p-4 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
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
                  <div className="flex space-x-4">
                    <a href="#" className="text-teal-300 hover:text-teal-400 transition-colors duration-300 flex items-center gap-2 group">
                      Demoyu Gör
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                    <a href="#" className="text-teal-300 hover:text-teal-400 transition-colors duration-300 flex items-center gap-2 group">
                      Kaynak Kodu
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                  </div>
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
                İletişime Geçin
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-400 mb-8 text-lg"
              >
                Şu anda yeni fırsatlar arıyorum. Bir sorunuz varsa veya sadece
                merhaba demek istiyorsanız, size en kısa sürede dönüş yapmaya çalışacağım!
              </motion.p>
              <motion.a
                variants={fadeInUp}
                href="mailto:your.email@example.com"
                className="inline-block bg-gradient-to-r from-teal-300 to-teal-400 text-gray-900 px-8 py-3 rounded-lg font-medium hover:from-teal-400 hover:to-teal-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Merhaba De
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <p>© 2024 İsminiz. Tüm hakları saklıdır.</p>
        </motion.div>
      </footer>
    </main>
  );
}
