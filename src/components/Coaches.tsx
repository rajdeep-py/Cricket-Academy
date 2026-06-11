import { motion } from 'motion/react';
import { Award, Trophy } from 'lucide-react';

export default function Coaches() {
  const coaches = [
    {
      name: "Vikram Rathour",
      role: "Head Coach & Founder",
      experience: "Bengal Ranji Trophy Veteran, BCCI Level 3",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop",
      bio: "With over 18 years of competitive cricket experience representing Bengal in the Ranji Trophy, Vikram has captained top CAB First Division clubs like East Bengal and Mohun Bagan. He brings deep tactical knowledge of local league progression."
    },
    {
      name: "Sanjay Das",
      role: "Senior Bowling Coach",
      experience: "Ex-Bengal Speedster, BCCI Level 2",
      image: "https://images.unsplash.com/photo-1555319985-78e0ea521cd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      bio: "Specializing in pace & swing biomechanics for Kolkata clay pitches, Sanjay played Ranji Trophy for Bengal and has successfully trained over 20 state-level fast bowlers who play in CAB division leagues."
    },
    {
      name: "Devendra Singh",
      role: "Head of Spin Bowling",
      experience: "Town Club Spin Mentor, BCCI Level 2",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
      bio: "A master of flight and turn who has taken 400+ wickets in Kolkata's CAB First Division league. Devendra helps young spinners adapt to spinning tracks, master variations (carrom ball, doosra), and dominate local batsmen."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3">Our Mentors</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Meet The Architects</h3>
            <p className="text-slate-500 text-lg">
              Our coaching staff comprises individuals who have lived the grind of professional cricket.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-black/10 hover:border-red-800/50 transition-colors group"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={coach.image} 
                    alt={coach.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h4 className="text-2xl font-black font-display text-slate-900">{coach.name}</h4>
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
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
