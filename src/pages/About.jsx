import { Link } from "react-router-dom";
import { ArrowRight, MapPin, CheckCircle2, Target, Eye } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { IMAGES, COMPANY_DETAILS } from "../data/companyData";

export default function About() {
  return (
    <div className="pt-20">
      {/* 1. Hero Banner */}
      <section className="relative py-20 lg:py-28 bg-[#202724] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroSecondary}
            alt="Proton Power Infra utility scale solar infrastructure"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#202724] via-[#202724]/95 to-[#123C32]/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold tracking-wider uppercase border border-[#E8A83E]/40">
              <span>Established 2012 • Indore Headquarters</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              A Decade of Clean Energy Leadership & Power Infrastructure
            </h1>

            <p className="text-base sm:text-lg text-[#E9F0E9]/85 leading-relaxed font-normal">
              Proton Power Infra has been at the forefront of India’s clean energy transition since 2012. Operating as both an Independent Power Producer (IPP) and a turnkey Solar EPC specialist with in-house power transformer manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Profile & Heritage */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Who We Are"
                title="Pioneering Renewable Energy with Engineering Precision"
                description="Founded in Indore, Madhya Pradesh, Proton Power Infra has grown into a nationwide clean energy provider. Over the past 12+ years, we have delivered 125+ MW of solar generation assets across public, private, and utility sectors."
              />

              <div className="space-y-4 text-sm text-[#525D57] leading-relaxed">
                <p>
                  Our operations encompass the entire energy lifecycle: from initial soil mechanics and 3D irradiance modeling to turnkey procurement, civil installation, high-voltage transformer manufacturing, and 24/7 cloud SCADA monitoring.
                </p>
                <p>
                  As an Independent Power Producer (IPP), we maintain active equity in operational solar plants, giving us the practical operational insight of an asset owner—not merely an installation contractor.
                </p>
              </div>

              <div className="pt-2 border-t border-[#E2E8E2]">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-extrabold text-[#123C32]">125+ MW</div>
                    <div className="text-xs text-[#525D57] mt-0.5">Installed Across India</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-[#123C32]">2012</div>
                    <div className="text-xs text-[#525D57] mt-0.5">Year Established</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#F7F8F4] bg-[#123C32]">
                <img
                  src={IMAGES.hero}
                  alt="Utility scale solar park installation by Proton Power Infra"
                  className="w-full h-[440px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision — Editorial Split Layout (No small identical cards) */}
      <section className="py-20 bg-[#F7F8F4] border-y border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Guiding Principles"
            title="Purpose-Driven Clean Energy Delivery"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white p-8 rounded-2xl border border-[#E2E8E2] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center">
                <Target className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-2xl font-bold text-[#202724]">Our Mission</h3>
              <p className="text-base text-[#525D57] leading-relaxed">
                "To make clean, green, and cost-effective solar energy accessible to every corner of India."
              </p>
              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                By delivering reliable engineering, transparent execution, and accessible financing structures, we help residential, commercial, and industrial facilities transition seamlessly to clean power.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#E2E8E2] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center">
                <Eye className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-2xl font-bold text-[#202724]">Our Vision</h3>
              <p className="text-base text-[#525D57] leading-relaxed">
                "To lead India’s renewable transition through technical brilliance, in-house transformer innovation, and dependable lifecycle asset management."
              </p>
              <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                We combine the agility of modern power electronics with the rigor of classical heavy-electrical engineering to power sustainable industrial growth across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Manufacturing & Operational Advantage */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E2E8E2]">
                <img
                  src={IMAGES.transformerSubstation}
                  alt="High-voltage transformer manufactured by Proton Power Infra"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="Technical Differentiator"
                title="In-House Power Transformer Manufacturing"
                description="Unlike conventional solar EPC contractors who outsource electrical transformation, Proton Power Infra manufactures its own Inverter Duty Solar Transformers."
              />

              <div className="space-y-3.5 text-sm text-[#525D57]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#123C32] shrink-0 mt-0.5" />
                  <span>
                    <strong>Inverter Duty Solar Transformers:</strong> Engineered to withstand non-sinusoidal waveforms and solar cyclic heating.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#123C32] shrink-0 mt-0.5" />
                  <span>
                    <strong>Step-Up & Step-Down Repairs:</strong> Precision core rewinding, vacuum oil filtration, and dielectric BDV enhancement.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#123C32] shrink-0 mt-0.5" />
                  <span>
                    <strong>Rapid Nationwide Response:</strong> Dedicated maintenance crews ready for on-site diagnostic inspections.
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/power-transformers"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#123C32] hover:text-[#E8A83E] transition-colors"
                >
                  <span>Explore transformer manufacturing & repair portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Company Offices & Operational Presence */}
      <section className="py-20 bg-[#E9F0E9] border-t border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pan-India Operational Footprint"
            title="Strategic Presence Across Central & Northern India"
            description="Our physical offices ensure fast on-site dispatch, local DISCOM liaisoning, and direct executive oversight."
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_DETAILS.offices.map((off, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E2E8E2] shadow-xs space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-[#202724]">{off.city}</h4>
                  <span className="text-[11px] font-bold text-[#123C32] bg-[#E9F0E9] px-2.5 py-0.5 rounded-full">
                    {off.role}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#525D57] pt-2">
                  <MapPin className="w-4 h-4 text-[#E8A83E] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{off.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection
        title="Partner with Proton Power Infra"
        description="Whether you are planning a utility-scale solar park or require custom power transformers, our team is ready to evaluate your techno-economic parameters."
      />
    </div>
  );
}
