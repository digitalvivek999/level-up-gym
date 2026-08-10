import React from 'react';
import { Phone, MessageSquare, Instagram, MapPin, Flame, ExternalLink, Settings } from 'lucide-react';
import { GYM_CONFIG, createWhatsAppUrl } from '../config/gymConfig';

interface FooterProps {
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide }) => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'All Services', href: '#services' },
    { name: 'Combat Sports', href: '#combat' },
    { name: 'Coach Shashank', href: '#coach' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Google Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Membership', href: '#membership' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-black text-zinc-400 pt-16 pb-28 sm:pb-12 border-t border-zinc-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 pb-12 border-b border-zinc-800">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#DFFF00] flex items-center justify-center text-black font-black text-xl">
                <Flame className="w-6 h-6 fill-black" />
              </div>
              <span className="font-heading font-black text-2xl text-white tracking-wider">
                LEVEL UP <span className="text-[#DFFF00]">STUDIO</span>
              </span>
            </div>

            <p className="text-sm font-heading font-bold text-white uppercase tracking-widest mb-4">
              "Train. Transform. Level Up."
            </p>

            <p className="text-xs text-zinc-400 leading-relaxed mb-6 max-w-sm">
              Satna's premier fitness studio & combat academy offering personal training, functional workouts, boxing, MMA, Zumba, yoga and weight loss guidance under International Certified Coach Shashank Khare.
            </p>

            <div className="text-xs text-zinc-300 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#DFFF00] shrink-0 mt-0.5" />
                <span>Behind Nahar Nursing Hospital, Behind Durga Mandir, Bharhut Nagar, Satna, MP 485005</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#DFFF00]" />
                <a href={`tel:${GYM_CONFIG.phone}`} className="hover:text-[#DFFF00] font-bold">
                  {GYM_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#DFFF00]" />
                <a href={GYM_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#DFFF00]">
                  @levelupfitness_satna
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="font-heading font-black text-white uppercase text-sm tracking-wider mb-4 border-l-2 border-[#DFFF00] pl-2">
              QUICK NAVIGATION
            </h3>
            <ul className="space-y-2 text-xs font-semibold">
              {quickLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#DFFF00] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Programs & Services */}
          <div>
            <h3 className="font-heading font-black text-white uppercase text-sm tracking-wider mb-4 border-l-2 border-[#DFFF00] pl-2">
              PROGRAMS
            </h3>
            <ul className="space-y-2 text-xs font-semibold">
              {quickLinks.slice(6).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-[#DFFF00] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Connect Buttons */}
          <div>
            <h3 className="font-heading font-black text-white uppercase text-sm tracking-wider mb-4 border-l-2 border-[#DFFF00] pl-2">
              CONNECT
            </h3>

            <div className="space-y-2.5">
              <a
                href={`tel:${GYM_CONFIG.phone}`}
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#DFFF00] text-xs font-bold text-white flex items-center justify-between"
              >
                <span>CALL STUDIO</span>
                <Phone className="w-3.5 h-3.5 text-[#DFFF00]" />
              </a>

              <a
                href={createWhatsAppUrl("Hi Level Up Fitness Studio!")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-black font-extrabold text-xs flex items-center justify-between"
              >
                <span>WHATSAPP CHAT</span>
                <MessageSquare className="w-3.5 h-3.5 fill-black" />
              </a>

              <a
                href={GYM_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-pink-500 text-xs font-bold text-white flex items-center justify-between"
              >
                <span>INSTAGRAM</span>
                <Instagram className="w-3.5 h-3.5 text-pink-500" />
              </a>

              <a
                href={GYM_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#DFFF00] text-xs font-bold text-white flex items-center justify-between"
              >
                <span>GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#DFFF00]" />
              </a>
            </div>
          </div>

        </div>

        {/* Local SEO Keyword Tag Cloud & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 LEVEL UP FITNESS STUDIO. All Rights Reserved. • Bharhut Nagar, Satna, MP
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenGuide}
              className="text-zinc-400 hover:text-[#DFFF00] flex items-center gap-1 font-semibold"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Owner Implementation Guide</span>
            </button>
            <a href="#home" className="hover:text-white">
              Back to top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
