import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, CheckCircle2, ShieldCheck, Cpu, Zap, Sun, Award } from "lucide-react";

// Home Assets Images
import residentialImg from "../assets/home-assets/residential-solar.jpg";
import commercialImg from "../assets/home-assets/comercial-ground-solar.jpg";
import industrialImg from "../assets/home-assets/industrial-solar.jpg";
import transformerImg from "../assets/home-assets/solar-transformer.jpg";
import turnkeyImg from "../assets/home-assets/turnkey-solar.jpg";

export default function SolarSolutions() {
  const [activeFilter, setActiveFilter] = useState("all");

  const solutions = [
    {
      id: "residential",
      slug: "residential-solar",
      title: "Residential Solar",
      category: "solar",
      capacity: "3 kW to 25 kW",
      target: "Villas, Independent Bungalows & Housing Societies",
      description: "Cut domestic electricity bills by generating your own clean power. Customized solar rooftop systems that lower bills, protect against tariff hikes, and increase property value.",
      cta: "Explore Residential Solar",
      image: residentialImg,
      icon: Sun,
      highlights: [
        "Rooftop & Terrace Arrays",
        "Net Metering Support",
        "25-Year Panel Warranty",
      ],
    },
    {
      id: "commercial",
      slug: "commercial-solar",
      title: "Commercial & Ground-Mounted Solar",
      category: "solar",
      capacity: "25 kW to 500+ kW",
      target: "Offices, Retail Plazas, Educational Campuses, Hospitals & Resorts",
      description: "Unlock the full potential of your commercial space with rooftop and ground-mounted solar solutions engineered for maximum sunlight harvesting and high ROI.",
      cta: "Explore Commercial & Ground-Mount",
      image: commercialImg,
      icon: Zap,
      highlights: [
        "Rooftop & Ground Mounting",
        "Accelerated Depreciation",
        "High-Yield Monocrystalline",
      ],
    },
    {
      id: "industrial",
      slug: "industrial-solar",
      title: "Industrial Solar Systems",
      category: "solar",
      capacity: "100 kW to 10+ MW",
      target: "Manufacturing Plants, Cold Storage, Chemical Units & Warehouses",
      description: "Reliable, high-voltage industrial solar systems designed to meet severe energy loads, slash peak tariffs, comply with environmental regulations, and provide captive power security.",
      cta: "Explore Industrial Solar System",
      image: industrialImg,
      icon: ShieldCheck,
      highlights: [
        "MW-Scale Captive Solar",
        "HT Grid Synchronization",
        "Heavy Peak Load Shaving",
      ],
    },
    {
      id: "transformers",
      slug: "power-transformers",
      title: "Power Transformers Manufacturer",
      category: "infrastructure",
      badge: "In-House Manufacturing",
      capacity: "Customized KVA / MVA Ratings",
      target: "Solar Parks, Industrial Substations, Utilities & Commercial Campuses",
      description: "Proton Power Infra is a leading manufacturer of high-efficiency Inverter Duty Solar Transformers, with comprehensive step-up and step-down transformer repair and services.",
      cta: "Explore Power Transformers Manufacture",
      image: transformerImg,
      icon: Cpu,
      features: [
        "Inverter Duty Solar Transformers",
        "Step-Up & Step-Down HT Repair",
        "Custom Substation Integration",
        "Oil Filtration & HT Rewinding",
      ],
    },
    {
      id: "epc-services",
      slug: "solar-epc-services",
      title: "Turnkey Solar EPC & O&M",
      category: "infrastructure",
      badge: "Turnkey EPC Backbone",
      capacity: "End-to-End Execution",
      target: "Solar Park Developers, Private IPPs, Government & Public Sector Tenders",
      description: "From MNRE approvals, PPA agreements, and 3D irradiance modeling to Tier-1 procurement, structural civil erection, and IoT SCADA remote monitoring.",
      cta: "Explore Turnkey Solar EPC & O&M",
      image: turnkeyImg,
      icon: Award,
      features: [
        "Complete MNRE Liaisoning & PPA",
        "3D Shading & Civil Engineering",
        "Tier-1 BOS Procurement",
        "24/7 IoT SCADA Telemetry O&M",
      ],
    },
  ];

  const filteredSolutions =
    activeFilter === "all"
      ? solutions
      : solutions.filter((s) => s.category === activeFilter);

  return (
    <section id="solutions" className="py-16 md:py-20 lg:py-12 bg-[#F7F8F4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-3">
              <span>Our Solar & Transformer Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#202724] tracking-tight leading-tight font-heading">
              Complete Clean Energy Infrastructure Engineered Under One Roof
            </h2>

            <p className="text-base sm:text-lg text-[#525D57] leading-relaxed mt-4 font-normal">
              From private residential rooftops and commercial ground-mount arrays to utility-scale solar parks and custom in-house inverter duty transformers.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white border border-[#E2E8E2] shadow-2xs self-start md:self-end shrink-0 font-tech">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#123C32] text-white shadow-xs"
                  : "text-[#525D57] hover:text-[#123C32] hover:bg-black/5"
              }`}
            >
              All Offerings (5)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("solar")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeFilter === "solar"
                  ? "bg-[#123C32] text-white shadow-xs"
                  : "text-[#525D57] hover:text-[#123C32] hover:bg-black/5"
              }`}
            >
              Solar Plants (3)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("infrastructure")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeFilter === "infrastructure"
                  ? "bg-[#123C32] text-white shadow-xs"
                  : "text-[#525D57] hover:text-[#123C32] hover:bg-black/5"
              }`}
            >
              Transformers & EPC (2)
            </button>
          </div>
        </div>

        {/* Dynamic Balanced 12-Column Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {filteredSolutions.map((sol, index) => {
            // When all 5 are shown:
            // Top 3 cards: md:col-span-3 lg:col-span-4 (Row 1: 4+4+4 = 12 cols, 100% balanced)
            // Bottom 2 cards: md:col-span-3 lg:col-span-6 (Row 2: 6+6 = 12 cols, 100% balanced)
            const isWideBottomCard =
              activeFilter === "all" ? index >= 3 : activeFilter === "infrastructure";
            const colSpanClass =
              activeFilter === "all"
                ? index < 3
                  ? "md:col-span-3 lg:col-span-4"
                  : "md:col-span-3 lg:col-span-6"
                : activeFilter === "solar"
                ? "md:col-span-3 lg:col-span-4"
                : "md:col-span-3 lg:col-span-6";

            if (isWideBottomCard) {
              // Rich Featured Presentation for Heavy Infrastructure & Turnkey EPC
              return (
                <div
                  key={sol.id}
                  className={`group bg-white rounded-2xl overflow-hidden border border-[#E2E8E2] shadow-2xs hover:shadow-xl hover:border-[#123C32]/40 transition-all duration-300 flex flex-col justify-between ${colSpanClass}`}
                >
                  <div>
                    {/* Header Image Frame */}
                    <div className="relative h-60 sm:h-64 overflow-hidden bg-[#202724]">
                      <img
                        src={sol.image}
                        alt={sol.title}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                        <span className="px-3.5 py-1 rounded-full text-xs font-black tracking-wide uppercase bg-white/95 text-[#123C32] shadow-sm font-tech">
                          {sol.capacity}
                        </span>
                        {sol.badge && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#E8A83E] text-[#123C32] shadow-sm font-tech">
                            {sol.badge}
                          </span>
                        )}
                      </div>

                      {/* Target Pill */}
                      <div className="absolute bottom-3 left-3.5 right-3.5">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#E8A83E] bg-[#202724]/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 truncate">
                          <Target className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{sol.target}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 sm:p-7">
                      <h3 className="text-2xl font-black text-[#202724] group-hover:text-[#123C32] transition-colors mb-3 font-heading">
                        {sol.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mb-5">
                        {sol.description}
                      </p>

                      {/* 2-Column Technical Capabilities Grid */}
                      <div className="pt-4 border-t border-[#E2E8E2]/80 grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-tech">
                        {sol.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-[#202724]">
                            <CheckCircle2 className="w-4 h-4 text-[#123C32] shrink-0" />
                            <span className="font-medium text-[#202724]">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Explore Action CTA */}
                  <div className="p-6 sm:p-7 pt-0">
                    <Link
                      to={`/${sol.slug}`}
                      className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-xl bg-[#F7F8F4] group-hover:bg-[#123C32] text-[#123C32] group-hover:text-white border border-[#E2E8E2] group-hover:border-[#123C32] font-tech text-xs font-bold transition-all duration-300 shadow-2xs group-hover:shadow"
                    >
                      <span>{sol.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            }

            // Standard Card for Solar Generation (Row 1)
            return (
              <div
                key={sol.id}
                className={`group bg-white rounded-2xl overflow-hidden border border-[#E2E8E2] shadow-2xs hover:shadow-xl hover:border-[#123C32]/30 transition-all duration-300 flex flex-col justify-between ${colSpanClass}`}
              >
                <div>
                  {/* Image with Capacity & Target Badge */}
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-[#202724]">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

                    {/* Capacity Badge */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-black tracking-wide uppercase bg-white/95 text-[#123C32] shadow-sm font-tech">
                        {sol.capacity}
                      </span>
                    </div>

                    {/* Target Scope Pill */}
                    <div className="absolute bottom-3 left-3.5 right-3.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#E8A83E] bg-[#202724]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 truncate">
                        <Target className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{sol.target}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#202724] group-hover:text-[#123C32] transition-colors mb-2.5 font-heading">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mb-4">
                      {sol.description}
                    </p>

                    {/* Feature Highlight Pills */}
                    {sol.highlights && (
                      <div className="pt-3 border-t border-[#E2E8E2]/60 space-y-1.5 font-tech">
                        {sol.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-[11px] text-[#525D57]">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#123C32]/60 shrink-0"></div>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Explore Action Button */}
                <div className="p-6 pt-0">
                  <Link
                    to={`/${sol.slug}`}
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#F7F8F4] group-hover:bg-[#123C32] text-[#123C32] group-hover:text-white border border-[#E2E8E2] group-hover:border-[#123C32] font-tech text-xs font-bold transition-all duration-300"
                  >
                    <span>{sol.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
