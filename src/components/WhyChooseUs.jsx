import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Cpu, Users, MapPin, FileCheck, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "track-record",
      stat: "125+ MW",
      badge: "IPP Track Record",
      title: "125+ MW Proven Track Record",
      desc: "Demonstrated execution across public and private sector projects throughout India as an Independent Power Producer (IPP).",
      icon: Award,
      keyPoints: [
        "Independent Power Producer with active asset ownership",
        "Utility-scale ground parks & MW-scale industrial plants",
        "Public & private sector tenders commissioned since 2012",
      ],
    },
    {
      id: "transformers",
      stat: "In-House",
      badge: "Manufacturing & Repair",
      title: "In-House Transformer Manufacturing",
      desc: "Unlike standard EPCs, we manufacture our own Inverter Duty Solar Transformers and execute step-up/step-down repair services.",
      icon: Cpu,
      keyPoints: [
        "Inverter duty solar transformers engineered for high harmonics",
        "Step-up & step-down HT repair, rewinding & oil filtration",
        "Custom KVA & MVA ratings built to operational specifications",
      ],
    },
    {
      id: "team",
      stat: "2012+",
      badge: "Experienced Leadership",
      title: "Dynamic Expert Team",
      desc: "The ideal blend of dynamic young engineers and seasoned power infrastructure professionals adhering to global engineering standards.",
      icon: Users,
      keyPoints: [
        "Over a decade of hands-on utility solar park engineering",
        "Strict adherence to CEA & MNRE technical standards",
        "Dynamic problem-solving with rapid site mobilization",
      ],
    },
    {
      id: "footprint",
      stat: "4 Hubs",
      badge: "Strategic Locations",
      title: "Pan-India Presence (4 Offices)",
      desc: "Headquartered in Indore with strategic regional offices in Delhi, Dewas, and Bhopal for immediate on-site mobilization.",
      icon: MapPin,
      keyPoints: [
        "Central Headquarters: Indore (Scheme 78, Vijay Nagar)",
        "Regional Offices: New Delhi (NCR) & Bhopal (M.P.)",
        "Manufacturing & Operations Hub: Dewas Industrial Area",
      ],
    },
    {
      id: "epc-liaisoning",
      stat: "Turnkey",
      badge: "Full Clearances",
      title: "Turnkey EPC & MNRE Liaisoning",
      desc: "Handling complete paperwork: MNRE project registration, LTOA open access, PPA drafting, CEIG safety inspection, and REC accreditation.",
      icon: FileCheck,
      keyPoints: [
        "Zero-headache government nodal agency registrations",
        "Long-Term Open Access (LTOA) grid approvals & PPA drafting",
        "CEIG safety certification & REC SLDC accreditation",
      ],
    },
  ];

  return (
    <section className="py-10 md:py-10 lg:py-10 bg-[#E9F0E9] relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#123C32_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-3">
            <span>Why choose Proton Power Infra</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#202724] tracking-tight leading-tight font-heading">
            Technical Brilliance with Global Engineering Standards
          </h2>

          <p className="text-base sm:text-lg text-[#525D57] leading-relaxed mt-4 font-normal">
            A dynamic team bringing together the perfect mix of young talent and seasoned industry professionals. Delivering precision, passion, and purpose across India since 2012.
          </p>
        </div>

        {/* Interactive Feature Architecture: Click or Hover to Explore */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Interactive Cards Navigator */}
          <div className="lg:col-span-7 space-y-3">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeTab === idx;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  onMouseEnter={() => setActiveTab(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white border-[#123C32] shadow-md ring-1 ring-[#123C32]/20 translate-x-1"
                      : "bg-white/80 hover:bg-white border-[#E2E8E2] hover:border-[#123C32]/30 shadow-2xs"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#123C32] text-[#E8A83E]"
                          : "bg-[#E9F0E9] text-[#123C32]"
                      }`}
                    >
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-base sm:text-lg font-bold text-[#202724] tracking-tight">
                          {pillar.title}
                        </h3>
                        <span
                          className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full font-tech shrink-0 ${
                            isActive
                              ? "bg-[#123C32] text-[#E8A83E]"
                              : "bg-[#123C32]/10 text-[#123C32]"
                          }`}
                        >
                          {pillar.stat}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Highlight Showcase Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8E2] shadow-md relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-2 font-tech">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8A83E] animate-ping"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#123C32]">
                    Capability Focus • {pillars[activeTab].badge}
                  </span>
                </div>
                <span className="text-2xl font-black text-[#123C32] font-tech">
                  {pillars[activeTab].stat}
                </span>
              </div>

              <div>
                <h4 className="text-2xl font-black text-[#202724] tracking-tight font-heading">
                  {pillars[activeTab].title}
                </h4>
                <p className="text-sm text-[#525D57] leading-relaxed mt-2">
                  {pillars[activeTab].desc}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#123C32] font-tech">
                  Key Operational Benchmarks:
                </div>
                {pillars[activeTab].keyPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252A27]">
                    <CheckCircle2 className="w-4 h-4 text-[#123C32] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation Link: Read our full company details (navigates to /about) */}
            <div className="pt-8 border-t border-gray-100 mt-6">
              <Link
                to="/about"
                className="w-full inline-flex items-center justify-between p-4 rounded-xl bg-[#F7F8F4] hover:bg-[#123C32] text-[#123C32] hover:text-white border border-[#E2E8E2] transition-all duration-300 group"
              >
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#E8A83E] uppercase tracking-wider font-tech">
                    Corporate Profile & Track Record
                  </span>
                  <span className="text-sm font-bold mt-0.5">
                    Read our full company details
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
