import React from 'react';
import { UserCheck, Layers, Activity, Swords, Flame, HeartHandshake } from 'lucide-react';

export const WhyLevelUp: React.FC = () => {
  const diffCards = [
    {
      num: "01",
      icon: <UserCheck className="w-8 h-8 text-[#DFFF00]" />,
      title: "PERSONAL ATTENTION",
      desc: "Training sessions designed around individual needs, goals and progress. Coach Shashank ensures correct posture and real form guidance during every workout."
    },
    {
      num: "02",
      icon: <Layers className="w-8 h-8 text-[#DFFF00]" />,
      title: "STRUCTURED WORKOUTS",
      desc: "Sessions systematically combine warm-up, strength, cardio, flexibility and cooldown depending on your tailored workout program."
    },
    {
      num: "03",
      icon: <Activity className="w-8 h-8 text-[#DFFF00]" />,
      title: "FUNCTIONAL FITNESS",
      desc: "Move better, build joint strength, core balance and improve overall daily life stamina through dynamic functional training routines."
    },
    {
      num: "04",
      icon: <Swords className="w-8 h-8 text-[#DFFF00]" />,
      title: "COMBAT SPORTS",
      desc: "Boxing, Kickboxing and MMA-inspired training for individuals looking for high-energy conditioning and fight-style mental discipline."
    },
    {
      num: "05",
      icon: <Flame className="w-8 h-8 text-[#DFFF00]" />,
      title: "WEIGHT LOSS TRAINING",
      desc: "Goal-focused training routines designed to support fat burn, active energy expenditure, and consistent fitness progress."
    },
    {
      num: "06",
      icon: <HeartHandshake className="w-8 h-8 text-[#DFFF00]" />,
      title: "POSITIVE ENVIRONMENT",
      desc: "An energetic, clean, and highly supportive atmosphere that helps every member stay consistent and motivated without intimidation."
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#DFFF00] text-xs font-extrabold uppercase tracking-widest mb-3">
            THE LEVEL UP DIFFERENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none mb-4">
            NOT JUST <span className="text-[#DFFF00]">ANOTHER GYM.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            We combine personal focus, structured training disciplines, and a welcoming studio environment to make sure you achieve real progress.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diffCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#151515] border border-zinc-800/90 rounded-2xl p-8 hover:border-[#DFFF00] transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Background Glow on Hover */}
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-[#DFFF00]/5 rounded-full blur-2xl group-hover:bg-[#DFFF00]/15 transition-all" />

              {/* Number and Icon Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#DFFF00] group-hover:bg-[#DFFF00]/10 transition-colors">
                  {card.icon}
                </div>
                <span className="font-heading font-black text-3xl text-zinc-700 group-hover:text-[#DFFF00] transition-colors">
                  {card.num}
                </span>
              </div>

              {/* Card Title */}
              <h3 className="font-heading font-black text-xl text-white tracking-wide uppercase mb-3 group-hover:text-[#DFFF00] transition-colors">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                {card.desc}
              </p>

              {/* Bottom Accent Line */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300">
                  LEVEL UP SATNA
                </span>
                <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-[#DFFF00] transition-colors" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
