import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { REAL_PROJECTS } from "../data/companyData";

export default function FeaturedProjects() {
  // Select top 4 real projects with genuine images
  const projectsToDisplay = REAL_PROJECTS.slice(0, 4);

  return (
    <section className="py-20 lg:py-24 bg-[#F7F8F4] border-b border-[#E2E8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Commissioned Infrastructure"
            title="Featured Projects & Power Substations"
            description="A glimpse into our real ground-mount solar installations, high-tension tracker arrays, and utility transformer substations across India."
          />
          <Link
            to="/solar-epc-services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#123C32] hover:text-[#1A4D41] shrink-0 pb-1 border-b-2 border-[#123C32] hover:border-[#E8A83E] transition-all"
          >
            <span>Explore Turnkey EPC Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Project Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsToDisplay.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8E2] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Real Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#202724]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#123C32] text-[#E8A83E] shadow-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Capacity Pill */}
                  <div className="absolute bottom-3.5 right-3.5 px-3 py-1 rounded-full bg-white/95 text-xs font-bold text-[#123C32] flex items-center gap-1.5 shadow-sm">
                    <Zap className="w-3.5 h-3.5 text-[#E8A83E] fill-[#E8A83E]" />
                    <span>{project.capacity}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-[#525D57] mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#E8A83E]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#202724] group-hover:text-[#123C32] transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Highlights Pill Row */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex flex-wrap gap-2">
                {project.highlights.map((h, hIdx) => (
                  <span
                    key={hIdx}
                    className="text-[11px] font-medium text-[#123C32] bg-[#E9F0E9] px-2.5 py-1 rounded-md"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
