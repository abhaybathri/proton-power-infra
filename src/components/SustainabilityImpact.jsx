import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Sun, Zap, TrendingDown, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function SustainabilityImpact() {
  // Interactive mini calculator state
  const [monthlyBill, setMonthlyBill] = useState(25000); // INR
  const [consumerType, setConsumerType] = useState("commercial"); // residential, commercial, industrial
  const [activeSection, setActiveSection] = useState("calculator"); // calculator

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
    <section id="solar-calculator" className="py-10 md:py-10 bg-[#E9F0E9] text-[#202724] relative overflow-hidden border-b border-[#E2E8E2]">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#123C32_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Top Header with Dual Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-[#E2E8E2]">
          <div className="min-w-full text-center">
            <ScrollReveal delay={0}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                Solar Feasibility &amp; Yield Planning
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={60}>
              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mt-1 font-normal">
                Estimate your system capacity and annual financial savings, or book a complimentary technical audit with our engineering team.
              </p>
            </ScrollReveal>
          </div>

          
        </div>

        {/* Equal-Height Grid Layout matching website theme */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Feasibility Narrative & Environmental Benchmarks Card */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <ScrollReveal delay={80} className="h-full flex flex-col">
              <div className="group relative h-full p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8E2] hover:border-[#123C32]/30 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6">
                {/* Top Section: Eyebrow, Heading & Narrative */}
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#123C32] leading-tight font-heading">
                    Every Sunlight Hour <br />
                    <span className="text-[#E8A83E] w-full text-center">Is an Opportunity.</span>
                  </h3>

                  <p className="text-sm sm:text-base text-[#525D57] leading-relaxed font-normal text-justify-clean">
                    Accelerating India’s transition to clean distributed energy requires more than panel installation—it demands precision engineering that guarantees 25 years of steady decarbonization.
                  </p>

                  <p className="text-xs sm:text-sm text-[#525D57]/90 leading-relaxed text-justify-clean">
                    By replacing coal-reliant grid energy with on-site solar generation, every kilowatt installed acts as a permanent hedge against grid tariff inflation while directly shrinking enterprise carbon footprints.
                  </p>
                </div>

                {/* Middle Section: Engineering Execution Highlights */}
                <div className="grid grid-cols-2 gap-2.5 pt-1 font-tech">
                  <div className="p-3 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#E8A83E]/50 transition-all flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#123C32]/10 text-[#123C32] flex items-center justify-center shrink-0 border border-[#123C32]/15">
                      <Zap className="w-4 h-4 text-[#123C32]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#123C32] truncate">Zero Grid Outage</div>
                      <div className="text-[10px] text-[#525D57] truncate">Smooth DISCOM sync</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#E8A83E]/50 transition-all flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#123C32]/10 text-[#123C32] flex items-center justify-center shrink-0 border border-[#123C32]/15">
                      <TrendingDown className="w-4 h-4 text-[#123C32]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#123C32] truncate">Tariff Inflation Hedge</div>
                      <div className="text-[10px] text-[#525D57] truncate">Fixed unit rate for 25 yrs</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Standard Environmental Impact Benchmarks */}
                <div className="pt-4 border-t border-[#E2E8E2]">
                  <div className="text-xs text-[#123C32] font-bold font-tech uppercase tracking-wider mb-3 flex items-center justify-between">
                    <span>Standard Benchmarks (Per 100 kWp Plant):</span>
                    <span className="text-[10px] text-[#525D57] font-mono">Central India Yield</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3 font-tech">
                    <div className="p-3 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/30 hover:bg-white transition-all text-center cursor-default">
                      <div className="text-lg sm:text-2xl font-black text-[#123C32]">
                        ~140k
                      </div>
                      <div className="text-[10px] text-[#525D57] mt-0.5 leading-tight">
                        Units Clean Power/Yr
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/30 hover:bg-white transition-all text-center cursor-default">
                      <div className="text-lg sm:text-2xl font-black text-[#123C32]">
                        ~115
                      </div>
                      <div className="text-[10px] text-[#525D57] mt-0.5 leading-tight">
                        Tonnes CO2 Offset/Yr
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/30 hover:bg-white transition-all text-center cursor-default">
                      <div className="text-lg sm:text-2xl font-black text-[#123C32]">
                        ~5,200
                      </div>
                      <div className="text-[10px] text-[#525D57] mt-0.5 leading-tight">
                        Trees Equivalent
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#E2E8E2] flex items-center justify-between text-[11px] text-[#525D57] font-tech">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span>✓ 25-Year Linear Yield Warranty</span>
                    </span>
                    <span className="text-[#123C32] font-bold">Tier-1 Bifacial PV</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Solar Savings Calculator Card */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <ScrollReveal delay={140} className="h-full flex flex-col">
              <div className="group relative h-full p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8E2] hover:border-[#123C32]/30 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#E2E8E2] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] flex items-center justify-center shrink-0 shadow-2xs">
                      <Sun className="w-5 h-5 text-[#123C32]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#123C32] font-heading">
                        Solar Impact &amp; Savings Calculator
                      </h3>
                      <p className="text-xs text-[#525D57]">
                        Estimate capacity, monthly savings &amp; CO2 abatement
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#123C32]/10 text-[#123C32] font-tech border border-[#123C32]/20">
                    Interactive
                  </span>
                </div>

                {/* Segment Selector */}
                <div>
                  <label className="text-xs font-semibold text-[#525D57] block mb-2 font-tech uppercase tracking-wider">
                    Select Facility Type
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
                        className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all duration-200 cursor-pointer font-tech ${
                          consumerType === tab.id
                            ? "bg-[#123C32] text-white border-[#123C32] shadow-xs"
                            : "bg-[#F7F8F4] text-[#525D57] border-[#E2E8E2] hover:bg-[#E9F0E9] hover:text-[#123C32]"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slider for Monthly Electricity Bill */}
                <div className="p-3.5 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-[#525D57] font-tech uppercase tracking-wider">
                      Average Monthly Electricity Bill
                    </span>
                    <span className="text-base font-black text-[#123C32] font-tech">
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
                    className="w-full accent-[#123C32] h-2 bg-[#E2E8E2] rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#525D57]/70 mt-1.5 font-mono">
                    <span>Min Bill</span>
                    <span>Max Bill</span>
                  </div>
                </div>

                {/* Real-time Calculation Cards */}
                <div className="grid grid-cols-2 gap-3 pt-1 font-tech">
                  <div className="p-3.5 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/30 transition-all">
                    <div className="text-[11px] text-[#525D57] flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-[#123C32]" />
                      <span>Recommended Capacity</span>
                    </div>
                    <div className="text-xl font-bold text-[#123C32] mt-1">
                      {recommendedKW} <span className="text-xs font-normal text-[#E8A83E]">kWp</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/30 transition-all">
                    <div className="text-[11px] text-[#525D57] flex items-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Est. Annual Savings</span>
                    </div>
                    <div className="text-xl font-bold text-emerald-700 mt-1">
                      ₹{annualSavings.toLocaleString("en-IN")}
                    </div>
                  </div>

                  <div className="col-span-2 p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/80 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-emerald-700" />
                      <div>
                        <div className="text-xs font-bold text-[#123C32] font-heading">
                          Carbon Abatement
                        </div>
                        <div className="text-[10px] text-[#525D57]">
                          Annual greenhouse gas offset
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-black text-emerald-800 font-tech">
                      ~{annualCO2Tons} Tonnes / Yr
                    </div>
                  </div>
                </div>

                {/* Inquire Action Button */}
                <div className="pt-1">
                  <Link
                    to={`/contact?type=${consumerType}&bill=${monthlyBill}&capacity=${recommendedKW}#inquiry-form`}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#123C32] hover:bg-[#1A4D41] text-white font-bold text-sm shadow-sm hover:shadow-md transition-all duration-300 font-tech cursor-pointer tracking-wide"
                  >
                    <span>Request Detailed Engineering Feasibility</span>
                    <ArrowRight className="w-4 h-4 text-[#E8A83E] group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
