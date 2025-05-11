    import { motion } from 'framer-motion';

const Home = ({ about }) => {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600">Daniel Raj Christeen</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 dark:text-gray-300">
            {about.profile}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {about.softSkills?.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;