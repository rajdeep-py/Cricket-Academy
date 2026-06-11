import { motion } from 'motion/react';
import { HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What equipment do I need to bring for the trial?",
      answer: "Please bring your own personal protective gear (abdomen guard, batting pads, gloves, helmet) and a bat. If you do not have gear, we will gladly provide academy equipment for your first session."
    },
    {
      question: "How easily accessible is the academy from central Kolkata?",
      answer: "Very accessible! We are located just 5 minutes from the Sonarpur Junction Railway Station (Sealdah South Section). Players traveling from Garia, Jadavpur, Ballygunge, or Tollygunge can reach us via train in 10-15 minutes. Alternatively, you can take the Metro to Kavi Subhash (New Garia) and take a direct auto or bus."
    },
    {
      question: "How do you help players get selected for CAB league clubs?",
      answer: "Our head coach Vikram Rathour and senior selectors regularly invite scouts from prominent CAB 1st & 2nd Division clubs to observe our nets and practice matches. Outstanding players are recommended for club trials and division registrations."
    },
    {
      question: "Do we get to practice on real turf wickets?",
      answer: "Yes, we believe leather-ball preparation should be authentic. We have 4 high-quality clay turf wickets prepared by experienced ground curators, mimicking the typical pitch conditions you will face in CAB tournament matches. We also maintain concrete wickets for speed reaction and wet-conditions training."
    },
    {
      question: "Can absolute beginners join?",
      answer: "Absolutely! Our 'Junior Mavericks' batch is specifically designed for children with zero prior experience. We focus on fun motor skill development, basic grip, stance, and hand-eye coordination before advancing to leather-ball play."
    },
    {
      question: "Is the academy operational during the heavy Kolkata monsoon?",
      answer: "Yes, 100%. We understand that Kolkata monsoons can wash out up to three months of critical training. That is why we built a fully-enclosed, air-conditioned indoor facility equipped with bowling machines, ensuring our pace battery and batsmen keep training regardless of the weather outside."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-black/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3">Common Queries</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">Frequently Asked Questions</h3>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/5 border border-black/10 rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-black/5 transition-colors"
              >
                <span className="font-bold font-display text-lg text-slate-900">{faq.question}</span>
                <HelpCircle className={`w-5 h-5 transition-transform duration-300 ${index === openIndex ? 'text-red-800 rotate-180' : 'text-slate-500'}`} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${index === openIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-500 leading-relaxed border-t border-black/5 mt-2">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
