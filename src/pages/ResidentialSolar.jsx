import { useState } from "react";
import { ChevronDown, Home, Shield, DollarSign, Award, Leaf } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import EnquiryForm from "../components/EnquiryForm";
import { IMAGES, FAQS } from "../data/companyData";

export default function ResidentialSolar() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Up to 90% Electricity Bill Reduction",
      desc: "Harness daytime solar energy to power your air conditioning, refrigerators, pumps, and home appliances, drastically shrinking monthly utility bills.",
    },
    {
      icon: Shield,
      title: "Hedge Against Grid Tariff Hikes",
      desc: "Grid electricity tariffs rise by 4% to 7% annually. On-site solar fixes your energy costs for 25+ years with predictable zero-cost generation.",
    },
    {
      icon: Award,
      title: "Government Subsidy & Net-Metering",
      desc: "Seamless facilitation for central PM Surya Ghar scheme subsidies and DISCOM net-metering approvals, feeding surplus power back into the grid.",
    },
    {
      icon: Leaf,
      title: "Clean Living & Enhanced Property Value",
      desc: "Reduce tons of carbon emissions annually while increasing the long-term resale appraisal value of your independent bungalow or villa.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Rooftop Feasibility & Energy Audit",
      desc: "Our engineers analyze your sanctioned electrical load, roof layout, shadow profiles, and monthly consumption to size the perfect kW system.",
    },
    {
      step: "02",
      title: "Engineering Layout & Subsidy Filing",
      desc: "We generate a customized 3D solar layout and prepare statutory documentation for DISCOM net-metering and PM Surya Ghar subsidy approval.",
    },
    {
      step: "03",
      title: "Precision Rooftop Installation",
      desc: "Certified technicians erect non-invasive mounting structures, high-efficiency Tier-1 PV modules, and synchronized grid-tie inverters.",
    },
    {
      step: "04",
      title: "DISCOM Net-Meter Synchronization",
      desc: "State electricity board inspection is completed, bi-directional net-meter is energized, and your mobile monitoring app is activated.",
    },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative py-20 lg:py-28 bg-[#123C32] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.residentialHero}
            alt="Residential rooftop solar installation"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123C32] via-[#123C32]/95 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/40">
              <Home className="w-3.5 h-3.5" />
              <span>Residential Rooftop Solar Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Smarter Solar Energy for Modern Indian Homes
            </h1>

            <p className="text-base sm:text-lg text-[#E9F0E9]/85 leading-relaxed font-normal">
              Cut electricity bills by up to 90% and generate clean power right from your rooftop. Proton Power Infra designs and installs premium, turnkey residential solar systems with full DISCOM net-metering and subsidy support.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-md transition-all"
              >
                <span>Request Free Home Feasibility Survey</span>
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                <span>How the Installation Works</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction & Main Benefits (Clean 2-Column Layout, not 6 tiny cards) */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                eyebrow="Rooftop Benefits"
                title="Invest Once. Save on Electricity for 25 Years."
                description="A customized rooftop solar system turns an unutilized concrete roof or shed into a clean personal power plant that protects your household budget forever."
              />

              <div className="rounded-2xl overflow-hidden shadow-md border border-[#E2E8E2] h-72">
                <img
                  src={IMAGES.residentialModern}
                  alt="Modern rooftop solar setup on residential home"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
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

      {/* 3. 4-Step Residential Process */}
      <section id="process" className="py-20 bg-[#F7F8F4] border-b border-[#E2E8E2] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Simple 4-Step Journey"
            title="From Consultation to Net-Meter Activation"
            description="We manage every single permit, approval, structural mounting, and grid inspection with zero disruption to your daily routine."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E2E8E2] shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-extrabold text-[#E8A83E] mb-2 font-mono">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-[#202724] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#525D57] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Subsidy & DISCOM Support Notice */}
      <section className="py-16 bg-[#E9F0E9] border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#123C32]/20 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#123C32] bg-[#E9F0E9] px-3 py-1 rounded-full">
                  Government Subsidy & Liaisoning Support
                </span>
                <h3 className="text-2xl font-bold text-[#202724]">
                  PM Surya Ghar Muft Bijli Yojana & Net-Metering Assistance
                </h3>
                <p className="text-sm text-[#525D57] leading-relaxed">
                  Indian homeowners installing rooftop solar systems are eligible for substantial direct central government subsidies. Our dedicated liaisoning team manages the complete paperwork, DISCOM portal registration, CEIG clearance, and subsidy bank credit facilitation on your behalf.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold bg-[#123C32] text-white hover:bg-[#1A4D41] transition-all shadow-xs"
                >
                  <span>Check Your Subsidy Eligibility</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Common Questions on Home Rooftop Solar"
            align="center"
            className="mb-12"
          />

          <div className="space-y-4">
            {(FAQS.residential || []).map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#E2E8E2] overflow-hidden transition-all bg-[#F7F8F4]"
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
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#525D57] leading-relaxed border-t border-[#E2E8E2]/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Functional Consultation Form */}
      <section id="consultation-form" className="py-20 bg-[#F7F8F4] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Book a Consultation"
            title="Request a Free Home Solar Feasibility Survey"
            description="Our solar engineers in Indore, Delhi, Bhopal, and Dewas will review your roof measurements and provide a customized techno-economic report."
            align="center"
            className="mb-12"
          />

          <EnquiryForm defaultCustomerType="residential" />
        </div>
      </section>

      {/* 7. Footer CTA */}
      <CTASection
        title="Ready to Cut Your Electricity Bills Forever?"
        description="Schedule a no-obligation rooftop audit with our certified solar engineers today."
      />
    </div>
  );
}
