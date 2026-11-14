import { STATS } from "../data/companyData";

export default function CompanyHighlights() {
  return (
    <section className="bg-white border-y border-[#E2E8E2] py-8 sm:py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E8E2]">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-center ${
                idx > 0 ? "pt-4 lg:pt-0 lg:pl-8" : ""
              }`}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#123C32] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#202724] mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-[#525D57] mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
