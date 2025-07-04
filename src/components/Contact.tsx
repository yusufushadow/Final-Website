import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-50 to-red-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent">
              Collaborate
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to elevate your brand to new heights? Connect with us to discuss 
            how we can bring your vision to life with sophisticated design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Start a conversation
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-red-900 focus:outline-none transition-colors"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-red-900 focus:outline-none transition-colors"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-red-900 focus:outline-none transition-colors"
                  placeholder="victoria@company.com"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Service Interest
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-red-900 focus:outline-none transition-colors">
                  <option>Select a service</option>
                  <option>Brand Identity</option>
                  <option>Web Design</option>
                  <option>Mobile App Design</option>
                  <option>Packaging Design</option>
                  <option>Digital Marketing</option>
                  <option>Photography</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Investment Range
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-red-900 focus:outline-none transition-colors">
                  <option>Select investment range</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:border-red-900 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your vision and objectives..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-red-900 to-red-700 text-white px-8 py-4 rounded-xl text-lg font-medium hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Connect with us
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-red-700 rounded-xl flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-slate-900 font-medium">Email</div>
                    <div className="text-slate-600">huperballographics@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-red-700 rounded-xl flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-slate-900 font-medium">Phone</div>
                    <div className="text-slate-600">+256 779 538199</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-red-700 rounded-xl flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-slate-900 font-medium">Office</div>
                    <div className="text-slate-600">Digital<br />Complex Second Floor Room SS3</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900 to-red-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to begin your transformation?
              </h3>
              <p className="mb-6 opacity-90">
                We're excited to learn about your project and discuss how we can 
                elevate your brand to new heights of sophistication
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-900 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                Reach Us Today
              </motion.button>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Office Hours
              </h3>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>07:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>09:00 AM - 7:00 PM</span>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;