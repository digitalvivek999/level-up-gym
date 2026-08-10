import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Building2, ExternalLink } from 'lucide-react';
import { GYM_CONFIG, GYM_IMAGES, createWhatsAppUrl } from '../config/gymConfig';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Address Details */}
          <div className="lg:col-span-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#DFFF00] text-xs font-extrabold uppercase tracking-widest mb-3">
              <MapPin className="w-3.5 h-3.5" />
              LOCATION & DIRECTIONS
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none mb-6">
              FIND US IN <span className="text-[#DFFF00]">SATNA.</span>
            </h2>

            <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#DFFF00] shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-black text-white text-base uppercase">
                    LEVEL UP FITNESS STUDIO
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mt-1">
                    Behind Nahar Nursing Hospital, <br />
                    Behind Durga Mandir, Bharhut Nagar, <br />
                    Satna, Madhya Pradesh 485005, India
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-zinc-300">
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">Landmark</span>
                  <span>Behind Nahar Nursing Hospital</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">Locality</span>
                  <span>Bharhut Nagar, Satna</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={GYM_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#DFFF00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(223,255,0,0.3)] flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>

              <a
                href={`tel:${GYM_CONFIG.phone}`}
                className="px-5 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white hover:text-[#DFFF00] hover:border-[#DFFF00] font-extrabold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#DFFF00]" />
                <span>CALL NOW</span>
              </a>

              <a
                href={createWhatsAppUrl("Hi Level Up Studio! I need location assistance to visit the studio in Bharhut Nagar, Satna.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#25D366] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>WHATSAPP LOCATION</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Visual Frame */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-[#151515] p-2 group shadow-2xl">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img
                  src={GYM_IMAGES.mapMock}
                  alt="Level Up Satna Google Maps Location"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Map Marker Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-bounce">
                  <div className="w-12 h-12 rounded-full bg-[#DFFF00] text-black flex items-center justify-center shadow-[0_0_30px_rgba(223,255,0,0.8)] border-2 border-black">
                    <MapPin className="w-7 h-7 fill-black" />
                  </div>
                  <span className="mt-2 px-3 py-1 rounded bg-black text-[#DFFF00] font-heading font-black text-xs uppercase tracking-wider border border-[#DFFF00]/50 shadow-xl">
                    LEVEL UP FITNESS STUDIO
                  </span>
                </div>

                {/* Bottom Overlay Link */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/95 backdrop-blur-md border border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="font-heading font-black text-white text-sm uppercase">
                      5.0 ★ SATNA FITNESS STUDIO
                    </div>
                    <div className="text-zinc-400 text-xs">
                      Bharhut Nagar, Satna, MP 485005
                    </div>
                  </div>

                  <a
                    href={GYM_CONFIG.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#DFFF00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all flex items-center gap-1 shrink-0"
                  >
                    <span>OPEN MAPS</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
