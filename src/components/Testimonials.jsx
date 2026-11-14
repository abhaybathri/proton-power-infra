import { Star, MessageSquareQuote, AlertCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { DEMO_TESTIMONIALS } from "../data/companyData";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F8F4] border-t border-[#E2E8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Client Perspectives"
            title="Trusted by Property Owners & Industrial Leaders"
            description="Our focus on engineering precision, safety, and proactive support forms the foundation of long-standing client relationships."
          />

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E9F0E9] border border-[#123C32]/20 text-[#123C32] text-xs font-semibold shrink-0">
            <AlertCircle className="w-3.5 h-3.5 text-[#E8A83E]" />
            <span>Illustrative Client Feedback Placeholders</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEMO_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-[#E2E8E2] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#E8A83E]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E8A83E]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-[#123C32]/20 group-hover:text-[#123C32]/50 transition-colors" />
                </div>

                <p className="text-sm text-[#252A27] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Org */}
              <div className="pt-4 border-t border-gray-100">
                <div className="text-sm font-bold text-[#202724]">
                  {item.author}
                </div>
                <div className="text-xs text-[#525D57]">
                  {item.role}, <span className="font-semibold text-[#123C32]">{item.organization}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F7F8F4] text-[#123C32] border border-[#E2E8E2]">
                    {item.sector}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    Sample Feedback
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
