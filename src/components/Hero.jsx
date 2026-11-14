import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Activity } from "lucide-react";
import homeTopImage from "../assets/home-assets/home-top-image.jpg";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-20 bg-[#F7F8F4]">
      {/* High-tech engineering grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#123C32_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Techy Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/15 text-[#123C32] text-xs font-bold tracking-wider uppercase font-tech">
              <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-pulse"></span>
              <span>Solar Energy & Power Infrastructure Since 2012</span>
            </div>

            {/* Aesthetic Tech Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#202724] tracking-tight leading-[1.08] font-heading">
              Smarter Solar Solutions. <br />
              <span className="text-[#123C32] relative inline-block">
                A Brighter Tomorrow.
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#E8A83E]/25 -z-10 rounded"></span>
              </span>
            </h1>

            {/* Exact Required Description */}
            <p className="text-base sm:text-lg text-[#525D57] leading-relaxed max-w-2xl font-normal">
              Proton Power Infra is a leading solar panel installation company and power transformer manufacturer headquartered in Indore, with a nationwide footprint. Delivering high-yield solar EPC and in-house inverter duty transformers with precision, passion, and purpose.
            </p>

            {/* Exactly ONE CTA Button as explicitly requested */}
            <div className="pt-2">
              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold bg-[#123C32] text-white hover:bg-[#1A4D41] shadow-lg shadow-[#123C32]/20 hover:shadow-xl hover:shadow-[#123C32]/30 transition-all duration-300 group cursor-pointer font-tech tracking-wide"
              >
                <span>Request a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </Link>
            </div>

            {/* Tech Specs Micro-Bar */}
            <div className="pt-6 border-t border-[#E2E8E2] grid grid-cols-3 gap-4 font-tech">
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#123C32]">125+ MW</div>
                <div className="text-[11px] font-semibold text-[#525D57] uppercase tracking-wider">Commissioned</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#123C32]">In-House</div>
                <div className="text-[11px] font-semibold text-[#525D57] uppercase tracking-wider">Transformers</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#123C32]">Pan-India</div>
                <div className="text-[11px] font-semibold text-[#525D57] uppercase tracking-wider">4 Strategic Hubs</div>
              </div>
            </div>
          </div>

          {/* Right Column (Interactive Image Presentation) */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#123C32] group transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Image from home-assets/home-top-image.jpg */}
              <div className="relative aspect-[4/4.5] overflow-hidden">
                <img
                  src={homeTopImage}
                  alt="Proton Power Infra Utility Solar Park and Infrastructure"
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                    isHovered ? "scale-108" : "scale-100"
                  }`}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/90 via-[#123C32]/20 to-black/10"></div>
              </div>

              {/* High-Tech Overlay Elements */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#123C32] shadow-sm font-tech">
                  <Activity className="w-3.5 h-3.5 text-[#E8A83E] animate-pulse" />
                  <span>Telemetry Active • 100% Online</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#202724]/80 backdrop-blur-md text-[10px] font-mono text-[#E9F0E9] border border-white/10">
                  <span>22.71° N, 75.85° E</span>
                </div>
              </div>

              {/* Bottom Interactive Control Capsule */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8A83E]"></span>
                    <span className="text-xs font-bold text-[#123C32] uppercase tracking-wider font-tech">
                      Utility Solar Park & Inverter Substation
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#123C32] bg-[#E9F0E9] px-2 py-0.5 rounded font-mono">
                    IPP ASSET
                  </span>
                </div>
                <p className="text-xs text-[#525D57] leading-relaxed">
                  Turnkey multi-megawatt generation infrastructure synchronized with HT 33kV power transformers.
                </p>
              </div>

              {/* Corner Engineering Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E8A83E] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E8A83E] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
