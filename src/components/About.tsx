import React, { useEffect, useRef } from 'react';
import { Target, TrendingUp, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutProps {
  isHome?: boolean;
}

export default function About({ isHome }: AboutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Users, label: 'Certified Coaches', value: '10+' },
    { icon: TrendingUp, label: 'Players Trained', value: '500+' },
    { icon: Target, label: 'Turf Pitches', value: '4' },
    { icon: ShieldCheck, label: 'A/C Indoor Facilities', value: '1' },
  ];

  const facilities = [
    {
      title: "Premium Turf Wickets",
      description: "4 professional soil-and-clay pitches maintained to match-level standards, giving players realistic bounce and turn simulation.",
      image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1974&auto=format&fit=crop",
      tag: "Match Simulation"
    },
    {
      title: "All-Weather Indoor AC Nets",
      description: "Equipped with high-performance synthetic wickets, fully air-conditioned nets keep practice going even in peak summer or monsoon seasons.",
      image: "assets/hero-cover/blogs-cover.jpg",
      tag: "Year-Round Training"
    },
    {
      title: "Biomechanical Video Lab",
      description: "High-frequency frame cameras record actions from multiple angles. Coaches analyze release points and foot alignments down to the degree.",
      image: "assets/hero-cover/contact-us-cover.png",
      tag: "Data-Driven Analysis"
    },
    {
      title: "Strength & Conditioning Zone",
      description: "Dedicated athletic training zone designed to build fast bowler shoulder strength, wicket keeper agility, and batsmen reaction times.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
      tag: "Athletic Conditioning"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.from(textRef.current ? textRef.current.children : [], {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 35,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power2.out"
      });

      // Desktop horizontal scroll for facilities
      const sections = gsap.utils.toArray('.facility-card');
      if (sections.length > 0 && window.innerWidth >= 1024) {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1.2,
            snap: 1 / (sections.length - 1),
            start: "top top",
            end: () => `+=${triggerRef.current?.offsetWidth || 1000}`,
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Intro section */}
      <section id="about" className="py-24 bg-white relative border-b border-black/5 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Image Gallery */}
            <div ref={imageRef} className="relative">
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
              {/* Decorative background glow */}
              <div className="absolute top-1/2 left-[-5%] w-24 h-24 bg-red-800 rounded-full blur-[60px] opacity-40 z-0"></div>
            </div>

            {/* Right Column: Content */}
            <div ref={textRef}>
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
                <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 border border-black/20 hover:border-black/60 bg-black/5 hover:bg-black/10 text-slate-900 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 group cursor-pointer">
                  Discover Our Story
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Apple-style Pinned Horizontal Scrolling Section for Facilities */}
      <div ref={triggerRef} className="bg-slate-950 text-white relative">
        {/* Desktop Pinned Horizontal Scroll */}
        <div className="hidden lg:flex w-[400vw] h-screen items-center">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="facility-card w-screen h-screen flex items-center justify-center px-12 md:px-24 bg-slate-950 relative overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-16 max-w-7xl items-center w-full relative z-10">
                {/* Left Text */}
                <div className="space-y-6">
                  <span className="bg-red-800/80 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full w-max block">
                    {fac.tag}
                  </span>
                  <h3 className="text-5xl font-display font-black text-white leading-none">
                    {fac.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {fac.description}
                  </p>
                </div>

                {/* Right Image */}
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-slate-900">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                </div>
              </div>

              {/* Background ambient light */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-red-800/5 rounded-full blur-[120px] pointer-events-none z-0" />
            </div>
          ))}
        </div>

        {/* Mobile Fallback: Vertical scroll list */}
        <div className="lg:hidden py-24 px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Our Facilities</span>
            <h3 className="text-3xl font-display font-black text-white mt-3">World-Class Infrastructure</h3>
          </div>
          <div className="space-y-12">
            {facilities.map((fac, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-6">
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-800">
                  <img src={fac.image} alt={fac.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-3">
                  <span className="bg-red-800/80 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-2.5 rounded-full w-max block">
                    {fac.tag}
                  </span>
                  <h4 className="text-xl font-bold text-white">{fac.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{fac.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
