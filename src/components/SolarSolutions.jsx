import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Zap, ShieldCheck, Cpu, Award } from "lucide-react";
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
    index: "01",
    title: "Residential Solar",
    capacity: "3 kW – 25 kW",
    target: "Villas & Housing Societies",
    tagline: "Custom rooftop net-metering & MNRE subsidy.",
    cta: "Explore Residential",
    image: residentialImg,
    icon: Sun,
  },
  {
    id: "commercial",
    slug: "commercial-solar",
    index: "02",
    title: "Commercial Solar",
    capacity: "25 kW – 500+ kW",
    target: "Offices & Commercial Hubs",
    tagline: "40% accelerated tax depreciation & peak shaving.",
    cta: "Explore Commercial",
    image: commercialImg,
    icon: Zap,
  },
  {
    id: "industrial",
    slug: "industrial-solar",
    index: "03",
    title: "Industrial Captive",
    capacity: "500 kW – 10+ MW",
    target: "Heavy Manufacturing & Mills",
    tagline: "MW-scale captive power with HT grid sync.",
    cta: "Explore Industrial",
    image: industrialImg,
    icon: ShieldCheck,
  },
  {
    id: "transformers",
    slug: "power-transformers",
    index: "04",
    title: "Power Transformers",
    capacity: "Custom KVA / MVA",
    target: "Solar Parks & Substations",
    tagline: "Manufactured in-house in Dewas, tested to IS 2026.",
    cta: "Explore Transformers",
    image: transformerImg,
    icon: Cpu,
  },
  {
    id: "epc-services",
    slug: "solar-epc-services",
    index: "05",
    title: "Turnkey Solar EPC",
    capacity: "125+ MW Proven Track",
    target: "Utility Parks & IPP Developers",
    tagline: "Full CEIG liaisoning, civil erection & SCADA IoT.",
    cta: "Explore Turnkey EPC",
    image: turnkeyImg,
    icon: Award,
  },
];

function StreamCard({ item, onHoverStart, onHoverEnd }) {
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
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="group relative w-[290px] sm:w-[330px] h-[380px] sm:h-[400px] shrink-0 rounded-2xl overflow-hidden border border-black/10 hover:border-[#E8A83E] shadow-sm hover:shadow-2xl hover:shadow-[#123C32]/20 transition-all duration-500 cursor-pointer select-none bg-neutral-900"
    >
      {/* Background Full-Bleed Photograph with Progressive Shimmer */}
      <SmartImage
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        containerClassName="w-full h-full absolute inset-0"
      />

      {/* Cinematic Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 pointer-events-none transition-opacity duration-300"></div>

      {/* Interactive Golden Solar Spotlight Glow on Hover (Like Section 2) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(240px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.25), rgba(254, 243, 199, 0.12) 50%, transparent 75%)`,
        }}
      />

      {/* Top Bar: Telemetry Badge + Radiant Amber Icon */}
      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-20">
        <span className="px-3 py-1 rounded-full text-[11px] font-bold font-tech uppercase tracking-wide bg-white/95 text-[#123C32] shadow-sm flex items-center gap-1.5 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8A83E] animate-pulse"></span>
          <span>{item.index} • {item.capacity}</span>
        </span>

        {/* Radiant Icon (Warm Amber/Gold on Hover - Zero Dark) */}
        <div className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md text-[#123C32] group-hover:bg-gradient-to-br group-hover:from-amber-100 group-hover:to-amber-200 group-hover:text-amber-900 group-hover:border-amber-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(232,168,62,0.45)] border border-white/40 flex items-center justify-center transition-all duration-300 shrink-0">
          <Icon className="w-4 h-4 stroke-[2.2]" />
        </div>
      </div>

      {/* Bottom Content: Always shows Title + Target, smooth hover reveals Button & Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20 space-y-2">
        {/* Title */}
        <div>
          <span className="text-[10px] font-mono font-bold text-[#E8A83E] uppercase tracking-wider block">
            {item.target}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-white font-heading tracking-tight leading-snug">
            {item.title}
          </h3>
        </div>

        {/* Hover-Revealed Info & Action Button */}
        <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden space-y-2.5">
          <p className="text-xs text-gray-200 leading-relaxed font-normal">
            {item.tagline}
          </p>

          <Link
            to={`/${item.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold font-tech bg-[#123C32] text-white hover:bg-[#1A4D41] shadow-lg shadow-[#123C32]/40 hover:shadow-[0_0_24px_rgba(232,168,62,0.45)] border border-[#E8A83E]/50 transition-all duration-300 group/btn"
          >
            <span>{item.cta}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SolarSolutions() {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate items twice to produce a continuous seamless infinite sliding stream
  const streamItems = [...INFRA_CAPABILITIES, ...INFRA_CAPABILITIES];

  return (
    <section id="solutions" className="py-10 md:py-10 lg:py-10 bg-[#F7F8F4] scroll-mt-20 relative overflow-hidden">
      {/* Subtle Engineering Dot Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#123C32_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6">
        {/* Clean, Simple & Sleek Section Header (No toggles, no resume buttons) */}
        <div className="max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-pulse"></span>
            <span>Core Capabilities</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight leading-tight font-heading">
            Complete Clean Energy Infrastructure
          </h2>

          <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1 font-normal">
            From high-yield private rooftop installations to utility-scale solar parks and custom in-house inverter duty transformers engineered under one roof.
          </p>
        </div>
      </div>

      {/* Full-Bleed Continuous Horizontal Sliding Track */}
      <div className="relative w-full overflow-hidden py-1">
        {/* Left & Right Optical Gradient Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#F7F8F4] to-transparent z-20"></div>
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#F7F8F4] to-transparent z-20"></div>

        {/* Sliding Rail (Continuous Animation, Pauses ONLY on Card Hover) */}
        <div
          className="flex gap-4 sm:gap-5 px-4 animate-slide-stream"
          style={{
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {streamItems.map((item, idx) => (
            <StreamCard
              key={`${item.id}-${idx}`}
              item={item}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
