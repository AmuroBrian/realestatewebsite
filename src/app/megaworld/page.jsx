  'use client';

  import Image from 'next/image';
  import { useRouter } from 'next/navigation';
  import { motion } from 'framer-motion';
  import { FaRobot, FaEnvelope, FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
  import Link from 'next/link';


  export default function InspireRealEstate() {
    const router = useRouter();
    
    const properties = [
      { name: 'Location Map', img: '/images/XDD.jpg', url: '/MegaA', description: 'Upscale residential high-rise with exclusive facilities' },
      { name: 'Unit Plans', img: '/images/XDD.jpg', url: '/MegaB', description: 'Prestigious living tower featuring luxury comforts' },
    ];
    
 const properties1 = [
      { name: 'Location Map', img: '/images/Arcovia1.jpg', url: '/Arcovia1', description: 'Sophisticated residential building with high-quality features' },
      { name: 'Unit Plans', img: '/images/Arcovia1.jpg', url: '/Arcovia', description: 'Premium housing tower with deluxe services' },
    ];
    const properties2 = [
      { name: 'Location Map', img: '/images/Eastwood.png', url: '/East', description: 'Exclusive residential skyscraper with world-class features' },
      { name: 'Unit Plans', img: '/images/Eastwood.png', url: '/East1', description: 'Stylish condo residence offering premium perks' },
    ];
  const properties3 = [
      { name: 'Location Map', img: '/images/park1.jpg', url: '/ParkTA', description: 'Designer residence featuring premium lifestyle options' },
      { name: 'Unit Plans', img: '/images/park1.jpg', url: '/parkTB', description: 'Refined high-rise housing with elite living standards' },
    ];


    const developments = [
      {
        title: 'Arcovia Palazzo',
        image: '/images/arcovia.png',
        description: `Set to transform the skyline of the city, ArcoVia Palazzo, the second residential development in the 12.3-hectare ArcoVia City township along C-5 Road in Pasig City, will be composed of three residential towers in varying heights: the 40-storey Altea Tower, 45-storey Benissa Tower, and the 49-storey Cantabria Tower.`,
        
      },
      {
        title: 'Eastwood Global Plaza Luxury Residences',
        image: '/images/Eastwood.png',
        description: `Your own space at this 30-storey residential development in Eastwood City. Make your everyday living easier with a home that's conveniently a few steps away from offices and retail and commercial outlets. Indulge yourself and your family with amenities that will make you look forward to weekends and moments at home.`,
        
      },  
      {
        title: 'Park McKinley West',
        image: '/images/park1.jpg',
        description: `Fort Bonifacio in Taguig is an ideal location due to its central position between major business districts like Makati and Ortigas. It is easily accessible via key roads such as C5 and EDSA. The area is known for its safety and security, and it is not prone to flooding. It also hosts several master-planned townships, international schools, shopping malls, and offices of multinational companies..`,
        
      },
      {
        title: 'Gentry Manor',
        image: '/images/XDD.jpg',
        description: `Gentry Manor will soon rise within the 31-hectare Westside City—a sprawling development that is poised to become the Las Vegas of Manila. With convenient access to a world-class leisure and entertainment district, an enviable lifestyle definitely awaits at Gentry Manor.`,
        
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
            <h1 className="text-xl font-bold text-amber-600 tracking-wider">
              INSPIRE MEGAWORLD
            </h1>
            
          </div>
        </header>

        <main className="container mx-auto px-12 py-20">
          {/* Property Developments Sections */}
          {developments.map((dev, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-20 bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              
              {/* Development Header */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center">
                  {dev.title}
                </h2>
              </div>

              {/* Development Content */}
              <div className="grid md:grid-cols-2 gap-10 p-8">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative h-80 md:h-96 rounded-xl shadow-lg overflow-hidden cursor-pointer"
               
                >
                  <Image
                    src={dev.image}
                    alt={dev.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  
                </motion.div>

                <div className="flex flex-col justify-center">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {dev.description}
                  </p>
                 
                </div>
              </div>

              

             
            </motion.section>
          ))}

         
      {/* Arcovia Tower */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden p-8"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-2">
                Arcovia Palazzo Towers
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

          {/* Towers Section2 */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden p-8"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-2">
                Eastwood Global Plaza Luxury Residences Towers
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

          {/* Towers Section3 */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden p-8"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-2">
                Park Mckinley West Towers
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
           {/* Towers Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden p-8"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-2">
                Gentry Manor Towers
              </h2>
              <p className="text-amber-600 max-w-2xl mx-auto">
                Step into our luxury residences and find a place that feels like home
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


      <footer className="bg-orange-200 px-6 py-20 md:px-16 text-black">
  {/* FAQ + Contact Section */}
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
     