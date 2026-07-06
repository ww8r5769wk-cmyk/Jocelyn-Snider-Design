// FILE: src/components/ProjectLayout.tsx
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { PROJECTS_METADATA, getBrowseMoreProjects } from '../data/projectsData';
import ImageGrid from './ImageGrid';
import FiveImageGrid from './FiveImageGrid';
import SixImageGrid from './SixImageGrid';
import TwoImageGrid from './TwoImageGrid';

const preventOrphans = (text: string): string => {
  if (!text || typeof text !== 'string') return text;
  const words = text.trim().split(/\s+/);
  if (words.length <= 1) return text;
  const lastTwo = words.slice(-2).join('\u00a0');
  return [...words.slice(0, -2), lastTwo].join(' ');
};

const preventOrphansInNode = (node: React.ReactNode): React.ReactNode => {
  if (!node) return node;

  if (typeof node === 'string') {
    return preventOrphans(node);
  }

  if (typeof node === 'number' || typeof node === 'boolean') {
    return node;
  }

  if (Array.isArray(node)) {
    return node.map((child, i) => (
      <React.Fragment key={i}>
        {preventOrphansInNode(child)}
      </React.Fragment>
    ));
  }

  if (React.isValidElement(node)) {
    const element = node as React.ReactElement<any>;
    if (element.props && 'children' in element.props && element.props.children !== undefined) {
      const formattedChildren = preventOrphansInNode(element.props.children);
      return React.cloneElement(element, { ...element.props }, formattedChildren);
    }
  }

  return node;
};

interface ProjectLayoutProps {
  id: number;
  title: string;
  category: string;
  headerCategory?: string;
  role: string;
  tools: string;
  impact: React.ReactNode;
  impactLabel?: string;
  tldr: React.ReactNode;
  challenge?: React.ReactNode;
  processHeading?: string;
  process?: React.ReactNode;
  solution?: React.ReactNode;
  impactHeading?: string;
  narrativeImpact?: React.ReactNode;
  topHighlight?: React.ReactNode;
  
  // Independent, decoupled images with descriptive names
  heroImage: string;
  heroImgRight1?: string;
  heroImgRight2?: string;
  gridImg1?: string;
  gridImg2?: string;
  gridImg3?: string;
  gridImg4?: string;
  fiveGridImg1?: string;
  fiveGridImg2?: string;
  fiveGridImg3?: string;
  fiveGridImg4?: string;
  fiveGridImg5?: string;
  sixGridImg1?: string;
  sixGridImg2?: string;
  sixGridImg3?: string;
  sixGridImg4?: string;
  sixGridImg5?: string;
  sixGridImg6?: string;
  afterOverview?: React.ReactNode;
  afterSolution?: React.ReactNode;
  afterResult?: React.ReactNode;
}

export default function ProjectLayout({
  id,
  title,
  category,
  headerCategory,
  role,
  tools,
  impact,
  tldr,
  challenge,
  processHeading = 'OBJECTIVE',
  process,
  solution,
  impactHeading = 'RESULT',
  narrativeImpact,
  topHighlight,
  heroImage,
  heroImgRight1,
  heroImgRight2,
  gridImg1,
  gridImg2,
  gridImg3,
  gridImg4,
  fiveGridImg1,
  fiveGridImg2,
  fiveGridImg3,
  fiveGridImg4,
  fiveGridImg5,
  sixGridImg1,
  sixGridImg2,
  sixGridImg3,
  sixGridImg4,
  sixGridImg5,
  sixGridImg6,
  afterOverview,
  afterSolution,
  afterResult
}: ProjectLayoutProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const mapNumericIdToStringId = (numericId: number): string => {
    switch (numericId) {
      case 1: return 'badlands';
      case 2: return 'stance-healthcare';
      case 3: return 'churn';
      case 4: return 'constellation';
      case 5: return 'rosie';
      case 6: return 'from-days-to-minutes';
      case 8: return 'concert-merch';
      case 9: return 'art-without-constraints';
      default: return '';
    }
  };

  const mapStringIdToNumericId = (stringId: string): number => {
    switch (stringId) {
      case 'badlands': return 1;
      case 'stance-healthcare': return 2;
      case 'churn': return 3;
      case 'constellation': return 4;
      case 'rosie': return 5;
      case 'from-days-to-minutes': return 6;
      case 'concert-merch': return 8;
      case 'art-without-constraints': return 9;
      default: return 0;
    }
  };

  const stringId = mapNumericIdToStringId(id);
  const suggestions = getBrowseMoreProjects(stringId);
  const otherProjects = suggestions.map(s => {
    const numId = mapStringIdToNumericId(s.id);
    return PROJECTS_METADATA.find(p => p.id === numId);
  }).filter((p): p is typeof PROJECTS_METADATA[0] => !!p);
  const projectMeta = PROJECTS_METADATA.find(p => p.id === id);
  
  // Header image binds strictly and exclusively to the metadata top-level heroImageUrl property or falls back safely to heroImage.
  // It is 100% isolated from any local hooks, loop indexes, or interactive state down below.
  const displayHeroImage = projectMeta?.heroImageUrl || heroImage;

  const hasTopHighlight = !!topHighlight;
  const hasTldr = !!tldr;
  const hasSixGrid = !!(sixGridImg1 && sixGridImg2 && sixGridImg3 && sixGridImg4 && sixGridImg5 && sixGridImg6);
  const hasChallenge = !!challenge;
  const hasProcess = !!process;
  const hasChallengeOrProcess = hasChallenge || hasProcess;
  
  const hasSolution = !!solution;
  const hasNarrativeImpact = !!narrativeImpact;
  const hasSolutionOrNarrative = hasSolution || hasNarrativeImpact;

  const hasFourGrid = !!(gridImg1 && gridImg2 && gridImg3);
  const hasFiveGrid = !!(fiveGridImg1 || fiveGridImg2 || fiveGridImg3 || fiveGridImg4 || fiveGridImg5);
  const hasTwoGrid = !!(heroImgRight1 && heroImgRight2) || !!(projectMeta?.twoImageGrid && projectMeta.twoImageGrid.length > 0);

  return (
    <div className="bg-bg-light min-h-screen text-[#7A2D3C]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary/10" id={`project${id}-hero-section`}>
        {/* Background Image Layer - completely isolated from page interactions */}
        <img 
          src={displayHeroImage} 
          alt={title} 
          className="w-full h-auto block z-0"
          referrerPolicy="no-referrer"
          id={`project${id}-hero`}
        />
        
        {/* Gradient Overlay Element - Ignores mouse interactions to prevent click-blocking */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent pointer-events-none z-10" />
        
        {/* Content Layout Layer */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 z-20 pointer-events-none">
          <div className="max-w-7xl mx-auto w-full pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-bg-light/80 text-sm font-bold uppercase tracking-widest mb-4 block">{preventOrphans(headerCategory || category)}</span>
              <h1 className="text-5xl md:text-7xl font-bold text-bg-light mb-8 leading-tight">{title}</h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-primary text-bg-light py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 text-left">
          <div className="min-w-0 py-3 md:py-0 border-b border-white/10 md:border-b-0 last:border-b-0">
            <span className="block text-[10px] md:text-xs uppercase tracking-widest opacity-60 mb-1 font-bold whitespace-nowrap">Industry</span>
            <span 
              className="text-sm md:text-lg leading-snug block whitespace-normal font-normal text-white"
              style={{ fontSize: '16px', fontWeight: 'normal' }}
            >
              {preventOrphans(category)}
            </span>
          </div>
          <div className="min-w-0 py-3 md:py-0 border-b border-white/10 md:border-b-0 last:border-b-0">
            <span className="block text-[10px] md:text-xs uppercase tracking-widest opacity-60 mb-1 font-bold whitespace-nowrap">Role</span>
            <span 
              className="text-sm md:text-lg leading-snug block whitespace-normal font-normal text-white"
              style={{ fontSize: '16px', fontWeight: 'normal' }}
            >
              {role.includes(' (') ? (
                <>
                  {role.substring(0, role.indexOf(' ('))}
                  <br />
                  <span className="opacity-80 text-xs md:text-sm">
                    {role.substring(role.indexOf(' (')).trim()}
                  </span>
                </>
              ) : (
                preventOrphans(role)
              )}
            </span>
          </div>
          <div className="min-w-0 py-3 md:py-0 border-b border-white/10 md:border-b-0 last:border-b-0">
            <span className="block text-[10px] md:text-xs uppercase tracking-widest opacity-60 mb-1 font-bold whitespace-nowrap">Deliverables</span>
            <span 
              className="text-sm md:text-lg leading-snug block whitespace-normal font-normal text-white"
              style={{ fontSize: '16px', fontWeight: 'normal' }}
            >
              {preventOrphans(tools)}
            </span>
          </div>
          <div className="min-w-0 py-3 md:py-0">
            <span className="block text-[10px] md:text-xs uppercase tracking-widest opacity-60 mb-1 font-bold whitespace-nowrap">Focus</span>
            <span 
              className="text-sm md:text-lg leading-snug block whitespace-normal font-normal text-white"
              style={{ fontSize: '16px', fontWeight: 'normal' }}
            >
              {preventOrphansInNode(impact)}
            </span>
          </div>
        </div>
      </section>

      {topHighlight && (
        <section className="max-w-4xl mx-auto px-6 pt-[64px] pb-0">
          {preventOrphansInNode(topHighlight)}
        </section>
      )}

      {/* Detailed Content - Overview Part */}
      {tldr && (
        <section className="max-w-4xl mx-auto px-6 pt-[64px] pb-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-punchy">Overview</h2>
            <div 
              className="md:col-span-3 text-xl leading-relaxed font-normal text-[#7A2D3C] space-y-[64px]"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              {preventOrphansInNode(tldr)}
            </div>
          </div>
        </section>
      )}

      {projectMeta?.processImages ? (
        <section className="max-w-7xl mx-auto px-6 pt-[74px] pb-0" id={`project${id}-process-images-section`}>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch place-items-stretch">
            {projectMeta.processImages.map((img) => (
              <img 
                key={img.keyName}
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto block rounded-3xl"
              />
            ))}
          </div>
        </section>
      ) : afterOverview ? (
        <section className="max-w-7xl mx-auto px-6 pt-[74px] pb-0" id={`project${id}-after-overview-section`}>
          {afterOverview}
        </section>
      ) : null}

      {hasSixGrid && (
        <section className="max-w-7xl mx-auto px-6 pt-[74px] pb-0" id={`project${id}-six-grid-section`}>
          <SixImageGrid
            images={projectMeta?.sixImageGrid}
            sixGridImg1={sixGridImg1!}
            sixGridImg2={sixGridImg2!}
            sixGridImg3={sixGridImg3!}
            sixGridImg4={sixGridImg4!}
            sixGridImg5={sixGridImg5!}
            sixGridImg6={sixGridImg6!}
            title={title}
            projectId={id}
          />
        </section>
      )}

      {/* Detailed Content - Upper Part (Challenge, Objective/Process) */}
      {hasChallengeOrProcess && (
        <section className={`max-w-4xl mx-auto px-6 ${(hasSixGrid || afterOverview) ? 'pt-[74px]' : 'pt-[64px]'} pb-0 space-y-[64px]`}>
          {challenge && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-punchy">Challenge</h2>
              <div className="md:col-span-3 text-xl leading-relaxed text-[#7A2D3C]">{preventOrphansInNode(challenge)}</div>
            </div>
          )}
          {process && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-punchy">{processHeading}</h2>
              <div className="md:col-span-3 text-xl leading-relaxed text-[#7A2D3C]">{preventOrphansInNode(process)}</div>
            </div>
          )}
        </section>
      )}

      {/* Detailed Content - Lower Part (Solution, Result/Impact) */}
      {hasSolutionOrNarrative && (
        afterSolution ? (
          <>
            {solution && (
              <section className={`max-w-4xl mx-auto px-6 ${(!hasChallengeOrProcess && (hasSixGrid || afterOverview)) ? 'pt-[74px]' : 'pt-[64px]'} pb-0`}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <h2 className="text-2xl font-bold uppercase tracking-widest text-punchy">Solution</h2>
                  <div className="md:col-span-3 text-xl leading-relaxed text-[#7A2D3C]">{preventOrphansInNode(solution)}</div>
                </div>
              </section>
            )}
            
            <section className="max-w-7xl mx-auto px-6 pt-[74px] pb-0" id={`project${id}-after-solution-section`}>
              {afterSolution}
            </section>
            
            {narrativeImpact && (
              <section className="max-w-4xl mx-auto px-6 pt-[74px] pb-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <h2 className="text-2xl font-bold uppercase tracking-widest text-punchy">{impactHeading}</h2>
                  <div className="md:col-span-3 text-xl leading-relaxed text-[#7A2D3C]">{preventOrphansInNode(narrativeImpact)}</div>
                </div>
              </section>
            )}
          </>
        ) : (
          <section className={`max-w-4xl mx-auto px-6 ${(!hasChallengeOrProcess && (hasSixGrid || afterOverview)) ? 'pt-[74px]' : 'pt-[64px]'} pb-0 space-y-[64px]`}>
            {solution && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <h2 className="text-2xl font-bold uppercase tracking-widest text-punchy">Solution</h2>
                <div className="md:col-span-3 text-xl leading-relaxed text-[#7A2D3C]">{preventOrphansInNode(solution)}</div>
              </div>
            )}
            {narrativeImpact && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <h2 className="text-2xl font-bold uppercase tracking-widest text-punchy">{impactHeading}</h2>
                <div className="md:col-span-3 text-xl leading-relaxed text-[#7A2D3C]">{preventOrphansInNode(narrativeImpact)}</div>
              </div>
            )}
          </section>
        )
      )}

      {afterResult && (
        <section className="max-w-7xl mx-auto px-6 pt-[74px] pb-0" id={`project${id}-after-result-section`}>
          {afterResult}
        </section>
      )}

      {/* Gallery Sections */}
      {hasFourGrid && (
        <section className="max-w-7xl mx-auto px-6 pt-[74px] pb-0" id={`project${id}-four-grid-section`}>
          <ImageGrid 
            gridImg1={gridImg1!} 
            gridImg2={gridImg2!} 
            gridImg3={gridImg3!} 
            gridImg4={gridImg4} 
            title={title} 
            projectId={id} 
          />
        </section>
      )}

      {hasFiveGrid && (
        <section className="max-w-7xl mx-auto px-6 pt-[74px] pb-0" id={`project${id}-five-grid-section`}>
          <FiveImageGrid 
            fiveGridImg1={fiveGridImg1} 
            fiveGridImg2={fiveGridImg2} 
            fiveGridImg3={fiveGridImg3} 
            fiveGridImg4={fiveGridImg4} 
            fiveGridImg5={fiveGridImg5} 
            title={title} 
            projectId={id} 
          />
        </section>
      )}

      {hasTwoGrid && (
        <section className="max-w-7xl mx-auto px-6 pt-[74px] pb-0" id={`project${id}-extra-gallery-section`}>
          <TwoImageGrid 
            images={projectMeta?.twoImageGrid}
            img1={heroImgRight1} 
            img2={heroImgRight2} 
            title={title} 
            projectId={id} 
          />
        </section>
      )}

      {/* Browse More Work */}
      <section className="bg-primary/5 py-24 px-6 mt-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#7A2D3C]">Browse More Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherProjects.slice(0, 4).map((p) => (
              <Link 
                key={p.id} 
                to={`/project-${p.id}.html`}
                className="group relative rounded-xl overflow-hidden cursor-pen-tool block"
              >
                <img 
                  src={p.thumbnailUrl} 
                  className="w-full h-auto transition-all duration-500"
                  referrerPolicy="no-referrer"
                  alt={p.title}
                />
                {/* Desktop Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 hidden lg:flex lg:opacity-0 lg:group-hover:opacity-100 transition-opacity items-center justify-center p-4 text-center">
                  <span className="text-bg-light text-xs font-bold uppercase tracking-widest">{preventOrphans(p.title)}</span>
                </div>

                {/* Mobile/Tablet Gradient Overlay (Always visible on mobile/tablet) */}
                <div 
                  className="absolute inset-x-0 bottom-0 lg:hidden flex flex-col justify-end px-3 pb-2 pt-6 z-20 select-none pointer-events-none"
                  style={{
                    height: '25%',
                    background: 'linear-gradient(to top, #7A2D3C 0%, rgba(122, 45, 60, 0.8) 50%, rgba(122, 45, 60, 0) 100%)'
                  }}
                >
                  <span className="text-white text-[10px] uppercase tracking-wider font-extrabold text-center block leading-tight">
                    {preventOrphans(p.title)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg-light rounded-full font-bold hover:bg-punchy transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" /> Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}