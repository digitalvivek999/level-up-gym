import React, { useState } from 'react';
import { MessageSquare, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { PROGRAMS_DATA, createWhatsAppUrl } from '../config/gymConfig';
import { ProgramItem } from '../types';

interface ProgramsProps {
  onOpenEnquiry: (programName?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  const categories = [
    { id: 'all', label: 'ALL PROGRAMS' },
    { id: 'personal', label: 'PERSONAL TRAINING' },
    { id: 'combat', label: 'COMBAT SPORTS' },
    { id: 'functional', label: 'FUNCTIONAL & HIIT' },
    { id: 'group', label: 'GROUP & YOGA' }
  ];

  const filteredPrograms = activeCategory === 'all'
    ? PROGRAMS_DATA
    : PROGRAMS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="programs" className="py-24 bg-[#0a0a0a] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#DFFF00] text-xs font-extrabold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            FITNESS & COMBAT DISCIPLINES
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none mb-4">
            CHOOSE YOUR <span className="text-[#DFFF00]">CHALLENGE.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            From 1-on-1 personal coaching to explosive combat sports and energetic group classes, pick the training track built for your goals.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#DFFF00] text-black shadow-[0_0_15px_rgba(223,255,0,0.3)]'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 12 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-[#151515] border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#DFFF00] transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={`Level Up Satna ${program.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-black/60" />
                
                {/* Number Badge */}
                <span className="absolute top-4 left-4 font-heading font-black text-2xl text-[#DFFF00] bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-[#DFFF00]/30">
                  {program.number}
                </span>

                <span className="absolute top-4 right-4 text-[10px] font-extrabold text-zinc-300 uppercase tracking-widest bg-zinc-900/90 px-2.5 py-1 rounded border border-zinc-700">
                  {program.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-black text-xl text-white tracking-wide uppercase mb-2 group-hover:text-[#DFFF00] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {program.shortDesc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {program.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle className="w-3.5 h-3.5 text-[#DFFF00] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-zinc-800 flex items-center gap-2">
                  <a
                    href={createWhatsAppUrl(`Hi Level Up Studio, I want to enquire about the ${program.title} program in Satna.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-[#25D366] text-zinc-200 hover:text-[#25D366] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WHATSAPP</span>
                  </a>

                  <button
                    onClick={() => onOpenEnquiry(program.title)}
                    className="px-4 py-2.5 rounded-lg bg-[#DFFF00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all flex items-center gap-1 shrink-0"
                  >
                    <span>ENQUIRE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
