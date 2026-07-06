// FILE: src/pages/ConstellationPage.tsx
import React, { useState } from 'react';
import ProjectLayout from '../components/ProjectLayout';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function ConstellationPage() {
  const [selectedImg, setSelectedImg] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <ProjectLayout
        id={4}
        title="Constellation Data Labs"
        category="Technology"
        headerCategory="Brand Identity System"
        role="Brand Designer"
        tools="Brand identity, foundational assets, employee merchandise, scalable design system"
        impact="Building credibility and internal culture through a cohesive, scalable brand ecosystem"
        tldr="Led the design execution for the launch of Constellation Data Labs, creating a cohesive brand ecosystem spanning digital assets, internal tools, and employee merchandise. The work focused on building credibility, strengthening company culture, and creating a scalable visual identity that balanced professionalism with personality."
        challenge={
          <div className="space-y-4">
            <p>Constellation Data Labs needed to launch as a modern and innovative brand while maintaining alignment with the credibility of the larger Constellation umbrella.</p>
            <p>The challenge was to create a cohesive brand experience across both corporate and cultural touch-points without falling into generic or overly corporate design solutions.</p>
          </div>
        }
        processHeading="OBJECTIVE"
        process={
          <ul className="list-disc pl-5 space-y-2">
            <li>Establish a polished and scalable visual identity</li>
            <li>Create consistency across digital, print, and employee-facing assets</li>
            <li>Design merchandise employees would genuinely want to wear</li>
            <li>Build tools that supported both professionalism and company culture</li>
          </ul>
        }
        solution={
          <div className="space-y-4">
            <p>As the sole designer on the project, a full suite of branded assets was developed, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>LinkedIn banners and profile assets</li>
              <li>Business cards</li>
              <li>Presentation templates</li>
              <li>Meeting backgrounds</li>
              <li>Email signature systems</li>
              <li>Employee merchandise and launch apparel</li>
            </ul>
            <p>The visual approach focused on creating a clean, futuristic, and modular system that reflected the company’s data-driven positioning while remaining approachable and engaging.</p>
            <p>For the merchandise collection, the strategy shifted away from traditional corporate swag in favour of elevated, streetwear-inspired pieces that blended minimal branding with company culture references.</p>
            <p>Close collaboration with leadership and marketing teams ensured the work aligned with both business goals and employee engagement initiatives.</p>
          </div>
        }
        impactHeading="RESULT"
        narrativeImpact={
          <div className="space-y-4">
            <p>The launch of Constellation Data Labs established a cohesive, scalable brand system that built credibility externally while strengthening internal culture from day one. Across digital, print, and experiential touchpoints, the identity delivered a consistent and modern presence that clearly differentiated the company within the real estate data space, while maintaining trust within the broader corporate umbrella. Thoughtfully designed tools and merchandise also helped drive strong employee engagement and made the brand feel tangible in everyday use.</p>
          </div>
        }
        heroImage="/src/assets/images/constellation_hero_banner.png"
        afterOverview={
          <div className="w-full space-y-6 md:space-y-8">
            {/* Row 1: T-shirts (2 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch place-items-stretch">
              <div 
                className="w-full rounded-3xl overflow-hidden bg-white p-0 border border-neutral-100/40 shadow-sm flex items-center justify-center cursor-zoom-in transition-all duration-300 hover:shadow-md hover:scale-[1.005]"
                onClick={() => setSelectedImg({
                  src: '/src/assets/images/regenerated_image_1780777300434.png',
                  alt: 'Constellation T-shirts with CDL logo and Nik & Rick back print'
                })}
              >
                <img 
                  src="/src/assets/images/regenerated_image_1780777300434.png" 
                  alt="Constellation T-shirts with CDL logo and Nik & Rick back print"
                  className="w-full h-auto block rounded-3xl object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div 
                className="w-full rounded-3xl overflow-hidden bg-white p-0 border border-neutral-100/40 shadow-sm flex items-center justify-center cursor-zoom-in transition-all duration-300 hover:shadow-md hover:scale-[1.005]"
                onClick={() => setSelectedImg({
                  src: '/src/assets/images/regenerated_image_1780777300913.png',
                  alt: 'Constellation T-shirts with pocket logo and skyline graphic'
                })}
              >
                <img 
                  src="/src/assets/images/regenerated_image_1780777300913.png" 
                  alt="Constellation T-shirts with pocket logo and skyline graphic"
                  className="w-full h-auto block rounded-3xl object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Row 2: Hoodie & Caps (2 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch place-items-stretch">
              <div 
                className="w-full rounded-3xl overflow-hidden bg-white p-0 border border-neutral-100/40 shadow-sm flex items-center justify-center cursor-zoom-in transition-all duration-300 hover:shadow-md hover:scale-[1.005]"
                onClick={() => setSelectedImg({
                  src: '/src/assets/images/regenerated_image_1780777301509.png',
                  alt: 'Constellation Black CDL Hoodie mockup'
                })}
              >
                <img 
                  src="/src/assets/images/regenerated_image_1780777301509.png" 
                  alt="Constellation Black CDL Hoodie mockup"
                  className="w-full h-auto block rounded-3xl object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div 
                className="w-full rounded-3xl overflow-hidden bg-white p-0 border border-neutral-100/40 shadow-sm flex items-center justify-center cursor-zoom-in transition-all duration-300 hover:shadow-md hover:scale-[1.005]"
                onClick={() => setSelectedImg({
                  src: '/src/assets/images/regenerated_image_1780777302332.png',
                  alt: 'Constellation branded caps mockup'
                })}
              >
                <img 
                  src="/src/assets/images/regenerated_image_1780777302332.png" 
                  alt="Constellation branded caps mockup"
                  className="w-full h-auto block rounded-3xl object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Row 3: Full-width composite apparel */}
            <div 
              className="w-full rounded-3xl overflow-hidden bg-white p-0 border border-neutral-100/40 shadow-sm flex items-center justify-center cursor-zoom-in transition-all duration-300 hover:shadow-md hover:scale-[1.005]"
              onClick={() => setSelectedImg({
                src: '/src/assets/images/regenerated_image_1780777302663.png',
                alt: 'Constellation full brand apparel and merchandise collection'
              })}
            >
              <img 
                src="/src/assets/images/regenerated_image_1780777302663.png" 
                alt="Constellation full brand apparel and merchandise collection"
                className="w-full h-auto block rounded-3xl object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        }
        afterResult={
          <div className="w-full space-y-6 md:space-y-8">
            {/* Row 1: Business Cards Flatlay (Full-width) */}
            <div 
              className="w-full rounded-3xl overflow-hidden bg-white p-0 border border-neutral-100/40 shadow-sm flex items-center justify-center cursor-zoom-in transition-all duration-300 hover:shadow-md hover:scale-[1.005]"
              onClick={() => setSelectedImg({
                src: '/src/assets/images/regenerated_image_1783104143113.png',
                alt: 'Constellation Business Cards flat lay'
              })}
            >
              <img 
                src="/src/assets/images/regenerated_image_1783104143113.png" 
                alt="Constellation Business Cards flat lay"
                className="w-full h-auto block rounded-3xl object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Row 2: Vertical and Horizontal Business Cards (2 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch place-items-stretch">
              <div 
                className="w-full rounded-3xl overflow-hidden bg-white p-0 border border-neutral-100/40 shadow-sm flex items-center justify-center cursor-zoom-in transition-all duration-300 hover:shadow-md hover:scale-[1.005]"
                onClick={() => setSelectedImg({
                  src: '/src/assets/images/regenerated_image_1780777197574.png',
                  alt: 'Constellation Vertical Business Card details'
                })}
              >
                <img 
                  src="/src/assets/images/regenerated_image_1780777197574.png" 
                  alt="Constellation Vertical Business Card details"
                  className="w-full h-auto block rounded-3xl object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div 
                className="w-full rounded-3xl overflow-hidden bg-white p-0 border border-neutral-100/40 shadow-sm flex items-center justify-center cursor-zoom-in transition-all duration-300 hover:shadow-md hover:scale-[1.005]"
                onClick={() => setSelectedImg({
                  src: '/src/assets/images/regenerated_image_1780777198396.png',
                  alt: 'Constellation Horizontal Business Card details'
                })}
              >
                <img 
                  src="/src/assets/images/regenerated_image_1780777198396.png" 
                  alt="Constellation Horizontal Business Card details"
                  className="w-full h-auto block rounded-3xl object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Row 3: LinkedIn Profile and Teams Backgrounds (2 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch place-items-stretch">
              <div 
                className="w-full rounded-3xl overflow-hidden bg-white p-0 border border-neutral-100/40 shadow-sm flex items-center justify-center cursor-zoom-in transition-all duration-300 hover:shadow-md hover:scale-[1.005]"
                onClick={() => setSelectedImg({
                  src: '/src/assets/images/regenerated_image_1780777199115.png',
                  alt: 'Constellation LinkedIn Profile desktop mockup'
                })}
              >
                <img 
                  src="/src/assets/images/regenerated_image_1780777199115.png" 
                  alt="Constellation LinkedIn Profile desktop mockup"
                  className="w-full h-auto block rounded-3xl object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div 
                className="w-full rounded-3xl overflow-hidden bg-white p-0 border border-neutral-100/40 shadow-sm flex items-center justify-center cursor-zoom-in transition-all duration-300 hover:shadow-md hover:scale-[1.005]"
                onClick={() => setSelectedImg({
                  src: '/src/assets/images/regenerated_image_1782674670329.png',
                  alt: 'Constellation Teams Backgrounds Office Renders'
                })}
              >
                <img 
                  src="/src/assets/images/regenerated_image_1782674670329.png" 
                  alt="Constellation Teams Backgrounds Office Renders"
                  className="w-full h-auto block rounded-3xl object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Row 4: Final Showcase Asset (Full-width) */}
            <div className="w-full">
              <div 
                className="w-full rounded-3xl overflow-hidden bg-white p-0 border border-neutral-100/40 shadow-sm flex items-center justify-center cursor-zoom-in transition-all duration-300 hover:shadow-md hover:scale-[1.005]"
                onClick={() => setSelectedImg({
                  src: '/src/assets/images/constellation_hero.png',
                  alt: 'Constellation Brand Identity Final Overview Showcase'
                })}
              >
                <img 
                  src="/src/assets/images/constellation_hero.png" 
                  alt="Constellation Brand Identity Final Overview Showcase"
                  className="w-full h-auto block rounded-3xl object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        }
      />

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition-colors duration-200 cursor-pointer"
              aria-label="Close lightbox"
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
    </>
  );
}