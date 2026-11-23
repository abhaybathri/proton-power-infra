import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "./SmartImage";
import homeTopImage from "../assets/home-assets/home-top-image.webp";
import homeTop2 from "../assets/home-assets/home-top-2.webp";
import homeTop3 from "../assets/home-assets/home-top-3.webp";
import homeTop4 from "../assets/home-assets/home-top-4.webp";

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

  const SLIDE_DURATION = 3000; // ms per slide

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
    <section className="relative overflow-hidden pt-26 sm:pt-28 lg:pt-28 pb-10 sm:pb-12 lg:pb-12 bg-[#F7F8F4]">
      {/* High-tech engineering grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#123C32_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Ambient Lighting & Glow Meshes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#123C32]/12 rounded-full blur-3xl pointer-events-none animate-pulse-glow transform-gpu"></div>
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#E8A83E]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow transform-gpu" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column (Content) - Perfectly Proportioned */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-center">
            {/* Aesthetic Tech Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#202724] tracking-tight leading-[1.12] font-heading">
              Smarter Solar Solutions. <br />
              <span className="text-[#123C32] relative inline-block">
                A Brighter Tomorrow.
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#E8A83E]/25 -z-10 rounded"></span>
              </span>
            </h1>

            {/* Clean Justified Description */}
            <p className="text-sm sm:text-base text-[#525D57] leading-relaxed font-normal text-justify-center">
              Proton Power Infra is a leading solar panel installation company and power transformer manufacturer headquartered in Indore, with a nationwide footprint. Delivering high-yield solar EPC and in-house inverter duty transformers with precision, passion, and purpose.
            </p>

            {/* Centered CTA Button with Ambient Glow Halo */}
            <div className="pt-1 flex items-center justify-center max-w-xl">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#123C32] via-[#E8A83E] to-[#123C32] rounded-2xl blur-md opacity-25 group-hover:opacity-60 transition duration-500 group-hover:scale-105"></div>
                <Link
                  to="/contact#inquiry-form"
                  className="relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-sm font-bold bg-[#123C32] text-white hover:bg-[#1A4D41] shadow-lg shadow-[#123C32]/25 hover:shadow-[0_0_30px_rgba(232,168,62,0.35)] transition-all duration-300 group cursor-pointer font-tech tracking-wide"
                >
                  <span>Request a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Balanced Motion Showcase Carousel */}
          <div className="lg:col-span-6 relative">
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-xl border-2 border-white/90 bg-neutral-900 group select-none transition-all duration-500 cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onPointerDown={handleTouchStart}
              onPointerUp={handleTouchEnd}
            >
              {/* Image Presentation Frame: Full Width & Balanced Height (Edge-to-Edge) */}
              <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[345px] overflow-hidden bg-black/40">
                {HERO_SLIDES.map((slide, idx) => {
                  const isActive = idx === currentSlide;
                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                        isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <SmartImage
                        src={slide.image}
                        alt={`Proton Power Infra ${slide.title}`}
                        width={588}
                        height={420}
                        className={`w-full h-full object-cover transition-transform duration-7000 ease-out ${
                          isActive && !isHovered ? "scale-106" : "scale-100"
                        }`}
                        containerClassName="w-full h-full absolute inset-0"
                        priority={idx === 0}
                      />
                      {/* Gradient overlay for contrast and telemetry readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none"></div>
                    </div>
                  );
                })}
              </div>

              {/* High-Tech Top Overlay Bar */}
              

              {/* Navigation Arrows (Interactive on hover/tap) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 z-30 flex items-center justify-between pointer-events-none">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="pointer-events-auto w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#123C32] shadow-md backdrop-blur-md flex items-center justify-center transition-all duration-200 opacity-70 group-hover:opacity-100 hover:scale-110 cursor-pointer focus:outline-none"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="pointer-events-auto w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#123C32] shadow-md backdrop-blur-md flex items-center justify-center transition-all duration-200 opacity-70 group-hover:opacity-100 hover:scale-110 cursor-pointer focus:outline-none"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Compact Telemetry Capsule */}
              <div className="absolute bottom-3 left-3 right-3 z-20 px-3.5 py-2.5 rounded-xl bg-black/65 backdrop-blur-md shadow-lg border border-white/15 transition-all duration-300 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="truncate">
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-tech block truncate">
                      {activeSlide.title}
                    </span>
                    <span className="text-[10px] text-gray-300 font-mono hidden sm:inline">
                      {activeSlide.tag} • {activeSlide.subtitle}
                    </span>
                  </div>
                </div>

                {/* Progress Indicators & Slide Counter */}
                {/* <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center gap-1">
                    {HERO_SLIDES.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(i);
                        }}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          i === currentSlide ? "w-5 bg-[#E8A83E]" : "w-1.5 bg-white/40 hover:bg-white/70"
                        }`}
                        aria-label={`Jump to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#E8A83E] px-1.5 py-0.5 rounded bg-white/10">
                    0{currentSlide + 1}/0{HERO_SLIDES.length}
                  </span>
                </div> */}
              </div>

              {/* Corner Engineering Accents */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#E8A83E] pointer-events-none z-20"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#E8A83E] pointer-events-none z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
