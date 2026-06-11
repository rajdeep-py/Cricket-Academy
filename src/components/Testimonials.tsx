import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ChevronLeft, ChevronRight, Quote, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Banerjee",
      role: "Academy Alumnus, U-19 State Player",
      text: "The biomechanical video analysis completely transformed my bowling action. Within six months, I added 10km/h to my pace while reducing injury risk. The coaches here don't just teach, they engineer athletes.",
      image: "assets/hero-cover/blogs-cover.jpg", // Using a placeholder for video thumbnail
      isVideo: true,
      videoId: "OZGtRvYF-A4"
    },
    {
      id: 2,
      name: "Sneha Das",
      role: "Parent of U-12 Player",
      text: "We travel from Garia every day just because of the elite facilities at Rajpur Sonarpur. The discipline and tactical awareness my son has developed in the Junior Mavericks program is simply incredible.",
      image: "assets/hero-cover/blogs-cover.jpg",
      isVideo: false
    },
    {
      id: 3,
      name: "Arindam Chatterjee",
      role: "Club Cricketer",
      text: "The Elite 1-on-1 masterclasses are worth every penny. The ability to practice on turf wickets under floodlights mimicking real match pressure is something very few academies in West Bengal offer.",
      image: "assets/hero-cover/blogs-cover.jpg",
      isVideo: true,
      videoId: "OZGtRvYF-A4"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPlaying(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isPlaying) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPlaying]);

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
        x: -20,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });

      // Main Testimonial Card Animation
      gsap.from(mainCardRef.current, {
        scrollTrigger: {
          trigger: mainCardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.96,
        y: 30,
        duration: 1,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="testimonials" className="py-24 bg-white relative overflow-hidden z-10 border-b border-black/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Voices of Champions</h3>
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/10 hover:border-slate-900 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/10 hover:border-slate-900 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div ref={mainCardRef} className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden bg-black/5 backdrop-blur-md shadow-xl border border-black/10"
            >
              {/* Media Section */}
              <div 
                className="lg:col-span-3 relative h-[300px] lg:h-full min-h-[400px] cursor-pointer overflow-hidden group"
                onClick={() => {
                  if (testimonials[currentIndex].isVideo) {
                    setIsPlaying(true);
                  }
                }}
              >
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group transition-colors hover:bg-black/50">
                  {testimonials[currentIndex].isVideo && (
                    <div className="w-20 h-20 bg-red-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(153,27,27,0.4)]">
                      <Play className="w-8 h-8 text-white fill-current ml-1" />
                    </div>
                  )}
                </div>
              </div>

              {/* Text Section */}
              <div className="lg:col-span-2 p-10 lg:p-14 flex flex-col justify-center relative">
                <Quote className="absolute top-10 right-10 w-24 h-24 text-black/5" />
                <div className="mb-8">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="inline-block w-5 h-5 text-red-800 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-medium text-slate-900 leading-relaxed mb-10 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <h4 className="text-lg font-bold text-red-600">{testimonials[currentIndex].name}</h4>
                  <p className="text-slate-500 text-sm font-medium">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isPlaying && testimonials[currentIndex].isVideo && testimonials[currentIndex].videoId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${testimonials[currentIndex].videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

              {/* Close Button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/85 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close video"
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
