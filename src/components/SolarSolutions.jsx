import { Link } from "react-router-dom";
import { ArrowRight, Target } from "lucide-react";

// Home Assets Images
import residentialImg from "../assets/home-assets/residential-solar.jpg";
import commercialImg from "../assets/home-assets/comercial-ground-solar.jpg";
import industrialImg from "../assets/home-assets/industrial-solar.jpg";
import transformerImg from "../assets/home-assets/solar-transformer.jpg";
import turnkeyImg from "../assets/home-assets/turnkey-solar.jpg";

export default function SolarSolutions() {
  const solutions = [
    {
      id: "residential",
      slug: "residential-solar",
      title: "Residential Solar",
      capacity: "3 kW to 25 kW",
      target: "Villas, Independent Bungalows & Housing Societies",
      description: "Cut domestic electricity bills by generating your own clean power. Customized solar rooftop systems that lower bills, protect against tariff hikes, and increase property value.",
      cta: "Explore Residential Solar",
      image: residentialImg,
    },
    {
      id: "commercial",
      slug: "commercial-solar",
      title: "Commercial & Ground-Mounted Solar",
      capacity: "25 kW to 500+ kW",
      target: "Offices, Retail Plazas, Educational Campuses, Hospitals & Resorts",
      description: "Unlock the full potential of your commercial space with rooftop and ground-mounted solar solutions engineered for maximum sunlight harvesting and high ROI.",
      cta: "Explore Commercial & Ground-Mount",
      image: commercialImg,
    },
    {
      id: "industrial",
      slug: "industrial-solar",
      title: "Industrial Solar Systems",
      capacity: "100 kW to 10+ MW",
      target: "Manufacturing Plants, Cold Storage, Chemical Units & Warehouses",
      description: "Reliable, high-voltage industrial solar systems designed to meet severe energy loads, slash peak tariffs, comply with environmental regulations, and provide captive power security.",
      cta: "Explore Industrial Solar System",
      image: industrialImg,
    },
    {
      id: "transformers",
      slug: "power-transformers",
      title: "Power Transformers Manufacturer",
      capacity: "Customized KVA / MVA Ratings",
      target: "Solar Parks, Industrial Substations, Utilities & Commercial Campuses",
      description: "Proton Power Infra is a leading manufacturer of high-efficiency Inverter Duty Solar Transformers, with comprehensive step-up and step-down transformer repair and services.",
      cta: "Explore Power Transformers Manufacture",
      image: transformerImg,
    },
    {
      id: "epc-services",
      slug: "solar-epc-services",
      title: "Turnkey Solar EPC & O&M",
      capacity: "End-to-End Execution",
      target: "Solar Park Developers, Private IPPs, Government & Public Sector Tenders",
      description: "From MNRE approvals, PPA agreements, and 3D irradiance modeling to Tier-1 procurement, structural civil erection, and IoT SCADA remote monitoring.",
      cta: "Explore Turnkey Solar EPC & O&M",
      image: turnkeyImg,
    },
  ];

  return (
    <section id="solutions" className="py-16 md:py-20 lg:py-24 bg-[#F7F8F4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header as requested */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-3">
            <span>Our Solar & Transformer Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#202724] tracking-tight leading-tight font-heading">
            Complete Clean Energy Infrastructure Engineered Under One Roof
          </h2>

          <p className="text-base sm:text-lg text-[#525D57] leading-relaxed mt-4 font-normal">
            From private residential rooftops and commercial ground-mount arrays to utility-scale solar parks and custom in-house inverter duty transformers.
          </p>
        </div>

        {/* 5 Implementation-Focused Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((sol, index) => {
            // Give 4th & 5th cards balanced span when on desktop (2-column row at bottom)
            const isSpan2 = index >= 3;

            return (
              <div
                key={sol.id}
                className={`group bg-white rounded-2xl overflow-hidden border border-[#E2E8E2] shadow-2xs hover:shadow-xl hover:border-[#123C32]/30 transition-all duration-300 flex flex-col justify-between ${
                  isSpan2 ? "lg:col-span-1.5" : ""
                }`}
              >
                <div>
                  {/* Image with Capacity & Target Badge */}
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-[#202724]">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

                    {/* Capacity Badge */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-black tracking-wide uppercase bg-white/95 text-[#123C32] shadow-sm font-tech">
                        {sol.capacity}
                      </span>
                    </div>

                    {/* Target Scope Pill */}
                    <div className="absolute bottom-3 left-3.5 right-3.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#E8A83E] bg-[#202724]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 truncate">
                        <Target className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{sol.target}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#202724] group-hover:text-[#123C32] transition-colors mb-2.5 font-heading">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed">
                      {sol.description}
                    </p>
                  </div>
                </div>

                {/* Explore Action Button */}
                <div className="p-6 pt-0">
                  <Link
                    to={`/${sol.slug}`}
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#F7F8F4] group-hover:bg-[#123C32] text-[#123C32] group-hover:text-white border border-[#E2E8E2] group-hover:border-[#123C32] font-tech text-xs font-bold transition-all duration-300"
                  >
                    <span>{sol.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
