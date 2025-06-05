'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaRobot, FaEnvelope, FaInstagram, FaFacebookF, FaTiktok, FaChevronRight } from "react-icons/fa";

const DEVELOPERS = [
  { 
    name: 'Megaworld', 
    logo: '/images/megaworld.png', 
    url: '/megaworld',
    description: 'Premier township developer with iconic projects',
    featured: true,
    accentColor: 'from-purple-600 to-blue-500'
  },
  { 
    name: 'Ayala Land', 
    logo: '/images/AYALA.png', 
    url: '/ayala',
    description: 'Luxury developments with world-class amenities',
    featured: true,
    accentColor: 'from-green-600 to-emerald-500'
  },
  { 
    name: 'Rockwell', 
    logo: '/images/rockwell.jpg', 
    url: '/Rockwell',
    description: 'Sophisticated urban living at its finest',
    accentColor: 'from-red-600 to-rose-500'
  },
  { 
    name: 'Robinsons Land', 
    logo: '/images/robinson.png', 
    url: '/RLC',
    description: 'Integrated mixed-use developments',
    accentColor: 'from-blue-600 to-cyan-500'
  },
  { 
    name: 'Ortigas Land', 
    logo: '/images/ortigas.jpg', 
    url: '/Ortigas',
    description: 'Historic developer with prime properties',
    accentColor: 'from-amber-600 to-orange-500'
  },
];

export default function RealEstateListing() {
  const router = useRouter();

  const featuredDevelopers = DEVELOPERS.filter(dev => dev.featured);
  const otherDevelopers = DEVELOPERS.filter(dev => !dev.featured);

  const navigateToDeveloper = (url) => {
    if (url !== '#') {
      router.push(url);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => router.push('/')}
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              INSPIRE REAL ESTATE
            </h1>
          </motion.div>
          <div className="flex space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-md text-amber-700 hover:bg-amber-100 transition-all"
              onClick={() => router.push('/login')}
            >
              Log In
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-2 rounded-md transition-all shadow hover:shadow-md"
              onClick={() => router.push('/register')}
            >
              Register
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/90 to-amber-600/90 z-0"></div>
        <div className="relative z-10 container mx-auto px-6 py-15 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-serif text-white drop-shadow-lg"
          >
            Discover Premium Properties
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-amber-100"
          >
            Partner with the Philippines' most trusted real estate developers
          </motion.p>
        </div>
      </section>

      {/* Featured Developers - Now with Larger Images */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-serif"
          >
            Featured Developers
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {featuredDevelopers.map((developer, index) => (
            <motion.div
              key={`featured-${index}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer border border-gray-100 hover:shadow-2xl transition-all duration-300`}
              onClick={() => navigateToDeveloper(developer.url)}
            >
              <div className="flex flex-col h-full">
                <div className={`h-3 bg-gradient-to-r ${developer.accentColor}`}></div>
                <div className="flex flex-col lg:flex-row flex-1">
                  {/* Larger Image Container - Now takes full width on mobile */}
                  <div className="w-full lg:w-1/2 bg-gray-50 flex items-center justify-center p-8 min-h-[300px]">
                    {developer.logo ? (
                      <div className="relative w-full h-full">
                        <Image 
                          src={developer.logo} 
                          alt={developer.name} 
                          fill 
                          className="object-contain p-8" 
                          priority={index < 2}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    ) : (
                      <div className="text-gray-400 text-xl">Coming Soon</div>
                    )}
                  </div>
                  <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{developer.name}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{developer.description}</p>
                    <div className="flex items-center text-amber-600 font-medium group text-lg">
                      <span>Explore Properties</span>
                      <FaChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other Developers - Also with Larger Images */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-serif"
            >
            
            </motion.h2>
            <div className="w-24 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {otherDevelopers.map((developer, index) => (
              <motion.div
                key={`developer-${index}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col`}
                onClick={() => navigateToDeveloper(developer.url)}
              >
                <div className="h-3 bg-gradient-to-r from-gray-300 to-gray-400"></div>
                {/* Larger Image Container */}
                <div className="flex-grow flex items-center justify-center p-8 min-h-[250px] bg-gray-50">
                  {developer.logo ? (
                    <div className="relative w-full h-full">
                      <Image 
                        src={developer.logo} 
                        alt={developer.name} 
                        fill 
                        className="object-contain p-6" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="text-gray-400 text-xl">Coming Soon</div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-4">{developer.name}</h3>
                  <p className="text-gray-600 text-center mb-6 text-lg">{developer.description}</p>
                  <div className="flex justify-center">
                    <button 
                      className={`px-6 py-3 rounded-full text-base font-medium transition-all ${developer.url === '#' ? 
                        'bg-gray-200 text-gray-500 cursor-not-allowed' : 
                        'bg-amber-100 text-amber-700 hover:bg-amber-200 shadow hover:shadow-md'}`}
                      disabled={developer.url === '#'}
                    >
                      {developer.url === '#' ? 'Coming Soon' : 'Explore Properties'}
                    </button>
                  </div>
                </div>  
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our expert agents will help you find the perfect property from these trusted developers.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-200 px-6 py-20 md:px-16 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-black pb-10">
          {/* FAQs */}
          <div className="border-l-0 md:border-l-2 border-black md:pl-8">
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <ul className="space-y-4">
              <li className="cursor-pointer hover:underline">Is there a best time of year to buy a home?</li>
              <li className="cursor-pointer hover:underline">How much should I save for a downpayment?</li>
              <li className="cursor-pointer hover:underline">Do you work with clients in different timezones?</li>
            </ul>
          </div>

          {/* Contact Info + Office Hours */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
              <p className="text-lg hover:underline">info@inspireholdings.ph</p>
              <p className="text-lg hover:underline">inspirenextglobal@gmail.com</p>
            </div>

            <div className="border-l-0 md:border-l-2 border-black md:pl-8">
              <h3 className="text-2xl font-semibold mb-2">Office Hours</h3>
              <p className="text-lg hover:underline">Mon - Fri: 7:00 AM - 10:00 PM</p>
              <p className="text-lg hover:underline">Weekend: Email us anytime!</p>
            </div>
          </div>
        </div>

        {/* Footer Links & Social Icons */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-black pt-10 text-sm">
          {/* Quick Links */}
          <div className="flex flex-wrap gap-6">
            <a href="https://inspireholdings.ph/home" className="hover:underline">Work</a>
            <a href="https://inspireholdings.ph/upcoming-projects" className="hover:underline">Services</a>
            <a href="https://inspireholdings.ph/seminar-1" className="hover:underline">Blog</a>
            <a href="https://inspireholdings.ph/home" className="hover:underline">About</a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Inspire Holdings */}
            <ul className="flex items-center gap-4">
              <li className="font-semibold">Inspire Holdings Inc.</li>
              <li>
                <a href="https://www.instagram.com/inspire.holdings.inc/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://web.facebook.com/inspireholdings" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@inspire.holdings" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">
                  <FaTiktok />
                </a>
              </li>
            </ul>

            {/* Inspire Next Global */}
            <ul className="flex items-center gap-4">
              <li className="font-semibold">Inspire Next Global Inc.</li>
              <li>
                <a href="https://www.instagram.com/inspirenextglobal_inc/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://web.facebook.com/inspirenextglobalinc" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@inspirenextglobal" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500">
                  <FaTiktok />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};