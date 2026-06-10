import { motion } from 'motion/react';
import { Target, Award, Shield, Zap } from 'lucide-react';

export default function WhyJoinUs() {
  const features = [
    {
      icon: Target,
      title: "Data-Driven Approach",
      description: "We use high-speed cameras and bio-mechanical analysis to trace every flaw and master every technique."
    },
    {
      icon: Award,
      title: "Elite Coaching Staff",
      description: "Learn directly from former First-Class cricketers and BCCI certified level 2 & 3 coaches."
    },
    {
      icon: Shield,
      title: "Match Confidence",
      description: "We simulate high-pressure scenarios during practice sessions to ensure you perform when it matters the most."
    },
    {
      icon: Zap,
      title: "State-of-the-art Infrastructure",
      description: "4 turf pitches, fully-equipped A/C indoor nets for monsoon practice, and advanced bowling machines."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-x-0 bottom-0 top-auto h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3">The Elite Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Why Join Our Academy</h3>
            <p className="text-slate-500 text-lg">
              We don't just host net sessions; we architect careers. Discover what sets our methodology apart from the rest.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-black/5 backdrop-blur-md rounded-2xl p-8 border border-black/10 hover:bg-black/10 transition-all text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-slate-800/80 mb-6 flex items-center justify-center text-red-800 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-red-800/20 scale-0 rounded-full group-hover:scale-100 transition-transform"></div>
                  <Icon className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-xl font-bold font-display text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
