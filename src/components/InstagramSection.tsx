import React from 'react';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import { GYM_CONFIG, GYM_IMAGES } from '../config/gymConfig';

export const InstagramSection: React.FC = () => {
  const instaPosts = [
    {
      img: GYM_IMAGES.hero,
      likes: "184",
      comments: "24",
      caption: "Late night heavy lifting sessions at Level Up Satna 🔥 #LevelUpFitness #SatnaGym"
    },
    {
      img: GYM_IMAGES.boxingHero,
      likes: "212",
      comments: "31",
      caption: "Pads work and boxing combinations under Coach Shashank Khare 🥊 #SatnaBoxing"
    },
    {
      img: GYM_IMAGES.functional,
      likes: "198",
      comments: "19",
      caption: "Functional battle rope circuits building explosive endurance 💪 #FunctionalFitness"
    },
    {
      img: GYM_IMAGES.womenGroup,
      likes: "245",
      comments: "42",
      caption: "High energy Zumba & Group Fitness batch! Join the movement 🎉 #ZumbaSatna"
    }
  ];

  return (
    <section className="py-20 bg-[#050505] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#DFFF00] text-xs font-extrabold uppercase tracking-widest mb-3">
              <Instagram className="w-3.5 h-3.5" />
              INSTAGRAM FEED
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              FOLLOW THE LEVEL UP <span className="text-[#DFFF00]">JOURNEY.</span>
            </h2>
            <p className="text-zinc-400 text-sm mt-1 font-heading font-bold text-zinc-300">
              @levelupfitness_satna
            </p>
          </div>

          <a
            href={GYM_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-extrabold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg"
          >
            <Instagram className="w-4 h-4" />
            <span>FOLLOW ON INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Cards Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instaPosts.map((post, idx) => (
            <a
              key={idx}
              href={GYM_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-[#151515] h-72 block"
            >
              <img
                src={post.img}
                alt={`Level Up Instagram Post ${idx + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-6 backdrop-blur-xs">
                <div className="text-right">
                  <Instagram className="w-6 h-6 text-white inline-block" />
                </div>

                <div>
                  <p className="text-xs text-white font-medium line-clamp-2 mb-4">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-bold text-[#DFFF00]">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-[#DFFF00]" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
