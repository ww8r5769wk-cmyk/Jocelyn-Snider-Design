import React from 'react';
import ProjectLayout from '../components/ProjectLayout';
import { PROJECTS_METADATA } from '../data/projectsData';
import Counter from '../components/Counter';

import days2minsHero from '../assets/images/days2mins_hero.png';
import days2minsCode from '../assets/images/days2mins_code.png';
import days2minsMetric1 from '../assets/images/days2mins_metric_1.png';
import days2minsMetric2 from '../assets/images/days2mins_metric_2.png';
import days2minsMetric3 from '../assets/images/days2mins_metric_3.png';
import days2minsMetric4 from '../assets/images/days2mins_metric_4.png';

export default function FinalProjectPage() {
  const project = PROJECTS_METADATA.find(p => p.id === 6);
  return (
    <ProjectLayout
      id={6}
      title="From Days to Minutes"
      category="Healthcare Furniture"
      headerCategory="PROCESS AUTOMATION | CREATIVE OPERATIONS"
      role="Sole Designer & Automation Developer"
      tools="JavaScript Automation Script, Excel Integration, InDesign Workflow System"
      impact={<>Redesigned a 20-year-old business process that reduced price book update time by over <Counter value={90} />%</>}
      tldr={
        <div className="space-y-6">
          <p>
            The Price Book Automation System transformed a labour-intensive pricing workflow into a scalable, automated process that significantly reduced production time, minimized human error, and modernized a system that had remained largely unchanged for over two decades.
          </p>
          <p>
            Supporting both U.S. and Canadian price books, the solution automated pricing updates across more than 1,050 products by connecting a master Excel pricing document directly to Adobe InDesign. What was once a multi-week undertaking involving multiple employees became a streamlined process completed in a matter of hours.
          </p>
          <p>
            Beyond improving efficiency, the project demonstrated how design, technology, and operational thinking can intersect to create measurable business value.
          </p>
        </div>
      }
      challenge={
        <div className="space-y-6">
          <p>
            The organization's pricing workflow relied entirely on manual data entry. Every price increase required product pricing to be individually copied from a master spreadsheet and pasted into two separate InDesign price books.
          </p>
          <p>
            With more than 1,050 products across multiple product categories and pricing structures, the process demanded extensive administrative effort and introduced considerable risk. A single pricing update required approximately:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Four full days of manual data entry</li>
            <li>One full day of verification</li>
            <li>Additional review from two separate team members</li>
            <li>Roughly 104 total labour hours per update cycle</li>
          </ul>
          <p>
            Price increases occurred multiple times per year, making pricing maintenance one of the most resource-intensive recurring tasks within the department.
          </p>
          <p>
            The workflow had remained largely unchanged for over 20 years, despite significant growth in product offerings and increasing operational demands. As the catalogue expanded, so did the complexity, time commitment, and potential for costly human error.
          </p>
        </div>
      }
      processHeading="OBJECTIVE"
      process={
        <div className="space-y-6">
          <p>
            The goal was to redesign the pricing update process by eliminating manual data entry and establishing a reliable, repeatable workflow capable of supporting future growth.
          </p>
          <p>The solution needed to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Automate pricing updates across 1,050+ products</li>
            <li>Support both U.S. and Canadian price books</li>
            <li>Integrate with existing Excel and InDesign workflows</li>
            <li>Accommodate multiple pricing structures and product variations</li>
            <li>Reduce production time</li>
            <li>Improve data accuracy</li>
            <li>Create a scalable system that could be maintained long-term</li>
          </ul>
          <p>
            Success would be measured not only by time savings, but by the ability to reduce risk, improve consistency, and create a more sustainable workflow for future pricing updates.
          </p>
        </div>
      }
      solution={
        <div className="space-y-6">
          <p>
            A custom automation system was developed using JavaScript and Adobe InDesign scripting to establish a direct connection between the master pricing spreadsheet and the published price books.
          </p>
          <p>
            The workflow automatically reads pricing data from Excel, identifies corresponding products within InDesign, and updates pricing throughout the document without manual intervention.
          </p>
          <p>
            Development required extensive analysis, testing, and refinement to accommodate a wide range of real-world scenarios, including:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Multiple product categories</li>
            <li>Graded pricing structures</li>
            <li>Product variations and configurations</li>
            <li>Formatting inconsistencies</li>
            <li>Data validation requirements</li>
            <li>Error handling and quality control measures</li>
          </ul>
          <p>
            Numerous iterations were completed to ensure reliability and accuracy across thousands of individual pricing records. The resulting system transformed a repetitive manual task into a streamlined workflow capable of updating an entire price book in under 2 minutes.
          </p>
          <p>
            The project also demonstrated the strategic use of AI-assisted development tools to accelerate problem-solving, validate solutions, and support the creation of a robust automation framework.
          </p>
        </div>
      }
      impactHeading="RESULT"
      narrativeImpact={
        <div className="space-y-6">
          <p>
            The implementation fundamentally changed how pricing updates are managed across the organization.
          </p>
          <p>Key outcomes included:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reduced total update time from approximately 104 hours to 6-8 hours</li>
            <li>Automated updates for more than 1,050 products</li>
            <li>Eliminated thousands of manual copy-and-paste actions</li>
            <li>Significantly reduced opportunities for human error</li>
            <li>Increased confidence in pricing accuracy</li>
            <li>Streamlined review and approval processes</li>
            <li>Modernized a workflow that had remained unchanged for over 20 years</li>
          </ul>
          <p>
            Depending on annual pricing activity, the system saves between 96 and 384 labour hours each year, allowing valuable time to be redirected toward higher-value initiatives.
          </p>
          <p>
            More importantly, the project highlights the value of approaching design challenges through a systems-thinking lens. By identifying an operational bottleneck and implementing a scalable technical solution, a traditionally administrative task was transformed into an efficient, repeatable process that continues to deliver measurable business impact.
          </p>
        </div>
      }
      topHighlight={
        <div className="p-8 bg-[#7A2D3C]/5 border border-[#7A2D3C]/10 rounded-2xl">
          <p className="text-[#FF4A1F] font-normal text-xl md:text-2xl leading-relaxed font-sans">
            Reduced a 104-hour manual pricing workflow to 6-8 hours through custom automation, saving up to 384 labour hours annually.
          </p>
        </div>
      }
      heroImage={days2minsHero}
      afterSolution={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="w-full flex items-stretch">
            <img 
              src={days2minsCode} 
              alt="Price Book Automation - Adobe InDesign and JavaScript Scripting Code" 
              className="w-full h-auto block object-cover rounded-3xl border border-[#7A2D3C]/10"
            />
          </div>
          <div className="w-full flex items-stretch">
            {project?.processGif && (
              <img 
                src={project.processGif.src} 
                alt={project.processGif.alt} 
                className="w-full h-auto block rounded-3xl"
              />
            )}
          </div>
        </div>
      }
      afterResult={
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <img 
            src={days2minsMetric1} 
            alt="96+ Hours Time Saved Per Update Cycle" 
            className="w-full h-auto block rounded-3xl"
          />
          <img 
            src={days2minsMetric2} 
            alt="0 Room For Error Significantly Reduced Human Errors" 
            className="w-full h-auto block rounded-3xl"
          />
          <img 
            src={days2minsMetric3} 
            alt="2100 Products Automated Across 2 Price Books" 
            className="w-full h-auto block rounded-3xl"
          />
          <img 
            src={days2minsMetric4} 
            alt="94% Production Time Reduced Reallocated To Strategic Creative Work" 
            className="w-full h-auto block rounded-3xl"
          />
        </div>
      }
    />
  );
}
