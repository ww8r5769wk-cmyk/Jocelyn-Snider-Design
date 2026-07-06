import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface FiveImageGridProps {
  fiveGridImg1?: string;
  fiveGridImg2?: string;
  fiveGridImg3?: string;
  fiveGridImg4?: string;
  fiveGridImg5?: string;
  title: string;
  projectId: number;
}

export default function FiveImageGrid({
  fiveGridImg1,
  fiveGridImg2,
  fiveGridImg3,
  fiveGridImg4,
  fiveGridImg5,
  title,
  projectId
}: FiveImageGridProps) {
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);

  const imagesList = [
    { keyName: 'fiveGridImg2', src: fiveGridImg2, alt: `${title} - Showcase 2`, colSpan: 'md:col-span-3' },
    { keyName: 'fiveGridImg3', src: fiveGridImg3, alt: `${title} - Showcase 3`, colSpan: 'md:col-span-3' },
    { keyName: 'fiveGridImg4', src: fiveGridImg4, alt: `${title} - Showcase 4`, colSpan: 'md:col-span-3' },
    { keyName: 'fiveGridImg5', src: fiveGridImg5, alt: `${title} - Showcase 5`, colSpan: 'md:col-span-3' },
    { keyName: 'fiveGridImg1', src: fiveGridImg1, alt: `${title} - Showcase 1`, colSpan: 'md:col-span-12' }
  ].filter(item => !!item.src);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-[10px] items-start" id={`project-${projectId}-five-image-grid-container`}>
      {imagesList.map((item, index) => (
        <div 
          key={`project-${projectId}-${item.keyName}-${index}`}
          className={`col-span-1 ${item.colSpan} overflow-hidden rounded-3xl h-auto w-full cursor-zoom-in`}
          id={`project-${projectId}-fivegrid-wrapper-${item.keyName}`}
          onClick={() => setSelectedImg({ src: item.src, alt: item.alt })}
        >
          <motion.img
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            src={item.src}
            alt={item.alt}
            className="max-w-full h-auto w-full rounded-3xl block"
            referrerPolicy="no-referrer"
            id={`project-${projectId}-fivegrid-img-${item.keyName}`}
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
            id={`project-${projectId}-five-lightbox-overlay`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition-colors duration-200 cursor-pointer"
              aria-label="Close lightbox"
              id={`project-${projectId}-five-lightbox-close`}
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
              id={`project-${projectId}-five-lightbox-content`}
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

