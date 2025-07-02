import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Luxe Fashion Brand',
    category: 'Brand Identity',
    image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sophisticated brand identity for a luxury fashion house with timeless elegance.'
  },
  {
    id: 2,
    title: 'Heritage Restaurant',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Premium restaurant website showcasing culinary excellence and ambiance.'
  },
  {
    id: 3,
    title: 'Executive Banking App',
    category: 'Mobile App',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sophisticated mobile banking interface for high-net-worth individuals.'
  },
  {
    id: 4,
    title: 'Artisan Wine Collection',
    category: 'Packaging',
    image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Premium wine packaging that reflects heritage and craftsmanship.'
  },
  {
    id: 5,
    title: 'Corporate Campaign',
    category: 'Photography',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Executive portrait series for a Fortune 500 company rebrand.'
  },
  {
    id: 6,
    title: 'Digital Strategy',
    category: 'Digital Marketing',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comprehensive digital marketing suite for a tech startup launch.'
  }
];

const categories = ['All', 'Brand Identity', 'Web Design', 'Mobile App', 'Packaging', 'Photography', 'Digital Marketing'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-gradient-to-br from-slate-50 to-red-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our latest projects where sophisticated design meets 
            strategic thinking to create exceptional brand experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-red-900 to-red-700 text-white shadow-lg'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-red-900 hover:text-red-900'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-slate-700 hover:text-red-900"
                  >
                    <Eye size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-slate-700 hover:text-red-900"
                  >
                    <ExternalLink size={18} />
                  </motion.button>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-red-900 font-medium mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-900 to-red-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;