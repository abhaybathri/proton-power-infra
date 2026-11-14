import { useState } from "react";
import { Building2, ChevronDown, ShieldCheck, TrendingUp, Layers, DollarSign } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import EnquiryForm from "../components/EnquiryForm";
import { IMAGES, FAQS } from "../data/companyData";

export default function CommercialSolar() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const capabilities = [
    {
      title: "Ground-Mounted Solar Parks",
      subtitle: "For Expansive Open Land & Captive Facilities",
      desc: "Custom-engineered ground-mount solar arrays designed across terrain contours with precision tilt, hot-dip galvanized mounting structures, and high-voltage grid synchronization.",
      specs: ["Acreage optimization with minimum earth disturbance", "Tier-1 mono PERC & bifacial PV modules", "HT 11kV/33kV substation integration"],
    },
    {
      title: "Commercial Rooftop Solar",
      subtitle: "For Offices, Retail Plazas, Hospitals & Institutions",
      desc: "Turn concrete roofs, metal sheds, and parking canopies into high-yield captive power plants, providing daytime peak shaving with zero operational disruption.",
      specs: ["Non-penetrative structural mounting solutions", "Shadow-free string-level inverter design", "Zero-downtime installation schedules"],
    },
  ];

  const financialAdvantages = [
    {
      icon: DollarSign,
      title: "Accelerated Depreciation (Section 32)",
      desc: "Commercial solar plant buyers can claim substantial tax write-offs in the first year under Indian Income Tax Section 32, dramatically expediting project payback.",
    },
    {
      icon: TrendingUp,
      title: "3.5 to 4.5 Years Payback Timeline",
      desc: "With high daytime commercial tariffs (₹8 to ₹11/unit), commercial installations achieve full capital break-even within 48 months, followed by 20+ years of free energy.",
    },
    {
      icon: Layers,
      title: "Flexible CAPEX & RESCO Models",
      desc: "Choose between direct ownership (CAPEX) for maximum lifetime returns or zero-upfront investment (RESCO/PPA) to purchase power at guaranteed discounted rates.",
    },
    {
      icon: ShieldCheck,
      title: "ESG & Compliance Milestone",
      desc: "Directly reduce corporate Scope 2 carbon emissions, satisfy statutory environmental benchmarks, and showcase genuine sustainability leadership.",
    },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative py-20 lg:py-28 bg-[#202724] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroSecondary}
            alt="Commercial ground mount solar array by Proton Power Infra"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#202724] via-[#202724]/95 to-[#123C32]/75"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/40">
              <Building2 className="w-3.5 h-3.5" />
              <span>Commercial & Ground-Mounted Solar Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Slash Operational Energy Costs with Commercial Solar
            </h1>

            <p className="text-base sm:text-lg text-[#E9F0E9]/85 leading-relaxed font-normal">
              Commercial facilities face India’s highest commercial grid tariffs. Proton Power Infra engineers turnkey commercial rooftops and open-acreage ground-mount solar arrays that protect profit margins and deliver verifiable returns.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#commercial-enquiry"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-md transition-all"
              >
                <span>Request Commercial Techno-Economic Report</span>
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                <span>Explore Ground-Mount & Rooftop Scope</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ground-Mount & Rooftop Dual Capabilities */}
      <section id="capabilities" className="py-20 lg:py-24 bg-white border-b border-[#E2E8E2] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Dual Engineering Scope"
            title="Ground-Mount Acreage & Commercial Rooftop Systems"
            description="Whether deploying multi-acre open solar farms or optimizing expansive commercial roofs, we engineer systems tailored to your facility's exact load curve."
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-[#F7F8F4] rounded-2xl overflow-hidden border border-[#E2E8E2] shadow-xs flex flex-col justify-between"
              >
                <div className="p-8 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#123C32] bg-[#E9F0E9] px-3 py-1 rounded-full inline-block">
                    {cap.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-[#202724]">{cap.title}</h3>
                  <p className="text-sm text-[#525D57] leading-relaxed">{cap.desc}</p>

                  <div className="pt-2 space-y-2 border-t border-[#E2E8E2]/80">
                    {cap.specs.map((sp, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs font-semibold text-[#123C32]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8A83E]"></span>
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-60 overflow-hidden bg-[#202724]">
                  <img
                    src={idx === 0 ? IMAGES.heroSecondary : IMAGES.commercialRoof}
                    alt={cap.title}
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Financial Advantages & Commercial Feasibility */}
      <section className="py-20 bg-[#F7F8F4] border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Financial Feasibility"
            title="Why Commercial Solar Delivers India's Highest Corporate ROI"
            description="With high industrial and commercial utility tariffs, solar power generation offers predictable capital payback and direct tax savings."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {financialAdvantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl border border-[#E2E8E2] shadow-xs flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E9F0E9] text-[#123C32] flex items-center justify-center shrink-0 border border-[#123C32]/10 mt-1">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#202724] mb-1.5">
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FAQs */}
      <section className="py-20 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Commercial FAQs"
            title="Commercial & Ground-Mount Solar Inquiries"
            align="center"
            className="mb-12"
          />

          <div className="space-y-4">
            {(FAQS.commercial || []).map((faq, idx) => {
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

      {/* 5. Commercial Enquiry Form */}
      <section id="commercial-enquiry" className="py-20 bg-[#F7F8F4] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Commercial Feasibility"
            title="Request a Commercial Solar Feasibility Assessment"
            description="Our power engineering consultants in Indore, Delhi, Bhopal, and Dewas will review your contract demand and prepare a comprehensive financial cash-flow model."
            align="center"
            className="mb-12"
          />

          <EnquiryForm defaultCustomerType="commercial" />
        </div>
      </section>

      {/* 6. Footer CTA */}
      <CTASection
        title="Ready to Transform Your Commercial Power Costs?"
        description="Connect with our technical consultants today for an on-site feasibility evaluation."
      />
    </div>
  );
}
