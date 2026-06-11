import { Trophy, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-500 py-12 border-t border-black/5 text-sm z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img
                src="/assets/images/logo.png"
                alt="SIL Cricket Academy Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-display font-black text-xl tracking-tight text-slate-900">
                SIL CRICKET <span className="text-red-600">ACADEMY</span>
              </span>
            </Link>
            <p className="max-w-md mb-6 leading-relaxed">
              Elevating the standard of cricket coaching in West Bengal. Building the technical foundation, mental fortitude, and athletic prowess of tomorrow's champions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 font-display">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-red-800 transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-red-800 transition-colors">Programs & Fees</Link></li>
              <li><Link to="/blog" className="hover:text-red-800 transition-colors">Academy Blog</Link></li>
              <li><Link to="/contact" className="hover:text-red-800 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 font-display">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="hover:text-red-800 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-red-800 transition-colors">Terms of Service</Link></li>
              <li><a href="#" className="hover:text-red-800 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-red-800 transition-colors">COVID-19 Guidelines</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-black/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} SIL CRICKET ACADEMY Academy, Rajpur Sonarpur. All rights reserved.</p>
          <p>Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
