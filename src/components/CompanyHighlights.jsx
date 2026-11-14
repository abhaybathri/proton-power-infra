import { Workflow, Layers, ShieldCheck, Headphones } from "lucide-react";
import { HIGHLIGHTS } from "../data/companyData";

const ICONS = {
  "end-to-end": Workflow,
  expertise: Layers,
  quality: ShieldCheck,
  support: Headphones,
};

export default function CompanyHighlights() {
  return (
    <section className="bg-white border-y border-[#E2E8E2] py-8 sm:py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HIGHLIGHTS.map((item, idx) => {
            const IconComponent = ICONS[item.id] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F7F8F4] transition-colors duration-200 border border-transparent hover:border-[#E2E8E2]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E9F0E9] flex items-center justify-center text-[#123C32] shrink-0 border border-[#123C32]/10">
                  <IconComponent className="w-6 h-6 stroke-[1.8] text-[#123C32]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#202724] leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
