import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FounderMessage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side text stagger
      gsap.from(leftColRef.current ? leftColRef.current.children : [], {
        scrollTrigger: {
          trigger: leftColRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });

      // Right side image slide up and rotate
      gsap.from(rightColRef.current, {
        scrollTrigger: {
          trigger: rightColRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        scale: 0.95,
        rotate: 1,
        duration: 1,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div ref={leftColRef}>
            <h2 className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3">From The Founder</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8 text-slate-900">
              "We're here to build the mindset before we build the machine."
            </h3>

            <div className="relative mb-8">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-red-800/20" />
              <p className="text-lg text-slate-600 leading-relaxed relative z-10 pl-6 border-l w-full border-red-800/50">
                When I started this academy, the goal wasn't just to produce good cricketers. It was to forge individuals capable of handling the immense pressure of the modern game. We emphasize discipline, technical purity, and tactical intelligence above all else. Rajpur Sonarpur has talent; we provide the stage.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=150&auto=format&fit=crop" 
                alt="Founder" 
                className="w-14 h-14 rounded-full border-2 border-red-600 object-cover"
              />
              <div>
                <h4 className="text-slate-900 font-bold font-display tracking-wide">Vikram Rathour</h4>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mt-1">Founder & Head Coach</p>
              </div>
            </div>
          </div>

          <div ref={rightColRef} className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-black/5 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=2058&auto=format&fit=crop" 
                alt="Founder guiding a young cricketer" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-medium italic">"Every great inning starts with a solid foundation."</p>
              </div>
            </div>
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-800/10 blur-[100px] z-0 rounded-full pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
