'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function GentryFloorPlans() {
  // Group plans by tower
  const towerPlans = {
    'Building Floor Plan': [
      { title: 'Park View Level 7', image: '/images/e1.jpg', link: '/images/e1.jpg' },
      { title: 'Park View Level 8-21', image: '/images/e2.jpg', link: '/images/e2.jpg' },
      { title: 'Park View Level 22-37', image: '/images/e3.jpg', link: '/images/e3.jpg' },
      { title: 'Park View Level 38-41', image: '/images/e4.jpg', link: '/images/e4.jpg' },
      { title: 'Park View Level 42', image: '/images/e5.jpg', link: '/images/e5.jpg' },
      { title: 'Park View Level 43-53', image: '/images/e6.jpg', link: '/images/e6.jpg' },
      { title: 'Park View Level 54, 56, and 58', image: '/images/e7.jpg', link: '/images/e7.jpg' },
      { title: 'Park View Level 55, 57, and 59', image: '/images/e8.jpg', link: '/images/e8.jpg' },
      { title: 'Features', image: '/images/ee.jpg', link: '/images/ee.jpg' },

      
    ],
    'Unit Floor Plans': [
      { title: 'Studio Unit Layout', image: '/images/ee1.jpg', link: '/images/ee1.jpg' },
      { title: '1 Bedroom Unit Layout', image: '/images/ee2.jpg', link: '/images/ee2.jpg' },
      { title: '1 Bedroom Unit Layout', image: '/images/ee3.jpg', link: '/images/ee3.jpg' },
      { title: '2 Bedroom Unit Layout', image: '/images/ee4.jpg', link: '/images/ee4.jpg' },
      { title: '3 Bedroom Flat Unit Layout', image: '/images/ee5.jpg', link: '/images/ee5.jpg' },
      { title: '3 Bedroom Bi-level Unit Layout', image: '/images/ee6.jpg', link: '/images/ee6.jpg' },
     { title: 'Features', image: '/images/ee.jpg', link: '/images/ee.jpg' },
    ]
    
  };

  // Pagination state for each tower
  const [currentPages, setCurrentPages] = useState({
    'Building Floor Plan': 1,
    'Unit Floor Plans': 1
    
  });
  
  const plansPerPage = 3; // Show 3 plans per page

  // Change page for specific tower
  const paginate = (tower, pageNumber) => {
    setCurrentPages(prev => ({
      ...prev,
      [tower]: pageNumber
    }));
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-amber-50 to-orange-100 px-6 py-16 sm:px-12 lg:px-24">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-green-800 mb-4 font-serif"
        >
          Empress at Capitol Commons
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-amber-800 max-w-2xl mx-auto"
        >
          Explore our premium residential tower configurations and find your perfect space
        </motion.p>
      </div>

      {/* Tower Sections */}
      {Object.entries(towerPlans).map(([towerName, plans]) => {
        const currentPage = currentPages[towerName];
        const indexOfLastPlan = currentPage * plansPerPage;
        const indexOfFirstPlan = indexOfLastPlan - plansPerPage;
        const currentPlans = plans.slice(indexOfFirstPlan, indexOfLastPlan);

        return (
          <section key={towerName} className="mb-20">
            {/* Tower Header */}
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-green-700 font-serif">
                {towerName}
              </h3>
            </div>

            {/* Floor Plans Grid */}
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8"
            >
              {currentPlans.map((plan, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Link href={plan.link} className="block h-full">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl h-full flex flex-col">
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={plan.image}
                          alt={plan.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                        <div className="absolute bottom-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          View Details →
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-green-800 mb-2">{plan.title}</h3>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-amber-600 font-medium">Click for more information</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
              <nav className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={() => paginate(towerName, currentPage > 1 ? currentPage - 1 : 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-700 text-white'}`}
                >
                  Previous
                </button>

                {/* Page Numbers */}
                {Array.from({ length: Math.ceil(plans.length / plansPerPage) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(towerName, index + 1)}
                    className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-green-700 text-white' : 'bg-white hover:bg-gray-100'}`}
                  >
                    {index + 1}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => paginate(towerName, currentPage < Math.ceil(plans.length / plansPerPage) ? currentPage + 1 : currentPage)}
                  disabled={currentPage === Math.ceil(plans.length / plansPerPage)}
                  className={`px-4 py-2 rounded-md ${currentPage === Math.ceil(plans.length / plansPerPage) ? 'bg-gray-200 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-700 text-white'}`}
                >
                  Next
                </button>
              </nav>
            </div>

            {/* Page Info */}
            <div className="text-center mt-2 text-gray-600">
              Showing plans {indexOfFirstPlan + 1}-{Math.min(indexOfLastPlan, plans.length)} of {plans.length} in {towerName}
            </div>
          </section>
        );
      })}
    </div>
  );
}