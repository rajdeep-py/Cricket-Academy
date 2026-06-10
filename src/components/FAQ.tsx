import { motion } from 'motion/react';
import { HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What equipment do I need to bring for the trial?",
      answer: "Please bring your own personal protective gear (abdomen guard, batting pads, gloves, helmet) and a bat. If you do not have gear, we will provide academy equipment for your first session."
    },
    {
      question: "Do you provide pick-up and drop-off facilities?",
      answer: "Currently, we do not provide dedicated transportation. However, our academy is conveniently located just 5 minutes from the Sonarpur Railway Station, and local transport is readily available."
    },
    {
      question: "Can beginners join the academy?",
      answer: "Absolutely! Our 'Junior Mavericks' and customized beginner batches are perfectly designed for absolute beginners. We focus heavily on basics before moving to hard ball practice."
    },
    {
      question: "Is the academy operational during the monsoon?",
      answer: "Yes. Our facility includes a fully equipped, air-conditioned indoor net area that allows practice to continue completely uninterrupted regardless of the weather outside."
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
