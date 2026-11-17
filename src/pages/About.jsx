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

export default function About() {
  // -------------------------------------------------------------
  // Section 2: Interactive Milestone Journey State & Auto-Cycle
  // -------------------------------------------------------------
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [isMilestoneHovered, setIsMilestoneHovered] = useState(false);
  const milestoneTimerRef = useRef(null);

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

  // Auto-Cycle Milestones every 3.5 seconds when not hovered
  useEffect(() => {
    if (isMilestoneHovered) return;

    milestoneTimerRef.current = setInterval(() => {
      setActiveMilestone((prev) => (prev + 1) % milestones.length);
    }, 3500);

    return () => {
      if (milestoneTimerRef.current) clearInterval(milestoneTimerRef.current);
    };
  }, [isMilestoneHovered, milestones.length]);

  const currentMilestone = milestones[activeMilestone];

  // -------------------------------------------------------------
  // Section 4: Projects Showcase State & Auto-Cycle
  // -------------------------------------------------------------
  const [activeProject, setActiveProject] = useState(0);
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const projectTimerRef = useRef(null);

  // Project Card Mouse Tracking for Dynamic Cursor Glow
  const [projectMousePos, setProjectMousePos] = useState({ x: 0, y: 0 });
  const [isProjectCardHovered, setIsProjectCardHovered] = useState(false);

  const handleProjectMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setProjectMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const portfolioProjects = [
    {
      id: "project-utility",
      title: "Utility Ground-Mounted Solar Park",
      tagline: "High-Yield Multi-Megawatt Clean Energy Generation",
      capacity: "Multi-MW Plant",
      category: "Utility Scale EPC",
      specs: "33kV Grid Evacuation • Central Inverters • Tier-1 Mono PERC",
      status: "100% Commissioned",
      image: utilityPlantImg,
      location: "Central India Grid",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200/80",
    },
    {
      id: "project-rows",
      title: "High-Yield Tracker & Fixed-Tilt Arrays",
      tagline: "Heavy Industrial Captive Solar Power Generation",
      capacity: "High PR Ratio",
      category: "Industrial Captive",
      specs: "Zero-Export Protection • SCADA Telemetry • 99.4% Uptime",
      status: "Active Captive Generation",
      image: solarRowsImg,
      location: "Industrial Corridor, MP",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200/80",
    },
    {
      id: "project-substation",
      title: "Inverter Duty Transformer Substation",
      tagline: "Step-Up Voltage Synchronization to 33kV & 132kV",
      capacity: "HT Grid Sync",
      category: "In-House Transformers",
      specs: "In-House Dewas Manufactured • Copper Wound • Low Loss",
      status: "CEIG & DISCOM Approved",
      image: transformerSubstationImg,
      location: "Substation Bay",
      badgeColor: "bg-sky-50 text-sky-800 border-sky-200/80",
    },
    {
      id: "project-1",
      title: "Commercial Rooftop Solar Array",
      tagline: "Zero-Downtime Facility Power Integration & Net Metering",
      capacity: "Commercial Scale",
      category: "Commercial EPC",
      specs: "Non-Penetrating Clamps • DISCOM Net-Metered • 80% Bill Cut",
      status: "100% Commissioned Asset",
      image: project1Img,
      location: "Commercial Complex",
      badgeColor: "bg-purple-50 text-purple-800 border-purple-200/80",
    },
    {
      id: "project-2",
      title: "Multi-Megawatt Power Infrastructure",
      tagline: "Turnkey Civil, Electrical & CEIG Statutory Execution",
      capacity: "Turnkey EPC",
      category: "Turnkey Solar Park",
      specs: "End-to-End Civil & Electrical • In-House HT Works",
      status: "Grid Synchronized",
      image: project2Img,
      location: "Turnkey Solar Park",
      badgeColor: "bg-teal-50 text-teal-800 border-teal-200/80",
    },
  ];

  // Auto-Cycle Projects every 3.5 seconds when not hovered
  useEffect(() => {
    if (isProjectHovered) return;

    projectTimerRef.current = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % portfolioProjects.length);
    }, 3500);

    return () => {
      if (projectTimerRef.current) clearInterval(projectTimerRef.current);
    };
  }, [isProjectHovered, portfolioProjects.length]);

  const currentProject = portfolioProjects[activeProject];

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
                    <a
                      href="#corporate-story"
                      className="relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/25 transition-all duration-300 font-tech tracking-wide cursor-pointer"
                    >
                      <span>Discover Our Corporate Journey</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                    </a>
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
          2. SECTION TWO: OUR CORPORATE STORY (Interactive Timeline,
             No Static Image, Motion & Dynamic Cursor Glows)
         ========================================================= */}
      <section
        id="corporate-story"
        className="py-12 md:py-16 bg-white border-b border-[#E2E8E2] relative overflow-hidden scroll-mt-20"
        onMouseEnter={() => setIsMilestoneHovered(true)}
        onMouseLeave={() => setIsMilestoneHovered(false)}
      >
        {/* Subtle background ambient radial lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#123C32]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8A83E]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Section Heading */}
          <ScrollReveal delay={0} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight font-heading leading-tight mb-3">
              Engineering India's Renewable Future Since 2012
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed max-w-2xl mx-auto font-normal">
              From regional beginnings in Indore to a nationwide 125+ MW footprint and in-house transformer manufacturing, explore the defining milestones of our engineering journey.
            </p>
          </ScrollReveal>

          {/* Interactive Milestone Progress Track (Connected Stepper) */}
          <div className="relative mb-8 sm:mb-10 max-w-4xl mx-auto">
            {/* Connecting Track Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#E2E8E2] -translate-y-1/2 z-0 hidden sm:block"></div>
            {/* Active Highlight Track */}
            <div
              className="absolute top-1/2 left-0 h-1 bg-[#123C32] -translate-y-1/2 z-0 transition-all duration-700 ease-out hidden sm:block"
              style={{
                width: `${(activeMilestone / (milestones.length - 1)) * 100}%`,
              }}
            ></div>

            {/* Milestone Step Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 relative z-10">
              {milestones.map((m, idx) => {
                const isActive = activeMilestone === idx;
                const isPast = activeMilestone > idx;
                const IconComponent = m.icon;

                return (
                  <button
                    key={m.year}
                    type="button"
                    onClick={() => setActiveMilestone(idx)}
                    className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-xl transition-all duration-500 cursor-pointer group focus:outline-none ${
                      isActive
                        ? "bg-[#123C32] text-white shadow-xl shadow-[#123C32]/25 scale-[1.03] ring-2 ring-[#E8A83E]"
                        : isPast
                        ? "bg-white text-[#202724] border border-[#123C32]/30 hover:border-[#123C32] hover:bg-neutral-50 shadow-xs"
                        : "bg-white text-[#525D57] border border-[#E2E8E2] hover:border-[#E8A83E]/50 hover:bg-neutral-50 shadow-xs"
                    }`}
                  >
                    {/* Node Dot / Icon Capsule */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-2 transition-transform duration-500 group-hover:scale-110 ${
                        isActive
                          ? "bg-[#E8A83E] text-[#123C32] shadow-[0_0_15px_rgba(232,168,62,0.6)]"
                          : isPast
                          ? "bg-[#E9F0E9] text-[#123C32]"
                          : "bg-neutral-100 text-[#525D57] group-hover:text-[#123C32] group-hover:bg-[#E9F0E9]"
                      }`}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                    </div>

                    {/* Year Tag */}
                    <span
                      className={`text-base sm:text-lg font-black font-tech tracking-tight transition-colors ${
                        isActive ? "text-[#E8A83E]" : "text-[#202724] group-hover:text-[#123C32]"
                      }`}
                    >
                      {m.year}
                    </span>

                    {/* Short Badge */}
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider mt-0.5 line-clamp-1 ${
                        isActive ? "text-[#E9F0E9]/80" : "text-[#525D57]"
                      }`}
                    >
                      {m.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Milestone Card with Dynamic Cursor Movement Glow */}
          <div className="max-w-4xl mx-auto">
            <div
              onMouseMove={handleMilestoneMouseMove}
              onMouseEnter={() => setIsMilestoneCardHovered(true)}
              onMouseLeave={() => setIsMilestoneCardHovered(false)}
              className="relative rounded-2xl p-[1.5px] transition-all duration-500 ease-out select-none shadow-xl shadow-black/5"
            >
              {/* Dynamic Cursor-Responsive Border Glow */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
                style={{
                  opacity: isMilestoneCardHovered ? 1 : 0.45,
                  background: isMilestoneCardHovered
                    ? `radial-gradient(350px circle at ${milestoneMousePos.x}px ${milestoneMousePos.y}px, rgba(232, 168, 62, 0.95), rgba(232, 168, 62, 0.35) 45%, rgba(18, 60, 50, 0.2) 75%, transparent 100%)`
                    : `linear-gradient(135deg, rgba(232, 168, 62, 0.65), rgba(18, 60, 50, 0.35), rgba(232, 168, 62, 0.5))`,
                }}
              />

              {/* Card Inner Surface */}
              <div className="relative rounded-[14.5px] bg-white p-6 sm:p-8 lg:p-10 overflow-hidden">
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
                  <div className="flex-1 space-y-3.5">
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

                    <div className="mt-4 pt-3 border-t border-[#E2E8E2] flex items-center justify-between text-[11px] font-mono text-[#525D57]">
                      <span>Active Step 0{activeMilestone + 1}/04</span>
                      <div className="flex items-center gap-1">
                        {milestones.map((_, i) => (
                          <span
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              activeMilestone === i ? "w-4 bg-[#123C32]" : "bg-[#123C32]/20"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. SECTION THREE: CORE PILLARS (Mission, Vision & Excellence)
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
            {/* Card 1: Our Mission */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8E2] hover:border-[#123C32]/40 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#E9F0E9] text-[#123C32] flex items-center justify-center mb-4 group-hover:bg-[#E8A83E] group-hover:text-[#123C32] transition-colors shadow-xs">
                  <Target className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold font-tech uppercase tracking-wider mb-2 bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                  Our Mission
                </div>
                <h3 className="text-lg font-bold text-[#202724] font-heading mb-2">
                  Democratizing Clean Power Across India
                </h3>
                <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                  To accelerate India's transition to clean energy by engineering cost-effective, high-yield solar EPC systems and in-house transformers accessible to homes, factories, and utility grids.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E2E8E2] text-xs font-bold text-[#123C32] font-tech flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>125+ MW Installed Nationwide</span>
              </div>
            </div>

            {/* Card 2: Our Vision */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8E2] hover:border-[#123C32]/40 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#E9F0E9] text-[#123C32] flex items-center justify-center mb-4 group-hover:bg-[#E8A83E] group-hover:text-[#123C32] transition-colors shadow-xs">
                  <Eye className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold font-tech uppercase tracking-wider mb-2 bg-amber-50 text-amber-800 border border-amber-200/80">
                  Our Vision
                </div>
                <h3 className="text-lg font-bold text-[#202724] font-heading mb-2">
                  India's Most Dependable Energy Partner
                </h3>
                <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                  To stand as India's premier integrated renewable energy enterprise—seamlessly fusing advanced solar EPC design, in-house transformer manufacturing, and 25-year lifecycle performance.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E2E8E2] text-xs font-bold text-[#123C32] font-tech flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Integrated EPC & Manufacturing</span>
              </div>
            </div>

            {/* Card 3: Quality Standard */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8E2] hover:border-[#123C32]/40 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#E9F0E9] text-[#123C32] flex items-center justify-center mb-4 group-hover:bg-[#E8A83E] group-hover:text-[#123C32] transition-colors shadow-xs">
                  <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold font-tech uppercase tracking-wider mb-2 bg-sky-50 text-sky-800 border border-sky-200/80">
                  Engineering Rigor
                </div>
                <h3 className="text-lg font-bold text-[#202724] font-heading mb-2">
                  Zero-Tolerance Quality & Grid Safety
                </h3>
                <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                  Every installation strictly complies with IEC, CEA, and DISCOM grid codes. From Tier-1 bifacial panels to double-wound copper transformers, we never compromise on safety.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E2E8E2] text-xs font-bold text-[#123C32] font-tech flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>CEA & DISCOM Grid Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. SECTION FOUR: RECREATED PROJECTS SHOWCASE (Screen-Optimized,
             Unique Master-Detail Spotlight, Cursor-Based Glow & Interactivity)
         ========================================================= */}
      <section
        id="projects"
        className="py-12 md:py-16 bg-white border-b border-[#E2E8E2] relative overflow-hidden scroll-mt-20"
        onMouseEnter={() => setIsProjectHovered(true)}
        onMouseLeave={() => setIsProjectHovered(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Section Heading */}
          <ScrollReveal delay={0} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight font-heading leading-tight mb-3">
              Real Executed Projects Across India
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed max-w-2xl mx-auto font-normal">
              Explore our proven track record across utility-scale solar parks, heavy captive industrial arrays, and high-voltage transformer substations.
            </p>
          </ScrollReveal>

          {/* Master-Detail Interactive Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Column: Featured Spotlight Preview Card with Cursor Tracking Glow (lg:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div
                onMouseMove={handleProjectMouseMove}
                onMouseEnter={() => setIsProjectCardHovered(true)}
                onMouseLeave={() => setIsProjectCardHovered(false)}
                className="relative rounded-2xl p-[1.5px] transition-all duration-500 ease-out select-none shadow-2xl h-full flex flex-col justify-between overflow-hidden"
              >
                {/* Dynamic Cursor-Responsive Border Glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
                  style={{
                    opacity: isProjectCardHovered ? 1 : 0.45,
                    background: isProjectCardHovered
                      ? `radial-gradient(400px circle at ${projectMousePos.x}px ${projectMousePos.y}px, rgba(232, 168, 62, 0.95), rgba(232, 168, 62, 0.35) 45%, rgba(18, 60, 50, 0.2) 75%, transparent 100%)`
                      : `linear-gradient(135deg, rgba(232, 168, 62, 0.75), rgba(18, 60, 50, 0.4), rgba(232, 168, 62, 0.6))`,
                  }}
                />

                {/* Main Visual Container */}
                <div className="relative rounded-[14.5px] bg-[#202724] overflow-hidden flex-1 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] lg:min-h-[460px]">
                  {/* Photo with SmartImage */}
                  <div className="absolute inset-0">
                    <SmartImage
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 hover:scale-105"
                      containerClassName="w-full h-full absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 pointer-events-none"></div>
                  </div>

                  {/* Top Badges Capsule */}
                  <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#123C32]/95 backdrop-blur-md text-[#E8A83E] text-xs font-bold font-tech uppercase tracking-wider border border-white/10 shadow-md">
                      {currentProject.category}
                    </span>

                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#123C32] text-xs font-mono font-bold shadow-md">
                      {currentProject.capacity}
                    </span>
                  </div>

                  {/* Bottom Information Glass Overlay */}
                  <div className="relative z-10 p-5 sm:p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-pulse"></span>
                      <span className="text-[11px] font-mono font-bold text-[#E8A83E] uppercase tracking-wider">
                        {currentProject.status} • {currentProject.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white font-heading tracking-tight mb-1.5 leading-snug">
                      {currentProject.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#E9F0E9]/90 font-medium mb-3">
                      {currentProject.tagline}
                    </p>

                    <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs font-tech text-[#E9F0E9]/80">
                      <span>{currentProject.specs}</span>
                      <Link
                        to="/enquiry"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] font-bold text-xs transition-colors shadow-xs"
                      >
                        <span>Inquire Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Project Selector Rail / Cards (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between mb-1 px-1">
                <span className="text-xs font-bold text-[#525D57] uppercase tracking-wider font-tech">
                  Select Project to Inspect ({portfolioProjects.length} Assets)
                </span>
                <span className="text-xs font-mono font-bold text-[#123C32]">
                  0{activeProject + 1} / 0{portfolioProjects.length}
                </span>
              </div>

              {portfolioProjects.map((p, idx) => {
                const isActive = activeProject === idx;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveProject(idx)}
                    className={`w-full p-3 sm:p-3.5 rounded-xl border transition-all duration-400 text-left flex items-center gap-3.5 cursor-pointer group focus:outline-none ${
                      isActive
                        ? "bg-[#123C32] text-white border-[#E8A83E] shadow-lg shadow-[#123C32]/20 scale-[1.01] ring-1 ring-[#E8A83E]"
                        : "bg-white text-[#202724] border-[#E2E8E2] hover:border-[#123C32]/40 hover:bg-neutral-50 shadow-xs"
                    }`}
                  >
                    {/* Small Thumbnail */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0 bg-neutral-900 border border-white/20">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Meta info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span
                          className={`text-[10px] font-mono font-bold uppercase tracking-wider truncate ${
                            isActive ? "text-[#E8A83E]" : "text-[#525D57]"
                          }`}
                        >
                          {p.category}
                        </span>
                        <span
                          className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded shrink-0 ${
                            isActive ? "bg-white/15 text-white" : "bg-[#E9F0E9] text-[#123C32]"
                          }`}
                        >
                          {p.capacity}
                        </span>
                      </div>

                      <h4
                        className={`text-xs sm:text-sm font-bold font-heading truncate ${
                          isActive ? "text-white" : "text-[#202724] group-hover:text-[#123C32]"
                        }`}
                      >
                        {p.title}
                      </h4>

                      <p
                        className={`text-[11px] truncate mt-0.5 ${
                          isActive ? "text-[#E9F0E9]/75" : "text-[#525D57]"
                        }`}
                      >
                        {p.tagline}
                      </p>
                    </div>

                    {/* Active Indicator Chevron */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isActive
                          ? "bg-[#E8A83E] text-[#123C32]"
                          : "text-transparent group-hover:text-[#123C32]/40"
                      }`}
                    >
                      <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </button>
                );
              })}
            </div>
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
