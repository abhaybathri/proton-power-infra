import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronDown, ChevronUp, Home, Zap, Shield, ArrowRight, DollarSign, Leaf, TrendingUp, Award, MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import EnquiryForm from "../components/EnquiryForm";
import { IMAGES, FAQS, COMPANY_DETAILS } from "../data/companyData";

export default function ResidentialSolar() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      desc: "Reduce your electricity bills significantly by generating your own clean power from the sun.",
    },
    {
      icon: Shield,
      title: "Energy Independence",
      desc: "Protect your household from rising utility grid tariffs and annual rate hikes for decades.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Lifestyle",
      desc: "Lower your carbon footprint and actively contribute to a greener, more sustainable future.",
    },
    {
      icon: TrendingUp,
      title: "Increased Property Value",
      desc: "High-efficiency solar installations demonstrably add long-term resale value to your home.",
    },
    {
      icon: Award,
      title: "Government Incentives",
      desc: "Enjoy direct central and state subsidies (PM Surya Ghar / DISCOM net-metering rebates).",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Site Assessment",
      desc: "Our experts assess your property's energy needs, rooftop structure, and solar generation potential.",
    },
    {
      step: "02",
      title: "Customized Design",
      desc: "We craft a solar system layout tailored precisely to your household energy requirements and aesthetics.",
    },
    {
      step: "03",
      title: "Professional Installation",
      desc: "Certified technicians install your solar panels with civil precision and high-altitude safety adherence.",
    },
    {
      step: "04",
      title: "System Activation",
      desc: "Net-meter synchronization completes so you start generating clean energy and saving money immediately.",
    },
  ];

  const whyChooseUs = [
    { title: "Expert Guidance", desc: "From initial consultation to installation, we're with you every step of the way." },
    { title: "Customized Solutions", desc: "Tailored solar systems to meet your unique architectural and energy needs." },
    { title: "Quality Assurance", desc: "We use premium Tier-1 solar panels and equipment for durability and maximum efficiency." },
    { title: "Hassle-Free Process", desc: "Our team handles permits, net-metering approvals, installations, and activation seamlessly." },
    { title: "Local Expertise in Indore", desc: "Headquartered in Indore, we understand local DISCOM regulations and deliver reliable solutions." },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative py-20 lg:py-28 bg-[#123C32] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.residentialHero}
            alt="Residential home with solar panels"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123C32] via-[#123C32]/95 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/40">
              <Home className="w-3.5 h-3.5" />
              <span>Switch to Solar – Save Money, Save the Planet</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Empower Your Home with Solar Energy.
            </h1>

            <p className="text-base sm:text-lg text-[#E9F0E9]/85 leading-relaxed font-normal">
              At Proton Power Infra, we specialize in residential solar installations designed to bring clean, renewable energy to your home. Say goodbye to high electricity bills and hello to energy independence.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/enquiry?type=residential"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg transition-all"
              >
                <span>Request Free Home Solar Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#residential-benefits"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                <span>Explore Home Benefits</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Benefits of Residential Solar Installation */}
      <section id="residential-benefits" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Benefits of Residential Solar"
            title="Why Choose Solar for Your Home?"
            description="Our customized solar solutions not only reduce your energy costs but also contribute to a greener, more sustainable future."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold text-[#202724] mb-2">{b.title}</h3>
                <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">{b.desc}</p>
              </div>
            ))}

            <div className="p-6 rounded-2xl bg-[#123C32] text-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#E8A83E] uppercase tracking-wider block mb-1">
                  Local Indore Support
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  DISCOM Net Metering Liaisoning
                </h3>
                <p className="text-xs text-[#E9F0E9]/80 leading-relaxed">
                  We manage all paperwork with MPPKVVCL / DISCOM so your bi-directional meter is approved swiftly with zero hassle.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  to="/enquiry?type=residential"
                  className="text-xs font-bold text-[#E8A83E] hover:underline flex items-center gap-1"
                >
                  <span>Apply for Subsidy Assessment →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Process: How We Bring Solar to Your Home */}
      <section className="py-20 bg-[#F7F8F4] border-y border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Bring Solar to Your Home"
            description="A seamless 4-step execution designed for zero disruption to your daily home life."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((st, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E2E8E2] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center font-extrabold text-sm mb-4">
                    {st.step}
                  </div>
                  <h3 className="text-base font-bold text-[#202724] mb-2">{st.title}</h3>
                  <p className="text-xs text-[#525D57] leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Proton Power Infra for Residential Solar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E2E8E2] shadow-lg">
                <img
                  src={IMAGES.residentialModern}
                  alt="Modern villa rooftop solar by Proton Power Infra"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="Why Choose Proton Power Infra?"
                title="Your Residential Solar Experts in Indore & Pan-India"
                description="We bring the same industrial-grade engineering discipline to home rooftops that we apply to multi-megawatt solar parks."
              />

              <div className="space-y-4">
                {whyChooseUs.map((w, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#123C32] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#202724]">{w.title}</h4>
                      <p className="text-xs text-[#525D57] leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 bg-[#F7F8F4] border-t border-[#E2E8E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Residential FAQs"
            title="Common Questions About Home Solar"
            description="Clear answers regarding subsidies, terrace space requirements, and net-metering timelines."
            align="center"
            className="mb-12"
          />

          <div className="space-y-4">
            {FAQS.residential.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-xl border border-[#E2E8E2] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-[#E9F0E9] transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#202724]">{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#123C32] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#525D57] shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="p-5 text-xs sm:text-sm text-[#525D57] leading-relaxed bg-white border-t border-[#E2E8E2]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Consultation Form */}
      <section className="py-20 bg-[#E9F0E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Home Solar Consultation"
            title="Request Your Free Home Solar Feasibility Survey"
            description="Our engineers will inspect your terrace, calculate shadow-free capacity, and provide an accurate cost and subsidy simulation."
            align="center"
            className="mb-10"
          />
          <EnquiryForm defaultCustomerType="residential" />
        </div>
      </section>
    </div>
  );
}
