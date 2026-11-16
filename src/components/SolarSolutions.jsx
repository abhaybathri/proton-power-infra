import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Zap, ShieldCheck, Cpu, Award, ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "./SmartImage";
import ScrollReveal from "./ScrollReveal";

// Home Assets Images
import residentialImg from "../assets/home-assets/residential-solar.jpg";
import commercialImg from "../assets/home-assets/comercial-ground-solar.jpg";
import industrialImg from "../assets/home-assets/industrial-solar.jpg";
import transformerImg from "../assets/home-assets/solar-transformer.jpg";
import turnkeyImg from "../assets/home-assets/turnkey-solar.jpg";

const INFRA_CAPABILITIES = [
  {
    id: "residential",
    slug: "residential-solar",
    index: "01",
    title: "Residential Solar",
    capacity: "3 kW – 25 kW",
    target: "Villas & Housing Societies",
    tagline: "Custom rooftop net-metering & MNRE subsidy.",
    cta: "Explore Residential",
    image: residentialImg,
    icon: Sun,
  },
  {
    id: "commercial",
    slug: "commercial-solar",
    index: "02",
    title: "Commercial Solar",
    capacity: "25 kW – 500+ kW",
    target: "Offices & Commercial Hubs",
    tagline: "40% accelerated tax depreciation & peak shaving.",
    cta: "Explore Commercial",
    image: commercialImg,
    icon: Zap,
  },
  {
    id: "industrial",
    slug: "industrial-solar",
    index: "03",
    title: "Industrial Captive",
    capacity: "500 kW – 10+ MW",
    target: "Heavy Manufacturing & Mills",
    tagline: "MW-scale captive power with HT grid sync.",
    cta: "Explore Industrial",
    image: industrialImg,
    icon: ShieldCheck,
  },
  {
    id: "transformers",
    slug: "power-transformers",
    index: "04",
    title: "Power Transformers",
    capacity: "Custom KVA / MVA",
    target: "Solar Parks & Substations",
    tagline: "Manufactured in-house in Dewas, tested to IS 2026.",
    cta: "Explore Transformers",
    image: transformerImg,
    icon: Cpu,
  },
  {
    id: "epc-services",
    slug: "solar-epc-services",
    index: "05",
    title: "Turnkey Solar EPC",
    capacity: "125+ MW Proven Track",
    target: "Utility Parks & IPP Developers",
    tagline: "Full CEIG liaisoning, civil erection & SCADA IoT.",
    cta: "Explore Turnkey EPC",
    image: turnkeyImg,
    icon: Award,
  },
];

function StreamCard({ item, onHoverStart, onHoverEnd }) {
  const Icon = item.icon;

  return (
    <div
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="group relative w-[285px] sm:w-[325px] h-[375px] sm:h-[395px] shrink-0 rounded-2xl overflow-hidden border border-black/10 hover:border-[#E8A83E]/80 shadow-md hover:shadow-2xl hover:shadow-[#123C32]/20 transition-all duration-500 cursor-pointer select-none bg-neutral-900"
    >
      {/* Background Full-Bleed Photograph: Naturally saturated & rich on hover (Zero glaring spotlight overlay) */}
      <SmartImage
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-106 group-hover:saturate-120 group-hover:contrast-105 transition-all duration-700 ease-out"
        containerClassName="w-full h-full absolute inset-0"
      />

      {/* Cinematic Dark Gradient Overlays for pure text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 pointer-events-none transition-opacity duration-300"></div>

      {/* Subtle border shimmer ring on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 ring-1 ring-inset ring-[#E8A83E]/50 transition-opacity duration-300 z-10" />

      {/* Top Bar: Telemetry Badge + Crisp Solar Amber Icon */}
      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-20">
        <span className="px-3 py-1 rounded-full text-[11px] font-bold font-tech uppercase tracking-wide bg-white/95 text-[#123C32] shadow-sm flex items-center gap-1.5 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8A83E] animate-pulse"></span>
          <span>{item.index} • {item.capacity}</span>
        </span>

        {/* Radiant Icon (Solar Amber accent, crisp & high contrast) */}
        <div className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md text-[#123C32] group-hover:bg-[#E8A83E] group-hover:text-[#123C32] group-hover:scale-105 border border-white/40 flex items-center justify-center transition-all duration-300 shrink-0 shadow-sm">
          <Icon className="w-4 h-4 stroke-[2.2]" />
        </div>
      </div>

      {/* Bottom Content: Always shows Target + Title, smooth hover reveals Tagline & Button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20 space-y-2">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#E8A83E] uppercase tracking-wider block">
            {item.target}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-white font-heading tracking-tight leading-snug">
            {item.title}
          </h3>
        </div>

        {/* Hover-Revealed Info & Action Button */}
        <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden space-y-2.5">
          <p className="text-xs text-gray-200 leading-relaxed font-normal">
            {item.tagline}
          </p>

          <Link
            to={`/${item.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold font-tech bg-[#123C32] text-white hover:bg-[#1A4D41] shadow-lg shadow-[#123C32]/40 hover:shadow-[0_0_24px_rgba(232,168,62,0.45)] border border-[#E8A83E]/50 transition-all duration-300 group/btn"
          >
            <span>{item.cta}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SolarSolutions() {
  const scrollRef = useRef(null);
  const animFrameRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const isInteracting = useRef(false);
  const resumeTimeout = useRef(null);

  // Drag-to-scroll refs
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  // Duplicate items 3 times for seamless infinite circular floating and navigation
  const streamItems = [...INFRA_CAPABILITIES, ...INFRA_CAPABILITIES, ...INFRA_CAPABILITIES];

  // Guaranteed continuous floating ticker loop (smooth hardware-accelerated 60fps)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Center in the second duplicated set initially so scrolling left/right has infinite runway
    if (el.scrollLeft === 0) {
      el.scrollLeft = el.scrollWidth / 3;
    }

    const speed = 0.65; // gentle continuous glide speed

    const loop = () => {
      if (!isPaused && !isInteracting.current && el) {
        el.scrollLeft += speed;

        // Seamless wrap-around boundaries
        if (el.scrollLeft >= (el.scrollWidth * 2) / 3) {
          el.scrollLeft -= el.scrollWidth / 3;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += el.scrollWidth / 3;
        }
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPaused]);

  // Compute active card dot on scroll
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const singleSetWidth = el.scrollWidth / 3;
    const normalized = (el.scrollLeft % singleSetWidth + singleSetWidth) % singleSetWidth;
    const cardStep = singleSetWidth / INFRA_CAPABILITIES.length;
    const idx = Math.min(
      INFRA_CAPABILITIES.length - 1,
      Math.max(0, Math.floor(normalized / cardStep))
    );
    setActiveDot(idx);
  };

  const pauseAutoFloat = () => {
    isInteracting.current = true;
    setIsPaused(true);
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
  };

  const resumeAutoFloat = (delay = 2000) => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      isInteracting.current = false;
      setIsPaused(false);
    }, delay);
  };

  // Step forward (Next card)
  const handleNext = () => {
    pauseAutoFloat();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
    resumeAutoFloat(2500);
  };

  // Step backward (Previous card)
  const handlePrev = () => {
    pauseAutoFloat();
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
    resumeAutoFloat(2500);
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    startScrollLeft.current = scrollRef.current.scrollLeft;
    pauseAutoFloat();
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    scrollRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    resumeAutoFloat(1500);
  };

  return (
    <section id="solutions" className="py-10 md:py-10 lg:py-10 bg-[#F7F8F4] scroll-mt-20 relative overflow-hidden">
      {/* Subtle Engineering Dot Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#123C32_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6">
        {/* Header with Integrated Navigation Controls for Laptop & Desktop */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl text-left">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-2">
                <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-pulse"></span>
                <span>Core Capabilities</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                Complete Clean Energy Infrastructure
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1 font-normal">
                From high-yield private rooftop installations to utility-scale solar parks and custom in-house inverter duty transformers engineered under one roof.
              </p>
            </ScrollReveal>
          </div>

          {/* Navigation Controls: Dedicated Next / Prev Buttons & Indicators for Laptop/Desktop Accessibility */}
          <ScrollReveal delay={180}>
            <div className="flex items-center gap-3 self-start md:self-end shrink-0">
              {/* Active Dot Indicators */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/80 border border-[#123C32]/10 backdrop-blur-md shadow-xs">
                {INFRA_CAPABILITIES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      pauseAutoFloat();
                      if (scrollRef.current) {
                        const singleSetWidth = scrollRef.current.scrollWidth / 3;
                        const target = singleSetWidth + i * 340;
                        scrollRef.current.scrollTo({ left: target, behavior: "smooth" });
                      }
                      resumeAutoFloat(2500);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeDot === i ? "w-6 bg-[#123C32]" : "w-2 bg-[#123C32]/25 hover:bg-[#123C32]/50"
                    }`}
                    aria-label={`Jump to capability ${i + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Action Arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-xl bg-white border border-[#123C32]/15 text-[#123C32] hover:bg-[#123C32] hover:text-white shadow-xs hover:shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer group active:scale-95"
                  aria-label="Previous capabilities"
                  title="Scroll backward"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-xl bg-white border border-[#123C32]/15 text-[#123C32] hover:bg-[#123C32] hover:text-white shadow-xs hover:shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer group active:scale-95"
                  aria-label="Next capabilities"
                  title="Scroll forward"
                >
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Full-Bleed Continuous Floating & Scrollable Track */}
      <ScrollReveal delay={200}>
        <div className="relative w-full overflow-hidden py-2 group/track">
          {/* Left & Right Optical Gradient Fade Masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#F7F8F4] to-transparent z-20"></div>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#F7F8F4] to-transparent z-20"></div>

          {/* Quick Floating Navigation Chevrons on Track Edges (Laptop/Desktop Hover) */}
          <button
            type="button"
            onClick={handlePrev}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 text-[#123C32] shadow-xl border border-[#123C32]/10 backdrop-blur-md items-center justify-center opacity-0 group-hover/track:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer active:scale-95"
            aria-label="Slide previous"
          >
            <ChevronLeft className="w-6 h-6 -translate-x-0.5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 text-[#123C32] shadow-xl border border-[#123C32]/10 backdrop-blur-md items-center justify-center opacity-0 group-hover/track:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer active:scale-95"
            aria-label="Slide next"
          >
            <ChevronRight className="w-6 h-6 translate-x-0.5" />
          </button>

          {/* Continuous Floating Rail: Supports native wheel/trackpad, mouse drag & touch swipe */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseEnter={pauseAutoFloat}
            onMouseLeave={() => resumeAutoFloat(1000)}
            onTouchStart={pauseAutoFloat}
            onTouchEnd={() => resumeAutoFloat(1500)}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className="flex gap-4 sm:gap-5 px-4 overflow-x-auto scrollbar-none scroll-smooth cursor-grab active:cursor-grabbing select-none"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {streamItems.map((item, idx) => (
              <StreamCard
                key={`${item.id}-${idx}`}
                item={item}
                onHoverStart={pauseAutoFloat}
                onHoverEnd={() => resumeAutoFloat(1000)}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
