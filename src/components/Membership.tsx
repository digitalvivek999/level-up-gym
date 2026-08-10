import React from 'react';
import { Check, Flame, MessageSquare, ArrowRight } from 'lucide-react';
import { MEMBERSHIP_PLANS, createWhatsAppUrl } from '../config/gymConfig';

interface MembershipProps {
  onOpenEnquiry: (planName?: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="membership" className="py-24 bg-[#0a0a0a] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#DFFF00] text-xs font-extrabold uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5" />
            TRANSPARENT & FLEXIBLE
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none mb-4">
            MEMBERSHIP <span className="text-[#DFFF00]">PLANS.</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg">
            Choose the membership track that fits your schedule and goals. Contact our team in Bharhut Nagar, Satna for current rates and promotional offers.
          </p>
        </div>

        {/* 4 Membership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`bg-[#151515] border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative group ${
                plan.popular
                  ? 'border-[#DFFF00] shadow-[0_0_30px_rgba(223,255,0,0.15)] bg-gradient-to-b from-[#181818] to-[#121212]'
                  : 'border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {/* Popular Tag */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#DFFF00] text-black font-heading font-black text-[10px] uppercase tracking-widest shadow-lg">
                  MOST POPULAR TRACK
                </div>
              )}

              <div>
                <h3 className="font-heading font-black text-xl text-white uppercase mb-2 group-hover:text-[#DFFF00] transition-colors">
                  {plan.name}
                </h3>

                <div className="mb-6 pb-4 border-b border-zinc-800">
                  <div className="font-heading font-black text-2xl text-[#DFFF00]">
                    {plan.price}
                  </div>
                  <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider mt-0.5">
                    {plan.duration}
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <div className="w-4 h-4 rounded bg-[#DFFF00]/10 border border-[#DFFF00]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#DFFF00]" />
                      </div>
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-zinc-800/80">
                <a
                  href={createWhatsAppUrl(`Hi Level Up Studio! I want to enquire about the ${plan.name} pricing and joining process in Satna.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#25D366] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>WHATSAPP PRICE ENQUIRY</span>
                </a>

                <button
                  onClick={() => onOpenEnquiry(plan.name)}
                  className="w-full py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-[#DFFF00] text-white hover:text-[#DFFF00] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
