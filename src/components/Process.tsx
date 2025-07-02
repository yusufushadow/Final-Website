import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Lightbulb, Palette, Rocket } from 'lucide-react';

const processSteps = [
  {
    icon: MessageCircle,
    title: 'Discovery',
    description: 'We begin with deep research to understand your brand, market position, and strategic objectives.',
    details: ['Brand Audit', 'Market Analysis', 'Stakeholder Interviews', 'Competitive Research']
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'We develop a comprehensive creative strategy that aligns with your business goals and vision.',
    details: ['Creative Brief', 'Brand Strategy', 'Design Direction', 'Content Strategy']
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Our expert team crafts sophisticated designs through iterative refinement and collaboration.',
    details: ['Concept Development', 'Design Execution', 'Client Collaboration', 'Design Refinement']
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'We ensure flawless execution and provide ongoing support for successful implementation.',
    details: ['Final Production', 'Quality Assurance', 'Launch Support', 'Brand Guidelines']
  }
];

const Process = () => {
  return (
    <section id="process" className="py-32 bg-white">
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
              Process
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We follow a refined methodology that ensures exceptional results 
            through strategic thinking and meticulous execution.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-900 via-red-800 to-red-700 transform -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-red-900 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 hidden lg:flex">
                  {index + 1}
                </div>

                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-900 to-red-700 rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300"
                  >
                    <step.icon className="text-white" size={28} />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2 text-left">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-red-900 to-red-700 rounded-full" />
                        <span className="text-slate-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to elevate your brand?
            </h3>
            <p className="text-slate-600 mb-6">
              Let's collaborate to create something extraordinary that sets you apart from the competition.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-900 to-red-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;