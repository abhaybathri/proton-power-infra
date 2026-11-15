import { Link } from "react-router-dom";
import { ArrowRight, Target, CheckCircle2, Sparkles, Sun, Zap, ShieldCheck, Cpu, Award } from "lucide-react";

// Home Assets Images
import residentialImg from "../assets/home-assets/residential-solar.jpg";
import commercialImg from "../assets/home-assets/comercial-ground-solar.jpg";
import industrialImg from "../assets/home-assets/industrial-solar.jpg";
import transformerImg from "../assets/home-assets/solar-transformer.jpg";
import turnkeyImg from "../assets/home-assets/turnkey-solar.jpg";

export default function SolarSolutions() {
  const solarOfferings = [
    {
      id: "residential",
      slug: "residential-solar",
      index: "01 • ROOFTOP",
      title: "Residential Solar",
      capacity: "3 kW to 25 kW",
      target: "Villas & Housing Societies",
      tagline: "Cut household electricity bills up to 90% with custom rooftop net-metering.",
      highlights: ["Rooftop & Terrace Arrays", "Net-Metering Support"],
      cta: "Explore Residential",
      image: residentialImg,
      icon: Sun,
    },
    {
      id: "commercial",
      slug: "commercial-solar",
      index: "02 • COMMERCIAL",
      title: "Commercial Solar",
      capacity: "25 kW to 500+ kW",
      target: "Offices, Campuses & Hospitals",
      tagline: "High-yield commercial arrays maximizing ROI and 40% accelerated tax depreciation.",
      highlights: ["Rooftop & Ground Mount", "Accelerated Depreciation"],
      cta: "Explore Commercial",
      image: commercialImg,
      icon: Zap,
    },
    {
      id: "industrial",
      slug: "industrial-solar",
      index: "03 • INDUSTRIAL",
      title: "Industrial Captive",
      capacity: "500 kW to 10+ MW",
      target: "Manufacturing Plants & Mills",
      tagline: "Heavy-duty captive solar systems shaving peak power tariffs for factories.",
      highlights: ["MW-Scale Captive Solar", "HT Grid Synchronization"],
      cta: "Explore Industrial",
      image: industrialImg,
      icon: ShieldCheck,
    },
  ];

  const infraOfferings = [
    {
      id: "transformers",
      slug: "power-transformers",
      index: "04 • TRANSFORMERS",
      badge: "In-House Manufacturing",
      title: "Power Transformers Manufacturer",
      capacity: "Custom KVA / MVA Ratings",
      target: "Solar Parks, Substations & Utilities",
      tagline: "Proton Power Infra manufactures high-efficiency Inverter Duty Solar Transformers with complete step-up/step-down repair in Dewas.",
      features: [
        "Inverter Duty Solar Transformers",
        "Step-Up & Step-Down HT Repair",
        "Tested to IS 2026 / IEC 60076",
      ],
      cta: "Explore Power Transformers",
      image: transformerImg,
      icon: Cpu,
    },
    {
      id: "epc-services",
      slug: "solar-epc-services",
      index: "05 • TURNKEY EPC",
      badge: "Turnkey EPC Backbone",
      title: "Turnkey Solar EPC & O&M",
      capacity: "125+ MW Proven Track Record",
      target: "Park Developers, IPPs & Tenders",
      tagline: "From MNRE approvals and 3D irradiance modeling to Tier-1 procurement, structural civil erection, and 24/7 IoT SCADA monitoring.",
      features: [
        "MNRE Liaisoning & PPA Drafting",
        "Civil Erection & Transmission Line",
        "24/7 IoT SCADA Telemetry O&M",
      ],
      cta: "Explore Turnkey EPC",
      image: turnkeyImg,
      icon: Award,
    },
  ];

  return (
    <section id="solutions" className="py-10 md:py-10 lg:py-10 bg-[#F7F8F4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-6 gap-3">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E8A83E]" />
              <span>Core Engineering Solutions</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight leading-tight font-heading">
              Complete Clean Energy Infrastructure
            </h2>

            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1 font-normal">
              High-yield rooftop solar arrays, MW-scale captive industrial parks, and in-house power transformer manufacturing engineered under one roof.
            </p>
          </div>

          <span className="text-xs font-bold font-tech text-[#123C32] bg-white border border-[#E2E8E2] px-3 py-1.5 rounded-lg shadow-2xs self-start md:self-end shrink-0">
            5 Specialized Capabilities
          </span>
        </div>

        {/* Row 1: 3 Solar Generation Offerings (Compact, Visual-First) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-4.5 items-stretch">
          {solarOfferings.map((sol) => {
            return (
              <div
                key={sol.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8E2] hover:border-[#123C32]/40 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Image Frame */}
                  <div className="relative h-40 sm:h-44 overflow-hidden bg-[#202724]">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-tech uppercase tracking-wide bg-white/95 text-[#123C32] shadow-xs">
                        {sol.capacity}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold font-tech uppercase tracking-wider bg-black/60 backdrop-blur-xs text-[#E9F0E9] border border-white/10">
                        {sol.index}
                      </span>
                    </div>

                    {/* Target Pill */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#E8A83E] bg-[#202724]/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10 truncate">
                        <Target className="w-3 h-3 shrink-0" />
                        <span className="truncate">{sol.target}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content (Minimal, Crisp Info) */}
                  <div className="p-4 sm:p-4.5 space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-[#202724] group-hover:text-[#123C32] transition-colors font-heading tracking-tight">
                      {sol.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#525D57] leading-relaxed line-clamp-2">
                      {sol.tagline}
                    </p>

                    {/* 2 Micro-Spec Pills */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {sol.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-tech bg-[#F7F8F4] border border-[#E2E8E2] text-[#202724]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Explore Action Link */}
                <div className="p-4 sm:p-4.5 pt-0">
                  <Link
                    to={`/${sol.slug}`}
                    className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#F7F8F4] group-hover:bg-[#123C32] text-[#123C32] group-hover:text-white border border-[#E2E8E2] group-hover:border-[#123C32] font-tech text-xs font-bold transition-all duration-300"
                  >
                    <span>{sol.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: 2 Heavy Infrastructure Pillars (Unique Horizontal Split Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-4.5 mt-4 sm:mt-4.5 items-stretch">
          {infraOfferings.map((sol) => {
            return (
              <div
                key={sol.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8E2] hover:border-[#123C32]/40 shadow-2xs hover:shadow-lg transition-all duration-300 grid grid-cols-1 sm:grid-cols-12"
              >
                {/* Left Visual Column */}
                <div className="sm:col-span-5 relative overflow-hidden bg-[#202724] min-h-[160px] sm:min-h-full">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/85 via-black/30 to-transparent"></div>

                  <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold font-tech uppercase tracking-wider bg-[#E8A83E] text-[#123C32]">
                      {sol.badge}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold font-tech uppercase tracking-wide bg-black/60 text-[#E9F0E9] border border-white/10">
                      {sol.index}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] font-tech font-bold text-white/90">
                    {sol.capacity}
                  </div>
                </div>

                {/* Right Content Column */}
                <div className="sm:col-span-7 p-4 sm:p-4.5 flex flex-col justify-between space-y-2.5">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#123C32] truncate">
                      <Target className="w-3 h-3 text-[#E8A83E] shrink-0" />
                      <span className="truncate">{sol.target}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#202724] group-hover:text-[#123C32] transition-colors font-heading tracking-tight leading-snug">
                      {sol.title}
                    </h3>

                    <p className="text-[11px] sm:text-xs text-[#525D57] leading-relaxed line-clamp-2">
                      {sol.tagline}
                    </p>

                    {/* Features Strip */}
                    <div className="pt-1.5 space-y-1 font-tech">
                      {sol.features.map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-[10px] text-[#202724]">
                          <CheckCircle2 className="w-3 h-3 text-[#123C32] shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore Action Button */}
                  <Link
                    to={`/${sol.slug}`}
                    className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#F7F8F4] group-hover:bg-[#123C32] text-[#123C32] group-hover:text-white border border-[#E2E8E2] group-hover:border-[#123C32] font-tech text-xs font-bold transition-all duration-300 mt-1"
                  >
                    <span>{sol.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
