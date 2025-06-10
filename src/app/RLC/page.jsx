'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaRobot, FaEnvelope, FaInstagram, FaFacebookF, FaTiktok, FaChevronRight } from "react-icons/fa";

export default function InspireRealEstate() {
  const router = useRouter();

  const properties1 = [
    { name: 'Location Map', img: '/images/zxc1.jpg', url: '/Sierra1', description: 'Sophisticated residential building with high-quality features' },
    { name: 'Unit Plans', img: '/images/zxc1.jpg', url: '/Sierra', description: 'Premium housing tower with deluxe services' },
  ];
  
  const properties2 = [
    { name: 'Location Map', img: '/images/ap1.jpg', url: 'Sapphire1', description: 'Exclusive residential skyscraper with world-class features' },
    { name: 'Unit Plans', img: '/images/ap1.jpg', url: '/Sapphire', description: 'Stylish condo residence offering premium perks' },
  ];
  
  const properties3 = [
    { name: 'Location Map', img: '/images/vel1.jpg', url: '/Velaris1', description: 'Designer residence featuring premium lifestyle options' },
    { name: 'Unit Plans', img: '/images/vel1.jpg', url: '/Velaris', description: 'Refined high-rise housing with elite living standards' },
  ];

  const developments = [
    {
      title: 'Sierra Valley Gardens',
      image: '/images/sie.jpg',
      description: `Sierra Valley Gardens is a 16-story condominium that offers stunning views of the city skyline and provides exceptional accessibility to key locations throughout Cainta, Rizal.

Developed by Robinsons Land, Sierra Valley Gardens is designed to deliver a well-rounded and enjoyable lifestyle within a thoughtfully planned community. Residents can look forward to a refined living environment that nurtures both individuality and dynamic living, all just moments away from the vibrant pace of Cainta's urban core.`,
    },
    {
      title: 'The Sapphire Bloc',
      image: '/images/sap.jpg',
      description: `Enjoy ultimate comfort and convenience at The Sapphire Bloc, where residents are offered a variety of options to match every lifestyle. As all four towers near completion, a diverse range of amenities will be available to support any activity—whether it's relaxation, exercise, or quality time with loved ones.

From peaceful spots for unwinding to fully equipped fitness centers and social spaces for gathering with family and friends, The Sapphire Bloc is thoughtfully designed to enhance everyday living. No matter how you choose to spend your time at home, this community delivers both comfort and accessibility for all.`,
    },
    {
      title: 'The Velaris Residence',
      image: '/images/vel.jpg',
      description: `The Velaris Residences emerges in Philippine real estate as the pilot project of RHK Land Corporation, a joint venture of local real estate expert Robinsons Land Corporation and international property development leader Hongkong Land Group.
A noteworthy collaboration, RHK bridges local expertise and international award-winning design to create a true masterpiece. The grandeur of The Velaris Residences is the first in a decidedly sustained showcase of the two companies' shared vision and experience.`,
    },
  ];

  const handleNavigation = (url) => {
    router.push(url);
  };

  return (
    <div className="bg-gradient-to-b from-amber-50 to-orange-100">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => router.push('/')}
          >
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              INSPIRE ROBINSONS LAND CORPORATION
            </h1>
          </motion.div>
        </div>
      </header>


      <main className="container mx-auto px-12 py-20">
        {/* Sierra Valley Gardens */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Development Header */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center">
              Sierra Valley Gardens
            </h2>
          </div>

          {/* Development Content */}
          <div className="grid md:grid-cols-2 gap-10 p-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-80 md:h-96 rounded-xl shadow-lg overflow-hidden cursor-pointer"
            >
              <Image
                src="/images/sie.jpg"
                alt="Sierra Valley Gardens"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <div className="flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed mb-6">
                Sierra Valley Gardens is a 16-story condominium that offers stunning views of the city skyline and provides exceptional accessibility to key locations throughout Cainta, Rizal.

                Developed by Robinsons Land, Sierra Valley Gardens is designed to deliver a well-rounded and enjoyable lifestyle within a thoughtfully planned community. Residents can look forward to a refined living environment that nurtures both individuality and dynamic living, all just moments away from the vibrant pace of Cainta's urban core.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Sierra Valley Gardens Towers */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-2">
              Sierra Valley Gardens
            </h2>
            <p className="text-amber-600 max-w-2xl mx-auto">
              View our high-end tower options and select your future home
            </p>
          </div>

          <div className="flex justify-center items-stretch p-8 gap-10">
            {properties1.map((tower, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg w-80 min-h-[400px] flex flex-col justify-between"
              >
                <div className="relative h-48 w-full cursor-pointer">
                  <Image
                    src={tower.img}
                    alt={tower.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                    <h3 className="text-white font-semibold text-lg">{tower.name}</h3>
                  </div>
                </div>

                <div className="flex flex-col justify-between flex-1 p-4">
                  <p className="text-gray-600 text-sm mb-4">{tower.description}</p>
                  <button
                    onClick={() => handleNavigation(tower.url)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md transition-all mt-auto"
                  >
                    Click Here
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* The Sapphire Bloc */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Development Header */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center">
              The Sapphire Bloc
            </h2>
          </div>

          {/* Development Content */}
          <div className="grid md:grid-cols-2 gap-10 p-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-80 md:h-96 rounded-xl shadow-lg overflow-hidden cursor-pointer"
            >
              <Image
                src="/images/sap.jpg"
                alt="The Sapphire Bloc"
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed mb-6">
                Enjoy ultimate comfort and convenience at The Sapphire Bloc, where residents are offered a variety of options to match every lifestyle. As all four towers near completion, a diverse range of amenities will be available to support any activity—whether it's relaxation, exercise, or quality time with loved ones.

                From peaceful spots for unwinding to fully equipped fitness centers and social spaces for gathering with family and friends, The Sapphire Bloc is thoughtfully designed to enhance everyday living. No matter how you choose to spend your time at home, this community delivers both comfort and accessibility for all.
              </p>
            </div>
          </div>
        </motion.section>

        {/* The Sapphire Bloc Towers */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-2">
              The Sapphire Bloc
            </h2>
            <p className="text-amber-600 max-w-2xl mx-auto">
              Browse our luxurious towers and uncover your dream residence
            </p>
          </div>

          <div className="flex justify-center items-stretch p-8 gap-10">
            {properties2.map((tower, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg w-80 min-h-[400px] flex flex-col justify-between"
              >
                <div className="relative h-48 w-full cursor-pointer">
                  <Image
                    src={tower.img}
                    alt={tower.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                    <h3 className="text-white font-semibold text-lg">{tower.name}</h3>
                  </div>
                </div>

                <div className="flex flex-col justify-between flex-1 p-4">
                  <p className="text-gray-600 text-sm mb-4">{tower.description}</p>
                  <button
                    onClick={() => handleNavigation(tower.url)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md transition-all mt-auto"
                  >
                    Click Here
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* The Velaris Residence */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Development Header */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center">
              The Velaris Residence
            </h2>
          </div>

          {/* Development Content */}
          <div className="grid md:grid-cols-2 gap-10 p-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-80 md:h-96 rounded-xl shadow-lg overflow-hidden cursor-pointer"
            >
              <Image
                src="/images/vel.jpg"
                alt="The Velaris Residence"
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed mb-6">
                The Velaris Residences emerges in Philippine real estate as the pilot project of RHK Land Corporation, a joint venture of local real estate expert Robinsons Land Corporation and international property development leader Hongkong Land Group.
                A noteworthy collaboration, RHK bridges local expertise and international award-winning design to create a true masterpiece. The grandeur of The Velaris Residences is the first in a decidedly sustained showcase of the two companies' shared vision and experience.
              </p>
            </div>
          </div>
        </motion.section>

        {/* The Velaris Residence Towers */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden p-8"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-2">
              The Velaris Residence
            </h2>
            <p className="text-amber-600 max-w-2xl mx-auto">
              Experience upscale living in our premier towers and settle into your perfect space
            </p>
          </div>

          <div className="flex justify-center items-stretch p-8 gap-10">
            {properties3.map((tower, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg w-80 min-h-[400px] flex flex-col justify-between"
              >
                <div className="relative h-48 w-full cursor-pointer">
                  <Image
                    src={tower.img}
                    alt={tower.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                    <h3 className="text-white font-semibold text-lg">{tower.name}</h3>
                  </div>
                </div>

                <div className="flex flex-col justify-between flex-1 p-4">
                  <p className="text-gray-600 text-sm mb-4">{tower.description}</p>
                  <button
                    onClick={() => handleNavigation(tower.url)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md transition-all mt-auto"
                  >
                    Click Here
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="bg-amber-600 px-6 py-20">
        <div className="container mx-auto">
          {/* FAQ + Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-[#333] pb-16">
            
            {/* FAQs */}
            <div className="md:border-l-2 border-[#d5ae85] md:pl-8">
              <h2 className="text-2xl font-semibold mb-6 hover:text-amber-400 transition-colors">FAQs</h2>
              <ul className="space-y-4">
                {[
                  "Is there a best time of year to buy a home?",
                  "How much should I save for a downpayment?",
                  "Do you work with international clients?",
                  "What makes your service different?"
                ].map((question, idx) => (
                  <motion.li 
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="cursor-pointer hover:text-amber-400 transition-colors flex items-center"
                  >
                    <FaChevronRight className="mr-3 text-amber-400 text-xs" />
                    {question}
                  </motion.li>
                ))}
              </ul>
            </div>
      
            {/* Contact Info, Office Hours, Work Address */}
            <div className="flex flex-col gap-8">
              
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 hover:text-amber-400 transition-colors">Contact Us</h3>
                <div className="flex items-start mb-4">
                  <FaEnvelope className="text-amber-400 mt-1 mr-4" />
                  <div>
                    <p className="text-lg hover:text-amber-300 transition-colors">info@inspireholdings.ph</p>
                    <p className="text-lg hover:text-amber-300 transition-colors">inspirenextglobal@gmail.com</p>
                  </div>
                </div>
              </div>
      
              {/* Office Hours */}
              <div className="md:border-l-2 border-[#d5ae85] md:pl-8">
                <h3 className="text-2xl font-semibold mb-4 hover:text-amber-400 transition-colors">Office Hours</h3>
                <p className="text-lg">Monday to Friday: 7:00 AM - 10:00 PM</p>
                <p className="text-lg">Weekends: Email inquiries only</p>
              </div>
      
              {/* Work Address */}
              <div className="md:border-l-2 border-[#d5ae85] md:pl-8">
                <h3 className="text-2xl font-semibold mb-4 hover:text-amber-400 transition-colors">Work Address</h3>
                <p className="text-lg">MAIN OFFICE: 6F Alliance Global Tower, 11th Avenue, corner 36th St, Taguig, Metro Manila</p>
                <p className="text-lg">SATELLITE OFFICE:
      1209 Mountain Road PL NE STE N Bernalillo County Albuquerque, NM, 87110, USA</p>
                <p className="text-lg">SATELLITE OFFICE:
      20th floor, Trust Tower Main Building, 1-8-3 Marunouchi, Chiyoda-ku, Tokyo 100-8283</p>
              </div>
      
            </div>
          </div>
      
          {/* Footer Links & Socials */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 gap-6">
            
            {/* Links */}
            <div className="flex flex-wrap gap-6">
              {['Work', 'Services', 'Blog', 'About'].map((item, idx) => (
                <motion.a 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  href="#" 
                  className="hover:text-amber-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
      
            {/* Social Links */}
            <div className="flex flex-col md:flex-row gap-10">
              
              {/* Inspire Holdings */}
              <div className="flex flex-col items-center md:items-start">
                <h4 className="font-medium mb-3">Inspire Holdings Inc.</h4>
                <div className="flex space-x-4 text-xl">
                  {[
                    { icon: <FaInstagram />, url: "https://www.instagram.com/inspire.holdings.inc/" },
                    { icon: <FaFacebookF />, url: "https://web.facebook.com/inspireholdings" },
                    { icon: <FaTiktok />, url: "https://www.tiktok.com/@inspire.holdings" }
                  ].map((social, idx) => (
                    <motion.a 
                      key={idx}
                      whileHover={{ y: -3 }}
                      href={social.url} 
                      target="_blank" 
                      className="hover:text-amber-400 transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
      
              {/* Inspire Next Global */}
              <div className="flex flex-col items-center md:items-start">
                <h4 className="font-medium mb-3">Inspire Next Global Inc.</h4>
                <div className="flex space-x-4 text-xl">
                  {[
                    { icon: <FaInstagram />, url: "https://www.instagram.com/inspirenextglobal_inc/" },
                    { icon: <FaFacebookF />, url: "https://web.facebook.com/inspirenextglobalinc" },
                    { icon: <FaTiktok />, url: "https://www.tiktok.com/@inspirenextglobal" }
                  ].map((social, idx) => (
                    <motion.a 
                      key={idx}
                      whileHover={{ y: -3 }}
                      href={social.url} 
                      target="_blank" 
                      className="hover:text-amber-400 transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-amber-500/30 text-amber-100 text-sm">
            <p>© {new Date().getFullYear()} Inspire Holdings Inc. All rights reserved.</p>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}