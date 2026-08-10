import React from 'react';
import { Swords, Shield, Zap, Target, ArrowRight, MessageSquare } from 'lucide-react';
import { GYM_IMAGES, createWhatsAppUrl } from '../config/gymConfig';

interface CombatSportsProps {
  onOpenEnquiry: (programName?: string) => void;
}

export const CombatSports: React.FC<CombatSportsProps> = ({ onOpenEnquiry }) => {
  const combatDisciplines = [
    {
      title: "BOXING",
      desc: "Stance, jab-cross technique, slip drills, heavy bag conditioning, and cardio endurance.",
      icon: <Target className="w-6 h-6 text-[#DFFF00]" />
    },
    {
      title: "KICKBOXING",
      desc: "Combines powerful kicks and high-speed strike combinations to activate total core and leg power.",
      icon: <Zap className="w-6 h-6 text-[#DFFF00]" />
    },
    {
      title: "MMA (MIXED MARTIAL ARTS)",
      desc: "Fighter conditioning, striker movement, stamina circuits, and multi-discipline endurance.",
      icon: <Shield className="w-6 h-6 text-[#DFFF00]" />
    },
    {
      title: "COMBAT CONDITIONING",
      desc: "High-intensity metabolic drills designed to build raw fight stamina and sharp mental toughness.",
      icon: <Swords className="w-6 h-6 text-[#DFFF00]" />
    }
  ];

  return (
    <section id="combat" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-zinc-800">
      
      {/* Background Combat Image Frame */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src={GYM_IMAGES.boxingHero}
          alt="Boxing and Combat Sports Satna"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DFFF00]/10 border border-[#DFFF00]/40 text-[#DFFF00] text-xs font-extrabold uppercase tracking-widest mb-3">
            <Swords className="w-3.5 h-3.5" />
            COMBAT SPORTS ACADEMY • SATNA
          </div>

          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight uppercase leading-none mb-4">
            TRAIN LIKE A <span className="text-[#DFFF00]">FIGHTER.</span>
          </h2>

          <p className="text-xl sm:text-2xl font-bold text-zinc-300 font-heading tracking-wide uppercase mb-4">
            "STRENGTH IS BUILT. DISCIPLINE IS EARNED."
          </p>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Looking for a different challenge? Our boxing, kickboxing, and MMA-inspired combat sessions offer a high-octane workout that sharpens focus, burns calories, and builds supreme confidence.
          </p>
        </div>

        {/* 4 Combat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {combatDisciplines.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#151515]/90 border border-zinc-800 rounded-2xl p-6 hover:border-[#DFFF00] transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 group-hover:border-[#DFFF00] group-hover:bg-[#DFFF00]/10 transition-colors">
                {item.icon}
              </div>

              <h3 className="font-heading font-black text-lg text-white tracking-wide uppercase mb-2 group-hover:text-[#DFFF00] transition-colors">
                {item.title}
              </h3>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                {item.desc}
              </p>

              <div className="text-[10px] font-bold text-[#DFFF00] uppercase tracking-widest flex items-center gap-1">
                <span>SATNA COMBAT ZONE</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-black text-xl text-white uppercase mb-1">
              READY TO HIT THE BAGS?
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm">
              All fitness levels welcome. Coach Shashank Khare will guide your stance and punching fundamentals.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => onOpenEnquiry("Combat Training")}
              className="px-6 py-3.5 rounded-xl bg-[#DFFF00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(223,255,0,0.3)] flex items-center gap-2"
            >
              <span>ASK ABOUT COMBAT TRAINING</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={createWhatsAppUrl("Hi Level Up Studio! I want to ask about Combat Sports, Boxing and Kickboxing training in Satna.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-[#25D366] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>WHATSAPP COMBAT</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
