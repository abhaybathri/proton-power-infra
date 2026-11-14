import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Home, Building2, Factory, Cpu, Sun } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SOLUTIONS } from "../data/companyData";

const SOLUTION_ICONS = {
  residential: Home,
  commercial: Building2,
  industrial: Factory,
  transformers: Cpu,
  "epc-services": Sun,
};

export default function SolarSolutions() {
  return (
    <section id="solutions-overview" className="py-20 lg:py-28 bg-[#F7F8F4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            eyebrow="Our Solar & Transformer Solutions"
            title="Complete Clean Energy Infrastructure Engineered Under One Roof"
            description="From private residential rooftops and commercial ground-mount arrays to utility-scale solar parks and custom in-house inverter duty transformers."
          />
          <Link
            to="/enquiry"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#123C32] hover:text-[#1A4D41] shrink-0 border-b-2 border-[#123C32] pb-0.5 hover:border-[#E8A83E] transition-all"
          >
            <span>Request Custom Techno-Economic Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5 Distinctive Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((sol, index) => {
            const Icon = SOLUTION_ICONS[sol.id] || Home;
            const isFeatured = sol.id === "transformers" || sol.id === "industrial";

            return (
              <div
                key={sol.id}
                className={`group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-[#E2E8E2] shadow-sm hover:shadow-xl transition-all duration-300 ${
                  isFeatured ? "ring-1 ring-[#123C32]/20" : ""
                }`}
              >
                {/* Image Section */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-[#202724]">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202724]/90 via-[#202724]/30 to-transparent"></div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-white/95 backdrop-blur-md text-[#123C32] shadow-sm">
                      {sol.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#202724]/85 text-[#E8A83E] border border-[#E8A83E]/30">
                      {sol.capacityRange}
                    </span>
                  </div>

                  {/* Title overlay on image bottom */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center shrink-0 border border-[#E8A83E]/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {sol.title}
                      </h3>
                      <p className="text-xs text-[#E9F0E9]/80 line-clamp-1">
                        {sol.idealFor}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mb-5">
                      {sol.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      {sol.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#252A27]">
                          <CheckCircle2 className="w-4 h-4 text-[#123C32] shrink-0 mt-0.5" />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-[#E2E8E2]">
                    <Link
                      to={`/${sol.slug}`}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#F7F8F4] group-hover:bg-[#123C32] text-[#123C32] group-hover:text-white transition-all duration-200"
                    >
                      <span>Explore {sol.title}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
