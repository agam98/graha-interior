import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useCallback } from 'react';

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  additionalImages: string[]; 
}

interface PortfolioProps {
  isDarkMode: boolean;
}

const projects: Project[] = [
  {
    title: "Modern Living Room",
    category: "Residential",
    image: "/images/portfolio/ruang-tamu2.webp",
    description: "A modern living room designed for comfort and style.",
    additionalImages: [
      "/images/portfolio/ruang-tamu2-1.webp",
      "/images/portfolio/ruang-tamu2-2.webp"
    ]
  },
  {
    title: "Luxury Bedroom",
    category: "Residential",
    image: "/images/portfolio/kamar.webp",
    description: "A luxurious bedroom with elegant furnishings.",
    additionalImages: [
      "/images/portfolio/kamar-1.webp",
      "/images/portfolio/kamar-2.webp"
    ]
  },
  {
    title: "Contemporary Kitchen",
    category: "Kitchen",
    image: "/images/portfolio/dapur.webp",
    description: "A contemporary kitchen with modern appliances.",
    additionalImages: [
      "/images/portfolio/dapur-1.webp",
      "/images/portfolio/dapur-2.webp"
    ]
  },
  {
    title: "Kitchen Elegant",
    category: "Kitchen",
    image: "/images/portfolio/dapur2.webp",
    description: "An elegant kitchen design that combines functionality and style.",
    additionalImages: [
      "/images/portfolio/dapur2-1.webp",
      "/images/portfolio/dapur2-2.webp"
    ]
  }
];

const Portfolio: React.FC<PortfolioProps> = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-black/90' : 'bg-white/90'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-secondary' : 'text-black'} mb-4`}>Portfolio Kami</h2>
          <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Koleksi karya terbaik kami</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1
            });

            return (
              <motion.div
                key={project.title}
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-lg shadow-xl ${isDarkMode ? 'bg-black/50' : 'bg-white'}`}
              >
                <div className="aspect-square bg-gray-800 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover cursor-pointer"
                    loading="lazy"
                    onClick={() => handleProjectClick(project)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition -transform duration-300">
                    <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{project.title}</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.category}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
            <div className="bg-white rounded-lg p-6 max-w-lg mx-auto">
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="mb-4">{selectedProject.description}</p>
              <button onClick={handleClose} className="text-red-500">Close</button>
              <h3 className="mt-4 font-semibold">Read More:</h3>
              <ul className="list-disc list-inside">
                {selectedProject.additionalImages.map((img, index) => (
                  <li key={index}>
                    <img src={img} alt={`Additional view of ${selectedProject.title}`} className="w-full h-auto my-2" loading="lazy" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;