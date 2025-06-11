'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GentryFloorPlans() {
  const plans = [
   
    {
      title: '3rd Floor Amenity Floor Plan',
      image: '/images/q1.jpg',
      link: '/images/q1.jpg',
  
    },
    {
      title: '5th Floor Amenity Floor Plan',
      image: '/images/q2.jpg',
      link: '/images/q2.jpg',
     
    },
     {
      title: '45th Floor - Skyclub',
      image: '/images/q3.jpg',
      link: '/images/q3.jpg',
     
    },
     {
     title: '1 Bedroom 6th to 39th Floor',
      image: '/images/q4.jpg',
      link: '/images/q4.jpg',
     
    },
     {
      title: 'One Bedroom Executive',
      image: '/images/q5.jpg',
      link: '/images/q5.jpg',
     
    },
     {
      title: 'One Bedroom Delux',
      image: '/images/q6.jpg',
      link: '/images/q6.jpg',
     
    },
     {
      title: 'One Bedroom Premium',
      image: '/images/q7.jpg',
      link: '/images/q7.jpg',
     
    },
     {
      title: '2 Bedroom 6th to 39th Floor',
      image: '/images/q8.jpg',
      link: '/images/q8.jpg',
     
    },
     {
      title: '2 Bedroom Suite',
      image: '/images/q9.jpg',
      link: '/images/q9.jpg',
     
    },
     {
      title: '3 Bedroom 40th to 42nd Floor',
      image: '/images/q10.jpg',
      link: '/images/q10.jpg',
     
    },
     {
      title: '3 Bedroom Suite',
      image: '/images/q11.jpg',
      link: '/images/q11.jpg',
     
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
    <div className="bg-gradient-to-b from-amber-50 to-orange-100 px-6 py-16 sm:px-12 lg:px-24">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-green-800 mb-4 font-serif"
        >
          The Velaris Residence
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
        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
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
                <div className="p-6 flex-grow flex flex-col">
                  
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
  );
}