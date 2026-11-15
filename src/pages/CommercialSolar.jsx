import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Leaf,
  DollarSign,
  Activity,
  Phone,
  Sparkles,
  ExternalLink,
  Zap,
  Award,
} from "lucide-react";
import { COMPANY_DETAILS, FAQS } from "../data/companyData";

// Commercial Assets
import commercialTopImg from "../assets/commercial-assets/commercial-top-image.jpg";
import groundMountedImg from "../assets/commercial-assets/ground-mounted-image.jpg";
import tailoredSolutionImg from "../assets/commercial-assets/tailored-solution.png";
import expertTeamImg from "../assets/commercial-assets/expert-team.png";
import costEffectiveImg from "../assets/commercial-assets/cost-effective.png";
import sustainabilityImg from "../assets/commercial-assets/sustainability-commitment.png";

export default function CommercialSolar() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Ground Mount Engineering Capabilities (Minimal & High-Density)
  const groundMountCapabilities = [
    {
      title: "Optimal Sun Orientation",
      desc: "Custom seasonal tilt angles maximize annual kWh harvest compared to static roofs.",
    },
    {
      title: "Multi-MW Scalability",
      desc: "Modular structural topologies scaled from 50 kW to high-capacity IPP solar parks.",
    },
    {
      title: "Certified Weather Racking",
      desc: "Heavy-gauge hot-dip galvanized steel frames rated for severe regional wind loads.",
    },
    {
      title: "Ground-Level O&M",
      desc: "Walkable ground clearance enables automated robotic cleaning and prompt maintenance.",
    },
  ];

  // 4 Core Why Choose Pillars with User Assets
  const whyChooseCards = [
    {
      id: "tailored",
      step: "01",
      image: tailoredSolutionImg,
      tag: "Custom Load Profile",
      title: "Tailored Engineering",
      desc: "We analyze your facility's exact hourly load curve and sanctioned demand to design an optimal rooftop or ground-mount array.",
      highlight: "Zero Grid Downtime",
    },
    {
      id: "team",
      step: "02",
      image: expertTeamImg,
      tag: "IEC & CEA Standards",
      title: "Expert EPC Engineers",
      desc: "Over a decade of seasoned electrical, civil, and liaisoning expertise ensuring rapid, CEIG-compliant synchronization.",
      highlight: "Pan-India Mobilization",
    },
    {
      id: "cost",
      step: "03",
      image: costEffectiveImg,
      tag: "Section 32 Tax Shield",
      title: "Cost-Effective High ROI",
      desc: "Cut electricity OPEX by up to 75% and claim 40% accelerated depreciation in year one for a rapid 3–4 year payback.",
      highlight: "3–4 Yrs Payback",
    },
    {
      id: "sustainability",
      step: "04",
      image: sustainabilityImg,
      tag: "ESG & Carbon Offset",
      title: "Corporate Sustainability",
      desc: "Accelerate your corporate Net-Zero roadmap with verified Scope-2 emission reduction and audit-ready ESG reporting.",
      highlight: "1000s Tons CO2 Offset",
    },
  ];

  // Commercial FAQs (Consolidated & Compact)
  const commercialFaqs = [
    ...(FAQS.commercial || []),
    {
      q: "What is the typical ROI and payback timeline for commercial installations?",
      a: "Most commercial enterprises achieve full capital payback within 3 to 4 years. When combined with Section 32 accelerated depreciation and reduced utility grid tariffs, operating cost savings begin from day one.",
    },
    {
      q: "How does Proton Power Infra handle DISCOM net-metering and CEIG approvals?",
      a: "Our in-house liaisoning team manages the entire regulatory paperwork: DISCOM registration, CEIG electrical safety approvals, PPA drafting, and bi-directional meter synchronization with zero operational disruption to your plant.",
    },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero Section (Compact py-10 md:py-12, Single CTA Button, Tech Typography) */}
      <section className="relative py-10 md:py-12 lg:py-14 bg-[#123C32] text-white overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading, Subtext, Single Button, Micro-Metrics */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/40 font-tech">
                <Building2 className="w-3.5 h-3.5" />
                <span>Commercial & Ground-Mounted Solar</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-heading">
                Power Your Business with High-Yield Commercial Solar.
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-[#E9F0E9]/85 leading-relaxed font-normal max-w-2xl">
                Slash peak operational tariffs and hedge against annual utility rate hikes. Proton Power Infra delivers turnkey commercial rooftop and open-acreage ground-mount solar arrays engineered for maximum kilowatt-hour yield.
              </p>

              {/* Exactly ONE CTA Button */}
              <div className="pt-1">
                <Link
                  to="/enquiry?type=commercial"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#E8A83E]/20 transition-all duration-300 font-tech tracking-wide group cursor-pointer"
                >
                  <span>Request Commercial Feasibility Audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Micro-Metrics Bar */}
              <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-3 font-tech">
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#E8A83E]">50 kW – 5 MW+</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Commercial Scale
                  </div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#E8A83E]">3 – 4 Years</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Capital Payback
                  </div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#E8A83E]">40% Depr.</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Section 32 Tax Benefit
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Frame with commercial-top-image.jpg */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/80 bg-[#202724] group">
                <div className="relative h-64 sm:h-72 lg:h-[320px] overflow-hidden">
                  <img
                    src={commercialTopImg}
                    alt="Proton Power Infra Commercial Solar Project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/90 via-transparent to-black/20"></div>
                </div>

                {/* Top Status Capsule */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#123C32] shadow-sm font-tech">
                    <Activity className="w-3.5 h-3.5 text-[#E8A83E] animate-pulse" />
                    <span>Commercial Array • Active</span>
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
                        High-Yield Commercial Rooftop & Ground Mount
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#525D57] leading-relaxed">
                    Custom-engineered for corporate offices, manufacturing units, hospitals, and educational institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section 2 — Ground-Mounted Solar Arrays (Minimal, Professional & Compact) */}
      <section id="ground-mount-section" className="py-10 md:py-12 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Minimal Text + 4 Compact Capability Cards + Navigate to About Us */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-2">
                  <span>Specialized Commercial EPC</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                  Ground-Mounted Solar Arrays & Mega-Watt Parks
                </h2>
                <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1.5">
                  Designed for commercial enterprises with open acreage seeking maximum kWh generation with zero roof weight restrictions.
                </p>
              </div>

              {/* 4 Compact Capability Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {groundMountCapabilities.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#123C32] shrink-0" />
                      <h4 className="text-xs font-bold text-[#202724] font-heading">{c.title}</h4>
                    </div>
                    <p className="text-[11px] text-[#525D57] leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>

              {/* Project Navigation Link to About Us (Eliminates Duplicate Project Galleries) */}
              <div className="pt-2 flex items-center gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#123C32] hover:text-[#1A4D41] bg-[#123C32]/10 hover:bg-[#123C32]/15 px-3.5 py-2 rounded-lg transition-all font-tech group cursor-pointer"
                >
                  <span>Explore Executed Commercial Projects in About Us</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Frame with ground-mounted-image.jpg */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E2E8E2] bg-[#202724] group">
                <div className="relative h-60 sm:h-72 lg:h-[280px] overflow-hidden">
                  <img
                    src={groundMountedImg}
                    alt="Ground-Mounted Commercial Solar Park by Proton Power Infra"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>

                {/* Subtitle Banner on Image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-tech text-xs">
                  <span className="font-bold">Utility & Commercial Ground EPC</span>
                  <span className="text-[10px] font-mono bg-[#123C32] text-[#E8A83E] px-2 py-0.5 rounded font-bold">
                    HIGH PR RATIO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 3 — Why Choose Proton Power Infra (4 Cards with Characteristic User Assets) */}
      <section className="py-10 md:py-12 bg-[#F7F8F4] border-y border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-1.5">
                <span>Engineered Excellence</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                Why Enterprises Partner with Proton Power Infra
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#525D57] max-w-md leading-relaxed md:text-right">
              Adhering to global IEC engineering standards with rapid on-site mobilization and high-yield warranties.
            </p>
          </div>

          {/* 4 Compact Cards with Dedicated Characteristic Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {whyChooseCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl border border-[#E2E8E2] hover:border-[#123C32]/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* Card Characteristic Image */}
                <div className="relative h-36 sm:h-40 overflow-hidden bg-[#202724]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>

                  {/* Step Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="w-6 h-6 rounded-md bg-[#123C32] text-[#E8A83E] flex items-center justify-center font-bold text-xs font-mono">
                      {card.step}
                    </span>
                  </div>

                  {/* Tag Pill */}
                  <div className="absolute bottom-2 left-2.5 right-2.5 text-[10px] font-bold text-white/95 uppercase tracking-wider font-tech truncate">
                    {card.tag}
                  </div>
                </div>

                {/* Card Content (Compact & Informative) */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#202724] font-heading mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#525D57] leading-relaxed line-clamp-3">
                      {card.desc}
                    </p>
                  </div>

                  {/* Highlight Capsule */}
                  <div className="pt-3 mt-3 border-t border-[#E2E8E2] flex items-center gap-1.5 text-[11px] font-bold text-[#123C32] font-tech">
                    <Sparkles className="w-3 h-3 text-[#E8A83E] shrink-0" />
                    <span className="truncate">{card.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Section 4 — FAQs (Smooth Accordion, Compact) */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-2">
              <span>Commercial FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] mt-1">
              Key clarifications on tariffs, ground-mount feasibility, and tax depreciation.
            </p>
          </div>

          <div className="space-y-2.5">
            {commercialFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-xl border border-[#E2E8E2] overflow-hidden">
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

      {/* 5. Section 5 — Compact Consultation CTA Banner (Form Replaced with Single High-Impact Action) */}
      <section className="py-10 md:py-12 bg-[#123C32] text-white relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold uppercase tracking-wider border border-[#E8A83E]/40 font-tech mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Slash Your Commercial Power Bills?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight font-heading mb-3">
            Request a Commercial Solar Feasibility Study
          </h2>

          <p className="text-xs sm:text-sm text-[#E9F0E9]/85 leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
            Our power infrastructure engineers will assess your connected sanction load, analyze roof or acreage viability, and provide a full techno-economic ROI simulation with zero obligation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/enquiry?type=commercial"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#E8A83E]/20 transition-all duration-300 font-tech tracking-wide group cursor-pointer"
            >
              <span>Schedule Commercial Energy Audit</span>
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
            <span>✓ 100% Free Techno-Commercial Survey</span>
            <span>✓ 40% Accelerated Depreciation Modeling</span>
            <span>✓ Complete DISCOM & CEIG Liaisoning</span>
          </div>
        </div>
      </section>
    </div>
  );
}
