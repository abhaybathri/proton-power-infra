import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { IMAGES } from "../data/companyData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 bg-[#F7F8F4]">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#123C32_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/15 text-[#123C32] text-xs font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A83E]"></span>
              <span>Solar Energy & Power Infrastructure Since 2012</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#202724] tracking-tight leading-[1.12]">
              Smarter Solar Solutions. <br />
              <span className="text-[#123C32]">A Brighter Tomorrow.</span>
            </h1>

            {/* Supporting Description - Concise & Factual */}
            <p className="text-base sm:text-lg text-[#525D57] leading-relaxed max-w-2xl font-normal">
              Proton Power Infra delivers high-yield turnkey solar EPC, utility-scale ground-mount installations, and in-house manufactured Inverter Duty Solar Transformers across India. Backed by 125+ MW of commissioned capacity and over a decade of engineering excellence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold bg-[#123C32] text-white hover:bg-[#1A4D41] shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold bg-white text-[#202724] border border-[#E2E8E2] hover:bg-[#E9F0E9] hover:border-[#123C32]/30 transition-all duration-200 shadow-xs"
              >
                <span>Get a Free Quote</span>
              </Link>
            </div>

            {/* Trust Indicator */}
            <div className="pt-4 border-t border-[#E2E8E2] flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#525D57]">
              <div className="flex items-center gap-1.5 font-bold text-[#123C32]">
                <ShieldCheck className="w-4 h-4 text-[#E8A83E]" />
                <span>125+ MW Installed Nationwide</span>
              </div>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <span>Independent Power Producer (IPP)</span>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <span>Indore HQ • Delhi • Bhopal • Dewas</span>
            </div>
          </div>

          {/* Right Column (Single Strong Visual Focal Point) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#123C32] aspect-[4/4.8]">
                <img
                  src={IMAGES.heroSecondary}
                  alt="Real utility ground mount solar installation by Proton Power Infra"
                  className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/80 via-transparent to-black/10"></div>

                {/* Clean Bottom Trust Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-white/60 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#123C32] uppercase tracking-wide">
                      Utility-Scale Solar Park
                    </div>
                    <div className="text-[11px] text-[#525D57]">
                      Commissioned & Maintained by Proton Power Infra
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#123C32]/10 text-[#123C32] text-xs font-extrabold shrink-0">
                    125+ MW
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
