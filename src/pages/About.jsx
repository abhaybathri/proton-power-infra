import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Layers,
  Factory,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
} from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";
import SmartImage from "../components/SmartImage";
import ScrollReveal from "../components/ScrollReveal";

// Authentic Company Assets
import mainTopImg from "../assets/company/main-comany-name-image-or-top-image.jpg";
import utilityPlantImg from "../assets/company/real-project-utility-plant.jpg";
import solarRowsImg from "../assets/company/real-project-solar-rows.jpg";
import transformerSubstationImg from "../assets/company/real-project-transformer-substation.jpg";
import project1Img from "../assets/company/project-1.jpg";
import project2Img from "../assets/company/project-2.jpg";

// =================================================================
// Subcomponent: PillarCard with Cursor-Following Border & Glow
// =================================================================
function PillarCard({ icon: Icon, badge, badgeColor, title, description, metric }) {
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
          <div className="w-12 h-12 rounded-xl bg-[#E9F0E9] text-[#123C32] flex items-center justify-center mb-4 group-hover:bg-[#E8A83E] group-hover:text-[#123C32] group-hover:scale-105 transition-all duration-300 shadow-xs">
            <Icon className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold font-tech uppercase tracking-wider mb-2.5 border ${badgeColor}`}>
            {badge}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#202724] font-heading mb-2 leading-snug group-hover:text-[#123C32] transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
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
// Subcomponent: Architectural Project Card with Telemetry Drawer
// =================================================================
function ModernProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);
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
            ? `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.95), rgba(232, 168, 62, 0.35) 45%, rgba(18, 60, 50, 0.2) 75%, transparent 100%)`
            : `linear-gradient(135deg, rgba(226, 232, 226, 0.9), rgba(247, 248, 244, 0.6))`,
        }}
      />

      {/* Card Inner Surface */}
      <div className="relative rounded-[14.5px] bg-white overflow-hidden flex flex-col justify-between h-full shadow-sm group-hover:shadow-xl group-hover:shadow-black/5 transition-all duration-300">
        {/* Soft Interior Ambient Glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[14.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(240px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.06), transparent 75%)`,
          }}
        />

        <div className="relative z-10 flex flex-col flex-1">
          {/* Top Media Frame */}
          <div className="relative h-52 sm:h-60 overflow-hidden bg-neutral-900">
            <SmartImage
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              containerClassName="w-full h-full absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none"></div>

            {/* Top Badges */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
              <span className="px-2.5 py-1 rounded-md bg-[#123C32]/90 backdrop-blur-md text-[#E8A83E] text-[11px] font-bold font-tech uppercase tracking-wider border border-white/10 shadow-sm">
                {project.category}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#123C32] text-[11px] font-mono font-bold shadow-sm">
                {project.capacity}
              </span>
            </div>

            {/* Bottom Live Commissioning Badge */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-mono border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{project.status}</span>
              </div>
              <span className="text-[10px] font-mono text-white/90 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded">
                {project.location}
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[#202724] font-heading tracking-tight leading-snug group-hover:text-[#123C32] transition-colors mb-1.5">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mb-4">
                {project.tagline}
              </p>

              {/* Key Specs Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-[#F7F8F4] border border-[#E2E8E2] text-[#202724] text-[11px] font-tech font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Engineering Telemetry HUD Toggle */}
            <div className="pt-3 border-t border-[#E2E8E2]">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#F7F8F4] hover:bg-[#E9F0E9] text-[#123C32] text-xs font-bold font-tech transition-colors cursor-pointer group/btn"
              >
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#E8A83E]" />
                  <span>{isExpanded ? "Hide Engineering Specs" : "View Technical Telemetry & Specs"}</span>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 transition-transform" />
                ) : (
                  <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                )}
              </button>

              {/* Expandable Engineering HUD Drawer */}
              {isExpanded && (
                <div className="mt-3 p-3.5 rounded-xl bg-[#202724] text-white space-y-2 animate-fade-in border border-white/10">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#E8A83E] pb-1.5 border-b border-white/10">
                    <span>Engineering Parameters</span>
                    <span>Verified Asset</span>
                  </div>

                  <div className="space-y-1.5 text-[11px] font-tech text-[#E9F0E9]/90">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[#E9F0E9]/60 shrink-0">Grid Evacuation:</span>
                      <span className="font-bold text-right text-white">{project.specs.grid}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[#E9F0E9]/60 shrink-0">Inverter / Transformer:</span>
                      <span className="font-bold text-right text-[#E8A83E]">{project.specs.transformer}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[#E9F0E9]/60 shrink-0">Module & Structure:</span>
                      <span className="font-bold text-right text-white">{project.specs.structure}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[#E9F0E9]/60 shrink-0">Carbon Offset:</span>
                      <span className="font-bold text-right text-emerald-400">{project.specs.carbon}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Card Footer Action */}
        <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center justify-between border-t border-[#E2E8E2]/60">
          <span className="text-[11px] font-mono font-semibold text-[#525D57]">
            Asset ID: {project.id}
          </span>
          <Link
            to={`/enquiry?project=${encodeURIComponent(project.title)}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold font-tech text-[#123C32] hover:text-[#E8A83E] transition-colors group/link"
          >
            <span>Inquire Similar Scope</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  // -------------------------------------------------------------
  // Section 2: Sticky Scrollytelling Timeline State & Logic
  // -------------------------------------------------------------
  const storyContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0.0 to 1.0
  const [activeStage, setActiveStage] = useState(0); // 0: Minimal Intro, 1: 2012, 2: 2016, 3: 2019, 4: 2024+

  // Milestone Card Mouse Tracking for Dynamic Cursor Glow
  const [milestoneMousePos, setMilestoneMousePos] = useState({ x: 0, y: 0 });
  const [isMilestoneCardHovered, setIsMilestoneCardHovered] = useState(false);

  const handleMilestoneMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMilestoneMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const milestones = [
    {
      year: "2012",
      badge: "Inception & Vision",
      title: "Foundation of Proton Power Infra in Indore",
      subtitle: "Pioneering Renewable Energy Engineering in Central India",
      icon: Building,
      description:
        "Founded in Indore, Madhya Pradesh, Proton Power Infra embarked on a singular mission: to make clean, industrial-grade solar energy accessible, dependable, and economically viable across Central India.",
      checkpoints: [
        { label: "Established in Indore, MP", color: "mint" },
        { label: "Early Turnkey Rooftop EPC", color: "amber" },
        { label: "DISCOM & Grid Approvals", color: "sky" },
      ],
      deliverable: "Commissioned First 10+ Multi-Kilowatt Commercial & Institutional Solar Systems",
      pastelTag: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
    },
    {
      year: "2016",
      badge: "Backward Integration",
      title: "Dedicated Transformer Manufacturing Works",
      subtitle: "Eliminating Substation Supply Delays with In-House Production",
      icon: Cpu,
      description:
        "Recognizing that substation delivery bottlenecks often stall solar projects, we established our dedicated power transformer manufacturing facility in Dewas and Indore, producing specialized Inverter Duty Solar Transformers.",
      checkpoints: [
        { label: "Dewas Manufacturing Hub", color: "amber" },
        { label: "Inverter Duty Step-Up Units", color: "mint" },
        { label: "BIS & CPRI Type-Tested", color: "sky" },
      ],
      deliverable: "100% In-House Substation Supply Guarantee for All EPC Contracts",
      pastelTag: "bg-amber-50 text-amber-800 border-amber-200/80",
    },
    {
      year: "2019",
      badge: "Utility Scale Scale-Up",
      title: "Utility Solar Parks & IPP Infrastructure",
      subtitle: "High-Voltage 33kV & 132kV Grid Evacuation Engineering",
      icon: Zap,
      description:
        "Transitioned into an Independent Power Producer (IPP) and large-scale utility developer, executing multi-megawatt ground-mounted solar farms and captive industrial solar arrays synchronized with state transmission grids.",
      checkpoints: [
        { label: "Multi-Megawatt Solar Parks", color: "sky" },
        { label: "33kV / 132kV HT Grid Sync", color: "amber" },
        { label: "Captive Industrial PPA", color: "mint" },
      ],
      deliverable: "Synchronized Over 50+ MW of Utility Ground Assets to State Electricity Grids",
      pastelTag: "bg-sky-50 text-sky-800 border-sky-200/80",
    },
    {
      year: "2024+",
      badge: "National Benchmark",
      title: "125+ MW Installed Nationwide & Future Horizons",
      subtitle: "Pan-India Turnkey Reach Spanning Utility, Commercial & PM Surya Ghar",
      icon: Award,
      description:
        "Surpassed 125+ MW of installed solar capacity across India. Operating from offices in Indore, Delhi, Bhopal, and Dewas, we now engineer complete utility parks, factory microgrids, and thousands of subsidized residential rooftops.",
      checkpoints: [
        { label: "125+ MW Proven Portfolio", color: "violet" },
        { label: "Pan-India Execution Fleet", color: "mint" },
        { label: "PM Surya Ghar Certified", color: "amber" },
      ],
      deliverable: "Trusted EPC & Transformer Partner to India's Premier Industrial Conglomerates",
      pastelTag: "bg-purple-50 text-purple-800 border-purple-200/80",
    },
  ];

  // Scroll Progress Calculator for Scrollytelling Section
  useEffect(() => {
    const handleScroll = () => {
      if (!storyContainerRef.current) return;
      const rect = storyContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const topOffset = 80; // height of fixed navbar

      const totalDist = storyContainerRef.current.offsetHeight - windowHeight;
      if (totalDist <= 0) return;

      const scrolled = topOffset - rect.top;
      const rawProgress = scrolled / totalDist;
      const progress = Math.min(Math.max(rawProgress, 0), 1);
      setScrollProgress(progress);

      // Progressive Reveal:
      // Stage 0: Initial Minimal Intro (0.00 to 0.12)
      // Stage 1: 2012 Milestone (0.12 to 0.35)
      // Stage 2: 2016 Milestone (0.35 to 0.58)
      // Stage 3: 2019 Milestone (0.58 to 0.80)
      // Stage 4: 2024+ Milestone (0.80 to 1.00)
      if (progress < 0.12) {
        setActiveStage(0);
      } else if (progress < 0.35) {
        setActiveStage(1);
      } else if (progress < 0.58) {
        setActiveStage(2);
      } else if (progress < 0.80) {
        setActiveStage(3);
      } else {
        setActiveStage(4);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to designated stage threshold
  const scrollToStage = (stageIdx) => {
    if (!storyContainerRef.current) return;
    const rect = storyContainerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop - 80;
    const totalDist = storyContainerRef.current.offsetHeight - window.innerHeight;

    // Target progress for each stage:
    const stageTargets = [0.04, 0.22, 0.46, 0.69, 0.90];
    const targetY = sectionTop + totalDist * stageTargets[stageIdx];

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  const currentMilestone = activeStage > 0 ? milestones[activeStage - 1] : milestones[0];

  // -------------------------------------------------------------
  // Section 4: Projects Showcase State & Filter Logic
  // -------------------------------------------------------------
  const [selectedCategory, setSelectedCategory] = useState("all");

  const portfolioProjects = [
    {
      id: "PROJ-UTILITY-01",
      title: "Utility Ground-Mounted Solar Park",
      tagline: "High-yield multi-megawatt generation synchronized with state power grid.",
      capacity: "Multi-MW Plant",
      category: "Utility Scale EPC",
      categoryKey: "utility",
      image: utilityPlantImg,
      location: "Central India Transmission Grid",
      status: "100% Commissioned",
      tags: ["33kV Grid Sync", "Central Inverters", "Tier-1 Mono PERC"],
      specs: {
        grid: "33kV / 132kV Dedicated Transmission Bay",
        transformer: "Inverter Duty Solar Step-Up (Dewas Works)",
        structure: "Hot-Dip Galvanized Seasonal Tilt Tables",
        carbon: "Est. ~18,000 MT Annual CO₂ Offset",
      },
    },
    {
      id: "PROJ-CAPTIVE-02",
      title: "High-Yield Tracker & Fixed-Tilt Arrays",
      tagline: "Industrial captive solar power for continuous manufacturing energy security.",
      capacity: "High PR Ratio",
      category: "Industrial Captive",
      categoryKey: "industrial",
      image: solarRowsImg,
      location: "Major Industrial Corridor, MP",
      status: "Active Captive Generation",
      tags: ["Zero-Export Telemetry", "SCADA Monitoring", "99.4% Uptime"],
      specs: {
        grid: "11kV In-Plant Synchronization",
        transformer: "In-House Oil-Cooled Step-Up Units",
        structure: "Single-Axis Smart Sun-Tracking Arrays",
        carbon: "Est. ~9,500 MT Annual CO₂ Offset",
      },
    },
    {
      id: "PROJ-SUBSTATION-03",
      title: "Inverter Duty Transformer Substation",
      tagline: "Step-up voltage synchronization built entirely at our Dewas manufacturing facility.",
      capacity: "HT Grid Sync",
      category: "In-House Transformers",
      categoryKey: "transformers",
      image: transformerSubstationImg,
      location: "Substation Bay & Dewas Works",
      status: "CEIG & DISCOM Approved",
      tags: ["In-House Dewas Works", "Electrolytic Copper", "Low Loss Topology"],
      specs: {
        grid: "0.8kV to 33kV Low-Loss Copper Wound",
        transformer: "In-House Dewas Production Facility",
        structure: "IS 2026 & IEC 60076 CPRI Type-Tested",
        carbon: "Hermetically Sealed Nitrogen Cushion",
      },
    },
    {
      id: "PROJ-ROOFTOP-04",
      title: "Commercial Rooftop Solar Array",
      tagline: "Zero-downtime facility power integration paired with DISCOM net metering.",
      capacity: "Commercial Scale",
      category: "Commercial EPC",
      categoryKey: "commercial",
      image: project1Img,
      location: "Corporate & Commercial Complex",
      status: "100% Commissioned Asset",
      tags: ["Non-Penetrating Clamps", "Net-Metered", "Up to 80% Bill Cut"],
      specs: {
        grid: "DISCOM Bi-Directional Net-Metered",
        transformer: "LT/HT Grid Interface Protection",
        structure: "Non-Penetrating Aluminum Ballasted Clamps",
        carbon: "Est. ~1,200 MT Annual CO₂ Offset",
      },
    },
    {
      id: "PROJ-TURNKEY-05",
      title: "Multi-Megawatt Power Infrastructure",
      tagline: "Turnkey civil, mechanical, electrical & CEIG statutory project delivery.",
      capacity: "Turnkey EPC",
      category: "Utility Scale EPC",
      categoryKey: "utility",
      image: project2Img,
      location: "Turnkey Solar Park",
      status: "Grid Synchronized",
      tags: ["Turnkey Civil & Electrical", "In-House HT Works", "CEIG Sanctioned"],
      specs: {
        grid: "Dedicated Double-Circuit 33kV Evacuation Line",
        transformer: "Multi-MVA Substation Step-Up Yard",
        structure: "Optimized High-Wind Static Vetted MMS",
        carbon: "Est. ~22,000 MT Annual CO₂ Offset",
      },
    },
  ];

  const categories = [
    { key: "all", label: "All Executed Portfolios", count: portfolioProjects.length },
    { key: "utility", label: "Utility Scale EPC", count: portfolioProjects.filter((p) => p.categoryKey === "utility").length },
    { key: "industrial", label: "Industrial Captive", count: portfolioProjects.filter((p) => p.categoryKey === "industrial").length },
    { key: "transformers", label: "Power Transformers", count: portfolioProjects.filter((p) => p.categoryKey === "transformers").length },
    { key: "commercial", label: "Commercial Rooftop", count: portfolioProjects.filter((p) => p.categoryKey === "commercial").length },
  ];

  const filteredProjects = selectedCategory === "all"
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.categoryKey === selectedCategory);

  return (
    <div className="pt-20 bg-[#F7F8F4] text-[#252A27]">
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
                <h1 className="text-3xl sm:text-4xl lg:text-[34px] xl:text-[38px] font-black tracking-tight text-white leading-[1.14] font-heading text-center mx-auto max-w-lg">
                  At the Forefront of India's <br />
                  <span className="text-[#E8A83E] relative inline-block">
                    Clean Energy Revolution.
                    <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#E8A83E]/25 -z-10 rounded"></span>
                  </span>
                </h1>

                {/* Paragraph Description - Centered */}
                <p className="text-xs sm:text-sm text-[#E9F0E9]/85 leading-relaxed font-normal text-center max-w-lg mx-auto">
                  Headquartered in Indore with pan-India execution, Proton Power Infra combines turnkey Solar EPC engineering with in-house Inverter Duty Power Transformer manufacturing. Since 2012, powering 125+ MW of industrial, utility, and clean energy infrastructure with uncompromising precision.
                </p>

                {/* CTA Button with Ambient Glow - Centered */}
                <div className="pt-0.5 flex items-center justify-center w-full">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E8A83E] via-amber-300 to-[#E8A83E] rounded-2xl blur-md opacity-30 group-hover:opacity-75 transition duration-500 group-hover:scale-105"></div>
                    <button
                      type="button"
                      onClick={() => scrollToStage(0)}
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
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#123C32] shadow-sm font-tech">
                      <Activity className="w-3.5 h-3.5 text-[#E8A83E] animate-pulse" />
                      <span>Proton Power Infra • Corporate HQ</span>
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
          2. SECTION TWO: OUR CORPORATE STORY (Sticky Scrollytelling,
             Full Width, Initial Minimum Content, Progressive Reveal)
         ========================================================= */}
      <section
        id="corporate-story"
        ref={storyContainerRef}
        className="relative w-full bg-white border-b border-[#E2E8E2] h-[340vh] sm:h-[360vh]"
      >
        {/* Sticky Viewport Stage: Pinned under fixed navbar (top-20) */}
        <div className="sticky top-20 w-full h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden bg-white/95 backdrop-blur-md z-20 px-4 sm:px-6 lg:px-8 py-5 sm:py-7">
          {/* Subtle background ambient radial lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#123C32]/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8A83E]/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#123C32_1px,transparent_1px)] [background-size:28px_28px]"></div>

          {/* =========================================================
              Top Bar: Minimal Header & Dynamic Progress Indicator
             ========================================================= */}
          <div className="max-w-6xl mx-auto w-full relative z-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-3 border-b border-[#E2E8E2]">
              {/* Left Brand Badge */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold font-tech uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8A83E]" />
                  <span>Our Corporate Story</span>
                </span>
                <span className="text-xs font-mono font-bold text-[#525D57]">
                  {activeStage === 0 ? "Timeline Introduction" : `Stage 0${activeStage} of 04`}
                </span>
              </div>

              {/* Right Stage Selector Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {milestones.map((m, idx) => {
                  const stageNum = idx + 1;
                  const isCurrent = activeStage === stageNum;
                  const isPassed = activeStage > stageNum;

                  return (
                    <button
                      key={m.year}
                      type="button"
                      onClick={() => scrollToStage(stageNum)}
                      className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-tech font-bold transition-all duration-300 cursor-pointer ${
                        isCurrent
                          ? "bg-[#123C32] text-[#E8A83E] shadow-sm ring-1 ring-[#E8A83E]"
                          : isPassed
                          ? "bg-[#E9F0E9] text-[#123C32] hover:bg-[#123C32]/10"
                          : "bg-neutral-100 text-[#525D57] hover:bg-neutral-200"
                      }`}
                      aria-label={`Jump to Milestone ${m.year}`}
                    >
                      <span>{m.year}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Glowing Scroll Progress Bar */}
            <div className="w-full bg-[#E2E8E2] h-1.5 rounded-full overflow-hidden mt-2 relative">
              <div
                className="h-full bg-gradient-to-r from-[#123C32] via-[#E8A83E] to-[#123C32] transition-all duration-300 ease-out"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              ></div>
            </div>
          </div>

          {/* =========================================================
              Center Viewport Content:
              - Stage 0: Less / Minimum Content (Clean Minimalist Intro)
              - Stage 1-4: Progressively Revealed Milestone Cards
             ========================================================= */}
          <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10 py-3">
            {/* -------------------------------------------------------
                STAGE 0: Initial Minimal View (Less / Minimum Content)
               ------------------------------------------------------- */}
            {activeStage === 0 && (
              <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4 animate-fade-in transition-all duration-700 ease-out">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#202724] tracking-tight font-heading leading-tight mb-4">
                  Engineering India's Renewable Future Since 2012
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-[#525D57] leading-relaxed max-w-2xl mx-auto font-normal mb-8">
                  From regional beginnings in Indore to a nationwide 125+ MW footprint and in-house transformer manufacturing, explore the defining milestones of our engineering journey.
                </p>

                {/* Minimalist Scroll Cue Pill */}
                <div className="flex flex-col items-center gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToStage(1)}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#123C32] text-white hover:bg-[#1a4f43] transition-all duration-300 shadow-md shadow-[#123C32]/20 text-xs font-bold font-tech cursor-pointer group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-ping"></span>
                    <span>Scroll Down to Trace Timeline</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#525D57]/80 pt-1">
                    <div className="w-3.5 h-6 rounded-full border-2 border-[#123C32]/40 flex items-start justify-center p-0.5">
                      <div className="w-1 h-1.5 rounded-full bg-[#E8A83E] animate-bounce"></div>
                    </div>
                    <span>Scroll down slowly to unlock each milestone</span>
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------
                STAGE 1 – 4: Progressively Revealed Milestone Cards
               ------------------------------------------------------- */}
            {activeStage > 0 && (
              <div
                onMouseMove={handleMilestoneMouseMove}
                onMouseEnter={() => setIsMilestoneCardHovered(true)}
                onMouseLeave={() => setIsMilestoneCardHovered(false)}
                className="relative rounded-2xl p-[1.5px] transition-all duration-700 ease-out select-none shadow-xl shadow-black/5 animate-fade-in"
              >
                {/* Dynamic Cursor-Responsive Border Glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
                  style={{
                    opacity: isMilestoneCardHovered ? 1 : 0.5,
                    background: isMilestoneCardHovered
                      ? `radial-gradient(350px circle at ${milestoneMousePos.x}px ${milestoneMousePos.y}px, rgba(232, 168, 62, 0.95), rgba(232, 168, 62, 0.35) 45%, rgba(18, 60, 50, 0.2) 75%, transparent 100%)`
                      : `linear-gradient(135deg, rgba(232, 168, 62, 0.7), rgba(18, 60, 50, 0.35), rgba(232, 168, 62, 0.5))`,
                  }}
                />

                {/* Card Inner Surface */}
                <div className="relative rounded-[14.5px] bg-white p-5 sm:p-7 lg:p-9 overflow-hidden">
                  {/* Soft Interior Ambient Glow following cursor */}
                  <div
                    className="pointer-events-none absolute -inset-px rounded-[14.5px] opacity-0 hover:opacity-100 transition-opacity duration-300 z-0"
                    style={{
                      opacity: isMilestoneCardHovered ? 1 : 0,
                      background: `radial-gradient(280px circle at ${milestoneMousePos.x}px ${milestoneMousePos.y}px, rgba(232, 168, 62, 0.08), transparent 75%)`,
                    }}
                  />

                  {/* Giant Aesthetic Year Watermark */}
                  <div className="absolute right-4 bottom-2 text-7xl sm:text-9xl font-black font-tech text-[#123C32]/[0.04] pointer-events-none select-none">
                    {currentMilestone.year}
                  </div>

                  <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
                    {/* Left Column: Heading, Subtitle & Narrative */}
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#123C32] text-[#E8A83E] text-xs font-bold font-tech uppercase tracking-wider shadow-xs">
                          Milestone {currentMilestone.year}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold font-tech uppercase border ${currentMilestone.pastelTag}`}>
                          {currentMilestone.badge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-[#202724] font-heading tracking-tight leading-snug">
                        {currentMilestone.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-[#123C32] font-heading">
                        {currentMilestone.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed font-normal">
                        {currentMilestone.description}
                      </p>

                      {/* Pastel Glowing Checkpoints */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        {currentMilestone.checkpoints.map((cp, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-tech transition-all duration-300 hover:scale-105 hover:shadow-xs cursor-default bg-[#F7F8F4] border border-[#E2E8E2] text-[#202724] hover:border-[#E8A83E]/60 hover:text-[#123C32]"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#123C32]" />
                            <span>{cp.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Key Milestone Deliverable Badge */}
                    <div className="w-full md:w-72 shrink-0 bg-[#F7F8F4] p-4 sm:p-5 rounded-xl border border-[#E2E8E2] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-[#123C32]">
                          <Clock className="w-4 h-4 text-[#E8A83E]" />
                          <span className="text-xs font-bold uppercase tracking-wider font-tech">
                            Key Realized Impact
                          </span>
                        </div>
                        <p className="text-xs text-[#202724] font-bold leading-relaxed">
                          "{currentMilestone.deliverable}"
                        </p>
                      </div>

                      {/* Manual Previous / Next Buttons */}
                      <div className="mt-4 pt-3 border-t border-[#E2E8E2] flex items-center justify-between text-[11px] font-mono text-[#525D57]">
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => scrollToStage(Math.max(activeStage - 1, 0))}
                            className="p-1 rounded bg-white border border-[#E2E8E2] hover:bg-[#123C32] hover:text-white transition-colors cursor-pointer"
                            aria-label="Previous Milestone"
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => scrollToStage(Math.min(activeStage + 1, 4))}
                            className="p-1 rounded bg-white border border-[#E2E8E2] hover:bg-[#123C32] hover:text-white transition-colors cursor-pointer"
                            aria-label="Next Milestone"
                          >
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="flex items-center gap-1">
                          {milestones.map((_, i) => (
                            <span
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                activeStage - 1 === i ? "w-4 bg-[#123C32]" : "bg-[#123C32]/20"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* =========================================================
              Bottom Status Footer Bar: Scroll Helper Hint
             ========================================================= */}
          <div className="max-w-6xl mx-auto w-full relative z-10 pt-2 border-t border-[#E2E8E2] flex items-center justify-between text-[11px] font-tech text-[#525D57]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-ping"></span>
              <span>
                {activeStage === 0
                  ? "Scroll down to begin interactive timeline"
                  : activeStage === 4
                  ? "Milestone sequence complete • Keep scrolling down for Core Pillars"
                  : `Currently inspecting Milestone ${currentMilestone.year} • Scroll down for next milestone`}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 font-mono">
              <span>{Math.round(scrollProgress * 100)}% Scrolled</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. SECTION THREE: CORE PILLARS (Mission, Vision & Excellence)
             With Cursor-Following Border & Ambient Glow Effect
         ========================================================= */}
      <section className="py-12 md:py-16 bg-[#F7F8F4] border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0} className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight font-heading leading-tight mb-3">
              Built on Integrity, Engineered for Performance
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed max-w-2xl mx-auto font-normal">
              Our guiding principles guarantee that every megawatt engineered and transformer manufactured delivers decades of dependable power generation.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PillarCard
              icon={Target}
              badge="Our Mission"
              badgeColor="bg-emerald-50 text-emerald-800 border-emerald-200/80"
              title="Democratizing Clean Power Across India"
              description="To accelerate India's transition to clean energy by engineering cost-effective, high-yield solar EPC systems and in-house transformers accessible to homes, factories, and utility grids."
              metric="125+ MW Installed Nationwide"
            />

            <PillarCard
              icon={Eye}
              badge="Our Vision"
              badgeColor="bg-amber-50 text-amber-800 border-amber-200/80"
              title="India's Most Dependable Energy Partner"
              description="To stand as India's premier integrated renewable energy enterprise—seamlessly fusing advanced solar EPC design, in-house transformer manufacturing, and 25-year lifecycle performance."
              metric="Integrated EPC & Manufacturing"
            />

            <PillarCard
              icon={ShieldCheck}
              badge="Engineering Rigor"
              badgeColor="bg-sky-50 text-sky-800 border-sky-200/80"
              title="Zero-Tolerance Quality & Grid Safety"
              description="Every installation strictly complies with IEC, CEA, and DISCOM grid codes. From Tier-1 bifacial panels to double-wound copper transformers, we never compromise on safety."
              metric="CEA & DISCOM Grid Compliant"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          4. SECTION FOUR: RECREATED PROJECTS SHOWCASE
             (Modern Architectural Matrix, Category Tabs & Telemetry HUD)
         ========================================================= */}
      <section
        id="projects"
        className="py-12 md:py-16 bg-white border-b border-[#E2E8E2] relative overflow-hidden scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Section Heading */}
          <ScrollReveal delay={0} className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight font-heading leading-tight mb-3">
              Real Projects Executed Across India
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed max-w-2xl mx-auto font-normal">
              Explore our proven track record across utility-scale solar parks, heavy captive industrial arrays, and high-voltage transformer substations.
            </p>
          </ScrollReveal>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-tech transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#123C32] text-[#E8A83E] shadow-md shadow-[#123C32]/20 ring-1 ring-[#E8A83E]"
                      : "bg-[#F7F8F4] text-[#525D57] hover:text-[#123C32] hover:bg-[#E9F0E9] border border-[#E2E8E2]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isSelected ? "bg-white/20 text-white" : "bg-neutral-200 text-[#525D57]"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Architectural Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {filteredProjects.map((project) => (
              <ModernProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Summary Strip */}
          <div className="mt-10 p-4 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-tech text-[#525D57]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Showing {filteredProjects.length} of {portfolioProjects.length} Verified Commissioned Assets</span>
            </div>
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123C32] hover:text-[#E8A83E] transition-colors"
            >
              <span>Need custom techno-commercial design? Inquire with our engineers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. SECTION FIVE: CONSULTATION CTA BANNER (Standardized
             #123C32 Banner with Radial Tech Glow & Dual Action Buttons)
         ========================================================= */}
      <section className="py-12 md:py-16 bg-[#123C32] text-white relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight font-heading mb-3">
            Partner with Proton Power Infra for Your Energy Transition
          </h2>

          <p className="text-xs sm:text-sm text-[#E9F0E9]/85 leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
            Whether developing a multi-megawatt solar park, installing captive factory arrays, or sourcing Inverter Duty Solar Transformers, our engineers are ready to assist.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/enquiry"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#E8A83E]/20 transition-all duration-300 font-tech tracking-wide group cursor-pointer"
            >
              <span>Schedule Project Consultation</span>
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

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-[11px] text-[#E9F0E9]/75 font-tech">
            <span>✓ 125+ MW Proven Track Record</span>
            <span>✓ In-House Solar Transformer Manufacturing</span>
            <span>✓ Pan-India Turnkey Commissioning</span>
          </div>
        </div>
      </section>
    </div>
  );
}
