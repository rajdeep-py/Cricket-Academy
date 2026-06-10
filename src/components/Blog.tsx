import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogProps {
  isHome?: boolean;
}

export default function Blog({ isHome }: BlogProps) {
  const posts = [
    {
      id: 1,
      title: "5 Drills to Improve Your Footwork Against Spin",
      excerpt: "Mastering spin bowling on turning tracks requires precise footwork. Here are the top 5 drills our senior coaches use to build confidence.",
      category: "Batting Tips",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "The Mental Game: Handling Pressure in the Final Over",
      excerpt: "Cricket is 70% mental. Learn how elite finishers stay calm and process information when the run rate climbs in the death overs.",
      category: "Sports Psychology",
      readTime: "6 min read",
      image: "assets/hero-cover/home-cover.jpg"
    },
    {
      id: 3,
      title: "Nutrition Guide for Fast Bowlers",
      excerpt: "Fast bowling is an incredibly demanding activity. Discover the exact pre-match and recovery nutrition plans used by our pace battery.",
      category: "Fitness & Diet",
      readTime: "5 min read",
      image: "assets/hero-cover/contact-us-cover.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPost = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevPost = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const PostCard = ({ post, className = "" }: { post: any, className?: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group bg-black/5 backdrop-blur-md border border-black/10 rounded-2xl overflow-hidden hover:bg-black/10 transition-all pointer-events-auto flex flex-col h-full ${className}`}
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

        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group/btn mt-auto">
          Read More
          <ArrowRight className="w-4 h-4 text-red-600 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );

  return (
    <section id="blog" className="py-24 bg-slate-50 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3">Academy Insights</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Master the Theory of the Game</h3>
          </motion.div>

          {isHome ? (
            <div className="flex items-center gap-6">
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
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="hidden md:block"
              >
                <Link to="/blog" className="inline-flex items-center gap-2 text-red-800 hover:text-yellow-400 font-semibold group transition-colors">
                  View All Articles
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          ) : null}
        </div>

        {isHome ? (
          <div className="relative overflow-hidden w-full h-full pb-8">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {posts.map((post) => (
                <div key={post.id} className="min-w-[85vw] md:min-w-[400px] snap-center">
                  <PostCard post={post} />
                </div>
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
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
