import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Sun, Zap, TrendingDown, Sparkles } from "lucide-react";
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
    <section className="py-10 md:py-12 bg-[#123C32] text-white relative overflow-hidden">
      {/* Background Solar Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Ambient Lighting Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E8A83E]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-[#E8A83E]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Equal-Height Grid Layout for Left & Right Components */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Feasibility Narrative & Environmental Benchmarks Card */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <ScrollReveal delay={80} className="h-full flex flex-col">
              <div className="group relative h-full p-6 sm:p-8 rounded-2xl bg-[#202724]/85 backdrop-blur-md border border-white/10 hover:border-[#E8A83E]/50 shadow-2xl hover:shadow-[0_0_30px_rgba(232,168,62,0.12)] transition-all duration-500 flex flex-col justify-between space-y-6">
                {/* Top Section: Eyebrow, Heading & Narrative */}
                <div className="space-y-6">
                  {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/30 font-tech">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Solar Feasibility & Yield Planning</span>
                  </div> */}

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight font-heading">
                    Every Sunlight Hour <br />
                    <span className="text-[#E8A83E]">Is an Opportunity.</span>
                  </h2>

                  <p className="text-sm sm:text-base text-[#E9F0E9]/85 leading-relaxed font-normal text-justify-clean">
                    Accelerating India’s transition to clean distributed energy requires more than panel installation—it demands precision engineering that guarantees 25 years of steady decarbonization.
                  </p>

                  <p className="text-xs sm:text-sm text-[#E9F0E9]/75 leading-relaxed text-justify-clean">
                    By replacing coal-reliant grid energy with on-site solar generation, every kilowatt installed acts as a permanent hedge against grid tariff inflation while directly shrinking enterprise carbon footprints.
                  </p>
                </div>

                {/* Middle Section: Engineering Execution Highlights (Fills Empty Space Elegantly) */}
                <div className="grid grid-cols-2 gap-2.5 pt-1 font-tech">
                  <div className="group/feat p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#E8A83E]/50 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(232,168,62,0.15)] transition-all flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center shrink-0 border border-[#E8A83E]/30 group-hover/feat:scale-110 group-hover/feat:text-amber-300 transition-all">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate">Zero Grid Outage</div>
                      <div className="text-[10px] text-[#E9F0E9]/70 truncate">Smooth DISCOM sync</div>
                    </div>
                  </div>

                  <div className="group/feat p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#E8A83E]/50 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(232,168,62,0.15)] transition-all flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center shrink-0 border border-[#E8A83E]/30 group-hover/feat:scale-110 group-hover/feat:text-amber-300 transition-all">
                      <TrendingDown className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate">Tariff Inflation Hedge</div>
                      <div className="text-[10px] text-[#E9F0E9]/70 truncate">Fixed unit rate for 25 yrs</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Standard Environmental Impact Benchmarks */}
                <div className="pt-5 border-t border-white/10">
                  <div className="text-xs text-[#E8A83E] font-bold font-tech uppercase tracking-wider mb-3 flex items-center justify-between">
                    <span>Standard Benchmarks (Per 100 kWp Plant):</span>
                    <span className="text-[10px] text-[#E9F0E9]/50 font-mono">Central India Yield</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3 font-tech">
                    <div className="group/bench p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#E8A83E]/50 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(232,168,62,0.15)] hover:-translate-y-0.5 transition-all duration-300 text-center cursor-default">
                      <div className="text-lg sm:text-2xl font-black text-[#E8A83E] group-hover/bench:scale-105 transition-transform">
                        ~140k
                      </div>
                      <div className="text-[10px] text-[#E9F0E9]/80 mt-0.5 leading-tight">
                        Units Clean Power/Yr
                      </div>
                    </div>

                    <div className="group/bench p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#E8A83E]/50 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(232,168,62,0.15)] hover:-translate-y-0.5 transition-all duration-300 text-center cursor-default">
                      <div className="text-lg sm:text-2xl font-black text-[#E8A83E] group-hover/bench:scale-105 transition-transform">
                        ~115
                      </div>
                      <div className="text-[10px] text-[#E9F0E9]/80 mt-0.5 leading-tight">
                        Tonnes CO2 Offset/Yr
                      </div>
                    </div>

                    <div className="group/bench p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#E8A83E]/50 hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(232,168,62,0.15)] hover:-translate-y-0.5 transition-all duration-300 text-center cursor-default">
                      <div className="text-lg sm:text-2xl font-black text-[#E8A83E] group-hover/bench:scale-105 transition-transform">
                        ~5,200
                      </div>
                      <div className="text-[10px] text-[#E9F0E9]/80 mt-0.5 leading-tight">
                        Trees Equivalent
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#E9F0E9]/75 font-tech">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8A83E] animate-pulse"></span>
                      <span>25-Year Linear Yield Warranty</span>
                    </span>
                    <span className="text-[#E8A83E]/90 font-medium">Tier-1 Bifacial PV</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Solar Savings Calculator Card */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <ScrollReveal delay={140} className="h-full flex flex-col">
              <div className="group relative h-full p-6 sm:p-8 rounded-2xl bg-[#202724] border border-[#E8A83E]/35 hover:border-[#E8A83E]/75 shadow-2xl hover:shadow-[0_0_35px_rgba(232,168,62,0.2)] transition-all duration-500 flex flex-col justify-between space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#123C32] border border-[#E8A83E]/30 text-[#E8A83E] flex items-center justify-center shrink-0 shadow-inner group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-[#202724] group-hover:border-amber-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(232,168,62,0.6)] transition-all duration-300">
                      <Sun className="w-5 h-5 text-[#E8A83E] group-hover:text-[#202724] transition-colors" />
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
                        className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all duration-200 cursor-pointer font-tech ${
                          consumerType === tab.id
                            ? "bg-[#E8A83E] text-[#202724] border-[#E8A83E] shadow-[0_0_12px_rgba(232,168,62,0.35)] scale-[1.02]"
                            : "bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white"
                        } hover:border-[#E8A83E]/50  hover:shadow-[0_0_15px_rgba(232,168,62,0.15)] hover:-translate-y-0.5  hover:border-[#E8A83E] transition-all duration-300`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Slider for Monthly Electricity Bill */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-[#E9F0E9]/80 font-tech uppercase tracking-wider">
                      Average Monthly Electricity Bill
                    </span>
                    <span className="text-base font-black text-[#E8A83E] font-tech drop-shadow-xs">
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
                    className="w-full accent-[#E8A83E] h-2 bg-white/20 rounded-lg cursor-pointer hover:bg-white/30 transition-colors"
                  />
                  <div className="flex justify-between text-[10px] text-[#E9F0E9]/50 mt-1.5 font-mono">
                    <span>Min Bill</span>
                    <span>Max Bill</span>
                  </div>
                </div>

                {/* Real-time Calculation Cards with Hover Glow */}
                <div className="grid grid-cols-2 gap-3 pt-1 font-tech">
                  <div className="group/calc p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#E8A83E]/70 hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(232,168,62,0.25)] hover:-translate-y-0.5 transition-all duration-300">
                    <div className="text-[11px] text-[#E9F0E9]/70 flex items-center gap-1 group-hover/calc:text-white transition-colors">
                      <Zap className="w-3.5 h-3.5 text-[#E8A83E] group-hover/calc:text-amber-300 group-hover/calc:scale-115 group-hover/calc:drop-shadow-[0_0_8px_rgba(232,168,62,0.85)] transition-all" />
                      <span>Recommended Capacity</span>
                    </div>
                    <div className="text-xl font-bold text-white mt-1">
                      {recommendedKW} <span className="text-xs font-normal text-[#E8A83E] group-hover/calc:text-amber-300 group-hover/calc:drop-shadow-[0_0_6px_rgba(232,168,62,0.7)] transition-all">kWp</span>
                    </div>
                  </div>

                  <div className="group/calc p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#E8A83E]/70 hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(232,168,62,0.25)] hover:-translate-y-0.5 transition-all duration-300">
                    <div className="text-[11px] text-[#E9F0E9]/70 flex items-center gap-1 group-hover/calc:text-white transition-colors">
                      <TrendingDown className="w-3.5 h-3.5 text-[#E8A83E] group-hover/calc:text-amber-300 group-hover/calc:scale-115 group-hover/calc:drop-shadow-[0_0_8px_rgba(232,168,62,0.85)] transition-all" />
                      <span>Est. Annual Savings</span>
                    </div>
                    <div className="text-xl font-bold text-[#E8A83E] group-hover/calc:text-amber-300 group-hover/calc:drop-shadow-[0_0_8px_rgba(232,168,62,0.6)] mt-1 transition-all">
                      ₹{annualSavings.toLocaleString("en-IN")}
                    </div>
                  </div>

                  <div className="group/carbon col-span-2 p-3.5 rounded-xl bg-[#123C32]/90 border border-emerald-500/30 hover:border-[#E8A83E]/70 hover:shadow-[0_0_22px_rgba(232,168,62,0.25)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-[#E8A83E] group-hover/carbon:text-amber-300 group-hover/carbon:scale-115 group-hover/carbon:drop-shadow-[0_0_8px_rgba(232,168,62,0.85)] transition-all" />
                      <div>
                        <div className="text-xs font-bold text-white font-heading">
                          Carbon Abatement
                        </div>
                        <div className="text-[10px] text-[#E9F0E9]/70">
                          Annual greenhouse gas reduction
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-black text-[#E8A83E] group-hover/carbon:text-amber-300 group-hover/carbon:drop-shadow-[0_0_8px_rgba(232,168,62,0.6)] font-tech transition-all">
                      ~{annualCO2Tons} Tonnes / Yr
                    </div>
                  </div>
                </div>

                {/* Inquire Action Button with Glowing Border & Gradient Halo */}
                <div className="pt-1">
                  <div className="relative group/btn w-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E8A83E] via-amber-300 to-[#E8A83E] rounded-xl blur-md opacity-40 group-hover/btn:opacity-90 transition duration-500 group-hover/btn:scale-105 pointer-events-none"></div>
                    <Link
                      to={`/contact?type=${consumerType}&bill=${monthlyBill}&capacity=${recommendedKW}#inquiry-form`}
                      className="relative w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#E8A83E] via-[#F3B74F] to-[#D4952D] hover:from-[#F0B34A] hover:to-[#E8A83E] text-[#202724] font-bold text-sm border-2 border-amber-300/80 hover:border-white/90 shadow-[0_0_20px_rgba(232,168,62,0.35)] hover:shadow-[0_0_30px_rgba(232,168,62,0.6)] transition-all duration-300 font-tech cursor-pointer tracking-wide"
                    >
                      <span>Request Detailed Engineering Feasibility</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
