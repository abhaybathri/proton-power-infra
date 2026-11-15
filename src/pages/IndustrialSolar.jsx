import { useState } from "react";
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
  Cpu,
  Layers,
  Phone,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Warehouse,
  Flame,
  Award,
} from "lucide-react";
import { COMPANY_DETAILS, FAQS } from "../data/companyData";

// Industrial Assets
import industrialTopImg from "../assets/industrial-assets/top-image.jpg";
import manufacturingImg from "../assets/industrial-assets/manufacturing-units.jpg";
import agricultureImg from "../assets/industrial-assets/agriculture-food-processing.jpg";
import chemicalPharmaImg from "../assets/industrial-assets/chemical-pharma.png";

export default function IndustrialSolar() {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // 3 Minimal, High-Impact Industrial Benefits (No Card Overload)
  const industrialBenefits = [
    {
      stat: "Up to 70%",
      statLabel: "Tariff Slash",
      title: "Peak-Tariff OPEX Relief",
      desc: "Shield heavy factory operations from exorbitant DISCOM High-Tension (HT) tariffs and fuel price volatility with dedicated captive solar power.",
      highlight: "Direct Factory Power Yield",
      icon: TrendingUp,
    },
    {
      stat: "In-House",
      statLabel: "Manufacturing",
      title: "Inverter Duty Transformer Synergy",
      desc: "Unlike standard EPC contractors, Proton Power Infra manufactures its own solar step-up transformers, eliminating voltage harmonics and inverter tripping.",
      highlight: "In-House Transformer Manufacturing",
      icon: Zap,
      link: "/power-transformers",
      linkText: "Explore Transformers →",
    },
    {
      stat: "40% Year 1",
      statLabel: "Tax Shield",
      title: "RPO Compliance & Rapid ROI",
      desc: "Fulfill statutory Renewable Purchase Obligations (RPO) while claiming 40% accelerated depreciation (Section 32) for full capital payback in 3–4 years.",
      highlight: "Audit-Ready ESG Reporting",
      icon: Award,
    },
  ];

  // 5-Stage Interactive Industrial Engineering Process (Zero-Downtime Workflow)
  const processStages = [
    {
      step: "01",
      title: "Factory Energy & Harmonic Audit",
      subtitle: "Load Profiling & Structural Integrity",
      desc: "Our power engineers inspect historical 15-minute load curves, contract demand, transformer tapping, power factor penalties, and factory shed load-bearing strength.",
      checkpoints: [
        "15-Minute Interval HT Load Profiling",
        "Factory Shed Structural & Wind Load Analysis",
        "Power Factor & Harmonic Distortion Mapping",
      ],
      deliverable: "Techno-Commercial Feasibility & Shadow-Loss Report",
    },
    {
      step: "02",
      title: "Customized Structural & Electrical CAD",
      subtitle: "Tailored Industrial Plant Engineering",
      desc: "We design a customized solar array layout tailored to your factory's shed profile—optimizing cable run lengths, DC-to-AC ratios, and in-house step-up transformer sizing.",
      checkpoints: [
        "Shed-Specific Non-Penetrating Clamping",
        "Tier-1 Mono PERC & String Inverter Engineering",
        "DISCOM-Compliant Single Line Diagram (SLD)",
      ],
      deliverable: "Detailed Engineering Blueprint & Generation Simulation",
    },
    {
      step: "03",
      title: "Zero-Downtime Turnkey Installation",
      subtitle: "Safe Erection Without Stopping Production",
      desc: "Our certified engineering crews assemble hot-dip galvanized mounting structures and deploy chemical anchor fastenings without causing a single minute of factory floor downtime.",
      checkpoints: [
        "Zero Industrial Production Interruption",
        "Hot-Dip Galvanized Industrial Framing",
        "Dedicated Lightning & Double-Earthing Grids",
      ],
      deliverable: "Structural Safety Certification & Equipment Commissioning",
    },
    {
      step: "04",
      title: "CEIG Approval & Substation Grid Sync",
      subtitle: "Turnkey Regulatory & Electrical Clearance",
      desc: "We handle the complete statutory workflow: Chief Electrical Inspector to Government (CEIG) clearance, state DISCOM approvals, and 11kV/33kV substation synchronization.",
      checkpoints: [
        "End-to-End CEIG Electrical Safety Sign-off",
        "11kV / 33kV Substation Synchronization",
        "Bi-Directional Net-Meter Activation",
      ],
      deliverable: "Official Grid Evacuation Certificate & Net-Meter Activation",
    },
    {
      step: "05",
      title: "Real-Time SCADA Telemetry & Rapid O&M",
      subtitle: "Continuous Plant Health & Performance Ratio",
      desc: "Cloud-connected SCADA tracks string-level generation, ambient solar irradiance, and transformer thermal telemetry, backed by mechanized washing and rapid Indore field dispatch.",
      checkpoints: [
        "String-Level Cloud SCADA Telemetry",
        "Preventive Thermographic Drone Inspections",
        "Dedicated On-Call Field Mobilization",
      ],
      deliverable: "Live Mobile SCADA Dashboard & Guaranteed Plant Uptime",
    },
  ];

  const currentStage = processStages[activeStep];

  // 3 Key Industries We Serve (Matching User Asset Files)
  const industries = [
    {
      id: "manufacturing",
      image: manufacturingImg,
      tag: "Continuous Heavy Loads",
      title: "Manufacturing & Fabrication",
      desc: "Engineered for high continuous loads: CNC machinery, metal fabrication lines, casting units, and automobile manufacturing requiring stable captive voltage.",
      metrics: "500 kW to 10 MW+",
    },
    {
      id: "chemical-pharma",
      image: chemicalPharmaImg,
      tag: "Corrosion-Proof Racking",
      title: "Chemical & Pharmaceutical Plants",
      desc: "Specialized non-corrosive anodized aluminum racking and sealed explosion-safe switchgear engineered for sensitive chemical and pharma cleanrooms.",
      metrics: "250 kW to 5 MW+",
    },
    {
      id: "agri-food",
      image: agricultureImg,
      tag: "Cold Chain & Refrigeration",
      title: "Agriculture & Food Processing",
      desc: "Continuous solar power for heavy refrigeration compressors, modern grain milling plants, dairy chilling networks, and multi-acre cold storage hubs.",
      metrics: "100 kW to 3 MW+",
    },
  ];

  // Industrial FAQs
  const industrialFaqs = [
    ...(FAQS.industrial || []),
    {
      q: "Can our manufacturing factory run during solar installation?",
      a: "Yes, absolutely. Our turnkey engineering methodology ensures 100% zero factory downtime. Civil and mechanical mounting on sheds or open land takes place during regular shifts, while electrical synchronization is scheduled during planned plant maintenance windows.",
    },
    {
      q: "How does Proton Power Infra's in-house transformer manufacturing benefit our factory?",
      a: "Unlike standard EPCs who outsource transformers, we manufacture our own Inverter Duty Solar Transformers in Indore. This guarantees precision impedance matching, lower core losses, elimination of harmonic tripping, and immediate on-site technical support.",
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
                <Factory className="w-3.5 h-3.5" />
                <span>Heavy Industrial Solar EPC & Transformers</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-heading">
                Power Your Factory with Reliable Captive Solar.
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-[#E9F0E9]/85 leading-relaxed font-normal max-w-2xl">
                Hedge against rising industrial HT peak tariffs and utility outages. Proton Power Infra designs and installs multi-megawatt captive solar power plants with in-house inverter duty transformers engineered for non-stop factory operations.
              </p>

              {/* Exactly ONE CTA Button */}
              <div className="pt-1">
                <Link
                  to="/enquiry?type=industrial"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#E8A83E]/20 transition-all duration-300 font-tech tracking-wide group cursor-pointer"
                >
                  <span>Request Industrial Feasibility Audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Micro-Metrics Bar */}
              <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-3 font-tech">
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#E8A83E]">100 kW – 10 MW+</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Industrial Scale
                  </div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#E8A83E]">Up to 70%</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    HT Tariff Slash
                  </div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#E8A83E]">Tier-1 SCADA</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Real-Time Telemetry
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Frame with top-image.jpg */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/80 bg-[#202724] group">
                <div className="relative h-64 sm:h-72 lg:h-[320px] overflow-hidden">
                  <img
                    src={industrialTopImg}
                    alt="Proton Power Infra Industrial Rooftop & Ground Mount Solar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/90 via-transparent to-black/20"></div>
                </div>

                {/* Top Telemetry Capsule */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#123C32] shadow-sm font-tech">
                    <Activity className="w-3.5 h-3.5 text-[#E8A83E] animate-pulse" />
                    <span>Industrial Plant • Online</span>
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
                        High-Voltage Industrial Solar & Transformers
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#525D57] leading-relaxed">
                    Custom-engineered for manufacturing plants, cold chains, foundries, and chemical processing complexes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section 2 — Minimal Industrial Impact Strip (No Card Overload) */}
      <section className="py-10 md:py-10 lg:py-10 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-1.5">
                <span>Operational Advantage</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                Engineered for Heavy Continuous Operations
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#525D57] max-w-md leading-relaxed md:text-right">
              Three core operational advantages built into every Proton Power Infra industrial installation.
            </p>
          </div>

          {/* 3 Streamlined Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {industrialBenefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center">
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <div className="text-right font-tech">
                        <span className="text-base sm:text-lg font-black text-[#123C32] block leading-tight">
                          {b.stat}
                        </span>
                        <span className="text-[10px] font-bold text-[#525D57] uppercase tracking-wider">
                          {b.statLabel}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#202724] font-heading mb-2">
                      {b.title}
                    </h3>
                    <p className="text-xs text-[#525D57] leading-relaxed mb-3">
                      {b.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8E2] flex items-center justify-between text-xs font-tech font-bold">
                    {b.link ? (
                      <Link
                        to={b.link}
                        className="text-[#123C32] hover:text-[#E8A83E] flex items-center gap-1 group-hover:underline"
                      >
                        <span>{b.linkText}</span>
                      </Link>
                    ) : (
                      <span className="text-[#123C32] flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#E8A83E]" />
                        <span>{b.highlight}</span>
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Section 3 — Interactive Industrial Execution Pipeline (Zero-Scroll & Highly Intuitive) */}
      <section className="py-10 md:py-10 lg:py-10 bg-[#F7F8F4] border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-1.5">
                <span>Disciplined Engineering Protocol</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                Our 5-Stage Zero-Downtime Process
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#525D57] max-w-md leading-relaxed md:text-right">
              A proven industrial engineering workflow guaranteeing zero factory floor disruption from survey to grid synchronization.
            </p>
          </div>

          {/* Stepper Navigation Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5 mb-4">
            {processStages.map((st, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={st.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer font-tech flex items-center gap-2.5 ${
                    isActive
                      ? "bg-[#123C32] text-white border-[#123C32] shadow-sm ring-2 ring-[#E8A83E]/40"
                      : "bg-white text-[#202724] border-[#E2E8E2] hover:border-[#123C32]/30 hover:bg-[#F7F8F4]"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                      isActive ? "bg-[#E8A83E] text-[#123C32]" : "bg-[#123C32]/10 text-[#123C32]"
                    }`}
                  >
                    {st.step}
                  </div>
                  <div className="min-w-0">
                    <div
                      className={`text-[9px] font-bold uppercase tracking-wider ${
                        isActive ? "text-[#E8A83E]" : "text-[#525D57]"
                      }`}
                    >
                      Stage {st.step}
                    </div>
                    <div className="text-xs font-bold truncate">
                      {st.title.split("&")[0].trim()}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Active Stage Card */}
          <div className="bg-white rounded-2xl border border-[#E2E8E2] shadow-sm p-5 sm:p-6 text-left">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
              {/* Left Column: Stage Detail */}
              <div className="lg:w-3/5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-[#E8A83E] uppercase tracking-wider font-tech bg-[#123C32] px-2.5 py-0.5 rounded">
                    Stage {currentStage.step} of 05
                  </span>
                  <span className="text-xs font-bold text-[#123C32] uppercase tracking-wide font-tech">
                    {currentStage.subtitle}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#202724] font-heading tracking-tight leading-snug">
                  {currentStage.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                  {currentStage.desc}
                </p>

                {/* Milestone Deliverable Badge */}
                <div className="pt-1">
                  <div className="px-3.5 py-2 rounded-lg bg-[#E9F0E9] border border-[#123C32]/15 flex items-center gap-2 font-tech">
                    <span className="text-[10px] font-bold text-[#123C32] uppercase tracking-wider shrink-0">
                      Deliverable:
                    </span>
                    <span className="text-xs font-bold text-[#202724] truncate">
                      {currentStage.deliverable}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Checkpoints List + Direct Navigation */}
              <div className="lg:w-2/5 flex flex-col justify-between space-y-4 bg-[#F7F8F4] p-4 rounded-xl border border-[#E2E8E2]">
                <div>
                  <div className="text-[10px] font-bold text-[#202724] uppercase tracking-wider font-tech mb-2">
                    Key Technical Checkpoints:
                  </div>
                  <div className="space-y-2">
                    {currentStage.checkpoints.map((cp, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#202724]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#123C32] shrink-0 mt-0.5" />
                        <span>{cp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* In-Card Navigation Controls */}
                <div className="pt-3 border-t border-[#E2E8E2] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => (prev - 1 + processStages.length) % processStages.length)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#525D57] hover:text-[#123C32] px-2.5 py-1.5 rounded-lg hover:bg-black/5 transition-colors cursor-pointer font-tech"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  <div className="flex items-center gap-1">
                    {processStages.map((st, idx) => {
                      const isActive = activeStep === idx;
                      return (
                        <button
                          key={st.step}
                          type="button"
                          onClick={() => setActiveStep(idx)}
                          className={`w-6 h-6 rounded-md text-[11px] font-mono font-bold transition-all cursor-pointer ${
                            isActive
                              ? "bg-[#123C32] text-[#E8A83E] shadow-sm"
                              : "bg-white text-[#525D57] hover:bg-black/5"
                          }`}
                        >
                          {st.step}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => (prev + 1) % processStages.length)}
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

      {/* 4. Section 4 — Industries We Serve (3 Cards Using User Assets) */}
      <section id="industries-served" className="py-10 md:py-10 lg:py-10 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-1.5">
                <span>Target Verticals</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                Specialized Solutions for Heavy Industry
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#525D57] max-w-md leading-relaxed md:text-right">
              Tailored structural configurations and high-voltage power evacuation designed for specialized industrial operations.
            </p>
          </div>

          {/* 3 Balanced Cards with High-Res User Assets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <div
                key={ind.id}
                className="bg-[#F7F8F4] rounded-2xl border border-[#E2E8E2] hover:border-[#123C32]/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with Zoom */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-[#202724]">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>

                  {/* Top Tag */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#123C32] text-[#E8A83E] text-[10px] font-bold uppercase tracking-wider font-tech shadow-sm">
                      {ind.tag}
                    </span>
                  </div>

                  {/* Bottom Metrics */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white font-tech text-xs">
                    <span className="font-bold">{ind.title}</span>
                    <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded">
                      {ind.metrics}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#202724] font-heading mb-1.5">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-[#525D57] leading-relaxed mb-4">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8E2]">
                    <Link
                      to={`/enquiry?type=industrial&industry=${encodeURIComponent(ind.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123C32] hover:text-[#E8A83E] transition-colors font-tech group/link"
                    >
                      <span>Request Feasibility for {ind.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section 5 — FAQs (Smooth Accordion, Compact) */}
      <section className="py-10 md:py-10 lg:py-10 bg-[#F7F8F4] border-t border-[#E2E8E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-2">
              <span>Industrial FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] mt-1">
              Details on continuous zero-downtime execution, SCADA telemetry, and in-house transformers.
            </p>
          </div>

          <div className="space-y-2.5">
            {industrialFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-xl border border-[#E2E8E2] overflow-hidden bg-white">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-4.5 text-left flex items-center justify-between gap-4 hover:bg-[#F7F8F4] transition-colors cursor-pointer"
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
                    <div className="px-4 pb-4 pt-1 text-xs text-[#525D57] leading-relaxed border-t border-[#E2E8E2]/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Section 6 — Compact Consultation CTA Banner (Form Replaced with Single High-Impact Action) */}
      <section className="py-10 md:py-10 lg:py-10 bg-[#123C32] text-white relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold uppercase tracking-wider border border-[#E8A83E]/40 font-tech mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Slash Heavy Industrial Tariffs?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight font-heading mb-3">
            Consult with Our Industrial Solar EPC Engineers
          </h2>

          <p className="text-xs sm:text-sm text-[#E9F0E9]/85 leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
            Submit your manufacturing plant specifications for an in-depth HT tariff assessment, roof structural evaluation, and custom captive solar ROI simulation with zero obligation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/enquiry?type=industrial"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#E8A83E]/20 transition-all duration-300 font-tech tracking-wide group cursor-pointer"
            >
              <span>Schedule Industrial Energy Audit</span>
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
            <span>✓ 100% Free HT Tariff & Roof Survey</span>
            <span>✓ Zero Production Downtime Installation</span>
            <span>✓ In-House Inverter Duty Solar Transformers</span>
          </div>
        </div>
      </section>
    </div>
  );
}
