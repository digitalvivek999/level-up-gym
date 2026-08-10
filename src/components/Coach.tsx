import React from 'react';
import { Award, BookOpen, Compass, UserCheck, MessageSquare, Phone } from 'lucide-react';
import { GYM_CONFIG, GYM_IMAGES, createWhatsAppUrl } from '../config/gymConfig';

interface CoachProps {
  onOpenEnquiry: (programName?: string) => void;
}

export const Coach: React.FC<CoachProps> = ({ onOpenEnquiry }) => {
  const coachPillars = [
    {
      title: "KNOWLEDGE",
      desc: "Deep expertise in biomechanics, posture correction, weight resistance, and athletic endurance.",
      icon: <BookOpen className="w-6 h-6 text-[#DFFF00]" />
    },
    {
      title: "GUIDANCE",
      desc: "Step-by-step coaching for beginners and experienced lifters to safely execute exercises with confidence.",
      icon: <Compass className="w-6 h-6 text-[#DFFF00]" />
    },
    {
      title: "PERSONAL ATTENTION",
      desc: "Direct monitoring of posture and progress during every single training batch in Satna.",
      icon: <UserCheck className="w-6 h-6 text-[#DFFF00]" />
    }
  ];

  return (
    <section id="coach" className="py-24 bg-[#0a0a0a] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coach Photo Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <img
                src={GYM_IMAGES.coach}
                alt="Coach Shashank Khare Level Up Fitness Studio Satna"
                referrerPolicy="no-referrer"
                className="w-full h-[500px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Certified Tag */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/90 border border-[#DFFF00]/50 text-[#DFFF00] font-extrabold text-xs uppercase tracking-wider backdrop-blur-md flex items-center gap-2">
                <Award className="w-4 h-4 text-[#DFFF00]" />
                <span>INTERNATIONAL CERTIFIED COACH</span>
              </div>

              {/* Name Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/90 border border-zinc-800 backdrop-blur-md">
                <div className="font-heading font-black text-2xl text-white uppercase">
                  SHASHANK KHARE
                </div>
                <div className="text-xs font-bold text-[#DFFF00] tracking-wider uppercase">
                  Head Fitness Coach & Trainer • Satna
                </div>
              </div>
            </div>
          </div>

          {/* Coach Details */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#DFFF00] text-xs font-extrabold uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5" />
              EXPERT LEADERSHIP
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none mb-3">
              MEET COACH <span className="text-[#DFFF00]">SHASHANK KHARE.</span>
            </h2>

            <div className="text-xs font-extrabold tracking-widest text-zinc-400 uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DFFF00]" />
              {GYM_CONFIG.coachTitle}
            </div>

            {/* Philosophy Box */}
            <div className="p-6 rounded-2xl bg-zinc-900/90 border-l-4 border-[#DFFF00] border-y border-r border-zinc-800 mb-8">
              <div className="text-xs font-extrabold text-[#DFFF00] uppercase tracking-widest mb-2">
                COACHING PHILOSOPHY
              </div>
              <blockquote className="text-white font-heading font-bold text-base sm:text-xl leading-relaxed italic">
                "Every person starts from a different point. The goal is to understand where you are, train intelligently and help you keep progressing."
              </blockquote>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {coachPillars.map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="mb-2">{pillar.icon}</div>
                  <h3 className="font-heading font-black text-sm text-white uppercase mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={createWhatsAppUrl("Hi Coach Shashank! I want to consult with you about personal training and fitness guidance at Level Up Satna.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#25D366] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all flex items-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>CHAT WITH COACH SHASHANK</span>
              </a>

              <a
                href={`tel:${GYM_CONFIG.phone}`}
                className="px-5 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-[#DFFF00] text-white hover:text-[#DFFF00] font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#DFFF00]" />
                <span>CALL {GYM_CONFIG.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
