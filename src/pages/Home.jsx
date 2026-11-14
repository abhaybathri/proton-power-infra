import Hero from "../components/Hero";
import CompanyHighlights from "../components/CompanyHighlights";
import SolarSolutions from "../components/SolarSolutions";
import WhyChooseUs from "../components/WhyChooseUs";
import SolarJourney from "../components/SolarJourney";
import FeaturedProjects from "../components/FeaturedProjects";
import SustainabilityImpact from "../components/SustainabilityImpact";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero Section with Real 125+ MW Metrics & Real Project Photography */}
      <Hero />

      {/* 2. Company Highlights & Trust Bar */}
      <CompanyHighlights />

      {/* 3. Solar & Transformer Solutions */}
      <SolarSolutions />

      {/* 4. Why Choose Us (125+ MW, IPP, In-House Transformers, 4 Offices) */}
      <WhyChooseUs />

      {/* 5. How It Works — 4-Phase Solar Journey */}
      <SolarJourney />

      {/* 6. Featured Real Projects & Substations Portfolio */}
      <FeaturedProjects />

      {/* 7. Sustainability & Impact with Interactive Savings Calculator */}
      <SustainabilityImpact />

      {/* Customer feedback completely removed per request */}

      {/* 8. Strong Enquiry CTA */}
      <CTASection
        title="Ready to Make the Switch to Solar & Reliable Power?"
        description="Let's find the right solar energy or transformer solution for your facility. Connect with our engineering headquarters in Indore or regional offices in Delhi, Bhopal, and Dewas."
      />
    </div>
  );
}
