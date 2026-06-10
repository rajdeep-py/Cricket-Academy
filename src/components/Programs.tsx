import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface ProgramsProps {
  isHome?: boolean;
}

export default function Programs({ isHome }: ProgramsProps) {
  const navigate = useNavigate();
  const tiers = [
    {
      name: 'Junior Mavericks',
      age: 'Ages 6-12',
      price: '₹250',
      period: '/month',
      description: 'Focus on fundamentals, motor skills, and falling in love with the game.',
      features: [
        '3 Sessions per week',
        'Basic technique coaching',
        'Fitness & agility training',
        'Monthly progress reports',
        'Soft ball matches',
      ],
      popular: false,
    },
    {
      name: 'Pro Prospects',
      age: 'Ages 13-19',
      price: '₹450',
      period: '/month',
      description: 'Advanced match simulation, targeted skill refinement, and fitness conditioning.',
      features: [
        '5 Sessions per week',
        'Turf & cement wicket practice',
        'Video analysis sessions',
        'Weekly match practice',
        'Strength & nutrition plans',
      ],
      popular: true,
    },
    {
      name: 'Elite 1-on-1',
      age: 'All Ages',
      price: '₹11,000',
      period: '/month',
      description: 'Personalized masterclasses with senior pro coaches for rapid improvement.',
      features: [
        'Flexible scheduling',
        '1-on-1 dedicated coaching',
        'Biomechanical video analysis',
        'Custom tournament prep',
        'Advanced bowling machine access',
      ],
      popular: false,
    },
  ];

  return (
    <section id="programs" className="py-24 bg-slate-50 relative border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3">Programs & Fees</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Invest in Your Athletic Legacy</h3>
            <p className="text-xl text-slate-500">
              Choose the right tier to match your ambition. From mastering basics to elite professional conditioning.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${tier.popular
                  ? 'bg-gradient-to-b from-black/10 to-red-800/20 border border-red-800/40 shadow-[0_0_30px_rgba(153,27,27,0.1)] md:-translate-y-4'
                  : 'bg-black/5 border border-black/10 hover:bg-black/10'
                }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-red-800 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <p className="text-red-600 text-sm font-semibold mb-2">{tier.age}</p>
                <h4 className="text-2xl font-display font-bold text-slate-900 mb-4">{tier.name}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-slate-500 font-medium">{tier.period}</span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${tier.popular ? 'text-red-800' : 'text-red-600'}`} />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate('/contact')}
                className={`w-full py-4 rounded-full font-bold text-sm transition-all ${tier.popular
                    ? 'bg-red-800 text-white hover:bg-yellow-400'
                    : 'bg-black/10 text-slate-900 hover:bg-black/20'
                  }`}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>

        {isHome && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link to="/programs" className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-black/20 hover:border-black/60 text-slate-900 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 group shadow-xl">
              View Extensive Training Plans
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
