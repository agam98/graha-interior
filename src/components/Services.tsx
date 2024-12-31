import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ServicesProps {
  isDarkMode: boolean; // Menentukan tipe untuk prop isDarkMode
}

const services: Service[] = [
  {
    title: "Interior Design",
    description: "Menciptakan ruang yang indah dan fungsional sesuai dengan gaya hidup Anda",
    icon: "🎨"
  },
  {
    title: "Konsultasi",
    description: "Saran profesional untuk mewujudkan visi desain interior Anda",
    icon: "💡"
  },
  {
    title: "Renovasi",
    description: "Mengubah ruang Anda menjadi lebih modern dan nyaman",
    icon: "🏠"
  },
  {
    title: "Custom Furniture",
    description: "Desain dan pembuatan furnitur sesuai kebutuhan Anda",
    icon: "🪑"
  }
];

const Services: React.FC<ServicesProps> = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-black/95' : 'bg-white/95'}`} ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-secondary' : 'text-black'} mb-4`}>Our Services</h2>
          <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Layanan profesional untuk interior impian Anda</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-black/50 p-6 rounded-lg backdrop-blur-sm hover:bg-primary/10 transition-all ${isDarkMode ? 'bg-black/50' : 'bg-white/50'}`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-secondary' : 'text-black'}`}>{service.title}</h3>
              <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;