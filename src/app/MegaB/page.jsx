'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GentryFloorPlans() {
  const router = useRouter();
  // Group plans by tower
  const towerPlans = {
    'Tower A': [
    
      { title: '1st Executive Studio Floor Plan', image: '/images/ta1.png', link: '/images/ta1.png' },
      { title: '1st Executive Studio Units', image: '/images/taa1.png', link: '/images/taa1.png' },
      { title: '2nd Executive Studio Floor Plan', image: '/images/ta2.png', link: '/images/ta2.png' },
      { title: '2nd Executive Studio Units', image: '/images/taa2.png', link: '/images/taa2.png' },
      { title: '1st Executive 1 Bedroom Floor Plan', image: '/images/ta3.png', link: '/images/ta3.png' },
      { title: '1st Executive 1 Bedroom Units', image: '/images/taa3.png', link: '/images/taa3.png' },

    ],
    'Tower B': [
 
      { title: '1st Executive Studio Floor Plan', image: '/images/tb1.png', link: '/images/tb1.png' },
      { title: '1st Executive Studio Units', image: '/images/tbb1.png', link: '/images/tbb1.png' },
      { title: 'Executive Bedroom and Studio Floor Plan', image: '/images/tb2.png', link: '/images/tb2.png' },
      { title: 'Executive Bedroom and Studio Units', image: '/images/tbb2.png', link: '/images/tbb2.png' },
      { title: 'Executive 2 Bedrooms Floor Plan', image: '/images/tb3.png', link: '/images/tb3.png' },
      { title: 'Executive 2 Bedroom Units', image: '/images/tbb3.png', link: '/images/tbb3.png' },
    ],
    'Tower C': [
      { title: '1st Executive Studio Floor Plan', image: '/images/tc1.png', link: '/images/tc1.png' },
      { title: '1st Executive Studio Units', image: '/images/tcc1.png', link: '/images/tcc1.png' },
      { title: '2nd Executive Studio Floor Plan', image: '/images/tc2.png', link: '/images/tc2.png' },
      { title: '2nd Executive Studio Units', image: '/images/tcc2.png', link: '/images/tcc2.png' },
      { title: '3rd Executive Studio Units', image: '/images/tc3.png', link: '/images/tc3.png' },
      { title: '3rd Executive Studio Floor Plan', image: '/images/tcc3.png', link: '/images/tcc3.png' },
      { title: '1st Executive 1 Bedroom Floor Plan', image: '/images/tc4.png', link: '/images/tc4.png' },
      { title: '1st Executive 1 Bedroom Units', image: '/images/tcc4.png', link: '/images/tcc4.png' },
      { title: '2nd Executive 1 Bedroom Floor Plan', image: '/images/tc5.png', link: '/images/tc5.png' },
      { title: '2nd Executive 1 Bedroom Units', image: '/images/tcc5.png', link: '/images/tcc5.png' },
    ],
    'Tower D': [
    
      { title: '1st Executive 1 Bedroom Floor Plan', image: '/images/td1.png', link: '/images/td1.png' },
      { title: '1st Executive 1 Bedroom Units', image: '/images/tdd1.png', link: '/images/tdd1.png' },
      { title: '1st Executive Studio Floor Plan', image: '/images/td2.png', link: '/images/td2.png' },
      { title: '1st Executive Studio Units', image: '/images/tdd2.png', link: '/images/tdd2.png' },
      { title: '2nd Executive Studio Floor Plan', image: '/images/td3.png', link: '/images/td3.png' },
      { title: '2nd Executive Studio Units', image: '/images/tdd3.png', link: '/images/tdd3.png' },
    ]
    
  };

  // Pagination state for each tower
  const [currentPages, setCurrentPages] = useState({
    'Tower A': 1,
    'Tower B': 1,
    'Tower C': 1,
    'Tower D': 1
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
    <div className="bg-gradient-to-b from-amber-50 to-orange-100 px-6 py-16 sm:px-12 lg:px-24 relative min-h-screen">
      {/* Back Button - Top Left */}
      <motion.button 
        onClick={() => router.back()}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-white hover:bg-amber-50 text-amber-700 hover:text-amber-900 px-4 py-2 rounded-lg shadow-sm transition-all duration-300 border border-amber-200"
        aria-label="Go back"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        <span className="font-medium">Back</span>
      </motion.button>
    <div className="bg-gradient-to-b from-amber-50 to-orange-100 px-6 py-16 sm:px-12 lg:px-24">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-green-800 mb-4 font-serif"
        >
          Gentry Manor Towers
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
     </div>
  );
}