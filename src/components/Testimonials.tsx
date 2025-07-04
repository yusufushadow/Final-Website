import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Margaret Blackwood',
    role: 'CEO, Blackwood Enterprises',
    company: 'Fortune 500 Company',
    rating: 5,
    text: 'Huperballo Graphics elevated our brand to new heights. Their sophisticated approach and attention to detail is unmatched.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Harrison Sterling',
    role: 'Founder, Sterling Capital',
    company: 'Investment Firm',
    rating: 5,
    text: 'The rebrand they created positioned us as the premium choice in our market. ROI exceeded all expectations.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Sophia Pemberton',
    role: 'Creative Director',
    company: 'Luxury Fashion House',
    rating: 5,
    text: 'Their creative vision perfectly captured our heritage while modernizing our appeal to contemporary audiences.',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Charles Montgomery',
    role: 'Managing Partner',
    company: 'Law Firm',
    rating: 5,
    text: 'Professional excellence at its finest. They transformed our corporate identity with remarkable sophistication.',
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Victoria Ashworth',
    role: 'Brand Director',
    company: 'Luxury Hotels',
    rating: 5,
    text: 'Their strategic approach to our brand refresh resulted in a 45% increase in premium bookings.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Client{' '}
            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover what our distinguished clients say about their experience 
            working with Maroon Studio.
          </p>
        </motion.div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1600] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex space-x-6"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-80 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <Quote className="text-slate-300 mb-4" size={24} />

                <p className="text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-slate-900 font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-slate-600 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-red-900 text-sm font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-6 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-slate-900 font-semibold">5.0/5</span>
            </div>
            <div className="w-px h-6 bg-slate-300" />
            <div className="text-slate-600">
              Based on 100+ client reviews
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;