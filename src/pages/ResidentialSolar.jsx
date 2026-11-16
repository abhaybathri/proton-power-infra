import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  DollarSign,
  Shield,
  Leaf,
  TrendingUp,
  Award,
  Activity,
  FileCheck,
  Wrench,
  Zap,
  Phone,
  Sparkles,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { FAQS, COMPANY_DETAILS } from "../data/companyData";
import SmartImage from "../components/SmartImage";
import ScrollReveal from "../components/ScrollReveal";

// Residential Assets
import topImage from "../assets/residential-solar-assets/top-image.png";
import siteAssesmentImg from "../assets/residential-solar-assets/site-assesment-phase.png";
import customizeDesignImg from "../assets/residential-solar-assets/customize-design-phase.png";
import installationImg from "../assets/residential-solar-assets/installation-phase.png";
import systemInstallationImg from "../assets/residential-solar-assets/system-installation-phase.png";
import whyChooseImg from "../assets/residential-solar-assets/why-choose-image.jpg";

export default function ResidentialSolar() {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [isBenefitHovered, setIsBenefitHovered] = useState(false);
  const benefitTimerRef = useRef(null);

  const [activePhase, setActivePhase] = useState(0);
  // Default first FAQ open as requested
  const [openFaq, setOpenFaq] = useState(0);

  const phaseTouchStartX = useRef(0);
  const phaseTouchStartY = useRef(0);

  // 5 Focused Residential Solar Benefits (Auto-cycling spotlight + manual hover precedence)
  const benefits = [
    {
      id: "savings",
      number: "01",
      icon: DollarSign,
      title: "Cost Savings",
      subtitle: "Slash Monthly Bills",
      stat: "Up to 90%",
      statLabel: "Bill Reduction",
      desc: "Cut electricity bills drastically by generating your own clean power from the sun, converting terrace space into financial yield.",
      highlight: "₹45,000+ Annual Household Savings",
    },
    {
      id: "independence",
      number: "02",
      icon: Shield,
      title: "Energy Independence",
      subtitle: "Hedge Tariff Hikes",
      stat: "25 Years",
      statLabel: "Price Stability",
      desc: "Protect your family from unpredictable utility grid rate hikes with captive clean solar generation that remains steady for decades.",
      highlight: "Shielded Against 5–8% Annual Hikes",
    },
    {
      id: "eco",
      number: "03",
      icon: Leaf,
      title: "Eco-Friendly Living",
      subtitle: "Shrink Carbon Footprint",
      stat: "~4.5 Tons",
      statLabel: "CO2 Offset / Year",
      desc: "Lower carbon emissions permanently. A 5 kWp home system offsets ~4.5 tons of CO2 yearly—equal to planting 100+ trees.",
      highlight: "Offsets 100+ Mature Trees Annually",
    },
    {
      id: "valuation",
      number: "04",
      icon: TrendingUp,
      title: "Property Value",
      subtitle: "Smart Home Asset",
      stat: "+4% to 6%",
      statLabel: "Home Resale Value",
      desc: "Certified rooftop solar systems demonstrably enhance long-term property appraisal values, attracting premium homebuyers.",
      highlight: "Appraised as a Self-Powered Home",
    },
    {
      id: "subsidy",
      number: "05",
      icon: Award,
      title: "Govt Subsidies",
      subtitle: "PM Surya Ghar Yojana",
      stat: "Up to ₹78,000",
      statLabel: "Direct DBT Benefit",
      desc: "Receive direct DBT subsidies up to ₹78,000 credited to your bank account, paired with seamless net-metering support.",
      highlight: "Direct DBT Bank Transfer Assistance",
    },
  ];

  // Auto-Cycle Spotlight for Section 2 (Every 1.8 seconds)
  useEffect(() => {
    if (isBenefitHovered) return;

    benefitTimerRef.current = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefits.length);
    }, 1800);

    return () => {
      if (benefitTimerRef.current) clearInterval(benefitTimerRef.current);
    };
  }, [isBenefitHovered, benefits.length]);

  // 4 Process Phases (Clean, streamlined & non-repetitive)
  const phases = [
    {
      step: "01",
      name: "Site Survey",
      title: "Site Assessment & Shadow Analysis",
      subtitle: "Precision On-Site Rooftop Engineering",
      image: siteAssesmentImg,
      icon: Activity,
      desc: "Our solar engineers inspect rooftop structural integrity, 3D sun-path orientation, and analyze historical electricity bills to calculate optimal system capacity.",
      highlights: [
        "3D Irradiance & Shadow Modeling",
        "Rooftop Load Capacity Inspection",
        "Connected Load Optimization",
      ],
      deliverable: "Feasibility Report, Shadow Map & Recommended kWp",
    },
    {
      step: "02",
      name: "3D CAD Design",
      title: "Customized 3D Layout & Electrical CAD",
      subtitle: "Bespoke Architectural Integration",
      image: customizeDesignImg,
      icon: FileCheck,
      desc: "We design a customized rooftop layout tailored to your terrace lifestyle—balancing maximum solar energy yield with usable living space and clean aesthetics.",
      highlights: [
        "Elevated / Walkable Frame Layouts",
        "Tier-1 Mono PERC & Inverter Spec",
        "DISCOM-Compliant Single Line Diagram",
      ],
      deliverable: "Photorealistic 3D Blueprint & Generation Yield Estimate",
    },
    {
      step: "03",
      name: "Installation",
      title: "Precision Mechanical & Electrical Installation",
      subtitle: "Zero-Waterproofing Compromise",
      image: installationImg,
      icon: Wrench,
      desc: "Certified technicians erect corrosion-resistant hot-dip galvanized mounting structures with non-penetrating clamps and chemical anchoring to guarantee zero leakage.",
      highlights: [
        "Hot-Dip Galvanized Frames",
        "Zero-Leak Chemical Anchoring",
        "Dual Earthing & Lightning Arrester",
      ],
      deliverable: "Structural Safety Sign-Off & Turnkey Equipment Commissioning",
    },
    {
      step: "04",
      name: "Net-Metering",
      title: "DISCOM Net-Metering & Live Telemetry",
      subtitle: "Grid Synchronization & Smart App Tracking",
      image: systemInstallationImg,
      icon: Zap,
      desc: "We handle complete MPPKVVCL / DISCOM net-metering liaisoning, CEIG safety approval, and grid synchronization with real-time smartphone telemetry.",
      highlights: [
        "MPPKVVCL Net-Meter Liaisoning",
        "Bi-Directional Meter Synchronization",
        "Real-Time IoT Mobile App Telemetry",
      ],
      deliverable: "Bi-Directional Net-Meter Activation & Subsidy DBT Processing",
    },
  ];

  const currentPhaseData = phases[activePhase];

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

  return (
    <div className="pt-20 bg-[#F7F8F4] text-[#252A27]">
      {/* 1. Hero Section - Engineered & Proportionate */}
      <section className="relative overflow-hidden pt-10 pb-10 md:pt-14 md:pb-12 lg:pt-12 lg:pb-12 bg-[#123C32] text-white">
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px]"></div>

        {/* Ambient lighting glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E8A83E]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              <ScrollReveal delay={0}>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#E8A83E]/20 border border-[#E8A83E]/40 text-[#E8A83E] text-xs font-bold tracking-wider uppercase font-tech">
                  <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-pulse"></span>
                  <span>Residential Solar Solutions • 3 kW to 25 kW</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={70}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.12] font-heading">
                  Empower Your Home with <br />
                  <span className="text-[#E8A83E] relative inline-block">
                    Clean Solar Energy.
                    <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#E8A83E]/25 -z-10 rounded"></span>
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <p className="text-sm sm:text-base text-[#E9F0E9]/85 leading-relaxed font-normal text-justify-clean max-w-xl">
                  At Proton Power Infra, we bring industrial-grade engineering to residential rooftops across Indore and India. Generate your own clean electricity, safeguard your family against rising utility tariffs, and transition to reliable solar power with seamless PM Surya Ghar subsidy support.
                </p>
              </ScrollReveal>

              {/* Clean CTA with Ambient Glow */}
              <ScrollReveal delay={160}>
                <div className="pt-1 flex items-center justify-start">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E8A83E] via-amber-300 to-[#E8A83E] rounded-2xl blur-md opacity-30 group-hover:opacity-75 transition duration-500 group-hover:scale-105"></div>
                    <Link
                      to="/enquiry?type=residential"
                      className="relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/25 transition-all duration-300 font-tech tracking-wide cursor-pointer"
                    >
                      <span>Request Free Home Solar Audit</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Compact Metrics Bar */}
              <ScrollReveal delay={200}>
                <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-3 font-tech max-w-xl">
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">3 – 25 kW</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      Household Range
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">Up to 90%</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      Monthly Savings
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">25-Year</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      Linear Warranty
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Visual Capsule: SmartImage with progressive shimmer & zero green gap */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={140}>
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/90 bg-neutral-900 group select-none">
                  {/* Photo Frame */}
                  <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[350px] overflow-hidden bg-black/40">
                    <SmartImage
                      src={topImage}
                      alt="Proton Power Infra Premium Residential Rooftop Solar Installation"
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
                      <span>Residential Array • Active</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#202724]/85 backdrop-blur-md text-[9px] font-mono text-[#E9F0E9] border border-white/10">
                      <span>22.71° N, 75.85° E</span>
                    </div>
                  </div>

                  {/* Bottom Spec Capsule */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 sm:p-3.5 rounded-xl bg-black/70 backdrop-blur-md shadow-lg border border-white/15 z-20">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-pulse"></span>
                        <span className="text-xs font-bold text-white uppercase tracking-wider font-tech truncate">
                          High-Yield Monocrystalline Array
                        </span>
                      </div>
                      <span className="text-[9px] font-bold text-[#123C32] bg-[#E8A83E] px-2 py-0.5 rounded font-tech shrink-0">
                        PM SURYA GHAR
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-snug line-clamp-2">
                      Custom-engineered rooftop installations designed for independent villas, bungalows, and residential societies.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section 2 — Benefits of Residential Solar (Automated Luminous Spotlight Bento) */}
      <section className="py-10 md:py-10 lg:py-10 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-6 sm:mb-8 text-left">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#E8A83E]" />
                <span>Benefits of Residential Solar</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={70}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                Why Homeowners Across India Are Choosing Solar
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1 font-normal">
                Transform unused terrace space into a high-return clean energy asset with guaranteed linear yield for 25 years.
              </p>
            </ScrollReveal>
          </div>

          {/* 5-Card Bento with Automated Cycling Spotlight + Zero Empty Space */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-3.5 items-stretch">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              const isActive = activeBenefit === idx;

              return (
                <ScrollReveal key={b.id} delay={idx * 70} className="h-full">
                  <div
                    onMouseEnter={() => {
                      setIsBenefitHovered(true);
                      setActiveBenefit(idx);
                    }}
                    onMouseLeave={() => setIsBenefitHovered(false)}
                    onClick={() => setActiveBenefit(idx)}
                    className={`relative rounded-2xl p-4 sm:p-5 border transition-all duration-500 cursor-pointer flex flex-col justify-between h-full select-none ${
                      isActive
                        ? "bg-[#123C32] text-white border-[#E8A83E] shadow-xl shadow-[#E8A83E]/20 -translate-y-2 ring-2 ring-[#E8A83E]/50"
                        : "bg-white text-[#252A27] border-[#E2E8E2] hover:border-[#E8A83E]/60 shadow-2xs hover:shadow-lg"
                    }`}
                  >
                    {/* Top Row: Radiant Icon & Stat Badge */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-br from-amber-100 to-amber-200 text-amber-950 border border-amber-400 scale-110 shadow-[0_0_20px_rgba(232,168,62,0.45)]"
                              : "bg-[#E9F0E9] border border-[#123C32]/10 text-[#123C32]"
                          }`}
                        >
                          <Icon className="w-5 h-5 stroke-[2.2]" />
                        </div>

                        <span
                          className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md transition-colors ${
                            isActive
                              ? "bg-[#E8A83E] text-[#123C32] font-black"
                              : "bg-[#123C32]/5 text-[#123C32] border border-[#123C32]/10"
                          }`}
                        >
                          {b.number}
                        </span>
                      </div>

                      {/* Stat & Title */}
                      <div className="mb-2">
                        <div
                          className={`text-xl sm:text-2xl font-black font-tech tracking-tight transition-colors ${
                            isActive ? "text-[#E8A83E]" : "text-[#123C32]"
                          }`}
                        >
                          {b.stat}
                        </div>
                        <h3
                          className={`text-sm sm:text-base font-bold font-heading mt-0.5 tracking-tight transition-colors ${
                            isActive ? "text-white" : "text-[#202724]"
                          }`}
                        >
                          {b.title}
                        </h3>
                        <div
                          className={`text-[10px] font-mono font-bold uppercase tracking-wider mt-0.5 ${
                            isActive ? "text-amber-200" : "text-[#E8A83E]"
                          }`}
                        >
                          {b.subtitle}
                        </div>
                      </div>

                      {/* Description: Perfectly filled, ZERO empty space */}
                      <p
                        className={`text-xs leading-relaxed transition-colors ${
                          isActive ? "text-[#E9F0E9]/90" : "text-[#525D57]"
                        }`}
                      >
                        {b.desc}
                      </p>
                    </div>

                    {/* Bottom Micro-Badge: Crisp & Saturated */}
                    <div
                      className={`pt-3 mt-3 border-t text-[11px] font-tech font-bold transition-colors ${
                        isActive
                          ? "border-white/15 text-[#E8A83E]"
                          : "border-[#E2E8E2] text-[#123C32]"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isActive ? "text-[#E8A83E]" : "text-[#123C32]"
                          }`}
                        />
                        <span className="truncate">{b.highlight}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Section 3 — How We Bring Solar (Streamlined & Non-Repetitive Phase Story) */}
      <section id="process" className="py-10 md:py-10 lg:py-10 bg-[#F7F8F4] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
            <div className="text-left">
              <ScrollReveal delay={0}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-pulse"></span>
                  <span>Execution Journey</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={70}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                  How We Bring Solar to Your Home
                </h2>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={120}>
              <p className="text-xs sm:text-sm text-[#525D57] max-w-md leading-relaxed md:text-right">
                A seamless 4-phase turnkey story engineered for maximum yield and zero household disruption.
              </p>
            </ScrollReveal>
          </div>

          {/* Single Streamlined Phase Stepper Rail (Replaces redundant top/bottom buttons) */}
          <ScrollReveal delay={150}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-5">
              {phases.map((ph, idx) => {
                const isActive = activePhase === idx;
                return (
                  <button
                    key={ph.step}
                    type="button"
                    onClick={() => setActivePhase(idx)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer font-tech flex items-center justify-between ${
                      isActive
                        ? "bg-[#123C32] text-white border-[#E8A83E] shadow-md ring-2 ring-[#E8A83E]/40"
                        : "bg-white text-[#202724] border-[#E2E8E2] hover:border-[#123C32]/30 hover:bg-[#F7F8F4]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                          isActive ? "bg-[#E8A83E] text-[#123C32]" : "bg-[#123C32]/10 text-[#123C32]"
                        }`}
                      >
                        {ph.step}
                      </div>
                      <div className="truncate">
                        <div className="text-xs sm:text-sm font-bold truncate">
                          {ph.name}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-mono font-bold ${
                        isActive ? "text-[#E8A83E]" : "text-gray-400"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Active Phase Story Stage with Mobile Touch Swipe & Prev/Next Navigation */}
          <ScrollReveal delay={200}>
            <div
              className="bg-white rounded-2xl border border-[#E2E8E2] overflow-hidden shadow-lg p-5 sm:p-6 lg:p-7 select-none"
              onTouchStart={handlePhaseTouchStart}
              onTouchEnd={handlePhaseTouchEnd}
              onPointerDown={handlePhaseTouchStart}
              onPointerUp={handlePhaseTouchEnd}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                {/* Left Column: Phase Photograph with SmartImage Lazy Loading */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-xl overflow-hidden shadow-sm border border-[#E2E8E2] bg-neutral-900 group">
                    <div className="relative h-52 sm:h-64 lg:h-[270px] overflow-hidden">
                      <SmartImage
                        src={currentPhaseData.image}
                        alt={currentPhaseData.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                        containerClassName="w-full h-full absolute inset-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>
                    </div>

                    {/* Clean Tag */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
                      <span className="px-3 py-1 rounded-full text-[11px] font-black tracking-wide uppercase bg-[#123C32] text-[#E8A83E] shadow-sm font-tech border border-[#E8A83E]/30">
                        Phase {currentPhaseData.step} Execution
                      </span>
                    </div>

                    {/* Subtitle Bar */}
                    <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium font-tech truncate pointer-events-none">
                      {currentPhaseData.subtitle}
                    </div>
                  </div>
                </div>

                {/* Right Column: Clean Story Narrative & Engineering Checkpoints */}
                <div className="lg:col-span-7 space-y-4 text-left flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold text-[#E8A83E] uppercase tracking-wider mb-1">
                      {currentPhaseData.subtitle}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#202724] font-heading tracking-tight leading-snug">
                      {currentPhaseData.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                    {currentPhaseData.desc}
                  </p>

                  {/* Key Engineering Checkpoints */}
                  <div>
                    <div className="text-[11px] font-bold text-[#202724] uppercase tracking-wider font-tech mb-2">
                      Engineering Checkpoints:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#202724]">
                      {currentPhaseData.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#123C32] shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverable Capsule */}
                  <div className="px-3.5 py-2.5 rounded-xl bg-[#E9F0E9] border border-[#123C32]/15 flex items-center gap-2.5 font-tech">
                    <span className="text-[10px] font-bold text-[#123C32] uppercase tracking-wider shrink-0 bg-white px-2 py-0.5 rounded border border-[#123C32]/10">
                      Deliverable
                    </span>
                    <span className="text-xs font-bold text-[#202724] truncate">
                      {currentPhaseData.deliverable}
                    </span>
                  </div>

                  {/* Clean Single Prev / Next Controls */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#E2E8E2]">
                    <button
                      type="button"
                      onClick={() => setActivePhase((prev) => (prev - 1 + phases.length) % phases.length)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#525D57] hover:text-[#123C32] px-3 py-1.5 rounded-lg hover:bg-black/5 transition-colors cursor-pointer font-tech"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous Phase</span>
                    </button>

                    {/* Simple Step Indicator */}
                    <span className="text-xs font-mono font-bold text-[#123C32]">
                      0{activePhase + 1} / 04
                    </span>

                    <button
                      type="button"
                      onClick={() => setActivePhase((prev) => (prev + 1) % phases.length)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123C32] hover:text-[#1A4D41] px-3 py-1.5 rounded-lg hover:bg-black/5 transition-colors cursor-pointer font-tech"
                    >
                      <span>Next Phase</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Section 4 — Engineered for Household Reliability */}
      <section className="py-10 md:py-10 lg:py-10 bg-white border-y border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image Column using SmartImage */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={80}>
                <div className="relative rounded-2xl overflow-hidden border border-[#E2E8E2] shadow-md group">
                  <div className="relative w-full h-72 sm:h-80 overflow-hidden">
                    <SmartImage
                      src={whyChooseImg}
                      alt="Proton Power Infra Engineered Residential Rooftop Solar"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      containerClassName="w-full h-full absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/90 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white font-tech pointer-events-none">
                    <span className="text-xs font-bold">Terrace Preservation & Waterproofing</span>
                    <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded">
                      25-YR DURABILITY
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Technical Highlights */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <ScrollReveal delay={0}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8A83E]" />
                  <span>Engineering Discipline</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={70}>
                <h2 className="text-2xl sm:text-3xl font-black text-[#202724] font-heading tracking-tight leading-tight">
                  Engineered for 25 Years of Household Reliability
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                  We bring the same industrial-grade engineering discipline to home rooftops that we apply to multi-megawatt utility solar parks:
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-tech">
                <ScrollReveal delay={150}>
                  <div className="p-3.5 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] h-full">
                    <div className="text-xs font-bold text-[#123C32] mb-1">
                      ✓ High-Conversion Mono PERC
                    </div>
                    <p className="text-[11px] text-[#525D57] leading-normal">
                      Tier-1 half-cut bifacial panels designed to deliver maximum generation even under severe 45°C summer heat.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={180}>
                  <div className="p-3.5 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] h-full">
                    <div className="text-xs font-bold text-[#123C32] mb-1">
                      ✓ Zero Roof Puncture Technology
                    </div>
                    <p className="text-[11px] text-[#525D57] leading-normal">
                      Chemical anchor fastenings or elevated pergolas that preserve full terrace usability and eliminate water seepage.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={210}>
                  <div className="p-3.5 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] h-full">
                    <div className="text-xs font-bold text-[#123C32] mb-1">
                      ✓ Complete PM Surya Ghar Subsidy
                    </div>
                    <p className="text-[11px] text-[#525D57] leading-normal">
                      End-to-end documentation assistance to ensure your direct bank transfer subsidy (up to ₹78,000) is credited promptly.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={240}>
                  <div className="p-3.5 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] h-full">
                    <div className="text-xs font-bold text-[#123C32] mb-1">
                      ✓ Rapid Local Indore Mobilization
                    </div>
                    <p className="text-[11px] text-[#525D57] leading-normal">
                      Headquartered in Indore with quick-dispatch service engineers for proactive O&M and warranty assistance.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Common Questions (FAQs) - Default FAQ #1 Open */}
      <section className="py-10 md:py-10 lg:py-10 bg-[#F7F8F4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-2">
                <span>Residential FAQs</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={70}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                Common Questions About Home Solar
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1">
                Clear answers regarding subsidies, terrace space requirements, and net-metering timelines.
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-3">
            {FAQS.residential.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <ScrollReveal key={idx} delay={idx * 60}>
                  <div className="rounded-xl border border-[#E2E8E2] overflow-hidden bg-white shadow-2xs transition-all">
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

      {/* 6. Consultation CTA Banner */}
      <section className="py-10 md:py-10 lg:py-10 bg-[#123C32] text-white relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold uppercase tracking-wider border border-[#E8A83E]/40 font-tech mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready to Power Your Home with Clean Energy?</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={70}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight font-heading mb-3">
              Request Your Free Home Solar Feasibility Survey
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <p className="text-xs sm:text-sm text-[#E9F0E9]/85 leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
              Our certified solar engineers will inspect your terrace, calculate shadow-free capacity, and provide an accurate cost and PM Surya Ghar subsidy simulation with zero obligation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                to="/enquiry?type=residential"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#E8A83E]/20 transition-all duration-300 font-tech tracking-wide group cursor-pointer"
              >
                <span>Schedule Free On-Site Survey</span>
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

          <ScrollReveal delay={200}>
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-5 text-xs text-[#E9F0E9]/75 font-tech">
              <span>✓ 100% Free On-Site Inspection</span>
              <span>✓ PM Surya Ghar Subsidy Assistance</span>
              <span>✓ 25-Year Performance Warranty</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
