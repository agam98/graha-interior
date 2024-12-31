import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

interface HeroProps {
  isDarkMode: boolean; // Menentukan tipe untuk prop isDarkMode
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  return (
    <section className={`relative min-h-screen ${isDarkMode ? 'bg-black/90' : 'bg-white/90'} overflow-hidden`}>
      <div className="container mx-auto px-4 py-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className={`text-5xl md:text-6xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
              <AnimatedText text="SELAMAT DATANG DI" />
              <br />
              <AnimatedText text="GRAHA INTERIOR" className="text-secondary" />
            </h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full"
            >
              Services
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-gray-800/20 rounded-lg overflow-hidden backdrop-blur-sm">
              <motion.img 
                src="/logo-hero.jpg" 
                alt="Graha Interior"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent"
      >
        <div className="container mx-auto px-4 py-12">
          <div className={`bg-black/50 p-8 rounded-lg backdrop-blur-sm ${isDarkMode ? 'bg-black/50' : 'bg-white/50'}`}>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-3xl font-bold mb-4 text-secondary"
            >
              INTERIOR IMPIAN ANDA ADA DI SINI
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-300"
            >
              Dari desain modern hingga klasik, kami memiliki portofolio yang cocok untuk 
              setiap gaya dan kebutuhan. Kami siap membantu Anda mewujudkan ruang yang Anda impikan.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;