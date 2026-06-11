import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlight: string;
}

interface Tier {
  name: string;
  age: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  slides: Slide[];
}

interface ProgramsProps {
  isHome?: boolean;
}

export default function Programs({ isHome }: ProgramsProps) {
  const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesContainerRef = useRef<HTMLDivElement>(null);

  const tiers: Tier[] = [
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
      slides: [
        {
          title: "The Fun-First Philosophy",
          subtitle: "Where Passion Meets Foundation",
          description: "For ages 6-12, cricket shouldn't feel like a chore. We focus on building agility, raw hand-eye coordination, and a deep love for the sport using interactive games and soft balls.",
          image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop",
          highlight: "Agility & Core Motor Skills"
        },
        {
          title: "Technique Starter Pack",
          subtitle: "3 Focused Sessions Per Week",
          description: "Learn the textbook batting stance, the basic bowling grip, and proper throwing biomechanics. Our BCCI certified coaches correct errors before they become habits.",
          image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1974&auto=format&fit=crop",
          highlight: "Stance & Grip Mechanics"
        },
        {
          title: "Comprehensive Progress Reports",
          subtitle: "Tracking Growth Month-Over-Month",
          description: "We monitor speed, reaction time, and technique. Parents receive a detailed progress dashboard tracking their child's confidence, motor skills, and technical improvements.",
          image: "https://images.unsplash.com/photo-1506126613408-SCA07ce68773?q=80&w=1974&auto=format&fit=crop",
          highlight: "Performance Dashboard"
        },
        {
          title: "Start Your Cricket Legacy",
          subtitle: "Only ₹250 / Month",
          description: "Equip your child with the discipline, fitness, and skills to excel not just in cricket, but in all spheres of life. Secure their trial spot today.",
          image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
          highlight: "₹250/mo. All-Inclusive Trial"
        }
      ]
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
      slides: [
        {
          title: "Engineered for Competitive Cricket",
          subtitle: "For the Next Generation of Pros",
          description: "Ages 13-19 is the critical window for ELITE refinement. We transition players from local club nets to state-level competitive training programs.",
          image: "https://images.unsplash.com/photo-1540747737956-3787293ac287?q=80&w=1974&auto=format&fit=crop",
          highlight: "Tactical & Mental Shift"
        },
        {
          title: "Video Biomechanical Analysis",
          subtitle: "Unlocking Speed & Precision",
          description: "Our high-speed cameras record your bowling action and batting swing. Coaches overlay your video with pro actions to identify bio-mechanical micro-errors instantly.",
          image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
          highlight: "High-Speed Frame Capture"
        },
        {
          title: "Match Simulation Under Lights",
          subtitle: "Taming Real Pressure",
          description: "Net sessions are good, but match play is where stars are born. Practice on real turf wickets under lights with simulated target-defense scenarios.",
          image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop",
          highlight: "Turf Practice & Simulated Overs"
        },
        {
          title: "Earn Your State Colors",
          subtitle: "Only ₹450 / Month",
          description: "Includes 5 sessions a week, strength and nutrition guides, and direct matches. Bring your ambition, we supply the training.",
          image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop",
          highlight: "₹450/mo. Professional Development"
        }
      ]
    },
    {
      name: 'ELITE 1-on-1',
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
      slides: [
        {
          title: "Personalized Cricket Masterclass",
          subtitle: "One-on-One Dedicated Mentorship",
          description: "The absolute pinnacle of cricket training. A dedicated senior pro coach works exclusively with you, customizing every drill, run-up, and stroke.",
          image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop",
          highlight: "100% Coach Attention"
        },
        {
          title: "Precision Machine Drills",
          subtitle: "Repeat to Perfection",
          description: "Get face-to-face with bowling machines capable of projecting speeds up to 150km/h with realistic swing, spin, and bounce variations.",
          image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1974&auto=format&fit=crop",
          highlight: "150km/h Bowling Simulators"
        },
        {
          title: "ELITE Tournament Preparation",
          subtitle: "Bio-analysis & Scouting Readiness",
          description: "Whether prepping for Ranji trials, IPL auctions, or club leagues, we tailor a physical, biomechanical, and tactical conditioning package.",
          image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop",
          highlight: "Scouting & Trial Preparation"
        },
        {
          title: "Unlock Your Ultimate Potential",
          subtitle: "₹11,000 / Month",
          description: "Flexible scheduling, complete video tracking, custom nutritionist plans, and priority access to all turf facilities. Step up to ELITE CRICKET ACADEMY.",
          image: "https://images.unsplash.com/photo-1540747737956-3787293ac287?q=80&w=1974&auto=format&fit=crop",
          highlight: "₹11,000/mo. All-Access ELITE Pass"
        }
      ]
    },
  ];

  const nextSlide = () => {
    if (selectedTier && currentSlide < selectedTier.slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedTier(null);
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    if (selectedTier) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedTier, currentSlide]);

  // GSAP slide horizontal translation & item staggers
  useEffect(() => {
    if (!selectedTier) return;

    // Slide horizontal transition animation
    gsap.to(slidesContainerRef.current, {
      xPercent: -currentSlide * 100,
      duration: 0.8,
      ease: "power4.inOut"
    });

    // Reset non-active slide item states
    const slidesCount = selectedTier.slides.length;
    for (let i = 0; i < slidesCount; i++) {
      if (i !== currentSlide) {
        gsap.set(`.slide-${i} .animate-item`, { opacity: 0, y: 25 });
      }
    }

    // Active slide entry stagger animation
    gsap.fromTo(`.slide-${currentSlide} .animate-item`,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out", delay: 0.25 }
    );
  }, [currentSlide, selectedTier]);

  const openPopup = (tier: Tier) => {
    setCurrentSlide(0);
    setSelectedTier(tier);
  };

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
              Choose the right tier to match your ambition. From mastering basics to ELITE professional conditioning.
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
                onClick={() => openPopup(tier)}
                className={`w-full py-4 rounded-full font-bold text-sm transition-all cursor-pointer ${tier.popular
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

      {/* Full-screen GSAP/Apple-style Interactive Pricing Popup */}
      {createPortal(
        <AnimatePresence>
          {selectedTier && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 bg-slate-955/90 backdrop-blur-xl"
              onClick={() => setSelectedTier(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-6xl h-full md:h-[85vh] bg-slate-950 text-white rounded-none md:rounded-3xl border border-white/10 flex flex-col justify-between overflow-hidden shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top Navigation Bar */}
                <div className="p-6 md:p-8 flex justify-between items-center border-b border-white/15 bg-slate-950/80 backdrop-blur-md z-30">
                  <div>
                    <h4 className="text-xs font-black uppercase text-red-500 tracking-widest">{selectedTier.age} Program</h4>
                    <h3 className="text-xl md:text-2xl font-display font-black text-white leading-none mt-1">{selectedTier.name}</h3>
                  </div>

                  <button
                    onClick={() => setSelectedTier(null)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                    aria-label="Close details"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Horizontal Slider Track */}
                <div className="w-full grow relative overflow-hidden flex bg-slate-950 z-20">
                  <div
                    ref={slidesContainerRef}
                    className="flex w-full h-full"
                  >
                    {selectedTier.slides.map((slide, sIdx) => (
                      <div
                        key={sIdx}
                        className={`w-full shrink-0 h-full flex flex-col md:flex-row relative slide-${sIdx} overflow-y-auto md:overflow-hidden`}
                      >
                        {/* Left: Product Image Panel */}
                        <div className="w-full md:w-1/2 relative h-[35vh] md:h-full shrink-0 bg-slate-900">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover opacity-60"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-955 via-transparent to-transparent z-10" />
                          <div className="absolute top-6 left-6 z-20 bg-red-600/90 text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                            {slide.highlight}
                          </div>
                        </div>

                        {/* Right: Storytelling Text Panel */}
                        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-slate-955 z-20 shrink-0">
                          <div className="max-w-md">
                            <span className="text-red-500 font-bold uppercase tracking-widest text-xs mb-3 block animate-item">
                              Section {sIdx + 1} of 4
                            </span>
                            <h2 className="text-3xl md:text-5xl font-display font-black leading-none mb-4 animate-item text-white">
                              {slide.title}
                            </h2>
                            <h3 className="text-lg md:text-xl font-medium text-slate-300 mb-6 animate-item">
                              {slide.subtitle}
                            </h3>
                            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 animate-item">
                              {slide.description}
                            </p>
                            {sIdx === 3 && (
                              <button
                                onClick={() => {
                                  setSelectedTier(null);
                                  navigate('/contact', { state: { plan: selectedTier.name } });
                                }}
                                className="animate-item px-8 py-4 bg-red-800 hover:bg-yellow-400 text-white hover:text-slate-955 rounded-full font-black uppercase tracking-wider text-sm transition-all shadow-lg hover:scale-105 duration-300 cursor-pointer"
                              >
                                Enroll in {selectedTier.name} — {selectedTier.price}{selectedTier.period}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom controls panel */}
                <div className="p-6 md:p-8 flex justify-between items-center border-t border-white/15 bg-slate-955/80 backdrop-blur-md z-30">
                  {/* Bullet Page Indicators */}
                  <div className="flex gap-2.5">
                    {selectedTier.slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === currentSlide ? 'w-8 bg-red-600' : 'w-2.5 bg-white/20 hover:bg-white/40'}`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Left/Right buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={prevSlide}
                      disabled={currentSlide === 0}
                      className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${currentSlide === 0 ? 'border-white/10 text-white/25 cursor-not-allowed' : 'border-white/20 hover:bg-white/10 text-white cursor-pointer'}`}
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextSlide}
                      disabled={currentSlide === selectedTier.slides.length - 1}
                      className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${currentSlide === selectedTier.slides.length - 1 ? 'border-white/10 text-white/25 cursor-not-allowed' : 'border-white/20 hover:bg-white/10 text-white cursor-pointer'}`}
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
