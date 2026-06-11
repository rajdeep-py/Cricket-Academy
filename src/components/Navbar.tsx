import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Insights', href: '/blog' },
  ];

  return (
    <>
      <div className="fixed top-0 w-full z-50 flex justify-center pt-4 px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-500 rounded-full border ${isScrolled
            ? 'bg-white/70 backdrop-blur-2xl border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-3'
            : 'bg-transparent border-transparent py-4'
            } ${isScrolled ? 'w-full max-w-5xl' : 'w-full max-w-7xl'}`}
        >
          <div className="px-4 md:px-8 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 relative z-50">
              <img
                src="/assets/images/logo.png"
                alt="SIL Cricket Academy Logo"
                className={`transition-all duration-300 object-contain ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'}`}
              />
              <span className={`font-display font-black tracking-tight text-slate-900 transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>
                SIL CRICKET ACADEMY
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 bg-black/5 backdrop-blur-md rounded-full px-6 py-2 border border-black/5 shadow-inner">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className={`text-xs font-bold tracking-widest uppercase transition-all duration-300 relative py-2 block ${isActive ? 'text-red-600' : 'text-slate-500 hover:text-slate-900'
                          }`}
                      >
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="nav-pill"
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 rounded-full"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="hidden md:flex items-center relative z-50">
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-slate-900 text-white hover:bg-red-600 font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:-translate-y-0.5 whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-slate-900 backdrop-blur-md border border-black/10 hover:bg-black/20 transition-all"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl px-6 flex flex-col pointer-events-auto justify-center"
          >
            <div className="flex flex-col gap-8 items-center w-full max-w-sm mx-auto">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-3xl font-display font-black tracking-widest uppercase transition-all ${location.pathname === link.href ? 'text-red-600' : 'text-slate-600 hover:text-slate-900'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="w-full mt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-8 py-4 w-full text-center bg-red-600 text-white font-black text-sm uppercase tracking-widest rounded-full transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)]"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
