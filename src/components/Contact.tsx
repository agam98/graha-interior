import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { contactInfo } from '../config/contact';

interface ContactProps {
  isDarkMode: boolean; // Menentukan tipe untuk prop isDarkMode
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { address, email, phone } = contactInfo;
  const fullAddress = `${address.street}, ${address.area}, ${address.city}, ${address.postalCode}`;

  return (
    <section ref={ref} className={`py-20 ${isDarkMode ? 'bg-black/90' : 'bg-white/90'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-secondary' : 'text-black'} mb-4`}>Hubungi Kami</h2>
          <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Konsultasikan kebutuhan interior Anda dengan tim kami</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-xl font-bold text-secondary mb-2">Lokasi Kami</h3>
              <p className={`text-gray-300 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{fullAddress}</p>
              <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={contactInfo.maps.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <h3 className="text-xl font-bold text-secondary mb-2">Email</h3>
                <a 
                  href={`mailto:${email}`} 
                  className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-secondary' : 'text-black hover:text-secondary'} transition-colors`}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {email}
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <h3 className="text-xl font-bold text-secondary mb-2">Telepon</h3>
                <a 
                  href={`tel:${phone}`} 
                  className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-secondary' : 'text-black hover:text-secondary'} transition-colors`}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {phone}
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`p-8 rounded-lg shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <h3 className="text-2xl font-bold text-secondary mb-6">Kirim Pesan</h3>
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className={`w-full p-3 rounded-lg focus:ring-2 focus:ring-secondary border-none ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className={`w-full p-3 rounded-lg focus:ring-2 focus:ring-secondary border-none ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                />
              </div>
              <div>
                <textarea
                  placeholder="Pesan"
                  rows={4}
                  className={`w-full p-3 rounded-lg focus:ring-2 focus:ring-secondary border-none ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-secondary text-black font-bold py-3 px-6 rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Kirim Pesan
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;