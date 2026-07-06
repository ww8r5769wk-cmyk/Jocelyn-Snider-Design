// FILE: src/data/projectsData.ts
export interface GalleryAsset {
  keyName: string;
  src: string;
  alt: string;
  colSpan?: string;
}

export interface ProjectMeta {
  id: number;
  title: string;
  category: string;
  headerCategory?: string;
  thumbnailUrl: string;
  heroImageUrl: string;
  tldr: string;
  sixImageGrid?: GalleryAsset[];
  twoImageGrid?: GalleryAsset[];
  processImages?: GalleryAsset[];
  processGif?: GalleryAsset;
  priceBookGrids?: {
    beforeAfter: GalleryAsset;
    codeAndVideo: GalleryAsset[];
    metrics?: GalleryAsset[];
  };
  overviewGrid?: GalleryAsset[];
  resultGrid?: GalleryAsset[];
}

export const PROJECTS_METADATA: ProjectMeta[] = [
  {
    id: 3,
    title: 'CHURN',
    category: 'Food / Dairy',
    headerCategory: 'Package Design + Brand Identity',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/1jG_N5kZFFX7M-pi0NIoRVuvIcmczKrrX',
    heroImageUrl: 'https://lh3.googleusercontent.com/d/1ssmSe8skcm8818ByWutVT6def5bxDG-0',
    tldr: "Reimagining a pantry staple through a bold, modern packaging system that elevates everyday food branding",
    sixImageGrid: [
      {
        keyName: 'six-img-1',
        src: 'https://lh3.googleusercontent.com/d/1mZbGPckqFrxjb8I4dQcyCvKZxjysD5hq',
        alt: 'CHURN Package Design - Flavor 1',
        colSpan: 'col-span-1 md:col-span-1'
      },
      {
        keyName: 'six-img-2',
        src: 'https://lh3.googleusercontent.com/d/18nTt1MCMaC1SC7VeEyr0OikFt7qSd3aV',
        alt: 'CHURN Package Design - Flavor 2',
        colSpan: 'col-span-1 md:col-span-1'
      },
      {
        keyName: 'six-img-3',
        src: 'https://lh3.googleusercontent.com/d/1H-LcTWMwFcLDYGfr7CD_4a19Q9m3MPeD',
        alt: 'CHURN Package Design - Flavor 3',
        colSpan: 'col-span-1 md:col-span-1'
      },
      {
        keyName: 'six-img-4',
        src: 'https://lh3.googleusercontent.com/d/1d7Qnwv3W8wlgU3RZVwk6DW8YZCTTxcfw',
        alt: 'CHURN Package Design - Flavor 4',
        colSpan: 'col-span-1 md:col-span-1'
      },
      {
        keyName: 'six-img-5',
        src: 'https://lh3.googleusercontent.com/d/1V9FtkUS4UFe1P1ORsEdvKyRq020kocQf',
        alt: 'CHURN Package Design - Butter Roll',
        colSpan: 'col-span-1 md:col-span-1'
      },
      {
        keyName: 'six-img-6',
        src: 'https://lh3.googleusercontent.com/d/1FLiXk0UQT83Nkzg7GEBbrv_InG2IbV3s',
        alt: 'CHURN Package Design - Full Lineup',
        colSpan: 'col-span-1 md:col-span-1'
      }
    ],
    twoImageGrid: [
      {
        keyName: 'two-img-1',
        src: 'https://lh3.googleusercontent.com/d/18H1fDq6xmf969xO-4oE5_OJfENBTbshJ',
        alt: 'CHURN Campaign - Close Up 1',
        colSpan: 'col-span-1 md:col-span-1'
      },
      {
        keyName: 'two-img-2',
        src: 'https://lh3.googleusercontent.com/d/1xodGa9U62SZcu6ANNakC5vA9ZnW0PXRa',
        alt: 'CHURN Campaign - Close Up 2',
        colSpan: 'col-span-1 md:col-span-1'
      }
    ]
  },
  {
    id: 6,
    title: 'From Days to Minutes',
    category: 'Healthcare Furniture',
    headerCategory: 'PROCESS AUTOMATION | CREATIVE OPERATIONS',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/1FY2KE5tJrjtfSyJXvwIxCA0KY3aIbc_u',
    heroImageUrl: 'https://lh3.googleusercontent.com/d/1bgEpzOd1zFyAG7UGMR1_HQ37TNiULT8E',
    tldr: "Redesigned a 20-year-old business process that reduced price book update time by over 90%.",
    processImages: [
      { keyName: 'manual', src: '/src/assets/images/manual_process.png', alt: 'Manual Process Flow' },
      { keyName: 'automated', src: '/src/assets/images/automated_process.png', alt: 'Automated Process Flow' }
    ],
    processGif: {
      keyName: 'pb-process-gif',
      src: 'https://lh3.googleusercontent.com/d/1Y78UGKsUHtvOjdn6XrpX78nYuDA9F_C0',
      alt: 'Process Automation Workflow Animation'
    },
    priceBookGrids: {
      beforeAfter: {
        keyName: 'pb-before-after',
        src: 'https://lh3.googleusercontent.com/d/1Vrpg5UrvMolxX0RefGM52bI5R9fVMpuK',
        alt: 'Price Book Process Diagram - Before vs After Automation'
      },
      codeAndVideo: [
        {
          keyName: 'pb-code',
          src: 'https://lh3.googleusercontent.com/d/1eJnK4JPKs0AO07MiZqAQC3NkEkkdj8R5',
          alt: 'Price Book Automation - Adobe InDesign and JavaScript Scripting Code'
        },
        {
          keyName: 'pb-video',
          src: 'https://lh3.googleusercontent.com/d/',
          alt: 'Price Book Automation - Demonstration and Workflow Video'
        }
      ],
      metrics: [
        {
          keyName: 'pb-metric-1',
          src: 'https://lh3.googleusercontent.com/d/1IekxfieSjht9qy0rx753KV5RVs_fIT4w',
          alt: '96+ Hours Time Saved Per Update Cycle'
        },
        {
          keyName: 'pb-metric-2',
          src: 'https://lh3.googleusercontent.com/d/1a0KTrEDKB5y1xDf3WC1-QUDCflrCFh0L',
          alt: '0 Room For Error Significantly Reduced Human Errors'
        },
        {
          keyName: 'pb-metric-3',
          src: 'https://lh3.googleusercontent.com/d/1__SCZTN4AWAfgq67lfYCtRzKuMJt8IaU',
          alt: '2100 Products Automated Across 2 Price Books'
        },
        {
          keyName: 'pb-metric-4',
          src: 'https://lh3.googleusercontent.com/d/1K5rra-BtF33bedEbatrwJsNeabs9fXAU',
          alt: '94% Production Time Reduced Reallocated To Strategic Creative Work'
        }
      ]
    }
  },
  {
    id: 1,
    title: 'Badlands',
    category: 'Beauty / Wellness',
    headerCategory: 'Branding + Packaging Design',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/1FX-T-EbO7gOL9N6O14RP2JWfS3haU3_1',
    heroImageUrl: 'https://lh3.googleusercontent.com/d/19aZALFbEiB955nTkPCoyX3GxBreEzCc4',
    tldr: "Badlands is a conceptual natural deodorant brand designed to challenge category conventions through bold packaging, strategic positioning, and scalable brand systems. The project reframes “natural” as performance-driven, expressive, and premium.",
    overviewGrid: [
      {
        keyName: 'badlands-ov-1',
        src: 'https://lh3.googleusercontent.com/d/1QNEFa9qD0hzdcvWzdCFWAeKexUgBBJ1M',
        alt: 'Badlands Brand Lineup - 4 Deodorant Canisters'
      },
      {
        keyName: 'badlands-ov-2',
        src: 'https://lh3.googleusercontent.com/d/1V-2kkJG3aUhhS7tFKDR2uuD7aeWzWHnm',
        alt: 'Badlands Air Deodorant Packaging'
      },
      {
        keyName: 'badlands-ov-3',
        src: 'https://lh3.googleusercontent.com/d/1RJi_vB8C26oJ8o8XFjF9pXZ9osOfd-gU',
        alt: 'Badlands Earth Deodorant Packaging'
      },
      {
        keyName: 'badlands-ov-4',
        src: 'https://lh3.googleusercontent.com/d/1D8RATmI_wonlUWe4bKrw61E6rNDo_BP1',
        alt: 'Badlands Rain Deodorant Packaging'
      },
      {
        keyName: 'badlands-ov-5',
        src: 'https://lh3.googleusercontent.com/d/1u-g3vIhGY7M_vX1mA8BZ5GswuoW0Sngd',
        alt: 'Badlands Fire Deodorant Packaging'
      },
      {
        keyName: 'badlands-ov-6',
        src: 'https://lh3.googleusercontent.com/d/1QNEFa9qD0hzdcvWzdCFWAeKexUgBBJ1M',
        alt: 'Badlands All Packaging'
      }
    ],
    resultGrid: [
      {
        keyName: 'badlands-res-1',
        src: 'https://lh3.googleusercontent.com/d/1YoWHZh7zFp9ekJa0AIibMAyOlvZUT4Ki',
        alt: 'Badlands Brand Guidelines Book Mockup'
      },
      {
        keyName: 'badlands-res-2',
        src: 'https://lh3.googleusercontent.com/d/1oiG2eCjvQ0wHaQKlBsah2-dPp6fS3gii',
        alt: 'Badlands Brand Guidelines Yellow Page Interior'
      },
      {
        keyName: 'badlands-res-3',
        src: 'https://lh3.googleusercontent.com/d/1mVV1X1dCbRmakLgkqEG4WDmQiViJPgFx',
        alt: 'Badlands Brand Guidelines Brown Page Interior'
      },
      {
        keyName: 'badlands-res-4',
        src: 'https://lh3.googleusercontent.com/d/1E_8bZtUovDumkD_1-zE4HUnE-xa4fVAE',
        alt: 'Badlands Brand Guidelines Fire Page Interior'
      },
      {
        keyName: 'badlands-res-5',
        src: 'https://lh3.googleusercontent.com/d/1WU3y85CWgJIbF5VwK-d-NuVLj2CPUBq6',
        alt: 'Badlands Brand Guidelines Water Page Interior'
      }
    ]
  },
  {
    id: 4,
    title: 'Constellation Data Labs',
    category: 'Technology',
    headerCategory: 'Brand Identity System',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/19IrLXE50Q8Un3OkWkM8Q-z0PprbMPqGm',
    heroImageUrl: 'https://lh3.googleusercontent.com/d/1ifQb_z9l-SAPfI4zA2ijvf3wUC4gHXVC',
    tldr: "Led the design execution for the launch of Constellation Data Labs, creating a cohesive brand ecosystem spanning digital assets, internal tools, and employee merchandise. The work focused on building credibility, strengthening company culture, and creating a scalable visual identity that balanced professionalism with personality.",
    overviewGrid: [
      {
        keyName: 'constellation-tshirt-1',
        src: 'https://lh3.googleusercontent.com/d/1eQhazU8yHEmAWQ1s0wyGC-jWgb-YPuxZ',
        alt: 'Constellation T-shirts with CDL logo and Nik & Rick back print'
      },
      {
        keyName: 'constellation-tshirt-2',
        src: 'https://lh3.googleusercontent.com/d/1hy0o0BO7TF3OQEKhPjv1Rr6ytsoELeeK',
        alt: 'Constellation T-shirts with pocket logo and skyline graphic'
      },
      {
        keyName: 'constellation-hoodie',
        src: 'https://lh3.googleusercontent.com/d/1JOyNY7n6Qb2O8HHXbw1P7ubjeH4YXYMc',
        alt: 'Constellation Black CDL Hoodie mockup'
      },
      {
        keyName: 'constellation-caps',
        src: 'https://lh3.googleusercontent.com/d/1jPae1oSrrMDB0tzI3IB7DP5l6nHkUIDL',
        alt: 'Constellation branded caps mockup'
      },
      {
        keyName: 'constellation-composite',
        src: 'https://lh3.googleusercontent.com/d/1SqObhj7c3fFrJ0yXT-D87wE8JKetytVa/',
        alt: 'Constellation full brand apparel and merchandise collection'
      }
    ],
    resultGrid: [
      {
        keyName: 'constellation-flatlay',
        src: 'https://lh3.googleusercontent.com/d/1uAgsDj5x37ZkBvP8rZity9_D_RMAbTxR',
        alt: 'Constellation Business Cards flat lay'
      },
      {
        keyName: 'constellation-vertical',
        src: 'https://lh3.googleusercontent.com/d/1y3QQBSM7mjbd9PQl80f38Z6r-mIlbVVe',
        alt: 'Constellation Vertical Business Card details'
      },
      {
        keyName: 'constellation-horizontal',
        src: 'https://lh3.googleusercontent.com/d/1BUKKZZtvCjJuBKYUP2r5_Bq0EDrnBtXE',
        alt: 'Constellation Horizontal Business Card details'
      },
      {
        keyName: 'constellation-linkedin',
        src: 'https://lh3.googleusercontent.com/d/17j8xy3YYHO3f6rxUYZkLOkjZBIiNP0mj',
        alt: 'Constellation LinkedIn Profile desktop mockup'
      },
      {
        keyName: 'constellation-teams',
        src: 'https://lh3.googleusercontent.com/d/1vjx5aTl4Bhaei6jqQl-xjR5B_GyWT117',
        alt: 'Constellation Teams Backgrounds Office Renders'
      },
      {
        keyName: 'constellation-final-asset',
        src: 'https://lh3.googleusercontent.com/d/1ZDBF6_oLCw6GS3zOpAYZBp_qbLRu0Aan',
        alt: 'Constellation Brand Identity Final Overview Showcase'
      }
    ]
  },
  {
    id: 5,
    title: 'Rosie',
    category: 'Wine / Beverage',
    headerCategory: 'Packaging Design + Brand Identity',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/1dWLrLKpdEyk21-0zMFEqc7Ry-ejY6Fil',
    heroImageUrl: 'https://lh3.googleusercontent.com/d/1tLsYCt0SJm6wEn6m5VBiAqfXL_vkL09Y',
    tldr: "Rosie is a conceptual wine brand designed to challenge conventional feminine wine packaging through bold illustration, strategic storytelling, and a cohesive packaging system built for strong shelf impact."
  },
  {
    id: 8,
    title: 'Concert Merch',
    category: 'Music / Merchandise Design',
    headerCategory: 'Apparel + Typography',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/1jYREwhnMk92qyc1AbHEc7XdWh2EA8sjG',
    heroImageUrl: 'https://lh3.googleusercontent.com/d/1unYH70cMBDqOKrcfRG1UcAroxht50V3h',
    tldr: "A personal design project created for concerts I attended, exploring how artist merch can feel more fashion-forward, wearable, and emotionally connected to the live music experience."
  },
  {
    id: 9,
    title: 'Art Without Constraints',
    category: 'Creative Practice',
    headerCategory: 'Creative Practice',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/12YEuPRJ6kqvsUDSrx5UWG2j0TyO2Ja8d',
    heroImageUrl: 'https://lh3.googleusercontent.com/d/1E5FMNUo4h27dj3kw0x-Mtpi85ZdhwC-q',
    tldr: "This collection brings together illustrations and paintings created purely for the enjoyment of making art. Free from briefs, approvals, and strategic objectives, each piece is an opportunity to explore new techniques, experiment with different mediums, and follow ideas wherever they naturally evolve."
  }
];

export const ALL_PROJECTS = [
  { id: 'churn', title: 'Churn', path: '/projects/churn' },
  { id: 'from-days-to-minutes', title: 'From Days to Minutes', path: '/projects/from-days-to-minutes' },
  { id: 'badlands', title: 'Badlands', path: '/projects/badlands' },
  { id: 'constellation', title: 'Constellation Data Labs', path: '/projects/constellation' },
  { id: 'rosie', title: 'Rosie', path: '/projects/rosie' },
  { id: 'concert-merch', title: 'Concert Merch', path: '/projects/concert-merch' },
  { id: 'art-without-constraints', title: 'Art without constraints', path: '/projects/art-without-constraints' }
];

export function getBrowseMoreProjects(currentProjectId: string) {
  const currentIndex = ALL_PROJECTS.findIndex(p => p.id === currentProjectId);
  
  if (currentIndex === -1) return ALL_PROJECTS.slice(0, 4);

  const suggestedProjects = [];
  
  // Loops to grab the next 4 items, wrapping back to index 0 using the new array length of 7
  for (let i = 1; i <= 4; i++) {
    const nextIndex = (currentIndex + i) % ALL_PROJECTS.length;
    suggestedProjects.push(ALL_PROJECTS[nextIndex]);
  }

  return suggestedProjects;
}