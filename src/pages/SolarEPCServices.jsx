import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Activity,
  Phone,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Award,
  Zap,
  Play,
  Pause,
} from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";

// Solar EPC Dedicated Assets
import topImg from "../assets/solar-epc-assets/top-image.png";
import designImg from "../assets/solar-epc-assets/Plant Design & Engineering.png";
import liaisoningImg from "../assets/solar-epc-assets/Approvals & Liaisoning.png";
import constructionImg from "../assets/solar-epc-assets/Construction & Procurement Management.png";
import omImg from "../assets/solar-epc-assets/O&M.png";

export default function SolarEPCServices() {
  const [activePhase, setActivePhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const epcTouchStartX = useRef(0);
  const epcTouchStartY = useRef(0);

  const handleEpcTouchStart = (e) => {
    const touch = e.touches?.[0] || e.changedTouches?.[0] || e.targetTouches?.[0] || e.nativeEvent?.touches?.[0] || e.nativeEvent?.changedTouches?.[0] || e.nativeEvent || e;
    if (touch && (touch.clientX !== undefined || touch.pageX !== undefined)) {
      epcTouchStartX.current = touch.clientX ?? touch.pageX;
      epcTouchStartY.current = touch.clientY ?? touch.pageY;
    }
  };

  const handleEpcTouchEnd = (e) => {
    const touch = e.changedTouches?.[0] || e.touches?.[0] || e.targetTouches?.[0] || e.nativeEvent?.changedTouches?.[0] || e.nativeEvent?.touches?.[0] || e.nativeEvent || e;
    if (!touch || (touch.clientX === undefined && touch.pageX === undefined)) return;
    const currentX = touch.clientX ?? touch.pageX;
    const currentY = touch.clientY ?? touch.pageY;
    const diffX = epcTouchStartX.current - currentX;
    const diffY = epcTouchStartY.current - currentY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      setIsPlaying(false);
      if (diffX > 0) {
        // Swiped Left -> Next phase
        setActivePhase((prev) => (prev + 1) % phases.length);
      } else {
        // Swiped Right -> Prev phase
        setActivePhase((prev) => (prev - 1 + phases.length) % phases.length);
      }
    }
  };

  // 4 Core EPC Phases (Visual-First, Minimal Text)
  const phases = [
    {
      step: "01",
      title: "Plant Design & Engineering",
      subtitle: "3D CAD & Electrical Modeling",
      image: designImg,
      desc: "Customized 3D solar layout optimization, shade loss simulations, and single-line diagrams (SLD) engineered for maximum kWh harvest.",
      highlights: [
        "3D Irradiance & Shadow CAD Mapping",
        "Soil & Structural Load Testing",
        "In-House Transformer Impedance Matching",
      ],
      deliverable: "Approved Multi-MW Electrical & Structural Blueprint",
    },
    {
      step: "02",
      title: "Approvals & Liaisoning",
      subtitle: "100% Turnkey Regulatory Approvals",
      image: liaisoningImg,
      desc: "End-to-end management of all government and DISCOM approvals: MNRE project registration, CEIG safety, and open access LTOA connectivity.",
      highlights: [
        "MNRE Project Registration & Sanctions",
        "CEIG Electrical Safety Verification",
        "DISCOM PPA & Net-Meter Grid Sync",
      ],
      deliverable: "Official Statutory Clearances & Grid Synchronization License",
    },
    {
      step: "03",
      title: "Construction & Procurement",
      subtitle: "Precision Engineering & Zero-Downtime Erection",
      image: constructionImg,
      desc: "Direct procurement of Tier-1 solar modules, hot-dip galvanized mounting structures, and step-up transformers with civil precision.",
      highlights: [
        "Tier-1 Mono PERC & Inverter Procurement",
        "Corrosion-Proof Hot-Dip Galvanized Racking",
        "Zero-Downtime On-Site Turnkey Erection",
      ],
      deliverable: "Fully Erected Solar Substation & High-Voltage Grid Interconnection",
    },
    {
      step: "04",
      title: "Operations & Maintenance (O&M)",
      subtitle: "24/7 Cloud SCADA & Performance Ratios",
      image: omImg,
      desc: "Continuous plant health tracking with cloud-connected SCADA, automated robotic panel washing, and preventive thermographic drone audits.",
      highlights: [
        "String-Level Cloud SCADA Monitoring",
        "Preventive Thermographic Drone Audits",
        "Automated High-Pressure Panel Cleaning",
      ],
      deliverable: "Live Performance Ratio (PR) Tracking & Rapid O&M Dispatch",
    },
  ];

  // Motion Auto-Cycle (Rotates through phases smoothly when playing)
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, phases.length]);

  const currentPhase = phases[activePhase];

  // 4 Turnkey Advantage Benchmarks (Ultra-Compact Strip)
  const turnkeyAdvantages = [
    {
      title: "In-House Transformers",
      desc: "Zero third-party supply bottlenecks or impedance mismatches.",
    },
    {
      title: "Turnkey Liaisoning",
      desc: "Fast-track CEIG, DISCOM, and MNRE regulatory clearances.",
    },
    {
      title: "125+ MW Track Record",
      desc: "Demonstrated execution across private & public sector projects.",
    },
    {
      title: "Guaranteed PR & Uptime",
      desc: "High plant performance ratios backed by live cloud SCADA.",
    },
  ];

  // Solar EPC FAQs
  const epcFaqs = [
    {
      q: "What does Proton Power Infra's Turnkey Solar EPC scope include?",
      a: "Our turnkey EPC covers the complete project lifecycle: site topographical survey, 3D CAD design, regulatory approvals (MNRE, CEIG, DISCOM), Tier-1 procurement, civil & electrical construction, in-house transformer step-up, and 25-year SCADA O&M support.",
    },
    {
      q: "How does in-house transformer manufacturing benefit utility-scale EPC projects?",
      a: "Unlike standard EPC contractors who depend on external transformer vendors, we manufacture our own Inverter Duty Solar Transformers. This guarantees custom vector-group matching, lower no-load losses, zero delivery delays, and instant on-site technical support.",
    },
    {
      q: "What is the typical execution timeline for a 1 MW to 5 MW solar park?",
      a: "A typical 1 MW to 5 MW project takes between 60 to 90 days from regulatory clearance to final grid synchronization. Our modular procurement and in-house engineering mobilization ensure rapid, safe commissioning.",
    },
    {
      q: "Do you assist with Open Access (LTOA / MTOA) and PPA drafting?",
      a: "Yes. Our regulatory liaisoning team handles end-to-end Long-Term Open Access (LTOA), Medium-Term Open Access (MTOA), wheeling agreements, banking approvals, and Power Purchase Agreement (PPA) drafting with state load dispatch centers (SLDCs).",
    },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero Section (Compact py-10, Single CTA Button, Tech Typography) */}
      <section className="relative py-10 md:py-10 lg:py-10 bg-[#123C32] text-white overflow-hidden">
        {/* Subtle background tech pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading, Subtext, Single CTA, Micro-Metrics */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/40 font-tech">
                <Sun className="w-3.5 h-3.5" />
                <span>Turnkey Solar EPC & Solar Park Developers</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-heading">
                Turnkey Solar EPC & Park Development Across India.
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-[#E9F0E9]/85 leading-relaxed font-normal max-w-2xl">
                From initial 3D solar design and state DISCOM liaisoning to multi-megawatt construction and cloud SCADA O&M—delivering India's cleanest, high-performance power infrastructure.
              </p>

              {/* Exactly ONE CTA Button */}
              <div className="pt-1">
                <Link
                  to="/enquiry?type=industrial&requirement=Turnkey%20EPC"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#E8A83E]/20 transition-all duration-300 font-tech tracking-wide group cursor-pointer"
                >
                  <span>Consult Our Solar EPC Team</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Micro-Metrics Bar */}
              <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-3 font-tech">
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#E8A83E]">125+ MW</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Executed Across India
                  </div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#E8A83E]">100% Turnkey</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Design to Grid Sync
                  </div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#E8A83E]">4 Hubs</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Delhi, Indore, Dewas, Bhopal
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Frame with top-image.png */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/80 bg-[#202724] group">
                <div className="relative h-64 sm:h-72 lg:h-[320px] overflow-hidden">
                  <img
                    src={topImg}
                    alt="Proton Power Infra Turnkey Solar EPC"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/90 via-transparent to-black/20"></div>
                </div>

                {/* Top Telemetry Capsule */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#123C32] shadow-sm font-tech">
                    <Activity className="w-3.5 h-3.5 text-[#E8A83E] animate-pulse" />
                    <span>EPC Solar Park • Commissioned</span>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#202724]/85 backdrop-blur-md text-[10px] font-mono text-[#E9F0E9] border border-white/10">
                    <span>22.71° N, 75.85° E</span>
                  </div>
                </div>

                {/* Bottom Spec Capsule */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-white/60 z-10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#E8A83E]"></span>
                      <span className="text-xs font-bold text-[#123C32] uppercase tracking-wider font-tech">
                        Utility Scale & Industrial Solar EPC
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#525D57] leading-relaxed">
                    Integrated EPC execution backed by our in-house power transformer manufacturing and CEIG liaisoning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section 2 — Compact Turnkey Advantage Matrix */}
      <section className="py-10 md:py-10 lg:py-10 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
            {turnkeyAdvantages.map((adv, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#123C32] shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-[#202724] font-heading truncate">
                    {adv.title}
                  </h4>
                </div>
                <p className="text-[11px] text-[#525D57] leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Section 3 — The Interactive Motion Cinema Stage (Zero-Scroll & Visual-First) */}
      <section id="epc-phases" className="py-10 md:py-10 lg:py-10 bg-[#F7F8F4] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Motion Auto-Play Indicator */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-1.5">
                <span>Execution Journey</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                The 4 Phases of Our Turnkey EPC Scope
              </h2>
            </div>

            {/* Auto-Cycle Motion Control */}
            <div className="flex items-center gap-2 font-tech">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-white border border-[#E2E8E2] hover:bg-[#123C32] hover:text-white transition-colors cursor-pointer text-[#123C32]"
                title={isPlaying ? "Pause automatic phase motion" : "Play automatic phase motion"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#E8A83E]" />
                    <span>Auto-Motion Active</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#E8A83E]" />
                    <span>Resume Motion</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Stepper Tabs with Motion Progress Indicator */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-4">
            {phases.map((ph, idx) => {
              const isActive = activePhase === idx;
              return (
                <button
                  key={ph.step}
                  type="button"
                  onClick={() => {
                    setActivePhase(idx);
                    setIsPlaying(false);
                  }}
                  className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer font-tech relative overflow-hidden flex items-center gap-2.5 ${
                    isActive
                      ? "bg-[#123C32] text-white border-[#123C32] shadow-sm ring-2 ring-[#E8A83E]/40"
                      : "bg-white text-[#202724] border-[#E2E8E2] hover:border-[#123C32]/30 hover:bg-white"
                  }`}
                >
                  {/* Subtle timer progress bar when auto-playing */}
                  {isActive && isPlaying && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8A83E]/40">
                      <div className="h-full bg-[#E8A83E] animate-[pulse_6s_ease-in-out_infinite]"></div>
                    </div>
                  )}

                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                      isActive ? "bg-[#E8A83E] text-[#123C32]" : "bg-[#123C32]/10 text-[#123C32]"
                    }`}
                  >
                    {ph.step}
                  </div>
                  <div className="min-w-0">
                    <div
                      className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${
                        isActive ? "text-[#E8A83E]" : "text-[#525D57]"
                      }`}
                    >
                      Phase {ph.step}
                    </div>
                    <div className="text-xs sm:text-sm font-bold truncate">
                      {ph.title.split("&")[0].trim()}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Motion Stage Card (Side-by-Side Desktop, Compact & Zero-Scroll) */}
          <div
            className="bg-white rounded-2xl border border-[#E2E8E2] overflow-hidden shadow-md p-4 sm:p-5 lg:p-6 cursor-grab active:cursor-grabbing"
            onTouchStart={handleEpcTouchStart}
            onTouchEnd={handleEpcTouchEnd}
            onPointerDown={handleEpcTouchStart}
            onPointerUp={handleEpcTouchEnd}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
              {/* Left Column: Visual Asset with Smooth Zoom */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-xl overflow-hidden shadow-sm border border-[#E2E8E2] bg-[#202724] group">
                  <div className="relative h-56 sm:h-64 lg:h-[280px] overflow-hidden">
                    <img
                      key={currentPhase.step}
                      src={currentPhase.image}
                      alt={currentPhase.title}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>

                  {/* Phase Pill */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full text-[11px] font-black tracking-wide uppercase bg-[#123C32] text-[#E8A83E] shadow-sm font-tech">
                      Phase {currentPhase.step} Scope
                    </span>
                  </div>

                  {/* Subtitle Bar */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] text-white/95 font-medium font-tech truncate">
                    {currentPhase.subtitle}
                  </div>
                </div>
              </div>

              {/* Right Column: Minimal Narrative & Direct Navigation */}
              <div className="lg:col-span-6 space-y-3.5 text-left flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-[#E8A83E] uppercase tracking-wider font-tech bg-[#123C32] px-2 py-0.5 rounded">
                      Step {currentPhase.step} of 04
                    </span>
                    <span className="text-xs font-semibold text-[#123C32] uppercase tracking-wide font-tech truncate">
                      {currentPhase.subtitle}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#202724] font-heading tracking-tight leading-snug">
                    {currentPhase.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                  {currentPhase.desc}
                </p>

                {/* Key Technical Highlights (2-column compact grid) */}
                <div>
                  <div className="text-[10px] font-bold text-[#202724] uppercase tracking-wider font-tech mb-1.5">
                    Engineering Checkpoints:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#202724]">
                    {currentPhase.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#123C32] shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestone Deliverable Compact Capsule */}
                <div className="px-3 py-2 rounded-lg bg-[#E9F0E9] border border-[#123C32]/15 flex items-center gap-2 font-tech">
                  <span className="text-[10px] font-bold text-[#123C32] uppercase tracking-wider shrink-0">
                    Deliverable:
                  </span>
                  <span className="text-xs font-bold text-[#202724] truncate">
                    {currentPhase.deliverable}
                  </span>
                </div>

                {/* In-Card Stage Controls */}
                <div className="pt-2 flex items-center justify-between border-t border-[#E2E8E2]">
                  <button
                    type="button"
                    onClick={() => {
                      setActivePhase((prev) => (prev - 1 + phases.length) % phases.length);
                      setIsPlaying(false);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#525D57] hover:text-[#123C32] px-2.5 py-1.5 rounded-lg hover:bg-black/5 transition-colors cursor-pointer font-tech"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  {/* Interactive Phase Number Pills */}
                  <div className="flex items-center gap-1.5">
                    {phases.map((ph, idx) => {
                      const isActive = activePhase === idx;
                      return (
                        <button
                          key={ph.step}
                          type="button"
                          onClick={() => {
                            setActivePhase(idx);
                            setIsPlaying(false);
                          }}
                          className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                            isActive
                              ? "bg-[#123C32] text-[#E8A83E] shadow-sm ring-1 ring-[#E8A83E]"
                              : "bg-[#F7F8F4] text-[#525D57] hover:bg-black/5"
                          }`}
                          title={`Switch to Phase ${ph.step}`}
                        >
                          {ph.step}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setActivePhase((prev) => (prev + 1) % phases.length);
                      setIsPlaying(false);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#123C32] hover:text-[#1A4D41] px-2.5 py-1.5 rounded-lg hover:bg-black/5 transition-colors cursor-pointer font-tech"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 4 — Solar EPC FAQs */}
      <section className="py-10 md:py-10 lg:py-10 bg-white border-t border-[#E2E8E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-2">
              <span>Turnkey EPC FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] mt-1">
              Details on utility grid synchronization, CEIG approvals, and timeline benchmarks.
            </p>
          </div>

          <div className="space-y-2.5">
            {epcFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-xl border border-[#E2E8E2] overflow-hidden bg-[#F7F8F4]">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between gap-4 hover:bg-[#E9F0E9] transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#202724] font-heading">
                      {faq.q}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-[#123C32] text-white" : "bg-black/5 text-[#525D57]"
                      }`}
                    >
                      {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-[#525D57] leading-relaxed border-t border-[#E2E8E2]/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Section 5 — Compact Consultation CTA Banner (Form Replaced) */}
      <section className="py-10 md:py-10 lg:py-10 bg-[#123C32] text-white relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold uppercase tracking-wider border border-[#E8A83E]/40 font-tech mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Build Your Utility or Commercial Solar Park?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight font-heading mb-3">
            Request a Turnkey EPC Feasibility Study
          </h2>

          <p className="text-xs sm:text-sm text-[#E9F0E9]/85 leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
            Speak with our senior solar EPC engineers to discuss site topography, MNRE registration, power evacuation, and guaranteed performance ratio (PR) modeling.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/enquiry?type=industrial&requirement=Turnkey%20EPC"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#E8A83E]/20 transition-all duration-300 font-tech tracking-wide group cursor-pointer"
            >
              <span>Schedule Solar EPC Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <a
              href={`tel:${COMPANY_DETAILS.primaryPhoneRaw || "+919770744687"}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all font-tech"
            >
              <Phone className="w-4 h-4 text-[#E8A83E]" />
              <span>Call Us: {COMPANY_DETAILS.primaryPhone || "+91 97707 44687"}</span>
            </a>
          </div>

          <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-5 text-[11px] text-[#E9F0E9]/75 font-tech">
            <span>✓ 100% Turnkey Scope Execution</span>
            <span>✓ Complete CEIG & DISCOM Clearances</span>
            <span>✓ Guaranteed Performance Ratio (PR)</span>
          </div>
        </div>
      </section>
    </div>
  );
}
