import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Sun, Zap, ShieldCheck, Cpu, Award } from "lucide-react";

// Home Assets Images
import residentialImg from "../assets/home-assets/residential-solar.jpg";
import commercialImg from "../assets/home-assets/comercial-ground-solar.jpg";
import industrialImg from "../assets/home-assets/industrial-solar.jpg";
import transformerImg from "../assets/home-assets/solar-transformer.jpg";
import turnkeyImg from "../assets/home-assets/turnkey-solar.jpg";

export default function SolarSolutions() {
  const [activeFilter, setActiveFilter] = useState("all");
  const scrollRailRef = useRef(null);

  const solutions = [
    {
      id: "residential",
      slug: "residential-solar",
      index: "01 • ROOFTOP",
      title: "Residential Solar",
      category: "solar",
      scale: "3 kW – 25 kW",
      target: "Villas & Societies",
      tagline: "Cut domestic electricity bills up to 90% with custom rooftop net-metering.",
      pills: ["Net-Metering Ready", "25-Yr Panel Warranty"],
      image: residentialImg,
      icon: Sun,
    },
    {
      id: "commercial",
      slug: "commercial-solar",
      index: "02 • COMMERCIAL",
      title: "Commercial Solar",
      category: "solar",
      scale: "25 kW – 500 kW",
      target: "Offices & Campuses",
      tagline: "High-yield commercial arrays maximizing ROI and 40% tax depreciation.",
      pills: ["High-Yield Bifacial", "Tax Depreciation"],
      image: commercialImg,
      icon: Zap,
    },
    {
      id: "industrial",
      slug: "industrial-solar",
      index: "03 • INDUSTRIAL",
      title: "Industrial Captive",
      category: "solar",
      scale: "500 kW – 10+ MW",
      target: "Plants & Warehouses",
      tagline: "Heavy-duty captive solar systems shaving peak power tariffs for factories.",
      pills: ["Peak-Load Shaving", "HT Grid Sync"],
      image: industrialImg,
      icon: ShieldCheck,
    },
    {
      id: "transformers",
      slug: "power-transformers",
      index: "04 • TRANSFORMERS",
      title: "Power Transformers",
      category: "infrastructure",
      scale: "In-House Mfg",
      target: "Parks & Substations",
      tagline: "Copper-wound inverter duty & power transformers manufactured in Dewas.",
      pills: ["IS 2026 / IEC Tested", "Custom KVA/MVA"],
      image: transformerImg,
      icon: Cpu,
    },
    {
      id: "epc-services",
      slug: "solar-epc-services",
      index: "05 • TURNKEY EPC",
      title: "Turnkey Solar EPC",
      category: "infrastructure",
      scale: "125+ MW Record",
      target: "Utility Solar Parks",
      tagline: "End-to-end MW execution from MNRE liaisoning to 33kV substation commissioning.",
      pills: ["Concept to Grid COD", "Integrated O&M"],
      image: turnkeyImg,
      icon: Award,
    },
  ];

  const filteredSolutions =
    activeFilter === "all"
      ? solutions
      : solutions.filter((s) => s.category === activeFilter);

  const scroll = (direction) => {
    if (scrollRailRef.current) {
      const scrollAmount = 340;
      scrollRailRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="solutions" className="py-10 md:py-10 lg:py-10 bg-[#F7F8F4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Section Header with Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-7 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E8A83E]" />
              <span>Core Engineering Solutions</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight leading-tight font-heading">
              Complete Clean Energy Infrastructure
            </h2>

            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1.5 font-normal">
              High-yield rooftop solar arrays, MW-scale captive industrial parks, and in-house power transformer manufacturing engineered under one roof.
            </p>
          </div>

          {/* Interactive Filter Pills & Scroll Controls */}
          <div className="flex items-center gap-3 self-start md:self-end shrink-0">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-[#E2E8E2] shadow-2xs font-tech">
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
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
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
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
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === "infrastructure"
                    ? "bg-[#123C32] text-white shadow-xs"
                    : "text-[#525D57] hover:text-[#123C32] hover:bg-black/5"
                }`}
              >
                Transformers &amp; EPC (2)
              </button>
            </div>

            {/* Mobile Scroll Navigators (visible on small/medium screens) */}
            <div className="flex lg:hidden items-center gap-1">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Scroll solutions left"
                className="w-8 h-8 rounded-lg bg-white border border-[#E2E8E2] text-[#123C32] flex items-center justify-center hover:bg-[#123C32] hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Scroll solutions right"
                className="w-8 h-8 rounded-lg bg-white border border-[#E2E8E2] text-[#123C32] flex items-center justify-center hover:bg-[#123C32] hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Compact Visual-First Solutions Cards: Single Row on Desktop, Smooth Rail on Mobile */}
        <div
          ref={scrollRailRef}
          className={`flex lg:grid gap-3.5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none pb-2 lg:pb-0 scroll-smooth ${
            activeFilter === "all"
              ? "lg:grid-cols-5"
              : activeFilter === "solar"
              ? "lg:grid-cols-3"
              : "lg:grid-cols-2"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredSolutions.map((sol) => {
            const Icon = sol.icon;

            return (
              <Link
                key={sol.id}
                to={`/${sol.slug}`}
                className="group relative w-[280px] sm:w-[320px] lg:w-auto shrink-0 snap-start rounded-2xl overflow-hidden border border-[#E2E8E2] hover:border-[#123C32]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[390px] sm:h-[400px] bg-[#123C32]"
              >
                {/* Full-Bleed Background Photography with Dark Gradient */}
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/95 via-black/45 to-black/25 group-hover:from-[#123C32]/98 transition-colors duration-300"></div>

                {/* Top Overlay Capsule: Index & Scale Badge */}
                <div className="relative z-10 p-3.5 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold font-tech uppercase tracking-wider bg-black/40 backdrop-blur-md text-[#E9F0E9] border border-white/10">
                    {sol.index}
                  </span>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-black font-tech uppercase tracking-wide bg-[#E8A83E] text-[#123C32] shadow-sm">
                    {sol.scale}
                  </span>
                </div>

                {/* Bottom Overlay Content: Visual-First, Minimal Crisp Info */}
                <div className="relative z-10 p-4 sm:p-4.5 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-white/10 backdrop-blur-md text-[#E8A83E] flex items-center justify-center shrink-0 border border-white/15 group-hover:bg-[#E8A83E] group-hover:text-[#123C32] transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-tech text-[#E8A83E] font-semibold truncate">
                      {sol.target}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-[#E8A83E] transition-colors font-heading leading-tight">
                    {sol.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[#E9F0E9]/80 leading-relaxed line-clamp-2">
                    {sol.tagline}
                  </p>

                  {/* Micro-Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {sol.pills.map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-tech bg-white/10 text-white/90 border border-white/10"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  {/* Sleek Action Link */}
                  <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs font-bold text-white group-hover:text-[#E8A83E] transition-colors font-tech">
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
