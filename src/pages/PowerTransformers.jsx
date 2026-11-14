import { Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import EnquiryForm from "../components/EnquiryForm";
import { IMAGES, TRANSFORMER_SERVICES } from "../data/companyData";

export default function PowerTransformers() {
  return (
    <div className="pt-20">
      {/* 1. Hero */}
      <section className="relative py-20 lg:py-28 bg-[#202724] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.transformerSubstation}
            alt="Power Transformer Substation manufactured and serviced by Proton Power Infra"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#202724] via-[#202724]/95 to-[#123C32]/75"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/40">
              <Cpu className="w-3.5 h-3.5" />
              <span>In-House Manufacturing & Specialized Repair</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              High-Performance Power Transformers Built for Solar & Industry
            </h1>

            <p className="text-base sm:text-lg text-[#E9F0E9]/85 leading-relaxed font-normal">
              Unlock the power of reliable energy transmission with Proton Power Infra. We are the leading manufacturer of Inverter Duty Solar Transformers and specialists in step-up and step-down transformer repair and services across India.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#transformer-enquiry"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-md transition-all"
              >
                <span>Request Transformer Quote or Service</span>
              </a>
              <a
                href="#transformer-services"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                <span>Explore Transformer Services</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Real Transformer Gallery & Overview */}
      <section className="py-20 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Your Trusted Transformer Partner"
                title="Engineered for Severe Solar Duty Cycles & Industrial Demands"
                description="Solar transformers endure unique thermal stresses, non-linear harmonic loads, and fluctuating power cycles. Our transformers are precision-engineered to deliver maximum efficiency and zero-downtime reliability."
              />

              <p className="text-sm text-[#525D57] leading-relaxed">
                Whether manufacturing customized multi-winding inverter duty transformers for grid-tied solar parks or providing rapid turnaround step-up/step-down repair, coil rewinding, and dielectric oil testing, Proton Power Infra ensures your power transmission remains uninterrupted.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2]">
                  <div className="text-xl font-bold text-[#123C32]">Inverter Duty</div>
                  <div className="text-xs text-[#525D57] mt-1">Solar PV Substation Design</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2]">
                  <div className="text-xl font-bold text-[#123C32]">Pan-India Service</div>
                  <div className="text-xs text-[#525D57] mt-1">Rapid On-Site Mobilization</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-xs border border-[#E2E8E2] h-60">
                <img
                  src={IMAGES.transformerSubstation}
                  alt="High-voltage step-up transformer substation"
                  className="w-full h-full object-cover hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xs border border-[#E2E8E2] h-60">
                <img
                  src={IMAGES.transformerUnit1}
                  alt="Inverter duty transformer core and winding assembly"
                  className="w-full h-full object-cover hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xs border border-[#E2E8E2] h-60">
                <img
                  src={IMAGES.transformerUnit2}
                  alt="Step-up transformer inspection and testing"
                  className="w-full h-full object-cover hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xs border border-[#E2E8E2] h-60">
                <img
                  src={IMAGES.transformerUnit3}
                  alt="Step-down transformer oil filtration and servicing"
                  className="w-full h-full object-cover hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Services Showcase */}
      <section id="transformer-services" className="py-20 lg:py-24 bg-[#F7F8F4] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Transformer Offerings"
            title="Comprehensive Manufacturing & Repair Capabilities"
            description="Explore our specialized transformer engineering solutions tailored to multi-megawatt solar plants and industrial power systems."
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRANSFORMER_SERVICES.map((serv, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#E2E8E2] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 overflow-hidden bg-[#202724]">
                    <img
                      src={serv.image}
                      alt={serv.title}
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="text-xl font-bold text-[#202724]">
                      {serv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                      {serv.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      {serv.specs.map((sp, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 text-xs text-[#252A27]">
                          <CheckCircle2 className="w-4 h-4 text-[#123C32] shrink-0 mt-0.5" />
                          <span>{sp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="#transformer-enquiry"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123C32] hover:text-[#E8A83E] transition-colors"
                  >
                    <span>Request Quotation for {serv.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Consultation Form */}
      <section id="transformer-enquiry" className="py-20 bg-white border-t border-[#E2E8E2] scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Direct Transformer Consultation"
            title="Request a Custom Transformer Quote or Maintenance Dispatch"
            description="Our engineering works in Dewas and headquarters in Indore provide customized transformer specifications and rapid maintenance response."
            align="center"
            className="mb-12"
          />

          <EnquiryForm defaultCustomerType="industrial" />
        </div>
      </section>

      {/* 5. Footer CTA */}
      <CTASection
        title="Need Inverter Duty Transformers or Rapid Repair?"
        description="Connect directly with our transformer engineering specialists for immediate quotation and technical specifications."
      />
    </div>
  );
}
