import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-zinc-900 border border-zinc-800 text-white hover:text-[#DFFF00] hover:border-[#DFFF00] transition-all"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-zinc-900/80 border border-zinc-800 text-white hover:text-[#DFFF00] hover:border-[#DFFF00] transition-all"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image & Caption Container */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
        <img
          src={item.imageUrl}
          alt={item.title}
          referrerPolicy="no-referrer"
          className="max-h-[70vh] w-auto object-contain rounded-xl border border-zinc-800 shadow-2xl"
        />
        <div className="mt-4 text-center max-w-xl">
          <span className="inline-block px-3 py-1 rounded bg-[#DFFF00] text-black font-extrabold text-[10px] uppercase tracking-widest mb-2">
            {item.category}
          </span>
          <h3 className="font-heading font-black text-xl text-white uppercase">
            {item.title}
          </h3>
          <p className="text-zinc-400 text-sm mt-1">
            {item.caption}
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-zinc-900/80 border border-zinc-800 text-white hover:text-[#DFFF00] hover:border-[#DFFF00] transition-all"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
