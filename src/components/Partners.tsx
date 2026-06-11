import { motion } from 'motion/react';

export default function Partners() {
  const partners = [
    {
      name: "SG Sports",
      logo: (
        <svg viewBox="0 0 100 40" className="h-8 fill-current text-slate-400 group-hover:text-red-700 transition-colors duration-300">
          {/* Stylized SG emblem */}
          <path d="M10 20 C10 10, 25 10, 25 15 C25 20, 10 20, 10 25 C10 30, 25 30, 25 25" stroke="currentColor" strokeWidth="4" fill="none" strokeLinSCAp="round" />
          <path d="M30 20 C30 10, 45 10, 45 25 C45 30, 35 30, 35 25 L35 22 L40 22" stroke="currentColor" strokeWidth="4" fill="none" strokeLinSCAp="round" />
          <text x="52" y="26" className="font-sans font-bold tracking-widest text-[16px] fill-current">SPORTS</text>
        </svg>
      )
    },
    {
      name: "MRF",
      logo: (
        <svg viewBox="0 0 100 40" className="h-8 fill-current text-slate-400 group-hover:text-red-600 transition-colors duration-300">
          {/* Bold MRF style */}
          <path d="M10 30 L10 10 L18 22 L26 10 L26 30" stroke="currentColor" strokeWidth="5" fill="none" strokeLinejoin="round" />
          <path d="M35 30 L35 10 L48 10 C53 10, 53 18, 48 18 L35 18 M42 18 L50 30" stroke="currentColor" strokeWidth="5" fill="none" strokeLinejoin="round" />
          <path d="M60 30 L60 10 L75 10 M60 20 L72 20" stroke="currentColor" strokeWidth="5" fill="none" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: "Gatorade",
      logo: (
        <svg viewBox="0 0 100 40" className="h-9 fill-current text-slate-400 group-hover:text-amber-500 transition-colors duration-300">
          {/* Gatorade lightning bolt and G */}
          <path d="M25 10 C15 10, 10 17, 10 25 C10 33, 17 35, 25 35 C33 35, 35 30, 35 26 L22 26" stroke="currentColor" strokeWidth="5" fill="none" />
          <path d="M28 6 L18 20 L25 20 L15 36 L34 16 L26 16 Z" fill="currentColor" />
          <text x="42" y="27" className="font-sans font-black tracking-wide text-[16px] fill-current">GATORADE</text>
        </svg>
      )
    },
    {
      name: "Kookaburra",
      logo: (
        <svg viewBox="0 0 100 40" className="h-8 fill-current text-slate-400 group-hover:text-emerald-600 transition-colors duration-300">
          {/* Bird ELITEhouette representing Kookaburra */}
          <path d="M10 25 Q15 28 25 22 Q35 16 45 28 Q50 32 60 20 Q70 8 85 18 Q65 14 55 24 Q45 34 30 28 Z" fill="currentColor" />
          <circle cx="78" cy="18" r="2" fill="currentColor" />
          <text x="10" y="38" className="font-sans font-extrabold tracking-widest text-[8px] fill-current">KOOKABURRA</text>
        </svg>
      )
    },
    {
      name: "Red Bull",
      logo: (
        <svg viewBox="0 0 100 40" className="h-8 fill-current text-slate-400 group-hover:text-blue-800 transition-colors duration-300">
          {/* Red Bull style logo */}
          <path d="M12 28 C8 24, 8 16, 12 12 Q20 18 28 12 C32 16, 32 24, 28 28 Q20 22 12 28" fill="currentColor" />
          <circle cx="20" cy="20" r="4" className="text-slate-400 group-hover:text-yellow-500 fill-current" />
          <text x="36" y="25" className="font-sans font-black italic tracking-tighter text-[15px] fill-current">Red Bull</text>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-b border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Official Equipment & Performance Partners
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group flex items-center justify-center h-12 w-full"
            >
              {partner.logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
