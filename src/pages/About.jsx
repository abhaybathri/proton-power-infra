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
  Layers,
  Factory,
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
import groundMountedImg from "../assets/commercial-assets/ground-mounted-image.jpg";

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
// Subcomponent: FlipProjectCard (Visual-First, Flip on Hover)
// =================================================================
function FlipProjectCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);
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
      className="group relative h-[330px] sm:h-[350px] w-full [perspective:1200px] cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovered(true);
        setIsFlipped(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsFlipped(false);
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* 3D Flip Container */}
      <div
        className="relative h-full w-full rounded-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
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
          className="absolute inset-0 h-full w-full rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl border-2 border-white/80 bg-[#0D2B24] flex flex-col justify-end"
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
          <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
            <span className="px-2.5 py-1 rounded-md bg-[#123C32]/90 backdrop-blur-md text-[#E8A83E] text-[10px] font-bold font-tech uppercase tracking-wider border border-white/10 shadow-sm">
              {project.category}
            </span>
          </div>

          {/* Bottom Heading & Subheading (Universal Height for Identical Framing) */}
          <div className="relative z-20 p-4 sm:p-5 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#E8A83E] uppercase tracking-wider">
                {project.capacity}
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
          className="absolute inset-0 h-full w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#E8A83E]/70 bg-[#123C32] text-white p-4 sm:p-5 flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
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
          <div className="relative z-10 pt-2 border-t border-white/15 flex items-center justify-center gap-3">
            {/* <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#E9F0E9]/80 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span className="truncate">{project.status}</span>
            </div> */}

            <Link
              to={`/contact?project=${encodeURIComponent(project.title)}#inquiry-form`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex justify-center items-center px-3 py-2 rounded-lg w-full  bg-[#E8A83E] hover:bg-[#D4952D] text-[#123C32] font-bold text-xs font-tech transition-colors shadow-sm cursor-pointer shrink-0"
            >
              <span>Enquire Spec</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  // -------------------------------------------------------------
  // Section 2: Premium Scroll-Driven Corporate Story Timeline
  // -------------------------------------------------------------
  const storyContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0.0 to 1.0
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0); // 0 to 3

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
        { label: "Established in Indore, MP" },
        { label: "Early Turnkey Rooftop EPC" },
        { label: "DISCOM & Grid Approvals" },
      ],
      deliverable: "Commissioned First 10+ Multi-Kilowatt Commercial & Institutional Solar Systems",
      image: project1Img,
      locationTag: "Indore, Madhya Pradesh",
      specTag: "Turnkey Commercial Rooftop EPC",
      era: "Foundational Phase",
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
        { label: "Dewas Manufacturing Hub" },
        { label: "Inverter Duty Step-Up Units" },
        { label: "BIS & CPRI Type-Tested" },
      ],
      deliverable: "100% In-House Substation Supply Guarantee for All EPC Contracts",
      image: transformerSubstationImg,
      locationTag: "Dewas & Indore Works",
      specTag: "Inverter Duty Step-Up Transformers",
      era: "Manufacturing Expansion",
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
        { label: "Multi-Megawatt Solar Parks" },
        { label: "33kV / 132kV HT Grid Sync" },
        { label: "Captive Industrial PPA" },
      ],
      deliverable: "Synchronized Over 50+ MW of Utility Ground Assets to State Electricity Grids",
      image: utilityPlantImg,
      locationTag: "Central India Transmission Grid",
      specTag: "33kV / 132kV HT Grid Evacuation",
      era: "Utility Infrastructure",
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
        { label: "125+ MW Proven Portfolio" },
        { label: "Pan-India Execution Fleet" },
        { label: "PM Surya Ghar Certified" },
      ],
      deliverable: "Trusted EPC & Transformer Partner to India's Premier Industrial Conglomerates",
      image: project2Img,
      locationTag: "Pan-India Operations",
      specTag: "125+ MW Solar EPC & Substation Fleet",
      era: "National Scale",
    },
  ];

  // Throttled high-performance scroll observer
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!storyContainerRef.current) {
            ticking = false;
            return;
          }
          const rect = storyContainerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const topOffset = 80; // Height of fixed navbar

          const totalDist = storyContainerRef.current.offsetHeight - windowHeight;
          if (totalDist <= 0) {
            ticking = false;
            return;
          }

          const scrolled = topOffset - rect.top;
          const rawProgress = scrolled / totalDist;
          const progress = Math.min(Math.max(rawProgress, 0), 1);
          setScrollProgress(progress);

          // 4 Milestones evenly distributed
          const newIdx = Math.min(Math.floor(progress * 4), 3);
          setActiveMilestoneIndex(newIdx);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to designated milestone
  const scrollToMilestone = (milestoneIdx) => {
    if (!storyContainerRef.current) return;
    const rect = storyContainerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop - 80;
    const totalDist = storyContainerRef.current.offsetHeight - window.innerHeight;

    // Target the center of that milestone's scroll segment
    const targetProgress = (milestoneIdx + 0.5) / 4;
    const targetY = sectionTop + totalDist * targetProgress;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  const scrollToTimeline = () => {
    const el = document.getElementById("corporate-story");
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
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
          2. SECTION TWO: OUR CORPORATE STORY
             - Desktop (>= 1024px): Sticky Scroll-Driven Storytelling
             - Mobile & Tablet (< 1024px): Dedicated Vertical Spine Timeline
         ========================================================= */}
      <section
        id="corporate-story"
        ref={storyContainerRef}
        className="relative w-full bg-white border-b border-[#E2E8E2] lg:h-[260vh]"
      >
        {/* =========================================================
            DESKTOP STICKY STAGE (>= 1024px)
            Pinned under fixed navbar (top-20)
           ========================================================= */}
        <div className="hidden lg:flex sticky top-20 w-full h-[calc(100vh-5rem)] flex-col justify-between overflow-hidden bg-white/95 backdrop-blur-md z-20 px-4 sm:px-6 lg:px-8 py-3.5 xl:py-4">
          {/* Subtle background ambient radial lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#123C32]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8A83E]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#123C32_1px,transparent_1px)] [background-size:28px_28px]" />

          {/* Top Interactive Milestone Navigation & Progress Rail */}
          <div className="max-w-5xl mx-auto w-full relative z-10">
            {/* Header Title Row */}
            <div className="flex items-end justify-between gap-4 pb-2 border-b border-[#E2E8E2]">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#E9F0E9] text-[#123C32] text-[10px] font-bold font-tech uppercase tracking-wider mb-1 border border-[#123C32]/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8A83E]"></span>
                  <span>Our Corporate Story</span>
                </div>
                <h2 className="text-xl xl:text-2xl font-black text-[#202724] font-heading tracking-tight">
                  Engineering India's Renewable Future Since 2012
                </h2>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs font-tech font-bold text-[#123C32]">
                  Chapter 0{activeMilestoneIndex + 1} of 04
                </span>
                <p className="text-[11px] text-[#525D57] font-mono">
                  {milestones[activeMilestoneIndex].era}
                </p>
              </div>
            </div>

            {/* 4 Interactive Milestone Step Tabs */}
            <div className="grid grid-cols-4 gap-2.5 mt-2">
              {milestones.map((m, idx) => {
                const isActive = activeMilestoneIndex === idx;
                const isPassed = activeMilestoneIndex > idx;
                return (
                  <button
                    key={m.year}
                    type="button"
                    onClick={() => scrollToMilestone(idx)}
                    className={`group relative text-left p-2 rounded-xl transition-all duration-300 border cursor-pointer select-none ${
                      isActive
                        ? "bg-[#123C32] text-white border-[#123C32] shadow-md shadow-[#123C32]/20"
                        : isPassed
                        ? "bg-[#E9F0E9]/75 hover:bg-[#E9F0E9] text-[#123C32] border-[#123C32]/20"
                        : "bg-white hover:bg-[#F7F8F4] text-[#525D57] hover:text-[#123C32] border-[#E2E8E2]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span
                        className={`text-xs font-black font-tech ${
                          isActive ? "text-[#E8A83E]" : isPassed ? "text-[#123C32]" : "text-[#525D57]"
                        }`}
                      >
                        {m.year}
                      </span>
                      <span
                        className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-bold ${
                          isActive
                            ? "bg-white/15 text-white"
                            : isPassed
                            ? "bg-[#123C32]/10 text-[#123C32]"
                            : "bg-[#F7F8F4] text-[#525D57]"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                    </div>
                    <div
                      className={`text-[11px] font-bold font-heading truncate ${
                        isActive ? "text-white" : isPassed ? "text-[#123C32]" : "text-[#202724]"
                      }`}
                    >
                      {m.badge}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Smooth Dynamic Progress Line */}
            <div className="w-full bg-[#E2E8E2] h-1.5 rounded-full overflow-hidden mt-2 relative">
              <div
                className="h-full bg-gradient-to-r from-[#123C32] via-[#E8A83E] to-[#123C32] transition-all duration-300 ease-out"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
          </div>

          {/* Center Stage: The Stable Pre-Mounted Milestone Story Card */}
          <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10 py-1.5">
            <div
              onMouseMove={handleMilestoneMouseMove}
              onMouseEnter={() => setIsMilestoneCardHovered(true)}
              onMouseLeave={() => setIsMilestoneCardHovered(false)}
              className="relative w-full h-[380px] xl:h-[410px] rounded-2xl"
            >
              {/* Dynamic Cursor-Responsive Border Glow for Whole Card Frame */}
              <div
                className="pointer-events-none absolute -inset-0.5 rounded-2xl transition-opacity duration-500 z-20"
                style={{
                  opacity: isMilestoneCardHovered ? 1 : 0.4,
                  background: isMilestoneCardHovered
                    ? `radial-gradient(350px circle at ${milestoneMousePos.x}px ${milestoneMousePos.y}px, rgba(232, 168, 62, 0.8), rgba(18, 60, 50, 0.25) 50%, transparent 80%)`
                    : "transparent",
                }}
              />

              {/* Stack of Pre-Mounted Milestone Cards (Smooth 3D Cross-Fade, Zero Reflow, Zero Top-Left Jump) */}
              {milestones.map((m, idx) => {
                const isActive = activeMilestoneIndex === idx;
                const isPrev = activeMilestoneIndex > idx;
                return (
                  <div
                    key={m.year}
                    className={`absolute inset-0 w-full h-full rounded-2xl bg-white border border-[#E2E8E2] shadow-xl shadow-black/5 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none ${
                      isActive
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto z-10"
                        : isPrev
                        ? "opacity-0 -translate-y-5 scale-[0.98] pointer-events-none z-0"
                        : "opacity-0 translate-y-5 scale-[0.98] pointer-events-none z-0"
                    }`}
                  >
                    <div className="grid grid-cols-12 h-full">
                      {/* Left 7 Columns: Story Narrative & Engineering Metrics */}
                      <div className="col-span-7 p-5 xl:p-6 flex flex-col justify-between h-full bg-white relative z-10">
                        {/* Soft interior ambient glow following cursor */}
                        <div
                          className="pointer-events-none absolute -inset-px rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                          style={{
                            opacity: isMilestoneCardHovered && isActive ? 1 : 0,
                            background: `radial-gradient(280px circle at ${milestoneMousePos.x}px ${milestoneMousePos.y}px, rgba(232, 168, 62, 0.07), transparent 75%)`,
                          }}
                        />

                        {/* Top Milestone Badge & Year */}
                        <div className="relative z-10 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="text-3xl xl:text-4xl font-black font-tech text-[#123C32] tracking-tight">
                              {m.year}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-bold font-tech uppercase tracking-wider bg-[#E9F0E9] text-[#123C32] border border-[#123C32]/15">
                              {m.badge}
                            </span>
                          </div>
                          <span className="text-xs font-mono text-[#525D57]">
                            {m.era}
                          </span>
                        </div>

                        {/* Main Milestone Narrative */}
                        <div className="relative z-10 space-y-1.5 my-auto">
                          <h3 className="text-lg xl:text-xl font-black text-[#202724] font-heading tracking-tight leading-snug">
                            {m.title}
                          </h3>
                          <p className="text-xs font-semibold text-[#E8A83E] font-tech">
                            {m.subtitle}
                          </p>
                          <p className="text-xs xl:text-sm text-[#525D57] leading-relaxed text-justify-clean font-normal">
                            {m.description}
                          </p>
                        </div>

                        {/* Checkpoints & Deliverable Footprint */}
                        <div className="relative z-10 pt-2 border-t border-[#E2E8E2] space-y-2.5">
                          <div className="flex flex-wrap gap-1.5">
                            {m.checkpoints.map((cp, cIdx) => (
                              <span
                                key={cIdx}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium font-tech bg-[#F7F8F4] border border-[#E2E8E2] text-[#252A27]"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#123C32]" />
                                {cp.label}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-2 text-xs font-tech font-bold text-[#123C32]">
                            <Award className="w-4 h-4 text-[#E8A83E] shrink-0" />
                            <span className="truncate">{m.deliverable}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right 5 Columns: Edge-to-Edge Project Visual */}
                      <div className="col-span-5 h-full relative overflow-hidden bg-neutral-900 border-l border-[#E2E8E2] group">
                        <SmartImage
                          src={m.image}
                          alt={m.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          containerClassName="w-full h-full absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/25 pointer-events-none" />

                        {/* Top Telemetry Capsule */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-none">
                          <span className="px-2.5 py-1 rounded-md bg-[#123C32]/90 backdrop-blur-md text-[#E8A83E] text-[10px] font-bold font-tech uppercase tracking-wider border border-white/10 shadow-xs">
                            {m.locationTag}
                          </span>
                          <span className="text-[10px] font-mono text-white/90 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                            {m.year} Milestone
                          </span>
                        </div>

                        {/* Bottom Telemetry Capsule */}
                        <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md z-20">
                          <div className="text-[11px] font-bold text-[#123C32] font-tech uppercase tracking-wide truncate">
                            {m.specTag}
                          </div>
                          <div className="text-[10px] text-[#525D57] font-medium line-clamp-1 mt-0.5">
                            {m.deliverable}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Status Footer Bar: Scroll Helper Hint */}
          <div className="max-w-5xl mx-auto w-full relative z-10 pt-2 border-t border-[#E2E8E2] flex items-center justify-between text-xs font-tech text-[#525D57]">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-5 rounded-full border-2 border-[#123C32]/30 flex items-start justify-center p-0.5">
                <div className="w-1 h-1.5 rounded-full bg-[#E8A83E] animate-bounce"></div>
              </div>
              <span>
                {activeMilestoneIndex === 3
                  ? "Corporate story sequence complete • Continue scrolling down to explore our Core Pillars"
                  : `Currently inspecting ${milestones[activeMilestoneIndex].year} (${milestones[activeMilestoneIndex].badge}) • Scroll to explore next chapter`}
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-[11px]">
              <span>{Math.round(scrollProgress * 100)}% Journey Progress</span>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* =========================================================
            MOBILE & TABLET TIMELINE: Dedicated Vertical Storytelling
            (Natural Touch Scrolling, Zero Whitespace, Screen-Efficient)
           ========================================================= */}
        <div className="block lg:hidden px-4 sm:px-6 py-8 sm:py-10 bg-[#F7F8F4]">
          <ScrollReveal delay={0} className="mb-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#E9F0E9] text-[#123C32] text-[10px] font-bold font-tech uppercase tracking-wider mb-2 border border-[#123C32]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A83E]"></span>
              <span>Our Corporate Story</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#202724] font-heading tracking-tight leading-tight mb-2">
              Engineering India's Renewable Future Since 2012
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed font-normal">
              From regional beginnings in Indore to a nationwide 125+ MW footprint and in-house transformer manufacturing, explore our engineering milestones.
            </p>
          </ScrollReveal>

          {/* Vertical Timeline Spine */}
          <div className="relative border-l-2 border-[#123C32]/20 ml-3 sm:ml-4 pl-5 sm:pl-7 space-y-6">
            {milestones.map((m, idx) => (
              <ScrollReveal key={m.year} delay={idx * 60} className="relative">
                {/* Numbered Node on the Vertical Spine */}
                <div className="absolute -left-[27px] sm:-left-[35px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#123C32] text-[#E8A83E] border-2 border-white shadow-sm flex items-center justify-center text-xs font-black font-tech">
                  0{idx + 1}
                </div>

                {/* Milestone Card */}
                <div className="rounded-2xl bg-white border border-[#E2E8E2] shadow-sm hover:shadow-md transition-shadow p-4 sm:p-5 overflow-hidden">
                  {/* Header: Year + Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-2xl font-black font-tech text-[#123C32] tracking-tight">
                      {m.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-tech uppercase tracking-wider bg-[#E9F0E9] text-[#123C32] border border-[#123C32]/15">
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#202724] font-heading tracking-tight leading-snug mb-1">
                    {m.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#E8A83E] font-tech mb-2">
                    {m.subtitle}
                  </p>

                  {/* Authentic Project Image */}
                  <div className="relative w-full h-36 sm:h-44 rounded-xl overflow-hidden my-2.5 border border-[#E2E8E2] bg-neutral-900">
                    <SmartImage
                      src={m.image}
                      alt={m.title}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-tech text-white">
                      <span className="bg-[#123C32]/90 backdrop-blur-xs px-2 py-0.5 rounded font-bold text-[#E8A83E] border border-white/10">
                        {m.locationTag}
                      </span>
                      <span className="bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded font-mono">
                        {m.era}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#525D57] leading-relaxed text-justify-clean mb-3">
                    {m.description}
                  </p>

                  {/* Compact Checkpoints */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {m.checkpoints.map((cp, cIdx) => (
                      <span
                        key={cIdx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium font-tech bg-[#F7F8F4] border border-[#E2E8E2] text-[#252A27]"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#123C32]" />
                        {cp.label}
                      </span>
                    ))}
                  </div>

                  {/* Deliverable highlight */}
                  <div className="pt-2.5 border-t border-[#E2E8E2] flex items-center gap-1.5 text-[11px] font-tech font-bold text-[#123C32]">
                    <Award className="w-3.5 h-3.5 text-[#E8A83E] shrink-0" />
                    <span className="line-clamp-1">{m.deliverable}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
             (Universal 3D Flip Cards: Image + Heading, Flip to Specs,
              Zero Empty Space on Large Screen: 3 Cols x 2 Rows)
         ========================================================= */}
      <section
        id="projects"
        className="py-12 md:py-16 bg-white border-b border-[#E2E8E2] relative overflow-hidden scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Section Heading */}
          <ScrollReveal delay={0} className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight font-heading leading-tight mb-3">
              Real Projects Executed Across India
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed max-w-2xl mx-auto font-normal">
              Hover over any project card to reveal its technical specifications, substation engineering, and verified environmental telemetry.
            </p>
          </ScrollReveal>

          {/* Universal 6-Card Grid: Perfectly fills 3 columns on large screen with ZERO empty space */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {portfolioProjects.map((project) => (
              <FlipProjectCard key={project.id} project={project} />
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
          5. SECTION FIVE: CONSULTATION CTA BANNER (Standardized
             #123C32 Banner with Radial Tech Glow & Dual Action Buttons)
         ========================================================= */}
      <section className="py-8 md:py-10 bg-[#123C32] text-white relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight font-heading mb-3">
            Partner with Proton Power Infra for Your Energy Transition
          </h2>

          <p className="text-xs sm:text-sm text-[#E9F0E9]/85 leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
            Whether developing a multi-megawatt solar park, installing captive factory arrays, or sourcing Inverter Duty Solar Transformers, our engineers are ready to assist.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact#inquiry-form"
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
