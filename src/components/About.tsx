import React from 'react';
import { Check, Flame, MessageSquare, ArrowRight, Shield } from 'lucide-react';
import { GYM_CONFIG, GYM_IMAGES, createWhatsAppUrl } from '../config/gymConfig';

interface AboutProps {
  onOpenEnquiry: (programName?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenEnquiry }) => {
  const features = [
    "Personal Attention",
    "Structured Training",
    "Supportive Coaching",
    "Variety of Workouts",
    "Functional Training",
    "Combat Sports"
  ];

  return (
    <section id="about" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <img
                src={GYM_IMAGES.aboutStudio}
                alt="Level Up Fitness Studio Floor Satna"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] sm:h-[550px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-black/90 border border-zinc-800 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#DFFF00] flex items-center justify-center text-black font-black text-xl shrink-0">
                    <Flame className="w-7 h-7 fill-black" />
                  </div>
                  <div>
                    <div className="font-heading font-black text-white text-base sm:text-lg uppercase">
                      LEVEL UP YOUR BODY & MIND
                    </div>
                    <div className="text-zinc-400 text-xs font-medium">
                      Located in Bharhut Nagar, Satna • 5.0 Google Rated
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#DFFF00] pointer-events-none rounded-tl-xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#DFFF00] pointer-events-none rounded-br-xl" />
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#DFFF00] text-xs font-extrabold uppercase tracking-widest mb-4">
              <Shield className="w-3.5 h-3.5" />
              ABOUT LEVEL UP FITNESS STUDIO
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight mb-6">
              THIS IS WHERE YOU <br />
              <span className="text-[#DFFF00]">LEVEL UP.</span>
            </h2>

            <div className="space-y-4 text-zinc-300 font-normal leading-relaxed text-base sm:text-lg mb-8">
              <p>
                Level Up Fitness Studio is a fitness-focused training space in Bharhut Nagar, Satna, built around structured workouts, personal attention and a positive training environment.
              </p>
              <p>
                Whether your goal is weight loss, strength, better fitness, functional movement, boxing, MMA, kickboxing, yoga or group fitness, the studio offers multiple training formats under one roof.
              </p>
            </div>

            {/* Checkpoint grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80 hover:border-[#DFFF00]/50 transition-colors">
                  <div className="w-6 h-6 rounded-md bg-[#DFFF00]/10 border border-[#DFFF00]/40 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-[#DFFF00]" />
                  </div>
                  <span className="font-heading font-bold text-white text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenEnquiry("Goal Discussion")}
                className="px-8 py-4 rounded-xl bg-[#DFFF00] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(223,255,0,0.3)] flex items-center gap-2"
              >
                <span>DISCUSS YOUR FITNESS GOAL</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={createWhatsAppUrl("Hi Coach Shashank, I'd like to discuss my fitness goals and visit Level Up Fitness Studio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-[#25D366] text-white hover:text-[#25D366] font-bold text-sm uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
