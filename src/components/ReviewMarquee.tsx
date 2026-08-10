import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

export const ReviewMarquee: React.FC = () => {
  const highlights = [
    "5.0 GOOGLE RATING ★★★★★",
    "PERSONAL ATTENTION",
    "KNOWLEDGEABLE COACH SHASHANK KHARE",
    "POSITIVE & MOTIVATING ENVIRONMENT",
    "STRUCTURED WORKOUT ROUTINES",
    "SUPPORTIVE COACHING",
    "REAL FITNESS TRANSFORMATION",
    "SATNA'S TOP FITNESS STUDIO"
  ];

  return (
    <div className="bg-[#DFFF00] text-black py-3 overflow-hidden font-heading font-extrabold text-xs sm:text-sm tracking-widest uppercase border-y border-black">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex gap-8 items-center shrink-0 pr-8">
          {highlights.map((text, index) => (
            <React.Fragment key={index}>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 fill-black text-[#DFFF00]" />
                {text}
              </span>
              <span className="opacity-40">•</span>
            </React.Fragment>
          ))}
        </div>
        {/* Repeated for seamless marquee */}
        <div className="flex gap-8 items-center shrink-0 pr-8" aria-hidden="true">
          {highlights.map((text, index) => (
            <React.Fragment key={`repeat-${index}`}>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 fill-black text-[#DFFF00]" />
                {text}
              </span>
              <span className="opacity-40">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
