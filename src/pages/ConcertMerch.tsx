import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import ProjectLayout from '../components/ProjectLayout';

export default function MusicFestivalPage() {
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);

  const images = [
    { src: 'https://lh3.googleusercontent.com/d/1OrY16Dd0mAX2iT-WvKCJh5qh6OTZsbEG', alt: 'Concert Merchandise Apparel Detail' },
    { src: 'https://lh3.googleusercontent.com/d/1LWMq7Frf9SRNFIKPJY1wMlZab-Pa-fYX', alt: 'Blink-182 Reunion Tour Merchandise - Bored to Death' },
    { src: 'https://lh3.googleusercontent.com/d/1M9RsigMiLAjj2XcyaIKz66XDppINEMT4', alt: 'Taylor Swift Eras Tour Surprise Songs Merchandise' }
  ];

  return (
    <>
      <ProjectLayout
        id={8}
        title="Concert Merch"
        category="Music/Merchandise Design"
        headerCategory="Apparel + Typography"
        role="Sole Designer (Concept + Execution)"
        tools="Typography-driven apparel graphics"
        impact="Translating live music experiences into minimal, concept-led wearable design"
        tldr="A personal design project created for concerts I attended, exploring how artist merch can feel more fashion-forward, wearable, and emotionally connected to the live music experience."
        challenge={
          <div className="space-y-4">
            <p>As an avid concert-goer, official artist merchandise doesn’t tend to align with fashionable clothing pieces. Much of it relies heavily on artist imagery, oversized graphics, or overt branding, making it feel more promotional than wearable.</p>
          </div>
        }
        processHeading="THE GOAL"
        process={
          <div className="space-y-4">
            <p>The goal - to create concert merch that felt elevated enough to integrate into my everyday wardrobe while still capturing the emotional connection and nostalgia tied to the live experience.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Create custom concert apparel people genuinely wanted to wear</li>
              <li>Design merch that felt subtle, wearable, and fashion-forward</li>
              <li>Use niche lyrical and emotional references instead of obvious branding</li>
              <li>Capture the feeling of a specific concert experience through minimal graphic design</li>
            </ul>
          </div>
        }
        solution={
          <div className="space-y-4">
            <p>A series of custom apparel pieces was designed, inspired by concerts attended, using typography-driven graphics and understated storytelling to create more wearable fan merchandise.</p>
            <p>For the Blink-182 reunion tour, a minimalist typographic design was created, inspired by the lyric “Bored to Death,” drawing on nostalgia and excitement surrounding Tom DeLonge’s return to the band.</p>
            <p>For the Taylor Swift Eras Tour, focus was placed on the acoustic surprise song set, a unique moment that changed nightly. The final sweatshirt design used clean typography and restrained composition to commemorate a fleeting experience shared only by that audience.</p>
            <p>The overall creative direction prioritizes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Minimal typography</li>
              <li>Emotional storytelling</li>
              <li>Subtle fan references</li>
              <li>Everyday wearability</li>
              <li>Timeless design over trend-driven merch aesthetics</li>
            </ul>
          </div>
        }
        impactHeading="RESULT"
        narrativeImpact={
          <div className="space-y-4">
            <p>The final pieces became wearable keepsakes that felt authentic to both my personal style and the concert experiences themselves. This project reinforced my interest in creating emotionally driven design work that balances storytelling, branding, and wearability, while exploring how merchandise can exist beyond traditional fan apparel and function as lifestyle design.</p>
          </div>
        }
        heroImage="/src/assets/images/concert_merch_hero.png"
        afterOverview={
          <div className="w-full space-y-6 md:space-y-8 py-6">
            {/* First image (Blink-182) full width */}
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

            {/* Remaining images in a 2-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              {images.slice(1).map((img, index) => (
                <div 
                  key={index} 
                  className={`w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[520px] overflow-hidden rounded-2xl md:rounded-3xl cursor-zoom-in flex items-center justify-center bg-transparent ${index === 0 ? 'md:col-span-1' : 'md:col-span-3'}`}
                  onClick={() => setSelectedImg(img)}
                >
                  <motion.img
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                    src={img.src}
                    alt={img.alt}
                    className={`rounded-2xl md:rounded-3xl shadow-sm ${index === 0 ? 'max-w-full max-h-full object-contain' : 'w-full h-full object-cover'}`}
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

