import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X} from 'lucide-react';
import sitelogo from '../site_images/home logo color.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
           
            className="flex items-center space-x-3"
          >
            
            <img src={sitelogo} width={140} height={140} />

          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-slate-700 hover:text-red-900 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-slate-700 hover:text-red-900 transition-colors font-medium"
            >
              Portfolio
            </a>
            <a
              href="#process"
              className="text-slate-700 hover:text-red-900 transition-colors font-medium"
            >
              Process
            </a>
            <a
              href="#team"
              className="text-slate-700 hover:text-red-900 transition-colors font-medium"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-slate-700 hover:text-red-900 transition-colors font-medium"
            >
              Contact US
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Start Project
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-6 border-t border-slate-200"
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-slate-700 hover:text-red-900 transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-slate-700 hover:text-red-900 transition-colors font-medium"
              >
                Portfolio
              </a>
              <a
                href="#process"
                className="text-slate-700 hover:text-red-900 transition-colors font-medium"
              >
                Process
              </a>
              <a
                href="#team"
                className="text-slate-700 hover:text-red-900 transition-colors font-medium"
              >
                Team
              </a>
              <a
                href="#contact"
                className="text-slate-700 hover:text-red-900 transition-colors font-medium"
              >
                Contact
              </a>
              <button className="bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-3 rounded-full font-medium w-fit">
                Start Project
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
