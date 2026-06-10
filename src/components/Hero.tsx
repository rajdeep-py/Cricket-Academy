import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-20 pb-12 overflow-hidden">
      {/* Section Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTftMEs2wdPXS-51REtOMxaONafdo-q6O2TWA&s" 
          alt="Cricket hero" 
          className="w-full h-full object-cover object-top opacity-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="max-w-3xl pt-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-red-600"></span>
            <span className="text-red-600 text-xs font-bold tracking-[0.3em] uppercase">
              Rajpur Sonarpur, West Bengal
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black font-display leading-[0.9] mb-8 uppercase tracking-tighter drop-shadow-2xl">
            <span className="block text-slate-900">Elevate Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">Game.</span>
            <span className="block text-red-800 italic font-medium tracking-tight mt-2 text-5xl md:text-7xl">Dominate the Pitch.</span>
          </h1>
          
          <p className="text-slate-600 text-base md:text-xl max-w-lg leading-relaxed mb-10 font-medium drop-shadow-xl border-l-2 pl-4 border-red-600">
            Train under elite coaches with state-of-the-art facilities designed to build the champions of tomorrow. Your athletic legacy starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">Book a Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center px-8 py-4 border border-black/20 hover:border-black/60 bg-black/5 hover:bg-black/10 backdrop-blur-md text-slate-900 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.1)]"
            >
              Explore Programs
            </Link>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 flex items-center gap-6 backdrop-blur-sm bg-black/5 border border-black/10 p-4 rounded-full w-max shadow-xl"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src={`https://i.pravatar.cc/150?img=${i + 10}`}
                  alt="Player avatar"
                />
              ))}
            </div>
            <div className="text-xs pr-4">
              <div className="flex items-center gap-1 text-red-800 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 font-medium"><span className="text-slate-900 font-bold">500+</span> Players Trained</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
