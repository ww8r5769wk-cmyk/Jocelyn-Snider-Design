import ProjectLayout from '../components/ProjectLayout';
import { PROJECTS_METADATA } from '../data/projectsData';

export default function BadlandsPage() {
  const project = PROJECTS_METADATA.find((p) => p.id === 1)!;
  const overviewGrid = project.overviewGrid || [];
  const resultGrid = project.resultGrid || [];

  return (
    <ProjectLayout
      id={1}
      title="Badlands"
      category="Beauty/Wellness"
      headerCategory="Branding + Packaging Design"
      role="Sole Designer (Concept + Execution)"
      tools="Branding + Packaging Design"
      impact="Differentiation in a saturated wellness market through bold, elemental storytelling"
      tldr="Badlands is a conceptual natural deodorant brand designed to challenge category conventions through bold packaging, strategic positioning, and scalable brand systems. The project reframes “natural” as performance-driven, expressive, and premium."
      challenge={
        <div className="space-y-4">
          <p>The natural deodorant market is heavily saturated with similar visual language, often relying on muted palettes and wellness-focused branding that limits differentiation.</p>
          <p>The challenge was to create a brand that could:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Stand out beside legacy and natural competitors</li>
            <li>Signal performance and credibility</li>
            <li>Feel gender-inclusive without becoming generic</li>
            <li>Scale across retail, DTC, and future product lines</li>
          </ul>
        </div>
      }
      processHeading="OBJECTIVE"
      process={
        <div className="space-y-4">
          <p>Badlands was built around elemental storytelling inspired by rugged natural landscapes. The visual system prioritized:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>High-contrast, shelf-first packaging</li>
            <li>Strong typography and restrained layouts for fast recognition</li>
            <li>A modular four-element framework for SKU clarity and scalability</li>
            <li>A cohesive identity designed to extend across social, DTC, and future product categories</li>
          </ul>
          <p>Every design decision was rooted in consumer perception, brand differentiation, and long-term usability.</p>
        </div>
      }
      solution="Develop a strategic identity system that repositioned natural personal care as bold, confident, and commercially competitive while maintaining strong shelf recognition and long-term scalability."
      impactHeading="RESULT"
      narrativeImpact={
        <div className="space-y-4">
          <p>The final brand system presents natural deodorant as modern, premium, and performance-driven while remaining visually distinct within the category.</p>
          <p>The project demonstrates a strategic, systems-based approach to branding, showing how packaging can influence perception, improve shelf impact, and support scalable brand growth beyond a single product launch.</p>
        </div>
      }
      heroImage="/src/assets/images/badlands_hero.png"
      afterOverview={
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch place-items-stretch">
          <div className="md:col-span-2" id="badlands-overview-hero-wrapper">
            <img 
              src={overviewGrid[5]?.src} 
              alt={overviewGrid[5]?.alt} 
              className="w-full h-auto block rounded-3xl"
              referrerPolicy="no-referrer"
              id="badlands-overview-hero-img"
            />
          </div>
          <div className="flex flex-col gap-6 md:gap-8" id="badlands-overview-col-1-wrapper">
            <img 
              src={overviewGrid[1]?.src} 
              alt={overviewGrid[1]?.alt} 
              className="w-full h-auto block rounded-3xl"
              referrerPolicy="no-referrer"
              id="badlands-overview-yellow-canister-img"
            />
            <img 
              src={overviewGrid[3]?.src} 
              alt={overviewGrid[3]?.alt} 
              className="w-full h-auto block rounded-3xl shadow-sm"
              referrerPolicy="no-referrer"
              id="badlands-overview-yellow-detail-img"
            />
          </div>
          <div className="flex flex-col gap-6 md:gap-8" id="badlands-overview-col-2-wrapper">
            <img 
              src={overviewGrid[2]?.src} 
              alt={overviewGrid[2]?.alt} 
              className="w-full h-auto block rounded-3xl"
              referrerPolicy="no-referrer"
              id="badlands-overview-red-canister-img"
            />
            <img 
              src={overviewGrid[4]?.src} 
              alt={overviewGrid[4]?.alt} 
              className="w-full h-auto block rounded-3xl shadow-sm"
              referrerPolicy="no-referrer"
              id="badlands-overview-red-detail-img"
            />
          </div>
        </div>
      }
      afterResult={
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch place-items-stretch">
          <div className="md:col-span-2">
            <img 
              src={resultGrid[0]?.src} 
              alt={resultGrid[0]?.alt} 
              className="w-full h-auto block rounded-3xl"
            />
          </div>
          <div>
            <img 
              src={resultGrid[1]?.src} 
              alt={resultGrid[1]?.alt} 
              className="w-full h-auto block rounded-3xl"
            />
          </div>
          <div>
            <img 
              src={resultGrid[2]?.src} 
              alt={resultGrid[2]?.alt} 
              className="w-full h-auto block rounded-3xl"
            />
          </div>
          <div>
            <img 
              src={resultGrid[3]?.src} 
              alt={resultGrid[3]?.alt} 
              className="w-full h-auto block rounded-3xl"
            />
          </div>
          <div>
            <img 
              src={resultGrid[4]?.src} 
              alt={resultGrid[4]?.alt} 
              className="w-full h-auto block rounded-3xl"
            />
          </div>
        </div>
      }
    />
  );
}
