'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTiktok, FaChevronRight, FaEnvelope } from "react-icons/fa";
import Link from 'next/link';

const DEVELOPMENTS = [
  {
    title: 'Arcovia Palazzo',
    image: '/images/arcovia.png',
    description: `Set to transform the skyline of the city, ArcoVia Palazzo features three residential towers in varying heights within the 12.3-hectare ArcoVia City township along C-5 Road in Pasig City.`,
    properties: [
      { name: 'Location Map', img: '/images/Arcovia1.jpg', url: '/Arcovia1', description: 'Sophisticated residential building with high-quality features' },
      { name: 'Unit Plans', img: '/images/Arcovia1.jpg', url: '/Arcovia', description: 'Premium housing tower with deluxe services' },
    ],
    accentColor: 'from-amber-600 to-amber-800'
  },
  {
    title: 'Eastwood Global Plaza',
    image: '/images/Eastwood.png',
    description: `Your own space at this 30-storey residential development in Eastwood City, conveniently located steps away from offices, retail, and commercial outlets with family-friendly amenities.`,
    properties: [
      { name: 'Location Map', img: '/images/Eastwood.png', url: '/East', description: 'Exclusive residential skyscraper with world-class features' },
      { name: 'Unit Plans', img: '/images/Eastwood.png', url: '/East1', description: 'Stylish condo residence offering premium perks' },
    ],
    accentColor: 'from-amber-600 to-amber-800'
  },
  {
    title: 'Park McKinley West',
    image: '/images/park1.jpg',
    description: `Ideally located in Fort Bonifacio, Taguig between major business districts, this development offers safety, security, and accessibility via C5 and EDSA with master-planned amenities.`,
    properties: [
      { name: 'Location Map', img: '/images/park1.jpg', url: '/ParkTA', description: 'Designer residence featuring premium lifestyle options' },
      { name: 'Unit Plans', img: '/images/park1.jpg', url: '/parkTB', description: 'Refined high-rise housing with elite living standards' },
    ],
    accentColor: 'from-amber-600 to-amber-800'
  },
  {
    title: 'Gentry Manor',
    image: '/images/XDD.jpg',
    description: `Rising within the 31-hectare Westside City development poised to become Manila's entertainment district, offering convenient access to world-class leisure and lifestyle amenities.`,
    properties: [
      { name: 'Location Map', img: '/images/XDD.jpg', url: '/MegaA', description: 'Upscale residential high-rise with exclusive facilities' },
      { name: 'Unit Plans', img: '/images/XDD.jpg', url: '/MegaB', description: 'Prestigious living tower featuring luxury comforts' },
    ],
    accentColor: 'from-amber-600 to-amber-800'
  }
];

export default function InspireRealEstate() {
  const router = useRouter();

 const handleNavigation = (url) => 
    router.push(url);

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
              INSPIRE MEGAWORLD
            </h1>
          </motion.div>
          
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-12 py-12 md:py-20">
        {DEVELOPMENTS.map((dev, index) => (
          <motion.section 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-20 bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Development Header */}
            <div className={`bg-gradient-to-r ${dev.accentColor} p-6`}>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-white text-center">
                {dev.title}
              </h2>
            </div>

            {/* Development Content */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 p-6 md:p-10">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative h-64 md:h-96 rounded-xl shadow-lg overflow-hidden cursor-pointer"
             
              >
                <Image
                  src={dev.image}
                  alt={dev.title}
                  fill
                  className="object-cover"
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              <div className="flex flex-col justify-center p-4">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {dev.description}
                </p>
               
              </div>
            </div>

            {/* Property Cards */}
            <div className="p-6 md:p-10">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-green-800 mb-2">
                  {dev.title.split(' ')[0]} Towers
                </h3>
                <p className="text-amber-600 max-w-2xl mx-auto">
                  {index % 2 === 0 
                    ? "View our high-end tower options and select your future home"
                    : "Browse our luxurious towers and uncover your dream residence"}
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-10">
                {dev.properties.map((property, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -10 }}
                    className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg w-full md:w-96 min-h-[420px] flex flex-col"
                  >
                    <div className="relative h-60 w-full cursor-pointer flex-shrink-0">
                      <Image
                        src={property.img}
                        alt={property.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                        <h3 className="text-white font-semibold text-xl">{property.name}</h3>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between flex-1 p-6">
                      <p className="text-gray-600 mb-6">{property.description}</p>
                      <button
                        onClick={() => handleNavigation(property.url)}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-md transition-all flex items-center justify-center"
                      >
                        View Details <FaChevronRight className="ml-2" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        ))}
      </main>

      {/* Premium Footer */}
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

            {/* Contact Info */}
            <div className="flex flex-col gap-8">
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

              <div className="md:border-l-2 border-[#d5ae85] md:pl-8">
                <h3 className="text-2xl font-semibold mb-4 hover:text-amber-400 transition-colors">Office Hours</h3>
                <p className="text-lg">Monday to Friday: 7:00 AM - 10:00 PM</p>
                <p className="text-lg">Weekends: Email inquiries only</p>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 gap-6">
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
          </div>
        </div>
      </footer>
    </div>
  );
}