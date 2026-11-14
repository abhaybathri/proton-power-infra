import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SOLUTIONS } from "../data/companyData";

export default function SolarSolutions() {
  return (
    <section id="solutions" className="py-20 lg:py-24 bg-[#F7F8F4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Solutions & Services"
            title="Clean Energy & Infrastructure Under One Roof"
            description="Explore our specialized solar energy installations, turnkey engineering, and in-house manufacturing capabilities engineered for high yield and long-term reliability."
          />
          <Link
            to="/enquiry"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#123C32] hover:text-[#1A4D41] shrink-0 pb-1 border-b-2 border-[#123C32] hover:border-[#E8A83E] transition-all"
          >
            <span>Request a Custom Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Balanced Visual Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8E2] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-[#202724]">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-white/95 text-[#123C32] shadow-xs">
                      {sol.badge}
                    </span>
                  </div>

                  {/* Capacity Pill */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold text-[#E9F0E9]/90 drop-shadow-xs">
                      {sol.capacityRange}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#202724] group-hover:text-[#123C32] transition-colors mb-2.5">
                    {sol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed line-clamp-3">
                    {sol.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-[#525D57] font-medium truncate pr-2">
                  {sol.idealFor}
                </span>
                <Link
                  to={`/${sol.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123C32] group-hover:text-[#E8A83E] transition-colors shrink-0"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
