import React, { useEffect, useRef } from 'react';
import { Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Coaches() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const coaches = [
    {
      name: "Vikram Rathour",
      role: "Head Coach & Founder",
      experience: "Ex-First Class Player, BCCI Level 3",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop",
      bio: "With over 15 years of competitive cricket experience, Vikram brings a wealth of tactical knowledge and modern technique adaptations to the academy."
    },
    {
      name: "Sanjay Das",
      role: "Senior Bowling Coach",
      experience: "Ranji Trophy, BCCI Level 2",
      image: "https://images.unsplash.com/photo-1555319985-78e0ea521cd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      bio: "Specializing in pace & swing biomechanics, Sanjay has successfully trained over 20 state-level fast bowlers."
    },
    {
      name: "Devendra Singh",
      role: "Head of Spin Bowling",
      experience: "BCCI Level 2",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
      bio: "A master of flight and turn, Devendra helps young spinners master their stock deliveries and develop unplayable variations."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(headerRef.current ? headerRef.current.children : [], {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });

      // Cards Animation
      gsap.from(".coach-card", {
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-slate-50 border-t border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3">Our Mentors</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">Meet The Architects</h3>
          <p className="text-slate-500 text-lg">
            Our coaching staff comprises individuals who have lived the grind of professional cricket.
          </p>
        </div>

        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coaches.map((coach) => (
              <div
                key={coach.name}
                className="coach-card bg-white rounded-2xl overflow-hidden border border-black/10 hover:border-red-800/50 transition-colors duration-300 group"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-slate-100">
                  <img 
                    src={coach.image} 
                    alt={coach.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6">
                    <h4 className="text-2xl font-black font-display text-slate-900 leading-tight">{coach.name}</h4>
                    <p className="text-red-600 font-bold text-sm tracking-wider uppercase mt-1">{coach.role}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-600 uppercase tracking-widest">
                    <Award className="w-4 h-4 text-red-800" />
                    {coach.experience}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {coach.bio}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
