import { CheckCircle2, ShieldCheck, Factory, Zap, Building } from "lucide-react";
import Timeline from "../ui/Timeline";

// Verified Authentic Company Milestone Data (100% Genuine Facts)
const MILESTONES = [
  {
    year: "2012",
    era: "Foundational Phase",
    category: "INCEPTION & VISION",
    heading: "Foundation of Proton Power Infra in Indore",
    subtitle: 'Thaught of give solar power to everyone',
    description:
      "Founded in Indore, Madhya Pradesh, Proton Power Infra embarked on a singular mission: to make clean, industrial-grade solar energy accessible, dependable, and economically viable across Central India.",
    achievements: [
      "Established in Indore, MP.",
      "Early Turnkey Rooftop EPC.",
      "DISCOM & Grid Approvals.",
    ],
    deliverable: "Commissioned First 10+ Multi-Kilowatt Commercial & Institutional Solar Systems",
    icon: Building,
  },
  {
    year: "2016",
    era: "Manufacturing Expansion",
    category: "BACKWARD INTEGRATION",
    heading: "Dedicated Transformer Manufacturing Works",
    subtitle: "Eliminating Substation Supply Delays with In-House Production.",
    description:
      "Recognizing that substation delivery bottlenecks often stall solar projects, we established our dedicated power transformer manufacturing facility in Dewas and Indore, producing specialized Inverter Duty Solar Transformers.",
    achievements: [
      "Dewas Manufacturing Hub.",
      "Inverter Duty Step-Up Units.",
      "BIS & CPRI Type-Tested.",
      "100% In-House Substation Supply Guarantee for All EPC Contracts.",
    ],
    deliverable: "100% In-House Substation Supply Guarantee for All EPC Contracts",
    icon: Factory,
  },
  {
    year: "2019",
    era: "Utility Infrastructure",
    category: "UTILITY SCALE SCALE-UP",
    heading: "Utility Solar Parks & IPP Infrastructure",
    subtitle: "High-Voltage 33kV & 132kV Grid Evacuation Engineering.",
    description:
      "Transitioned into an Independent Power Producer (IPP) and large-scale utility developer, executing multi-megawatt ground-mounted solar farms and captive industrial solar arrays synchronized with state transmission grids.",
    achievements: [
      "Multi-Megawatt Solar Parks.",
      "33kV / 132kV HT Grid Synchronization.",
      "Captive Industrial PPA.",
      "Synchronized Over 50+ MW of Utility Ground Assets to State Electricity Grids.",
    ],
    deliverable: "Synchronized Over 50+ MW of Utility Ground Assets to State Electricity Grids",
    icon: Zap,
  },
  {
    year: "2024+",
    era: "National Scale Benchmark",
    category: "NATIONAL BENCHMARK",
    heading: "125+ MW Installed Nationwide & Future Horizons",
    subtitle: "Pan-India Turnkey Reach Spanning Utility, Commercial & PM Surya Ghar",
    description:
      "Surpassed 125+ MW of installed solar capacity across India. Operating from offices in Indore, Delhi, Bhopal, and Dewas, we now engineer complete utility parks, factory microgrids, and thousands of subsidized residential rooftops.",
    achievements: [
      "125+ MW Proven Portfolio Across Industrial & Utility Sectors.",
      "Pan-India Turnkey Execution Fleet & Regional Operations Hubs.",
      "PM Surya Ghar Certified Residential & Commercial Rooftop Provider.",
      "Trusted EPC & Transformer Partner to India's Premier Industrial Conglomerates.",
    ],
    deliverable: "Trusted EPC & Transformer Partner to India's Premier Industrial Conglomerates",
    icon: ShieldCheck,
  },
];

export default function CompanyTimeline() {
  // Introduction Section connecting to the timeline
  const introduction = (
    <div className="min-w-full space-y-2 border-b border-[#E2E8E2] pb-4 sm:pb-5 flex flex-col items-center justify-center">
      <div className="inline-flex items-center gap-2 text-l font-bold font-tech uppercase tracking-wider text-[#123C32]">
        
        <span>OUR CORPORATE STORY</span>
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] font-heading tracking-tight leading-tight text-center">
        Engineering India's Renewable Future Since 2012
      </h2>
      <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed max-w-3xl lg:max-w-5xl xl:max-w-none font-normal pt-1 text-center xl:whitespace-nowrap">
        From regional beginnings in Indore to a nationwide 125+ MW footprint and in-house transformer manufacturing, explore the defining milestones of our engineering journey.
      </p>
    </div>
  );

  // Map each milestone into Aceternity UI entry format
  const timelineData = MILESTONES.map((m) => ({
    title: m.year,
    year: m.year,
    era: m.era,
    content: (
      <div className="space-y-3 max-w-3xl">
        {/* Category Label */}
        <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold font-tech uppercase tracking-wider text-[#123C32]">
          
          <span>{m.category}</span>
        </div>

        {/* Milestone Main Heading */}
        <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black text-[#202724] font-heading tracking-tight leading-snug">
          {m.heading}
        </h3>

        {/* Supporting Subtitle */}
        {m.subtitle && (
          <div className="text-xs sm:text-sm font-semibold font-tech text-[#C28522] tracking-wide">
            {m.subtitle}
          </div>
        )}

        {/* Supporting Description */}
        <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed text-justify-clean pt-0.5">
          {m.description}
        </p>

        {/* Achievements as Minimal Engineering Highlights (No Images, Clean Typographic Lines) */}
        <div className="pt-2 border-t border-[#E2E8E2] divide-y divide-[#E2E8E2]/60">
          {m.achievements.map((item, idx) => (
            <div
              key={idx}
              className="py-1.5 sm:py-2 flex items-center gap-2.5 text-xs sm:text-[13px] font-tech text-[#252A27]"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#123C32] shrink-0" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Verified Deliverable Benchmark Capsule */}
        {m.deliverable && (
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-tech font-bold text-[#123C32]">
            
            <span className="text-[#525D57] font-normal uppercase tracking-wider text-[10px]">
              Verified Milestone:
            </span>
            <span className="text-[#123C32]">{m.deliverable}</span>
          </div>
        )}
      </div>
    ),
  }));

  return (
    <section id="corporate-story" className="relative w-full border-b border-[#E2E8E2] bg-[#F7F8F4] ">
      <Timeline data={timelineData} introduction={introduction} />
    </section>
  );
}
