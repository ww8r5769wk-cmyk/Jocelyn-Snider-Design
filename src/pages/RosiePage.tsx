import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import ProjectLayout from '../components/ProjectLayout';

export default function RosiePage() {
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);

  const images = [
    { src: 'https://lh3.googleusercontent.com/d/1Sx5WK2Zl5Apoa6nYLPghaHoLz2fj_FDK', alt: 'Rosie - All Bottle Designs (All.png)' },
    { src: 'https://lh3.googleusercontent.com/d/1tXRPxRl03EGVyt9SApx0oihlPADHEFWg', alt: 'Rosie - Detail Showcase 1' },
    { src: 'https://lh3.googleusercontent.com/d/1knt_W01eF82FbwVwbumXZpQXZDMqEkbY', alt: 'Rosie - Detail Showcase 2' },
    { src: 'https://lh3.googleusercontent.com/d/1qWu0oLZoJdUgUoU3vUsQaLbtBPxMpUpS', alt: 'Rosie - Detail Showcase 3' },
    { src: 'https://lh3.googleusercontent.com/d/1adOaNxSfeYTRQXbPH5qbnQr19_9YEPSK', alt: 'Rosie - Detail Showcase 4' }
  ];

  return (
    <>
      <ProjectLayout
        id={5}
        title="Rosie"
        category="Wine/Beverage"
        headerCategory="Packaging Design + Brand Identity"
        role="Sole Designer (Concept + Execution)"
        tools="Wine label system, brand identity, packaging exploration, visual direction, mockups"
        impact="Creating a distinctive wine brand identity that balances elegance and personality while standing out in a traditional category"
        tldr="Rosie is a conceptual wine brand designed to challenge conventional feminine wine packaging through bold illustration, strategic storytelling, and a cohesive packaging system built for strong shelf impact."
        challenge={
          <div className="space-y-4">
            <p>Many wine brands targeting young women, starting their wine journey, rely on predictable visual tropes, making the category feel repetitive and visually interchangeable. Rosie aimed to create a more confident, culturally relevant alternative that could stand apart on the shelf.</p>
          </div>
        }
        processHeading="OBJECTIVE"
        process={
          <ul className="list-disc pl-5 space-y-2">
            <li>Create a differentiated wine brand identity.</li>
            <li>Develop a cohesive multi-SKU packaging system.</li>
            <li>Use illustration as a storytelling and branding tool.</li>
            <li>Balance femininity with edge, confidence, and individuality.</li>
          </ul>
        }
        solution={
          <div className="space-y-4">
            <p>Rosie is a narrative-driven packaging system inspired by Rosie the Riveter and vintage tattoo illustration.</p>
            <p>Each varietal was built around a unique character and emotional tone:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Merlot:</strong> Strength and resilience</li>
              <li><strong>Chardonnay:</strong> Mystery and fluidity</li>
              <li><strong>Rosé:</strong> Exploration and individuality</li>
            </ul>
            <p>A unified typography system, bold illustrative framing, and consistent packaging structure helped create a strong and recognizable shelf presence across the lineup.</p>
          </div>
        }
        impactHeading="RESULT"
        narrativeImpact={
          <div className="space-y-4">
            <p>Rosie highlights the ability to combine illustration, packaging, and strategic brand thinking into a cohesive visual system. The project demonstrates a senior-level approach to storytelling, differentiation, and designing with both emotional connection and commercial impact in mind.</p>
          </div>
        }
        heroImage="/src/assets/images/rosie_hero.png"
        afterOverview={
          <div className="w-full space-y-6 md:space-y-8 py-6">
            {/* First image: full width (All.png) */}
            {images.slice(0, 1).map((img, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-2xl md:rounded-3xl cursor-zoom-in flex justify-center bg-transparent"
                onClick={() => setSelectedImg(img)}
              >
                <motion.img
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  src={img.src}
                  alt={img.alt}
                  className="max-w-full h-auto object-contain rounded-2xl md:rounded-3xl shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}

            {/* Remaining 4 images: 2-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {images.slice(1).map((img, index) => (
                <div 
                  key={index} 
                  className="overflow-hidden rounded-2xl md:rounded-3xl cursor-zoom-in flex justify-center bg-transparent"
                  onClick={() => setSelectedImg(img)}
                >
                  <motion.img
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    src={img.src}
                    alt={img.alt}
                    className="max-w-full h-auto object-contain rounded-2xl md:rounded-3xl shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        }
      />

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition-colors duration-200 cursor-pointer z-50"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.src}
                alt={selectedImg.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
