import React from 'react';
import { Phone, MessageSquare, Flame } from 'lucide-react';
import { GYM_CONFIG, createWhatsAppUrl } from '../config/gymConfig';

interface MobileBottomBarProps {
  onOpenEnquiry: (programName?: string) => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-black/95 backdrop-blur-lg border-t border-[#FF3D00]/30 p-2.5 flex items-center gap-2 shadow-[0_-5px_25px_rgba(0,0,0,0.8)]">
      
      {/* Call Button */}
      <a
        href={`tel:${GYM_CONFIG.phone}`}
        className="flex-1 py-3 px-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
      >
        <Phone className="w-3.5 h-3.5 text-[#FF3D00]" />
        <span>CALL</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={createWhatsAppUrl("Hi Level Up Fitness Studio! I want to enquire about joining in Satna.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-2 rounded-lg bg-[#25D366] text-black font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-md"
      >
        <MessageSquare className="w-3.5 h-3.5 fill-black" />
        <span>WHATSAPP</span>
      </a>

      {/* Join Button */}
      <button
        onClick={() => onOpenEnquiry("Mobile Bar Join")}
        className="flex-1 py-3 px-2 rounded-lg bg-[#FF3D00] text-black font-extrabold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1 active:scale-95 transition-transform shadow-[0_0_15px_rgba(255,61,0,0.4)]"
      >
        <Flame className="w-3.5 h-3.5 fill-black" />
        <span>JOIN NOW</span>
      </button>

    </div>
  );
};
