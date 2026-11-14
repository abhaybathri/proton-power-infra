import { Link } from "react-router-dom";
import { ArrowRight, Phone, SunMedium } from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";

export default function CTASection({
  title = "Ready to Make the Switch to Solar?",
  description = "Let's find the right solar solution for your home, business, or industrial facility. Schedule an on-site feasibility survey today.",
  showContactButtons = true,
}) {
  return (
    <section className="relative py-20 lg:py-24 bg-[#123C32] text-white overflow-hidden">
      {/* Subtle Background Glow & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#123C32] via-[#1A4D41] to-[#0D2B24] opacity-95"></div>
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-12 h-12 rounded-xl bg-white/10 text-[#E8A83E] flex items-center justify-center mx-auto mb-2 border border-white/20 shadow-inner">
            <SunMedium className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-[#E9F0E9]/85 leading-relaxed font-normal">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/enquiry"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-md transition-all duration-200 group cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {showContactButtons && (
              <a
                href={`tel:${COMPANY_DETAILS.primaryPhoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-[#E8A83E]" />
                <span>Talk to Our Team ({COMPANY_DETAILS.primaryPhone})</span>
              </a>
            )}
          </div>

          <div className="pt-6 text-xs text-[#E9F0E9]/70 flex items-center justify-center gap-4 flex-wrap">
            <span>✓ Zero Obligation Site Survey</span>
            <span>•</span>
            <span>✓ Tailored Engineering Report</span>
            <span>•</span>
            <span>✓ Transparent Payback Modeling</span>
          </div>
        </div>
      </div>
    </section>
  );
}
