import React from 'react';
import { Star, Award, Users, Dumbbell, ShieldCheck } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymConfig';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: <Star className="w-5 h-5 fill-amber-400 text-amber-400" />,
      value: "5.0 ★",
      label: "GOOGLE RATING"
    },
    {
      icon: <Users className="w-5 h-5 text-[#DFFF00]" />,
      value: "46+",
      label: "GOOGLE REVIEWS"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#DFFF00]" />,
      value: "100%",
      label: "PERSONAL ATTENTION"
    },
    {
      icon: <Dumbbell className="w-5 h-5 text-[#DFFF00]" />,
      value: "12+",
      label: "FITNESS PROGRAMS"
    },
    {
      icon: <Award className="w-5 h-5 text-[#DFFF00]" />,
      value: "CERTIFIED",
      label: "FITNESS COACH"
    }
  ];

  return (
    <section className="bg-zinc-950 border-y border-zinc-800 py-6 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-x-0 md:divide-x divide-zinc-800/80">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-2 group">
              <div className="mb-1 transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="font-heading font-black text-xl sm:text-2xl text-white tracking-wider">
                {item.value}
              </div>
              <div className="text-[11px] font-bold text-zinc-400 tracking-widest uppercase mt-0.5">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
