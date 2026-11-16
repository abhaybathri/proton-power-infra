import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Sun,
  Zap,
  ShieldCheck,
  Cpu,
  Award,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Sparkles,
  Layers,
} from "lucide-react";
import SmartImage from "./SmartImage";

// Home Assets Images
import residentialImg from "../assets/home-assets/residential-solar.jpg";
import commercialImg from "../assets/home-assets/comercial-ground-solar.jpg";
import industrialImg from "../assets/home-assets/industrial-solar.jpg";
import transformerImg from "../assets/home-assets/solar-transformer.jpg";
import turnkeyImg from "../assets/home-assets/turnkey-solar.jpg";

const INFRA_CAPABILITIES = [
  {
    id: "residential",
    slug: "residential-solar",
    step: "01",
    index: "01 // ROOFTOP",
    title: "Residential Solar",
    capacity: "3 kW to 25 kW",
    target: "Villas & Housing Societies",
    tagline: "Cut household electricity bills up to 90% with custom rooftop net-metering and MNRE subsidy assistance.",
    highlights: ["Rooftop & Terrace Arrays", "Net-Metering Subsidy", "Tier-1 Mono PERC"],
    cta: "Explore Residential",
    image: residentialImg,
    icon: Sun,
    badgeColor: "bg-emerald-500",
  },
  {
    id: "commercial",
    slug: "commercial-solar",
    step: "02",
    index: "02 // COMMERCIAL",
    title: "Commercial Solar",
    capacity: "25 kW to 500+ kW",
    target: "Offices, Campuses & Hospitals",
    tagline: "High-yield commercial arrays maximizing ROI with 40% accelerated tax depreciation and peak demand shaving.",
    highlights: ["Rooftop & Ground Mount", "40% Accelerated Tax", "3.2 Year Payback"],
    cta: "Explore Commercial",
    image: commercialImg,
    icon: Zap,
    badgeColor: "bg-amber-500",
  },
  {
    id: "industrial",
    slug: "industrial-solar",
    step: "03",
    index: "03 // INDUSTRIAL",
    title: "Industrial Captive",
    capacity: "500 kW to 10+ MW",
    target: "Manufacturing Plants & Mills",
    tagline: "Heavy-duty captive solar systems shaving peak power tariffs for energy-intensive factories with HT grid sync.",
    highlights: ["MW-Scale Captive Solar", "HT Grid Synchronization", "Zero-Export Protection"],
    cta: "Explore Industrial",
    image: industrialImg,
    icon: ShieldCheck,
    badgeColor: "bg-blue-500",
  },
  {
    id: "transformers",
    slug: "power-transformers",
    step: "04",
    index: "04 // TRANSFORMERS",
    title: "Power Transformers Mfg",
    capacity: "Custom KVA / MVA Ratings",
    target: "Solar Parks, Substations & Utilities",
    tagline: "Manufactured in-house in Dewas: Inverter Duty Solar Transformers with complete step-up/step-down repair facilities.",
    highlights: ["In-House Dewas Plant", "IS 2026 / IEC 60076", "Routine & Type Tested"],
    cta: "Explore Transformers",
    image: transformerImg,
    icon: Cpu,
    badgeColor: "bg-amber-600",
  },
  {
    id: "epc-services",
    slug: "solar-epc-services",
    step: "05",
    index: "05 // TURNKEY EPC",
    title: "Turnkey Solar EPC & O&M",
    capacity: "125+ MW Proven Track Record",
    target: "Park Developers, IPPs & Tenders",
    tagline: "End-to-end liaisoning from MNRE approvals and 3D irradiance modeling to civil erection and 24/7 IoT SCADA telemetry.",
    highlights: ["Full CEIG Approvals", "Transmission Line Bay", "24/7 IoT SCADA Telemetry"],
    cta: "Explore Turnkey EPC",
    image: turnkeyImg,
    icon: Award,
    badgeColor: "bg-emerald-600",
  },
];

function StreamCard({ item, isHovered, onHover, onLeave }) {
  const Icon = item.icon;
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group/card relative w-[310px] sm:w-[350px] shrink-0 bg-white rounded-2xl overflow-hidden border border-[#E2E8E2] hover:border-[#E8A83E]/70 shadow-sm hover:shadow-2xl hover:shadow-[#123C32]/15 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 cursor-pointer select-none"
    >
      {/* Top Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#123C32] via-[#E8A83E] to-[#123C32] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-20" />

      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(240px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.22), rgba(254, 243, 199, 0.12) 50%, transparent 75%)`,
        }}
      />

      {/* Top Image Frame with Smart Progressive Loading */}
      <div className="relative h-44 overflow-hidden bg-[#202724]">
        <SmartImage
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover/card:scale-108 transition-transform duration-700 ease-out"
          containerClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 pointer-events-none"></div>

        {/* Top Telemetry Pills */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 pointer-events-none z-10">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold font-tech uppercase tracking-wide bg-white/95 text-[#123C32] shadow-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8A83E] animate-pulse"></span>
            <span>{item.capacity}</span>
          </span>
          <span className="px-2 py-1 rounded-full text-[9px] font-bold font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#E9F0E9] border border-white/15">
            {item.index}
          </span>
        </div>

        {/* Target Audience Capsule */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 pointer-events-none z-10">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#E8A83E] bg-[#202724]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 truncate shadow-xs">
            <Target className="w-3 h-3 shrink-0" />
            <span className="truncate">{item.target}</span>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-4 sm:p-4.5 space-y-2.5 relative z-10 flex flex-col justify-between flex-1">
        <div>
          {/* Title & Icon Header */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="text-base font-bold text-[#202724] group-hover/card:text-[#123C32] transition-colors font-heading tracking-tight leading-snug">
              {item.title}
            </h3>
            <div className="w-8 h-8 rounded-lg bg-[#E9F0E9] group-hover/card:bg-amber-100 text-[#123C32] group-hover/card:text-amber-900 border border-[#123C32]/10 group-hover/card:border-amber-300 flex items-center justify-center shrink-0 transition-all duration-300">
              <Icon className="w-4 h-4" />
            </div>
          </div>

          {/* Punchy Tagline */}
          <p className="text-[11px] text-[#525D57] group-hover/card:text-[#25322B] leading-relaxed line-clamp-2 transition-colors">
            {item.tagline}
          </p>

          {/* Micro-Spec Highlights */}
          <div className="pt-2 flex flex-wrap gap-1">
            {item.highlights.map((h, hIdx) => (
              <span
                key={hIdx}
                className="px-2 py-0.5 rounded-md text-[9.5px] font-tech font-semibold bg-[#F7F8F4] border border-[#E2E8E2] text-[#202724] group-hover/card:border-[#E8A83E]/40 transition-colors"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* Explore Architecture Action Button */}
        <div className="pt-2">
          <Link
            to={`/${item.slug}`}
            className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#F7F8F4] group-hover/card:bg-[#123C32] text-[#123C32] group-hover/card:text-white border border-[#E2E8E2] group-hover/card:border-[#123C32] font-tech text-xs font-bold transition-all duration-300 shadow-2xs group-hover/card:shadow-md cursor-pointer"
          >
            <span>{item.cta}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/card:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SolarSolutions() {
  const [isPaused, setIsPaused] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const scrollContainerRef = useRef(null);

  // Combine items twice to make continuous infinite marquee
  const streamItems = [...INFRA_CAPABILITIES, ...INFRA_CAPABILITIES];

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section id="solutions" className="py-10 md:py-10 lg:py-10 bg-[#F7F8F4] scroll-mt-20 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#123C32_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Live Stream Status and Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-6 gap-4">
          <div className="max-w-2xl">
            {/* Live Automated Stream Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-1.5">
              <span className={`w-2 h-2 rounded-full ${isPaused ? "bg-amber-500" : "bg-emerald-500 animate-pulse"}`}></span>
              <span>{isPaused ? "Stream Paused for Inspection" : "Live Automated Capability Stream • Hover to Pause"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight leading-tight font-heading">
              Complete Clean Energy Infrastructure
            </h2>

            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1 font-normal">
              From high-yield private rooftop installations to utility-scale solar parks and custom in-house inverter duty transformers engineered under one roof.
            </p>
          </div>

          {/* Interactive Navigation & Play/Pause Controls */}
          <div className="flex items-center gap-2 self-start md:self-end shrink-0">
            {/* Play/Pause Toggle */}
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E8E2] text-xs font-bold text-[#123C32] hover:bg-[#123C32] hover:text-white transition-all shadow-2xs font-tech cursor-pointer"
              title={isPaused ? "Resume automated flow" : "Pause stream"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-[#E8A83E] fill-current" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#123C32]" />
                  <span>Pause</span>
                </>
              )}
            </button>

            {/* Manual Slide Controls */}
            <button
              type="button"
              onClick={handlePrev}
              className="w-8 h-8 rounded-lg bg-white border border-[#E2E8E2] text-[#123C32] hover:bg-[#123C32] hover:text-white flex items-center justify-center transition-all shadow-2xs cursor-pointer"
              aria-label="Previous capability"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-8 h-8 rounded-lg bg-white border border-[#E2E8E2] text-[#123C32] hover:bg-[#123C32] hover:text-white flex items-center justify-center transition-all shadow-2xs cursor-pointer"
              aria-label="Next capability"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Timeline Step Navigation Rail */}
        <div className="mb-5 overflow-x-auto pb-1 scrollbar-none">
          <div className="flex items-center justify-between min-w-[620px] p-2 rounded-xl bg-white/80 backdrop-blur-xs border border-[#E2E8E2] shadow-2xs font-tech text-xs">
            {INFRA_CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={cap.id}
                  onMouseEnter={() => {
                    setActiveStep(idx);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#123C32] text-white shadow-xs font-bold"
                      : "text-[#525D57] hover:text-[#123C32] hover:bg-[#E9F0E9]/70"
                  }`}
                >
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono ${
                    isActive ? "bg-[#E8A83E] text-[#123C32] font-black" : "bg-[#123C32]/10 text-[#123C32]"
                  }`}>
                    {cap.step}
                  </span>
                  <span className="font-semibold whitespace-nowrap">{cap.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Automated Continuous Floating Track with Edge Gradient Fade Masks */}
      <div
        ref={scrollContainerRef}
        className="relative w-full overflow-hidden py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Optical Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#F7F8F4] to-transparent z-20"></div>

        {/* Right Optical Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#F7F8F4] to-transparent z-20"></div>

        {/* Flow Rail with Continuous Seamless CSS Animation */}
        <div
          className="flex gap-4 sm:gap-5 px-4 animate-float-stream"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {streamItems.map((item, idx) => (
            <StreamCard
              key={`${item.id}-${idx}`}
              item={item}
              onHover={() => {
                setIsPaused(true);
                setActiveStep(idx % INFRA_CAPABILITIES.length);
              }}
              onLeave={() => setIsPaused(false)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
