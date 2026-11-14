import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, ShieldCheck } from "lucide-react";

export default function SustainabilityImpact() {
  // Interactive mini calculator state (Preserving original calculation logic)
  const [monthlyBill, setMonthlyBill] = useState(25000); // INR
  const [consumerType, setConsumerType] = useState("commercial"); // residential, commercial, industrial

  // Tariff assumptions: Res ~₹7.5/kWh, Comm ~₹9/kWh, Ind ~₹8/kWh
  const tariff = consumerType === "residential" ? 7.5 : consumerType === "commercial" ? 9.0 : 8.0;
  const monthlyUnits = Math.round(monthlyBill / tariff);
  // 1 kWp produces approx 120 units/month in Central India
  const recommendedKW = Math.max(1, Math.round((monthlyUnits / 120) * 10) / 10);
  const monthlySavings = Math.round(monthlyBill * 0.85); // 85% offset
  const annualSavings = monthlySavings * 12;
  const annualCO2Tons = Math.round(((monthlyUnits * 12 * 0.82) / 1000) * 10) / 10;

  return (
    <section className="py-20 lg:py-24 bg-[#123C32] text-white relative overflow-hidden">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8A83E]/15 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/30">
              <Sun className="w-3.5 h-3.5" />
              <span>Solar Feasibility & Energy Yield Planning</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Calculate Your Potential <br />
              <span className="text-[#E8A83E]">Solar Savings & CO2 Offset</span>
            </h2>

            <p className="text-base text-[#E9F0E9]/85 leading-relaxed font-normal">
              Electricity rates in India increase by an average of 4% to 7% annually. On-site rooftop or ground-mount solar locks in your power costs for 25 years while slashing monthly utility expenditures by up to 85%.
            </p>

            <div className="space-y-3 pt-2 text-sm text-[#E9F0E9]/80">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#E8A83E] shrink-0" />
                <span>Tier-1 high-efficiency monocrystalline PV panels</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#E8A83E] shrink-0" />
                <span>In-house manufactured Inverter Duty Solar Transformers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#E8A83E] shrink-0" />
                <span>DISCOM net-metering & statutory subsidy assistance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Calculator Tool */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#202724] border border-[#E8A83E]/30 shadow-xl space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Solar Energy Estimator
                </h3>
                <p className="text-xs text-[#E9F0E9]/70">
                  Select your facility type and monthly power bill
                </p>
              </div>

              {/* Consumer Type Toggle */}
              <div>
                <label className="block text-xs font-semibold text-[#E9F0E9]/90 uppercase tracking-wider mb-2">
                  1. Facility Type
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
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        consumerType === tab.id
                          ? "bg-[#E8A83E] text-[#202724] shadow-xs"
                          : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Bill Slider & Input */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-[#E9F0E9]/90 uppercase tracking-wider">
                    2. Monthly Electricity Bill (₹)
                  </label>
                  <span className="text-base font-extrabold text-[#E8A83E]">
                    ₹{monthlyBill.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="500000"
                  step="1000"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#E8A83E]"
                />
                <div className="flex justify-between text-[11px] text-[#E9F0E9]/50 mt-1">
                  <span>₹3,000</span>
                  <span>₹1,00,000</span>
                  <span>₹5,00,000+</span>
                </div>
              </div>

              {/* Calculation Output Dashboard */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-white">
                    {recommendedKW} <span className="text-xs text-[#E8A83E]">kW</span>
                  </div>
                  <div className="text-[10px] text-[#E9F0E9]/70 mt-1 uppercase tracking-wide">
                    Recommended Size
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#E8A83E]">
                    ₹{(annualSavings / 100000).toFixed(1)}L
                  </div>
                  <div className="text-[10px] text-[#E9F0E9]/70 mt-1 uppercase tracking-wide">
                    Est. Annual Savings
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#4ADE80]">
                    {annualCO2Tons} <span className="text-xs text-[#E9F0E9]">T</span>
                  </div>
                  <div className="text-[10px] text-[#E9F0E9]/70 mt-1 uppercase tracking-wide">
                    CO2 Offset / Yr
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  to={`/enquiry?type=${consumerType}&capacity=${recommendedKW}&bill=${monthlyBill}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] transition-all shadow-md group cursor-pointer"
                >
                  <span>Request Verified Feasibility Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
