import { motion } from 'framer-motion';

const Certifications = ({ certifications }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Achievements</h2>
        
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="font-bold">{cert.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{cert.issuer}</p>
                  {cert.details && <p className="text-sm text-gray-500 dark:text-gray-400">{cert.details}</p>}
                </div>
                <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Certifications;