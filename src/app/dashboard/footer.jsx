{/* FOOTER */}
<footer className="bg-amber-600 text-white mt-20">
  <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
    {/* Logo + Description */}
    <div>
      <h2 className="text-lg font-bold mb-2">Inspire Real Estate</h2>
      <p className="text-sm">
        Helping you find your perfect home with trusted developers across the Philippines.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-md font-semibold mb-2">Quick Links</h3>
      <ul className="space-y-1 text-sm">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/about" className="hover:underline">About Us</Link></li>
        <li><Link href="/listings" className="hover:underline">Listings</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-md font-semibold mb-2">Contact</h3>
      <p className="text-sm">📍 Metro Manila, Philippines</p>
      <p className="text-sm">📞 +63 912 345 6789</p>
      <p className="text-sm">✉️ info@inspireph.com</p>
    </div>
  </div>

  <div className="bg-amber-700 text-center text-sm py-4">
    &copy; {new Date().getFullYear()} Inspire Real Estate. All rights reserved.
  </div>
</footer>
