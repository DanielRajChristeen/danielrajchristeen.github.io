import { motion } from 'framer-motion';

const Education = ({ education }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <span className="text-gray-500 dark:text-gray-400">{edu.year}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-1">{edu.institution}</p>
              <p className="text-gray-500 dark:text-gray-400">{edu.score}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;