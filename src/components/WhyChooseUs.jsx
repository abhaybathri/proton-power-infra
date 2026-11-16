import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Cpu, Users, MapPin, FileCheck, Sparkles, CheckCircle2 } from "lucide-react";

function PillarCard({ pillar }) {
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
      className="relative bg-white rounded-2xl p-4 sm:p-5 border border-[#E2E8E2] hover:border-[#123C32]/60 shadow-2xs hover:shadow-xl hover:shadow-[#123C32]/10 transition-all duration-300 flex flex-col justify-between group overflow-hidden hover:-translate-y-1.5 cursor-pointer"
    >
      {/* Interactive Cursor Spotlight Glow following mouse coordinates */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.18), rgba(18, 60, 50, 0.1) 50%, transparent 80%)`,
        }}
      />

      {/* Subtle Glowing Border Ring on Hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-inset ring-[#E8A83E]/40 z-0" />

      <div className="relative z-10">
        {/* Top: Icon & Metric Tag */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#E9F0E9] text-[#123C32] group-hover:bg-[#123C32] group-hover:text-[#E8A83E] group-hover:scale-110 group-hover:rotate-2 group-hover:shadow-[0_0_20px_rgba(232,168,62,0.35)] flex items-center justify-center shrink-0 transition-all duration-300">
            <Icon className="w-5 h-5 stroke-[2.2]" />
          </div>

          <span className="text-xs font-black font-tech px-2.5 py-1 rounded-md bg-[#123C32]/10 text-[#123C32] group-hover:bg-[#123C32] group-hover:text-[#E8A83E] transition-all duration-300">
            {pillar.stat}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-sm sm:text-base font-bold text-[#202724] group-hover:text-[#123C32] transition-colors tracking-tight font-heading leading-snug mb-1.5">
          {pillar.title}
        </h3>

        <p className="text-[11px] sm:text-xs text-[#525D57] leading-relaxed">
          {pillar.desc}
        </p>
      </div>

      {/* Bottom Micro-Badge */}
      <div className="relative z-10 pt-3 mt-3 border-t border-[#E2E8E2]/70 flex items-center gap-1.5 text-[10px] font-tech text-[#123C32] font-semibold">
        <CheckCircle2 className="w-3.5 h-3.5 text-[#E8A83E] shrink-0" />
        <span className="truncate">{pillar.tag}</span>
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
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
