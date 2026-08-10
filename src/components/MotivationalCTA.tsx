import React from 'react';
import { Flame, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { GYM_CONFIG, GYM_IMAGES, createWhatsAppUrl } from '../config/gymConfig';

interface MotivationalCTAProps {
  onOpenEnquiry: (programName?: string) => void;
}

export const MotivationalCTA: React.FC<MotivationalCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative py-28 overflow-hidden bg-black border-y border-zinc-800">
      
      {/* Background Image & Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={GYM_IMAGES.ctaBg}
          alt="Level Up Fitness Studio Satna Motivational Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DFFF00]/10 rounded-full blur-[150px] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-[#DFFF00]/50 text-[#DFFF00] text-xs font-extrabold uppercase tracking-widest mb-6 backdrop-blur-md">
          <Flame className="w-4 h-4" />
          DON'T JUST WORK OUT. LEVEL UP.
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-[0.95] mb-4">
          STOP WAITING. <br />
          <span className="text-[#DFFF00] drop-shadow-[0_0_35px_rgba(223,255,0,0.4)]">
            START LEVELING UP.
          </span>
        </h2>

        <p className="text-xl sm:text-2xl text-zinc-300 font-heading font-bold uppercase tracking-wider mb-10 max-w-2xl mx-auto">
          "Your fitness journey starts with one decision."
        </p>

        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <button
            onClick={() => onOpenEnquiry("Instant Join")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#DFFF00] text-black font-extrabold text-sm sm:text-base uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_30px_rgba(223,255,0,0.4)] flex items-center justify-center gap-2 group"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={createWhatsAppUrl("Hi Coach Shashank! I want to start my fitness training at Level Up Fitness Studio in Satna.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] text-black font-extrabold text-sm sm:text-base uppercase tracking-wider hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageSquare className="w-5 h-5 fill-black" />
            <span>CHAT WITH COACH</span>
          </a>

          <a
            href={`tel:${GYM_CONFIG.phone}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900 border border-zinc-700 text-white hover:text-[#DFFF00] hover:border-[#DFFF00] font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5 text-[#DFFF00]" />
            <span>CALL {GYM_CONFIG.phone}</span>
          </a>

        </div>

      </div>
    </section>
  );
};
