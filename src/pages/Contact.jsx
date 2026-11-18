import { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Building,
  ShieldCheck,
  Globe,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Activity,
  SunMedium,
  Zap,
  Cpu,
  Layers,
  Factory,
  RefreshCw,
  X,
  FileText,
  SlidersHorizontal,
} from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";
import SmartImage from "../components/SmartImage";
import ScrollReveal from "../components/ScrollReveal";

// Authentic HQ Photo
import mainTopImg from "../assets/company/main-comany-name-image-or-top-image.jpg";

// =================================================================
// Category Definitions for Integrated Enquiry Portal
// =================================================================
const SOLUTION_CATEGORIES = [
  {
    id: "residential",
    label: "Residential Solar",
    shortLabel: "Residential",
    scale: "3kW – 25kW",
    icon: SunMedium,
  },
  {
    id: "commercial",
    label: "Commercial Solar",
    shortLabel: "Commercial",
    scale: "25kW – 500kW",
    icon: Building,
  },
  {
    id: "industrial",
    label: "Industrial Captive",
    shortLabel: "Industrial",
    scale: "500kW – 50MW",
    icon: Factory,
  },
  {
    id: "transformers",
    label: "Power Transformers",
    shortLabel: "Transformers",
    scale: "Inverter Duty & Substation",
    icon: Cpu,
  },
  {
    id: "turnkey-epc",
    label: "Turnkey Solar EPC",
    shortLabel: "Turnkey EPC",
    scale: "Utility & MW Scale",
    icon: Layers,
  },
];

const FACILITY_OPTIONS = {
  residential: [
    "Independent Villa / Bungalow",
    "Row House / Duplex",
    "Housing Society / Penthouse",
    "Farmhouse / Private Estate",
  ],
  commercial: [
    "Corporate Office Complex",
    "Hospital / Healthcare Facility",
    "Educational Campus / School",
    "Hotel, Resort & Hospitality",
    "Retail Mall & Supermarket Showroom",
  ],
  industrial: [
    "Manufacturing Factory / Shed",
    "Cold Storage & Food Processing",
    "Textile & Spinning Mill",
    "Heavy Engineering & Metal Fabrication",
    "Logistics Warehouse & Distribution Hub",
    "Chemical & Pharmaceutical Plant",
  ],
  transformers: [
    "Solar Park Substation (Inverter Duty)",
    "Industrial Captive Substation (11kV / 33kV)",
    "Step-Up / Step-Down Distribution Yard",
    "Utility / DISCOM Grid Substation",
    "Custom Industrial Power Application",
    "Transformer Repair & Overhaul Inquiry",
  ],
  "turnkey-epc": [
    "Utility Ground-Mounted Solar Park",
    "Multi-Megawatt Captive Solar Plant",
    "Floating / Canal-Top Solar Installation",
    "33kV / 132kV Substation & Grid Evacuation",
    "Open Access Group Captive Solar Project",
  ],
};

const CAPACITY_PLACEHOLDERS = {
  residential: "e.g. 5 kW or ₹4,500/mo electricity bill",
  commercial: "e.g. 50 kW or ₹1,20,000/mo electricity bill",
  industrial: "e.g. 500 kW / 1.5 MW contract demand",
  transformers: "e.g. 2.5 MVA, 33/0.8 kV Inverter Duty or 1000 kVA",
  "turnkey-epc": "e.g. 5 MW Ground-Mounted or 10 MW Utility Project",
};

// =================================================================
// Subcomponent: Direct Channel Card with Solar Gold Cursor Border Glow
// =================================================================
function ContactChannelCard({
  icon: Icon,
  title,
  description,
  children,
  btnText,
  btnIcon: BtnIcon,
  btnUrl,
  btnClass = "bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724]",
  btnGlowClass = "bg-[#E8A83E] opacity-45 group-hover/btn:opacity-85",
  btnIconColor = "text-[#202724]",
  isExternal = false,
  activeTag,
  iconHoverClass = "group-hover:border-[#E8A83E] group-hover:bg-[#FFFDF7] group-hover:text-[#D4952D] group-hover:shadow-[0_0_15px_rgba(232,168,62,0.25)]",
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl p-[1.5px] transition-all duration-300 ease-out select-none group flex flex-col justify-between hover:-translate-y-1.5"
    >
      {/* Dynamic Cursor-Responsive Border Glow (Solar Gold / Warm Tech Glow) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0.35,
          background: isHovered
            ? `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.95), rgba(232, 168, 62, 0.35) 45%, rgba(18, 60, 50, 0.15) 75%, transparent 100%)`
            : `linear-gradient(135deg, rgba(226, 232, 226, 0.9), rgba(247, 248, 244, 0.6))`,
        }}
      />

      {/* Inner Card Surface */}
      <div className="relative rounded-[14.5px] bg-white p-6 sm:p-7 flex flex-col justify-between h-full overflow-hidden transition-all duration-300 shadow-xs group-hover:shadow-2xl group-hover:shadow-black/5">
        {/* Soft Interior Ambient Glow following cursor */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[14.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(240px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.08), transparent 75%)`,
          }}
        />

        <div className="relative z-10">
          {/* Header Row: Minimalist Icon + Status Tag */}
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-12 h-12 rounded-2xl bg-[#F7F8F4] border border-[#E2E8E2] text-[#202724] flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-xs ${iconHoverClass}`}
            >
              <Icon className="w-5 h-5 stroke-[2]" />
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F7F8F4] text-[#525D57] border border-[#E2E8E2] group-hover:border-[#E8A83E]/40 group-hover:text-[#123C32] transition-colors">
              {activeTag}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[#202724] font-heading mb-1.5 group-hover:text-[#123C32] transition-colors">
            {title}
          </h3>
          <p className="text-xs text-[#525D57] mb-4 leading-relaxed">
            {description}
          </p>

          {/* Details / Content */}
          <div className="mb-2">
            {children}
          </div>
        </div>

        {/* Prominent Action Button with Glowing Effect */}
        <div className="relative z-10 pt-4 mt-4 border-t border-[#E2E8E2]">
          <div className="relative group/btn w-full">
            {/* Glowing Ambient Halo */}
            <div
              className={`absolute -inset-1 rounded-xl blur-md transition duration-500 pointer-events-none group-hover/btn:scale-105 ${btnGlowClass}`}
            />
            <a
              href={btnUrl}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={`relative w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-black/15 transition-all duration-300 font-tech tracking-wide cursor-pointer ${btnClass}`}
            >
              {BtnIcon && <BtnIcon className={`w-4 h-4 ${btnIconColor}`} />}
              <span>{btnText}</span>
              {isExternal ? (
                <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover/btn:translate-x-0.5 transition-transform ml-auto" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5 opacity-80 group-hover/btn:translate-x-1.5 transition-transform duration-200 ml-auto" />
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// =================================================================
// Subcomponent: Enquiry Portal Container with Solar Gold Cursor Border Glow
// =================================================================
function EnquiryPortalContainer({ children }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-3xl p-[1px] transition-all duration-300 select-none max-w-4xl mx-auto shadow-2xl shadow-black/5"
    >
      {/* Dynamic Cursor-Responsive Border Glow (Solar Gold / Warm Tech Glow) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0.4,
          background: isHovered
            ? `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.95), rgba(232, 168, 62, 0.35) 45%, rgba(18, 60, 50, 0.1) 75%, transparent 100%)`
            : `linear-gradient(135deg, rgba(226, 232, 226, 0.9), rgba(247, 248, 244, 0.6))`,
        }}
      />

      {/* Form Surface */}
      <div className="relative rounded-[22.5px] bg-white p-6 sm:p-10 lg:p-12 shadow-sm overflow-hidden">
        {/* Soft Interior Ambient Glow following cursor */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[22.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.05), transparent 75%)`,
          }}
        />

        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [searchParams] = useSearchParams();

  // Parse incoming parameters from URL (e.g. ?type=residential or ?project=...)
  const paramType = (searchParams.get("type") || "").toLowerCase();
  const paramReq = searchParams.get("requirement") || searchParams.get("project") || "";
  const paramIndustry = searchParams.get("industry") || "";
  const paramCap = searchParams.get("capacity") || "";
  const paramBill = searchParams.get("bill") || "";

  // Dynamic Initial Category
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

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    projectLocation: "",
    facilityType: paramIndustry || "",
    capacityOrBill: paramCap || paramBill ? `${paramCap || ""} ${paramBill ? `(Bill: ₹${paramBill})` : ""}`.trim() : "",
    notes: paramReq ? `Target Scope / Project: ${paramReq}` : "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const location = useLocation();

  // Smooth scroll to inquiry form if hash or query parameters are targeted
  useEffect(() => {
    if (location.hash === "#inquiry-form" || location.hash === "#inquiry-portal") {
      const el = document.getElementById("inquiry-form");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 120);
      }
    } else if (paramType || paramReq || paramIndustry || paramCap || paramBill) {
      const el = document.getElementById("inquiry-form");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }, [location.hash, paramType, paramReq, paramIndustry, paramCap, paramBill]);

  // Sync category if URL search param updates
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
    if (paramReq) {
      setFormData((prev) => ({
        ...prev,
        notes: prev.notes ? prev.notes : `Target Scope / Project: ${paramReq}`,
      }));
    }
  }, [initialCategory, paramReq]);

  const activeCategoryMeta = SOLUTION_CATEGORIES.find((c) => c.id === selectedCategory) || SOLUTION_CATEGORIES[0];
  const facilityList = FACILITY_OPTIONS[selectedCategory] || FACILITY_OPTIONS.residential;
  const capacityPlaceholder = CAPACITY_PLACEHOLDERS[selectedCategory] || CAPACITY_PLACEHOLDERS.residential;

  // Validation
  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.trim().replace(/\s+/g, ""))) {
      errs.mobileNumber = "Please enter a valid 10-digit Indian mobile number";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.projectLocation.trim()) {
      errs.projectLocation = "City / Project Location is required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `PPI-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceId(generatedId);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setSubmitted(false);
    setReferenceId("");
    setFormData({
      fullName: "",
      mobileNumber: "",
      email: "",
      projectLocation: "",
      facilityType: "",
      capacityOrBill: "",
      notes: "",
    });
  };

  return (
    <div className="pt-20 bg-[#F7F8F4] min-h-screen text-[#252A27]">
      {/* =========================================================
          1. HERO SECTION (Golden Standard: Matching 400px Heights, 
             Centered Content, Prominent Multi-Color Glows)
         ========================================================= */}
      <section className="relative overflow-hidden py-6 sm:py-7 lg:py-8 bg-[#123C32] text-white">
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px]"></div>

        {/* Multi-Color Ambient Lighting Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E8A83E]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Left Content Column - Equal 50% Width, Matching 400px Height, All Centered */}
            <div className="flex flex-col h-full w-full justify-center">
              <ScrollReveal delay={0} className="h-full flex flex-col justify-center items-center text-center space-y-4 sm:space-y-4.5 py-1 min-h-[360px] sm:min-h-[380px] lg:h-[400px] lg:min-h-[400px]">
                {/* Heading - Centered */}
                <h1 className="text-3xl sm:text-4xl lg:text-[34px] xl:text-[38px] font-black tracking-tight text-white leading-[1.14] font-heading text-center mx-auto max-w-lg lg:max-w-xl">
                  <span className="lg:whitespace-nowrap">Connect with Our Engineers &amp;</span> <br />
                  <span className="text-[#E8A83E] relative inline-block">
                    Techno-Commercial Portal.
                    <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#E8A83E]/25 -z-10 rounded"></span>
                  </span>
                </h1>

                {/* Paragraph Description - Centered */}
                <p className="text-xs sm:text-sm text-[#E9F0E9]/85 leading-relaxed font-normal text-center max-w-lg mx-auto">
                  Direct engineering desk for turnkey Solar EPC feasibility, in-house Power Transformer manufacturing, and rapid plant deployment. Headquartered in Indore with nationwide execution and zero-obligation proposals.
                </p>

                {/* CTA Button with Multi-Color Aurora Glow - Centered */}
                <div className="pt-0.5 flex items-center justify-center w-full">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E8A83E] via-emerald-400 to-sky-400 rounded-2xl blur-md opacity-40 group-hover:opacity-85 transition duration-500 group-hover:scale-105"></div>
                    <a
                      href="#inquiry-form"
                      className="relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/25 transition-all duration-300 font-tech tracking-wide cursor-pointer"
                    >
                      <span>Start Project Proposal &amp; Inquiry</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                    </a>
                  </div>
                </div>

                {/* Metrics Bar - Centered */}
                <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-3 font-tech w-full max-w-lg mx-auto text-center">
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">&lt; 24h</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      Turnaround SLA
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">125+ MW</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      Installed Track
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">Indore HQ</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      &amp; Dewas Plant
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Visual Capsule - Equal 50% Width, Matching 400px Height */}
            <div className="flex flex-col h-full w-full justify-center">
              <ScrollReveal delay={140} className="h-full flex flex-col justify-center">
                <div className="relative w-full h-full min-h-[360px] sm:min-h-[380px] lg:h-[400px] lg:min-h-[400px] max-h-[420px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/90 bg-neutral-900 group select-none flex flex-col justify-between">
                  {/* Photo Frame (Full Height Edge-to-Edge) */}
                  <div className="relative w-full h-full min-h-[360px] sm:min-h-[380px] lg:h-[400px] lg:min-h-[400px] max-h-[420px] overflow-hidden bg-black/40">
                    <SmartImage
                      src={mainTopImg}
                      alt="Proton Power Infra Corporate Headquarters in Indore"
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
                      <span>Indore Corporate HQ • Active</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#202724]/85 backdrop-blur-md text-[9px] font-mono text-[#E9F0E9] border border-white/10">
                      <span>22.75° N, 75.89° E</span>
                    </div>
                  </div>

                  {/* Bottom Spec Capsule */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/80 z-20">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-ping"></span>
                        <span className="text-xs font-bold text-[#123C32] uppercase tracking-wider font-tech">
                          Solar EPC &amp; Power Transformer Works
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#525D57] leading-relaxed">
                      Plot No. 242, Sch. No. 78, Vijay Nagar, Indore. Single-Line Diagram audits &amp; transformer technical specifications reviewed daily.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. DIRECT COMMUNICATIONS CHANNELS (3 Minimalist Elegant Cards with Solar Gold Border Glow)
         ========================================================= */}
      <section className="py-12 md:py-16 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0} className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight font-heading leading-tight mb-2">
              Direct Engineering &amp; Commercial Channels
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed max-w-2xl mx-auto">
              Choose the fastest communication channel for your organization. Our senior engineers respond promptly during business hours.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
            {/* Card 1: Telephone Inquiries */}
            <ContactChannelCard
              icon={Phone}
              title="Telephone Inquiries"
              description="Direct support lines for tenders, site surveys & quotations:"
              activeTag="2 Lines Active"
              btnText="Call Primary Desk"
              btnIcon={Phone}
              btnUrl={`tel:${COMPANY_DETAILS.primaryPhoneRaw}`}
              btnClass="bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724]"
              btnGlowClass="bg-gradient-to-r from-[#E8A83E] via-amber-300 to-[#E8A83E] opacity-35 group-hover/btn:opacity-85"
              btnIconColor="text-[#202724]"
            >
              <div className="space-y-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phones[0].raw}`}
                  className="group/phone flex items-center justify-between p-2.5 rounded-xl bg-[#F7F8F4] hover:bg-[#FFFDF7] border border-[#E2E8E2] hover:border-[#E8A83E] transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-[0_0_12px_rgba(232,168,62,0.25)]"
                  title="Click to call Primary Desk"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse"></span>
                    <span className="text-xs sm:text-sm font-bold text-[#202724] group-hover/phone:text-[#D4952D] font-tech transition-colors">
                      {COMPANY_DETAILS.phones[0].display}
                    </span>
                  </div>
                  <span className="text-[10px] font-tech font-bold uppercase tracking-wider text-[#525D57] group-hover/phone:text-[#D4952D] flex items-center gap-1 transition-colors">
                    <span>Line 1</span>
                    <Phone className="w-3 h-3 text-[#E8A83E]" />
                  </span>
                </a>

                <a
                  href={`tel:${COMPANY_DETAILS.phones[1].raw}`}
                  className="group/phone flex items-center justify-between p-2.5 rounded-xl bg-[#F7F8F4] hover:bg-[#FFFDF7] border border-[#E2E8E2] hover:border-[#E8A83E] transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-[0_0_12px_rgba(232,168,62,0.25)]"
                  title="Click to call Secondary Desk"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <span className="text-xs sm:text-sm font-bold text-[#202724] group-hover/phone:text-[#D4952D] font-tech transition-colors">
                      {COMPANY_DETAILS.phones[1].display}
                    </span>
                  </div>
                  <span className="text-[10px] font-tech font-bold uppercase tracking-wider text-[#525D57] group-hover/phone:text-[#D4952D] flex items-center gap-1 transition-colors">
                    <span>Line 2</span>
                    <Phone className="w-3 h-3 text-[#E8A83E]" />
                  </span>
                </a>
              </div>
            </ContactChannelCard>

            {/* Card 2: Official Email Desk */}
            <ContactChannelCard
              icon={Mail}
              title="Official Email Desk"
              description="Send architectural drawings, RFP tenders, and Single-Line Diagrams:"
              activeTag="24h Turnaround"
              btnText="Send Direct Email"
              btnIcon={Mail}
              btnUrl={`mailto:${COMPANY_DETAILS.email}`}
              btnClass="bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724]"
              btnGlowClass="bg-gradient-to-r from-[#E8A83E] via-amber-300 to-[#E8A83E] opacity-35 group-hover/btn:opacity-85"
              btnIconColor="text-[#202724]"
            >
              <div className="space-y-2">
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="group/email flex items-center justify-between p-2.5 rounded-xl bg-[#F7F8F4] hover:bg-[#FFFDF7] border border-[#E2E8E2] hover:border-[#E8A83E] transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-[0_0_12px_rgba(232,168,62,0.25)]"
                  title="Click to send tender inquiries"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse"></span>
                    <span className="text-xs sm:text-sm font-bold text-[#202724] group-hover/email:text-[#D4952D] font-tech transition-colors truncate">
                      {COMPANY_DETAILS.email}
                    </span>
                  </div>
                  <span className="text-[10px] font-tech font-bold uppercase tracking-wider text-[#525D57] group-hover/email:text-[#D4952D] flex items-center gap-1 transition-colors shrink-0 ml-2">
                    <span>Tenders</span>
                    <Mail className="w-3 h-3 text-[#E8A83E]" />
                  </span>
                </a>

                <a
                  href="mailto:projects@protonpowerinfra.com"
                  className="group/email flex items-center justify-between p-2.5 rounded-xl bg-[#F7F8F4] hover:bg-[#FFFDF7] border border-[#E2E8E2] hover:border-[#E8A83E] transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-[0_0_12px_rgba(232,168,62,0.25)]"
                  title="Click to send project specifications & BOQ"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <span className="text-xs sm:text-sm font-bold text-[#202724] group-hover/email:text-[#D4952D] font-tech transition-colors truncate">
                      projects@protonpowerinfra.com
                    </span>
                  </div>
                  <span className="text-[10px] font-tech font-bold uppercase tracking-wider text-[#525D57] group-hover/email:text-[#D4952D] flex items-center gap-1 transition-colors shrink-0 ml-2">
                    <span>Projects</span>
                    <Mail className="w-3 h-3 text-[#E8A83E]" />
                  </span>
                </a>
              </div>
            </ContactChannelCard>

            {/* Card 3: Instant WhatsApp Desk */}
            <ContactChannelCard
              icon={MessageSquare}
              title="Instant WhatsApp Desk"
              description="Fastest channel for site photos, rooftop videos, and feasibility chats:"
              activeTag="Instant Chat"
              btnText="Open WhatsApp Chat"
              btnIcon={MessageSquare}
              btnUrl={COMPANY_DETAILS.whatsappUrl}
              isExternal={true}
              btnClass="bg-[#25D366] hover:bg-[#20ba59] text-white"
              btnGlowClass="bg-[#25D366] opacity-35 group-hover/btn:opacity-85"
              btnIconColor="text-white fill-white"
              iconHoverClass="group-hover:border-[#25D366] group-hover:bg-emerald-50/50 group-hover:text-[#25D366] group-hover:shadow-[0_0_15px_rgba(37,211,102,0.25)]"
            >
              <div className="space-y-2">
                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/wa flex items-center justify-between p-2.5 rounded-xl bg-[#F7F8F4] hover:bg-emerald-50/50 border border-[#E2E8E2] hover:border-[#25D366] transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-[0_0_12px_rgba(37,211,102,0.25)]"
                  title="Click to chat on WhatsApp with Primary Desk"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0"></span>
                    <span className="text-xs sm:text-sm font-bold text-[#202724] group-hover/wa:text-[#25D366] font-tech transition-colors">
                      +91 97707 44687
                    </span>
                  </div>
                  <span className="text-[10px] font-tech font-bold uppercase tracking-wider text-[#525D57] group-hover/wa:text-[#25D366] flex items-center gap-1 transition-colors">
                    <span>Chat 1</span>
                    <MessageSquare className="w-3 h-3 text-[#25D366] fill-[#25D366]/20" />
                  </span>
                </a>

                <a
                  href="https://wa.me/919685320092?text=Hello%20Proton%20Power%20Infra%2C%20I%20am%20sharing%20site%20photos%20and%20project%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/wa flex items-center justify-between p-2.5 rounded-xl bg-[#F7F8F4] hover:bg-emerald-50/50 border border-[#E2E8E2] hover:border-[#25D366] transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-[0_0_12px_rgba(37,211,102,0.25)]"
                  title="Click to share site photos on WhatsApp Line 2"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0"></span>
                    <span className="text-xs sm:text-sm font-bold text-[#202724] group-hover/wa:text-[#25D366] font-tech transition-colors">
                      +91 96853 20092
                    </span>
                  </div>
                  <span className="text-[10px] font-tech font-bold uppercase tracking-wider text-[#525D57] group-hover/wa:text-[#25D366] flex items-center gap-1 transition-colors">
                    <span>Chat 2</span>
                    <MessageSquare className="w-3 h-3 text-[#25D366] fill-[#25D366]/20" />
                  </span>
                </a>
              </div>
            </ContactChannelCard>
          </div>
        </div>
      </section>

            {/* =========================================================
          3. RECREATED TECHNO-COMMERCIAL ENQUIRY & PROPOSAL PORTAL
             (Simple, Elegant, Unified Container with Solar Gold Border Glow)
         ========================================================= */}
      <section id="inquiry-form" className="py-8 md:py-10 bg-[#F7F8F4] border-b border-[#E2E8E2] scroll-mt-20 relative overflow-hidden">
        {/* Soft Ambient Background Lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8A83E]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <EnquiryPortalContainer>
            {/* Header inside the form */}
            <div className="border-b border-[#E2E8E2] pb-3 mb-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                
                <h2 className="text-2xl sm:text-3xl font-black text-[#202724] font-heading tracking-tight leading-tight">
                  Request Project Proposal &amp; Feasibility
                </h2>
                <p className="text-xs sm:text-sm text-[#525D57] mt-1 leading-relaxed text-justify-clean">
                  Fill in your parameters below. Our engineering desk will review technical feasibility and contact you within 24 business hours.
                </p>
              </div>

              {/* <div className="hidden sm:flex flex-col items-end shrink-0">
                <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Response &lt; 24h
                </span>
                
              </div> */}
            </div>

            {submitted ? (
              /* Success Confirmation Screen */
              <div className="py-8 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#E9F0E9] text-[#123C32] flex items-center justify-center mx-auto ring-8 ring-[#123C32]/10 shadow-md">
                  <CheckCircle2 className="w-10 h-10 text-[#123C32]" />
                </div>

                <div className="space-y-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#123C32]/10 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech">
                    Transmission Confirmed
                  </span>
                  <h4 className="font-heading text-2xl font-black text-[#202724]">
                    Thank You, {formData.fullName}!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#525D57] max-w-md mx-auto leading-relaxed">
                    Your inquiry has been registered under reference <strong>{referenceId}</strong>. A senior engineer will review your parameters and connect via <strong>{formData.email}</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] max-w-sm mx-auto text-left text-xs space-y-2">
                  <div className="flex justify-between items-center pb-1 border-b border-[#E2E8E2]">
                    <span className="text-[#525D57]">Tracking ID:</span>
                    <span className="font-tech font-bold text-[#123C32]">{referenceId}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#525D57]">Domain:</span>
                    <span className="font-bold text-[#202724]">{activeCategoryMeta.label}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#525D57]">Project Location:</span>
                    <span className="font-semibold text-[#202724]">{formData.projectLocation}</span>
                  </div>
                  {formData.facilityType && (
                    <div className="flex justify-between items-center">
                      <span className="text-[#525D57]">Facility Type:</span>
                      <span className="font-semibold text-[#202724]">{formData.facilityType}</span>
                    </div>
                  )}
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <div className="relative group/wa w-full sm:w-auto">
                    <div className="absolute -inset-0.5 bg-[#25D366] rounded-xl blur-sm opacity-45 group-hover/wa:opacity-85 transition duration-300 pointer-events-none"></div>
                    <a
                      href={`https://wa.me/919770744687?text=${encodeURIComponent(
                        `Hello Proton Power Infra, I have submitted a ${activeCategoryMeta.label} proposal request (Ref: ${referenceId}) for ${formData.projectLocation}. Please provide techno-commercial feasibility details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-md transition-all font-tech w-full sm:w-auto cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Instant WhatsApp Follow-Up</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#E2E8E2] text-xs sm:text-sm font-semibold text-[#525D57] hover:bg-neutral-100 transition-colors cursor-pointer w-full sm:w-auto"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Requirement</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Live Form Fields */
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* 1. SERVICE / SOLUTION DOMAIN SELECTOR (INSIDE FORM) */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold text-[#202724] font-tech uppercase tracking-wider">
                      Select Solution Category <span className="text-[#E8A83E]">*</span>
                    </label>
                    <span className="text-[11px] font-tech text-[#525D57]">
                      Selected: <strong className="text-[#123C32]">{activeCategoryMeta.label}</strong>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                    {SOLUTION_CATEGORIES.map((cat) => {
                      const Icon = cat.icon;
                      const isSelected = selectedCategory === cat.id;

                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => {
                            setSelectedCategory(cat.id);
                            setFormData((p) => ({ ...p, facilityType: "" }));
                          }}
                          className={`relative p-3 rounded-2xl border text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-center group focus:outline-none ${
                            isSelected
                              ? "bg-[#123C32] text-white border-[#E8A83E] shadow-md ring-2 ring-[#E8A83E]/40 scale-[1.02]"
                              : "bg-[#F7F8F4] text-[#202724] border-[#E2E8E2] hover:border-[#E8A83E]/60 hover:bg-[#FFFDF7] shadow-2xs"
                          }`}
                        >
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center mb-1.5 transition-transform duration-200 group-hover:scale-110 ${
                              isSelected
                                ? "bg-[#E8A83E] text-[#123C32]"
                                : "bg-white text-[#202724] border border-[#E2E8E2]"
                            }`}
                          >
                            <Icon className="w-4 h-4 stroke-[2.2]" />
                          </div>

                          <span className="font-bold text-xs leading-tight font-heading">
                            {cat.shortLabel}
                          </span>
                          <span
                            className={`text-[9px] font-mono mt-0.5 line-clamp-1 ${
                              isSelected ? "text-[#E8A83E]" : "text-[#525D57]"
                            }`}
                          >
                            {cat.scale}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. CONTACT DETAILS: Full Name & Mobile Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-xs font-semibold text-[#202724] mb-1 font-tech uppercase tracking-wider">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Vikram Sharma"
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm bg-[#F7F8F4] hover:bg-white focus:bg-white focus:outline-none transition-all duration-200 ${
                        errors.fullName
                          ? "border-red-400 focus:ring-2 focus:ring-red-200"
                          : "border-[#E2E8E2] focus:border-[#E8A83E] focus:ring-2 focus:ring-[#E8A83E]/30 focus:shadow-[0_0_12px_rgba(232,168,62,0.2)]"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-[11px] mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#202724] mb-1 font-tech uppercase tracking-wider">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="9770744687"
                      maxLength={10}
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm bg-[#F7F8F4] hover:bg-white focus:bg-white focus:outline-none transition-all duration-200 ${
                        errors.mobileNumber
                          ? "border-red-400 focus:ring-2 focus:ring-red-200"
                          : "border-[#E2E8E2] focus:border-[#E8A83E] focus:ring-2 focus:ring-[#E8A83E]/30 focus:shadow-[0_0_12px_rgba(232,168,62,0.2)]"
                      }`}
                    />
                    {errors.mobileNumber && (
                      <p className="text-red-500 text-[11px] mt-1">{errors.mobileNumber}</p>
                    )}
                  </div>
                </div>

                {/* 3. LOCATION & EMAIL: Email Address & Project Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#202724] mb-1 font-tech uppercase tracking-wider">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vikram@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm bg-[#F7F8F4] hover:bg-white focus:bg-white focus:outline-none transition-all duration-200 ${
                        errors.email
                          ? "border-red-400 focus:ring-2 focus:ring-red-200"
                          : "border-[#E2E8E2] focus:border-[#E8A83E] focus:ring-2 focus:ring-[#E8A83E]/30 focus:shadow-[0_0_12px_rgba(232,168,62,0.2)]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#202724] mb-1 font-tech uppercase tracking-wider">
                      City / Project Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      placeholder="e.g. Indore, Dewas, Bhopal, Delhi NCR"
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm bg-[#F7F8F4] hover:bg-white focus:bg-white focus:outline-none transition-all duration-200 ${
                        errors.projectLocation
                          ? "border-red-400 focus:ring-2 focus:ring-red-200"
                          : "border-[#E2E8E2] focus:border-[#E8A83E] focus:ring-2 focus:ring-[#E8A83E]/30 focus:shadow-[0_0_12px_rgba(232,168,62,0.2)]"
                      }`}
                    />
                    {errors.projectLocation && (
                      <p className="text-red-500 text-[11px] mt-1">{errors.projectLocation}</p>
                    )}
                  </div>
                </div>

                {/* 4. TECHNICAL PARAMETERS: Facility Type & Capacity / Bill */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#202724] mb-1 font-tech uppercase tracking-wider">
                      Facility Type
                    </label>
                    <select
                      name="facilityType"
                      value={formData.facilityType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8E2] text-xs sm:text-sm bg-[#F7F8F4] hover:bg-white focus:bg-white focus:outline-none focus:border-[#E8A83E] focus:ring-2 focus:ring-[#E8A83E]/30 focus:shadow-[0_0_12px_rgba(232,168,62,0.2)] transition-all duration-200 cursor-pointer"
                    >
                      <option value="">Select Facility Type...</option>
                      {facilityList.map((f, i) => (
                        <option key={i} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#202724] mb-1 font-tech uppercase tracking-wider">
                      Estimated Capacity / Bill
                    </label>
                    <input
                      type="text"
                      name="capacityOrBill"
                      value={formData.capacityOrBill}
                      onChange={handleChange}
                      placeholder={capacityPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8E2] text-xs sm:text-sm bg-[#F7F8F4] hover:bg-white focus:bg-white focus:outline-none focus:border-[#E8A83E] focus:ring-2 focus:ring-[#E8A83E]/30 focus:shadow-[0_0_12px_rgba(232,168,62,0.2)] transition-all duration-200"
                    />
                  </div>
                </div>

                {/* 5. NOTES: Project Specifications / Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-[#202724] mb-1 font-tech uppercase tracking-wider">
                    Project Specifications / Additional Notes
                  </label>
                  <textarea
                    rows={3}
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Detail your plant requirement, transformer kVA/MVA rating, target COD timeline, or any specific grid constraints..."
                    className="w-full px-4 py-3 rounded-xl border border-[#E2E8E2] text-xs sm:text-sm bg-[#F7F8F4] hover:bg-white focus:bg-white focus:outline-none focus:border-[#E8A83E] focus:ring-2 focus:ring-[#E8A83E]/30 focus:shadow-[0_0_12px_rgba(232,168,62,0.2)] transition-all duration-200"
                  ></textarea>
                </div>

                {/* 6. GLOWING SUBMIT BUTTON */}
                <div className="pt-2">
                  <div className="relative group/btn w-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E8A83E] via-amber-300 to-[#E8A83E] rounded-xl blur-md opacity-35 group-hover/btn:opacity-85 transition duration-500 group-hover/btn:scale-105 pointer-events-none"></div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/15 transition-all duration-300 cursor-pointer disabled:opacity-75 font-tech tracking-wide"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <RefreshCw className="w-4 h-4 animate-spin text-[#202724]" />
                          <span>Transmitting Proposal Request to Engineering Desk...</span>
                        </span>
                      ) : (
                        <>
                          <span>Transmit Proposal Request to Senior Engineering Desk</span>
                          <Send className="w-4 h-4 text-[#202724] group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Trust Footer Badges */}
                <div className="pt-3 border-t border-[#E2E8E2] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-tech text-[#525D57]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Zero Obligation Technical Assessment
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    100% Confidential Data Security
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#E8A83E]" />
                    Response Guaranteed &lt; 24h
                  </span>
                </div>
              </form>
            )}
          </EnquiryPortalContainer>
        </div>
      </section>

      {/* =========================================================
          4. HEADQUARTERS & REGIONAL OPERATIONS HUBS
         ========================================================= */}
      <section className="py-12 md:py-16 bg-white border-b border-[#E2E8E2] relative overflow-hidden">
        {/* Subtle background ambient glows */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#E8A83E]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0} className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold font-tech uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E8A83E]" />
              <span>Pan-India Presence</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight font-heading leading-tight mb-2">
              Our Headquarters &amp; Regional Operations Hubs
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed max-w-2xl mx-auto">
              Strategic offices across Central India and NCR providing rapid engineering mobilization, regulatory liaisoning, and on-site support.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {COMPANY_DETAILS.offices.map((off, idx) => {
              const isHQ = off.role.toLowerCase().includes("headquarters");
              return (
                <ScrollReveal key={idx} delay={idx * 70}>
                  <div
                    className={`group relative p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 ${
                      isHQ
                        ? "bg-[#F7F8F4] border-[#123C32]/40 shadow-md ring-1 ring-[#123C32]/20 hover:border-[#E8A83E] hover:shadow-[0_0_24px_rgba(232,168,62,0.22)]"
                        : "bg-[#F7F8F4] border-[#E2E8E2] hover:border-[#E8A83E] hover:shadow-[0_0_20px_rgba(232,168,62,0.18)] shadow-xs"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                            isHQ ? "bg-[#123C32] text-[#E8A83E]" : "bg-white border border-[#E2E8E2] text-[#123C32] group-hover:border-[#E8A83E]"
                          }`}>
                            <Building className="w-4 h-4" />
                          </div>
                          <h3 className="font-black text-base text-[#123C32] font-heading group-hover:text-[#D4952D] transition-colors">
                            {off.city}
                          </h3>
                        </div>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded font-tech flex items-center gap-1 ${
                            isHQ
                              ? "bg-[#123C32] text-[#E8A83E] shadow-xs"
                              : "bg-[#E9F0E9] text-[#123C32] group-hover:bg-[#FFFDF7] group-hover:text-[#D4952D]"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span>{off.role}</span>
                        </span>
                      </div>

                      <p className="text-xs text-[#525D57] leading-relaxed mb-3">
                        {off.address}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E2E8E2] flex items-center justify-between text-[11px] font-tech text-[#123C32] font-semibold">
                      <span className="group-hover:text-[#D4952D] transition-colors">
                        {isHQ
                          ? "Design & Executive Hub"
                          : off.city === "Dewas"
                          ? "Manufacturing & Testing"
                          : "Regional EPC Desk"}
                      </span>
                      <MapPin className="w-3.5 h-3.5 text-[#E8A83E] group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. INDORE HQ INTERACTIVE MAP & VISITOR ACCESS
         ========================================================= */}
      <section className="py-12 md:py-14 bg-[#F7F8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8E2] shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#123C32] text-[#E8A83E] font-tech">
                  Corporate Location
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#202724] font-heading mt-1">
                  Visit Our Vijay Nagar Headquarters in Indore
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#525D57] max-w-md">
                In-person engineering meetings, architectural blueprint evaluations, and contract discussions are hosted during working hours.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#E2E8E2] relative h-72 sm:h-80 lg:h-96 w-full shadow-xs">
              <iframe
                title="Proton Power Infra Indore Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14717.393438865615!2d75.8822!3d22.7533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302a9eb786197%3A0xe54d4e3049b4c09!2sScheme%20No%2078%2C%20Vijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
