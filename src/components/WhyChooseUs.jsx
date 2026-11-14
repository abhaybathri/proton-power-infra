import { Award, Cpu, FileCheck, Activity, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { IMAGES } from "../data/companyData";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Award,
      title: "Engineering & Technical Precision",
      desc: "Topographical surveying, 3D shadow analysis, and Tier-1 PV module selection engineered for 25-year maximum yield.",
    },
    {
      icon: Cpu,
      title: "In-House Transformer Manufacturing",
      desc: "Unlike standard EPCs, we manufacture our own Inverter Duty Solar Transformers and execute step-up/step-down repairs.",
    },
    {
      icon: FileCheck,
      title: "Turnkey Liaisoning & Regulatory Clearances",
      desc: "Complete handling of MNRE registrations, Long-Term Open Access (LTOA), PPA agreements, CEIG approvals, and REC accreditation.",
    },
    {
      icon: Activity,
      title: "24/7 Cloud SCADA Telemetry & O&M",
      desc: "Real-time generation tracking, string diagnostics, scheduled panel cleaning cycles, and predictive equipment maintenance.",
    },
    {
      icon: MapPin,
      title: "Pan-India Operational Footprint",
      desc: "Headquartered in Indore with strategic regional teams in Delhi, Bhopal, and Dewas for rapid on-site mobilization.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#E9F0E9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Real Transformer Substation Showcase */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#123C32]">
                <img
                  src={IMAGES.transformerSubstation}
                  alt="High-voltage power transformer substation engineered by Proton Power Infra"
                  className="w-full h-[480px] object-cover object-center transform hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Clean Sub-Caption */}
              <div className="mt-3 text-center">
                <span className="text-xs text-[#525D57] font-medium">
                  In-House Manufactured Step-Up Substation Unit • Central India
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Structured Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              eyebrow="Company Expertise"
              title="Technical Brilliance with Global Engineering Standards"
              description="A proven track record of delivering clean energy infrastructure with precision, compliance, and long-term asset reliability."
            />

            <div className="space-y-6 pt-2">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-white text-[#123C32] flex items-center justify-center shrink-0 border border-[#E2E8E2] group-hover:bg-[#123C32] group-hover:text-[#E8A83E] transition-colors shadow-2xs mt-0.5">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#202724] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
