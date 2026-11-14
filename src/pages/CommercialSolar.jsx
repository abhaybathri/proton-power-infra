import { useState } from "react";
import { Link } from "react-router-dom";
import { Building2, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, TrendingUp, ShieldCheck, Sun, Layers, DollarSign } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import EnquiryForm from "../components/EnquiryForm";
import { IMAGES, FAQS } from "../data/companyData";

export default function CommercialSolar() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const groundMountBenefits = [
    {
      title: "Efficient Energy Harvesting",
      desc: "Optimally positioned panels with custom tilt angles for maximum solar radiation exposure throughout the year.",
    },
    {
      title: "Infinite Scalability",
      desc: "Flexible, modular configurations designed to meet commercial energy demands of any scale—from 50 kW to multi-megawatt.",
    },
    {
      title: "Severe Weather Durability",
      desc: "Constructed with premium hot-dip galvanized steel framing and certified wind-load ratings to withstand harsh outdoor conditions.",
    },
    {
      title: "Minimal Maintenance",
      desc: "Easy ground accessibility for mechanized cleaning and testing, ensuring high long-term plant performance ratios (PR).",
    },
  ];

  const whyChooseUs = [
    {
      title: "Tailored Solutions",
      desc: "We customize each rooftop and ground-mounted project to match your facility's exact load curve and available land.",
    },
    {
      title: "Expert Team",
      desc: "Our experienced power engineers and certified technicians ensure precise, zero-downtime installation and synchronization.",
    },
    {
      title: "Cost-Effective High ROI",
      desc: "Reduce electricity bills significantly and maximize ROI with accelerated depreciation (Section 32) tax benefits.",
    },
    {
      title: "Sustainability Commitment",
      desc: "Help your business achieve ESG targets and contribute to a greener future by harnessing renewable energy.",
    },
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative py-20 lg:py-28 bg-[#202724] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroSecondary}
            alt="Commercial ground mounted solar park by Proton Power Infra"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#202724] via-[#202724]/95 to-[#123C32]/75"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/40">
              <Building2 className="w-3.5 h-3.5" />
              <span>Commercial & Ground-Mounted Solar Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Power Your Business with Solar Energy.
            </h1>

            <p className="text-base sm:text-lg text-[#E9F0E9]/85 leading-relaxed font-normal">
              Unlock the potential of solar energy for your commercial space with Proton Power Infra—Indore's trusted partner in sustainable energy solutions. Designed to maximize energy efficiency while significantly reducing your operational costs.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/enquiry?type=commercial"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg transition-all"
              >
                <span>Request Commercial Solar Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#ground-mount-section"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                <span>View Ground-Mounted Projects</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ground-Mounted Solar Projects Section */}
      <section id="ground-mount-section" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Specialized Commercial Capability"
                title="Ground-Mounted Solar Projects"
                description="Ground-mounted solar projects are an excellent choice for commercial facilities with ample outdoor space. Our expert team designs and installs robust solar arrays that capture maximum sunlight, delivering high energy output and reliability."
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {groundMountBenefits.map((b, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2]">
                    <CheckCircle2 className="w-5 h-5 text-[#123C32] mb-2" />
                    <h4 className="text-sm font-bold text-[#202724] mb-1">{b.title}</h4>
                    <p className="text-xs text-[#525D57] leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#F7F8F4] bg-[#202724]">
                <img
                  src={IMAGES.heroSecondary}
                  alt="Real ground-mounted commercial solar park by Proton Power Infra"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Proton Power Infra for Commercial Solar */}
      <section className="py-20 bg-[#E9F0E9] border-y border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Proton Power Infra?"
            title="The Commercial Clean Energy Partner Businesses Rely On"
            description="Empowering corporate offices, hospitals, resorts, universities, and commercial complexes across India."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((w, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E2E8E2] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center font-bold mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#202724] mb-2">{w.title}</h3>
                  <p className="text-xs text-[#525D57] leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Commercial FAQs"
            title="Common Questions from Commercial Clients"
            description="Key clarifications on ground-mount feasibility, net-metering, and financial payback."
            align="center"
            className="mb-12"
          />

          <div className="space-y-4">
            {FAQS.commercial.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-xl border border-[#E2E8E2] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 bg-[#F7F8F4] hover:bg-[#E9F0E9] transition-colors cursor-pointer"
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

      {/* 5. Consultation Form */}
      <section className="py-20 bg-[#F7F8F4] border-t border-[#E2E8E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Commercial Feasibility Proposal"
            title="Request a Commercial Solar Feasibility Study"
            description="Our engineers will assess your electricity sanction load, roof or open acreage, and deliver an accurate techno-economic report."
            align="center"
            className="mb-10"
          />
          <EnquiryForm defaultCustomerType="commercial" />
        </div>
      </section>
    </div>
  );
}
