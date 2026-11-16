import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  FileCheck,
  Award,
  Cpu,
  Activity,
  CheckCircle2,
  ArrowRight,
  Phone,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";
import SmartImage from "../components/SmartImage";
import ScrollReveal from "../components/ScrollReveal";

// Solar EPC Dedicated Assets
import topImg from "../assets/solar-epc-assets/top-image.png";
import designImg from "../assets/solar-epc-assets/Plant Design & Engineering.png";
import liaisoningImg from "../assets/solar-epc-assets/Approvals & Liaisoning.png";
import constructionImg from "../assets/solar-epc-assets/Construction & Procurement Management.png";
import omImg from "../assets/solar-epc-assets/O&M.png";

function EpcBenefitCard({
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
      } h-auto lg:h-full`}
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

          {/* Description (Concise 2 lines, naturally proportioned to card width) */}
          <p className="text-[11px] sm:text-xs text-[#E9F0E9]/90 leading-snug text-center w-full px-1 line-clamp-2 mb-1.5">
            {benefit.desc}
          </p>

          {/* Milestone Highlight */}
          <div className="pt-1.5 border-t border-white/10 flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-tech font-bold text-[#E8A83E] text-center w-full truncate">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#E8A83E] shrink-0" />
            <span className="truncate">{benefit.highlight}</span>
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
          <span className="px-2.5 py-0.5 sm:py-1 rounded-full bg-[#123C32]/5 border border-[#123C32]/10 text-[10px] font-tech font-bold text-[#123C32] group-hover:bg-[#E8A83E]/20 group-hover:border-[#E8A83E]/40 group-hover:text-[#9A6208] group-hover:shadow-[0_0_10px_rgba(232,168,62,0.2)] transition-all truncate max-w-full">
            {benefit.stat}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SolarEPCServices() {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [isBenefitHovered, setIsBenefitHovered] = useState(false);
  const benefitTimerRef = useRef(null);

  const [activePhase, setActivePhase] = useState(0);
  const [isPhaseHovered, setIsPhaseHovered] = useState(false);
  const phaseTimerRef = useRef(null);

  // Default first FAQ open as requested
  const [openFaq, setOpenFaq] = useState(0);

  const epcTouchStartX = useRef(0);
  const epcTouchStartY = useRef(0);

  // 5 Focused Solar EPC Benefits (Horizontal Accordion with Cursor Glow)
  const benefits = [
    {
      id: "turnkey",
      icon: Layers,
      title: "Turnkey Scope",
      subtitle: "Design-to-Grid Sync",
      stat: "100% Single-Point Scope",
      desc: "End-to-end execution from topography CAD modeling to high-voltage grid synchronization with absolute accountability.",
      highlight: "Zero Multi-Vendor Friction",
    },
    {
      id: "approvals",
      icon: FileCheck,
      title: "Liaisoning Clearances",
      subtitle: "DISCOM & CEIG Approvals",
      stat: "100% Statutory Clearance",
      desc: "Comprehensive liaisoning for MNRE registration, CEIG electrical safety, SLDC connectivity, and open access PPAs.",
      highlight: "Fast-Track Grid Permits",
    },
    {
      id: "procurement",
      icon: Award,
      title: "Tier-1 Equipment",
      subtitle: "Bankable PV Components",
      stat: "25-Year Linear Yield",
      desc: "Direct procurement of Tier-1 bifacial Mono PERC modules, string/central inverters, and hot-dip galvanized mounting structures.",
      highlight: "Bankable Equipment Spec",
    },
    {
      id: "transformers",
      icon: Cpu,
      title: "In-House Transformers",
      subtitle: "Captive Substation Bays",
      stat: "Zero Harmonic Tripping",
      desc: "Integrated step-up inverter duty transformers manufactured in-house, eliminating third-party lead time bottlenecks.",
      highlight: "Custom Impedance Vectoring",
    },
    {
      id: "scada",
      icon: Activity,
      title: "Guaranteed PR & O&M",
      subtitle: "24/7 Cloud SCADA",
      stat: "99%+ Plant Uptime",
      desc: "Round-the-clock string-level generation telemetry, thermographic drone scans, and automated panel wash schedules.",
      highlight: "Performance Ratio Guaranteed",
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

  // 4 Core EPC Phases (Visual-First, Minimal Text)
  const phases = [
    {
      step: "01",
      name: "Plant Design",
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
      name: "Approvals",
      title: "Approvals & Liaisoning",
      subtitle: "100% Turnkey Regulatory Clearances",
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
      name: "Construction",
      title: "Construction & Procurement",
      subtitle: "Precision Engineering & Zero-Downtime Erection",
      image: constructionImg,
      desc: "Direct procurement of Tier-1 solar modules, hot-dip galvanized mounting structures, and step-up transformers with civil precision.",
      highlights: [
        "Tier-1 Mono PERC & Inverter Procurement",
        "Corrosion-Proof Hot-Dip Galvanized Racking",
        "Zero-Downtime On-Site Turnkey Erection",
      ],
      deliverable: "Fully Erected Solar Substation & High-Voltage Interconnection",
    },
    {
      step: "04",
      name: "O&M Management",
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

  const currentPhaseData = phases[activePhase];

  // Mobile Touch Swipe Handlers for Phase section
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
      if (diffX > 0) {
        // Swiped Left -> Next phase
        setActivePhase((prev) => (prev + 1) % phases.length);
      } else {
        // Swiped Right -> Prev phase
        setActivePhase((prev) => (prev - 1 + phases.length) % phases.length);
      }
    }
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

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
                <h1 className="text-3xl sm:text-4xl lg:text-[34px] xl:text-[38px] font-black tracking-tight text-white leading-[1.14] font-heading text-center mx-auto max-w-lg">
                  Turnkey Solar EPC & <br />
                  <span className="text-[#E8A83E] relative inline-block">
                    Park Development Across India.
                    <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#E8A83E]/25 -z-10 rounded"></span>
                  </span>
                </h1>

                {/* Paragraph Description - Centered */}
                <p className="text-xs sm:text-sm text-[#E9F0E9]/85 leading-relaxed font-normal text-center max-w-lg mx-auto">
                  From initial 3D shadow analysis and state DISCOM liaisoning to multi-megawatt construction and cloud SCADA O&M—delivering India's cleanest, high-performance solar infrastructure backed by in-house power transformers.
                </p>

                {/* CTA Button with Ambient Glow - Centered */}
                <div className="pt-0.5 flex items-center justify-center w-full">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E8A83E] via-amber-300 to-[#E8A83E] rounded-2xl blur-md opacity-30 group-hover:opacity-75 transition duration-500 group-hover:scale-105"></div>
                    <Link
                      to="/enquiry?type=industrial&requirement=Turnkey%20EPC"
                      className="relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/25 transition-all duration-300 font-tech tracking-wide cursor-pointer"
                    >
                      <span>Consult Our Solar EPC Team</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>

                {/* Metrics Bar - Centered */}
                <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-3 font-tech w-full max-w-lg mx-auto text-center">
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">125+ MW</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      Executed Across India
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">100% Turnkey</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      Design to Grid Sync
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">4 Hubs</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      Delhi, Indore, Dewas, Bhopal
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
                      src={topImg}
                      alt="Proton Power Infra Turnkey Solar EPC & Solar Park Execution"
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
                      <span>EPC Solar Park • Commissioned</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#202724]/85 backdrop-blur-md text-[9px] font-mono text-[#E9F0E9] border border-white/10">
                      <span>22.71° N, 75.85° E</span>
                    </div>
                  </div>

                  {/* Bottom Spec Capsule */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 sm:p-4 rounded-xl bg-black/70 backdrop-blur-md shadow-lg border border-white/15 z-20">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-pulse shrink-0"></span>
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-tech truncate">
                          Utility-Scale & Industrial Solar EPC
                        </span>
                      </div>
                      <span className="text-[9px] font-bold text-[#123C32] bg-[#E8A83E] px-2 py-0.5 rounded font-tech shrink-0">
                        TURNKEY EPC
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-snug line-clamp-2">
                      Integrated EPC execution backed by our in-house power transformer manufacturing and CEIG statutory liaisoning.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section 2 — Benefits of Solar EPC Services (Compact Horizontal Accordion, Trimmed Padding, Zero Empty Space) */}
      <section className="py-6 sm:py-7 lg:py-8 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Centered without badge, expanded max-w to prevent awkward word wrap */}
          <div className="max-w-5xl mx-auto mb-4 sm:mb-5 text-center flex flex-col items-center">
            <ScrollReveal delay={0}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#202724] tracking-tight leading-tight font-heading text-center">
                Engineered for High-Yield Solar Infrastructure
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={70}>
              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1 font-normal text-center max-w-xl mx-auto">
                Single-source turnkey EPC backed by in-house power transformer manufacturing and certified grid liaisoning.
              </p>
            </ScrollReveal>
          </div>

          {/* 5 Cards in Same Line: Horizontal Expanding Accordion (Compact 230px Height, Equal Top & Bottom Distance) */}
          <ScrollReveal delay={120}>
            <div className="flex flex-col lg:flex-row gap-2.5 sm:gap-3 h-auto lg:h-[230px] items-stretch">
              {benefits.map((b, idx) => (
                <EpcBenefitCard
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

      {/* 3. Section 3 — The 4 Phases of Our Turnkey EPC Scope (Auto-Cycles every 2.0s, Pauses on Hover) */}
      <section
        id="epc-phases"
        className="py-6 sm:py-7 lg:py-8 bg-[#F7F8F4] scroll-mt-20"
        onMouseEnter={() => setIsPhaseHovered(true)}
        onMouseLeave={() => setIsPhaseHovered(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Centered without badge */}
          <div className="max-w-5xl mx-auto mb-4 sm:mb-5 text-center flex flex-col items-center">
            <ScrollReveal delay={0}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#202724] tracking-tight leading-tight font-heading text-center">
                The 4 Phases of Our Turnkey EPC Scope
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={70}>
              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1 font-normal text-center max-w-xl mx-auto">
                From initial 3D topographical CAD to high-voltage grid synchronization and 24/7 cloud SCADA operations.
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
              onTouchStart={handleEpcTouchStart}
              onTouchEnd={handleEpcTouchEnd}
              onPointerDown={handleEpcTouchStart}
              onPointerUp={handleEpcTouchEnd}
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
                Common Questions About Turnkey Solar EPC
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={70}>
              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1">
                Clear technical answers regarding DISCOM approvals, in-house transformers, and project timelines.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-3">
            {epcFaqs.map((faq, idx) => {
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
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#525D57] leading-relaxed border-t border-[#E2E8E2]/60">
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
      <section className="py-10 md:py-10 lg:py-10 bg-[#123C32] text-white relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal delay={0}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight font-heading mb-3">
              Request Your Turnkey EPC Feasibility Study
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={70}>
            <p className="text-xs sm:text-sm text-[#E9F0E9]/85 leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
              Speak with our senior solar EPC engineers to evaluate site topography, power evacuation, and guaranteed performance ratio (PR) modeling with zero obligation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                to="/enquiry?type=industrial&requirement=Turnkey%20EPC"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#E8A83E]/20 transition-all duration-300 font-tech tracking-wide group cursor-pointer"
              >
                <span>Schedule Solar EPC Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <a
                href={`tel:${COMPANY_DETAILS.primaryPhoneRaw || "+919770744687"}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all font-tech"
              >
                <Phone className="w-4 h-4 text-[#E8A83E]" />
                <span>Call Us: {COMPANY_DETAILS.primaryPhone || "+91 97707 44687"}</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-5 text-xs text-[#E9F0E9]/75 font-tech">
              <span>✓ 100% Turnkey Scope Execution</span>
              <span>✓ Complete CEIG & DISCOM Clearances</span>
              <span>✓ Guaranteed Performance Ratio (PR)</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
