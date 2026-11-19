import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  CheckCircle2,
  Building,
  Factory,
  Zap,
  ShieldCheck,
  Activity,
  ArrowDown,
} from "lucide-react";
import SmartImage from "./SmartImage";

// Authentic Company Project Assets
import project1Img from "../assets/company/project-1.jpg";
import transformerSubstationImg from "../assets/company/real-project-transformer-substation.jpg";
import utilityPlantImg from "../assets/company/real-project-utility-plant.jpg";
import project2Img from "../assets/company/project-2.jpg";

gsap.registerPlugin(ScrollTrigger);

// 4 Defining Milestone Phases (100% Genuine Company Data)
const PHASES = [
  {
    phaseNum: "01",
    year: "2012",
    badge: "Inception & Vision",
    title: "Foundation of Proton Power Infra in Indore",
    subtitle: "Pioneering Renewable Energy Engineering in Central India",
    description:
      "Founded in Indore, Madhya Pradesh, Proton Power Infra embarked on a singular mission: to make clean, industrial-grade solar energy accessible, dependable, and economically viable across Central India.",
    achievements: [
      "Established in Indore, Madhya Pradesh",
      "Early Turnkey Rooftop EPC for Commercial & Institutional Clients",
      "DISCOM Liaisoning & High-Tension Grid Approvals",
    ],
    deliverable: "Commissioned First 10+ Multi-Kilowatt Commercial & Institutional Solar Systems",
    image: project1Img,
    locationTag: "Indore, Madhya Pradesh",
    specTag: "Turnkey Commercial Rooftop EPC",
    era: "Foundational Phase",
    icon: Building,
  },
  {
    phaseNum: "02",
    year: "2016",
    badge: "Backward Integration",
    title: "Dedicated Transformer Manufacturing Works",
    subtitle: "Eliminating Substation Supply Delays with In-House Production",
    description:
      "Recognizing that substation delivery bottlenecks often stall solar projects, we established our dedicated power transformer manufacturing facility in Dewas and Indore, producing specialized Inverter Duty Solar Transformers.",
    achievements: [
      "Dewas & Indore Manufacturing Facilities Established",
      "Inverter Duty Step-Up Substation Units",
      "BIS & CPRI Certified Type-Tested Quality",
    ],
    deliverable: "100% In-House Substation Supply Guarantee for All EPC Contracts",
    image: transformerSubstationImg,
    locationTag: "Dewas & Indore Works",
    specTag: "Inverter Duty Step-Up Transformers",
    era: "Manufacturing Expansion",
    icon: Factory,
  },
  {
    phaseNum: "03",
    year: "2019",
    badge: "Utility Scale Scale-Up",
    title: "Utility Solar Parks & IPP Infrastructure",
    subtitle: "High-Voltage 33kV & 132kV Grid Evacuation Engineering",
    description:
      "Transitioned into an Independent Power Producer (IPP) and large-scale utility developer, executing multi-megawatt ground-mounted solar farms and captive industrial solar arrays synchronized with state transmission grids.",
    achievements: [
      "Multi-Megawatt Ground-Mounted Solar Parks",
      "33kV & 132kV High-Tension Grid Evacuation Synchronization",
      "Captive Industrial Power Purchase Agreements (PPA)",
    ],
    deliverable: "Synchronized Over 50+ MW of Utility Ground Assets to State Electricity Grids",
    image: utilityPlantImg,
    locationTag: "Central India Transmission Grid",
    specTag: "33kV / 132kV HT Grid Evacuation",
    era: "Utility Infrastructure",
    icon: Zap,
  },
  {
    phaseNum: "04",
    year: "2024+",
    badge: "National Benchmark",
    title: "125+ MW Installed Nationwide & Future Horizons",
    subtitle: "Pan-India Turnkey Reach Spanning Utility, Commercial & PM Surya Ghar",
    description:
      "Surpassed 125+ MW of installed solar capacity across India. Operating from offices in Indore, Delhi, Bhopal, and Dewas, we now engineer complete utility parks, factory microgrids, and thousands of subsidized residential rooftops.",
    achievements: [
      "125+ MW Proven Portfolio Across Industrial & Utility Sectors",
      "Pan-India Turnkey Execution Fleet & Regional Operations Hubs",
      "PM Surya Ghar Certified Residential & Commercial Rooftop Provider",
    ],
    deliverable: "Trusted EPC & Transformer Partner to India's Premier Industrial Conglomerates",
    image: project2Img,
    locationTag: "Pan-India Operations",
    specTag: "125+ MW Solar EPC & Substation Fleet",
    era: "National Scale",
    icon: ShieldCheck,
  },
];

export default function CorporateStoryTimeline() {
  const sectionRef = useRef(null);
  const desktopStageRef = useRef(null);
  const progressLineRef = useRef(null);
  const currentChapterRef = useRef(null);
  const currentEraRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // =========================================================================
    // DESKTOP EXPERIENCE (>= 1024px): Subphase Scrubbed Cinematic Storytelling
    // =========================================================================
    mm.add("(min-width: 1024px)", () => {
      const section = sectionRef.current;
      const stage = desktopStageRef.current;
      if (!section || !stage) return;

      const phaseContainers = gsap.utils.toArray(".timeline-phase-container");
      const stepMarkers = gsap.utils.toArray(".timeline-step-marker");

      const updateMarkerUI = (activeIdx) => {
        stepMarkers.forEach((el, i) => {
          if (i === activeIdx) {
            el.className =
              "timeline-step-marker w-2.5 h-2.5 rounded-full transition-all duration-300 bg-[#123C32] ring-2 ring-[#E8A83E]";
          } else {
            el.className =
              "timeline-step-marker w-2 h-2 rounded-full transition-all duration-300 bg-[#E2E8E2]";
          }
        });
      };

      // Set initial element positions for each phase
      phaseContainers.forEach((container, idx) => {
        const yearEl = container.querySelector(".phase-year-row");
        const headingEl = container.querySelector(".phase-heading");
        const subtitleEl = container.querySelector(".phase-subtitle");
        const descEl = container.querySelector(".phase-desc");
        const achievementsEl = container.querySelector(".phase-achievements");
        const deliverableEl = container.querySelector(".phase-deliverable");
        const photoEl = container.querySelector(".phase-photo-frame");

        if (idx === 0) {
          gsap.set(container, { autoAlpha: 1, zIndex: 10 });
          gsap.set([yearEl, headingEl, subtitleEl, descEl, achievementsEl, deliverableEl], {
            autoAlpha: 1,
            y: 0,
          });
          gsap.set(photoEl, { autoAlpha: 1, scale: 1 });
        } else {
          gsap.set(container, { autoAlpha: 0, zIndex: 0 });
          gsap.set([yearEl, headingEl, subtitleEl, descEl, achievementsEl, deliverableEl], {
            autoAlpha: 0,
            y: 28,
          });
          gsap.set(photoEl, { autoAlpha: 0, scale: 1.06 });
        }
      });

      updateMarkerUI(0);
      gsap.set(progressLineRef.current, { scaleX: 0, transformOrigin: "left center" });

      // Master ScrollTrigger timeline with scrub
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top+=80", // 80px offset for fixed navbar
          end: "+=3200", // Generous scroll track for multi-phase reading
          pin: stage,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Synchronize horizontal progress bar across the entire journey
      masterTl.to(progressLineRef.current, { scaleX: 1, ease: "none", duration: 12 }, 0);

      // Phase 1 (2012) initial read window
      masterTl.to({}, { duration: 0.8 });

      // -----------------------------------------------------------------------
      // TRANSITIONS ACROSS PHASES WITH SUBPHASE CHOREOGRAPHY
      // -----------------------------------------------------------------------
      for (let i = 0; i < PHASES.length - 1; i++) {
        const curContainer = phaseContainers[i];
        const nextContainer = phaseContainers[i + 1];

        const curYear = curContainer.querySelector(".phase-year-row");
        const curHeading = curContainer.querySelector(".phase-heading");
        const curSubtitle = curContainer.querySelector(".phase-subtitle");
        const curDesc = curContainer.querySelector(".phase-desc");
        const curAch = curContainer.querySelector(".phase-achievements");
        const curDel = curContainer.querySelector(".phase-deliverable");
        const curPhoto = curContainer.querySelector(".phase-photo-frame");

        const nextYear = nextContainer.querySelector(".phase-year-row");
        const nextHeading = nextContainer.querySelector(".phase-heading");
        const nextSubtitle = nextContainer.querySelector(".phase-subtitle");
        const nextDesc = nextContainer.querySelector(".phase-desc");
        const nextAch = nextContainer.querySelector(".phase-achievements");
        const nextDel = nextContainer.querySelector(".phase-deliverable");
        const nextPhoto = nextContainer.querySelector(".phase-photo-frame");

        // 1. Current Phase sub-elements glide up & fade out
        masterTl
          .to([curDel, curAch], { autoAlpha: 0, y: -18, duration: 0.45, ease: "power2.in" })
          .to([curDesc, curSubtitle], { autoAlpha: 0, y: -22, duration: 0.45, ease: "power2.in" }, "<0.08")
          .to([curHeading, curYear], { autoAlpha: 0, y: -25, duration: 0.45, ease: "power2.in" }, "<0.08")
          .to(curPhoto, { autoAlpha: 0, scale: 0.94, duration: 0.65, ease: "power2.inOut" }, "<")
          .set(curContainer, { autoAlpha: 0, zIndex: 0 })
          .set(nextContainer, { autoAlpha: 1, zIndex: 10 });

        // 2. Next Phase sub-elements animate in with layered subphase stagger
        masterTl
          .call(() => {
            if (currentChapterRef.current) currentChapterRef.current.textContent = `Chapter 0${i + 2} of 04`;
            if (currentEraRef.current) currentEraRef.current.textContent = PHASES[i + 1].era;
            updateMarkerUI(i + 1);
          }, null, ">-0.1")
          // Subphase A: Year & Category pill reveal
          .fromTo(nextYear, { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" })
          // Subphase B: Main heading & subtitle reveal
          .fromTo(nextHeading, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" }, "-=0.25")
          .fromTo(nextSubtitle, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }, "-=0.3")
          // Subphase C: Photo scales smoothly from 1.05 to 1.0 with cross-fade
          .fromTo(nextPhoto, { autoAlpha: 0, scale: 1.06 }, { autoAlpha: 1, scale: 1, duration: 0.8, ease: "power2.out" }, "<0.1")
          // Subphase D: Narrative description & achievements appear
          .fromTo(nextDesc, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.35")
          .fromTo(nextAch, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
          // Subphase E: Deliverable highlight appears
          .fromTo(nextDel, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" }, "-=0.25")
          // Reverse synchronization callback
          .call(() => {
            if (currentChapterRef.current) currentChapterRef.current.textContent = `Chapter 0${i + 1} of 04`;
            if (currentEraRef.current) currentEraRef.current.textContent = PHASES[i].era;
            updateMarkerUI(i);
          }, null, "<");

        // Resting pause on newly revealed phase so the user can easily read and inspect
        masterTl.to({}, { duration: 1.0 });
      }

      // Final resting duration on Phase 4 (2024+) before unpinning
      masterTl.to({}, { duration: 1.2 });
    });

    // =========================================================================
    // MOBILE EXPERIENCE (< 1024px): Natural Vertical Spine Reveals (Zero Empty Space)
    // =========================================================================
    mm.add("(max-width: 1023px)", () => {
      const mobileCards = gsap.utils.toArray(".mobile-timeline-card");

      mobileCards.forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="corporate-story"
      ref={sectionRef}
      className="relative w-full bg-white border-b border-[#E2E8E2]"
    >
      {/* ===================================================================
          1. DESKTOP STAGE (>= 1024px): Full-Width Editorial Split Storytelling
             (No Shrunk Box, No Blank Space, Subphase Scroll Choreography)
         =================================================================== */}
      <div
        ref={desktopStageRef}
        className="hidden lg:flex flex-col justify-between w-full h-[calc(100vh-80px)] px-6 lg:px-12 xl:px-16 py-5 xl:py-6 bg-white overflow-hidden relative select-none"
      >
        {/* Subtle Ambient Radial Tints */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#123C32]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E8A83E]/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#123C32_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* -------------------------------------------------------------
            Top Section Header & Narrative Eyebrow (No Clunky Tabs!)
           ------------------------------------------------------------- */}
        <div className="max-w-7xl mx-auto w-full relative z-10 pb-3 border-b border-[#E2E8E2]">
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold font-tech uppercase tracking-wider text-[#123C32]">
                <span className="w-2 h-2 rounded-xs bg-[#E8A83E]" />
                <span>Our Corporate Story</span>
              </div>
              <h2 className="text-2xl xl:text-3xl font-black text-[#202724] font-heading tracking-tight">
                Engineering India's Renewable Future Since 2012
              </h2>
              <p className="text-xs xl:text-sm text-[#525D57] leading-relaxed max-w-2xl font-normal">
                From regional beginnings in Indore to a nationwide 125+ MW footprint and in-house transformer manufacturing, explore the defining milestones of our engineering journey.
              </p>
            </div>

            {/* Chapter Indicator & Step Markers */}
            <div className="text-right shrink-0">
              <div
                ref={currentChapterRef}
                className="text-xs font-bold font-tech text-[#123C32] tracking-wide"
              >
                Chapter 01 of 04
              </div>
              <div
                ref={currentEraRef}
                className="text-[11px] text-[#525D57] font-mono tracking-wider uppercase mt-0.5"
              >
                {PHASES[0].era}
              </div>
              <div className="flex items-center justify-end gap-1.5 mt-2">
                {PHASES.map((p, idx) => (
                  <span
                    key={p.year}
                    className={`timeline-step-marker w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === 0 ? "bg-[#123C32] ring-2 ring-[#E8A83E]" : "bg-[#E2E8E2]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Continuous Scroll Progress Track */}
          <div className="w-full bg-[#E2E8E2] h-[2px] rounded-full overflow-hidden mt-3 relative">
            <div
              ref={progressLineRef}
              className="h-full bg-gradient-to-r from-[#123C32] via-[#E8A83E] to-[#123C32]"
            />
          </div>
        </div>

        {/* -------------------------------------------------------------
            Main Central Stage: Full-Width 2-Column Split Composition
            (Fills entire screen, zero empty whitespace, layered subphases)
           ------------------------------------------------------------- */}
        <div className="max-w-7xl mx-auto w-full flex-1 flex items-center relative z-10 py-2">
          <div className="relative w-full h-[400px] xl:h-[440px]">
            {PHASES.map((p) => {
              const PhaseIcon = p.icon;
              return (
                <div
                  key={p.year}
                  className="timeline-phase-container absolute inset-0 w-full h-full grid grid-cols-12 gap-8 xl:gap-12 items-center"
                >
                  {/* Left Column (7 cols): Narrative Story & Engineering Metrics */}
                  <div className="col-span-7 flex flex-col justify-between h-full py-1">
                    <div>
                      {/* Subphase 1: Year Display & Category Pill */}
                      <div className="phase-year-row flex items-center gap-3.5 mb-2">
                        <span className="text-5xl xl:text-6xl font-black font-tech text-[#123C32] tracking-tighter">
                          {p.year}
                        </span>
                        <div className="h-8 w-px bg-[#E2E8E2]" />
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold font-tech uppercase tracking-wider bg-[#E9F0E9] text-[#123C32] border border-[#123C32]/15">
                          {p.badge}
                        </span>
                      </div>

                      {/* Subphase 2: Main Heading & Subtitle */}
                      <h3 className="phase-heading text-xl xl:text-2xl font-black text-[#202724] font-heading tracking-tight leading-snug mb-1">
                        {p.title}
                      </h3>
                      <div className="phase-subtitle text-xs xl:text-sm font-semibold font-tech text-[#C28522] tracking-wide mb-3">
                        {p.subtitle}
                      </div>

                      {/* Subphase 3: Narrative Text */}
                      <p className="phase-desc text-xs xl:text-sm text-[#525D57] leading-relaxed text-justify-clean mb-3.5">
                        {p.description}
                      </p>

                      {/* Subphase 4: Achievements List with Clean Dividers */}
                      <div className="phase-achievements border-t border-[#E2E8E2] divide-y divide-[#E2E8E2]/60">
                        {p.achievements.map((item, aIdx) => (
                          <div
                            key={aIdx}
                            className="py-1.5 flex items-center gap-2.5 text-xs font-tech text-[#252A27]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#123C32] shrink-0" />
                            <span className="font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Subphase 5: Verified Deliverable Benchmark */}
                    <div className="phase-deliverable pt-2 border-t border-[#E2E8E2] flex items-center gap-2 text-xs font-tech font-bold text-[#123C32]">
                      <PhaseIcon className="w-4 h-4 text-[#E8A83E] shrink-0" />
                      <span className="truncate">{p.deliverable}</span>
                    </div>
                  </div>

                  {/* Right Column (5 cols): Cinematic Engineering Photo Frame */}
                  <div className="col-span-5 h-full relative">
                    <div className="phase-photo-frame w-full h-full rounded-2xl overflow-hidden border border-[#E2E8E2] shadow-xl shadow-black/5 bg-neutral-900 relative">
                      <SmartImage
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full absolute inset-0"
                        priority={true}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                      {/* Top Location Telemetry Capsule */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-20">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#123C32] shadow-sm font-tech">
                          <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-pulse" />
                          <span>{p.locationTag}</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#202724]/85 backdrop-blur-md text-[10px] font-mono text-[#E9F0E9] border border-white/10">
                          <span>{p.era}</span>
                        </div>
                      </div>

                      {/* Bottom Specification Capsule */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md z-20">
                        <div className="text-xs font-bold text-[#123C32] font-tech uppercase tracking-wide truncate">
                          {p.specTag}
                        </div>
                        <div className="text-[11px] text-[#525D57] font-medium line-clamp-1 mt-0.5">
                          {p.deliverable}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* -------------------------------------------------------------
            Bottom Status & Scroll Cue Footer
           ------------------------------------------------------------- */}
        <div className="max-w-7xl mx-auto w-full relative z-10 pt-2 border-t border-[#E2E8E2] flex items-center justify-between text-xs font-tech text-[#525D57]">
          <div className="flex items-center gap-2.5">
            <div className="w-3.5 h-5 rounded-full border-2 border-[#123C32]/35 flex items-start justify-center p-0.5">
              <div className="w-1 h-1.5 rounded-full bg-[#E8A83E] animate-bounce" />
            </div>
            <span>Scroll smoothly to discover each engineering milestone (2012 – 2024+)</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span>Proton Power Infra • 125+ MW Milestone</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>
      </div>

      {/* ===================================================================
          2. MOBILE EXPERIENCE (< 1024px): Dedicated Vertical Narrative Timeline
             (Edge-to-Edge Compact Cards, Zero Giant Empty Spaces, Fluid Touch Scroll)
         =================================================================== */}
      <div className="block lg:hidden px-4 sm:px-6 py-8 sm:py-10 bg-[#F7F8F4]">
        {/* Mobile Section Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#E9F0E9] text-[#123C32] text-[10px] font-bold font-tech uppercase tracking-wider mb-2 border border-[#123C32]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8A83E]" />
            <span>Our Corporate Story</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#202724] font-heading tracking-tight leading-tight mb-2">
            Engineering India's Renewable Future Since 2012
          </h2>
          <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed font-normal">
            From regional beginnings in Indore to a nationwide 125+ MW footprint and in-house transformer manufacturing, explore our defining milestones.
          </p>
        </div>

        {/* Mobile Vertical Timeline Spine */}
        <div className="relative border-l-2 border-[#123C32]/20 ml-3 sm:ml-4 pl-5 sm:pl-7 space-y-6">
          {PHASES.map((p) => {
            const PhaseIcon = p.icon;
            return (
              <div key={p.year} className="mobile-timeline-card relative">
                {/* Numbered Node on the Vertical Spine */}
                <div className="absolute -left-[27px] sm:-left-[35px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#123C32] text-[#E8A83E] border-2 border-white shadow-sm flex items-center justify-center text-xs font-black font-tech">
                  {p.phaseNum}
                </div>

                {/* Milestone Container - Compact, Full-Width, No Dead Space */}
                <div className="rounded-2xl bg-white border border-[#E2E8E2] shadow-sm hover:shadow-md transition-shadow p-4 sm:p-5 overflow-hidden">
                  {/* Header: Year + Phase Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-2xl font-black font-tech text-[#123C32] tracking-tight">
                      {p.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-tech uppercase tracking-wider bg-[#E9F0E9] text-[#123C32] border border-[#123C32]/15">
                      {p.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base sm:text-lg font-black text-[#202724] font-heading tracking-tight leading-snug mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C28522] font-tech mb-2">
                    {p.subtitle}
                  </p>

                  {/* Project Image */}
                  <div className="relative w-full h-36 sm:h-44 rounded-xl overflow-hidden my-2.5 border border-[#E2E8E2] bg-neutral-900">
                    <SmartImage
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-tech text-white">
                      <span className="bg-[#123C32]/90 backdrop-blur-xs px-2 py-0.5 rounded font-bold text-[#E8A83E] border border-white/10">
                        {p.locationTag}
                      </span>
                      <span className="bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded font-mono">
                        {p.era}
                      </span>
                    </div>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-xs text-[#525D57] leading-relaxed text-justify-clean mb-3">
                    {p.description}
                  </p>

                  {/* Important Achievements: Typographic Lines */}
                  <div className="border-t border-[#E2E8E2] divide-y divide-[#E2E8E2]/60 mb-3">
                    {p.achievements.map((item, idx) => (
                      <div
                        key={idx}
                        className="py-1.5 flex items-center gap-2 text-[11px] font-tech text-[#252A27]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#123C32] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverable highlight */}
                  <div className="pt-2 border-t border-[#E2E8E2] flex items-center gap-1.5 text-[11px] font-tech font-bold text-[#123C32]">
                    <PhaseIcon className="w-3.5 h-3.5 text-[#E8A83E] shrink-0" />
                    <span className="line-clamp-1">{p.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
