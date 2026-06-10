import { motion } from 'motion/react';
import { Target, TrendingUp, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AboutProps {
  isHome?: boolean;
}

export default function About({ isHome }: AboutProps) {
  const stats = [
    { icon: Users, label: 'Certified Coaches', value: '10+' },
    { icon: TrendingUp, label: 'Players Trained', value: '500+' },
    { icon: Target, label: 'Turf Pitches', value: '4' },
    { icon: ShieldCheck, label: 'A/C Indoor Facilities', value: '1' },
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Image Gallery */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative z-10 w-[85%] border border-black/10">
              <img
                src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1974&auto=format&fit=crop"
                alt="Cricket coaching session"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-10 right-0 w-[60%] aspect-square rounded-3xl overflow-hidden border-4 border-white z-20 shadow-[-20px_20px_40px_rgba(0,0,0,0.5)]">
              <img
                src="assets/hero-cover/contact-us-cover.png"
                alt="Batsman in action"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute top-1/2 left-[-5%] w-24 h-24 bg-red-800 rounded-full blur-[60px] opacity-40 z-0"></div>
          </div>

          {/* Right Column: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3">About The Academy</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Crafting Cricketing Excellence from the <span className="text-slate-900">Grassroots.</span>
              </h3>

              <div className="space-y-4 text-slate-500 text-lg mb-10 leading-relaxed">
                <p>
                  Located in the heart of Rajpur Sonarpur, we believe that world-class talent requires world-class infrastructure. Our academy is designed to bridge the gap between amateur passion and professional execution.
                </p>
                <p>
                  With individualized, data-driven player tracking, advanced bowling machines, and elite coaching staff, we focus on technical perfection, mental toughness, and tactical mastery.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="bg-black/5 backdrop-blur-md border border-black/10 rounded-2xl p-6 hover:bg-black/10 transition-colors flex flex-col items-center justify-center text-center">
                      <Icon className="w-8 h-8 text-red-800 mb-3" />
                      <div className="text-3xl font-display font-black text-slate-900 mb-1">{stat.value}</div>
                      <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              {isHome && (
                <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-black/20 hover:border-black/60 bg-black/5 hover:bg-black/10 text-slate-900 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 group">
                  Discover Our Story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
