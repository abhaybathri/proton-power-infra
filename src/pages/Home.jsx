import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import SolarSolutions from "../components/SolarSolutions";
import SustainabilityImpact from "../components/SustainabilityImpact";
import CTASection from "../components/CTASection";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero Section */}
      <Hero />

      {/* Section 2: Why choose Proton Power Infra */}
      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>

      {/* Section 3: Our Solar & Transformer Solutions */}
      <ScrollReveal>
        <SolarSolutions />
      </ScrollReveal>

      {/* Section 4: Solar Calculator & Savings Feasibility + Consultation CTA */}
      <ScrollReveal>
        <SustainabilityImpact />
      </ScrollReveal>

      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
    </div>
  );
}
