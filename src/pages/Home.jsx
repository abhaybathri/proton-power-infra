import Hero from "../components/Hero";
import CompanyHighlights from "../components/CompanyHighlights";
import SolarSolutions from "../components/SolarSolutions";
import WhyChooseUs from "../components/WhyChooseUs";
import TransformerShowcase from "../components/TransformerShowcase";
import FeaturedProjects from "../components/FeaturedProjects";
import SustainabilityImpact from "../components/SustainabilityImpact";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section: Focused visual, concise intro, clear CTAs */}
      <Hero />

      {/* 2. Company Credibility: Compact verified statistics bar */}
      <CompanyHighlights />

      {/* 3. Solutions & Services: Balanced visual layout */}
      <SolarSolutions />

      {/* 4. Company Expertise: Consolidated editorial two-column layout */}
      <WhyChooseUs />

      {/* 5. In-House Power Transformer Manufacturing Showcase */}
      <TransformerShowcase />

      {/* 6. Featured Commissioned Projects & Substations */}
      <FeaturedProjects />

      {/* 7. Solar Consultation & Interactive Feasibility Calculator */}
      <SustainabilityImpact />

      {/* 8. Direct Consultation CTA */}
      <CTASection
        title="Ready to Transition to Solar & Reliable Grid Power?"
        description="Connect directly with our engineering headquarters in Indore or regional offices in Delhi, Bhopal, and Dewas for a complete technical evaluation."
      />
    </div>
  );
}
