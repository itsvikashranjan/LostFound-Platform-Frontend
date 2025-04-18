import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'


const About = () => {
  const [activeSection, setActiveSection] = useState('vision');

  const sections = [
    { id: 'vision', label: 'Our Vision' },
    { id: 'workflow', label: 'How It Works' },
    { id: 'trust', label: 'Why Trust Us' },
  ];

  const visionContent = {
    title: "Our Vision",
    description: "We envision a world where no lost item remains unfound, where communities come together to help each other, and where technology serves as a bridge between people and their belongings.",
    points: [
      {
        icon: "🌍",
        title: "Global Community",
        description: "Building a worldwide network of helpful individuals"
      },
      {
        icon: "💡",
        title: "Innovation",
        description: "Leveraging technology to make reunions possible"
      },
      {
        icon: "🤝",
        title: "Trust",
        description: "Creating a safe and reliable platform for everyone"
      }
    ]
  };

  const workflowContent = {
    title: "How We Work",
    description: "Our streamlined process ensures efficient matching and secure communication between users.",
    steps: [
      {
        icon: "📝",
        title: "Report",
        description: "Users report lost or found items with details and photos"
      },
      {
        icon: "🔍",
        title: "Match",
        description: "Our AI system matches similar items automatically"
      },
      {
        icon: "💬",
        title: "Connect",
        description: "Secure messaging system connects users"
      },
      {
        icon: "✅",
        title: "Verify",
        description: "Verification process ensures safe returns"
      }
    ]
  };

  const trustContent = {
    title: "Why Trust Us",
    description: "We've built our platform on the foundation of trust, security, and community.",
    features: [
      {
        icon: "🔒",
        title: "Secure Communication",
        description: "End-to-end encrypted messaging system"
      },
      {
        icon: "👥",
        title: "Verified Users",
        description: "Community of trusted members"
      },
      {
        icon: "📊",
        title: "Success Rate",
        description: "Thousands of successful reunions"
      }
    ],
    testimonials: [
      {
        quote: "I thought I'd never see my grandmother's necklace again. Thanks to this platform, it's back with me!",
        author: "Sarah M.",
        role: "Happy User"
      },
      {
        quote: "Found a wallet and returned it within hours. The system works amazingly well!",
        author: "John D.",
        role: "Community Member"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-emerald-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-emerald-500/10" />
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Every Lost Item Has a Story.<br />
              <span className="text-indigo-600">We Help You Find Yours.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 max-w-2xl mx-auto text-xl text-gray-600"
            >
              A community-driven platform connecting people with their lost possessions through trust, technology, and human connection.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveSection(section.id)}
              className={`w-48 px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {section.label}
            </motion.button>
          ))}
        </div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            {activeSection === 'vision' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900">{visionContent.title}</h2>
                <p className="text-xl text-gray-600">{visionContent.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {visionContent.points.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-gray-50 p-6 rounded-xl"
                    >
                      <div className="text-4xl mb-4">{point.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
                      <p className="mt-2 text-gray-600">{point.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'workflow' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900">{workflowContent.title}</h2>
                <p className="text-xl text-gray-600">{workflowContent.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {workflowContent.steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-gray-50 p-6 rounded-xl"
                    >
                      <div className="text-4xl mb-4">{step.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="mt-2 text-gray-600">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'trust' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900">{trustContent.title}</h2>
                <p className="text-xl text-gray-600">{trustContent.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {trustContent.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-gray-50 p-6 rounded-xl"
                    >
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <p className="mt-2 text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What Our Users Say</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {trustContent.testimonials.map((testimonial, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-gray-50 p-6 rounded-xl"
                      >
                        <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                        <div className="mt-4">
                          <p className="font-semibold text-gray-900">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Ready to Get Started?</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community and help make a difference in someone's life today
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-48 px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
            >
             <Link to="/report">Report Lost Item</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-48 px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
            >
              <Link to="/reporteditem">Search Found Item</Link>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
