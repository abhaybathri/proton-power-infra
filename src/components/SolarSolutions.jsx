import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, CheckCircle2, Sun, Zap, ShieldCheck, Cpu, Award } from "lucide-react";
import SmartImage from "./SmartImage";

// Home Assets Images
import residentialImg from "../assets/home-assets/residential-solar.jpg";
import commercialImg from "../assets/home-assets/comercial-ground-solar.jpg";
import industrialImg from "../assets/home-assets/industrial-solar.jpg";
import transformerImg from "../assets/home-assets/solar-transformer.jpg";
import turnkeyImg from "../assets/home-assets/turnkey-solar.jpg";

function SolarCard({ sol }) {
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
      className="group relative bg-white rounded-2xl overflow-hidden border border-[#E2E8E2] hover:border-[#123C32]/60 shadow-2xs hover:shadow-xl hover:shadow-[#123C32]/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.15), rgba(18, 60, 50, 0.08) 50%, transparent 80%)`,
        }}
      />

      <div className="relative z-10">
        {/* Top Image Frame with Smart Progressive Loading */}
        <div className="relative h-44 sm:h-48 overflow-hidden bg-[#202724]">
          <SmartImage
            src={sol.image}
            alt={sol.title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            containerClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"></div>

          {/* Top Glassmorphic Telemetry Bar */}
          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 pointer-events-none">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold font-tech uppercase tracking-wide bg-white/95 text-[#123C32] shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A83E] animate-pulse"></span>
              <span>{sol.capacity}</span>
            </span>
            <span className="px-2 py-1 rounded-full text-[9px] font-bold font-tech uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#E9F0E9] border border-white/15">
              {sol.index}
            </span>
          </div>

          {/* Target Application Capsule */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 pointer-events-none">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#E8A83E] bg-[#202724]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 truncate shadow-xs">
              <Target className="w-3 h-3 shrink-0" />
              <span className="truncate">{sol.target}</span>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-5 space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-[#202724] group-hover:text-[#123C32] transition-colors font-heading tracking-tight leading-snug">
            {sol.title}
          </h3>
          <p className="text-[11px] sm:text-xs text-[#525D57] leading-relaxed line-clamp-2">
            {sol.tagline}
          </p>

          {/* Micro-Spec Highlights */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {sol.highlights.map((h, hIdx) => (
              <span
                key={hIdx}
                className="px-2 py-0.5 rounded-md text-[10px] font-tech font-medium bg-[#F7F8F4] border border-[#E2E8E2] text-[#202724]"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Explore Action Link */}
      <div className="relative z-10 p-4 sm:p-5 pt-0">
        <Link
          to={`/${sol.slug}`}
          className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#F7F8F4] group-hover:bg-[#123C32] text-[#123C32] group-hover:text-white border border-[#E2E8E2] group-hover:border-[#123C32] font-tech text-xs font-bold transition-all duration-300 shadow-2xs group-hover:shadow-md"
        >
          <span>{sol.cta}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
}

function InfraCard({ sol }) {
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
      className="group relative bg-white rounded-2xl overflow-hidden border border-[#E2E8E2] hover:border-[#123C32]/60 shadow-2xs hover:shadow-xl hover:shadow-[#123C32]/10 transition-all duration-300 grid grid-cols-1 sm:grid-cols-12 hover:-translate-y-1.5"
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.15), rgba(18, 60, 50, 0.08) 50%, transparent 80%)`,
        }}
      />

      {/* Left Visual Column */}
      <div className="sm:col-span-5 relative overflow-hidden bg-[#202724] min-h-[170px] sm:min-h-full">
        <SmartImage
          src={sol.image}
          alt={sol.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          containerClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/90 via-black/35 to-transparent pointer-events-none"></div>

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start pointer-events-none">
          <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold font-tech uppercase tracking-wider bg-[#E8A83E] text-[#123C32] shadow-xs">
            {sol.badge}
          </span>
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold font-tech uppercase tracking-wide bg-black/60 backdrop-blur-xs text-[#E9F0E9] border border-white/15">
            {sol.index}
          </span>
        </div>

        {/* Capacity Micro-Badge */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] font-tech font-bold text-white/95 pointer-events-none truncate bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded border border-white/10">
          {sol.capacity}
        </div>
      </div>

      {/* Right Content Column */}
      <div className="relative z-10 sm:col-span-7 p-4 sm:p-5 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#123C32] truncate font-tech">
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
          className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#F7F8F4] group-hover:bg-[#123C32] text-[#123C32] group-hover:text-white border border-[#E2E8E2] group-hover:border-[#123C32] font-tech text-xs font-bold transition-all duration-300 shadow-2xs group-hover:shadow-md"
        >
          <span>{sol.cta}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
}

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
    <section id="solutions" className="py-10 md:py-10 lg:py-10 bg-[#F7F8F4] scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean, Non-Repetitive Section Header (Common Badges Removed) */}
        <div className="max-w-3xl mb-6 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight leading-tight font-heading">
            Complete Clean Energy Infrastructure
          </h2>

          <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1.5 font-normal">
            From high-yield private rooftop installations to utility-scale solar parks and custom in-house inverter duty transformers engineered under one roof.
          </p>
        </div>

        {/* Row 1: 3 Solar Generation Offerings with Smart Shimmer & Spotlight Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-4.5 items-stretch">
          {solarOfferings.map((sol) => (
            <SolarCard key={sol.id} sol={sol} />
          ))}
        </div>

        {/* Row 2: 2 Heavy Infrastructure Pillars (Horizontal Split Cards with Spotlight Glow) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-4.5 mt-4 sm:mt-4.5 items-stretch">
          {infraOfferings.map((sol) => (
            <InfraCard key={sol.id} sol={sol} />
          ))}
        </div>
      </div>
    </section>
  );
}
