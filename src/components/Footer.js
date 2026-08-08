import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 border-t border-gray-900" aria-label="Site Footer">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-white font-sans font-bold tracking-widest text-2xl">
              LOGO
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mt-4">
              Premium handcrafted flower arrangements for birthdays, anniversaries, weddings, and every special occasion. 
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-serif tracking-wider uppercase text-sm mb-2">Quick Links</h3>
            <ul className="flex flex-col space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/flowers" className="hover:text-blue-400 transition-colors">Our Collection</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-serif tracking-wider uppercase text-sm mb-2">Contact</h3>
            <address className="not-italic text-sm space-y-3 flex flex-col">
              <span>123 Floral Avenue<br />Boutique District, NY 10001</span>
              <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">+1 (234) 567-890</a>
              <a href="mailto:hello@monscraft.com" className="hover:text-blue-400 transition-colors">hello@monscraft.com</a>
            </address>
          </div>

          {/* Business Hours & Socials */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-serif tracking-wider uppercase text-sm mb-2">Boutique Hours</h3>
            <div className="text-sm space-y-1 text-gray-400">
              <p>Monday - Saturday</p>
              <p className="text-white">9:00 AM - 6:00 PM</p>
              <p className="mt-2">Sunday: Closed</p>
            </div>
          </div>

        </div>

        {/* Copyright & Legal */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Mon&apos;s Craft. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}