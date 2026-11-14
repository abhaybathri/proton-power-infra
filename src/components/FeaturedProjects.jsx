import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Zap, CheckCircle2, ShieldCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { REAL_PROJECTS } from "../data/companyData";

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? REAL_PROJECTS
      : REAL_PROJECTS.filter((p) => p.categoryKey === activeFilter);

  return (
    <section className="py-20 lg:py-28 bg-[#F7F8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <SectionHeading
            eyebrow="Proven Track Record"
            title="Featured Projects & Transformer Installations"
            description="Explore our high-yield solar park infrastructure, utility-scale ground mounts, and high-voltage transformer substations executed across India."
          />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-semibold shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#E8A83E]" />
            <span>125+ MW Commissioned Project Portfolio</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: "all", label: "All Portfolio" },
            { id: "utility", label: "Utility Solar Parks" },
            { id: "industrial", label: "Industrial Solar" },
            { id: "transformers", label: "Power Transformers" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? "bg-[#123C32] text-white shadow-sm"
                  : "bg-white text-[#525D57] hover:text-[#123C32] border border-[#E2E8E2]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Real Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8E2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Real Image */}
                <div className="relative h-60 overflow-hidden bg-[#202724]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202724]/90 via-transparent to-black/20"></div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase bg-[#123C32] text-[#E8A83E] shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Capacity Pill */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#123C32] flex items-center gap-1.5 shadow-md">
                    <Zap className="w-3.5 h-3.5 text-[#E8A83E] fill-[#E8A83E]" />
                    <span>{project.capacity}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-[#525D57] mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#E8A83E]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#202724] group-hover:text-[#123C32] transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#525D57] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-gray-100">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-[#252A27]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#123C32] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <Link
                  to={`/enquiry?requirement=${encodeURIComponent(project.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold bg-[#F7F8F4] group-hover:bg-[#123C32] text-[#123C32] group-hover:text-white transition-colors"
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
