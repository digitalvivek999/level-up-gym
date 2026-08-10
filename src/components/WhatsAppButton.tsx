import React from 'react';
import { MessageSquare } from 'lucide-react';
import { createWhatsAppUrl } from '../config/gymConfig';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={createWhatsAppUrl("Hi Level Up Fitness Studio Satna! I have a question about gym membership and personal training.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Level Up Studio on WhatsApp"
      className="fixed bottom-20 sm:bottom-6 right-5 z-40 w-14 h-14 rounded-2xl bg-[#25D366] text-black flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all group"
    >
      <MessageSquare className="w-7 h-7 fill-black group-hover:rotate-12 transition-transform" />
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-2xl bg-[#25D366] animate-ping opacity-30 pointer-events-none" />

      {/* Tooltip on Desktop */}
      <span className="hidden lg:block absolute right-16 bg-black text-white text-[11px] font-extrabold uppercase tracking-wider py-1.5 px-3 rounded-lg border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
        Chat on WhatsApp
      </span>
    </a>
  );
};
