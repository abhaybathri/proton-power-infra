import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Cpu, Users, MapPin, FileCheck, Sparkles, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

function PillarCard({ pillar, index }) {
  const Icon = pillar.icon;
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
      className="relative bg-white rounded-2xl p-4 sm:p-5 border border-[#E2E8E2] hover:border-[#E8A83E]/80 shadow-2xs hover:shadow-xl hover:shadow-[#E8A83E]/15 transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:-translate-y-1.5 cursor-pointer"
    >
      {/* Interactive Luminous Spotlight Glow (Golden Solar Energy - Never Dark) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(240px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.20), rgba(254, 243, 199, 0.10) 50%, transparent 75%)`,
        }}
      />

      {/* Subtle Glowing Border Ring on Hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-inset ring-[#E8A83E]/40 z-0" />

      {/* Architectural Watermark in Background */}
      <div className="absolute -bottom-2 -right-1 font-tech font-black text-4xl text-[#123C32]/[0.03] group-hover:text-[#E8A83E]/12 pointer-events-none transition-colors select-none z-0">
        0{index + 1}
      </div>

      <div className="relative z-10">
        {/* Top: Radiant Glowing Icon & High-Contrast Stat Tag */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="w-11 h-11 rounded-xl bg-[#E9F0E9] text-[#123C32] border border-[#123C32]/10 group-hover:bg-gradient-to-br group-hover:from-amber-100 group-hover:to-amber-200 group-hover:text-amber-900 group-hover:border-amber-400/60 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_24px_rgba(232,168,62,0.45)] flex items-center justify-center shrink-0 transition-all duration-300">
            <Icon className="w-5 h-5 stroke-[2.2]" />
          </div>

          <span className="text-xs font-black font-tech px-2.5 py-1 rounded-md bg-[#123C32]/8 text-[#123C32] border border-[#123C32]/10 group-hover:bg-amber-100 group-hover:text-amber-950 group-hover:border-amber-300 group-hover:scale-105 group-hover:shadow-xs transition-all duration-300">
            {pillar.stat}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-sm sm:text-base font-bold text-[#202724] group-hover:text-[#123C32] transition-colors tracking-tight font-heading leading-snug mb-1.5">
          {pillar.title}
        </h3>

        <p className="text-[11px] sm:text-xs text-[#525D57] group-hover:text-[#25322B] leading-relaxed transition-colors">
          {pillar.desc}
        </p>
      </div>

      {/* Bottom Micro-Badge - Bright & Elegant */}
      <div className="relative z-10 pt-3 mt-3 border-t border-[#E2E8E2]/70 flex items-center gap-1.5">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#123C32]/5 group-hover:bg-amber-50 group-hover:border group-hover:border-amber-200/80 text-[10px] font-tech text-[#123C32] group-hover:text-amber-950 font-bold transition-all duration-300 truncate">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#E8A83E] group-hover:scale-110 transition-transform shrink-0" />
          <span className="truncate">{pillar.tag}</span>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const pillars = [
    {
      id: "track-record",
      stat: "125+ MW",
      badge: "IPP Track Record",
      title: "125+ MW Proven Record",
      desc: "Demonstrated execution across public and private sector projects throughout India as an Independent Power Producer.",
      tag: "Utility & MW Scale",
      icon: Award,
    },
    {
      id: "transformers",
      stat: "In-House",
      badge: "Manufacturing",
      title: "In-House Transformers",
      desc: "Unlike standard EPCs, we manufacture our own Inverter Duty Solar Transformers with full routine testing in Dewas.",
      tag: "IS 2026 / IEC Compliant",
      icon: Cpu,
    },
    {
      id: "team",
      stat: "2012+",
      badge: "Expert Leadership",
      title: "Dynamic Engineering Team",
      desc: "The ideal blend of dynamic young innovators and seasoned power infrastructure professionals adhering to global standards.",
      tag: "CEA & MNRE Adherence",
      icon: Users,
    },
    {
      id: "footprint",
      stat: "4 Hubs",
      badge: "Strategic Presence",
      title: "Pan-India Presence",
      desc: "Headquartered in Indore with strategic operations in Dewas, Delhi NCR, and Bhopal for immediate on-site mobilization.",
      tag: "Immediate Deployment",
      icon: MapPin,
    },
    {
      id: "epc-liaisoning",
      stat: "Turnkey",
      badge: "Full Clearances",
      title: "Turnkey EPC Liaisoning",
      desc: "End-to-end paperwork: MNRE registration, LTOA open access, PPA drafting, CEIG safety inspection, and grid sync.",
      tag: "Zero-Hassle Approvals",
      icon: FileCheck,
    },
  ];

  return (
    <section className="py-10 md:py-10 lg:py-10 bg-[#E9F0E9] relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#123C32_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Subtle Ambient Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-72 bg-[#123C32]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-6 gap-3">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E8A83E]" />
              <span>Why Choose Proton Power Infra</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight leading-tight font-heading">
              Technical Brilliance with Global Standards
            </h2>

            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1 font-normal">
              A dynamic team delivering precision, passion, and purpose across India since 2012.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123C32] hover:text-[#1A4D41] font-tech self-start md:self-end shrink-0 group py-1"
          >
            <span>Read full corporate profile</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5-Card Panoramic Bento with Interactive Spotlight Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-3.5 items-stretch">
          {pillars.map((pillar, idx) => (
            <ScrollReveal key={pillar.id} delay={idx * 70} className="h-full">
              <PillarCard pillar={pillar} index={idx} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
