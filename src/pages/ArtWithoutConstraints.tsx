import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import ProjectLayout from '../components/ProjectLayout';

export default function ArtWithoutConstraints() {
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);

  const images = [
    { src: 'https://lh3.googleusercontent.com/d/1crvrP6yD2f7YD3G-Xig8QTM41p3K3pba', alt: 'Art Exploration - Piece 1' },
    { src: 'https://lh3.googleusercontent.com/d/1IkWnIpbvyVS87jcDv-qhT0zRvojpGDqN', alt: 'Art Exploration - Piece 2' },
    { src: 'https://lh3.googleusercontent.com/d/1mcMd9Tqvumj4vUuEfGLY-as-R1q5YRKL', alt: 'Art Exploration - Piece 3' },
    { src: 'https://lh3.googleusercontent.com/d/1jQbnFUcHUBJASTThosI5H89RL3JS9IZ_', alt: 'Art Exploration - Piece 4' },
    { src: 'https://lh3.googleusercontent.com/d/1sEld8XhnKCcUEzMOsHNTbiCJzMNg_6B8/', alt: 'Art Exploration - Piece 5' },
    { src: 'https://lh3.googleusercontent.com/d/1JGlRtv4ti8ExAt6Y1XKEVnu6W-QEYh1x', alt: 'Art Exploration - Piece 6' },
    { src: 'https://lh3.googleusercontent.com/d/1hdbDs_-uI9vjzJXSiMQyQcyWdwDK_jXp', alt: 'Art Exploration - Piece 7' },
    { src: 'https://lh3.googleusercontent.com/d/1CzWjNUVw2EZzCX1-ga3amET6XYAYcxYS', alt: 'Art Exploration - Piece 8' },
    { src: 'https://lh3.googleusercontent.com/d/1SAV-81Ql8I9mrnTVk60gHgvQa7i7043Z', alt: 'Art Exploration - Piece 9' },
    { src: 'https://lh3.googleusercontent.com/d/1uYKdD8O0emjinVDFcnYtQzU1IEKpQ7Y-', alt: 'Art Exploration - Piece 10' }
  ];

  return (
    <>
      <ProjectLayout
        id={9}
        title="Art Without Constraints"
        category="Creative Practice"
        headerCategory="Creative Practice"
        role="Artist"
        tools="Illustration series, mixed media explorations"
        impact="Creative freedom, style exploration, and visual storytelling without commercial constraints"
        impactLabel="Focus"
        tldr={
          <>
            <p className="text-2xl font-bold text-punchy leading-snug mb-2 font-sans">
              Design may be a career, but creativity is a constant.
            </p>
            <p>
              This collection brings together illustrations and paintings created purely for the enjoyment of making art. Free from briefs, approvals, and strategic objectives, each piece is an opportunity to explore new techniques, experiment with different mediums, and follow ideas wherever they naturally evolve.
            </p>
            <p>
              From portrait studies and digital paintings to whimsical character illustrations and observational sketches, the work reflects a lifelong curiosity and a desire to keep learning through creation. Some pieces began as technical exercises, others as fleeting ideas worth exploring, but all share the same purpose: creating simply because it brings joy.
            </p>
            <p>
              Maintaining a personal art practice keeps creativity active beyond working hours and continues to influence professional design work. It serves as a reminder that the strongest ideas often emerge through experimentation, play, and a willingness to create without a defined outcome.
            </p>
          </>
        }
        heroImage="/src/assets/images/art_without_constraints_hero.png"
        afterOverview={
          <div className="w-full py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {images.map((img, index) => (
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
