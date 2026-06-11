import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Briefcase, User } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [enquiryType, setEnquiryType] = useState<'student' | 'business'>('student');
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

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

      // Left Column (Form) Animation
      gsap.from(leftColRef.current, {
        scrollTrigger: {
          trigger: leftColRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -40,
        duration: 1,
        ease: "power2.out"
      });

      // Right Column Animation
      gsap.from(rightColRef.current ? rightColRef.current.children : [], {
        scrollTrigger: {
          trigger: rightColRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="contact" className="py-24 bg-white relative max-w-full overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3">Location & Contact</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900">Connect With Us</h3>
          <p className="text-slate-500">Whether you're an aspiring player or looking for a business partnership, we're ready to talk.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Side: Contact Form */}
          <div
            ref={leftColRef}
            className="bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-600/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h4 className="text-2xl font-black font-display text-white mb-6">Drop us a line</h4>
              
              {/* Type Toggle */}
              <div className="flex p-1 bg-white/5 rounded-xl mb-8 border border-white/10">
                <button
                  onClick={() => setEnquiryType('student')}
                  className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    enquiryType === 'student' 
                      ? 'bg-red-600 text-white shadow-lg' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <User className="w-4 h-4" />
                  Student Enquiry
                </button>
                <button
                  onClick={() => setEnquiryType('business')}
                  className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    enquiryType === 'business' 
                      ? 'bg-red-600 text-white shadow-lg' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  Business / Partner
                </button>
              </div>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <AnimatePresence mode="wait">
                  {enquiryType === 'student' ? (
                    <motion.div
                      key="student"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-5"
                    >
                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Player Name</label>
                        <input 
                          type="text" 
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium"
                          placeholder="e.g. Rahul Sharma"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Phone No.</label>
                          <input 
                            type="tel" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium"
                            placeholder="+91"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Player Age</label>
                          <input 
                            type="number" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium"
                            placeholder="Years"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Preferred Batch Target</label>
                        <select 
                          className="w-full bg-[#1A1F2E] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium appearance-none"
                          defaultValue=""
                        >
                          <option value="" disabled className="text-slate-500">Select Batch</option>
                          <option value="morning">Morning (6:00 AM - 9:00 AM)</option>
                          <option value="afternoon">Afternoon (3:30 PM - 6:30 PM)</option>
                          <option value="weekend">Weekend Special</option>
                        </select>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="business"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Full Name</label>
                          <input 
                            type="text" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Company / Brand</label>
                          <input 
                            type="text" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium"
                            placeholder="Company Ltd"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Work Email</label>
                          <input 
                            type="email" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Phone No.</label>
                          <input 
                            type="tel" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium"
                            placeholder="+91"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Partnership Details</label>
                        <textarea 
                          rows={3}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-medium resize-none"
                          placeholder="How can we collaborate together?"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  type="submit"
                  className="w-full py-4 mt-4 bg-white hover:bg-red-600 text-slate-900 hover:text-white rounded-xl font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-xl cursor-pointer"
                >
                  {enquiryType === 'student' ? 'Submit Enquiry' : 'Send Proposal'}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Info & Map */}
          <div
            ref={rightColRef}
            className="flex flex-col h-full"
          >
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <MapPin className="text-red-600 w-5 h-5 flex-shrink-0" />
                  Academy Address
                </h4>
                <p className="text-slate-500 leading-relaxed text-sm">
                  123 Sports Complex Road,<br />
                  Near Sonarpur Station,<br />
                  Rajpur Sonarpur, West Bengal 700150
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Clock className="text-red-600 w-5 h-5 flex-shrink-0" />
                  Operating Hours
                </h4>
                <ul className="space-y-2 text-slate-500 text-sm">
                  <li className="flex justify-between"><span>Tue - Sun:</span> <span className="text-slate-900 font-medium">6:00 AM - 8:00 PM</span></li>
                  <li className="flex justify-between"><span>Monday:</span> <span className="text-red-800 font-medium">Closed (Maintenance)</span></li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-slate-600 hover:text-red-600 transition-colors group">
                <div className="bg-slate-100 group-hover:bg-red-50 p-2.5 rounded-full transition-colors"><Phone className="w-4 h-4" /></div>
                <span className="font-medium">+91 98765 43210</span>
              </a>
              <a href="mailto:info@elitecricket.com" className="flex items-center gap-3 text-slate-600 hover:text-red-600 transition-colors group">
                <div className="bg-slate-100 group-hover:bg-red-50 p-2.5 rounded-full transition-colors"><Mail className="w-4 h-4" /></div>
                <span className="font-medium">contact@elitecricket.com</span>
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="mt-auto w-full h-[250px] lg:h-[300px] bg-slate-50 rounded-3xl border border-black/5 overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                alt="Map location" 
                className="w-full h-full object-cover opacity-50 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/95 backdrop-blur px-6 py-3 rounded-full border border-black/5 flex items-center gap-3 shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                  </span>
                  <span className="text-xs font-bold tracking-widest uppercase">View on Maps</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
