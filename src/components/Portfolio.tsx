import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Unquie Design Services',
    category: 'Graphic Design',
    image: 'https://i.pinimg.com/736x/88/f9/20/88f920a22f93e03a2cfefdfc1e342d12.jpg',
    description: 'Sophisticated brand identity for a luxury fashion house with timeless elegance.'
  },
  {
    id: 2,
    title: 'Office space designs',
    category: 'Office Branding',
    image: 'https://i.pinimg.com/736x/ef/9f/e4/ef9fe48282131621c7686daddcce55ac.jpg',
    description: 'Premium restaurant website showcasing culinary excellence and ambiance.'
  },
  {
    id: 3,
    title: 'Express color',
    category: 'Large Format Printing',
    image: 'https://i.pinimg.com/736x/0a/47/f0/0a47f067aa1f55c2b96dd305ef4f84ca.jpg',
    description: 'Sophisticated mobile banking interface for high-net-worth individuals.'
  },
  {
    id: 4,
    title: 'BillBoard Prints',
    category: 'Outside Branding',
    image: 'https://i.pinimg.com/736x/16/ef/15/16ef15fd0f86c71c10d6509cd2f36704.jpg',
    description: 'Premium wine packaging that reflects heritage and craftsmanship.'
  },
  {
    id: 5,
    title: 'Brand Identity',
    category: 'Business Cards',
    image: 'https://i.pinimg.com/736x/08/52/c2/0852c2f39a620047634cdf5b4b8d28ae.jpg',
    description: 'Executive portrait series for a Fortune 500 company rebrand.'
  },
  {
    id: 6,
    title: 'Social Media Poster designs',
    category: 'E-Fliers',
    image: 'https://i.pinimg.com/736x/a6/75/49/a675496874f7311871992f064afac8ba.jpg',
    description: 'Digital marketing resources for business.'
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