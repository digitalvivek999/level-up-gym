import React from 'react';
import { 
  UserCheck, Flame, Swords, Zap, Shield, Activity, Dumbbell, Timer, 
  Music, HeartPulse, Users, Sparkles, BicepsFlexed, Apple, ShieldCheck, 
  Trophy, Award, Radio, ArrowUpRight, MessageSquare 
} from 'lucide-react';
import { SERVICES_DATA, createWhatsAppUrl } from '../config/gymConfig';

interface ServicesGridProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenEnquiry }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#DFFF00]" />;
      case 'Flame': return <Flame className="w-6 h-6 text-[#DFFF00]" />;
      case 'Swords': return <Swords className="w-6 h-6 text-[#DFFF00]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#DFFF00]" />;
      case 'Shield': return <Shield className="w-6 h-6 text-[#DFFF00]" />;
      case 'Activity': return <Activity className="w-6 h-6 text-[#DFFF00]" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-[#DFFF00]" />;
      case 'Timer': return <Timer className="w-6 h-6 text-[#DFFF00]" />;
      case 'Music': return <Music className="w-6 h-6 text-[#DFFF00]" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-[#DFFF00]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#DFFF00]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#DFFF00]" />;
      case 'BicepsFlexed': return <BicepsFlexed className="w-6 h-6 text-[#DFFF00]" />;
      case 'Apple': return <Apple className="w-6 h-6 text-[#DFFF00]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#DFFF00]" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-[#DFFF00]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#DFFF00]" />;
      case 'Radio': return <Radio className="w-6 h-6 text-[#DFFF00]" />;
      default: return <Activity className="w-6 h-6 text-[#DFFF00]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#DFFF00] text-xs font-extrabold uppercase tracking-widest mb-3">
            COMPREHENSIVE OFFERINGS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none mb-4">
            ALL STUDIO <span className="text-[#DFFF00]">SERVICES.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Every fitness need under one roof in Bharhut Nagar, Satna. Explore all specialized training categories available at Level Up Fitness Studio.
          </p>
        </div>

        {/* Services Grid (18 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-[#151515] border border-zinc-800 rounded-2xl p-6 hover:border-[#DFFF00] transition-all duration-300 transform hover:-translate-y-1.5 group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Row: Icon & Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-[#DFFF00] group-hover:bg-[#DFFF00]/10 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#DFFF00] text-black">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-black text-lg text-white tracking-wide uppercase mb-2 group-hover:text-[#DFFF00] transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <a
                  href={createWhatsAppUrl(`Hi Level Up Studio! I want to enquire about ${service.title} service in Satna.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-zinc-400 hover:text-[#25D366] transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Info</span>
                </a>

                <button
                  onClick={() => onOpenEnquiry(service.title)}
                  className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-[#DFFF00] hover:bg-[#DFFF00] hover:text-black text-white text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-1"
                >
                  <span>ENQUIRE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
