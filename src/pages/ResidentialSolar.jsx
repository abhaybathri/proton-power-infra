import { useState } from "react";
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

// Residential Assets
import topImage from "../assets/residential-solar-assets/top-image.png";
import siteAssesmentImg from "../assets/residential-solar-assets/site-assesment-phase.png";
import customizeDesignImg from "../assets/residential-solar-assets/customize-design-phase.png";
import installationImg from "../assets/residential-solar-assets/installation-phase.png";
import systemInstallationImg from "../assets/residential-solar-assets/system-installation-phase.png";
import whyChooseImg from "../assets/residential-solar-assets/why-choose-image.jpg";

export default function ResidentialSolar() {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // 5 Focused Residential Solar Benefits (Interactive Hover-Expanding Deck)
  const benefits = [
    {
      id: "savings",
      number: "01",
      icon: DollarSign,
      title: "Cost Savings",
      subtitle: "Slash Monthly Bills",
      stat: "Up to 90%",
      statLabel: "Bill Reduction",
      desc: "Cut electricity bills drastically by generating your own clean power from the sun, converting non-productive terrace space into permanent financial yield.",
      highlight: "Average ₹45,000+ Annual Household Savings",
    },
    {
      id: "independence",
      number: "02",
      icon: Shield,
      title: "Energy Independence",
      subtitle: "Hedge Grid Tariff Hikes",
      stat: "25 Years",
      statLabel: "Price Stability",
      desc: "Protect your family from unpredictable utility grid tariff hikes and annual rate surges with captive clean solar generation that remains steady for decades.",
      highlight: "Shielded Against 5–8% Annual DISCOM Rate Hikes",
    },
    {
      id: "eco",
      number: "03",
      icon: Leaf,
      title: "Eco-Friendly Lifestyle",
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
      title: "Increased Property Value",
      subtitle: "Smart Home Asset",
      stat: "+4% to 6%",
      statLabel: "Home Resale Value",
      desc: "Certified rooftop solar systems demonstrably enhance long-term property appraisal values, attracting eco-conscious premium homebuyers.",
      highlight: "Appraised as a Self-Powered Modern Home",
    },
    {
      id: "subsidy",
      number: "05",
      icon: Award,
      title: "Government Subsidies",
      subtitle: "PM Surya Ghar Yojana",
      stat: "Up to ₹78,000",
      statLabel: "Direct DBT Benefit",
      desc: "Receive direct DBT subsidies up to ₹78,000 credited to your bank account, paired with seamless net-metering support.",
      highlight: "Direct DBT Bank Transfer Assistance",
    },
  ];

  // 4 Process Phases (Interactive Story Experience - Compact & Zero-Scroll)
  const phases = [
    {
      step: "01",
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

  return (
    <div className="pt-20 bg-[#F7F8F4] text-[#252A27]">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-14 md:pt-16 md:pb-20 lg:pt-10 lg:pb-10 bg-[#123C32] text-white">
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E8A83E]/20 border border-[#E8A83E]/40 text-[#E8A83E] text-xs font-bold tracking-wider uppercase font-tech">
                <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-pulse"></span>
                <span>Residential Solar Solutions • 3 kW to 25 kW</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] font-heading">
                Empower Your Home with <br />
                <span className="text-[#E8A83E] relative inline-block">
                  Clean Solar Energy.
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#E8A83E]/25 -z-10 rounded"></span>
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#E9F0E9]/85 leading-relaxed max-w-2xl font-normal">
                At Proton Power Infra, we bring industrial-grade engineering to residential rooftops across Indore and India. Generate your own clean electricity, safeguard your family against rising utility tariffs, and transition to reliable solar power with seamless PM Surya Ghar subsidy support.
              </p>

              {/* Exactly ONE CTA Button */}
              <div className="pt-2">
                <Link
                  to="/enquiry?type=residential"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#E8A83E]/20 transition-all duration-300 font-tech tracking-wide group cursor-pointer"
                >
                  <span>Request Free Home Solar Audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </Link>
              </div>

              {/* Micro-Metrics Bar */}
              <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 font-tech">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#E8A83E]">3 – 25 kW</div>
                  <div className="text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Household Range
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#E8A83E]">Up to 90%</div>
                  <div className="text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Monthly Savings
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#E8A83E]">25-Year</div>
                  <div className="text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Linear Warranty
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Visual Capsule */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/90 bg-[#202724] group transition-all duration-500">
                <div className="relative aspect-[4/4.5] overflow-hidden bg-black/40">
                  <img
                    src={topImage}
                    alt="Proton Power Infra Premium Residential Rooftop Solar Installation"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/95 via-[#123C32]/25 to-black/25"></div>
                </div>

                {/* Top Telemetry Capsule */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#123C32] shadow-sm font-tech">
                    <Activity className="w-3.5 h-3.5 text-[#E8A83E] animate-pulse" />
                    <span>Residential Array • Active</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#202724]/85 backdrop-blur-md text-[10px] font-mono text-[#E9F0E9] border border-white/10">
                    <span>22.71° N, 75.85° E</span>
                  </div>
                </div>

                {/* Bottom Spec Capsule */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60 z-10">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E8A83E]"></span>
                      <span className="text-xs font-bold text-[#123C32] uppercase tracking-wider font-tech">
                        High-Yield Rooftop Monocrystalline Array
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#123C32] bg-[#E9F0E9] px-2 py-0.5 rounded font-mono">
                      PM SURYA GHAR
                    </span>
                  </div>
                  <p className="text-xs text-[#525D57] leading-relaxed">
                    Custom-engineered rooftop installations designed for independent villas, bungalows, and residential societies.
                  </p>
                </div>

                {/* Gold Engineering Brackets */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E8A83E] pointer-events-none z-10"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E8A83E] pointer-events-none z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section 2 — Benefits of Residential Solar (Interactive 5-Pillar Compact Deck) */}
      <section className="py-14 md:py-18 lg:py-10 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-3">
              <span>Benefits of Residential Solar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#202724] tracking-tight leading-tight font-heading">
              Why Homeowners Across India Are Choosing Solar
            </h2>
            <p className="text-sm sm:text-base text-[#525D57] leading-relaxed mt-2.5">
              Transform unused terrace space into a high-return clean energy asset. Hover or tap each benefit below to explore the financial and environmental returns.
            </p>
          </div>

          {/* Interactive 5-Pillar Expanding Deck (Takes small vertical space & has ZERO empty space) */}
          <div className="flex flex-col lg:flex-row gap-3.5 lg:h-[320px] items-stretch">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              const isActive = activeBenefit === idx;

              return (
                <div
                  key={b.id}
                  onMouseEnter={() => setActiveBenefit(idx)}
                  onClick={() => setActiveBenefit(idx)}
                  className={`rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between ${
                    isActive
                      ? "bg-[#123C32] text-white border-[#123C32] shadow-xl lg:flex-[2.5] p-6 sm:p-7 ring-2 ring-[#E8A83E]/40"
                      : "bg-[#F7F8F4] text-[#252A27] border-[#E2E8E2] hover:border-[#123C32]/40 lg:flex-1 p-5 hover:bg-white"
                  }`}
                >
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#E8A83E] text-[#123C32]"
                          : "bg-white border border-[#E2E8E2] text-[#123C32]"
                      }`}
                    >
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isActive ? "bg-white/10 text-[#E8A83E]" : "bg-black/5 text-[#525D57]"
                      }`}
                    >
                      {b.number}
                    </span>
                  </div>

                  {/* Middle Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="mb-2">
                      <div
                        className={`text-xl font-black font-tech tracking-tight ${
                          isActive ? "text-[#E8A83E]" : "text-[#123C32]"
                        }`}
                      >
                        {b.stat}
                      </div>
                      <h3
                        className={`text-base sm:text-lg font-bold font-heading mt-0.5 ${
                          isActive ? "text-white" : "text-[#202724]"
                        }`}
                      >
                        {b.title}
                      </h3>
                    </div>

                    {/* Expanded details visible only when active */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isActive ? "max-h-60 opacity-100 mt-2" : "max-h-0 lg:max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-xs sm:text-sm text-[#E9F0E9]/85 leading-relaxed mb-4">
                        {b.desc}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-[#E8A83E] font-medium font-tech">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        <span>{b.highlight}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="pt-3 mt-auto border-t border-current/10 flex items-center justify-between text-xs font-tech">
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider ${
                        isActive ? "text-[#E8A83E]" : "text-[#525D57]"
                      }`}
                    >
                      {b.subtitle}
                    </span>
                    <span
                      className={`transition-transform duration-300 ${
                        isActive ? "rotate-90 text-[#E8A83E]" : "text-[#525D57]"
                      }`}
                    >
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Section 3 — How We Bring Solar (Interactive 4-Phase Story Walkthrough - Ultra Compact & Zero-Scroll) */}
      <section id="process" className="py-4 md:py-6 lg:py-6 bg-[#F7F8F4] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header (Clean & Horizontal on Desktop) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-2">
                <span>Execution Journey</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                How We Bring Solar to Your Home
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#525D57] max-w-md leading-relaxed md:text-right">
              A seamless 4-phase turnkey story engineered for maximum yield and zero household disruption.
            </p>
          </div>

          {/* Phase Navigation Tabs (Compact) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
            {phases.map((ph, idx) => {
              const isActive = activePhase === idx;
              return (
                <button
                  key={ph.step}
                  type="button"
                  onClick={() => setActivePhase(idx)}
                  className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer font-tech flex items-center gap-2.5 ${
                    isActive
                      ? "bg-[#123C32] text-white border-[#123C32] shadow-sm ring-2 ring-[#E8A83E]/40"
                      : "bg-white text-[#202724] border-[#E2E8E2] hover:border-[#123C32]/30 hover:bg-[#F7F8F4]"
                  }`}
                >
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

          {/* Active Phase Story Stage (Compact & Zero Scroll) */}
          <div className="bg-white rounded-2xl border border-[#E2E8E2] overflow-hidden shadow-md p-4 sm:p-5 lg:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
              {/* Left Column: Phase Photography */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-xl overflow-hidden shadow-sm border border-[#E2E8E2] bg-[#202724] group">
                  <div className="relative h-48 sm:h-60 lg:h-[260px] overflow-hidden">
                    <img
                      src={currentPhaseData.image}
                      alt={currentPhaseData.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                  </div>

                  {/* Phase Badge */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full text-[11px] font-black tracking-wide uppercase bg-[#123C32] text-[#E8A83E] shadow-sm font-tech">
                      Phase {currentPhaseData.step} Execution
                    </span>
                  </div>

                  {/* Subtitle Bar */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[11px] text-white/95 font-medium font-tech truncate">
                    {currentPhaseData.subtitle}
                  </div>
                </div>
              </div>

              {/* Right Column: Story Narrative & Checkpoints */}
              <div className="lg:col-span-7 space-y-3.5 text-left flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-[#E8A83E] uppercase tracking-wider font-tech bg-[#123C32] px-2 py-0.5 rounded">
                      Step {currentPhaseData.step} of 04
                    </span>
                    <span className="text-xs font-semibold text-[#123C32] uppercase tracking-wide font-tech truncate">
                      {currentPhaseData.subtitle}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#202724] font-heading tracking-tight leading-snug">
                    {currentPhaseData.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                  {currentPhaseData.desc}
                </p>

                {/* Key Technical Highlights (2-column compact grid) */}
                <div>
                  <div className="text-[10px] font-bold text-[#202724] uppercase tracking-wider font-tech mb-1.5">
                    Engineering Checkpoints:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#202724]">
                    {currentPhaseData.highlights.map((h, i) => (
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
                    {currentPhaseData.deliverable}
                  </span>
                </div>

                {/* In-Card Phase Navigation: Prev / Phase Pills / Next */}
                <div className="pt-2 flex items-center justify-between border-t border-[#E2E8E2]">
                  <button
                    type="button"
                    onClick={() => setActivePhase((prev) => (prev - 1 + phases.length) % phases.length)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#525D57] hover:text-[#123C32] px-2.5 py-1.5 rounded-lg hover:bg-black/5 transition-colors cursor-pointer font-tech"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  {/* Interactive Phase Number Pills directly inside the card */}
                  <div className="flex items-center gap-1.5">
                    {phases.map((ph, idx) => {
                      const isActive = activePhase === idx;
                      return (
                        <button
                          key={ph.step}
                          type="button"
                          onClick={() => setActivePhase(idx)}
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
                    onClick={() => setActivePhase((prev) => (prev + 1) % phases.length)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#123C32] hover:text-[#1A4D41] px-2.5 py-1.5 rounded-lg hover:bg-black/5 transition-colors cursor-pointer font-tech"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 4 — Engineered for Household Reliability (Compact & Non-Repetitive) */}
      <section className="py-6 md:py-6 bg-white border-y border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image Column using why-choose-image.jpg */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#E2E8E2] shadow-md group">
                <img
                  src={whyChooseImg}
                  alt="Proton Power Infra Engineered Residential Rooftop Solar"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white font-tech">
                  <span className="text-xs font-bold">Terrace Preservation & Waterproofing</span>
                  <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded">
                    25-YR DURABILITY
                  </span>
                </div>
              </div>
            </div>

            {/* Compact Technical Highlights */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech">
                <span>Engineering Discipline</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#202724] font-heading tracking-tight">
                Engineered for 25 Years of Household Reliability
              </h2>

              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                We bring the same industrial-grade engineering discipline to home rooftops that we apply to multi-megawatt utility solar parks:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-tech">
                <div className="p-3.5 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2]">
                  <div className="text-xs font-bold text-[#123C32] mb-1">
                    ✓ High-Conversion Mono PERC
                  </div>
                  <p className="text-[11px] text-[#525D57] leading-normal">
                    Tier-1 half-cut bifacial panels designed to deliver maximum generation even under severe 45°C summer heat.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2]">
                  <div className="text-xs font-bold text-[#123C32] mb-1">
                    ✓ Zero Roof Puncture Technology
                  </div>
                  <p className="text-[11px] text-[#525D57] leading-normal">
                    Chemical anchor fastenings or elevated pergolas that preserve full terrace usability and eliminate water seepage.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2]">
                  <div className="text-xs font-bold text-[#123C32] mb-1">
                    ✓ Complete PM Surya Ghar Subsidy
                  </div>
                  <p className="text-[11px] text-[#525D57] leading-normal">
                    End-to-end documentation assistance to ensure your direct bank transfer subsidy (up to ₹78,000) is credited promptly.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2]">
                  <div className="text-xs font-bold text-[#123C32] mb-1">
                    ✓ Rapid Local Indore Mobilization
                  </div>
                  <p className="text-[11px] text-[#525D57] leading-normal">
                    Headquartered in Indore with quick-dispatch service engineers for proactive O&M and warranty assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Common Questions (FAQs) */}
      <section className="py-8 md:py-10 bg-[#F7F8F4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-3">
              <span>Residential FAQs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#202724] tracking-tight leading-tight font-heading">
              Common Questions About Home Solar
            </h2>
            <p className="text-sm text-[#525D57] leading-relaxed mt-2">
              Clear answers regarding subsidies, terrace space requirements, and net-metering timelines.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS.residential.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#E2E8E2] overflow-hidden bg-white shadow-2xs transition-all"
                >
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
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Compact Consultation CTA Banner (Form Replaced with Single High-Impact Action) */}
      <section className="py-14 md:py-10 bg-[#123C32] text-white relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold uppercase tracking-wider border border-[#E8A83E]/40 font-tech mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Power Your Home with Clean Energy?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-heading mb-4">
            Request Your Free Home Solar Feasibility Survey
          </h2>

          <p className="text-sm sm:text-base text-[#E9F0E9]/85 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            Our certified solar engineers will inspect your terrace, calculate shadow-free capacity, and provide an accurate cost and PM Surya Ghar subsidy simulation with zero obligation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/enquiry?type=residential"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#E8A83E]/20 transition-all duration-300 font-tech tracking-wide group cursor-pointer"
            >
              <span>Schedule Free On-Site Survey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <a
              href={`tel:${COMPANY_DETAILS.primaryPhoneRaw || "+919770744687"}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all font-tech"
            >
              <Phone className="w-4 h-4 text-[#E8A83E]" />
              <span>Call Us: {COMPANY_DETAILS.primaryPhone || "+91 97707 44687"}</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#E9F0E9]/75 font-tech">
            <span>✓ 100% Free On-Site Inspection</span>
            <span>✓ PM Surya Ghar Subsidy Assistance</span>
            <span>✓ 25-Year Performance Warranty</span>
          </div>
        </div>
      </section>
    </div>
  );
}
