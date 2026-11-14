import { useState } from "react";
import { Link } from "react-router-dom";
import { Factory, ShieldCheck, Zap, Activity, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, Gauge, Cpu, TrendingDown, Wheat, FlaskConical, Warehouse } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import EnquiryForm from "../components/EnquiryForm";
import { IMAGES, FAQS } from "../data/companyData";

export default function IndustrialSolar() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const benefits = [
    {
      title: "Cost Reduction",
      desc: "Save significantly on energy costs with high-efficiency renewable solar power designed for heavy continuous loads.",
    },
    {
      title: "Energy Independence",
      desc: "Protect your operations from unpredictable electricity prices, grid peak surcharges, and annual tariff hikes.",
    },
    {
      title: "Sustainability Goals",
      desc: "Reduce your carbon footprint, fulfill Renewable Purchase Obligations (RPO), and comply with environmental regulations.",
    },
    {
      title: "Scalable Solutions",
      desc: "Systems engineered to scale from 100 kW to multi-megawatt facilities to match expanding factory capacity.",
    },
    {
      title: "Government Incentives",
      desc: "Leverage accelerated depreciation tax benefits (up to 40% in Year 1) and state open access concessions to lower investment costs.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Energy Assessment",
      desc: "Analyze your industry's energy consumption, contract demand, power factor, and solar potential.",
    },
    {
      step: "02",
      title: "Customized Design",
      desc: "Develop a solar system layout tailored to your specific electrical requirements, shed structures, or open land.",
    },
    {
      step: "03",
      title: "Professional Installation",
      desc: "Our certified engineering team ensures seamless, safe, and timely implementation without interrupting production.",
    },
    {
      step: "04",
      title: "Performance Monitoring",
      desc: "Advanced SCADA systems track string generation, ambient irradiance, and optimize power generation in real time.",
    },
    {
      step: "05",
      title: "Ongoing Support",
      desc: "Comprehensive maintenance services, robotic/pressurized cleaning, and rapid technician response for uninterrupted performance.",
    },
  ];

  const industriesWeServe = [
    {
      icon: Factory,
      title: "Manufacturing Units",
      desc: "Ensure continuous, reliable energy supply for continuous production lines, heavy motors, and fabrication machinery.",
    },
    {
      icon: Warehouse,
      title: "Warehouses & Logistics Centers",
      desc: "Optimize energy usage for large-scale cold chain facilities, automated fulfillment hubs, and distribution warehouses.",
    },
    {
      icon: Wheat,
      title: "Agriculture & Food Processing",
      desc: "Power heavy refrigeration, grain mills, sorting equipment, and cold storage units sustainably.",
    },
    {
      icon: FlaskConical,
      title: "Chemical & Pharma Plants",
      desc: "Enhance energy efficiency in high-demand environments with non-corrosive, robust mounting and in-house transformers.",
    },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative py-20 lg:py-28 bg-[#123C32] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.industrialHero}
            alt="Proton Power Infra real industrial solar arrays"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123C32] via-[#123C32]/95 to-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/40">
              <Factory className="w-3.5 h-3.5" />
              <span>Reliable Solar Solutions for Industries</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Power Your Industry with Solar Energy.
            </h1>

            <p className="text-base sm:text-lg text-[#E9F0E9]/85 leading-relaxed font-normal">
              At Proton Power Infra, we specialize in delivering robust industrial solar systems tailored to the unique needs of large-scale operations. Whether reducing operational overheads or securing captive power, our systems are built to perform reliably.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/enquiry?type=industrial"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg transition-all"
              >
                <span>Request Industrial Site Feasibility Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#industries-served"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                <span>Explore Industries Served</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Benefits of Industrial Solar Systems */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Benefits of Industrial Solar Systems"
            title="Why Switch to Solar for Your Industrial Operations?"
            description="Protect operational margins, comply with environmental standards, and insulate your factory from utility power cuts."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center font-bold mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#202724] mb-2">{b.title}</h3>
                  <p className="text-xs text-[#525D57] leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}

            <div className="p-6 rounded-2xl bg-[#123C32] text-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#E8A83E] uppercase tracking-wider block mb-1">
                  In-House Transformers
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Inverter Duty Solar Transformers
                </h3>
                <p className="text-xs text-[#E9F0E9]/80 leading-relaxed">
                  We manufacture our own Inverter Duty Solar Transformers, ensuring seamless step-up voltage synchronization and rapid on-site repair services.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  to="/power-transformers"
                  className="text-xs font-bold text-[#E8A83E] hover:underline flex items-center gap-1"
                >
                  <span>Learn about our Transformer Manufacturing →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Process: How We Deliver Efficient Industrial Solar */}
      <section className="py-20 bg-[#F7F8F4] border-y border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Deliver Efficient Industrial Solar Solutions"
            description="A disciplined 5-stage engineering workflow guaranteeing high performance ratios (PR) and compliance with electrical grid codes."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((st, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E2E8E2] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center font-bold text-sm mb-3">
                    {st.step}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#202724] mb-2">{st.title}</h3>
                  <p className="text-xs text-[#525D57] leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Industries We Serve */}
      <section id="industries-served" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Solar Solutions for Diverse Industrial Needs"
            description="Customized structural engineering and high-voltage electrical designs matching specific factory floor operations."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesWeServe.map((ind, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center mb-4">
                    <ind.icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-base font-bold text-[#202724] mb-2">{ind.title}</h3>
                  <p className="text-xs text-[#525D57] leading-relaxed mb-4">{ind.desc}</p>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <Link
                    to={`/enquiry?type=industrial&industry=${encodeURIComponent(ind.title)}`}
                    className="text-xs font-bold text-[#123C32] hover:text-[#E8A83E] flex items-center gap-1"
                  >
                    <span>Request Audit for {ind.title} →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-20 bg-[#F7F8F4] border-t border-[#E2E8E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industrial FAQs"
            title="Frequently Asked Questions by Industrial Plant Heads"
            description="Details on grid synchronization, transformer integration, and SCADA remote monitoring."
            align="center"
            className="mb-12"
          />

          <div className="space-y-4">
            {FAQS.industrial.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-xl border border-[#E2E8E2] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-[#E9F0E9] transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#202724]">{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#123C32] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#525D57] shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="p-5 text-xs sm:text-sm text-[#525D57] leading-relaxed bg-white border-t border-[#E2E8E2]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Consultation Form */}
      <section className="py-20 bg-[#E9F0E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industrial Project Feasibility"
            title="Consult with Our Industrial Solar EPC Team"
            description="Submit your manufacturing facility specifications for a detailed structural and electrical feasibility consultation."
            align="center"
            className="mb-10"
          />
          <EnquiryForm defaultCustomerType="industrial" />
        </div>
      </section>
    </div>
  );
}
