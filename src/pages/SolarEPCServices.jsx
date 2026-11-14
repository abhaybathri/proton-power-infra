import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, ShieldCheck, FileCheck, Layers, Wrench, Activity, Sun, Globe } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import EnquiryForm from "../components/EnquiryForm";
import { IMAGES, EPC_SERVICES_BREAKDOWN } from "../data/companyData";

export default function SolarEPCServices() {
  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative py-20 lg:py-28 bg-[#123C32] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Proton Power Infra utility scale solar park turnkey EPC"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123C32] via-[#123C32]/95 to-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/40">
              <Sun className="w-3.5 h-3.5" />
              <span>Experienced Solar Park Consultants & Turnkey EPC</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Turnkey Solar EPC & Solar Park Development Across India.
            </h1>

            <p className="text-base sm:text-lg text-[#E9F0E9]/85 leading-relaxed font-normal">
              With Proton Power Infra's expert EPC (Engineering, Procurement, and Construction) services, solar projects become more cost-effective, eco-friendly, and highly efficient. From design to installation, we ensure seamless execution that reduces dependence on conventional power sources while delivering reliable energy for the future.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/enquiry?type=industrial&requirement=Turnkey%20EPC"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg transition-all"
              >
                <span>Consult Our Solar EPC Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#epc-phases"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                <span>View Full EPC Scope</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Real Project Image Showcase */}
      <section className="py-16 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow border border-[#E2E8E2] h-64 group">
              <img
                src={IMAGES.heroSecondary}
                alt="Utility ground-mount solar park built by Proton Power Infra"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow border border-[#E2E8E2] h-64 group">
              <img
                src={IMAGES.industrialHero}
                alt="Solar panel tracker arrays installed by Proton Power Infra"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow border border-[#E2E8E2] h-64 group">
              <img
                src={IMAGES.transformerSubstation}
                alt="Substation transformer step up manufactured by Proton Power Infra"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed 4 Phases of Solar EPC Services */}
      <section id="epc-phases" className="py-20 lg:py-24 bg-[#F7F8F4] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Comprehensive EPC Scope"
            title="End-to-End Capabilities from Regulatory Approvals to SCADA O&M"
            description="Here is an in-depth look at the various turnkey services Proton Power Infra delivers across every phase of project development."
            align="center"
            className="mb-16"
          />

          <div className="space-y-12">
            {EPC_SERVICES_BREAKDOWN.map((phase, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E2E8E2] overflow-hidden shadow-sm p-6 sm:p-10"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
                    <div className={`lg:col-span-6 space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C32]/10 text-[#123C32] text-xs font-bold uppercase tracking-wider">
                        <span>Phase 0{idx + 1}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-[#202724]">
                        {phase.title}
                      </h3>

                      <p className="text-sm text-[#525D57] leading-relaxed">
                        {phase.desc}
                      </p>

                      <div className="space-y-2.5 pt-3 border-t border-gray-100">
                        {phase.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252A27]">
                            <CheckCircle2 className="w-4 h-4 text-[#123C32] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="rounded-xl overflow-hidden shadow border border-[#E2E8E2] h-72 sm:h-80 bg-[#202724]">
                        <img
                          src={phase.image}
                          alt={phase.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Consultation Form */}
      <section className="py-20 bg-[#E9F0E9] border-t border-[#E2E8E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Turnkey Consultation"
            title="Request a Techno-Economic Proposal for Your Solar Project"
            description="Discuss land feasibility, MNRE liaisoning, power purchase agreements (PPA), or turnkey EPC execution with our senior engineering team."
            align="center"
            className="mb-10"
          />
          <EnquiryForm defaultCustomerType="industrial" />
        </div>
      </section>
    </div>
  );
}
