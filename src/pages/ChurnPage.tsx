import ProjectLayout from '../components/ProjectLayout';

export default function ChurnPage() {
  return (
    <ProjectLayout
      id={3}
      title="CHURN"
      category="Food/Dairy"
      headerCategory="Package Design + Brand Identity"
      role="Designer"
      tools="Packaging system, brand identity, typography, visual language, mockups"
      impact="Reimagining a pantry staple through a bold, modern packaging system that elevates everyday food branding"
      tldr="Churn is a conceptual artisan butter brand created during a one-week Brief Club sprint, designed to modernize a traditionally stagnant category through bold typography, expressive colour, and a playful packaging system built for shelf impact."
      challenge={
        <div className="space-y-4">
          <p>The butter aisle is heavily dominated by heritage-inspired branding, muted colour palettes, and conventional packaging systems. Despite butter being a versatile kitchen staple, the category lacks visual innovation and emotional engagement.</p>
        </div>
      }
      processHeading="OBJECTIVE"
      process={
        <div className="space-y-4">
          <p>Create a contemporary butter brand that would stand apart both online and on shelf while encouraging consumers to see butter as a creative, expressive ingredient rather than a basic commodity.</p>
        </div>
      }
      solution={
        <div className="space-y-4">
          <p>A scalable packaging system was developed across four distinct flavours, each featuring an intentionally crafted colour palette and unique personality. Through the use of chunky retro-inspired typography, minimal layouts, and bold colour blocking, the identity balances individuality and cohesion while maximizing shelf presence. Supporting photography and social media assets were also created to extend the brand’s playful, modern tone consistently across digital touchpoints.</p>
        </div>
      }
      impactHeading="RESULT"
      narrativeImpact={
        <div className="space-y-4">
          <p>The final Churn brand system transformed a familiar grocery staple into a visually distinctive and memorable product line through bold colour, expressive typography, and cohesive packaging design. By extending the identity across photography and social media, the project demonstrated how a strong visual system can create consistency across both retail and digital spaces while increasing overall brand personality and shelf appeal. The result was a confident, contemporary brand concept that balances strategic simplicity with strong visual impact.</p>
        </div>
      }
      heroImage="/src/assets/images/churn_hero_banner.png"
      heroImgRight1="/src/assets/images/regenerated_image_1780691077953.png"
      heroImgRight2="/src/assets/images/regenerated_image_1780691078813.png"
      sixGridImg1="/src/assets/images/regenerated_image_1780691077953.png"
      sixGridImg2="/src/assets/images/regenerated_image_1780691078813.png"
      sixGridImg3="/src/assets/images/regenerated_image_1780691079320.png"
      sixGridImg4="/src/assets/images/regenerated_image_1780691079933.png"
      sixGridImg5="/src/assets/images/regenerated_image_1780691080348.png"
      sixGridImg6="/src/assets/images/regenerated_image_1780691085674.png"
    />
  );
}
