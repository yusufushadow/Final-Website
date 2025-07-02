import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Monitor, Smartphone, Package, Globe, Camera } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Sophisticated brand identities that reflect your values and resonate with your target audience.',
    features: ['Logo Design', 'Brand Guidelines', 'Color Systems', 'Typography']
  },
  {
    icon: Monitor,
    title: 'Web Design',
    description: 'Elegant, responsive websites that combine beautiful aesthetics with exceptional user experience.',
    features: ['UI/UX Design', 'Responsive Layout', 'Prototyping', 'User Research']
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Intuitive mobile applications designed for seamless interaction and user engagement.',
    features: ['App Design', 'User Journey', 'Wireframing', 'Interactive Design']
  },
  {
    icon: Package,
    title: 'Packaging Design',
    description: 'Premium packaging solutions that elevate your product and create memorable unboxing experiences.',
    features: ['Product Packaging', 'Label Design', 'Structural Design', '3D Visualization']
  },
  {
    icon: Globe,
    title: 'Digital Marketing',
    description: 'Strategic digital assets that amplify your brand message across all marketing channels.',
    features: ['Campaign Design', 'Social Graphics', 'Email Design', 'Digital Ads']
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional photography services that capture the essence of your brand with artistic precision.',
    features: ['Product Photography', 'Brand Photography', 'Commercial Shoots', 'Post-Production']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-white">
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
              Expertise
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We offer comprehensive design services that transform your vision 
            into compelling visual experiences that drive results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-900 to-red-700 rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300"
              >
                <service.icon className="text-white" size={28} />
              </motion.div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-red-900 to-red-700 rounded-full" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 text-red-900 font-medium hover:text-red-700 transition-colors"
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;