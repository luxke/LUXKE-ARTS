import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-8">
      
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-blue-500">About Luxke Arts</h1>
        <p className="mt-4 text-lg">Discover the passion behind our handcrafted bead art.</p>
      </motion.div>

      
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-white p-6 rounded-lg shadow-lg mb-10"
      >
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="mt-2">At Luxke Arts, we craft bead art with precision and creativity to bring your ideas to life.</p>
      </motion.div>
      
      
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="bg-white p-6 rounded-lg shadow-lg mb-10"
      >
        <h2 className="text-2xl font-semibold">Meet the Artist</h2>
        <p className="mt-2">Felix Luxke is a passionate bead artist dedicated to creating unique, handcrafted designs.</p>
      </motion.div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Handmade Quality", "Custom Designs", "Fast Delivery"].map((text, index) => (
          <motion.div 
            key={index}
            whileHover={{ rotateY: 180 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-lg font-semibold">{text}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
