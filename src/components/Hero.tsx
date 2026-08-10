import React from 'react';
import { Star, MessageSquare, MapPin, ArrowRight, ShieldCheck, Flame, ChevronDown } from 'lucide-react';
import { GYM_CONFIG, GYM_IMAGES, createWhatsAppUrl } from '../config/gymConfig';

interface HeroProps {
  onOpenEnquiry: (programName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Hero Background Image with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={GYM_IMAGES.hero}
          alt="Level Up Fitness Studio Satna Training Area"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom brightness-90"
        />
        {/* Dark Cinematic Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        
        {/* Electric Lime Diagonal Accent Glow */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#DFFF00]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#DFFF00]/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          
          {/* Top Label & Rating Pill */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 border border-[#DFFF00]/40 text-[#DFFF00] text-xs font-extrabold uppercase tracking-widest backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#DFFF00] animate-ping" />
              LEVEL UP FITNESS STUDIO • SATNA
            </span>

            {/* Google Rating Badge */}
            <a 
              href={GYM_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700 hover:border-[#DFFF00] text-white text-xs font-semibold backdrop-blur-sm transition-all"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">{GYM_CONFIG.rating}</span>
              <span className="text-zinc-400">({GYM_CONFIG.reviewCount}+ Reviews)</span>
            </a>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.95] mb-4">
            LEVEL UP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFFF00] via-white to-zinc-300 drop-shadow-[0_0_25px_rgba(223,255,0,0.2)]">
              YOUR FITNESS.
            </span>
          </h1>

          {/* Supporting Headline & Slogan */}
          <p className="text-lg sm:text-2xl font-bold text-[#DFFF00] mb-4 font-heading tracking-wide uppercase flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#DFFF00] inline" />
            "Train Hard. Move Better. Get Stronger."
          </p>

          {/* Body Description */}
          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-6 max-w-2xl">
            Personalized fitness training, functional workouts, combat sports and group fitness under one roof. Train with International Certified Fitness Coach Shashank Khare in Bharhut Nagar, Satna.
          </p>

          {/* Location Badge */}
          <div className="flex items-center gap-2 text-zinc-300 text-sm mb-8 font-medium">
            <MapPin className="w-4 h-4 text-[#DFFF00]" />
            <span>Behind Nahar Nursing Hospital & Durga Mandir, Bharhut Nagar, Satna</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            {/* Primary CTA */}
            <button
              onClick={() => onOpenEnquiry("Free Visit / Journey Start")}
              className="px-8 py-4 rounded-xl bg-[#DFFF00] text-black font-extrabold text-sm sm:text-base uppercase tracking-wider hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(223,255,0,0.4)] flex items-center justify-center gap-3 group"
            >
              <span>START YOUR FITNESS JOURNEY</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA - WhatsApp */}
            <a
              href={createWhatsAppUrl("Hi Level Up Fitness Studio! I want to enquire about joining, training programs and timing in Satna.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-[#25D366] text-black font-extrabold text-sm sm:text-base uppercase tracking-wider hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-5 h-5 fill-black" />
              <span>CHAT ON WHATSAPP</span>
            </a>

            {/* Third CTA - Directions */}
            <a
              href={GYM_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 rounded-xl bg-zinc-900/90 border border-zinc-700 text-zinc-200 hover:text-[#DFFF00] hover:border-[#DFFF00] transition-all text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#DFFF00]" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>

          {/* Quick Pillars */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold tracking-wider text-zinc-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#DFFF00]" />
              <span>Personal Attention</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#DFFF00]" />
              <span>Certified Coaching</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#DFFF00]" />
              <span>Combat Sports Zone</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#DFFF00]" />
              <span>Weight Loss Results</span>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 p-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-[#DFFF00] hover:border-[#DFFF00] transition-all animate-bounce"
        aria-label="Scroll down to about section"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
};
