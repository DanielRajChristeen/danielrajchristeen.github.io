import { motion } from 'framer-motion';

const Internships = ({ internships }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Internships</h2>
        
        <div className="space-y-6">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-bold">{internship.company}</h3>
                <span className="text-gray-500 dark:text-gray-400">{internship.duration}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-1">{internship.position}</p>
              <p className="text-gray-500 dark:text-gray-400">{internship.location}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Internships;