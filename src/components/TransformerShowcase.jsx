import { Link } from "react-router-dom";
import { ArrowRight, Cpu, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { IMAGES } from "../data/companyData";

export default function TransformerShowcase() {
  const capabilities = [
    {
      title: "Inverter Duty Solar Transformers",
      description: "Engineered specifically to withstand high harmonics, fluctuating solar generation cycles, and multiple central inverter inputs with optimal thermal resilience.",
    },
    {
      title: "Step-Up Transformer Repair & Services",
      description: "Boosting low-voltage PV inverter output to high-tension transmission grid levels (11kV, 33kV, up to 132kV) with minimal core and copper losses.",
    },
    {
      title: "Step-Down Transformer Repair & Services",
      description: "Stepping down transmission voltages to factory machinery levels with maximum efficiency, coil rewinding, and dielectric breakdown testing.",
    },
    {
      title: "Custom Transformer Solutions",
      description: "Tailored KVA and MVA configurations designed to meet specific industrial utility parameters, ONAN/ONAF cooling, and nationwide maintenance support.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E2E8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="In-House Manufacturing"
              title="High-Performance Power Transformers Engineered for Solar & Industry"
              description="Solar transformers endure unique thermal stresses, non-linear harmonic loads, and fluctuating power cycles. Proton Power Infra manufactures and services rugged Inverter Duty Solar Transformers that ensure zero-downtime transmission."
            />

            <div className="space-y-4 pt-2">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#123C32]/10 text-[#123C32] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#202724] mb-0.5">
                      {cap.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/power-transformers"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-[#123C32] text-white hover:bg-[#1A4D41] transition-all shadow-xs"
              >
                <span>View Full Transformer Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/enquiry?type=industrial&requirement=Power%20Transformers"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#123C32] hover:text-[#E8A83E] transition-colors"
              >
                <span>Request Repair or Custom Unit Quote</span>
              </Link>
            </div>
          </div>

          {/* Image Split Column */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#E2E8E2] h-64 lg:h-72">
                <img
                  src={IMAGES.transformerUnit1}
                  alt="Inverter duty solar transformer core assembly at Proton Power Infra"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#E2E8E2] h-64 lg:h-72 mt-6">
                <img
                  src={IMAGES.transformerUnit2}
                  alt="Step-up power transformer testing and inspection at Proton Power Infra"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-4 p-4 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] text-xs text-[#525D57] flex items-center gap-3">
              <Cpu className="w-5 h-5 text-[#123C32] shrink-0" />
              <span>
                Manufactured & Serviced under strict ISO and Central Electricity Authority (CEA) quality benchmarks.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
