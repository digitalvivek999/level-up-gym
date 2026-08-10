import React from 'react';
import { Users, Heart, Sparkles, Music, Sun, ArrowRight, MessageSquare } from 'lucide-react';
import { GYM_IMAGES, createWhatsAppUrl } from '../config/gymConfig';

interface GroupFitnessProps {
  onOpenEnquiry: (programName?: string) => void;
}

export const GroupFitness: React.FC<GroupFitnessProps> = ({ onOpenEnquiry }) => {
  const groupHighlights = [
    {
      title: "ZUMBA CARDIO",
      desc: "Energetic dance fitness sessions set to upbeat music that turn cardio into a joyful daily routine.",
      icon: <Music className="w-5 h-5 text-[#DFFF00]" />
    },
    {
      title: "YOGA & FLEXIBILITY",
      desc: "Gentle breathwork, joint mobility, posture correction, and recovery-oriented yoga sessions.",
      icon: <Sun className="w-5 h-5 text-[#DFFF00]" />
    },
    {
      title: "GROUP FUNCTIONAL",
      desc: "High-motivation group workouts using kettlebells, turf drills, and light dumbbells.",
      icon: <Users className="w-5 h-5 text-[#DFFF00]" />
    },
    {
      title: "WEIGHT LOSS & AEROBICS",
      desc: "Structured cardio circuits tailored for members seeking active, consistent weight management.",
      icon: <Sparkles className="w-5 h-5 text-[#DFFF00]" />
    }
  ];

  return (
    <section className="py-24 bg-[#080808] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#DFFF00] text-xs font-extrabold uppercase tracking-widest mb-3">
              <Heart className="w-3.5 h-3.5" />
              WELCOME & SUPPORTIVE ENVIRONMENT
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none mb-4">
              FITNESS FOR <span className="text-[#DFFF00]">EVERYONE.</span>
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6">
              Level Up Fitness Studio is designed to be an inclusive, friendly, and non-intimidating environment for people of all ages and fitness levels in Satna.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether you are taking your first steps toward physical fitness or looking for an energetic group vibe, our studio offers versatile sessions including Zumba, Yoga, Aerobics, Functional Workouts, Weight Loss Training, and Personal Guidance.
            </p>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {groupHighlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-[#DFFF00]/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <h3 className="font-heading font-black text-sm text-white uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onOpenEnquiry("Group Fitness / Zumba")}
                className="px-6 py-3.5 rounded-xl bg-[#DFFF00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(223,255,0,0.3)] flex items-center gap-2"
              >
                <span>JOIN GROUP CLASSES</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={createWhatsAppUrl("Hi Level Up Studio! I want to enquire about Zumba, Yoga and Group Fitness class timings in Satna.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-[#25D366] text-white hover:text-[#25D366] font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>ENQUIRE CLASS TIMINGS</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <img
                src={GYM_IMAGES.womenGroup}
                alt="Group Fitness and Zumba at Level Up Satna"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-zinc-800 text-center">
                <span className="font-heading font-black text-white text-sm uppercase block">
                  MOTIVATING COMMUNITY ATMOSPHERE
                </span>
                <span className="text-zinc-400 text-xs">
                  Bharhut Nagar, Satna • Supportive Fitness Guidance
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
