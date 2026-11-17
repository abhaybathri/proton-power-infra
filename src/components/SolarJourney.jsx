import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Calendar, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SOLAR_JOURNEY } from "../data/companyData";

export default function SolarJourney() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-[#E2E8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Your Seamless Journey to Solar Energy Independence"
          description="A transparent, four-phase milestone process designed to deliver zero disruption, rigorous compliance, and swift grid synchronization."
          align="center"
          className="mb-16"
        />

        {/* Desktop Interactive Horizontal Timeline */}
        <div className="hidden lg:block relative mb-12">
          {/* Progress Connecting Line */}
          <div className="absolute top-7 left-12 right-12 h-0.5 bg-[#E2E8E2] -z-0">
            <div
              className="h-full bg-[#123C32] transition-all duration-500 ease-in-out"
              style={{ width: `${(activeStep / (SOLAR_JOURNEY.length - 1)) * 100}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {SOLAR_JOURNEY.map((item, idx) => {
              const isSelected = activeStep === idx;
              const isPassed = activeStep >= idx;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="text-left group cursor-pointer focus:outline-none"
                >
                  {/* Step Bubble */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-extrabold text-sm transition-all duration-300 shadow-sm ${
                        isSelected
                          ? "bg-[#123C32] text-[#E8A83E] ring-4 ring-[#E8A83E]/30 scale-105"
                          : isPassed
                          ? "bg-[#123C32] text-white"
                          : "bg-white border-2 border-[#E2E8E2] text-[#525D57] group-hover:border-[#123C32]"
                      }`}
                    >
                      {item.step}
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#F7F8F4] text-[#525D57] border border-[#E2E8E2]">
                      {item.duration}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold transition-colors mb-2 ${
                      isSelected ? "text-[#123C32]" : "text-[#202724] group-hover:text-[#123C32]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#525D57] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Feature Box (Interactive Details) */}
        <div className="hidden lg:block p-8 rounded-2xl bg-[#F7F8F4] border border-[#E2E8E2] shadow-sm mb-12">
          <div className="flex items-start justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#E8A83E] uppercase tracking-wider bg-[#202724] px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Phase {SOLAR_JOURNEY[activeStep].step} Detailed Execution</span>
              </div>
              <h4 className="text-2xl font-bold text-[#202724]">
                {SOLAR_JOURNEY[activeStep].title}
              </h4>
              <p className="text-sm text-[#525D57] leading-relaxed">
                {SOLAR_JOURNEY[activeStep].details}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#E2E8E2] shrink-0 text-right space-y-1">
              <div className="text-xs text-[#525D57]">Estimated Timeline</div>
              <div className="text-lg font-bold text-[#123C32] flex items-center justify-end gap-1.5">
                <Clock className="w-4 h-4 text-[#E8A83E]" />
                <span>{SOLAR_JOURNEY[activeStep].duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {SOLAR_JOURNEY.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center font-bold text-sm shrink-0">
                {item.step}
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#202724]">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-[#123C32] bg-[#E9F0E9] px-2 py-0.5 rounded">
                    {item.duration}
                  </span>
                </div>
                <p className="text-xs text-[#525D57] leading-relaxed">
                  {item.description}
                </p>
                <p className="text-xs text-[#123C32] font-medium pt-1">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact#inquiry-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#123C32] text-white hover:bg-[#1A4D41] shadow-md transition-all"
          >
            <span>Start Step 1: Request Your Free Solar Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
