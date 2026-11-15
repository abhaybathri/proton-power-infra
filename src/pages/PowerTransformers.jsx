import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Zap,
  RefreshCw,
  Layers,
  Phone,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Activity,
  Gauge,
  Award,
  Settings,
} from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";

// Transformer Assets
import topImg from "../assets/power-transformer-assets/top-image.png";
import manufacturingImg from "../assets/power-transformer-assets/manufacturing.png";
import stepUpImg from "../assets/power-transformer-assets/step-up-transformer.png";
import stepDownImg from "../assets/power-transformer-assets/step-down.png";
import customizeImg from "../assets/power-transformer-assets/customize-transformer.png";

export default function PowerTransformers() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // 4 Core Transformer Services (Powered by User Assets)
  const services = [
    {
      id: "manufacturing",
      image: manufacturingImg,
      badge: "In-House Manufacturing",
      title: "Inverter Duty Solar Transformer Manufacturing",
      desc: "Custom-engineered for grid-connected solar power plants to step up fluctuating inverter AC voltages (e.g. 690V / 800V) to 11kV or 33kV transmission grids with low harmonic distortion.",
      specs: [
        "Multiple low-voltage inputs for multi-inverter array pairing",
        "Electrostatic shielding between HV and LV windings",
        "High harmonic tolerance (K-factor rated) for non-linear solar loads",
      ],
      enquiryParam: "Inverter Duty Solar Transformers",
    },
    {
      id: "step-up",
      image: stepUpImg,
      badge: "Grid Substation EPC",
      title: "Step-Up Transformer Repair & Services",
      desc: "Specialized diagnostics, emergency rewinding, and preventative overhaul for high-voltage substation step-up transformers, safeguarding continuous power evacuation without transmission dips.",
      specs: [
        "HV coil rewinding with Class-A electrolytic copper conductor",
        "On-load (OLTC) and off-circuit (OCTC) tap changer maintenance",
        "High-vacuum transformer oil dehydration and BDV breakdown testing",
      ],
      enquiryParam: "Step-Up Transformer Repair",
    },
    {
      id: "step-down",
      image: stepDownImg,
      badge: "Industrial Substation",
      title: "Step-Down Transformer Repair & Services",
      desc: "Fast-turnaround servicing and re-engineering for industrial step-down transformers (33kV/11kV to 415V), protecting heavy factory machinery, furnaces, and drives from voltage fluctuations.",
      specs: [
        "Core re-clamping and low-loss CRGO lamination alignment",
        "Nitrogen leak detection, bushing overhaul, and gasket renewal",
        "Winding resistance, magnetic balance, and Tan Delta diagnostics",
      ],
      enquiryParam: "Step-Down Transformer Repair",
    },
    {
      id: "custom",
      image: customizeImg,
      badge: "Custom Engineering",
      title: "Customized Transformer Solutions",
      desc: "Tailor-made transformer architectures engineered to match precise factory impedance constraints, specialized vector groups (Dyn11, YNd11), and extreme ambient thermal requirements.",
      specs: [
        "Custom KVA / MVA sizing with dual secondary windings",
        "Nitrogen Injection Fire Protection (NIFPS) integration",
        "Routine and type testing adhering strictly to IS 2026 & IEC 60076",
      ],
      enquiryParam: "Customized Transformers",
    },
  ];

  // Technical Standards Matrix (Ultra-Compact, Replaces Repetitive Marketing Why-Choose)
  const technicalStandards = [
    {
      title: "IS 2026 & IEC 60076",
      desc: "Certified design standards and routine type testing protocols.",
    },
    {
      title: "99.99% Electrolytic Copper",
      desc: "Pure copper windings ensuring minimal I²R conduction heat loss.",
    },
    {
      title: "Laser-Scribed CRGO Cores",
      desc: "High-permeability steel laminations reducing no-load core losses.",
    },
    {
      title: "Rapid Indore & Dewas Dispatch",
      desc: "In-house engineering team mobilized for immediate on-site field testing.",
    },
  ];

  // Transformer FAQs
  const transformerFaqs = [
    {
      q: "What makes Inverter Duty Transformers different from standard distribution transformers?",
      a: "Inverter Duty Solar Transformers are engineered to handle the unique stresses of solar PV generation: non-linear current harmonics, DC voltage bias from inverters, multi-winding inputs for inverter clustering, and electrostatic shielding to block grid-side transients.",
    },
    {
      q: "Do you provide on-site transformer oil filtration and testing?",
      a: "Yes. We operate mobile high-vacuum oil filtration plants and certified diagnostic instruments across India to perform on-site dielectric breakdown voltage (BDV) testing, moisture removal, dissolved gas analysis (DGA), and Tan Delta tests.",
    },
    {
      q: "What routine and type tests are performed on manufactured units?",
      a: "Every manufactured transformer undergoes full routine testing according to IS 2026 / IEC 60076 at our facility: measurement of winding resistance, voltage ratio, phase displacement, short-circuit impedance, no-load loss, and separate-source voltage withstand tests.",
    },
    {
      q: "How fast can your team respond to an emergency industrial transformer breakdown?",
      a: "With our manufacturing and repair hubs headquartered in Indore and Dewas, we mobilize emergency technical repair crews across Central and North India within 24 to 48 hours for on-site inspection, diagnostics, and temporary power stabilization.",
    },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero Section (Compact py-10, Single CTA Button, Tech Typography) */}
      <section className="relative py-10 md:py-10 lg:py-10 bg-[#123C32] text-white overflow-hidden">
        {/* Subtle background tech grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading, Subtext, Single CTA, Micro-Metrics */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/40 font-tech">
                <Cpu className="w-3.5 h-3.5" />
                <span>In-House Transformer Manufacturing & Repair</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-heading">
                High-Performance Transformers Engineered for Zero Downtime.
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-[#E9F0E9]/85 leading-relaxed font-normal max-w-2xl">
                Proton Power Infra manufactures specialized Inverter Duty Solar Transformers and provides rapid-turnaround step-up and step-down transformer repair, coil rewinding, and on-site oil filtration across India.
              </p>

              {/* Exactly ONE CTA Button */}
              <div className="pt-1">
                <Link
                  to="/enquiry?type=industrial&requirement=Power%20Transformers"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#E8A83E]/20 transition-all duration-300 font-tech tracking-wide group cursor-pointer"
                >
                  <span>Request Transformer Quote & Specs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Micro-Metrics Bar */}
              <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-3 font-tech">
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#E8A83E]">Up to 33 kV</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Voltage Class
                  </div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#E8A83E]">Inverter Duty</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Dual-Winding Solar
                  </div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#E8A83E]">IS / IEC</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Tested Standards
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
                    alt="Proton Power Infra High Performance Transformer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/90 via-transparent to-black/20"></div>
                </div>

                {/* Top Telemetry Capsule */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#123C32] shadow-sm font-tech">
                    <Activity className="w-3.5 h-3.5 text-[#E8A83E] animate-pulse" />
                    <span>Transformer Unit • Routine Tested</span>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#202724]/85 backdrop-blur-md text-[10px] font-mono text-[#E9F0E9] border border-white/10">
                    <span>IS 2026 / IEC 60076</span>
                  </div>
                </div>

                {/* Bottom Spec Capsule */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-white/60 z-10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#E8A83E]"></span>
                      <span className="text-xs font-bold text-[#123C32] uppercase tracking-wider font-tech">
                        Inverter Duty Step-Up & Industrial Transformers
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#525D57] leading-relaxed">
                    Fabricated and serviced in Indore & Dewas with pure electrolytic copper and low-loss CRGO laminations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section 2 — Compact Technical Capability & Quality Standards (Replaces Long/Repetitive Intro) */}
      <section className="py-8 md:py-8 lg:py-8 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
            {technicalStandards.map((std, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#123C32] shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-[#202724] font-heading truncate">
                    {std.title}
                  </h4>
                </div>
                <p className="text-[11px] text-[#525D57] leading-relaxed">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Section 3 — Services We Offer (4 Cards Powered by User Assets) */}
      <section id="transformer-services" className="py-10 md:py-10 lg:py-10 bg-[#F7F8F4] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-1.5">
                <span>Specialized Capabilities</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                Transformer Manufacturing & Repair Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#525D57] max-w-md leading-relaxed md:text-right">
              From ground-up multi-winding fabrication to emergency rewinding and high-vacuum oil dehydration.
            </p>
          </div>

          {/* 4 Balanced Cards in 2x2 Grid with Real Assets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-2xl border border-[#E2E8E2] hover:border-[#123C32]/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with Zoom */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-[#202724]">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#123C32] text-[#E8A83E] text-[10px] font-bold uppercase tracking-wider font-tech shadow-sm">
                      {srv.badge}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white font-heading font-bold text-sm sm:text-base leading-tight truncate">
                    {srv.title}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-[#525D57] leading-relaxed mb-3">
                      {srv.desc}
                    </p>

                    {/* Engineering Specs */}
                    <div className="space-y-1.5 pt-2 border-t border-[#E2E8E2]">
                      {srv.specs.map((sp, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-[#202724]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#123C32] shrink-0 mt-0.5" />
                          <span>{sp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 mt-4 border-t border-[#E2E8E2]">
                    <Link
                      to={`/enquiry?type=industrial&requirement=${encodeURIComponent(srv.enquiryParam)}`}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-bold bg-[#F7F8F4] group-hover:bg-[#123C32] text-[#123C32] group-hover:text-white transition-all font-tech"
                    >
                      <span>Request Specs & Pricing</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Section 4 — FAQs (Smooth Accordion, Compact) */}
      <section className="py-10 md:py-10 lg:py-10 bg-white border-t border-[#E2E8E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-2">
              <span>Transformer FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] mt-1">
              Details on inverter duty harmonics, oil filtration, and on-site testing.
            </p>
          </div>

          <div className="space-y-2.5">
            {transformerFaqs.map((faq, idx) => {
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

      {/* 5. Section 5 — Compact Consultation CTA Banner (Form Replaced with Single High-Impact Action) */}
      <section className="py-10 md:py-10 lg:py-10 bg-[#123C32] text-white relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold uppercase tracking-wider border border-[#E8A83E]/40 font-tech mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Need a Custom Transformer or Emergency Servicing?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight font-heading mb-3">
            Consult with Our Power Transformer Engineers
          </h2>

          <p className="text-xs sm:text-sm text-[#E9F0E9]/85 leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
            Speak directly with our electrical design team in Indore and Dewas for new equipment manufacturing specifications, impedance matching, or urgent on-site repair dispatch.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/enquiry?type=industrial&requirement=Power%20Transformers"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#E8A83E]/20 transition-all duration-300 font-tech tracking-wide group cursor-pointer"
            >
              <span>Request Transformer Specs & Quote</span>
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
            <span>✓ In-House Manufacturing in Indore & Dewas</span>
            <span>✓ IS 2026 & IEC 60076 Certified Testing</span>
            <span>✓ Rapid Pan-India On-Site Field Mobilization</span>
          </div>
        </div>
      </section>
    </div>
  );
}
