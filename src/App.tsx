import React, { useState, useEffect, MouseEvent, useRef } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Linkedin, 
  FileText, 
  ArrowRight, 
  ArrowLeft, 
  ExternalLink,
  Github,
  Mail,
  Layout,
  Palette,
  Zap,
  ChevronRight,
  MousePointer2
} from 'lucide-react';
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useInView,
  useMotionValue,
  animate
} from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';

// --- Page & Data Imports ---
import { PROJECTS_METADATA as PROJECTS } from './data/projectsData';
import BadlandsPage from './pages/BadlandsPage';
import ChurnPage from './pages/ChurnPage';
import ConstellationPage from './pages/ConstellationPage';
import RosiePage from './pages/RosiePage';
import ConcertMerch from './pages/ConcertMerch';
import ArtWithoutConstraints from './pages/ArtWithoutConstraints';
import FinalProjectPage from './pages/FinalProjectPage';
import Counter from './components/Counter';

// --- Components ---

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

// --- Constants ---

const LOCAL_PROJECTS = [
  { 
    id: 1, 
    title: 'Badlands', 
    category: 'Beauty/Wellness',
    headerCategory: 'Branding + Packaging Design',
    role: 'Sole Designer (Concept + Execution)',
    tools: 'Branding + Packaging Design',
    impact: 'Differentiation in a saturated wellness market through bold, elemental storytelling',
    challenge: (
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
    ),
    processHeading: 'OBJECTIVE',
    process: (
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
    ),
    solution: 'Develop a strategic identity system that repositioned natural personal care as bold, confident, and commercially competitive while maintaining strong shelf recognition and long-term scalability.',
    impactHeading: 'RESULT',
    narrativeImpact: (
      <div className="space-y-4">
        <p>The final brand system presents natural deodorant as modern, premium, and performance-driven while remaining visually distinct within the category.</p>
        <p>The project demonstrates a strategic, systems-based approach to branding, showing how packaging can influence perception, improve shelf impact, and support scalable brand growth beyond a single product launch.</p>
      </div>
    ),
    images: [
      '/src/assets/images/regenerated_image_1782661209383.png',
      'https://picsum.photos/seed/design1-2/800/600',
      'https://picsum.photos/seed/design1-3/800/600',
      'https://picsum.photos/seed/design1-4/1200/600',
    ]
  },
  { 
    id: 3, 
    title: 'CHURN', 
    category: 'Food/Dairy',
    headerCategory: 'Package Design + Brand Identity',
    role: 'Designer',
    tools: 'Packaging system, brand identity, typography, visual language, mockups',
    impact: 'Reimagining a pantry staple through a bold, modern packaging system that elevates everyday food branding',
    challenge: (
      <div className="space-y-4">
        <p>The butter aisle is heavily dominated by heritage-inspired branding, muted colour palettes, and conventional packaging systems. Despite butter being a versatile kitchen staple, the category lacks visual innovation and emotional engagement.</p>
      </div>
    ),
    processHeading: 'OBJECTIVE',
    process: (
      <div className="space-y-4">
        <p>Create a contemporary butter brand that would stand apart both online and on shelf while encouraging consumers to see butter as a creative, expressive ingredient rather than a basic commodity.</p>
      </div>
    ),
    solution: (
      <div className="space-y-4">
        <p>A scalable packaging system was developed across four distinct flavours, each featuring an intentionally crafted colour palette and unique personality. Through the use of chunky retro-inspired typography, minimal layouts, and bold colour blocking, the identity balances individuality and cohesion while maximizing shelf presence. Supporting photography and social media assets were also created to extend the brand’s playful, modern tone consistently across digital touchpoints.</p>
      </div>
    ),
    impactHeading: 'RESULT',
    narrativeImpact: (
      <div className="space-y-4">
        <p>The final Churn brand system transformed a familiar grocery staple into a visually distinctive and memorable product line through bold colour, expressive typography, and cohesive packaging design. By extending the identity across photography and social media, the project demonstrated how a strong visual system can create consistency across both retail and digital spaces while increasing overall brand personality and shelf appeal. The result was a confident, contemporary brand concept that balances strategic simplicity with strong visual impact.</p>
      </div>
    ),
    images: [
      '/src/assets/images/regenerated_image_1780691383374.png',
      '/src/assets/images/regenerated_image_1780691078813.png',
      '/src/assets/images/regenerated_image_1780691079320.png',
      '/src/assets/images/regenerated_image_1780691079933.png',
      '/src/assets/images/regenerated_image_1780691080348.png',
      '/src/assets/images/regenerated_image_1780691085674.png',
    ]
  },
  { 
    id: 4, 
    title: 'Constellation Data Labs', 
    category: 'Technology',
    headerCategory: 'Brand Identity System',
    role: 'Brand Designer',
    tools: 'Brand identity, foundational assets, employee merchandise, scalable design system',
    impact: 'Building credibility and internal culture through a cohesive, scalable brand ecosystem',
    challenge: (
      <div className="space-y-4">
        <p>Constellation Data Labs needed to launch as a modern and innovative brand while maintaining alignment with the credibility of the larger Constellation umbrella.</p>
        <p>The challenge was to create a cohesive brand experience across both corporate and cultural touch-points without falling into generic or overly corporate design solutions.</p>
      </div>
    ),
    processHeading: 'OBJECTIVE',
    process: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Establish a polished and scalable visual identity</li>
        <li>Create consistency across digital, print, and employee-facing assets</li>
        <li>Design merchandise employees would genuinely want to wear</li>
        <li>Build tools that supported both professionalism and company culture</li>
      </ul>
    ),
    solution: (
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
    ),
    impactHeading: 'RESULT',
    narrativeImpact: (
      <div className="space-y-4">
        <p>The launch of Constellation Data Labs established a cohesive, scalable brand system that built credibility externally while strengthening internal culture from day one. Across digital, print, and experiential touchpoints, the identity delivered a consistent and modern presence that clearly differentiated the company within the real estate data space, while maintaining trust within the broader corporate umbrella. Thoughtfully designed tools and merchandise also helped drive strong employee engagement and made the brand feel tangible in everyday use.</p>
      </div>
    ),
    images: [
      'https://picsum.photos/seed/design4/1200/800',
      'https://picsum.photos/seed/design4-2/800/600',
      'https://picsum.photos/seed/design4-3/800/600',
      'https://picsum.photos/seed/design4-4/1200/600',
    ]
  },
  { 
    id: 5, 
    title: 'Rosie', 
    category: 'Wine/Beverage',
    headerCategory: 'Packaging Design + Brand Identity',
    role: 'Sole Designer (Concept + Execution)',
    tools: 'Wine label system, brand identity, packaging exploration, visual direction, mockups',
    impact: 'Creating a distinctive wine brand identity that balances elegance and personality while standing out in a traditional category',
    challenge: (
      <div className="space-y-4">
        <p>Many wine brands targeting young women, starting their wine journey, rely on predictable visual tropes, making the category feel repetitive and visually interchangeable. Rosie aimed to create a more confident, culturally relevant alternative that could stand apart on the shelf.</p>
      </div>
    ),
    processHeading: 'OBJECTIVE',
    process: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Create a differentiated wine brand identity.</li>
        <li>Develop a cohesive multi-SKU packaging system.</li>
        <li>Use illustration as a storytelling and branding tool.</li>
        <li>Balance femininity with edge, confidence, and individuality.</li>
      </ul>
    ),
    solution: (
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
    ),
    impactHeading: 'RESULT',
    narrativeImpact: (
      <div className="space-y-4">
        <p>Rosie highlights the ability to combine illustration, packaging, and strategic brand thinking into a cohesive visual system. The project demonstrates a senior-level approach to storytelling, differentiation, and designing with both emotional connection and commercial impact in mind.</p>
      </div>
    ),
    images: [
      '/src/assets/images/regenerated_image_1782661211412.png',
      'https://picsum.photos/seed/design5-2/800/600',
      'https://picsum.photos/seed/design5-3/800/600',
      'https://picsum.photos/seed/design5-4/1200/600',
    ]
  },
  { 
    id: 8, 
    title: 'Concert Merch', 
    category: 'Music/Merchandise Design',
    headerCategory: 'Apparel + Typography',
    role: 'Sole Designer (Concept + Execution)',
    tools: 'Typography-driven apparel graphics',
    impact: 'Translating live music experiences into minimal, concept-led wearable design',
    challenge: (
      <div className="space-y-4">
        <p>As an avid concert-goer, official artist merchandise doesn’t tend to align with fashionable clothing pieces. Much of it relies heavily on artist imagery, oversized graphics, or overt branding, making it feel more promotional than wearable.</p>
      </div>
    ),
    processHeading: 'THE GOAL',
    process: (
      <div className="space-y-4">
        <p>The goal - to create concert merch that felt elevated enough to integrate into my everyday wardrobe while still capturing the emotional connection and nostalgia tied to the live experience.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Create custom concert apparel people genuinely wanted to wear</li>
          <li>Design merch that felt subtle, wearable, and fashion-forward</li>
          <li>Use niche lyrical and emotional references instead of obvious branding</li>
          <li>Capture the feeling of a specific concert experience through minimal graphic design</li>
        </ul>
      </div>
    ),
    solution: (
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
    ),
    impactHeading: 'RESULT',
    narrativeImpact: (
      <div className="space-y-4">
        <p>The final pieces became wearable keepsakes that felt authentic to both my personal style and the concert experiences themselves. This project reinforced my interest in creating emotionally driven design work that balances storytelling, branding, and wearability, while exploring how merchandise can exist beyond traditional fan apparel and function as lifestyle design.</p>
      </div>
    ),
    images: [
      '/src/assets/images/regenerated_image_1780777431717.png',
      'https://picsum.photos/seed/design8-2/800/600',
      'https://picsum.photos/seed/design8-3/800/600',
      'https://picsum.photos/seed/design8-4/1200/600',
    ]
  },
  { 
    id: 9, 
    title: 'Art Without Constraints', 
    category: 'Creative Practice',
    headerCategory: 'Creative Practice',
    role: 'Artist',
    tools: 'Illustration series, mixed media explorations',
    impact: 'Creative freedom, style exploration, and visual storytelling without commercial constraints',
    impactLabel: 'Focus',
    tldr: (
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
    ),
    images: [
      '/src/assets/images/regenerated_image_1782661212767.png',
      'https://picsum.photos/seed/design9-2/800/600',
      'https://picsum.photos/seed/design9-3/800/600',
      'https://picsum.photos/seed/design9-4/1200/600',
    ]
  },
  { 
    id: 6, 
    title: 'From Days to Minutes', 
    category: 'Healthcare Furniture',
    headerCategory: 'PROCESS AUTOMATION | CREATIVE OPERATIONS',
    role: 'Sole Designer & Automation Developer',
    tools: 'JavaScript Automation Script, Excel Integration, InDesign Workflow System',
    impact: 'Redesigned a 20-year-old business process that reduced price book update time by over 90%',
    impactLabel: 'Impact',
    tldr: (
      <>
        <p className="text-2xl font-bold text-punchy leading-snug mb-2 font-sans">
          From Days to Minutes
        </p>
        <p>
          Redesigned a 20-year-old business process that reduced price book update time by over 90%. This project demonstrates the value of custom technical solutions integrated with a design mindset, optimizing workflow automation for high-impact results.
        </p>
      </>
    ),
    images: [
      '/src/assets/images/regenerated_image_1782671153467.png',
      'https://picsum.photos/seed/final-g1/800/600',
      'https://picsum.photos/seed/final-g2/800/600',
      'https://picsum.photos/seed/final-g3/800/600',
    ]
  },
];

const PROJECT_TLDRS: Record<number, string> = {
  1: "Badlands is a conceptual natural deodorant brand designed to challenge category conventions through bold packaging, strategic positioning, and scalable brand systems. The project reframes “natural” as performance-driven, expressive, and premium.",
  3: "Churn is a conceptual artisan butter brand created during a one-week Brief Club sprint, designed to modernize a traditionally stagnant category through bold typography, expressive colour, and a playful packaging system built for shelf impact.",
  4: "Led the design execution for the launch of Constellation Data Labs, creating a cohesive brand ecosystem spanning digital assets, internal tools, and employee merchandise. The work focused on building credibility, strengthening company culture, and creating a scalable visual identity that balanced professionalism with personality.",
  5: "Rosie is a conceptual wine brand designed to challenge conventional feminine wine packaging through bold illustration, strategic storytelling, and a cohesive packaging system built for strong shelf impact.",
  6: "Redesigned a 20-year-old business process that reduced price book update time by over 90%.",
  8: "A personal design project created for concerts I attended, exploring how artist merch can feel more fashion-forward, wearable, and emotionally connected to the live music experience.",
  9: "This collection brings together illustrations and paintings created purely for the enjoyment of making art. Free from briefs, approvals, and strategic objectives, each piece is an opportunity to explore new techniques, experiment with different mediums, and follow ideas wherever they naturally evolve."
};

// --- Components ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About Me', href: '#about' },
    { name: 'Connect', href: '#connect' },
  ];

  return (
    <nav 
      aria-label="Main Navigation" 
      className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-primary/10 transition-colors duration-300"
      style={{ backgroundColor: 'rgba(247, 239, 230, 0.95)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center flex-nowrap gap-4">
        <Link to="/" className="flex flex-col cursor-pointer group shrink-0 whitespace-nowrap">
          <span className="text-xl font-bold tracking-tight text-[#FF4A1F] group-hover:text-punchy transition-colors whitespace-nowrap">
            {preventOrphans("Jocelyn Snider")}
          </span>
          <span className="text-xs uppercase tracking-widest opacity-70 hidden sm:block whitespace-nowrap">
            {preventOrphans("Designer & Visual Strategist")}
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 shrink-0 whitespace-nowrap">
          {navLinks.map((link) => (
            <li key={link.name} className="whitespace-nowrap">
              <a 
                href={link.href} 
                className="font-medium hover:text-punchy transition-colors focus-visible:ring-2 focus-visible:ring-[#FF4A1F] focus:outline-none rounded-sm px-1 whitespace-nowrap"
              >
                {preventOrphans(link.name)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 focus-visible:ring-2 focus-visible:ring-[#FF4A1F] focus:outline-none rounded-md"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#F7EFE6]/55 backdrop-blur-[12px] border-b border-primary/10 md:hidden z-50"
          >
            <ul className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <li key={link.name} className="whitespace-nowrap">
                  <a 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-bold text-[#7A2D3C] block py-2 focus-visible:ring-2 focus-visible:ring-[#FF4A1F] focus:outline-none rounded-md px-2 whitespace-nowrap"
                  >
                    {preventOrphans(link.name)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const LoopingPenAnimation = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let animId: number;
    const tick = () => {
      setTime((t) => t + 0.025);
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  const lx = 130 + Math.sin(time) * 35;
  const ly = 75 + Math.cos(time) * 25;
  const rx = 270 - Math.sin(time + 1.2) * 35;
  const ry = 75 + Math.cos(time + 1.2) * 25;

  return (
    <svg 
      className="w-full h-full text-primary" 
      viewBox="0 0 400 225" 
      id="hero-looping-svg"
      aria-label="Looping Pen Tool Curve Animation"
    >
      {/* Grid Pattern definition (private to this SVG) */}
      <defs>
        <pattern id="header-grid" width="25" height="25" patternUnits="userSpaceOnUse">
          <path d="M 25 0 L 0 0 0 25" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        </pattern>
      </defs>
      
      {/* Background Grids */}
      <rect width="100%" height="150" style={{ height: '150px' }} fill="url(#header-grid)" />
      
      {/* Connected dynamic curve (flowing through left curve anchor to right curve anchor) */}
      <path
        d={`M 50 140 C ${lx} ${ly}, ${rx} ${ry}, 350 140`}
        fill="none"
        stroke="#FF4A1F"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Control handle arms extending from the end anchor points */}
      <line x1="50" y1="140" x2={lx} y2={ly} stroke="#18A0FB" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="350" y1="140" x2={rx} y2={ry} stroke="#18A0FB" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Left Handle Circle */}
      <circle cx={lx} cy={ly} r="5.5" fill="white" stroke="#18A0FB" strokeWidth="2" />
      
      {/* Right Handle Circle */}
      <circle cx={rx} cy={ry} r="5.5" fill="white" stroke="#18A0FB" strokeWidth="2" />

      {/* Standard anchor nodes on the path end points (Designer/Illustrator style) */}
      <rect x="47" y="137" width="6" height="6" fill="white" stroke="#1E1919" strokeWidth="1.5" className="dark:stroke-white" />
      <rect x="347" y="137" width="6" height="6" fill="white" stroke="#1E1919" strokeWidth="1.5" className="dark:stroke-white" />
    </svg>
  );
};

const splitWordVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 200, y: 150 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-32 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
        <div className="w-full lg:w-1/2 text-left z-10 animate-title">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tighter leading-[1.1] md:leading-[1.05]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                custom={0}
                variants={splitWordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block origin-bottom"
              >
                Crafting
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                custom={1}
                variants={splitWordVariants}
                initial="hidden"
                animate="visible"
                className="text-punchy inline-block origin-bottom"
              >
                Visual
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                custom={2}
                variants={splitWordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block origin-bottom"
              >
                Impact
              </motion.span>
            </span>
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
            className="text-xl md:text-2xl opacity-80 max-w-xl"
          >
            {preventOrphansInNode("Bridging the gap between strategy and aesthetics to build narratives that resonate.")}
          </motion.p>
        </div>

        {/* Interactive SVG Vector - Hidden on Mobile/Tablet (< 1024px) */}
        <div 
          className="hidden lg:block w-full lg:w-1/2 aspect-square relative bg-primary/5 rounded-[3rem] overflow-hidden cursor-crosshair"
          onMouseMove={handleMouseMove}
        >
          <svg className="w-full h-full" viewBox="0 0 400 400">
            {/* Grid Background */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Square Anchor Nodes (Illustrator Style) */}
            <rect x="50" y="200" width="6" height="6" fill="white" stroke="currentColor" strokeWidth="1" transform="translate(-3,-3)" />
            <rect x="350" y="200" width="6" height="6" fill="white" stroke="currentColor" strokeWidth="1" transform="translate(-3,-3)" />
            
            {/* Dynamic Bezier Path */}
            <path
              d={`M 50 200 C 150 ${mousePos.y}, 250 ${400 - mousePos.y}, 350 200`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-all duration-75 ease-out"
            />

            {/* Handle lines (Technical Blue/Purple like Figma) */}
            <line x1="50" y1="200" x2={mousePos.x} y2={mousePos.y} stroke="#18A0FB" strokeWidth="1" />
            <line x1="350" y1="200" x2={400 - mousePos.x} y2={400 - mousePos.y} stroke="#18A0FB" strokeWidth="1" />
            
            {/* Round Control Handles */}
            <circle cx={mousePos.x} cy={mousePos.y} r="4" fill="white" stroke="#18A0FB" strokeWidth="1" />
            <circle cx={400 - mousePos.x} cy={400 - mousePos.y} r="4" fill="white" stroke="#18A0FB" strokeWidth="1" />
          </svg>
        </div>
      </section>

      {/* Mobile/Tablet GIF Header - Displays under 1024px or for touch users */}
      <header className="w-full block lg:hidden bg-primary/5 border-b border-primary/10 aspect-[16/9] overflow-hidden">
        <LoopingPenAnimation />
      </header>
    </>
  );
};

const Marquee = () => {
  const logos = [
    { 
      name: 'Figma', 
      url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg',
      alt: 'Figma Design Tool Logo',
      link: 'https://www.figma.com'
    },
    { 
      name: 'Adobe Creative Cloud', 
      url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobecreativecloud.svg',
      alt: 'Adobe Creative Cloud Logo',
      link: 'https://www.adobe.com/creativecloud.html'
    },
    { 
      name: 'Microsoft 365', 
      url: 'https://lh3.googleusercontent.com/d/1MpMPSrKFUI-JnfwGBT5cugpDve0jAVzk',
      alt: 'Microsoft 365 Suite Logo',
      link: 'https://www.microsoft.com/microsoft-365'
    },
    { 
      name: 'Canva', 
      url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/canva.svg',
      alt: 'Canva Design Platform Logo',
      link: 'https://www.canva.com'
    },
    { 
      name: 'ChatGPT', 
      url: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
      alt: 'ChatGPT AI Workflow Tool Logo',
      link: 'https://chatgpt.com'
    },
  ];

  return (
    <div className="bg-accent-blue dark:bg-primary/20 h-[100px] md:h-auto py-0 md:py-10 flex items-center overflow-hidden border-y border-primary/10 relative">
      <div className="absolute inset-0 z-10 carousel-mask pointer-events-none" />
      <div className="marquee-content items-center">
        {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <a 
            key={i} 
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition-all shrink-0 opacity-70 hover:opacity-100 duration-300 hover:scale-105 cursor-pointer mx-10 md:mx-14"
          >
            <img 
              src={logo.url} 
              alt={logo.alt} 
              className={`h-10 w-auto object-contain transition-all duration-500 dark:invert ${logo.name === 'Microsoft 365' ? 'brightness-0' : ''}`}
              referrerPolicy="no-referrer" 
            />
          </a>
        ))}
      </div>
    </div>
  );
};

const portfolioContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};

const portfolioItemVariants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Portfolio = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
        <p className="text-lg opacity-70">A glimpse into visual narratives and strategic design.</p>
      </div>

      <motion.div 
        variants={portfolioContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PROJECTS.map((project) => (
          <motion.div key={project.id} variants={portfolioItemVariants}>
            <Link 
              to={`/project-${project.id}.html`}
              className="block cursor-pen-tool"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative aspect-[4/5] bg-primary/5 rounded-2xl overflow-hidden"
              >
                {/* Decoupled Project Specific Hero Image */}
                <img 
                  src={project.thumbnailUrl} 
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${[1, 4, 8].includes(project.id) ? 'object-right' : 'object-center'}`}
                  referrerPolicy="no-referrer"
                  id={`portfolio-item-img-${project.id}`}
                />
                
                {/* Desktop Hover Overlay - Active on desktop only (lg Screen) */}
                <div className="absolute inset-0 bg-primary/90 hidden lg:flex lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-accent-pink text-sm font-bold uppercase tracking-widest mb-2">{preventOrphans(project.headerCategory || project.category)}</span>
                  <h3 className="text-bg-light text-2xl font-bold mb-4">{preventOrphans(project.title)}</h3>
                  <div className="flex items-center text-bg-light font-medium gap-2">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Mobile/Tablet Gradient Overlay (Always visible on mobile/tablet, hidden on desktop >= 1024px) */}
                <div 
                  className="absolute inset-x-0 bottom-0 lg:hidden flex flex-col justify-end px-4 pb-3 pt-6 z-20 border-t border-white/5 select-none pointer-events-none"
                  style={{
                    height: '25%',
                    background: 'linear-gradient(to top, #7A2D3C 0%, rgba(122, 45, 60, 0.85) 50%, rgba(122, 45, 60, 0) 100%)'
                  }}
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[#FAF6F0]/90 text-[9px] sm:text-[10px] uppercase tracking-widest font-extrabold leading-none mb-0.5">
                      {preventOrphans(project.headerCategory || project.category)}
                    </span>
                    <h3 className="text-white text-xs sm:text-sm font-bold tracking-tight leading-tight">
                      {preventOrphans(project.title)}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const projectId = parseInt(id?.split('-')[1] || '1');
  const project = LOCAL_PROJECTS.find(p => p.id === projectId) || LOCAL_PROJECTS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const otherProjects = LOCAL_PROJECTS.filter(p => p.id !== project.id);

  return (
    <div className="bg-bg-light min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={project.images[0]} 
          alt={project.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6 md:p-12">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-bg-light/80 text-sm font-bold uppercase tracking-widest mb-4 block">{project.category}</span>
              <h1 className="text-5xl md:text-7xl font-bold text-bg-light mb-8 leading-tight">{project.title}</h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-primary text-bg-light py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <span className="block text-xs uppercase tracking-widest opacity-60 mb-1">Role</span>
            <span className="text-lg font-bold">
              {project.role.includes(' (') ? (
                <>
                  {project.role.substring(0, project.role.indexOf(' ('))}
                  <br />
                  <span className="opacity-80 text-sm font-medium">
                    {project.role.substring(project.role.indexOf(' (')).trim()}
                  </span>
                </>
              ) : (
                project.role
              )}
            </span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest opacity-60 mb-1">Tools</span>
            <span className="text-lg font-bold">{project.tools}</span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest opacity-60 mb-1">Impact</span>
            <span className="text-lg font-bold">{project.impact}</span>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 space-y-24">
        {PROJECT_TLDRS[project.id] && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-punchy">TL;DR</h2>
            <p 
              className="md:col-span-3 text-xl leading-relaxed font-normal text-[#7A2D3C]"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              {PROJECT_TLDRS[project.id]}
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-punchy">Challenge</h2>
          <div className="md:col-span-3 text-xl leading-relaxed text-[#7A2D3C]">{project.challenge}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-punchy">{(project as any).processHeading || 'Process'}</h2>
          <div className="md:col-span-3 text-xl leading-relaxed text-[#7A2D3C]">{project.process}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-punchy">Solution</h2>
          <div className="md:col-span-3 text-xl leading-relaxed text-[#7A2D3C]">{project.solution}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-punchy">{(project as any).impactHeading || 'Impact'}</h2>
          <div className="md:col-span-3 text-xl leading-relaxed text-[#7A2D3C]">{(project as any).narrativeImpact || project.impact}</div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2 cursor-pen-tool">
            <img src={project.images[1]} className="w-full rounded-3xl" referrerPolicy="no-referrer" />
          </div>
          <div className="cursor-pen-tool">
            <img src={project.images[2]} className="w-full rounded-3xl aspect-square object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="cursor-pen-tool">
            <img src={project.images[3]} className="w-full rounded-3xl aspect-square object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Browse More Work */}
      <section className="bg-primary/5 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Browse More Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherProjects.map((p) => (
              <Link 
                key={p.id} 
                to={`/project-${p.id}.html`}
                className="group relative rounded-xl overflow-hidden cursor-pen-tool block"
              >
                <img 
                  src={p.images[0]} 
                  className="w-full h-auto transition-all duration-500"
                  referrerPolicy="no-referrer"
                  alt={p.title}
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                  <span className="text-bg-light text-xs font-bold uppercase tracking-widest">{p.title}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center">
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-bg-light rounded-full font-bold hover:bg-punchy transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const Testimonials = () => {
  const quotes = [
    { 
      text: (
        <>
          Jocelyn transformed our social reach to {" "} <Counter value={75} />% engagement increase. She doesn't just design; she delivers&nbsp;results.
        </>
      ), 
      author: "Design Client", 
      color: "bg-accent-pink",
    },
    { 
      text: "Jocelyn pushes corporate boundaries with a modern, fun energy that is rare to\u00a0find.", 
      author: "Marketing Manager", 
      color: "bg-accent-blue",
    },
    { 
      text: "Jocelyn brings creativity, positivity, and fresh ideas to every project while consistently delivering thoughtful, high-quality work. I'd work with her again in a heartbeat.", 
      author: "Senior Coworker", 
      color: "bg-accent-pink",
    },
  ];

  return (
    <section 
      className="bg-bg-light py-24 px-6 overflow-hidden relative"
    >
      {/* Line Drawing Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.path
            d="M -100 400 C 200 100, 400 700, 600 400 S 1000 100, 1300 400"
            stroke="#18A0FB"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 10"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          
          {/* Moving Anchor Points */}
          {[
            { x: 200, y: 100, delay: 0 },
            { x: 400, y: 700, delay: 0.5 },
            { x: 600, y: 400, delay: 1 },
            { x: 1000, y: 100, delay: 1.5 }
          ].map((p, i) => (
            <motion.g key={i}>
              <motion.rect
                x={p.x - 4}
                y={p.y - 4}
                width="8"
                height="8"
                fill="white"
                stroke="#18A0FB"
                strokeWidth="1"
                animate={{ 
                  y: [p.y - 4, p.y - 24, p.y - 4],
                  x: [p.x - 4, p.x + 16, p.x - 4]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: p.delay
                }}
              />
              {/* Technical Handle Lines */}
              <motion.line
                x1={p.x}
                y1={p.y}
                x2={p.x + 20}
                y2={p.y - 20}
                stroke="#18A0FB"
                strokeWidth="0.5"
                animate={{ 
                  x2: [p.x + 20, p.x + 40, p.x + 20],
                  y2: [p.y - 20, p.y - 40, p.y - 20]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: p.delay
                }}
              />
            </motion.g>
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl text-center mb-16 font-bold">{preventOrphansInNode("Testimony's")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {quotes.map((quote, i) => (
            <div 
              key={i} 
              className="relative group"
            >
              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.95, rotate: i % 2 === 0 ? -1 : 1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className={`${quote.color} p-16 h-full flex flex-col items-center justify-center text-center border-wavy-side`}
              >
                <div className="flex flex-col items-center">
                  <p className="text-base md:text-lg text-primary leading-relaxed mb-8 italic font-medium max-w-[80%]">
                    "{preventOrphansInNode(quote.text)}"
                  </p>
                  
                  <div className="mt-4">
                    <span className="block font-bold text-sm text-primary/70">— {quote.author}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const bioContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const bioItemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const About = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax offsets for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const handleMouseMove = (e: MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="max-w-7xl mx-auto px-6 py-24 cursor-tilted-arrow overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 relative group">
          <motion.div 
            style={{ y: y2 }}
            className="aspect-square rounded-[3rem] bg-transparent overflow-hidden relative z-10 border-2 border-primary/10"
          >
            <img 
              src="/regenerated_image_1777487891109.png"
              alt="Jocelyn Snider" 
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Right: Bio & Contact */}
        <div className="w-full lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Curiosity Met With Strategy
          </motion.h2>
          <motion.div 
            variants={bioContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 text-lg opacity-80 leading-relaxed"
          >
            <motion.p variants={bioItemVariants}>
              I’ve always been creative; which led me to a bachelor's degree in design where I learned to explore with curiosity and strategy. 
              With over 7 years of experience, I specialize in brand strategy, social media design, illustration, and packaging.
            </motion.p>
            <motion.p variants={bioItemVariants}>
              I focus on streamlining design processes by introducing AI, removing operational hurdles so design can take center stage. 
              I take pride in leading design from conception to final delivery, having successfully increased social engagement metrics by up to 75%.
            </motion.p>
            <motion.p variants={bioItemVariants}>
              Outside of design, I explore my tactile creativity through gardening, baking, skincare, and sewing.
            </motion.p>
          </motion.div>

          <div id="connect" className="mt-12 flex flex-wrap gap-4">
            <a 
              href="https://www.linkedin.com/in/jocelynsnider/" 
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-bg-light rounded-full font-bold hover:bg-punchy transition-colors"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a 
              href="/Jocelyn_Snider_Resume.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-primary rounded-full font-bold hover:bg-primary hover:text-bg-light transition-all"
            >
              <FileText className="w-5 h-5" /> Resume
            </a>
            <a 
              href="mailto:jocelyn_snider@live.ca?subject=Design%20Collaboration%20Inquiry"
              className="w-full sm:w-auto text-center px-8 py-3 bg-punchy text-bg-light rounded-full font-bold text-lg hover:scale-105 transition-transform inline-block"
            >
              Let's Build Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 bg-[#FBFBFA] py-16 px-6 md:px-12 text-primary" id="global-footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Brand & Tagline */}
        <div className="flex flex-col gap-1" id="footer-brand">
          <div className="text-2xl font-bold tracking-tight text-primary">Jocelyn Snider</div>
          <p className="text-sm text-primary/70 font-medium">Designer &amp; Visual Strategist</p>
        </div>

        {/* Navigation links */}
        <nav aria-label="Footer Navigation" id="footer-nav">
          <ul className="flex flex-col sm:flex-row gap-6 md:gap-8 list-none p-0 m-0">
            <li>
              <a
                href="mailto:jocelyn_snider@live.ca?subject=Design%20Collaboration%20inquiry"
                className="group flex items-center gap-2.5 text-base font-semibold text-primary/80 hover:text-punchy transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-punchy rounded-md px-1 py-0.5"
                aria-label="Send an email to Jocelyn Snider"
                id="footer-link-email"
              >
                <Mail className="w-5 h-5 stroke-[2] transition-transform duration-200 group-hover:scale-110 text-primary" aria-hidden="true" />
                <span>jocelyn_snider@live.ca</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jocelynsnider/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-base font-semibold text-primary/80 hover:text-punchy transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-punchy rounded-md px-1 py-0.5"
                aria-label="View my LinkedIn profile"
                id="footer-link-linkedin"
              >
                <Linkedin className="w-5 h-5 stroke-[2] transition-transform duration-200 group-hover:scale-110 text-primary" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="/Jocelyn_Snider_Resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-base font-semibold text-primary/80 hover:text-punchy transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-punchy rounded-md px-1 py-0.5"
                aria-label="Download and view my resume"
                id="footer-link-resume"
              >
                <FileText className="w-5 h-5 stroke-[2] transition-transform duration-200 group-hover:scale-110 text-primary" aria-hidden="true" />
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto border-t border-primary/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" id="footer-bottom">
        <p className="text-sm text-primary/60 font-medium">
          © {new Date().getFullYear()} Jocelyn Snider. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs text-primary/50">
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const AppContent = () => {
  return (
    <div className={`min-h-screen selection:bg-punchy selection:text-white`}>
      <Header />
      <Routes>
        <Route path="/" element={
          <AnimatedPage>
            <main>
              <Hero />
              <Marquee />
              <Portfolio />
              <About />
              <Testimonials />
            </main>
          </AnimatedPage>
        } />
        {/* Individual Dedicated Static Pages */}
        <Route path="/project-1.html" element={<AnimatedPage><BadlandsPage /></AnimatedPage>} />
        <Route path="/project-3.html" element={<AnimatedPage><ChurnPage /></AnimatedPage>} />
        <Route path="/project-4.html" element={<AnimatedPage><ConstellationPage /></AnimatedPage>} />
        <Route path="/project-5.html" element={<AnimatedPage><RosiePage /></AnimatedPage>} />
        <Route path="/project-6.html" element={<AnimatedPage><FinalProjectPage /></AnimatedPage>} />
        <Route path="/project-8.html" element={<AnimatedPage><ConcertMerch /></AnimatedPage>} />
        <Route path="/project-9.html" element={<AnimatedPage><ArtWithoutConstraints /></AnimatedPage>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
// force deploy
