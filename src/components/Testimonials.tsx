import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Banerjee",
      role: "Academy Alumnus, U-19 State Player",
      text: "The biomechanical video analysis completely transformed my bowling action. Within six months, I added 10km/h to my pace while reducing injury risk. The coaches here don't just teach, they engineer athletes.",
      image: "assets/hero-cover/blogs-cover.jpg", // Using a placeholder for video thumbnail
      isVideo: true
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
      isVideo: true
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Voices of Champions</h3>
          </motion.div>

          <div className="flex gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/10 hover:border-slate-900 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/10 hover:border-slate-900 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[500px]">
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
              <div className="lg:col-span-3 relative h-[300px] lg:h-full min-h-[400px]">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer transition-colors hover:bg-black/50">
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
    </section>
  );
}
