import { Link } from "react-router-dom";
import { ArrowRight, SunMedium } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function CTASection({
  title = "Ready to Make the Switch to Solar & Reliable Power?",
  description = "Let's find the right solar energy or transformer solution for your facility. Connect with our engineering headquarters in Indore or regional offices in Delhi, Bhopal, and Dewas.",
}) {
  return (
    <section className="relative py-5 md:py-5 lg:py-5 bg-[#123C32] text-white overflow-hidden">
      {/* Subtle Background Glow & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#123C32] via-[#1A4D41] to-[#0D2B24] opacity-95"></div>
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <ScrollReveal delay={0}>
            {/* <div className="w-12 h-12 rounded-xl bg-white/10 text-[#E8A83E] flex items-center justify-center mx-auto mb-2 border border-white/20 shadow-inner">
              <SunMedium className="w-7 h-7" />
            </div> */}
          </ScrollReveal>

          <ScrollReveal delay={70}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight font-heading">
              {title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <p className="text-base sm:text-lg text-[#E9F0E9]/85 leading-relaxed font-normal text-center">
              {description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={170}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <div className="relative group/btn w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#E8A83E] via-amber-300 to-[#E8A83E] rounded-xl blur-md opacity-40 group-hover/btn:opacity-90 transition duration-500 group-hover/btn:scale-105 pointer-events-none"></div>
                <Link
                  to="/contact#inquiry-form"
                  className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-[#E8A83E] via-[#F3B74F] to-[#D4952D] hover:from-[#F0B34A] hover:to-[#E8A83E] text-[#202724] border-2 border-amber-300/80 hover:border-white/90 shadow-[0_0_20px_rgba(232,168,62,0.35)] hover:shadow-[0_0_30px_rgba(232,168,62,0.6)] transition-all duration-300 group cursor-pointer font-tech tracking-wide"
                >
                  <span>Request a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="pt-4 text-xs text-[#E9F0E9]/70 flex items-center justify-center gap-4 flex-wrap font-tech">
              <span>✓ Zero Obligation Site Survey</span>
              <span>•</span>
              <span>✓ Tailored Engineering Report</span>
              <span>•</span>
              <span>✓ Transparent Payback Modeling</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
