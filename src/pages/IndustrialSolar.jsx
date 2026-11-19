import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Factory,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  TrendingUp,
  Phone,
  Award,
  FileCheck,
  Wrench,
} from "lucide-react";
import { COMPANY_DETAILS, FAQS } from "../data/companyData";
import SmartImage from "../components/SmartImage";
import ScrollReveal from "../components/ScrollReveal";

// Industrial Assets
import industrialTopImg from "../assets/industrial-assets/top-image.jpg";
import manufacturingImg from "../assets/industrial-assets/manufacturing-units.jpg";
import agricultureImg from "../assets/industrial-assets/agriculture-food-processing.jpg";
import chemicalPharmaImg from "../assets/industrial-assets/chemical-pharma.png";

function IndustrialBenefitCard({
  benefit,
  idx,
  isActive,
  onActivate,
  onHoverStart,
  onHoverEnd,
}) {
  const Icon = benefit.icon;
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);

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
      onMouseEnter={() => {
        setIsMouseOver(true);
        onHoverStart();
        onActivate(idx);
      }}
      onMouseLeave={() => {
        setIsMouseOver(false);
        onHoverEnd();
      }}
      onClick={() => onActivate(idx)}
      className={`relative rounded-2xl p-[1.5px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer select-none group min-w-0 ${
        isActive ? "lg:flex-[1.45]" : "lg:flex-1"
      } h-[175px] sm:h-[180px] lg:h-full`}
    >
      {/* Dynamic Cursor-Responsive Border Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          opacity: isMouseOver ? 1 : isActive ? 0.85 : 0.35,
          background: isMouseOver
            ? `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.95), rgba(232, 168, 62, 0.35) 45%, rgba(18, 60, 50, 0.2) 75%, transparent 100%)`
            : isActive
            ? `linear-gradient(135deg, rgba(232, 168, 62, 0.85), rgba(18, 60, 50, 0.4), rgba(232, 168, 62, 0.65))`
            : `rgba(226, 232, 226, 0.8)`,
        }}
      />

      {/* Inner Card Surface: Perfectly centered vertically with equal top and bottom distance */}
      <div
        className={`relative rounded-[14.5px] p-3 sm:p-3.5 lg:p-4 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex flex-col items-center text-center justify-center h-full w-full ${
          isActive
            ? "bg-[#123C32] text-white shadow-xl shadow-black/20"
            : "bg-white text-[#252A27] shadow-xs hover:shadow-[0_8px_25px_rgba(232,168,62,0.18)] hover:border-amber-300/50 hover:bg-neutral-50"
        }`}
      >
        {/* Soft Interior Ambient Glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[14.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: isActive
              ? `radial-gradient(160px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.20), transparent 70%)`
              : `radial-gradient(160px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.12), transparent 70%)`,
          }} 
        />

        {/* Top Group: Icon + Heading + Subheading (Strictly Centered) */}
        <div className="relative z-10 w-full flex flex-col items-center text-center">
          {/* Centered Icon */}
          <div
            className={`rounded-xl flex items-center justify-center shrink-0 mx-auto transition-all duration-500 ease-out ${
              isActive
                ? "w-8 h-8 sm:w-9 sm:h-9 bg-[#E8A83E] text-[#123C32] shadow-[0_0_16px_rgba(232,168,62,0.4)] mb-1 scale-105"
                : "w-9 h-9 sm:w-10 sm:h-10 bg-[#E9F0E9] border border-[#123C32]/10 text-[#123C32] group-hover:bg-amber-100 group-hover:text-amber-950 group-hover:border-amber-300 mb-1.5 scale-100"
            }`}
          >
            <Icon className={`stroke-[2.2] transition-all duration-300 ${isActive ? "w-4 h-4 sm:w-4.5 sm:h-4.5" : "w-4.5 h-4.5 sm:w-5 sm:h-5"}`} />
          </div>

          {/* Heading */}
          <h3
            className={`font-black font-heading tracking-tight transition-all duration-500 ease-out text-center mx-auto ${
              isActive
                ? "text-xs sm:text-sm lg:text-base text-white mb-0.5"
                : "text-xs sm:text-sm lg:text-[15px] text-[#202724] group-hover:text-[#123C32] max-w-[145px] leading-snug mb-1"
            }`}
          >
            {benefit.title}
          </h3>

          {/* Subheading */}
          <div
            className={`font-mono font-bold uppercase tracking-wider transition-colors duration-500 text-center mx-auto ${
              isActive
                ? "text-[9px] sm:text-[10px] text-[#E8A83E]"
                : "text-[9px] sm:text-[10px] text-[#525D57] group-hover:text-[#E8A83E]"
            }`}
          >
            {benefit.subtitle}
          </div>
        </div>

        {/* Active Expanded Details: Stat + Description + Milestone (Gently glides in with smooth vertical float) */}
        <div
          className={`relative z-10 w-full flex flex-col items-center text-center transition-all duration-600 ease-out ${
            isActive
              ? "opacity-100 translate-y-0 max-h-40 my-1 pointer-events-auto"
              : "opacity-0 translate-y-2 max-h-0 overflow-hidden pointer-events-none my-0"
          }`}
        >
          {/* Stat Badge */}
          <div className="text-xs sm:text-sm font-black font-tech text-[#E8A83E] text-center mb-1">
            {benefit.stat}
          </div>

          {/* Description */}
          <p className="text-[11px] sm:text-xs text-[#E9F0E9]/90 leading-snug text-center w-full px-1 line-clamp-2 mb-1.5 lg:mb-3">
            {benefit.desc}
          </p>

          {/* Milestone Highlight */}
          <div className="pt-1.5 border-t border-white/10 flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-tech font-bold text-[#E8A83E] text-center w-full truncate">
            <CheckCircle2 className="lg:mt-2 lg:mb-1 w-3.5 h-3.5 text-[#E8A83E] shrink-0" />
            <span className="truncate lg:mt-2 lg:mb-1">{benefit.highlight}</span>
          </div>
        </div>

        {/* Inactive Bottom Metric Capsule: Centered with smooth crossfade */}
        <div
          className={`relative z-10 w-full flex items-center justify-center transition-all duration-600 ease-out ${
            isActive
              ? "opacity-0 -translate-y-1 max-h-0 overflow-hidden pointer-events-none mt-0"
              : "opacity-100 translate-y-0 max-h-10 mt-2"
          }`}
        >
          <span className="px-2.5 py-0.5 sm:py-1 rounded-full bg-[#123C32]/5 border border-[#123C32]/10 text-[10px] font-tech font-bold text-[#123C32] group-hover:bg-[#E8A83E]/20 group-hover:border-[#E8A83E]/40 group-hover:text-[#9A6208] group-hover:shadow-[0_0_10px_rgba(232,168,62,0.2)] transition-all truncate max-w-full ">
            {benefit.stat}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function IndustrialSolar() {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [isBenefitHovered, setIsBenefitHovered] = useState(false);
  const benefitTimerRef = useRef(null);

  const [activePhase, setActivePhase] = useState(0);
  const [isPhaseHovered, setIsPhaseHovered] = useState(false);
  const phaseTimerRef = useRef(null);

  // Default first FAQ open as requested
  const [openFaq, setOpenFaq] = useState(0);

  const phaseTouchStartX = useRef(0);
  const phaseTouchStartY = useRef(0);

  // 5 Industrial Solar Benefits (Horizontal Accordion with Cursor Glow)
  const benefits = [
    {
      id: "tariff",
      icon: TrendingUp,
      title: "Peak-Tariff Relief",
      subtitle: "Slash HT Power Costs",
      stat: "Up to 70% Bill Reduction",
      desc: "Shield energy-intensive factory operations from high DISCOM High-Tension (HT) tariffs and fuel price volatility with dedicated captive solar power.",
      highlight: "₹50L+ Annual Factory Savings",
    },
    {
      id: "synergy",
      icon: Zap,
      title: "Transformer Synergy",
      subtitle: "In-House Transformer EPC",
      stat: "Zero Harmonic Tripping",
      desc: "Unlike standard EPCs, Proton manufactures in-house solar step-up transformers, preventing voltage harmonics, power factor penalties, and inverter tripouts.",
      highlight: "In-House Transformer Manufacturing",
    },
    {
      id: "rpo",
      icon: Award,
      title: "RPO & Tax Shield",
      subtitle: "Section 32 Compliance",
      stat: "40% Sec 32 Tax Shield",
      desc: "Fulfill statutory Renewable Purchase Obligations (RPO) while claiming 40% accelerated depreciation in year one for a rapid 3–4 year capital payback.",
      highlight: "3–4 Yrs Capital Payback",
    },
    {
      id: "uptime",
      icon: Factory,
      title: "Heavy Load Uptime",
      subtitle: "Industrial Racking & O&M",
      stat: "99.8% Grid Availability",
      desc: "Heavy-gauge galvanized structures and hot-dip industrial fasteners engineered to resist factory vibrations, chemical fumes, and high-wind loads.",
      highlight: "Zero Assembly-Line Downtime",
    },
    {
      id: "valuation",
      icon: ShieldCheck,
      title: "Industrial Equity",
      subtitle: "25-Yr Asset Warranty",
      stat: "25 Years Performance Tier",
      desc: "Multi-megawatt rooftop and open-acreage solar arrays demonstrably increase industrial property appraisal value, ESG ratings, and investor appeal.",
      highlight: "25-Year Linear Warranty",
    },
  ];

  // Auto-Cycle Spotlight for Section 2 (Every 2.0 seconds)
  useEffect(() => {
    if (isBenefitHovered) return;

    benefitTimerRef.current = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefits.length);
    }, 2000);

    return () => {
      if (benefitTimerRef.current) clearInterval(benefitTimerRef.current);
    };
  }, [isBenefitHovered, benefits.length]);

  // 4 Industrial Turnkey Process Phases (Silky Crossfade between Assets)
  const phases = [
    {
      step: "01",
      name: "Load & Harmonic Audit",
      title: "Factory Energy & Harmonic Distortion Audit",
      subtitle: "15-Minute Load Curve & Shed Profiling",
      image: manufacturingImg,
      icon: Activity,
      desc: "Our power engineers inspect historical 15-minute load curves, contract demand, transformer tapping, power factor penalties, and factory shed load-bearing strength.",
      highlights: [
        "15-Min Interval HT Load Profiling",
        "Factory Shed Wind Load Analysis",
        "Harmonic Distortion Mapping",
      ],
      deliverable: "Techno-Commercial Feasibility & Shadow-Loss Report",
    },
    {
      step: "02",
      name: "Industrial CAD",
      title: "Customized Structural & Electrical CAD",
      subtitle: "Tailored Industrial Plant Engineering",
      image: agricultureImg,
      icon: FileCheck,
      desc: "We design a customized solar array layout tailored to your factory shed profile—optimizing cable runs, DC-to-AC ratios, and in-house step-up transformer sizing.",
      highlights: [
        "Shed Non-Penetrating Clamping",
        "Dual 11kV/33kV HT SLD Schematics",
        "Lightning & Ground Grid Simulation",
      ],
      deliverable: "Complete Engineering Package & 3D Blueprints",
    },
    {
      step: "03",
      name: "Turnkey EPC",
      title: "Precision Mechanical & Electrical EPC",
      subtitle: "Parallel Execution Without Halt",
      image: chemicalPharmaImg,
      icon: Wrench,
      desc: "Certified technicians execute installation parallel to running production lines. Non-penetrating chemical clamps guarantee zero roof leakage and zero assembly-line interruption.",
      highlights: [
        "Zero Plant Downtime Fastening",
        "Hot-Dip Galvanized Frames",
        "Dual Protective Earthing Grid",
      ],
      deliverable: "CEIG Compliance & Mechanical Safety Sign-Off",
    },
    {
      step: "04",
      name: "CEIG Sync & SCADA",
      title: "CEIG Grid Synchronization & IoT Telemetry",
      subtitle: "Sub-Second Telemetry & Control",
      image: industrialTopImg,
      icon: Zap,
      desc: "We manage all DISCOM liaisoning, CEIG statutory approvals, and HT grid synchronization, backed by cloud SCADA for sub-second telemetry and fault detection.",
      highlights: [
        "DISCOM Net-Meter Synchronization",
        "Sub-Second SCADA Telemetry App",
        "Predictive IV-Curve Diagnostics",
      ],
      deliverable: "DISCOM Synchronization & Handover Protocol",
    },
  ];

  const currentPhaseData = phases[activePhase];

  // Auto-Shift Phases in Section 3 (Every 2.0 seconds)
  useEffect(() => {
    if (isPhaseHovered) return;

    phaseTimerRef.current = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 2000);

    return () => {
      if (phaseTimerRef.current) clearInterval(phaseTimerRef.current);
    };
  }, [isPhaseHovered, phases.length]);

  // Mobile Touch Swipe Handlers for Phase section
  const handlePhaseTouchStart = (e) => {
    const touch = e.touches?.[0] || e.changedTouches?.[0] || e.targetTouches?.[0] || e.nativeEvent?.touches?.[0] || e.nativeEvent?.changedTouches?.[0] || e.nativeEvent || e;
    if (touch && (touch.clientX !== undefined || touch.pageX !== undefined)) {
      phaseTouchStartX.current = touch.clientX ?? touch.pageX;
      phaseTouchStartY.current = touch.clientY ?? touch.pageY;
    }
  };

  const handlePhaseTouchEnd = (e) => {
    const touch = e.changedTouches?.[0] || e.touches?.[0] || e.targetTouches?.[0] || e.nativeEvent?.changedTouches?.[0] || e.nativeEvent?.touches?.[0] || e.nativeEvent || e;
    if (!touch || (touch.clientX === undefined && touch.pageX === undefined)) return;
    const currentX = touch.clientX ?? touch.pageX;
    const currentY = touch.clientY ?? touch.pageY;
    const diffX = phaseTouchStartX.current - currentX;
    const diffY = phaseTouchStartY.current - currentY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        setActivePhase((prev) => (prev + 1) % phases.length);
      } else {
        setActivePhase((prev) => (prev - 1 + phases.length) % phases.length);
      }
    }
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Industrial FAQs (Default #1 Open)
  const industrialFaqs = [
    ...(FAQS.industrial || []),
    {
      q: "Can our factory continue manufacturing operations during rooftop solar installation?",
      a: "Yes. Our industrial EPC workflows are engineered for zero production downtime. All mechanical structural erection, chemical anchoring, and module mounting take place without cutting factory power lines or disturbing active assembly floors.",
    },
    {
      q: "Why are Inverter Duty Transformers critical for multi-megawatt industrial solar?",
      a: "Large industrial solar arrays experience severe pulse-width modulation harmonics and voltage surges from central/string inverters. Standard distribution transformers trip under these harmonics; our in-house manufactured inverter-duty transformers feature dual windings and electrostatic shielding designed specifically for uninterrupted solar generation.",
    },
  ];

  return (
    <div className="pt-20 bg-[#F7F8F4] text-[#252A27]">
      {/* 1. Hero Section - Equal Width & Height, Compact & Centered Content */}
      <section className="relative overflow-hidden py-6 sm:py-7 lg:py-8 bg-[#123C32] text-white">
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px]"></div>

        {/* Ambient lighting glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E8A83E]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Left Content Column - Equal 50% Width, Matching Height, All Text & Buttons Centered */}
            <div className="flex flex-col h-full w-full justify-center">
              <ScrollReveal delay={0} className="h-full flex flex-col justify-center items-center text-center space-y-4 sm:space-y-4.5 py-1 min-h-[360px] sm:min-h-[380px] lg:h-[400px] lg:min-h-[400px]">
                {/* Heading - Centered */}
                <h1 className="font-black tracking-tight text-white leading-[1.15] font-heading text-center mx-auto max-w-xl">
                  <span className="block text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] whitespace-nowrap">
                    Energize Heavy Industry with
                  </span>
                  <span className="text-[#E8A83E] relative inline-block whitespace-nowrap text-[20px] sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] mt-1">
                    Industrial-Grade Solar.
                    <span className="absolute -bottom-1 left-0 w-full h-1.5 sm:h-2 bg-[#E8A83E]/25 -z-10 rounded"></span>
                  </span>
                </h1>

                {/* Paragraph Description - Centered */}
                <p className="text-xs sm:text-sm text-[#E9F0E9]/85 leading-relaxed font-normal text-center max-w-lg mx-auto">
                  Shield factory operating margins against steep High-Tension (HT) grid tariffs. Proton Power Infra engineers turnkey multi-megawatt industrial solar plants paired with in-house step-up transformer technology.
                </p>

                {/* CTA Button with Ambient Glow - Centered */}
                <div className="pt-0.5 flex items-center justify-center w-full">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E8A83E] via-amber-300 to-[#E8A83E] rounded-2xl blur-md opacity-30 group-hover:opacity-75 transition duration-500 group-hover:scale-105"></div>
                    <Link
                      to="/contact?type=industrial#inquiry-form"
                      className="relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/25 transition-all duration-300 font-tech tracking-wide cursor-pointer"
                    >
                      <span>Request Industrial Energy Audit</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>

                {/* Metrics Bar - Centered */}
                <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-3 font-tech w-full max-w-lg mx-auto text-center">
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">100 kW – 10 MW+</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      Industrial Scale
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">Up to 70%</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      Tariff Reduction
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">In-House</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      Transformer Bay
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Visual Capsule - Equal 50% Width, Matching Height */}
            <div className="flex flex-col h-full w-full justify-center">
              <ScrollReveal delay={140} className="h-full flex flex-col justify-center">
                <div className="relative w-full h-full min-h-[360px] sm:min-h-[380px] lg:h-[400px] lg:min-h-[400px] max-h-[420px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/90 bg-neutral-900 group select-none flex flex-col justify-between">
                  {/* Photo Frame (Full Height Edge-to-Edge) */}
                  <div className="relative w-full h-full min-h-[360px] sm:min-h-[380px] lg:h-[400px] lg:min-h-[400px] max-h-[420px] overflow-hidden bg-black/40">
                    <SmartImage
                      src={industrialTopImg}
                      alt="Proton Power Infra Industrial Rooftop & Ground Solar Project"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      containerClassName="w-full h-full absolute inset-0"
                      priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none"></div>
                  </div>

                  {/* Top Telemetry Capsule */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#123C32] shadow-sm font-tech">
                      <Activity className="w-3.5 h-3.5 text-[#E8A83E] animate-pulse" />
                      <span>Industrial Array • Active</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#202724]/85 backdrop-blur-md text-[9px] font-mono text-[#E9F0E9] border border-white/10">
                      <span>22.71° N, 75.85° E</span>
                    </div>
                  </div>

                  {/* Bottom Spec Capsule */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 sm:p-4 rounded-xl bg-black/70 backdrop-blur-md shadow-lg border border-white/15 z-20">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-tech truncate">
                          Heavy Industrial Rooftop & Open Ground Solar
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#E9F0E9]/85 leading-relaxed font-sans line-clamp-2">
                      Engineered for manufacturing factories, steel and cement works, chemical processing, and agricultural cold-storage chains.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section 2 — Industrial Solar Benefits (Compact Horizontal Accordion, Trimmed Padding, Zero Empty Space) */}
      <section className="py-6 sm:py-7 lg:py-8 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Centered without badge, expanded max-w to prevent awkward word wrap */}
          <div className="max-w-5xl mx-auto mb-4 sm:mb-5 text-center flex flex-col items-center">
            <ScrollReveal delay={0}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#202724] tracking-tight leading-tight font-heading text-center">
                Why Manufacturing Giants Choose Proton Industrial Solar
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={70}>
              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1 font-normal text-center max-w-xl mx-auto">
                Transform energy overheads into high-yield captive assets with seamless transformer bay integration and guaranteed grid uptime.
              </p>
            </ScrollReveal>
          </div>

          {/* 5 Cards in Same Line: Horizontal Expanding Accordion (Compact 230px Height, Equal Top & Bottom Distance) */}
          <ScrollReveal delay={120}>
            <div className="flex flex-col lg:flex-row gap-2.5 sm:gap-3 h-auto lg:h-[230px] items-stretch">
              {benefits.map((b, idx) => (
                <IndustrialBenefitCard
                  key={b.id}
                  benefit={b}
                  idx={idx}
                  isActive={activeBenefit === idx}
                  onActivate={setActiveBenefit}
                  onHoverStart={() => setIsBenefitHovered(true)}
                  onHoverEnd={() => setIsBenefitHovered(false)}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Section 3 — How We Execute Industrial Solar (Auto-Cycles every 2.0s, Pauses on Hover) */}
      <section
        id="process"
        className="py-6 sm:py-7 lg:py-8 bg-[#F7F8F4] scroll-mt-20"
        onMouseEnter={() => setIsPhaseHovered(true)}
        onMouseLeave={() => setIsPhaseHovered(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Centered without badge */}
          <div className="max-w-5xl mx-auto mb-4 sm:mb-5 text-center flex flex-col items-center">
            <ScrollReveal delay={0}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#202724] tracking-tight leading-tight font-heading text-center">
                How We Execute Industrial Solar Turnkey Projects
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={70}>
              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1 font-normal text-center max-w-xl mx-auto">
                A rigorous 4-phase turnkey installation engineered for zero factory downtime and guaranteed electrical safety.
              </p>
            </ScrollReveal>
          </div>

          {/* Single Streamlined Phase Stepper Rail with Amber Hover & Active Glow */}
          <ScrollReveal delay={120}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 mb-4 max-w-4xl mx-auto">
              {phases.map((ph, idx) => {
                const isActive = activePhase === idx;
                return (
                  <button
                    key={ph.step}
                    type="button"
                    onClick={() => {
                      setActivePhase(idx);
                      setIsPhaseHovered(true);
                    }}
                    className={`py-2 px-3 rounded-xl border text-center transition-all duration-300 ease-out cursor-pointer font-tech flex items-center justify-center gap-2 group ${
                      isActive
                        ? "bg-[#123C32] text-white border-[#E8A83E] shadow-[0_0_16px_rgba(232,168,62,0.35)] ring-1 ring-[#E8A83E]/50 scale-[1.02]"
                        : "bg-white text-[#202724] border-[#E2E8E2] hover:border-[#E8A83E]/60 hover:bg-white hover:text-[#123C32] hover:shadow-[0_0_14px_rgba(232,168,62,0.25)] hover:scale-[1.02] scale-100"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-[#E8A83E] shadow-[0_0_8px_#E8A83E]"
                          : "bg-neutral-300 group-hover:bg-[#E8A83E] group-hover:shadow-[0_0_6px_#E8A83E]"
                      }`}
                    />
                    <span className="text-xs sm:text-sm font-bold truncate">{ph.name}</span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Active Phase Story Stage with Mobile Touch Swipe & Subtle Hover Glow */}
          <ScrollReveal delay={200}>
            <div
              className="bg-white rounded-2xl border border-[#E2E8E2] hover:border-[#123C32]/30 hover:shadow-[0_12px_36px_rgba(18,60,50,0.08)] transition-all duration-500 overflow-hidden shadow-sm p-4 sm:p-5 lg:p-6 select-none"
              onTouchStart={handlePhaseTouchStart}
              onTouchEnd={handlePhaseTouchEnd}
              onPointerDown={handlePhaseTouchStart}
              onPointerUp={handlePhaseTouchEnd}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
                {/* Left Column: Phase Photograph (Silky Crossfade Transition Between All Phases) */}
                <div className="lg:col-span-5 flex flex-col h-full">
                  <div className="relative rounded-xl overflow-hidden border border-[#E2E8E2] bg-neutral-900 group h-full min-h-[260px] sm:min-h-[290px] lg:min-h-full">
                    {phases.map((ph, idx) => {
                      const isCurrent = activePhase === idx;
                      return (
                        <div
                          key={ph.step}
                          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                            isCurrent
                              ? "opacity-100 scale-100 z-10"
                              : "opacity-0 scale-105 z-0 pointer-events-none"
                          }`}
                        >
                          <SmartImage
                            src={ph.image}
                            alt={ph.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            containerClassName="w-full h-full absolute inset-0"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15 pointer-events-none"></div>

                          {/* Subtitle Bar Overlay */}
                          <div className="absolute bottom-3 left-3 right-3 text-[11px] text-[#E9F0E9] font-medium font-tech truncate pointer-events-none bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                            {ph.subtitle}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Clean Story Narrative & Engineering Checkpoints (Matching Height with Smooth Fade Animation) */}
                <div
                  key={activePhase}
                  className="lg:col-span-7 flex flex-col justify-between space-y-3 text-left h-full py-0.5 animate-smooth-fade"
                >
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-mono font-bold text-[#E8A83E] uppercase tracking-wider mb-1">
                      {currentPhaseData.subtitle}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[#202724] font-heading tracking-tight leading-snug">
                      {currentPhaseData.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#525D57] leading-relaxed mt-1.5 font-normal">
                      {currentPhaseData.desc}
                    </p>
                  </div>

                  {/* Key Engineering Checkpoints with Distinct Light Pastel Shades & Individual Glow */}
                  <div>
                    <div className="text-[10px] font-bold text-[#202724] uppercase tracking-wider font-tech mb-1.5">
                      Engineering Checkpoints:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {currentPhaseData.highlights.map((h, i) => {
                        const style = [
                          {
                            card: "bg-emerald-50/70 border-emerald-200/80 text-emerald-950 hover:border-emerald-400 hover:shadow-[0_0_14px_rgba(16,185,129,0.22)]",
                            icon: "text-emerald-700",
                          },
                          {
                            card: "bg-amber-50/70 border-amber-200/80 text-amber-950 hover:border-amber-400 hover:shadow-[0_0_14px_rgba(232,168,62,0.25)]",
                            icon: "text-amber-700",
                          },
                          {
                            card: "bg-teal-50/70 border-teal-200/80 text-teal-950 hover:border-teal-400 hover:shadow-[0_0_14px_rgba(20,184,166,0.22)]",
                            icon: "text-teal-700",
                          },
                        ][i % 3];
                        return (
                          <div
                            key={i}
                            className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg border transition-all duration-300 cursor-default hover:scale-[1.01] ${style.card}`}
                          >
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${style.icon}`} />
                            <span className="truncate font-medium">{h}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Deliverable Capsule with Ambient Radiant Glow */}
                  <div className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-50/80 via-amber-50/60 to-emerald-50/80 border border-emerald-200/80 hover:border-[#E8A83E] hover:shadow-[0_0_16px_rgba(232,168,62,0.22)] transition-all duration-300 flex items-center gap-2.5 font-tech">
                    <span className="text-[10px] font-bold text-[#123C32] uppercase tracking-wider shrink-0 bg-white px-2 py-0.5 rounded border border-[#123C32]/10 shadow-2xs">
                      Deliverable
                    </span>
                    <span className="text-xs font-bold text-[#202724] truncate">
                      {currentPhaseData.deliverable}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Common Questions (FAQs) - Default FAQ #1 Open */}
      <section className="py-6 sm:py-7 lg:py-8 bg-white border-t border-[#E2E8E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <ScrollReveal delay={0}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                Common Questions About Industrial Solar
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={70}>
              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1">
                Clear answers regarding factory uptime, HT grid synchronization, and in-house transformer integration.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-3">
            {industrialFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <ScrollReveal key={idx} delay={idx * 60}>
                  <div className="rounded-xl border border-[#E2E8E2] hover:border-[#E8A83E]/50 hover:shadow-[0_4px_20px_rgba(232,168,62,0.12)] overflow-hidden bg-white shadow-2xs transition-all duration-300">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F7F8F4] transition-colors cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-[#202724] font-heading">
                        {faq.q}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? "bg-[#123C32] text-white" : "bg-black/5 text-[#525D57]"
                        }`}
                      >
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#525D57] leading-relaxed border-t border-[#E2E8E2]/60 text-justify-clean">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Consultation CTA Banner */}
      <section className="py-10 md:py-12 bg-[#E9F0E9] text-[#202724] relative overflow-hidden border-t border-[#E2E8E2]">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#123C32_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal delay={0}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#123C32] tracking-tight leading-tight font-heading mb-3">
              Request Your Free Industrial Plant Feasibility Survey
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={70}>
            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
              Our power infrastructure engineers will assess your plant's sanctioned HT load, analyze shed vibration dynamics, and model a high-capacity solar and transformer solution with zero obligation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                to="/contact?type=industrial#inquiry-form"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-sm font-bold bg-[#123C32] hover:bg-[#1A4D41] text-white shadow-md hover:shadow-lg transition-all duration-300 font-tech tracking-wide group cursor-pointer"
              >
                <span>Schedule Industrial Energy Audit</span>
                <ArrowRight className="w-4 h-4 text-[#E8A83E] group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <a
                href={`tel:${COMPANY_DETAILS.primaryPhoneRaw || "+919770744687"}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-white hover:bg-white/90 text-[#123C32] border border-[#E2E8E2] hover:border-[#123C32]/30 shadow-xs transition-all font-tech"
              >
                <Phone className="w-4 h-4 text-[#123C32]" />
                <span>Call Us: {COMPANY_DETAILS.primaryPhone || "+91 97707 44687"}</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="mt-6 pt-5 border-t border-[#123C32]/10 flex flex-wrap items-center justify-center gap-5 text-xs text-[#525D57] font-tech font-medium">
              <span><strong className="text-[#123C32]">✓</strong> 100% Free HT Feasibility Audit</span>
              <span><strong className="text-[#123C32]">✓</strong> In-House Transformer Integration</span>
              <span><strong className="text-[#123C32]">✓</strong> 25-Year Industrial Performance Warranty</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
