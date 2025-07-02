import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Twitter, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Services': [
      'Brand Identity',
      'Web Design',
      'Mobile Apps',
      'Packaging Design',
      'Digital Marketing',
      'Photography'
    ],
    'Company': [
      'About Us',
      'Our Team',
      'Careers',
      'Awards',
      'Case Studies',
      'Contact'
    ],
    'Resources': [
      'Design Process',
      'Brand Guidelines',
      'Design Insights',
      'Industry Reports',
      'Client Portal',
      'Support'
    ]
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-red-900 to-red-700 rounded-xl flex items-center justify-center">
                <Palette className="text-white" size={20} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                Maroon Studio
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
              We are a distinguished design agency dedicated to crafting 
              sophisticated visual experiences that elevate brands and inspire audiences.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail size={16} />
                <span>hello@maroonstudio.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone size={16} />
                <span>+1 (555) 987-6543</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin size={16} />
                <span>456 Design Avenue, NY 10002</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-red-900 hover:to-red-700 transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-xl font-semibold mb-4">Stay Informed</h3>
            <p className="text-slate-400 mb-4">
              Subscribe to receive design insights and industry updates.
            </p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:border-red-900 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-900 to-red-700 px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Maroon Studio. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;