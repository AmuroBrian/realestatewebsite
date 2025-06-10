'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';



export default function GentryFloorPlans() {
  const router = useRouter();
  const plans = [
    {
      title: 'Location Map',
      image: '/images/gal1.jpg',
      link: '/images/gal1.jpg',
     

    },
    {
      title: 'Location Map',
      image: '/images/gal2.jpg',
      link: '/images/gal2.jpg',
     

    },
     
  ];

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
         The Galleon Informations
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

      {/* Floor Plans Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex justify-center items-center gap-12 "
      >
        {plans.map((plan, index) => (
          <motion.div 
            key={index}
            variants={item}
            whileHover={{ y: -10 }}
            className="group"
          >
            <Link href={plan.link} className="block h-full">
            
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl h-full flex flex-col">
                {/* Image Container with Shine Effect */}
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
                <div className="flex justify-center items-center p-8 gap-10">
                  
                  <h3 className="text-xl font-bold text-green-800 mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{plan.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-amber-600 font-medium">Click to for more information</span>
                    
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                     
                    </div>
                  </div>
                </div>
              </div>
              
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-16"
      >
      
      </motion.div>
    </div>
    </div>
  );
}