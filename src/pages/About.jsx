import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  CheckCircle2,
  ArrowRight,
  Zap,
  Building,
  Cpu,
  Sparkles,
  Phone,
  Activity,
} from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";
import SmartImage from "../components/SmartImage";
import ScrollReveal from "../components/ScrollReveal";
import CompanyTimeline from "../components/about/CompanyTimeline";
import SEO from "../components/SEO";

// Authentic Company Assets
import mainTopImg from "../assets/company/main-comany-name-image-or-top-image.webp";
import utilityPlantImg from "../assets/company/real-project-utility-plant.webp";
import solarRowsImg from "../assets/company/real-project-solar-rows.webp";
import transformerSubstationImg from "../assets/company/real-project-transformer-substation.webp";
import project1Img from "../assets/company/project-1.webp";
import project2Img from "../assets/company/project-2.webp";
import groundMountedImg from "../assets/commercial-assets/ground-mounted-image.webp";

// =================================================================
// Subcomponent: PillarCard with Cursor-Following Border & Glow
// =================================================================
function PillarCard({ icon: Icon, badge, title, description, metric }) {
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
      className="relative rounded-2xl p-[1.5px] transition-all duration-500 ease-out select-none group flex flex-col justify-between"
    >
      {/* Dynamic Cursor-Responsive Border Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0.35,
          background: isHovered
            ? `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.95), rgba(232, 168, 62, 0.35) 45%, rgba(18, 60, 50, 0.2) 75%, transparent 100%)`
            : `linear-gradient(135deg, rgba(226, 232, 226, 0.9), rgba(247, 248, 244, 0.6))`,
        }}
      />

      {/* Inner Card Surface */}
      <div className="relative rounded-[14.5px] bg-white p-6 sm:p-7 flex flex-col justify-between h-full overflow-hidden transition-all duration-300 shadow-xs group-hover:shadow-xl group-hover:shadow-black/5">
        {/* Soft Interior Ambient Glow following cursor */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[14.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(240px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.08), transparent 75%)`,
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#E9F0E9] text-[#123C32] flex items-center justify-center group-hover:bg-[#E8A83E] group-hover:text-[#123C32] group-hover:scale-105 transition-all duration-300 shadow-xs">
              <Icon className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-0.5 rounded-full bg-[#E8A83E]"></span>
              <span className="text-xs font-bold font-tech uppercase tracking-widest text-[#123C32]">
                {badge}
              </span>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#202724] font-heading mb-2 leading-snug group-hover:text-[#123C32] transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed text-justify-clean">
            {description}
          </p>
        </div>

        <div className="relative z-10 pt-4 mt-5 border-t border-[#E2E8E2] text-xs font-bold text-[#123C32] font-tech flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#123C32]" />
          <span>{metric}</span>
        </div>
      </div>
    </div>
  );
}

// =================================================================
// Subcomponent: FlipProjectCard (Visual-First, Flip on Hover & Click)
// =================================================================
function FlipProjectCard({ project, isFlipped: isFlippedControlled, onToggleFlip }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    // Only track cursor glow on devices with fine pointer (mouse)
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    // Only flip on hover if device has hover capability (desktop/laptop)
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setIsHovered(false);
    }
  };

  const handleClick = (e) => {
    // Prevent flipping back when clicking action buttons or links
    if (e.target.closest("button") || e.target.closest("a")) return;
    if (onToggleFlip) {
      onToggleFlip();
    }
  };

  const handleEnquire = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/contact?project=${encodeURIComponent(project.title)}#inquiry-form`);
  };

  const isFlipped = isFlippedControlled || isHovered;

  return (
    <div
      className="group relative h-[330px] sm:h-[350px] w-full [perspective:1200px] cursor-pointer select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* 3D Flip Container */}
      <div
        className="relative h-full w-full rounded-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* =========================================================
            FRONT FACE (Only Image + Heading + Subheading)
           ========================================================= */}
        <div
          className={`absolute inset-0 h-full w-full rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl border-2 border-white/80 bg-[#0D2B24] flex flex-col justify-end transition-opacity duration-300 ${
            isFlipped ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"
          }`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Edge-to-Edge Image */}
          <SmartImage
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
            containerClassName="w-full h-full absolute inset-0"
          />

          {/* Vignette Gradient for Crisp Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B24]/95 via-[#0D2B24]/40 to-transparent pointer-events-none"></div>

          {/* Dynamic Cursor-Responsive Ambient Border Glow on Front */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500 z-10"
            style={{
              opacity: isHovered ? 1 : 0.35,
              background: isHovered
                ? `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.4), transparent 75%)`
                : "transparent",
            }}
          />

          {/* Top Status Badge */}
          

          {/* Bottom Heading & Subheading (Universal Height for Identical Framing) */}
          <div className="relative z-20 p-4 sm:p-5 text-white">
            <div className="flex items-center gap-2 mb-1">
              
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#E8A83E] uppercase tracking-wider">
                {project.capacity
                }
              </span>
            </div>
            <div className="min-h-[2.8rem] sm:min-h-[3.2rem] flex items-center mb-1">
              <h3 className="text-lg sm:text-xl font-black font-heading text-white tracking-tight leading-snug line-clamp-2">
                {project.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#E9F0E9]/80 font-medium line-clamp-1 truncate">
              {project.subheading}
            </p>
          </div>
        </div>

        {/* =========================================================
            BACK FACE (Flipped: Compact 4 Sub-Cards, No Empty Space)
           ========================================================= */}
        <div
          className={`absolute inset-0 h-full w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#E8A83E]/70 bg-[#123C32] text-white p-4 sm:p-5 flex flex-col justify-between transition-opacity duration-300 ${
            isFlipped ? "pointer-events-auto opacity-100 z-20" : "pointer-events-none opacity-0"
          }`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg) translateZ(1px)",
          }}
        >
          {/* Subtle radial tech lighting */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-40 z-0"
            style={{
              background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.4), transparent 75%)`,
            }}
          />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

          {/* Back Top: Category & Title */}
          <div className="relative z-10 border-b border-white/15 pb-2">
            <div className="flex items-center justify-between mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-[#E8A83E] text-[#123C32] text-[10px] font-black font-tech uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-[10px] font-mono text-[#E9F0E9]/75 bg-white/10 px-2 py-0.5 rounded">
                Asset ID: {project.id}
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-black font-heading text-white leading-snug line-clamp-1">
              {project.title}
            </h4>
          </div>

          {/* Back Middle: 4 High-Impact Visual Metric Cards */}
          <div className="relative z-10 grid grid-cols-2 gap-2 my-auto">
            <div className="p-2 sm:p-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[#E8A83E] text-[10px] font-bold font-tech uppercase">
                <Zap className="w-3.5 h-3.5" />
                <span>Grid Evacuation</span>
              </div>
              <span className="text-xs font-bold text-white mt-1 leading-tight truncate">
                {project.specs.grid}
              </span>
            </div>

            <div className="p-2 sm:p-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[#E8A83E] text-[10px] font-bold font-tech uppercase">
                <Cpu className="w-3.5 h-3.5" />
                <span>Substation Unit</span>
              </div>
              <span className="text-xs font-bold text-white mt-1 leading-tight truncate">
                {project.specs.transformer}
              </span>
            </div>

            <div className="p-2 sm:p-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-[#E8A83E] text-[10px] font-bold font-tech uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Mounting System</span>
              </div>
              <span className="text-xs font-bold text-white mt-1 leading-tight truncate">
                {project.specs.structure}
              </span>
            </div>

            <div className="p-2 sm:p-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-emerald-400 text-[10px] font-bold font-tech uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CO₂ Abatement</span>
              </div>
              <span className="text-xs font-bold text-emerald-300 mt-1 leading-tight truncate">
                {project.specs.carbon}
              </span>
            </div>
          </div>

          {/* Back Bottom: Live Status + Consultation Action Button */}
          <div className="relative z-30 pt-2 border-t border-white/15 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleEnquire}
              className="relative z-30 inline-flex justify-center items-center gap-2 px-3 py-2 rounded-lg w-full bg-[#E8A83E] hover:bg-[#D4952D] text-[#123C32] font-bold text-xs font-tech transition-colors shadow-sm cursor-pointer shrink-0"
            >
              <span>Enquire Spec</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const [activeFlippedId, setActiveFlippedId] = useState(null);

  // Smooth scroll handler for Hero CTA to Corporate Story section
  const scrollToTimeline = () => {
    const el = document.getElementById("corporate-story");
    if (el) {
      const yOffset = -80; // Height of fixed navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // -------------------------------------------------------------
  // Section 4: 6 Universal Executed Projects
  // (Zero Empty Space on Large Screen: 3 cols x 2 rows)
  // -------------------------------------------------------------
  const portfolioProjects = [
    {
      id: "PROJ-UTILITY-01",
      title: "Multy Utility, Ground - Mounted Solar Park",
      subheading: "Multi-MW Grid Evacuation • Central India",
      capacity: "Multi-MW Plant",
      category: "Utility Scale EPC",
      image: utilityPlantImg,
      location: "Central India Transmission Grid",
      status: "100% Commissioned Asset",
      specs: {
        grid: "33kV / 132kV Dedicated Bay",
        transformer: "In-House Step-Up Units",
        structure: "Seasonal Tilt MMS Tables",
        carbon: "~18,000 Tons/Yr Offset",
      },
    },
    {
      id: "PROJ-CAPTIVE-02",
      title: "Industrial & Commercial Captive Solar Array",
      subheading: "Heavy Factory Microgrid • High PR Ratio",
      capacity: "High PR Ratio",
      category: "Industrial Captive",
      image: solarRowsImg,
      location: "Major Industrial Corridor, MP",
      status: "Active Captive Generation",
      specs: {
        grid: "11kV In-Plant Sync",
        transformer: "Oil-Cooled Step-Up Units",
        structure: "Single-Axis Smart Trackers",
        carbon: "~9,500 Tons/Yr Offset",
      },
    },
    {
      id: "PROJ-SUBSTATION-03",
      title: "Inverter Duty Transformer Substation",
      subheading: "HT Step-Up Synchronization • Dewas Works",
      capacity: "HT Grid Sync",
      category: "Power Transformers",
      image: transformerSubstationImg,
      location: "Substation Bay & Dewas Works",
      status: "CEIG & DISCOM Approved",
      specs: {
        grid: "0.8kV to 33kV Low Loss",
        transformer: "In-House Dewas Works",
        structure: "IS 2026 / IEC 60076 CPRI",
        carbon: "Hermetic Nitrogen Seal",
      },
    },
    {
      id: "PROJ-ROOFTOP-04",
      title: "Modern Commercial Rooftop Solar Plant",
      subheading: "Corporate Power Integration • Net-Metered",
      capacity: "Commercial Scale",
      category: "Commercial EPC",
      image: project1Img,
      location: "Corporate & Commercial Complex",
      status: "100% Commissioned Asset",
      specs: {
        grid: "DISCOM Net-Metered",
        transformer: "LT/HT Grid Interface",
        structure: "Non-Penetrating Clamps",
        carbon: "~1,200 Tons/Yr Offset",
      },
    },
    {
      id: "PROJ-TURNKEY-05",
      title: "Multi-Megawatt Power Infrastructure",
      subheading: "Turnkey Civil & Electrical EPC • Utility Park",
      capacity: "Turnkey EPC",
      category: "Utility Scale EPC",
      image: project2Img,
      location: "Utility Scale Solar Park",
      status: "Grid Synchronized",
      specs: {
        grid: "Double-Circuit 33kV Line",
        transformer: "Multi-MVA Substation Yard",
        structure: "High-Wind Static MMS",
        carbon: "~22,000 Tons/Yr Offset",
      },
    },
    {
      id: "PROJ-GROUND-06",
      title: "Industrial Warehouse & Ground Arrays",
      subheading: "High-Capacity Captive Shed • Industrial Corridor",
      capacity: "Captive Ground",
      category: "Industrial Captive",
      image: groundMountedImg,
      location: "Industrial Manufacturing Zone",
      status: "100% Operational Asset",
      specs: {
        grid: "11kV Grid Interconnection",
        transformer: "Inverter Step-Up Duty",
        structure: "Elevated Structural Frame",
        carbon: "~4,800 Tons/Yr Offset",
      },
    },
  ];

  return (
    <div className="pt-20 bg-[#F7F8F4] text-[#252A27] gap-0">
      <SEO
        title="About Proton Power Infra | Over a Decade of Clean Energy Leadership"
        description="Learn about Proton Power Infra's 12-year journey since 2012, commissioned 125+ MW clean energy portfolio, in-house transformer manufacturing, and executive engineering leadership."
        canonical="https://protonpowerinfra.com/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Proton Power Infra",
          "description": "Learn about Proton Power Infra's 12-year journey since 2012, commissioned 125+ MW clean energy portfolio, in-house transformer manufacturing, and executive engineering leadership.",
          "url": "https://protonpowerinfra.com/about"
        }}
      />
      {/* =========================================================
          1. HERO SECTION (Golden Standard: Matching 400px Heights, 
             Centered Content, No Redundant Badges)
         ========================================================= */}
      <section className="relative overflow-hidden py-6 sm:py-7 lg:py-8 bg-[#123C32] text-white">
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px]"></div>

        {/* Ambient lighting glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E8A83E]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Left Content Column - Equal 50% Width, Matching 400px Height, All Centered */}
            <div className="flex flex-col h-full w-full justify-center">
              <ScrollReveal delay={0} className="h-full flex flex-col justify-center items-center text-center space-y-4 sm:space-y-4.5 py-1 min-h-[360px] sm:min-h-[380px] lg:h-[400px] lg:min-h-[400px]">
                {/* Heading - Centered */}
                <h1 className="font-black tracking-tight text-white leading-[1.15] font-heading text-center mx-auto max-w-xl">
                  <span className="block text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] whitespace-nowrap">
                    At the Forefront of India's
                  </span>
                  <span className="text-[#E8A83E] relative inline-block whitespace-nowrap text-[21px] sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] mt-1">
                    Clean Energy Revolution.
                    <span className="absolute -bottom-1 left-0 w-full h-1.5 sm:h-2 bg-[#E8A83E]/25 -z-10 rounded"></span>
                  </span>
                </h1>

                {/* Paragraph Description - Centered */}
                <p className="text-xs sm:text-sm text-[#E9F0E9]/85 leading-relaxed font-normal text-center max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                  Headquartered in Indore with pan-India execution, Proton Power Infra combines turnkey Solar EPC engineering with in-house Inverter Duty Power Transformer manufacturing. Since 2012, powering 125+ MW of industrial, utility, and clean energy infrastructure with uncompromising precision.
                </p>

                {/* CTA Button with Ambient Glow - Centered */}
                <div className="pt-0.5 flex items-center justify-center w-full">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E8A83E] via-amber-300 to-[#E8A83E] rounded-2xl blur-md opacity-30 group-hover:opacity-75 transition duration-500 group-hover:scale-105"></div>
                    <button
                      type="button"
                      onClick={scrollToTimeline}
                      className="relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/25 transition-all duration-300 font-tech tracking-wide cursor-pointer"
                    >
                      <span>Discover Our Corporate Journey</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                    </button>
                  </div>
                </div>

                {/* Metrics Bar - Centered */}
                <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-3 font-tech w-full max-w-lg mx-auto text-center">
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">125+ MW</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      Installed in India
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">Since 2012</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      Over a Decade
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">In-House</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      Transformer Works
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
                      alt="Proton Power Infra Corporate Headquarters & Solar Projects"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      containerClassName="w-full h-full absolute inset-0"
                      priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none"></div>
                  </div>

                  {/* Top Telemetry Capsule */}
                  

                  {/* Bottom Spec Capsule */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/80 z-20">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#123C32] uppercase tracking-wider font-tech text-justify-clean">
                          Solar EPC & Transformer Manufacturing
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#525D57] leading-relaxed">
                      Headquartered in Indore with integrated manufacturing in Dewas and strategic reach across Delhi, Bhopal, and Central India.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. SECTION TWO: OUR CORPORATE STORY (Aceternity UI Timeline,
             Motion Scroll-Driven Progress, No Images, Clean Engineering)
         ========================================================= */}
      <CompanyTimeline />

      {/* =========================================================
          3. SECTION THREE: CORE PILLARS (Mission, Vision & Excellence)
             With Cursor-Following Border & Ambient Glow Effect
         ========================================================= */}
      <section className="py-8 md:py-10 bg-[#F7F8F4] border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0} className="text-center max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight font-heading leading-tight mb-3">
              Built on Integrity, Engineered for Performance
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed max-w-2xl lg:max-w-none mx-auto font-normal lg:whitespace-nowrap">
              Our guiding principles guarantee that every megawatt engineered and transformer manufactured delivers decades of dependable power generation.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PillarCard
              icon={Target}
              badge="Our Mission"
              title="Democratizing Clean Power Across India"
              description="To accelerate India's transition to clean energy by engineering cost-effective, high-yield solar EPC systems and in-house transformers accessible to homes, factories, and utility grids."
              metric="125+ MW Installed Nationwide"
            />

            <PillarCard
              icon={Eye}
              badge="Our Vision"
              title="India's Most Dependable Energy Partner"
              description="To stand as India's premier integrated renewable energy enterprise—seamlessly fusing advanced solar EPC design, in-house transformer manufacturing, and 25-year lifecycle performance."
              metric="Integrated EPC & Manufacturing"
            />

            <PillarCard
              icon={ShieldCheck}
              badge="Engineering Rigor"
              title="Zero-Tolerance Quality & Grid Safety"
              description="Every installation strictly complies with IEC, CEA, and DISCOM grid codes. From Tier-1 bifacial panels to double-wound copper transformers, we never compromise on safety."
              metric="CEA & DISCOM Grid Compliant"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          4. SECTION FOUR: RECREATED PROJECTS SHOWCASE
             (Universal 3D Flip Cards: Image + Heading, Flip to Specs,
              Zero Empty Space on Large Screen: 3 Cols x 2 Rows)
         ========================================================= */}
      <section
        id="projects"
        className="py-8 md:py-10 bg-white border-b border-[#E2E8E2] relative overflow-hidden scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Section Heading */}
          <ScrollReveal delay={0} className="text-center max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight font-heading leading-tight mb-3">
              Real Projects Executed Across India
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed max-w-2xl lg:max-w-none mx-auto font-normal lg:whitespace-nowrap">
              Hover over any project card to reveal its technical specifications, substation engineering, and verified environmental telemetry.
            </p>
          </ScrollReveal>

          {/* Universal 6-Card Grid: Perfectly fills 3 columns on large screen with ZERO empty space */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {portfolioProjects.map((project) => (
              <FlipProjectCard
                key={project.id}
                project={project}
                isFlipped={activeFlippedId === project.id}
                onToggleFlip={() => {
                  setActiveFlippedId((currentId) => (currentId === project.id ? null : project.id));
                }}
              />
            ))}
          </div>

          {/* Bottom Summary Strip */}
          <div className="mt-10 p-4 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-tech text-[#525D57]">
            {/* <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All 6 Executed Assets Commissioned &amp; Synchronized with DISCOM / State Grids</span>
            </div> */}
            <Link
              to="/contact#inquiry-form"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123C32] hover:text-[#E8A83E] transition-colors"
            >
              <span>Need custom techno-commercial design? Inquire with our engineers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. SECTION FIVE: CONSULTATION CTA BANNER (Light Theme #E9F0E9)
         ========================================================= */}
      <section className="py-10 md:py-12 bg-[#E9F0E9] text-[#202724] relative overflow-hidden border-t border-[#E2E8E2]">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#123C32_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#123C32] tracking-tight leading-tight font-heading mb-3">
            Partner with Proton Power Infra for Your Energy Transition
          </h2>

          <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed max-w-2xl lg:max-w-4xl xl:max-w-none mx-auto mb-6 font-normal xl:whitespace-nowrap">
            Whether developing a multi-megawatt solar park, installing captive factory arrays, or sourcing Inverter Duty Solar Transformers, our engineers are ready to assist.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              to="/contact#inquiry-form"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-sm font-bold bg-[#123C32] hover:bg-[#1A4D41] text-white shadow-md hover:shadow-lg transition-all duration-300 font-tech tracking-wide group cursor-pointer"
            >
              <span>Schedule Project Consultation</span>
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

          <div className="mt-8 pt-6 border-t border-[#123C32]/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#525D57] font-tech font-medium">
            <span><strong className="text-[#123C32]">✓</strong> 125+ MW Proven Track Record</span>
            <span><strong className="text-[#123C32]">✓</strong> In-House Solar Transformer Manufacturing</span>
            <span><strong className="text-[#123C32]">✓</strong> Pan-India Turnkey Commissioning</span>
          </div>
        </div>
      </section>
    </div>
  );
}
