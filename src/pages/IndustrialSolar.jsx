import { useState } from "react";
import { Factory, ChevronDown, Warehouse, Wheat, FlaskConical, DollarSign, Shield, TrendingUp, Layers, Award } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import EnquiryForm from "../components/EnquiryForm";
import { IMAGES, FAQS } from "../data/companyData";

export default function IndustrialSolar() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Massive Operating Cost Reduction",
      desc: "Industrial tariffs and peak surcharges represent a major cost center. Captive solar offsets peak tariffs, yielding multi-crore lifetime power savings.",
    },
    {
      icon: Shield,
      title: "High-Tension (HT) Grid Synchronization",
      desc: "Engineered for 11kV and 33kV high-voltage tie-ins with synchronized Inverter Duty Solar Transformers for continuous, stable production lines.",
    },
    {
      icon: TrendingUp,
      title: "Accelerated Tax Depreciation",
      desc: "Benefit from Section 32 capital allowances (up to 40% depreciation in Year 1), significantly improving corporate financial cash flows.",
    },
    {
      icon: Layers,
      title: "Customized Structural Integration",
      desc: "Tailored to high-altitude factory tin sheds, PEB structures, and adjoining open acreage with non-corrosive mounting and zero structural fatigue.",
    },
    {
      icon: Award,
      title: "RPO & ESG Compliance",
      desc: "Satisfy statutory Renewable Purchase Obligations (RPO) and international supply chain carbon neutrality mandates.",
    },
  ];

  const industriesWeServe = [
    {
      icon: Factory,
      title: "Heavy Manufacturing Plants",
      desc: "Continuous power for fabrication units, induction furnaces, CNC machinery, and high-load assembly conveyors.",
    },
    {
      icon: Warehouse,
      title: "Warehouses & Logistics Centers",
      desc: "Utilize expansive roof acreage for captive daytime operations and cold-chain temperature preservation.",
    },
    {
      icon: Wheat,
      title: "Agro & Food Processing Mills",
      desc: "Reliable power for continuous grain processing, automated packaging, cold storage, and refrigeration chillers.",
    },
    {
      icon: FlaskConical,
      title: "Chemical & Pharmaceutical Units",
      desc: "Corrosion-resistant anodized mounting and in-house transformers built for sensitive manufacturing environments.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Contract Demand & Load Profiling",
      desc: "Analysis of 15-minute TOD meter intervals, power factor, and transformer capacity to size captive solar.",
    },
    {
      step: "02",
      title: "Statutory CEIG & DISCOM Clearances",
      desc: "Handling state electrical inspectorate approvals, bay synchronization, and open-access grid approvals.",
    },
    {
      step: "03",
      title: "Procurement & Precision Erection",
      desc: "Deployment of Tier-1 bifacial panels, inverter duty transformers, and HT switchgear without disrupting factory shifts.",
    },
    {
      step: "04",
      title: "SCADA Telemetry & Commissioning",
      desc: "Cloud IoT generation telemetry synchronized with plant control rooms for real-time string monitoring.",
    },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative py-20 lg:py-28 bg-[#123C32] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.industrialHero}
            alt="Proton Power Infra real industrial solar arrays"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123C32] via-[#123C32]/95 to-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/40">
              <Factory className="w-3.5 h-3.5" />
              <span>Megawatt-Scale Industrial Solar Systems</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Captive Solar Power for Heavy Industry & Manufacturing
            </h1>

            <p className="text-base sm:text-lg text-[#E9F0E9]/85 leading-relaxed font-normal">
              High-tension solar energy systems designed to power severe industrial loads, eliminate peak grid tariff surcharges, and provide uninterrupted energy independence with in-house transformer reliability.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#industrial-enquiry"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-md transition-all"
              >
                <span>Request Industrial Site Evaluation</span>
              </a>
              <a
                href="#industries"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                <span>Sectors We Serve</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Industrial Advantages (Clean 2-Column Layout, not 6 small cards) */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                eyebrow="Industrial Economics"
                title="Engineered for Continuous 24/7 Production Power"
                description="Our industrial systems integrate directly with your HT electrical switchyard (11kV / 33kV) to offset peak daytime tariffs without risking production downtime."
              />

              <div className="rounded-2xl overflow-hidden shadow-md border border-[#E2E8E2] h-72">
                <img
                  src={IMAGES.industrialPark}
                  alt="Industrial captive solar plant installed by Proton Power Infra"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              {benefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-[#F7F8F4] border border-[#E2E8E2]"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white text-[#123C32] flex items-center justify-center shrink-0 border border-[#E2E8E2] shadow-2xs mt-0.5">
                      <Icon className="w-5 h-5 stroke-[2] text-[#123C32]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#202724] mb-1">
                        {b.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Industries Served */}
      <section id="industries" className="py-20 bg-[#F7F8F4] border-b border-[#E2E8E2] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sector Expertise"
            title="Tailored Power Solutions Across Key Manufacturing Verticals"
            description="Every manufacturing sector possesses unique load characteristics, dust conditions, and electrical parameters."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesWeServe.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-[#E2E8E2] shadow-xs space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E9F0E9] text-[#123C32] flex items-center justify-center border border-[#123C32]/10">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#202724]">{ind.title}</h3>
                  <p className="text-xs text-[#525D57] leading-relaxed">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. 4-Stage Delivery Process */}
      <section className="py-20 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Execution Milestones"
            title="Turnkey Industrial Delivery Without Production Interruption"
            description="Our certified power infrastructure engineers ensure seamless, zero-downtime installation and synchronization."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F7F8F4] p-6 rounded-2xl border border-[#E2E8E2] shadow-xs space-y-3"
              >
                <div className="text-2xl font-extrabold text-[#123C32] font-mono">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-[#202724]">{step.title}</h3>
                <p className="text-xs text-[#525D57] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 bg-[#F7F8F4] border-b border-[#E2E8E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industrial FAQs"
            title="Common Questions on Megawatt-Scale Industrial Solar"
            align="center"
            className="mb-12"
          />

          <div className="space-y-4">
            {(FAQS.industrial || []).map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#E2E8E2] overflow-hidden transition-all bg-white"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#202724] hover:text-[#123C32] cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#123C32] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#525D57] leading-relaxed border-t border-[#E2E8E2]/60 bg-[#F7F8F4]">
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
      <section id="industrial-enquiry" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industrial Feasibility"
            title="Request an Industrial Site Audit & HT Sizing Analysis"
            description="Our senior power engineers in Indore, Delhi, Bhopal, and Dewas will review your sanction load and HT connection parameters."
            align="center"
            className="mb-12"
          />

          <EnquiryForm defaultCustomerType="industrial" />
        </div>
      </section>

      {/* 7. Footer CTA */}
      <CTASection
        title="Power Your Industrial Operations with Clean Captive Solar"
        description="Schedule a technical consultation with our industrial solar specialists today."
      />
    </div>
  );
}
