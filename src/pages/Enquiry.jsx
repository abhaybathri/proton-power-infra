import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
  SunMedium,
  MessageSquare,
  Sparkles,
  Zap,
  Cpu,
  Layers,
  ArrowRight,
  Activity,
} from "lucide-react";
import EnquiryForm from "../components/EnquiryForm";
import { COMPANY_DETAILS } from "../data/companyData";
import ScrollReveal from "../components/ScrollReveal";

const DELIVERABLES_DATA = {
  residential: {
    categoryLabel: "Residential Rooftop Solar Feasibility",
    deliverables: [
      {
        title: "3D Shadow & Rooftop Feasibility Audit",
        desc: "High-resolution irradiance mapping to identify zero-shadow usable rooftop areas.",
      },
      {
        title: "PVSyst Generation & Yield Projections",
        desc: "Accurate computer-simulated annual kWh generation tailored to your terrace.",
      },
      {
        title: "Bill Reduction & Payback ROI Model",
        desc: "Financial payback timeline, up to 90% monthly power bill savings, and ROI curve.",
      },
      {
        title: "PM Surya Ghar Subsidy Assistance",
        desc: "Direct navigation of central and state rooftop solar subsidies up to ₹78,000.",
      },
      {
        title: "Tier-1 Hardware Bill of Materials",
        desc: "Mono-PERC bifacial panels and European/top-tier smart grid inverters.",
      },
    ],
  },
  commercial: {
    categoryLabel: "Commercial Solar Proposal",
    deliverables: [
      {
        title: "Rooftop & Super-Structure Engineering",
        desc: "Elevated structures and structural load validation for commercial office buildings.",
      },
      {
        title: "PVSyst Financial & Accelerated Depreciation",
        desc: "Detailed cash-flow analysis incorporating 40% accelerated tax depreciation.",
      },
      {
        title: "LCOE vs Commercial Tariff Benchmarking",
        desc: "Direct comparison between levelized solar unit cost vs state grid tariffs.",
      },
      {
        title: "HT/LT Grid Synchronization Roadmap",
        desc: "Single-line diagram (SLD), net-metering sanctioning, and DISCOM clearances.",
      },
      {
        title: "Automated Remote Cloud Monitoring",
        desc: "Real-time generation telemetry and preventative maintenance SLA package.",
      },
    ],
  },
  industrial: {
    categoryLabel: "Industrial Captive Solar Feasibility",
    deliverables: [
      {
        title: "Captive & Open Access Feasibility Study",
        desc: "Evaluation of ground-mount, industrial shed, or open-access group captive models.",
      },
      {
        title: "Structural & Purlin Load Vetting",
        desc: "Wind speed and static load analysis for industrial metal sheds and terrain.",
      },
      {
        title: "Contract Demand & Peak Shaving Analysis",
        desc: "Curtail peak tariff demand surcharges and document verified ESG carbon offsets.",
      },
      {
        title: "CEIG & Transmission Liaisoning",
        desc: "End-to-end statutory approvals for electrical inspectorate and substation link.",
      },
      {
        title: "Utility-Grade High-Yield Hardware",
        desc: "Heavy-duty industrial inverters and structures with 25-year linear performance warranty.",
      },
    ],
  },
  transformers: {
    categoryLabel: "Power Transformer Technical Topology",
    deliverables: [
      {
        title: "Core & Coil Technical Topology Review",
        desc: "Electrolytic copper-wound design customized for solar inverter or industrial duty.",
      },
      {
        title: "Strict IS 2026 / IEC 60076 Standards",
        desc: "Engineered to withstand harsh harmonics, extreme temperatures, and voltage spikes.",
      },
      {
        title: "In-House Routine & Type Test Protocols",
        desc: "Losses, impedance, HV, and temperature-rise testing at our Dewas/Indore facility.",
      },
      {
        title: "Short-Circuit & Seismic Withstand Design",
        desc: "High mechanical stability and low acoustic noise level engineering.",
      },
      {
        title: "Fast-Track Logistics & Commissioning",
        desc: "Direct transit to site, oil filtration, and on-site testing support.",
      },
    ],
  },
  "turnkey-epc": {
    categoryLabel: "Turnkey Solar EPC Project Scope",
    deliverables: [
      {
        title: "Topography, Geotechnical & Hydrology Study",
        desc: "Comprehensive civil and soil assessments for MW-scale utility solar parks.",
      },
      {
        title: "33kV / 132kV Grid Evacuation Clearance",
        desc: "Transmission line routing, bay extension, and DISCOM / TRANSCO liaisoning.",
      },
      {
        title: "Integrated Transformer Substation Supply",
        desc: "Single-source procurement with in-house manufactured step-up transformers.",
      },
      {
        title: "MMS, Trackers & Robotic Cleaning Ready",
        desc: "Optimized tilt or tracker arrays for peak solar irradiance capture.",
      },
      {
        title: "CEIG Certification & 5-Year O&M SLA",
        desc: "Rapid commercial operation date (COD) commissioning and preventive maintenance.",
      },
    ],
  },
};

export default function Enquiry() {
  const [searchParams] = useSearchParams();

  // Parse incoming parameters
  const paramType = (searchParams.get("type") || "").toLowerCase();
  const paramReq = searchParams.get("requirement") || searchParams.get("project") || "";
  const paramIndustry = searchParams.get("industry") || "";
  const paramCap = searchParams.get("capacity") || "";
  const paramBill = searchParams.get("bill") || "";

  // Determine initial category dynamically based on parameters
  const initialCategory = useMemo(() => {
    const reqLower = paramReq.toLowerCase();
    if (reqLower.includes("transformer")) return "transformers";
    if (reqLower.includes("turnkey") || reqLower.includes("utility") || reqLower.includes("epc")) return "turnkey-epc";
    if (paramType === "commercial") return "commercial";
    if (paramType === "industrial") return "industrial";
    if (paramType === "transformers") return "transformers";
    if (paramType === "epc" || paramType === "turnkey-epc") return "turnkey-epc";
    return "residential";
  }, [paramType, paramReq]);

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const activeDeliverables = DELIVERABLES_DATA[selectedCategory] || DELIVERABLES_DATA.residential;

  return (
    <div className="pt-20 bg-[#F7F8F4] min-h-screen text-[#252A27]">
      {/* =========================================================
          1. HERO BANNER (Standardized #123C32 with Radial Tech Glow)
         ========================================================= */}
      <section className="relative overflow-hidden py-8 sm:py-10 bg-[#123C32] text-white">
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px]"></div>

        {/* Ambient lighting glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E8A83E]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal delay={0} className="max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold uppercase tracking-wider border border-[#E8A83E]/40 font-tech">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Techno-Commercial Portal • Turnaround &lt; 24h</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[36px] font-black tracking-tight text-white leading-tight font-heading">
              Engineering Feasibility &amp; <br />
              <span className="text-[#E8A83E] relative inline-block">
                Techno-Commercial Proposal.
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#E8A83E]/25 -z-10 rounded"></span>
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-[#E9F0E9]/85 leading-relaxed max-w-2xl mx-auto font-normal">
              Connect directly with Proton Power Infra's senior photovoltaic engineers and transformer specialists. Receive verified PVSyst generation yield projections, turnkey EPC budgets, and transformer engineering quotes with zero obligation.
            </p>

            {/* Micro-Telemetry Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 font-tech text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#E9F0E9]">
                <Activity className="w-3.5 h-3.5 text-[#E8A83E] animate-pulse" />
                <span>Indore HQ &amp; Dewas Plant</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#E9F0E9]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E8A83E]" />
                <span>125+ MW Installed Track Record</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#E9F0E9]">
                <Clock className="w-3.5 h-3.5 text-[#E8A83E]" />
                <span>Guaranteed 24-Hour Response</span>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================
          2. MAIN PORTAL GRID (Deliverables & Form)
         ========================================================= */}
      <section className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Column: What You Receive & Direct Desk (lg:col-span-5) */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-between bg-[#123C32] text-white rounded-2xl p-6 sm:p-7 shadow-xl relative overflow-hidden border border-[#123C32]/40">
              {/* Ambient Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E8A83E]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="space-y-4 relative z-10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-tech font-bold tracking-wider text-[#E8A83E] uppercase block">
                      Engineering Scope Included
                    </span>
                    <span className="text-[10px] font-tech text-[#E9F0E9]/80 px-2 py-0.5 rounded-full bg-white/10 border border-white/15">
                      Complimentary Audit
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white mt-1 leading-snug">
                    {activeDeliverables.categoryLabel}
                  </h3>
                </div>

                {/* Dynamic Deliverables List */}
                <div className="space-y-3">
                  {activeDeliverables.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 group">
                      <CheckCircle2 className="w-4 h-4 text-[#E8A83E] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="text-xs font-bold text-white leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-[#E9F0E9]/75 mt-0.5 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Engineering SLA Guarantee */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-[#E8A83E] text-[11px] font-tech uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Engineering Commitment &amp; SLA</span>
                  </div>
                  <p className="text-[11px] text-[#E9F0E9]/80 leading-relaxed">
                    Every feasibility review is prepared by a qualified electrical engineer using calibrated satellite irradiance and electrical load models. Zero obligation.
                  </p>
                </div>
              </div>

              {/* Bottom Direct Engineering Desk */}
              <div className="mt-6 pt-4 border-t border-white/10 relative z-10 space-y-3">
                <div className="text-[11px] font-tech font-bold text-[#E8A83E] uppercase tracking-wider">
                  Direct Engineering Desk
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={`tel:${COMPANY_DETAILS.phones[0].raw}`}
                    className="flex items-center gap-2 p-2 rounded-xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10 text-white"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E8A83E] shrink-0" />
                    <div className="truncate">
                      <div className="text-[9px] text-[#E9F0E9]/70 font-tech">Direct Desk</div>
                      <div className="text-[11px] font-bold truncate">{COMPANY_DETAILS.phones[0].display}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="flex items-center gap-2 p-2 rounded-xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10 text-white"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#E8A83E] shrink-0" />
                    <div className="truncate">
                      <div className="text-[9px] text-[#E9F0E9]/70 font-tech">Official Email</div>
                      <div className="text-[11px] font-bold truncate">{COMPANY_DETAILS.email}</div>
                    </div>
                  </a>
                </div>

                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow hover:bg-[#20ba59] transition-colors font-tech"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Instant Technical Consultation on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Streamlined Form (lg:col-span-7) */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col">
              <EnquiryForm
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                initialRequirement={paramReq}
                initialIndustry={paramIndustry}
                initialCapacity={paramCap}
                initialBill={paramBill}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
