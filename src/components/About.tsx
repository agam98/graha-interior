import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AboutProps {
  isDarkMode: boolean; // Menentukan tipe untuk prop isDarkMode
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className={`py-20 ${isDarkMode ? 'bg-black/95' : 'bg-white/95'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="/Neon-box.png"
              alt="About Us"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              Tentang Kami
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Graha Interior adalah studio desain interior yang berdedikasi untuk menciptakan ruang yang indah, 
              fungsional, dan mencerminkan kepribadian klien kami. Dengan pengalaman lebih dari 10 tahun, 
              kami telah menyelesaikan ratusan proyek yang memuaskan.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-2">200+</h3>
                <p className="text-gray-300">Proyek Selesai</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-2">10+</h3>
                <p className="text-gray-300">Tahun Pengalaman</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;