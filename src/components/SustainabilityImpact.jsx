import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Sun, Zap, TrendingDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function SustainabilityImpact() {
  // Interactive mini calculator state
  const [monthlyBill, setMonthlyBill] = useState(25000); // INR
  const [consumerType, setConsumerType] = useState("commercial"); // residential, commercial, industrial

  // Approximate calculations
  // Average tariff: Res ~₹7.5/kWh, Comm ~₹9/kWh, Ind ~₹8/kWh
  const tariff = consumerType === "residential" ? 7.5 : consumerType === "commercial" ? 9.0 : 8.0;
  const monthlyUnits = Math.round(monthlyBill / tariff);
  // 1 kWp produces approx 120 units/month in Central India
  const recommendedKW = Math.max(1, Math.round((monthlyUnits / 120) * 10) / 10);
  const monthlySavings = Math.round(monthlyBill * 0.85); // 85% offset
  const annualSavings = monthlySavings * 12;
  const annualCO2Tons = Math.round(((monthlyUnits * 12 * 0.82) / 1000) * 10) / 10; // ~0.82 kg CO2/kWh

  return (
    <section className="py-10 md:py-10 lg:py-10 bg-[#123C32] text-white relative overflow-hidden">
      {/* Background Solar Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bold Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/40 font-tech">
                <Leaf className="w-3.5 h-3.5" />
                <span>Solar Feasibility & Energy Yield Planning</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-heading">
                Every Sunlight Hour <br />
                <span className="text-[#E8A83E]">Is an Opportunity.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={130}>
              <p className="text-base text-[#E9F0E9]/85 leading-relaxed font-normal">
                Accelerating India’s transition to clean distributed energy requires more than panel installation—it demands precision engineering that guarantees 25 years of steady decarbonization.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={170}>
              <p className="text-xs sm:text-sm text-[#E9F0E9]/75 leading-relaxed">
                By replacing coal-reliant grid energy with on-site solar generation, every kilowatt installed acts as a permanent hedge against grid tariff inflation while directly shrinking enterprise carbon footprints.
              </p>
            </ScrollReveal>

            {/* Standard Environmental Impact Benchmarks */}
            <ScrollReveal delay={200}>
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs text-[#E8A83E] font-bold font-tech uppercase tracking-wider mb-3">
                  Standard Benchmarks (Per 100 kWp Plant):
                </div>

                <div className="grid grid-cols-3 gap-3 font-tech">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#E8A83E]">
                      ~140k
                    </div>
                    <div className="text-[10px] text-[#E9F0E9]/80 mt-0.5">
                      Units Clean Power/Yr
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#E8A83E]">
                      ~115
                    </div>
                    <div className="text-[10px] text-[#E9F0E9]/80 mt-0.5">
                      Tonnes CO2 Offset/Yr
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#E8A83E]">
                      ~5,200
                    </div>
                    <div className="text-[10px] text-[#E9F0E9]/80 mt-0.5">
                      Trees Equivalent
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Solar Savings Calculator */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={140}>
              <div className="p-6 sm:p-8 rounded-2xl bg-[#202724] border border-[#E8A83E]/30 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center shrink-0">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-heading">
                      Solar Impact & Savings Calculator
                    </h3>
                    <p className="text-xs text-[#E9F0E9]/70">
                      Estimate your capacity, financial savings & CO2 offset
                    </p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#E8A83E]/20 text-[#E8A83E] font-tech">
                  Interactive
                </span>
              </div>

              {/* Segment Selector */}
              <div>
                <label className="text-xs font-semibold text-[#E9F0E9]/80 block mb-2 font-tech uppercase tracking-wider">
                  Select Your Facility Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "residential", label: "Residential" },
                    { id: "commercial", label: "Commercial" },
                    { id: "industrial", label: "Industrial" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setConsumerType(tab.id)}
                      className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all cursor-pointer font-tech ${
                        consumerType === tab.id
                          ? "bg-[#E8A83E] text-[#202724] border-[#E8A83E] shadow-sm"
                          : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider for Monthly Electricity Bill */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-[#E9F0E9]/80 font-tech uppercase tracking-wider">
                    Average Monthly Electricity Bill
                  </span>
                  <span className="text-base font-black text-[#E8A83E] font-tech">
                    ₹{monthlyBill.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  min={consumerType === "residential" ? 2500 : consumerType === "commercial" ? 10000 : 50000}
                  max={consumerType === "residential" ? 35000 : consumerType === "commercial" ? 200000 : 800000}
                  step={consumerType === "residential" ? 500 : 5000}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full accent-[#E8A83E] h-2 bg-white/20 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#E9F0E9]/50 mt-1 font-mono">
                  <span>Min Bill</span>
                  <span>Max Bill</span>
                </div>
              </div>

              {/* Real-time Calculation Cards */}
              <div className="grid grid-cols-2 gap-3 pt-1 font-tech">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[11px] text-[#E9F0E9]/70 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-[#E8A83E]" />
                    <span>Recommended Capacity</span>
                  </div>
                  <div className="text-xl font-bold text-white mt-1">
                    {recommendedKW} <span className="text-xs font-normal text-[#E8A83E]">kWp</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[11px] text-[#E9F0E9]/70 flex items-center gap-1">
                    <TrendingDown className="w-3.5 h-3.5 text-[#E8A83E]" />
                    <span>Est. Annual Savings</span>
                  </div>
                  <div className="text-xl font-bold text-[#E8A83E] mt-1">
                    ₹{annualSavings.toLocaleString("en-IN")}
                  </div>
                </div>

                <div className="col-span-2 p-3.5 rounded-xl bg-[#123C32]/80 border border-[#123C32] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-[#E8A83E]" />
                    <div>
                      <div className="text-xs font-bold text-white font-heading">
                        Carbon Abatement
                      </div>
                      <div className="text-[10px] text-[#E9F0E9]/70">
                        Annual greenhouse gas reduction
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-black text-[#E8A83E] font-tech">
                    ~{annualCO2Tons} Tonnes / Yr
                  </div>
                </div>
              </div>

              {/* Inquire Action Button */}
              <Link
                to={`/enquiry?type=${consumerType}&bill=${monthlyBill}&capacity=${recommendedKW}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] font-bold text-sm transition-colors shadow-md font-tech"
              >
                <span>Request Detailed Engineering Feasibility</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
