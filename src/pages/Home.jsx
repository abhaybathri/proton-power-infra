import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import SolarSolutions from "../components/SolarSolutions";
import SustainabilityImpact from "../components/SustainabilityImpact";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero Section */}
      <Hero />

      {/* Section 2: Why choose Proton Power Infra */}
      <WhyChooseUs />

      {/* Section 3: Our Solar & Transformer Solutions */}
      <SolarSolutions />

      {/* Section 4: Solar Calculator & Savings Feasibility + Consultation CTA */}
      <SustainabilityImpact />

      {/* Section 5: Consultation CTA
      <CTASection /> */}
    </div>
  );
}
