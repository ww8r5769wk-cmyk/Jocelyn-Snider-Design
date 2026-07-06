// src/components/TwoImageGrid.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export interface GalleryAsset {
  keyName: string;
  src: string;
  alt: string;
  colSpan?: string;
}

interface TwoImageGridProps {
  images?: GalleryAsset[];
  projectId: number;
  img1?: string;
  img2?: string;
  title?: string;
}

export default function TwoImageGrid({
  images: propImages,
  projectId,
  img1,
  img2,
  title = ''
}: TwoImageGridProps) {
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);

  // Fallback if no images prop is passed directly
  const images = propImages || [
    { keyName: 'twoGridImg1', src: img1 || '', alt: `${title} - Extra Asset 1`, colSpan: 'col-span-1' },
    { keyName: 'twoGridImg2', src: img2 || '', alt: `${title} - Extra Asset 2`, colSpan: 'col-span-1' }
  ].filter(img => img.src);

  return (
    <div 
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch place-items-stretch" 
      id={`project-${projectId}-two-image-grid`}
    >
      {images.map((img, idx) => (
        <div 
          key={`two-${img.keyName}-${idx}`} 
          className={`overflow-hidden rounded-3xl border border-primary/5 shadow-sm cursor-zoom-in w-full ${img.colSpan || 'col-span-1'}`}
          id={`project-${projectId}-twogrid-wrapper-${idx + 1}`}
          onClick={() => setSelectedImg({ src: img.src, alt: img.alt })}
        >
          <motion.img
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            src={img.src}
            alt={img.alt}
            className="w-full h-auto block rounded-3xl"
            referrerPolicy="no-referrer"
            id={`project-${projectId}-twogrid-img-${idx + 1}`}
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
            id={`project-${projectId}-two-lightbox-overlay`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition-colors duration-200 cursor-pointer"
              aria-label="Close lightbox"
              id={`project-${projectId}-two-lightbox-close`}
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
              id={`project-${projectId}-two-lightbox-content`}
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