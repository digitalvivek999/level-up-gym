import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Flame, MapPin, Award, Settings } from 'lucide-react';
import { GYM_CONFIG, createWhatsAppUrl } from '../config/gymConfig';

interface NavbarProps {
  onOpenGuide: () => void;
  onOpenEnquiry: (programName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide, onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROGRAMS', href: '#programs' },
    { name: 'SERVICES', href: '#services' },
    { name: 'COMBAT', href: '#combat' },
    { name: 'COACH', href: '#coach' },
    { name: 'TRANSFORMATIONS', href: '#transformations' },
    { name: 'REVIEWS', href: '#reviews' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'MEMBERSHIP', href: '#membership' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-[#DFFF00] flex items-center justify-center text-black font-extrabold text-xl shadow-[0_0_15px_rgba(223,255,0,0.4)] group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 fill-black" />
            </div>
            <div>
              <div className="font-heading font-black text-lg sm:text-xl tracking-wider text-white leading-tight">
                LEVEL UP <span className="text-[#DFFF00]">STUDIO</span>
              </div>
              <div className="text-[10px] text-zinc-400 tracking-widest uppercase flex items-center gap-1 font-medium">
                <MapPin className="w-3 h-3 text-[#DFFF00]" /> BHARHUT NAGAR • SATNA
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden xl:flex items-center space-x-5 text-xs font-semibold tracking-wider text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#DFFF00] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#DFFF00] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenGuide}
              title="View Owner Implementation Guide"
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#DFFF00] hover:border-[#DFFF00]/50 transition-all text-xs flex items-center gap-1"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden lg:inline text-[11px]">Owner Guide</span>
            </button>

            <a
              href={`tel:${GYM_CONFIG.phone}`}
              className="px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white hover:border-[#DFFF00] hover:text-[#DFFF00] transition-all text-xs font-bold tracking-wider flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#DFFF00]" />
              <span>CALL NOW</span>
            </a>

            <button
              onClick={() => onOpenEnquiry("General Membership")}
              className="px-5 py-2.5 rounded-lg bg-[#DFFF00] text-black hover:bg-white font-extrabold text-xs tracking-wider transition-all transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(223,255,0,0.3)] flex items-center gap-2"
            >
              <span>JOIN NOW</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenGuide}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400"
              title="Guide"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white hover:text-[#DFFF00] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0a0a] border-b border-zinc-800 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md bg-zinc-900/80 text-zinc-300 hover:text-[#DFFF00] hover:bg-zinc-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${GYM_CONFIG.phone}`}
              className="w-full py-3 rounded-lg bg-zinc-900 border border-zinc-700 text-center text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#DFFF00]" />
              <span>CALL {GYM_CONFIG.phone}</span>
            </a>
            <a
              href={createWhatsAppUrl("Hi Level Up Fitness Studio! I'm interested in joining. Please share membership details.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg bg-[#25D366] text-black font-extrabold text-xs text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
