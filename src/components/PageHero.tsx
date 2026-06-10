import { motion } from 'motion/react';
import FallingText from './FallingText';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[60svh] flex flex-col pt-32 pb-12 overflow-hidden">
      {/* Section Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grow flex flex-col">
        <FallingText trigger="click" className="w-full grow flex flex-col justify-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6 word inline-flex">
              <span className="h-[2px] w-8 bg-red-600"></span>
              <span className="text-red-600 text-xs font-bold tracking-[0.3em] uppercase">
                {subtitle}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black font-display leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl text-slate-900 flex flex-col items-start word">
              {title}
            </h1>
          </motion.div>
        </FallingText>
      </div>
    </section>
  );
}
