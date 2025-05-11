import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>
        
        <div className="text-center">
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            You can download my resume to view all my details in one document.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="./data/resume.pdf"
            download
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;