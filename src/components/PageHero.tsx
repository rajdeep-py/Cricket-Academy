import React, { useEffect, useRef } from 'react';
import FallingText from './FallingText';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Image Parallax zoom
      gsap.to(bgImageRef.current, {
        scale: 1.15,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Text stagger reveal
      gsap.from(".hero-element", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.1
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[60svh] flex flex-col pt-32 pb-12 overflow-hidden bg-white">
      {/* Section Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={bgImageRef}
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center opacity-40 origin-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grow flex flex-col justify-center">
        <div ref={textContainerRef} className="max-w-3xl">
          <div className="hero-element flex items-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-red-600"></span>
            <span className="text-red-600 text-xs font-bold tracking-[0.3em] uppercase">
              {subtitle}
            </span>
          </div>
          
          <h1 className="hero-element text-5xl md:text-7xl font-black font-display leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-2xl text-slate-900">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
