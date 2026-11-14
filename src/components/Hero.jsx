import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, SunMedium, Zap, Award, CheckCircle2 } from "lucide-react";
import { IMAGES, COMPANY_DETAILS, STATS } from "../data/companyData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-[#F7F8F4]">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#123C32_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Eyebrow Badge with Real Stats */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-ping"></span>
              <span>125+ MW INSTALLED ACROSS INDIA • SINCE 2012</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#202724] tracking-tight leading-[1.12]">
              Smarter Solar Solutions. <br />
              <span className="text-[#123C32] relative inline-block">
                A Brighter Tomorrow.
                <span className="absolute bottom-1.5 left-0 w-full h-2.5 bg-[#E8A83E]/20 -z-10 rounded"></span>
              </span>
            </h1>

            {/* Supporting Description with user's exact company positioning */}
            <p className="text-base sm:text-lg md:text-xl text-[#525D57] leading-relaxed max-w-2xl font-normal">
              Proton Power Infra is a leading solar panel installation company and power transformer manufacturer headquartered in Indore, with a nationwide footprint. Delivering high-yield solar EPC and in-house inverter duty transformers with precision, passion, and purpose.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold bg-[#123C32] text-white hover:bg-[#1A4D41] shadow-lg shadow-[#123C32]/15 hover:shadow-xl transition-all duration-200 group cursor-pointer"
              >
                <span>Request a Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#solutions-overview"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold bg-white text-[#202724] border border-[#E2E8E2] hover:bg-[#E9F0E9] hover:border-[#123C32]/30 transition-all duration-200 shadow-sm"
              >
                <span>Explore Our Solutions</span>
              </a>
            </div>

            {/* Trust Indicator & Sectors */}
            <div className="pt-4 border-t border-[#E2E8E2] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm font-medium text-[#525D57]">
              <div className="flex items-center gap-2 text-[#123C32]">
                <ShieldCheck className="w-4 h-4 text-[#E8A83E]" />
                <span className="font-semibold text-[#202724]">Independent Power Producer (IPP)</span>
              </div>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#123C32]"></span>
                <span>Residential</span>
              </div>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#123C32]"></span>
                <span>Commercial & Ground-Mount</span>
              </div>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#123C32]"></span>
                <span>Industrial & Transformers</span>
              </div>
            </div>
          </div>

          {/* Right Column (Real Project Photography) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Container displaying real utility solar park */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#123C32] aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/5]">
                <img
                  src={IMAGES.heroSecondary}
                  alt="Utility scale solar park installation done by Proton Power Infra"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/85 via-transparent to-black/10"></div>

                {/* Floating Information Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#123C32] uppercase tracking-wide">
                          125+ MW Clean Energy Portfolio
                        </div>
                        <div className="text-[11px] text-[#525D57]">
                          Pan-India Turnkey Solar & Transformers
                        </div>
                      </div>
                    </div>
                    <div className="hidden sm:block text-right">
                      <span className="inline-block px-2.5 py-1 rounded bg-[#E9F0E9] text-[#123C32] text-[10px] font-bold">
                        Since 2012
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -top-4 -right-4 -z-10 w-32 h-32 rounded-2xl bg-[#E8A83E]/20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 -z-10 w-40 h-40 rounded-2xl bg-[#123C32]/10 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* 4 Key Real Company Statistics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-10 border-t border-[#E2E8E2]">
          {STATS.map((st, idx) => (
            <div key={idx} className="p-4 sm:p-5 rounded-xl bg-white border border-[#E2E8E2] shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#123C32]">
                {st.value}
              </div>
              <div className="text-xs font-bold text-[#202724] mt-1">
                {st.label}
              </div>
              <div className="text-[11px] text-[#525D57] mt-0.5">
                {st.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
