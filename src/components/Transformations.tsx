import React from 'react';
import { Flame, Star, ArrowRight, ShieldAlert, CheckCircle } from 'lucide-react';
import { TRANSFORMATIONS_DATA, createWhatsAppUrl } from '../config/gymConfig';

interface TransformationsProps {
  onOpenEnquiry: (programName?: string) => void;
}

export const Transformations: React.FC<TransformationsProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="transformations" className="py-24 bg-[#050505] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#DFFF00] text-xs font-extrabold uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5" />
            REAL RESULTS • SATNA
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none mb-4">
            YOUR TRANSFORMATION STARTS WITH <span className="text-[#DFFF00]">ONE DECISION.</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg">
            Authentic member feedback and documented weight loss & stamina milestones at Level Up Fitness Studio.
          </p>
        </div>

        {/* Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {TRANSFORMATIONS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-[#151515] border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#DFFF00] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-black/60" />

                  {/* Badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-md bg-[#DFFF00] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-zinc-400 ml-1 font-bold">5.0 Star Feedback</span>
                  </div>

                  <h3 className="font-heading font-black text-xl text-white tracking-wide uppercase mb-3 group-hover:text-[#DFFF00] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-zinc-300 text-sm italic leading-relaxed mb-4 border-l-2 border-[#DFFF00] pl-3 py-1 bg-zinc-900/50 rounded-r">
                    "{item.quote}"
                  </p>

                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                    {item.story}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-semibold">
                  <CheckCircle className="w-4 h-4 text-[#DFFF00]" />
                  <span>{item.reviewerName}</span>
                </div>

                <a
                  href={createWhatsAppUrl(`Hi Level Up Studio, I'm inspired by the ${item.title} and want to start my own transformation in Satna.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#DFFF00] hover:underline"
                >
                  Start Journey
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Mandatory Disclaimers Note */}
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-zinc-400 text-xs font-medium">
            <ShieldAlert className="w-4 h-4 text-[#DFFF00] shrink-0" />
            <span>
              <strong>Disclaimer:</strong> Individual results vary. Transformation outcomes depend on consistency, personal effort, nutrition, and individual body factors.
            </span>
          </div>
        </div>

        {/* Big CTA */}
        <div className="text-center">
          <button
            onClick={() => onOpenEnquiry("Transformation Journey")}
            className="px-8 py-4 rounded-xl bg-[#DFFF00] text-black font-extrabold text-sm sm:text-base uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(223,255,0,0.3)] inline-flex items-center gap-3"
          >
            <span>START YOUR OWN TRANSFORMATION</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
