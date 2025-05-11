import { motion } from 'framer-motion';

const Symposiums = ({ symposiums, workshops }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Events & Workshops</h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Symposiums Participated</h3>
          <div className="space-y-4">
            {symposiums.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h4 className="font-bold">{event.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{event.event} • {event.organizer}</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{event.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Workshops Attended</h3>
          <div className="space-y-4">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h4 className="font-bold">{workshop.title}</h4>
                  <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{workshop.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Symposiums;