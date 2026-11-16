import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "./SmartImage";
import homeTopImage from "../assets/home-assets/home-top-image.jpg";
import homeTop2 from "../assets/home-assets/home-top-2.jpg";
import homeTop3 from "../assets/home-assets/home-top-3.jpg";
import homeTop4 from "../assets/home-assets/home-top-4.jpg";

const HERO_SLIDES = [
  {
    id: 1,
    image: homeTopImage,
    tag: "DISTRIBUTED SOLAR",
    title: "High-Yield Rooftop Solar Systems",
    subtitle: "Precision-engineered solar installations for independent villas, institutions & residential societies.",
    telemetry: "Telemetry Active • 100% Online",
    coordinates: "22.71° N, 75.85° E • Indore HQ",
    metric: "3 kW – 25 kW",
  },
  {
    id: 2,
    image: homeTop2,
    tag: "AGRI-VOLTAICS",
    title: "Agri-Voltaic & Elevated Solar Canopies",
    subtitle: "Bifacial overhead solar arrays engineered for agricultural synergy, shade crops & dual land-use.",
    telemetry: "Dual-Yield Active • 98.4% PR",
    coordinates: "28.61° N, 77.20° E • Delhi Hub",
    metric: "Elevated Solar Structure",
  },
  {
    id: 3,
    image: homeTop3,
    tag: "BIPV COMMERCIAL",
    title: "Architectural BIPV & Commercial Rooftops",
    subtitle: "Aesthetic building-integrated photovoltaics engineered for corporate campuses and commercial hubs.",
    telemetry: "Peak Generation • Synchronized",
    coordinates: "23.25° N, 77.41° E • Bhopal Hub",
    metric: "Commercial Scale BIPV",
  },
  {
    id: 4,
    image: homeTop4,
    tag: "UTILITY INFRA",
    title: "Utility-Scale Solar Parks & Grid Transmission",
    subtitle: "Multi-megawatt solar generation infrastructure synchronized with in-house 33kV power transformers.",
    telemetry: "33kV Substation • 125+ MW IPP",
    coordinates: "22.96° N, 76.05° E • Dewas Plant",
    metric: "125+ MW IPP Asset",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const SLIDE_DURATION = 3500; // ms per slide

  // Auto-advance slider with pause on hover
  useEffect(() => {
    if (isHovered) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, currentSlide]);

  const handlePrev = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // Touch Swipe Handlers for Mobile (Universal support for real touchscreens, pointer events & synthetic dispatches)
  const handleTouchStart = (e) => {
    const touch = e.touches?.[0] || e.changedTouches?.[0] || e.targetTouches?.[0] || e.nativeEvent?.touches?.[0] || e.nativeEvent?.changedTouches?.[0] || e.nativeEvent || e;
    if (touch && (touch.clientX !== undefined || touch.pageX !== undefined)) {
      touchStartX.current = touch.clientX ?? touch.pageX;
      touchStartY.current = touch.clientY ?? touch.pageY;
    }
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches?.[0] || e.touches?.[0] || e.targetTouches?.[0] || e.nativeEvent?.changedTouches?.[0] || e.nativeEvent?.touches?.[0] || e.nativeEvent || e;
    if (!touch || (touch.clientX === undefined && touch.pageX === undefined)) return;
    const currentX = touch.clientX ?? touch.pageX;
    const currentY = touch.clientY ?? touch.pageY;
    const diffX = touchStartX.current - currentX;
    const diffY = touchStartY.current - currentY;

    // Only swipe if horizontal move is dominant and exceeds threshold
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext(); // swiped left -> next
      } else {
        handlePrev(); // swiped right -> prev
      }
    }
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative overflow-hidden pt-24 pb-10 md:pt-26 md:pb-10 lg:pt-24 lg:pb-10 bg-[#F7F8F4]">
      {/* High-tech engineering grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#123C32_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Ambient Lighting & Glow Meshes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#123C32]/12 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#E8A83E]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Aesthetic Tech Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#202724] tracking-tight leading-[1.08] font-heading">
              Smarter Solar Solutions. <br />
              <span className="text-[#123C32] relative inline-block">
                A Brighter Tomorrow.
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#E8A83E]/25 -z-10 rounded"></span>
              </span>
            </h1>

            {/* Clean Justified Description */}
            <p className="text-base sm:text-lg text-[#525D57] leading-relaxed max-w-2xl font-normal text-justify-clean">
              Proton Power Infra is a leading solar panel installation company and power transformer manufacturer headquartered in Indore, with a nationwide footprint. Delivering high-yield solar EPC and in-house inverter duty transformers with precision, passion, and purpose.
            </p>

            {/* Centered CTA Button with Ambient Glow Halo */}
            <div className="pt-2 flex items-center justify-center max-w-2xl">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#123C32] via-[#E8A83E] to-[#123C32] rounded-2xl blur-md opacity-25 group-hover:opacity-60 transition duration-500 group-hover:scale-105"></div>
                <Link
                  to="/enquiry"
                  className="relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold bg-[#123C32] text-white hover:bg-[#1A4D41] shadow-lg shadow-[#123C32]/25 hover:shadow-[0_0_30px_rgba(232,168,62,0.35)] transition-all duration-300 group cursor-pointer font-tech tracking-wide"
                >
                  <span>Request a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Motion Showcase Carousel */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#123C32] group select-none transition-all duration-500 cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onPointerDown={handleTouchStart}
              onPointerUp={handleTouchEnd}
            >
              {/* Image Presentation Frame with Progressive Shimmer & Motion */}
              <div className="relative aspect-[4/4.5] overflow-hidden bg-black/40">
                {HERO_SLIDES.map((slide, idx) => {
                  const isActive = idx === currentSlide;
                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <SmartImage
                        src={slide.image}
                        alt={`Proton Power Infra ${slide.title}`}
                        className={`w-full h-full object-cover transition-transform duration-7000 ease-out ${
                          isActive && !isHovered ? "scale-108" : "scale-100"
                        }`}
                        priority={idx === 0}
                      />
                      {/* Gradient overlay for contrast and telemetry readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/95 via-[#123C32]/25 to-black/35 pointer-events-none"></div>
                    </div>
                  );
                })}
              </div>

              {/* High-Tech Top Overlay Bar */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#123C32] shadow-sm font-tech">
                  <Activity className="w-3.5 h-3.5 text-[#E8A83E] animate-pulse" />
                  <span className="transition-all duration-300">{activeSlide.telemetry}</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#202724]/85 backdrop-blur-md text-[10px] font-mono text-[#E9F0E9] border border-white/10">
                  <span>{activeSlide.coordinates}</span>
                </div>
              </div>

              {/* Navigation Arrows (Interactive on hover/tap) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 z-30 flex items-center justify-between pointer-events-none">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="pointer-events-auto w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#123C32] shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-200 opacity-70 group-hover:opacity-100 hover:scale-110 cursor-pointer focus:outline-none"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="pointer-events-auto w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#123C32] shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-200 opacity-70 group-hover:opacity-100 hover:scale-110 cursor-pointer focus:outline-none"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Interactive Control Capsule */}
              <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60 transition-all duration-300">
                {/* Progress Indicators & Slide Counter */}
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-1.5 flex-1">
                    {HERO_SLIDES.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(i);
                        }}
                        className="flex-1 h-1.5 rounded-full overflow-hidden bg-gray-200 relative cursor-pointer"
                        aria-label={`Jump to slide ${i + 1}`}
                      >
                        <div
                          className={`h-full transition-all ${
                            i === currentSlide
                              ? "bg-[#123C32] w-full"
                              : i < currentSlide
                              ? "bg-[#123C32]/60 w-full"
                              : "w-0"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <span className="text-[10px] font-mono font-bold text-[#123C32] px-1.5 py-0.5 rounded bg-[#123C32]/10 shrink-0">
                    0{currentSlide + 1} / 0{HERO_SLIDES.length}
                  </span>
                </div>

                {/* Dynamic Title & Tag */}
                <div className="flex items-center justify-between mb-1.5 gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-[#E8A83E] shrink-0 animate-pulse"></span>
                    <span className="text-xs font-bold text-[#123C32] uppercase tracking-wider font-tech truncate">
                      {activeSlide.title}
                    </span>
                  </div>
                  <span className="text-[9px] font-bold text-[#123C32] bg-[#E9F0E9] px-2 py-0.5 rounded font-mono shrink-0 uppercase">
                    {activeSlide.tag}
                  </span>
                </div>

                {/* Dynamic Subtitle */}
                <p className="text-xs text-[#525D57] leading-relaxed line-clamp-2">
                  {activeSlide.subtitle}
                </p>
              </div>

              {/* Corner Engineering Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E8A83E] pointer-events-none z-20"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E8A83E] pointer-events-none z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
