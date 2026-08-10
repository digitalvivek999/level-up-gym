import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS_DATA, GYM_CONFIG } from '../config/gymConfig';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  return (
    <section id="reviews" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#DFFF00] text-xs font-extrabold uppercase tracking-widest mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            GOOGLE BUSINESS REVIEWS
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none mb-4">
            WHAT OUR <span className="text-[#DFFF00]">MEMBERS SAY.</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xl font-heading font-black text-white">{GYM_CONFIG.rating} / 5</span>
            <span className="text-zinc-400 text-sm font-semibold">({GYM_CONFIG.reviewCount} Verified Reviews)</span>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base">
            Read authentic experiences from members training at Level Up Fitness Studio in Bharhut Nagar, Satna.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          
          <div className="bg-[#151515] border border-zinc-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <Quote className="absolute top-6 right-6 w-20 h-20 text-zinc-800/40 pointer-events-none" />

            <div className="relative z-10">
              
              {/* Highlight badge */}
              <span className="inline-block px-3 py-1 rounded-md bg-[#DFFF00]/10 border border-[#DFFF00]/40 text-[#DFFF00] text-xs font-extrabold uppercase tracking-wider mb-6">
                {REVIEWS_DATA[currentIndex].highlight}
              </span>

              {/* Review Text */}
              <p className="text-lg sm:text-2xl text-zinc-100 font-medium leading-relaxed mb-8">
                "{REVIEWS_DATA[currentIndex].text}"
              </p>

              {/* Reviewer Details */}
              <div className="flex items-center justify-between border-t border-zinc-800 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#DFFF00] text-black font-black flex items-center justify-center text-lg">
                    {REVIEWS_DATA[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading font-black text-white text-base flex items-center gap-2">
                      <span>{REVIEWS_DATA[currentIndex].name}</span>
                      <CheckCircle2 className="w-4 h-4 text-[#DFFF00]" />
                    </div>
                    <div className="text-xs text-zinc-400 font-medium flex items-center gap-2">
                      <span className="flex text-amber-400">
                        {[...Array(REVIEWS_DATA[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </span>
                      <span>•</span>
                      <span>{REVIEWS_DATA[currentIndex].timeAgo}</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevReview}
                    className="p-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white hover:border-[#DFFF00] hover:text-[#DFFF00] transition-colors"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextReview}
                    className="p-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white hover:border-[#DFFF00] hover:text-[#DFFF00] transition-colors"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {REVIEWS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? 'w-8 bg-[#DFFF00]' : 'w-2.5 bg-zinc-800'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Link to Google Maps */}
        <div className="mt-12 text-center">
          <a
            href={GYM_CONFIG.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-[#DFFF00] hover:border-[#DFFF00] font-extrabold text-xs uppercase tracking-wider transition-all"
          >
            <span>READ ALL REVIEWS ON GOOGLE MAPS</span>
            <ExternalLink className="w-4 h-4 text-[#DFFF00]" />
          </a>
        </div>

      </div>
    </section>
  );
};
