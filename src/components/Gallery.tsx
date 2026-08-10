import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import { GALLERY_DATA } from '../config/gymConfig';
import { GalleryItem } from '../types';
import { Lightbox } from './Lightbox';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['ALL', 'STUDIO', 'TRAINING', 'BOXING', 'GROUP FITNESS', 'TRANSFORMATIONS', 'COACH'];

  const filteredItems = activeCategory === 'ALL'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(g => g.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 bg-[#080808] border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#DFFF00] text-xs font-extrabold uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5" />
            STUDIO ATHLETIC GALLERY
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-none mb-4">
            INSIDE <span className="text-[#DFFF00]">LEVEL UP.</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg">
            A visual showcase of real training sessions, boxing pads, group energy, and studio facilities in Satna.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all ${
                activeCategory === cat
                  ? 'bg-[#DFFF00] text-black shadow-[0_0_15px_rgba(223,255,0,0.3)]'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden border border-zinc-800 cursor-pointer bg-[#151515] h-72"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge */}
              <span className="absolute top-4 left-4 px-3 py-1 rounded bg-black/80 backdrop-blur-md text-[#DFFF00] text-[10px] font-extrabold uppercase tracking-widest border border-[#DFFF00]/30">
                {item.category}
              </span>

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/80 text-white group-hover:text-[#DFFF00] transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-heading font-black text-white text-base uppercase mb-1 group-hover:text-[#DFFF00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          item={filteredItems[lightboxIndex]}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
};
