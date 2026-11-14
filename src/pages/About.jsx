import { Link } from "react-router-dom";
import { ShieldCheck, Target, Eye, Compass, Award, CheckCircle2, ArrowRight, Zap, Users, Building, MapPin, Cpu } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { IMAGES, COMPANY_DETAILS, STATS } from "../data/companyData";

export default function About() {
  return (
    <div className="pt-20">
      {/* 1. Hero Banner */}
      <section className="relative py-20 lg:py-28 bg-[#202724] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroSecondary}
            alt="Proton Power Infra 125+ MW solar installation"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#202724] via-[#202724]/90 to-[#123C32]/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/40">
              <span>At the Forefront of Clean Energy Since 2012</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              125+ MW Installed Across India. Engineering with Precision, Passion & Purpose.
            </h1>

            <p className="text-base sm:text-lg text-[#E9F0E9]/80 leading-relaxed font-normal">
              Proton Power Infra is a leading solar panel installation company and power transformer manufacturer headquartered in Indore, with a nationwide footprint. Delivering world-class solar EPC and in-house inverter duty transformers.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Stats Highlights */}
      <section className="bg-white py-10 border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((st, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2]">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#123C32]">{st.value}</div>
                <div className="text-xs font-bold text-[#202724] mt-1">{st.label}</div>
                <div className="text-[11px] text-[#525D57]">{st.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Who We Are"
                title="A Nationwide Footprint in Renewable Energy & Power Infrastructure"
                description="Since 2012, Proton Power Infra has been at the forefront of India’s clean energy revolution. Headquartered in Indore with offices in Delhi, Dewas, and Bhopal, we deliver clean energy solutions with precision, passion, and purpose."
              />

              <p className="text-sm text-[#525D57] leading-relaxed">
                Operating both as an <strong>Independent Power Producer (IPP)</strong> and as turnkey <strong>EPC & O&M specialists</strong>, we maintain a proud presence across both public and private sector projects. Our dynamic team represents the perfect mix of energetic young talent and seasoned industry veterans.
              </p>

              <div className="p-4 rounded-xl bg-[#E9F0E9] border border-[#123C32]/20 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-[#123C32]">
                  <MapPin className="w-4 h-4 text-[#E8A83E]" />
                  <span>Pan-India Strategic Presence</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[#525D57] pt-1">
                  <div>• <strong>Indore (HQ):</strong> Scheme 78, Vijay Nagar</div>
                  <div>• <strong>Delhi:</strong> NCR Corporate Liaisoning</div>
                  <div>• <strong>Bhopal:</strong> Regional Operations</div>
                  <div>• <strong>Dewas:</strong> Industrial Manufacturing & Hub</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F7F8F4] bg-[#123C32]">
                <img
                  src={IMAGES.hero}
                  alt="Proton Power Infra real utility solar plant installation"
                  className="w-full h-[430px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123C32]/85 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center font-bold">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#123C32] uppercase">
                        125+ MW Installed Nationwide
                      </div>
                      <div className="text-[11px] text-[#525D57]">
                        Public & Private Sector Track Record Since 2012
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 bg-[#F7F8F4] border-y border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Guiding Principles"
            title="Mission, Vision & Engineering Standards"
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-[#E2E8E2] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center mb-5">
                <Target className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl font-bold text-[#202724] mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-[#525D57] leading-relaxed">
                "To make clean, green, and cost-effective solar energy accessible to every corner of India."
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-[#E2E8E2] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl font-bold text-[#202724] mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-[#525D57] leading-relaxed">
                To continue leading India’s renewable transition through technical brilliance with global standards, pioneering in-house power transformer manufacturing and dependable lifecycle asset management.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="bg-white p-8 rounded-2xl border border-[#E2E8E2] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center mb-5">
                <Compass className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-xl font-bold text-[#202724] mb-3">
                Dynamic Team
              </h3>
              <p className="text-sm text-[#525D57] leading-relaxed">
                The perfect mix of young talent and seasoned professionals ensuring technical brilliance, agile execution, and uncompromised compliance with global standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. In-House Power Transformer Manufacturing Advantage */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E2E8E2] shadow-lg">
                <img
                  src={IMAGES.transformerSubstation}
                  alt="Proton Power Infra transformer manufacturing"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="Integrated Manufacturing Capability"
                title="Your Trusted Power Transformer Manufacturer"
                description="A major differentiator for Proton Power Infra is our in-house manufacturing of Inverter Duty Solar Transformers and specialized repair services."
              />

              <div className="space-y-4">
                {[
                  {
                    title: "Inverter Duty Solar Transformer Manufacturing",
                    desc: "Efficient energy transformation engineered specifically for multi-megawatt solar power systems.",
                  },
                  {
                    title: "Step-Up Transformer Repair & Services",
                    desc: "Boost voltage and maintain smooth power flow across HT transmission lines.",
                  },
                  {
                    title: "Step-Down Transformer Repair & Services",
                    desc: "Lower voltage with minimal loss, ensuring optimal factory machine performance.",
                  },
                  {
                    title: "Custom Transformer Solutions",
                    desc: "Tailored to meet exact operational requirements with nationwide service support.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#123C32] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#202724]">{item.title}</h4>
                      <p className="text-xs text-[#525D57] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/power-transformers"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#123C32] hover:text-[#E8A83E]"
                >
                  <span>Explore full transformer manufacturing & repair portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <CTASection
        title="Discuss Your Solar or Transformer Project with Our Team"
        description="Connect with our technical consultants in Indore, Delhi, Bhopal, or Dewas for a complete project evaluation."
      />
    </div>
  );
}
