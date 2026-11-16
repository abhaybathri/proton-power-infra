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

function BenefitCard({
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
      className={`relative rounded-2xl p-[1.5px] transition-all duration-500 ease-in-out cursor-pointer select-none group min-w-0 ${
        isActive ? "lg:flex-[1.45]" : "lg:flex-1"
      } h-auto lg:h-full`}
    >
      {/* Dynamic Cursor-Responsive Border Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isMouseOver ? 1 : isActive ? 0.75 : 0.25,
          background: isMouseOver
            ? `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.95), rgba(232, 168, 62, 0.35) 45%, rgba(18, 60, 50, 0.2) 75%, transparent 100%)`
            : isActive
            ? `linear-gradient(135deg, rgba(232, 168, 62, 0.8), rgba(18, 60, 50, 0.4), rgba(232, 168, 62, 0.6))`
            : `rgba(226, 232, 226, 0.8)`,
        }}
      />

      {/* Inner Card Surface: Perfectly centered vertically with equal top and bottom distance */}
      <div
        className={`relative rounded-[14.5px] p-3 sm:p-3.5 lg:p-4 transition-all duration-500 overflow-hidden flex flex-col items-center text-center justify-center h-full w-full ${
          isActive
            ? "bg-[#123C32] text-white shadow-xl shadow-black/20"
            : "bg-white text-[#252A27] shadow-xs hover:shadow-md hover:bg-neutral-50"
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
            className={`rounded-xl flex items-center justify-center shrink-0 mx-auto transition-all duration-500 ${
              isActive
                ? "w-8 h-8 sm:w-9 sm:h-9 bg-[#E8A83E] text-[#123C32] shadow-[0_0_16px_rgba(232,168,62,0.4)] mb-1"
                : "w-9 h-9 sm:w-10 sm:h-10 bg-[#E9F0E9] border border-[#123C32]/10 text-[#123C32] group-hover:bg-amber-100 group-hover:text-amber-950 group-hover:border-amber-300 mb-1.5"
            }`}
          >
            <Icon className={`stroke-[2.2] transition-all duration-300 ${isActive ? "w-4 h-4 sm:w-4.5 sm:h-4.5" : "w-4.5 h-4.5 sm:w-5 sm:h-5"}`} />
          </div>

          {/* Heading */}
          <h3
            className={`font-black font-heading tracking-tight transition-all duration-500 text-center mx-auto ${
              isActive
                ? "text-xs sm:text-sm lg:text-base text-white mb-0.5"
                : "text-xs sm:text-sm lg:text-[15px] text-[#202724] group-hover:text-[#123C32] max-w-[145px] leading-snug mb-1"
            }`}
          >
            {benefit.title}
          </h3>

          {/* Subheading */}
          <div
            className={`font-mono font-bold uppercase tracking-wider transition-colors duration-300 text-center mx-auto ${
              isActive
                ? "text-[9px] sm:text-[10px] text-[#E8A83E]"
                : "text-[9px] sm:text-[10px] text-[#525D57] group-hover:text-[#E8A83E]"
            }`}
          >
            {benefit.subtitle}
          </div>
        </div>

        {/* Active Expanded Details: Stat + Description + Milestone (Appears smoothly when active/hovered) */}
        <div
          className={`relative z-10 w-full flex flex-col items-center text-center transition-all duration-500 ease-out ${
            isActive
              ? "opacity-100 max-h-40 my-1 pointer-events-auto"
              : "opacity-0 max-h-0 overflow-hidden pointer-events-none my-0"
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

        {/* Inactive Bottom Metric Capsule: Centered with equal top and bottom spacing */}
        <div
          className={`relative z-10 w-full flex items-center justify-center transition-all duration-500 ${
            isActive
              ? "opacity-0 max-h-0 overflow-hidden pointer-events-none mt-0"
              : "opacity-100 max-h-10 mt-2"
          }`}
        >
          <span className="px-2.5 py-0.5 sm:py-1 rounded-full bg-[#123C32]/5 border border-[#123C32]/10 text-[10px] font-tech font-bold text-[#123C32] group-hover:bg-[#E8A83E]/15 group-hover:border-[#E8A83E]/30 group-hover:text-[#9A6208] transition-all truncate max-w-full">
            {benefit.stat}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ResidentialSolar() {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [isBenefitHovered, setIsBenefitHovered] = useState(false);
  const benefitTimerRef = useRef(null);

  const [activePhase, setActivePhase] = useState(0);
  // Default first FAQ open as requested
  const [openFaq, setOpenFaq] = useState(0);

  const phaseTouchStartX = useRef(0);
  const phaseTouchStartY = useRef(0);

  // 5 Focused Residential Solar Benefits (Compact Cards in Same Line with Hover Expansion & Zero Numbers)
  const benefits = [
    {
      id: "savings",
      icon: DollarSign,
      title: "Cost Savings",
      subtitle: "Slash Monthly Bills",
      stat: "Up to 90% Bill Reduction",
      desc: "Cut electricity bills drastically by generating your own clean power from the sun, converting terrace space into financial yield.",
      highlight: "₹45,000+ Annual Savings",
    },
    {
      id: "independence",
      icon: Shield,
      title: "Independence",
      subtitle: "Hedge Tariff Hikes",
      stat: "25 Years Price Stability",
      desc: "Protect your family from unpredictable utility grid rate hikes with captive clean solar generation that remains steady for decades.",
      highlight: "Shielded Against 5–8% Hikes",
    },
    {
      id: "eco",
      icon: Leaf,
      title: "Eco-Friendly Living",
      subtitle: "Shrink Carbon Footprint",
      stat: "~4.5 Tons CO2 Offset / Year",
      desc: "Lower carbon emissions permanently. A 5 kWp home system offsets ~4.5 tons of CO2 yearly—equal to planting 100+ trees.",
      highlight: "Offsets 100+ Trees Annually",
    },
    {
      id: "valuation",
      icon: TrendingUp,
      title: "Property Value",
      subtitle: "Smart Home Asset",
      stat: "+4% to 6% Home Resale Value",
      desc: "Certified rooftop solar systems demonstrably enhance long-term property appraisal values, attracting premium homebuyers.",
      highlight: "Appraised as a Smart Home",
    },
    {
      id: "subsidy",
      icon: Award,
      title: "Govt Subsidies",
      subtitle: "PM Surya Ghar Yojana",
      stat: "Up to ₹78,000 Direct DBT",
      desc: "Receive direct DBT subsidies up to ₹78,000 credited to your bank account, paired with seamless net-metering support.",
      highlight: "Direct DBT Bank Transfer",
    },
  ];

  // Auto-Cycle Spotlight for Section 2 (Every 2.0 seconds as requested)
  useEffect(() => {
    if (isBenefitHovered) return;

    benefitTimerRef.current = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefits.length);
    }, 2000);

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
      {/* 1. Hero Section - Equal Width & Height, Centered Content */}
      <section className="relative overflow-hidden pt-10 pb-10 md:pt-14 md:pb-12 lg:pt-12 lg:pb-12 bg-[#123C32] text-white">
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px]"></div>

        {/* Ambient lighting glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E8A83E]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left Content Column - Equal 50% Width, Matching Height, All Text & Buttons Centered */}
            <div className="flex flex-col h-full w-full">
              <ScrollReveal delay={0} className="h-full flex flex-col justify-between items-center text-center space-y-4 sm:space-y-5 py-1">
                {/* Eyebrow Badge - Centered */}
                

                {/* Heading - Centered */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.12] font-heading text-center mx-auto max-w-lg">
                  Empower Your Home with <br />
                  <span className="text-[#E8A83E] relative inline-block">
                    Clean Solar Energy.
                    <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#E8A83E]/25 -z-10 rounded"></span>
                  </span>
                </h1>

                {/* Paragraph Description - Centered */}
                <p className="text-sm sm:text-base text-[#E9F0E9]/85 leading-relaxed font-normal text-center max-w-lg mx-auto">
                  At Proton Power Infra, we bring industrial-grade engineering to residential rooftops across Indore and India. Generate your own clean electricity, safeguard your family against rising utility tariffs, and transition to reliable solar power with seamless PM Surya Ghar subsidy support.
                </p>

                {/* CTA Button with Ambient Glow - Centered */}
                <div className="pt-1 flex items-center justify-center w-full">
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

                {/* Metrics Bar - Centered */}
                <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-3 font-tech w-full max-w-lg mx-auto text-center">
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

            {/* Right Visual Capsule - Equal 50% Width, Matching Height */}
            <div className="flex flex-col h-full w-full">
              <ScrollReveal delay={140} className="h-full flex flex-col">
                <div className="relative w-full h-full min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/90 bg-neutral-900 group select-none flex flex-col justify-between">
                  {/* Photo Frame (Full Height Edge-to-Edge) */}
                  <div className="relative w-full h-full min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] overflow-hidden bg-black/40">
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
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 sm:p-4 rounded-xl bg-black/70 backdrop-blur-md shadow-lg border border-white/15 z-20">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-pulse shrink-0"></span>
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

      {/* 2. Section 2 — Benefits of Residential Solar (Compact Horizontal Accordion, Trimmed Padding, Zero Empty Space) */}
      <section className="py-6 sm:py-7 lg:py-8 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Centered */}
          <div className="max-w-3xl mx-auto mb-4 sm:mb-5 text-center flex flex-col items-center">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E8A83E]" />
                <span>Benefits of Residential Solar</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={70}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#202724] tracking-tight leading-tight font-heading text-center">
                Why Homeowners Across India Are Choosing Solar
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1 font-normal text-center max-w-xl mx-auto">
                Transform unused terrace space into a high-return clean energy asset with guaranteed linear yield for 25 years.
              </p>
            </ScrollReveal>
          </div>

          {/* 5 Cards in Same Line: Horizontal Expanding Accordion (Compact 230px Height, Equal Top & Bottom Distance) */}
          <ScrollReveal delay={150}>
            <div className="flex flex-col lg:flex-row gap-2.5 sm:gap-3 h-auto lg:h-[230px] items-stretch">
              {benefits.map((b, idx) => (
                <BenefitCard
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

      {/* 3. Section 3 — How We Bring Solar (Streamlined & Non-Repetitive Phase Story) */}
      <section id="process" className="py-6 sm:py-7 lg:py-8 bg-[#F7F8F4] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Centered */}
          <div className="max-w-3xl mx-auto mb-4 sm:mb-5 text-center flex flex-col items-center">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-pulse"></span>
                <span>Execution Journey</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={70}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#202724] tracking-tight leading-tight font-heading text-center">
                How We Bring Solar to Your Home
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1 font-normal text-center max-w-xl mx-auto">
                A seamless 4-phase turnkey story engineered for maximum yield and zero household disruption.
              </p>
            </ScrollReveal>
          </div>

          {/* Single Streamlined Phase Stepper Rail (Compact, Clean & Non-Repetitive) */}
          <ScrollReveal delay={150}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 mb-4 max-w-4xl mx-auto">
              {phases.map((ph, idx) => {
                const isActive = activePhase === idx;
                return (
                  <button
                    key={ph.step}
                    type="button"
                    onClick={() => setActivePhase(idx)}
                    className={`py-2 px-3 rounded-xl border text-center transition-all cursor-pointer font-tech flex items-center justify-center gap-2 ${
                      isActive
                        ? "bg-[#123C32] text-white border-[#E8A83E] shadow-sm ring-1 ring-[#E8A83E]/50"
                        : "bg-white text-[#202724] border-[#E2E8E2] hover:border-[#123C32]/30 hover:bg-[#F7F8F4]"
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full shrink-0 ${isActive ? "bg-[#E8A83E]" : "bg-neutral-300"}`} />
                    <span className="text-xs sm:text-sm font-bold truncate">{ph.name}</span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Active Phase Story Stage with Mobile Touch Swipe */}
          <ScrollReveal delay={200}>
            <div
              className="bg-white rounded-2xl border border-[#E2E8E2] overflow-hidden shadow-sm p-4 sm:p-5 lg:p-6 select-none"
              onTouchStart={handlePhaseTouchStart}
              onTouchEnd={handlePhaseTouchEnd}
              onPointerDown={handlePhaseTouchStart}
              onPointerUp={handlePhaseTouchEnd}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
                {/* Left Column: Phase Photograph (Identical Height to Right Column, No Repetitive Phase Numbers) */}
                <div className="lg:col-span-5 flex flex-col h-full">
                  <div className="relative rounded-xl overflow-hidden border border-[#E2E8E2] bg-neutral-900 group h-full min-h-[260px] sm:min-h-[290px] lg:min-h-full">
                    <SmartImage
                      src={currentPhaseData.image}
                      alt={currentPhaseData.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      containerClassName="w-full h-full absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15 pointer-events-none"></div>

                    {/* Subtitle Bar Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 text-[11px] text-[#E9F0E9] font-medium font-tech truncate pointer-events-none bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/10">
                      {currentPhaseData.subtitle}
                    </div>
                  </div>
                </div>

                {/* Right Column: Clean Story Narrative & Engineering Checkpoints (Matching Height) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-3 text-left h-full py-0.5">
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

                  {/* Key Engineering Checkpoints */}
                  <div>
                    <div className="text-[10px] font-bold text-[#202724] uppercase tracking-wider font-tech mb-1.5">
                      Engineering Checkpoints:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {currentPhaseData.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 text-xs text-[#202724] bg-[#F7F8F4] px-2.5 py-1.5 rounded-lg border border-[#E2E8E2]/70"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#123C32] shrink-0" />
                          <span className="truncate font-medium">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverable Capsule */}
                  <div className="px-3.5 py-2 rounded-xl bg-[#E9F0E9] border border-[#123C32]/15 flex items-center gap-2.5 font-tech">
                    <span className="text-[10px] font-bold text-[#123C32] uppercase tracking-wider shrink-0 bg-white px-2 py-0.5 rounded border border-[#123C32]/10">
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

      {/* 4. Section 4 — Engineered for Household Reliability */}
      

      {/* 5. Common Questions (FAQs) - Default FAQ #1 Open */}
      <section className="py-5 md:py-5 lg:py-5 bg-[#F7F8F4]">
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
