import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import SolarSolutions from "../components/SolarSolutions";
import SustainabilityImpact from "../components/SustainabilityImpact";
import SEO from "../components/SEO";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://protonpowerinfra.com/#organization",
      "name": "Proton Power Infra",
      "legalName": "Proton Power Infrastructure Pvt. Ltd.",
      "url": "https://protonpowerinfra.com",
      "logo": "https://protonpowerinfra.com/logo.webp",
      "foundingDate": "2012",
      "description": "Leading Independent Power Producer (IPP), turnkey Solar EPC contractor with 125+ MW installed, and Inverter Duty Power Transformer manufacturer in India.",
      "telephone": "+91 97707 44687",
      "email": "support@protonpowerinfra.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 242, Sch. No. 78, Part II, Vijay Nagar",
        "addressLocality": "Indore",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "452001",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/in/proton-power-infra-a581bb33b/",
        "https://www.instagram.com/protonpowerinfra/",
        "https://x.com/InfraProto74535",
        "https://www.facebook.com/people/Proton-Power-Infra/61572926724511/"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://protonpowerinfra.com/#localbusiness",
      "name": "Proton Power Infra",
      "image": "https://protonpowerinfra.com/logo.webp",
      "url": "https://protonpowerinfra.com",
      "telephone": "+91 97707 44687",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 242, Sch. No. 78, Part II, Vijay Nagar",
        "addressLocality": "Indore",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "452001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 22.7533,
        "longitude": 75.8937
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:30"
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Proton Power Infra | Turnkey Solar EPC & Inverter Duty Transformers"
        description="Proton Power Infra is an Indian Independent Power Producer (IPP), turnkey Solar EPC contractor with 125+ MW installed, and premier manufacturer of Inverter Duty Solar Transformers in Indore, India."
        canonical="https://protonpowerinfra.com/"
        schema={homeSchema}
      />

      {/* Section 1: Hero Section */}
      <Hero />

      {/* Section 2: Why choose Proton Power Infra */}
      <WhyChooseUs />

      {/* Section 3: Our Solar & Transformer Solutions */}
      <SolarSolutions />

      {/* Section 4: Solar Calculator & Savings Feasibility + Consultation CTA */}
      <SustainabilityImpact />
    </div>
  );
}
