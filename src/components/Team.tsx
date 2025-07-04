import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const teamMembers = [
  {
    name: 'Wambi Joshua',
    role: 'Executive Director',
    bio: 'Visionary leader with 3+ years crafting sophisticated brand experiences for luxury clients.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: { twitter: '#', linkedin: '#', instagram: '#' }
  },
  {
    name: 'Kakooza Yusufu Ali',
    role: 'Senior Designer',
    bio: 'Master of visual storytelling with expertise in creating compelling brand narratives.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: { twitter: '#', linkedin: '#', instagram: '#' }
  },
  {
    name: 'Daphy Abinakyo',
    role: 'Accountant',
    bio: 'Strategic thinker who transforms business objectives into powerful brand positioning.',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: { twitter: '#', linkedin: '#', instagram: '#' }
  },
  {
    name: 'Victor Tumwesigye',
    role: 'Graphics Designer',
    bio: 'Perfectionist who brings artistic vision to life through meticulous attention to detail.',
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: { twitter: '#', linkedin: '#', instagram: '#' }
  }
];

const Team = () => {
  return (
    <section id="team" className="py-32 bg-gradient-to-br from-slate-50 to-red-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent">
              Experts
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our distinguished team of creative professionals brings decades of 
            experience in crafting exceptional brand experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={member.social.twitter}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-slate-700 hover:text-red-900"
                  >
                    <Twitter size={18} />
                  </motion.a>
                  <motion.a
                    href={member.social.linkedin}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-slate-700 hover:text-red-900"
                  >
                    <Linkedin size={18} />
                  </motion.a>
                  <motion.a
                    href={member.social.instagram}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-slate-700 hover:text-red-900"
                  >
                    <Instagram size={18} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-red-900 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white border border-slate-200 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Join our distinguished team
            </h3>
            <p className="text-slate-600 mb-6">
              We're seeking exceptional talent to join our award-winning creative team.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-900 to-red-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all duration-300"
            >
              View Career Opportunities
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;