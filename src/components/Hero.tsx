import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-red-50 to-red-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-red-800/20 to-red-700/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-br from-red-900/20 to-red-600/20 rounded-full blur-xl"
        />
      </div>

      {/* Floating Design Elements */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-32 hidden lg:block"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-800 rounded-2xl flex items-center justify-center shadow-lg">
          <Sparkles className="text-white" size={24} />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 left-32 hidden lg:block"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-red-800 to-red-700 rounded-full flex items-center justify-center shadow-lg">
          <Zap className="text-white" size={28} />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            Premium Design Excellence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 leading-tight"
        >
          Crafting{' '}
          <span className="bg-gradient-to-r from-red-900 via-red-800 to-red-700 bg-clip-text text-transparent">
            sophisticated
          </span>{' '}
          brand experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          We blend timeless elegance with modern innovation to create 
          visual identities that command attention and inspire lasting connections.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-900 to-red-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
          >
            <span>Begin Your Journey</span>
            <ArrowRight size={20} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-medium hover:border-red-900 hover:text-red-900 transition-all duration-300"
          >
            Explore Our Work
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: '300+', label: 'Projects Delivered' },
            { number: '120+', label: 'Satisfied Clients' },
            { number: '20+', label: 'Design Awards' },
            { number: '10+', label: 'Years Excellence' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;