import { useState, useRef } from "react";
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
  MapPin,
  Cpu,
  Sparkles,
  Phone,
  Activity,
  ChevronLeft,
  ChevronRight,
  Globe,
  Clock,
} from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";

// Authentic Company Assets
import mainTopImg from "../assets/company/main-comany-name-image-or-top-image.jpg";
import utilityPlantImg from "../assets/company/real-project-utility-plant.jpg";
import solarRowsImg from "../assets/company/real-project-solar-rows.jpg";
import transformerSubstationImg from "../assets/company/real-project-transformer-substation.jpg";
import project1Img from "../assets/company/project-1.jpg";
import project2Img from "../assets/company/project-2.jpg";

export default function About() {
  const [activeProject, setActiveProject] = useState(0);
  const scrollContainerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isPointerDown = useRef(false);

  // Smooth scroll to project card
  const scrollToProject = (index) => {
    setActiveProject(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.children;
      if (cards && cards[index]) {
        const targetLeft = cards[index].offsetLeft - container.offsetLeft;
        container.scrollTo({ left: targetLeft, behavior: "smooth" });
      }
    }
  };

  const handlePrev = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const prevIndex = (activeProject - 1 + portfolioProjects.length) % portfolioProjects.length;
    scrollToProject(prevIndex);
  };

  const handleNext = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const nextIndex = (activeProject + 1) % portfolioProjects.length;
    scrollToProject(nextIndex);
  };

  // Sync active index when user scrolls natively on mobile/desktop
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.children;
    if (!cards || cards.length === 0) return;

    let closestIndex = 0;
    let minDistance = Infinity;
    const containerLeft = container.scrollLeft;

    for (let i = 0; i < cards.length; i++) {
      const cardLeft = cards[i].offsetLeft - container.offsetLeft;
      const distance = Math.abs(cardLeft - containerLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    if (closestIndex !== activeProject) {
      setActiveProject(closestIndex);
    }
  };

  // Touch & Pointer Swipe Handlers for mobile & desktop drag
  const handleTouchStart = (e) => {
    const touch = e.touches?.[0] || e.changedTouches?.[0] || e.targetTouches?.[0] || e.nativeEvent?.touches?.[0] || e.nativeEvent?.changedTouches?.[0] || e.nativeEvent || e;
    if (touch && (touch.clientX !== undefined || touch.pageX !== undefined)) {
      touchStartX.current = touch.clientX ?? touch.pageX;
      touchStartY.current = touch.clientY ?? touch.pageY;
      isPointerDown.current = true;
    }
  };

  const handleTouchEnd = (e) => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;
    const touch = e.changedTouches?.[0] || e.touches?.[0] || e.targetTouches?.[0] || e.nativeEvent?.changedTouches?.[0] || e.nativeEvent?.touches?.[0] || e.nativeEvent || e;
    if (!touch || (touch.clientX === undefined && touch.pageX === undefined)) return;
    const currentX = touch.clientX ?? touch.pageX;
    const currentY = touch.clientY ?? touch.pageY;
    const diffX = touchStartX.current - currentX;
    const diffY = touchStartY.current - currentY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Real Executed Projects Showcase (Compact & Visual-First)
  const portfolioProjects = [
    {
      id: "project-utility",
      title: "Utility Ground-Mounted Solar Park",
      tagline: "Central India Grid Evacuation Substation",
      capacity: "Multi-MW Plant",
      image: utilityPlantImg,
      category: "Utility Scale EPC",
    },
    {
      id: "project-rows",
      title: "High-Yield Tracker & Fixed-Tilt Arrays",
      tagline: "Industrial Captive Solar Generation",
      capacity: "High PR Ratio",
      image: solarRowsImg,
      category: "Industrial Captive",
    },
    {
      id: "project-substation",
      title: "Inverter Duty Transformer Substation",
      tagline: "Step-Up Voltage Synchronization to 33kV",
      capacity: "HT Grid Sync",
      image: transformerSubstationImg,
      category: "In-House Transformers",
    },
    {
      id: "project-1",
      title: "Commercial Rooftop Solar Array",
      tagline: "Zero-Downtime Facility Power Integration",
      capacity: "Commercial Scale",
      image: project1Img,
      category: "Commercial EPC",
    },
    {
      id: "project-2",
      title: "Multi-Megawatt Power Infrastructure",
      tagline: "Turnkey Civil, Electrical & CEIG Execution",
      capacity: "Turnkey EPC",
      image: project2Img,
      category: "Turnkey Solar Park",
    },
  ];

  return (
    <div className="pt-20 bg-[#F7F8F4] min-h-screen">
      {/* 1. Hero Section (Compact py-10, Single CTA Button, Tech Typography) */}
      <section className="relative py-10 md:py-10 lg:py-10 bg-[#123C32] text-white overflow-hidden">
        {/* Subtle background tech pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading, Subtext, Single CTA, Micro-Metrics */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/40 font-tech">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Established 2012 • Indore, Madhya Pradesh</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-heading">
                At the Forefront of India's Clean Energy Revolution.
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-[#E9F0E9]/85 leading-relaxed font-normal max-w-2xl">
                Proton Power Infra is a leading solar panel installation company and power transformer manufacturer headquartered in Indore, with a nationwide footprint. Since 2012, we deliver clean energy with precision, passion, and purpose.
              </p>

              {/* Exactly ONE CTA Button */}
              <div className="pt-1">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#E8A83E]/20 transition-all duration-300 font-tech tracking-wide group cursor-pointer"
                >
                  <span>Explore Executed Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Micro-Metrics Bar */}
              <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-3 font-tech">
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#E8A83E]">125+ MW</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Installed in India
                  </div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#E8A83E]">Since 2012</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Over a Decade
                  </div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-black text-[#E8A83E]">IPP & EPC</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                    Turnkey Specialists
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Frame with Authentic Top Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/80 bg-[#202724] group">
                <div className="relative h-64 sm:h-72 lg:h-[320px] overflow-hidden">
                  <img
                    src={mainTopImg}
                    alt="Proton Power Infra Corporate Headquarters & Solar Projects"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/90 via-transparent to-black/20"></div>
                </div>

                {/* Top Status Capsule */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#123C32] shadow-sm font-tech">
                    <Activity className="w-3.5 h-3.5 text-[#E8A83E] animate-pulse" />
                    <span>Proton Power Infra • Corporate HQ</span>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#202724]/85 backdrop-blur-md text-[10px] font-mono text-[#E9F0E9] border border-white/10">
                    <span>22.75° N, 75.89° E</span>
                  </div>
                </div>

                {/* Bottom Spec Capsule */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-white/60 z-10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#E8A83E]"></span>
                      <span className="text-xs font-bold text-[#123C32] uppercase tracking-wider font-tech">
                        Solar EPC & Transformer Manufacturing
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#525D57] leading-relaxed">
                    Headquartered in Indore with strategic regional operations in Delhi, Dewas, and Bhopal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section 2 — Who We Are & Our Corporate Story (Visual & Narrative Driven, No Clutter) */}
      <section className="py-10 md:py-10 lg:py-10 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Narrative Story & Milestone Timeline */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-1.5">
                  <span>Our Corporate Story</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                  Engineering India's Renewable Future Since 2012
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                Founded in Indore, Proton Power Infra emerged with a single conviction: to make clean, green, and cost-effective solar energy accessible to every corner of India. Over the past decade, we transformed from regional solar EPC contractors into an <strong>Independent Power Producer (IPP)</strong> and <strong>high-performance power transformer manufacturer</strong> with over <strong>125+ MW installed nationwide</strong>.
              </p>

              {/* 3 Visual Milestone Steps (Connected Timeline) */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center font-bold text-xs font-mono shrink-0 mt-0.5">
                    01
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#202724] font-heading">
                      Independent Power Producer (IPP) & Turnkey EPC
                    </h3>
                    <p className="text-xs text-[#525D57] leading-relaxed">
                      Executing large-scale utility solar parks and industrial captive generation across public and private sectors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center font-bold text-xs font-mono shrink-0 mt-0.5">
                    02
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#202724] font-heading">
                      In-House Power Transformer Manufacturing
                    </h3>
                    <p className="text-xs text-[#525D57] leading-relaxed">
                      Manufacturing Inverter Duty Solar Transformers in Dewas & Indore, eliminating third-party substation delays.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center font-bold text-xs font-mono shrink-0 mt-0.5">
                    03
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#202724] font-heading">
                      Dynamic Team & Global Standards
                    </h3>
                    <p className="text-xs text-[#525D57] leading-relaxed">
                      The ideal mix of energetic young engineers and seasoned industry veterans adhering to global IEC & CEA grid codes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mission & Vision Visual Capsule */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#E2E8E2] bg-[#202724] shadow-md group">
                <div className="relative h-60 sm:h-72 lg:h-[300px] overflow-hidden">
                  <img
                    src={solarRowsImg}
                    alt="Proton Power Infra Solar Arrays"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123C32] via-[#123C32]/70 to-transparent"></div>
                </div>

                {/* Overlaid Mission & Vision Content */}
                <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end text-white">
                  <div className="mb-3">
                    <span className="text-[10px] font-bold text-[#E8A83E] uppercase tracking-wider font-tech bg-white/10 px-2 py-0.5 rounded">
                      Our Guiding Mission
                    </span>
                    <p className="text-xs sm:text-sm font-bold mt-1.5 leading-snug text-white font-heading">
                      "To make clean, green, and cost-effective solar energy accessible to every corner of India."
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-white/15">
                    <span className="text-[10px] font-bold text-[#E8A83E] uppercase tracking-wider font-tech">
                      Our Core Purpose
                    </span>
                    <p className="text-[11px] text-[#E9F0E9]/85 leading-relaxed mt-0.5">
                      Technical brilliance, dependable lifecycle support, and uncompromised safety across all power infrastructure projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 3 — Projects & Portfolio Showcase (Compact & Horizontal Scrollable) */}
      <section id="projects" className="py-10 md:py-10 lg:py-10 bg-[#F7F8F4] border-b border-[#E2E8E2] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Slide & Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-1.5">
                <span>Executed Portfolios</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                Real Projects Executed Across India
              </h2>
            </div>

            {/* Slide Navigation & Indicator Controls */}
            <div className="flex items-center gap-3 font-tech">
              {/* Slide Counter Badge */}
              <div
                className="px-2.5 py-1 rounded-lg bg-white border border-[#E2E8E2] text-xs font-mono font-bold text-[#123C32] shadow-2xs"
                aria-label={`Project 0${activeProject + 1} of 0${portfolioProjects.length}`}
              >
                0{activeProject + 1} / 0{portfolioProjects.length}
              </div>

              {/* Dot Indicators (Clickable) */}
              <div className="hidden sm:flex items-center gap-1.5">
                {portfolioProjects.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => scrollToProject(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeProject === idx
                        ? "w-6 bg-[#123C32]"
                        : "w-2 bg-[#123C32]/20 hover:bg-[#123C32]/50"
                    }`}
                    aria-label={`Jump to project ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrow Navigation */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-xl bg-white border border-[#E2E8E2] hover:bg-[#123C32] hover:text-white transition-colors flex items-center justify-center text-[#123C32] shadow-sm cursor-pointer focus:outline-none"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-9 h-9 rounded-xl bg-white border border-[#E2E8E2] hover:bg-[#123C32] hover:text-white transition-colors flex items-center justify-center text-[#123C32] shadow-sm cursor-pointer focus:outline-none"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Touch-Swipeable & Draggable Scroll Showcase Rail */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onPointerDown={handleTouchStart}
            onPointerUp={handleTouchEnd}
            className="flex gap-4 overflow-x-auto pb-3 pt-1 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
          >
            {portfolioProjects.map((p, idx) => {
              const isActive = activeProject === idx;
              return (
                <div
                  key={p.id}
                  onClick={() => scrollToProject(idx)}
                  className={`w-72 sm:w-80 shrink-0 snap-start bg-white rounded-2xl border transition-all duration-300 flex flex-col group cursor-pointer ${
                    isActive
                      ? "border-[#123C32] shadow-md ring-2 ring-[#123C32]/30"
                      : "border-[#E2E8E2] hover:border-[#123C32]/40 shadow-sm"
                  }`}
                >
                  {/* Project Image */}
                  <div className="relative h-44 sm:h-48 overflow-hidden rounded-t-2xl bg-[#202724]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out pointer-events-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                    {/* Category Pill */}
                    <div className="absolute top-2.5 left-2.5 pointer-events-none">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#123C32] text-[#E8A83E] text-[10px] font-bold uppercase tracking-wider font-tech shadow-sm">
                        {p.category}
                      </span>
                    </div>

                    {/* Capacity Badge */}
                    <div className="absolute bottom-2.5 right-2.5 pointer-events-none">
                      <span className="text-[10px] font-mono font-bold bg-white/20 text-white px-2 py-0.5 rounded backdrop-blur-sm">
                        {p.capacity}
                      </span>
                    </div>
                  </div>

                  {/* Minimal Information */}
                  <div className="p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#202724] font-heading mb-1 truncate">
                        {p.title}
                      </h3>
                      <p className="text-xs text-[#525D57] leading-relaxed line-clamp-2">
                        {p.tagline}
                      </p>
                    </div>

                    <div className="pt-2.5 mt-2.5 border-t border-[#E2E8E2] flex items-center justify-between text-[11px] text-[#123C32] font-bold font-tech">
                      <span>100% Commissioned Asset</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#123C32]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Dots Indicator & Swipe Hint */}
          <div className="flex sm:hidden items-center justify-between mt-3 pt-2 border-t border-[#E2E8E2]/60 px-1 font-tech">
            <span className="text-[11px] text-[#525D57] font-medium">
              Swipe left / right to browse
            </span>
            <div className="flex items-center gap-1.5">
              {portfolioProjects.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToProject(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeProject === idx ? "w-5 bg-[#123C32]" : "w-1.5 bg-[#123C32]/25"
                  }`}
                  aria-label={`Jump to project ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section 4 — Pan-India Regional Footprint Strip */}
      <section className="py-10 md:py-10 lg:py-10 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
            {COMPANY_DETAILS.offices.map((off, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#123C32]" />
                    <h4 className="text-xs sm:text-sm font-bold text-[#202724] font-heading">
                      {off.city}
                    </h4>
                  </div>
                  <span className="text-[9px] font-bold text-[#123C32] bg-[#E9F0E9] px-1.5 py-0.5 rounded font-tech">
                    {off.role}
                  </span>
                </div>
                <p className="text-[11px] text-[#525D57] leading-relaxed truncate">
                  {off.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Section 5 — Compact Consultation CTA Banner */}
      <section className="py-10 md:py-10 lg:py-10 bg-[#123C32] text-white relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold uppercase tracking-wider border border-[#E8A83E]/40 font-tech mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Powering India Since 2012</span>
          </div>

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

          <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-5 text-[11px] text-[#E9F0E9]/75 font-tech">
            <span>✓ 125+ MW Proven Track Record</span>
            <span>✓ In-House Solar Transformer Manufacturing</span>
            <span>✓ Strategic Presence in Delhi, Indore, Dewas & Bhopal</span>
          </div>
        </div>
      </section>
    </div>
  );
}
