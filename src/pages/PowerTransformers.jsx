import { Link } from "react-router-dom";
import { Cpu, ShieldCheck, Wrench, CheckCircle2, ArrowRight, Zap, RefreshCw, Layers, Phone } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import EnquiryForm from "../components/EnquiryForm";
import { IMAGES, TRANSFORMER_SERVICES, COMPANY_DETAILS } from "../data/companyData";

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
              Power Up Your Energy Efficiency with High-Performance Transformers.
            </h1>

            <p className="text-base sm:text-lg text-[#E9F0E9]/85 leading-relaxed font-normal">
              Unlock the power of reliable and efficient energy solutions with Proton Power Infra—the leading manufacturer of Inverter Duty Solar Transformers and specialists in step-up and step-down transformer repair and services across India.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/enquiry?type=industrial&requirement=Power%20Transformers"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg transition-all"
              >
                <span>Request Transformer Quote / Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#transformer-services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                <span>Explore Transformer Solutions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Real Transformer Gallery & Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Your Trusted Transformer Partner"
                title="Engineered for Severe Solar Duty Cycles & Industrial Demands"
                description="Solar transformers endure unique thermal stresses, non-linear harmonic loads, and fluctuating power output. Our transformers are precision-engineered to deliver maximum efficiency and zero-downtime reliability."
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
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E2E8E2] h-60">
                <img
                  src={IMAGES.transformerSubstation}
                  alt="High-voltage step-up transformer substation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E2E8E2] h-60">
                <img
                  src={IMAGES.transformerUnit1}
                  alt="Inverter duty transformer core and winding assembly"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E2E8E2] h-60">
                <img
                  src={IMAGES.transformerUnit2}
                  alt="Industrial power transformer testing unit"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E2E8E2] h-60">
                <img
                  src={IMAGES.transformerUnit3}
                  alt="Step-down transformer maintenance and testing"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* 3. Services We Offer */}
          <div id="transformer-services" className="scroll-mt-24 pt-8 border-t border-[#E2E8E2]">
            <SectionHeading
              eyebrow="Services We Offer"
              title="Comprehensive Transformer Manufacturing & Repair Services"
              description="From ground-up fabrication to on-site testing, oil filtration, and emergency rewinding."
              align="center"
              className="mb-14"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TRANSFORMER_SERVICES.map((srv, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E2E8E2] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="h-56 overflow-hidden bg-[#202724]">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#202724] group-hover:text-[#123C32] transition-colors mb-2">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed mb-4">
                        {srv.desc}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-gray-100">
                        {srv.specs.map((sp, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2.5 text-xs text-[#252A27]">
                            <CheckCircle2 className="w-4 h-4 text-[#123C32] shrink-0 mt-0.5" />
                            <span>{sp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E2E8E2]">
                      <Link
                        to={`/enquiry?type=industrial&requirement=${encodeURIComponent(srv.title)}`}
                        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-xs font-bold bg-[#F7F8F4] group-hover:bg-[#123C32] text-[#123C32] group-hover:text-white transition-all"
                      >
                        <span>Request Specs & Pricing</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Proton Power Infra for Transformers? */}
      <section className="py-20 bg-[#E9F0E9] border-y border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Proton Power Infra"
            title="The Advantage of an Integrated Transformer Manufacturer"
            description="Unlike commercial aggregators, our hands-on manufacturing expertise guarantees engineering precision and dependable lifecycle support."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Trusted Manufacturer", desc: "Years of experience delivering cutting-edge transformer solutions across solar and industrial sectors." },
              { title: "Premium Quality", desc: "Robust and reliable designs built to last with high-grade CRGO laminations and pure electrolytic copper." },
              { title: "Expert Repairs", desc: "Comprehensive step-up and step-down transformer repair, vacuum oil filling, and rewinding to keep your business running." },
              { title: "Customized Solutions", desc: "Tailored transformer designs matching exact client impedances, vector groups, and ambient temperature ratings." },
              { title: "Nationwide Support", desc: "Comprehensive technical assistance and rapid field engineer mobilization whenever you need it." },
            ].map((pillar, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-[#E2E8E2] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center font-bold mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-[#202724] mb-2">{pillar.title}</h4>
                  <p className="text-xs text-[#525D57] leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Consultation Form */}
      <section className="py-20 bg-[#F7F8F4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Transformer Inquiries"
            title="Discuss Your Transformer Requirement or Repair Schedule"
            description="Speak directly with our transformer design engineers for new equipment manufacturing or on-site testing and repair."
            align="center"
            className="mb-10"
          />
          <EnquiryForm defaultCustomerType="industrial" />
        </div>
      </section>
    </div>
  );
}
