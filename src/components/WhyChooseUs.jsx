import { Award, Cpu, FileCheck, MapPin, Activity, Users, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { WHY_CHOOSE_US, IMAGES } from "../data/companyData";

const PILLAR_ICONS = {
  Award: Award,
  Cpu: Cpu,
  FileCheck: FileCheck,
  MapPin: MapPin,
  Activity: Activity,
  Users: Users,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-[#E9F0E9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Real Transformer & Substation Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Primary Image: Real high-voltage transformer substation */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#123C32]">
                <img
                  src={IMAGES.transformerSubstation}
                  alt="High-voltage power transformer substation engineered by Proton Power Infra"
                  className="w-full h-[470px] object-cover object-center transform hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Floating Quality Callout Card with Real 125+ MW Milestone */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 p-5 rounded-xl bg-[#123C32] text-white shadow-xl max-w-xs border border-[#E8A83E]/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-[#E8A83E] text-[#202724] flex items-center justify-center font-extrabold text-sm">
                    125+
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#E8A83E] uppercase tracking-wider">
                      MW Commissioned
                    </div>
                    <div className="text-[10px] text-[#E9F0E9]/70">
                      Independent Power Producer (IPP)
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-[#E9F0E9]/80 leading-relaxed">
                  Executing utility solar parks, public & private sector projects, and in-house inverter duty transformer manufacturing since 2012.
                </p>
              </div>

              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#123C32]/10 -z-10 blur-xl"></div>
            </div>
          </div>

          {/* Right Column: Content & 6 Pillars Grid */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <SectionHeading
              eyebrow="Why Choose Proton Power Infra"
              title="Technical Brilliance with Global Engineering Standards"
              description="A dynamic team bringing together the perfect mix of young talent and seasoned industry professionals. Delivering precision, passion, and purpose across India since 2012."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
              {WHY_CHOOSE_US.map((item, idx) => {
                const IconComponent = PILLAR_ICONS[item.icon] || ShieldCheck;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-[#E2E8E2] shadow-xs hover:border-[#123C32]/30 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#123C32]/10 text-[#123C32] group-hover:bg-[#123C32] group-hover:text-[#E8A83E] flex items-center justify-center mb-3 transition-colors duration-200">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#202724] mb-1.5 group-hover:text-[#123C32] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#525D57] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#123C32] hover:text-[#1A4D41] border-b-2 border-[#123C32] pb-0.5"
              >
                <span>Read our full company story & technical credentials</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
