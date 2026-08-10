import React, { useState } from 'react';
import { X, CheckCircle, Code, Settings, Share2, Copy, ExternalLink, HelpCircle, Smartphone, MapPin } from 'lucide-react';
import { GYM_CONFIG } from '../config/gymConfig';

interface OwnerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerGuideModal: React.FC<OwnerGuideModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyConfigSnippet = () => {
    const snippet = `// Edit file: /src/config/gymConfig.ts
export const GYM_CONFIG = {
  name: "LEVEL UP FITNESS STUDIO",
  phone: "${GYM_CONFIG.phone}",
  whatsapp: "${GYM_CONFIG.whatsapp}",
  address: "Behind Nahar Nursing Hospital, Behind Durga Mandir, Bharhut Nagar, Satna, MP 485005",
  instagramUrl: "${GYM_CONFIG.instagramUrl}",
};`;
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0F0F0F] border border-[#FF3D00] rounded-3xl p-6 sm:p-8 text-white shadow-[0_0_50px_rgba(255,61,0,0.2)] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#FF3D00] text-black flex items-center justify-center font-black">
            <Settings className="w-6 h-6 fill-black" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wide">
              OWNER IMPLEMENTATION <span className="text-[#FF3D00]">GUIDE</span>
            </h2>
            <p className="text-xs text-zinc-400">
              For Coach Shashank Khare & Studio Admins
            </p>
          </div>
        </div>

        <div className="space-y-6 text-sm text-zinc-300 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
          
          {/* Quick Info Box */}
          <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 font-black text-white text-xs uppercase tracking-wider text-[#DFFF00]">
              <CheckCircle className="w-4 h-4 text-[#DFFF00]" />
              <span>CURRENT LIVE CONFIGURATION</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div><strong className="text-zinc-400">Phone:</strong> {GYM_CONFIG.phone}</div>
              <div><strong className="text-zinc-400">WhatsApp:</strong> {GYM_CONFIG.whatsapp}</div>
              <div><strong className="text-zinc-400">Coach:</strong> Shashank Khare</div>
              <div><strong className="text-zinc-400">Locality:</strong> Bharhut Nagar, Satna, MP</div>
            </div>
          </div>

          {/* Section 1: Updating Gym Config */}
          <div className="space-y-3">
            <h3 className="font-heading font-black text-white text-base uppercase tracking-wide border-b border-zinc-800 pb-2 flex items-center gap-2">
              <Code className="w-4 h-4 text-[#FF3D00]" />
              <span>1. HOW TO UPDATE PHONE, PRICING & SOCIAL LINKS</span>
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              All gym contact details, pricing plans, service lists, trainer certifications, and Google Maps links are stored cleanly in one central configuration file: <code className="bg-zinc-900 px-2 py-1 rounded text-[#FF3D00]">/src/config/gymConfig.ts</code>.
            </p>
            
            <div className="relative rounded-xl bg-black border border-zinc-800 p-4 font-mono text-xs text-zinc-300">
              <button
                onClick={copyConfigSnippet}
                className="absolute top-3 right-3 px-2.5 py-1 rounded bg-zinc-800 hover:bg-[#FF3D00] hover:text-black text-[10px] font-sans font-bold uppercase transition-all flex items-center gap-1"
              >
                {copied ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
              <pre className="overflow-x-auto text-[11px] leading-relaxed">
{`// File: src/config/gymConfig.ts
export const GYM_CONFIG = {
  phone: "${GYM_CONFIG.phone}",
  whatsapp: "${GYM_CONFIG.whatsapp}",
  instagramUrl: "${GYM_CONFIG.instagramUrl}",
  mapsUrl: "${GYM_CONFIG.mapsUrl}",
};`}
              </pre>
            </div>
          </div>

          {/* Section 2: Adding Gallery Images */}
          <div className="space-y-3">
            <h3 className="font-heading font-black text-white text-base uppercase tracking-wide border-b border-zinc-800 pb-2 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#FF3D00]" />
              <span>2. HOW TO REPLACE GALLERY & GYM PHOTOS</span>
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              To upload your own photos of Coach Shashank, client transformations, or equipment at Bharhut Nagar:
            </p>
            <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1">
              <li>Upload image files into the <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-[#FF3D00]">/public</code> directory or host them online (e.g. Google Drive/Imgur/Cloudinary).</li>
              <li>Update the URL variables in <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-[#FF3D00]">GYM_IMAGES</code> inside <code className="bg-zinc-900 px-1.5 py-0.5 rounded text-[#FF3D00]">/src/config/gymConfig.ts</code>.</li>
            </ul>
          </div>

          {/* Section 3: WhatsApp Leads */}
          <div className="space-y-3">
            <h3 className="font-heading font-black text-white text-base uppercase tracking-wide border-b border-zinc-800 pb-2 flex items-center gap-2">
              <Share2 className="w-4 h-4 text-[#25D366]" />
              <span>3. AUTOMATIC WHATSAPP LEAD ROUTING</span>
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              When prospective members click "JOIN NOW", "BOOK A TRIAL", or submit the enquiry form, a pre-filled message is generated and sent directly to your WhatsApp (<code className="bg-zinc-900 px-1.5 py-0.5 rounded text-[#25D366]">{GYM_CONFIG.whatsapp}</code>) so you can close sales instantly.
            </p>
          </div>

          {/* Section 4: Local SEO for Satna */}
          <div className="space-y-3">
            <h3 className="font-heading font-black text-white text-base uppercase tracking-wide border-b border-zinc-800 pb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF3D00]" />
              <span>4. SATNA LOCAL SEO HIGH-RANKING KEYWORDS</span>
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              This app is pre-optimized for Satna Google Search queries:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {["Gym in Satna", "Level Up Fitness Studio Satna", "Best gym in Bharhut Nagar", "Personal trainer Satna", "Boxing MMA academy Satna", "Zumba class Satna", "Shashank Khare gym"].map((tag) => (
                <span key={tag} className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-zinc-500">
            Level Up Fitness Studio Satna • Admin Documentation
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#FF3D00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all"
          >
            GOT IT
          </button>
        </div>

      </div>
    </div>
  );
};
