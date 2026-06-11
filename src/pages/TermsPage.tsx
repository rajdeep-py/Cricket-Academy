import React, { useEffect, useRef } from 'react';
import PageHero from '../components/PageHero';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TermsPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade/slide up the prose content items
      gsap.from(contentRef.current ? contentRef.current.children : [], {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out"
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white">
      <PageHero
        title="Terms of Service"
        subtitle="Last Updated: June 2026"
        image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop"
      />
      <div className="py-20 bg-white z-10 relative">
        <div ref={contentRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
          <p className="lead text-xl text-slate-600 mb-8 font-sans">
            Please read these terms and conditions carefully before using our Academy's facilities or participating in our programs.
          </p>

          <h2 className="text-3xl font-display font-bold text-slate-900 mt-12 mb-6">1. Acceptance of Terms</h2>
          <p className="text-slate-600 mb-6 font-sans">
            By registering for any program, booking a facility, or using the services provided by ELITE CRICKET ACADEMY Academy (SCA), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
          </p>

          <h2 className="text-3xl font-display font-bold text-slate-900 mt-12 mb-6">2. Registration and Fees</h2>
          <ul className="list-disc pl-6 space-y-3 text-slate-600 mb-6 font-sans">
            <li>All players must complete the official registration form prior to their first training session.</li>
            <li>Fees must be paid in advance by the 5th of every month. Late payments may incur a penalty.</li>
            <li>Registration fees and monthly training fees are non-refundable unless specifically stated under our Refund Policy.</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-slate-900 mt-12 mb-6">3. Code of Conduct</h2>
          <p className="text-slate-600 mb-6 font-sans">
            We maintain a strict code of conduct to ensure a safe, respectful, and productive environment for all athletes and staff.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate-600 mb-6 font-sans">
            <li>Respect for coaches, staff, fellow players, and umpires is mandatory.</li>
            <li>Use of abusive language, bullying, or discrimination will result in immediate suspension or termination of membership.</li>
            <li>Players must arrive on time for training and matches.</li>
            <li>Proper cricket attire (whites or academy uniform) must be worn during practice sessions.</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-slate-900 mt-12 mb-6">4. Safety and Liability</h2>
          <p className="text-slate-600 mb-6 font-sans">
            While SCA takes every prSCAution to ensure the safety of its players, cricket is a sport that carries inherent risks of injury.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-slate-600 mb-6 font-sans">
            <li>SCA is not liable for any personal injury, loss, or damage to personal property occurring on its premises.</li>
            <li>Players must wear proper protective equipment (helmet, pads, gloves, box) when batting against a hard ball.</li>
            <li>Medical conditions must be disclosed during registration.</li>
          </ul>

          <h2 className="text-3xl font-display font-bold text-slate-900 mt-12 mb-6">5. Changes to Terms</h2>
          <p className="text-slate-600 mb-6 font-sans">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide reasonable notice of any material changes.
          </p>

          <div className="mt-16 p-8 bg-slate-50 border border-slate-200 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Contact Us</h3>
            <p className="text-slate-600 font-sans">
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@ELITEcricket.com" className="text-red-600 font-bold hover:underline">legal@ELITEcricket.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
