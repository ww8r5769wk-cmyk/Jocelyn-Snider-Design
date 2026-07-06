// src/components/SixImageGrid.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export interface GalleryAsset {
  keyName: string;
  src: string;
  alt: string;
  colSpan?: string;
}

interface SixImageGridProps {
  images?: GalleryAsset[];
  projectId: number;
  sixGridImg1?: string;
  sixGridImg2?: string;
  sixGridImg3?: string;
  sixGridImg4?: string;
  sixGridImg5?: string;
  sixGridImg6?: string;
  title?: string;
}

export default function SixImageGrid({
  images: propImages,
  projectId,
  sixGridImg1,
  sixGridImg2,
  sixGridImg3,
  sixGridImg4,
  sixGridImg5,
  sixGridImg6,
  title = ''
}: SixImageGridProps) {
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);

  // Fallback if no images prop is passed directly
  const images = propImages || [
    { keyName: 'sixGridImg1', src: sixGridImg1 || '', alt: `${title} - Gallery Asset 1`, colSpan: 'col-span-1' },
    { keyName: 'sixGridImg2', src: sixGridImg2 || '', alt: `${title} - Gallery Asset 2`, colSpan: 'col-span-1' },
    { keyName: 'sixGridImg3', src: sixGridImg3 || '', alt: `${title} - Gallery Asset 3`, colSpan: 'col-span-1' },
    { keyName: 'sixGridImg4', src: sixGridImg4 || '', alt: `${title} - Gallery Asset 4`, colSpan: 'col-span-1' },
    { keyName: 'sixGridImg5', src: sixGridImg5 || '', alt: `${title} - Gallery Asset 5`, colSpan: 'col-span-1' },
    { keyName: 'sixGridImg6', src: sixGridImg6 || '', alt: `${title} - Gallery Asset 6`, colSpan: 'col-span-1' }
  ].filter(img => img.src);

  return (
    <div 
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch place-items-stretch" 
      id={`project-${projectId}-six-image-grid`}
    >
      {images.map((img, idx) => (
        <div 
          key={`six-${img.keyName}-${idx}`} 
          className={`overflow-hidden rounded-3xl border border-primary/5 shadow-sm cursor-zoom-in w-full ${img.colSpan || 'col-span-1'}`}
          id={`project-${projectId}-sixgrid-wrapper-${idx + 1}`}
          onClick={() => setSelectedImg({ src: img.src, alt: img.alt })}
        >
          <motion.img
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            src={img.src}
            alt={img.alt}
            className="w-full h-auto block rounded-3xl"
            referrerPolicy="no-referrer"
            id={`project-${projectId}-sixgrid-img-${idx + 1}`}
          />
        </div>
      ))}

      {/* Fully isolated modal lightbox container local to this instance */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
            id={`project-${projectId}-six-lightbox-overlay`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition-colors duration-200 cursor-pointer"
              aria-label="Close lightbox"
              id={`project-${projectId}-six-lightbox-close`}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              id={`project-${projectId}-six-lightbox-content`}
            >
              <img
                src={selectedImg.src}
                alt={selectedImg.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}