import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, X, Send } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface ProgramsProps {
  isHome?: boolean;
}

interface Tier {
  name: string;
  age: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export default function Programs({ isHome }: ProgramsProps) {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<Tier | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', experience: 'Beginner' });

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPlan(null);
        setFormSubmitted(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedPlan) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPlan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setSelectedPlan(null);
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', experience: 'Beginner' });
    }, 3500); // Auto close after 3.5 seconds
  };
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
                onClick={() => setSelectedPlan(tier)}
                className={`w-full py-4 rounded-full font-bold text-sm transition-all cursor-pointer hover:scale-105 active:scale-95 ${tier.popular
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

      {/* Premium Pricing Plan Modal */}
      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/70 backdrop-blur-md overflow-y-auto animate-fade-in"
            onClick={() => {
              setSelectedPlan(null);
              setFormSubmitted(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[90vh] md:h-[75vh] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Column: Plan Summary */}
              <div className="md:w-5/12 bg-slate-950 text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
                {/* Background glow effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-800/20 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10">
                  <span className="bg-red-800 border border-red-600/30 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                    Selected Tier
                  </span>
                  <h3 className="text-3xl font-display font-bold mt-6 text-white leading-tight">
                    {selectedPlan.name}
                  </h3>
                  <p className="text-red-500 text-xs font-semibold tracking-wider mt-1 uppercase">
                    {selectedPlan.age}
                  </p>

                  <div className="flex items-baseline gap-1 mt-8 mb-6">
                    <span className="text-5xl font-black text-white">{selectedPlan.price}</span>
                    <span className="text-slate-400 text-sm font-medium">{selectedPlan.period}</span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-8">
                    {selectedPlan.description}
                  </p>

                  <hr className="border-white/10 my-6" />

                  <ul className="space-y-4">
                    {selectedPlan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                        <Check className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 mt-8 text-xs text-slate-500">
                  Secure Callback Registry • Cricket Academy
                </div>
              </div>

              {/* Right Column: Interaction Form or Success Message */}
              <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-slate-50 relative">
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.div
                      key="form-view"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      <h4 className="text-2xl font-display font-bold text-slate-900 mb-2">
                        Get Started Today
                      </h4>
                      <p className="text-slate-500 text-sm mb-8">
                        Register your details to request a callback & book your free trial slot.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-slate-900 text-sm font-sans focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                            placeholder="e.g. Rahul Sharma"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-slate-900 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                              placeholder="e.g. +91 98765 43210"
                            />
                          </div>
                          <div>
                            <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-slate-900 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                              placeholder="e.g. name@example.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
                            Experience Level
                          </label>
                          <select
                            value={formData.experience}
                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-slate-900 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all cursor-pointer"
                          >
                            <option value="Beginner">Beginner (Soft Ball / No Academy Play)</option>
                            <option value="Intermediate">Intermediate (Played Leather Ball / Club)</option>
                            <option value="Advanced">Advanced (Played District / State Trials)</option>
                          </select>
                        </div>

                        <button
                          type="submit"
                          className="w-full mt-6 py-4 bg-red-600 hover:bg-slate-950 text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg hover:shadow-red-800/10"
                        >
                          Request Callback
                          <Send className="w-4 h-4" />
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success-view"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-8 flex flex-col items-center justify-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-6 shadow-xl shadow-emerald-500/5">
                        <Check className="w-10 h-10 stroke-[3]" />
                      </div>
                      <h4 className="text-3xl font-display font-black text-slate-900 mb-3">
                        Request Registered!
                      </h4>
                      <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                        Thank you, <strong className="text-slate-800">{formData.name}</strong>. Our head admissions counselor will call you within 24 hours to book your free trial slot.
                      </p>
                      <p className="text-xs text-slate-400 mt-12 animate-pulse">
                        Closing window...
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedPlan(null);
                  setFormSubmitted(false);
                }}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 md:bg-black/5 md:hover:bg-black/10 backdrop-blur-md flex items-center justify-center text-white md:text-slate-800 transition-colors cursor-pointer"
                aria-label="Close form"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
