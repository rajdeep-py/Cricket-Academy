import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  content: string[];
}

interface PostCardProps {
  post: Post;
  onClick: () => void;
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({ post, onClick, className = "" }) => (
  <div
    onClick={onClick}
    className={`blog-card group bg-black/5 backdrop-blur-md border border-black/10 rounded-2xl overflow-hidden hover:bg-black/10 transition-all pointer-events-auto flex flex-col h-full cursor-pointer ${className}`}
  >
    <div className="aspect-[16/10] overflow-hidden relative shrink-0">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      />
      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-red-600">
        {post.category}
      </div>
    </div>

    <div className="p-6 md:p-8 flex flex-col grow">
      <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-4">
        <Clock className="w-4 h-4" />
        <span>{post.readTime}</span>
      </div>

      <h4 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-red-800 transition-colors leading-tight">
        {post.title}
      </h4>

      <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed grow">
        {post.excerpt}
      </p>

      <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group/btn mt-auto">
        Read More
        <ArrowRight className="w-4 h-4 text-red-600 group-hover/btn:translate-x-1 transition-transform" />
      </div>
    </div>
  </div>
);

interface BlogProps {
  isHome?: boolean;
}

export default function Blog({ isHome }: BlogProps) {
  const posts: Post[] = [
    {
      id: 1,
      title: "5 Drills to Improve Your Footwork Against Spin",
      excerpt: "Mastering spin bowling on turning tracks requires precise footwork. Here are the top 5 drills our senior coaches use to build confidence.",
      category: "Batting Tips",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1974&auto=format&fit=crop",
      content: [
        "Playing spin requires a combination of anticipation, soft hands, and decisive footwork. At the Academy, we teach batsmen to either get fully forward to smother the spin at its pitch, or get deep in the crease to play the ball off the pitch. The key is to avoid getting caught in no-man's land.",
        "Drill 1: The Cone Drill. Set up three cones in a semi-circle at a half-volley distance. Shadow play driving through the line of the cones, focusing on committing your front pad and head over the ball. This builds muscle memory for reaching the pitch of the ball.",
        "Drill 2: The Two-Step Advance. Have a partner throw soft balls from a short distance. Practice stepping out of the crease, using two quick, compact steps, and playing the ball along the ground. This helps in dominating the spinner by attacking the length.",
        "Drill 3: Under-Arm Feed Sweep. Sweeping is a crucial release shot. With feeds coming under-arm, practice the sweep and sweep-paddle, focusing on getting your front knee down and keeping your head low. This ensures control and minimizes top-edging.",
        "Drill 4: Hand-Eye Coordination with Tennis Balls. Using a wet tennis ball on a concrete surface, react to late spin changes. This forces you to watch the ball out of the hand and react to the bounce.",
        "Drill 5: The Blindfold React (Advanced). Close your eyes until the bowler releases the ball (with a verbal cue). Open your eyes instantly and make a split-second decision to move forward or back. This sharpens your reaction time and trains your subconscious reflexes."
      ]
    },
    {
      id: 2,
      title: "The Mental Game: Handling Pressure in the Final Over",
      excerpt: "Cricket is 70% mental. Learn how elite finishers stay calm and process information when the run rate climbs in the death overs.",
      category: "Sports Psychology",
      readTime: "6 min read",
      image: "/assets/hero-cover/home-cover.jpg",
      content: [
        "In modern cricket, the difference between winning and losing often comes down to a few balls in the final over. When the crowd is roaring and the pressure is mounting, technical skill takes a backseat to mental clarity. The best finishers don't just react; they actively manage their psychological state.",
        "The first step is controlled breathing. High-stress situations trigger the 'fight or flight' response, causing shallow breathing and increased heart rate. Take slow, deep belly breaths between deliveries. This simple biofeedback technique lowers your heart rate and restores cognitive function, allowing you to read the bowler's intentions.",
        "The second step is scenario visualization. Before the bowler runs in, visualize three potential lengths they might bowl (yoker, slower-ball bouncer, wide length) and formulate a response for each. By pre-planning your execution zones, you eliminate hesitation during the delivery.",
        "Third, focus entirely on the process, not the outcome. Do not look at the scoreboard or calculate the run rate after every ball. Your sole focus should be on the seam of the ball leaving the bowler's hand. When you narrow your attention to the micro-details, anxiety naturally fades away."
      ]
    },
    {
      id: 3,
      title: "Nutrition Guide for Fast Bowlers",
      excerpt: "Fast bowling is an incredibly demanding activity. Discover the exact pre-match and recovery nutrition plans used by our pace battery.",
      category: "Fitness & Diet",
      readTime: "5 min read",
      image: "/assets/hero-cover/contact-us-cover.png",
      content: [
        "Fast bowlers are the engines of a cricket team, subjecting their bodies to forces up to ten times their body weight during delivery. To sustain pace, prevent injury, and bounce back for consecutive spells, your nutritional foundation must be flawless. Here is how our elite pacers fuel their engines.",
        "Hydration is the single most critical factor. Dehydration of just 2% can lead to a 10% drop in bowling velocity and an increased risk of side strains. We recommend consuming at least 3-4 liters of water daily, supplemented with electrolyte formulations containing sodium and magnesium on match days to prevent muscle cramping.",
        "Pre-Match Fueling: 24 to 36 hours before a multi-day game or a high-intensity T20 spell, increase your carbohydrate intake with complex sources like sweet potatoes, oats, and brown rice. Three hours before play, consume a lean protein and simple carb meal—such as grilled chicken breast with white rice or banana porridge—to provide sustained energy.",
        "During the Match: Between spells, sip on an isotonic drink and consume small, quick-digesting carb sources. Bananas, energy gels, or dried dates are perfect for keeping blood glucose levels stable without loading your digestive system.",
        "Post-Match Recovery: Within 45 minutes of finishing your spell, consume a 3:1 ratio of carbs to protein (such as a whey protein shake blended with bananas and oats). This initiates immediate muscle tissue repair and replenishes depleted glycogen stores. Follow this up with a balanced meal rich in anti-inflammatory fats, like salmon or avocados, to reduce systemic inflammation."
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const nextPost = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevPost = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPost(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPost]);

  return (
    <section id="blog" className="py-24 bg-slate-50 border-t border-black/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3">Academy Insights</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Master the Theory of the Game</h3>
          </motion.div>

          {isHome ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-6"
            >
              <div className="flex gap-4">
                <button
                  onClick={prevPost}
                  className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/10 hover:border-slate-900 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextPost}
                  className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/10 hover:border-slate-900 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              <div>
                <Link to="/blog" className="hidden md:inline-flex items-center gap-2 text-red-800 hover:text-yellow-400 font-semibold group transition-colors">
                  View All Articles
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ) : null}
        </div>

        {isHome ? (
          <div className="relative overflow-hidden w-full h-full pb-8">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {posts.map((post, idx) => (
                <motion.div 
                  key={post.id} 
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: idx * 0.12, ease: "easeOut" }}
                  className="min-w-[85vw] md:min-w-[400px] snap-center"
                >
                  <PostCard post={post} onClick={() => setSelectedPost(post)} />
                </motion.div>
              ))}
            </div>
            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                  display: none;
                }
             `}</style>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: "easeOut" }}
              >
                <PostCard post={post} onClick={() => setSelectedPost(post)} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Full screen popup modal for detailed blog article */}
      <AnimatePresence>
        {selectedPost && createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-md overflow-y-auto animate-fade-in"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[90vh] md:h-[80vh] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Panel: Overview & Image */}
              <div className="md:w-2/5 relative bg-slate-955 text-white flex flex-col justify-end min-h-[250px] md:min-h-0">
                <div className="absolute inset-0">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-955 via-slate-955/70 to-transparent" />
                </div>
                <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end h-full">
                  <div>
                    <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full">
                      {selectedPost.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold mt-6 leading-tight">
                      {selectedPost.title}
                    </h2>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20 flex items-center gap-4 text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-red-500" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                    <span>•</span>
                    <span>By Senior Coach</span>
                  </div>
                </div>
              </div>

              {/* Right Panel: Detailed Article */}
              <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto flex flex-col justify-between bg-slate-50">
                <div>
                  <h3 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">Overview & Insights</h3>
                  <p className="text-slate-700 text-base md:text-lg font-medium leading-relaxed mb-8 border-l-4 border-red-600 pl-4">
                    {selectedPost.excerpt}
                  </p>
                  
                  <hr className="border-black/5 mb-8" />
                  
                  <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-6">
                    {selectedPost.content.map((paragraph, index) => (
                      <p key={index} className="text-slate-600 font-sans">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-black/5 flex justify-between items-center">
                  <span className="text-xs text-slate-400">© 2026 Cricket Academy Insights</span>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-6 py-2.5 bg-red-600 hover:bg-slate-955 text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>
              </div>

              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 md:bg-black/5 md:hover:bg-black/10 backdrop-blur-md flex items-center justify-center text-white md:text-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>,
          document.body
        )}
      </AnimatePresence>
    </section>
  );
}
