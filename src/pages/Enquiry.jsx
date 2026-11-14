import { useSearchParams } from "react-router-dom";
import { ShieldCheck, Phone, Mail, MapPin, CheckCircle2, Clock, SunMedium, MessageSquare } from "lucide-react";
import EnquiryForm from "../components/EnquiryForm";
import { COMPANY_DETAILS } from "../data/companyData";

export default function Enquiry() {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get("type") || "residential";
  const defaultCap = searchParams.get("capacity") || "";

  return (
    <div className="pt-24 pb-20 bg-[#F7F8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider">
            <SunMedium className="w-3.5 h-3.5 text-[#E8A83E]" />
            <span>Dedicated Consultation Portal</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202724] tracking-tight">
            Request Your Tailored Solar Feasibility Study
          </h1>

          <p className="text-sm sm:text-base text-[#525D57] leading-relaxed">
            Connect directly with Proton Power Infra's senior photovoltaic engineering team. We deliver accurate yield projections, structural evaluations, and clear payback models.
          </p>
        </div>

        {/* Two-Column Conversion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (Benefits & Direct Contact) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Consultation Benefits Box */}
            <div className="bg-[#123C32] text-white rounded-2xl p-7 lg:p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#E8A83E]/10 rounded-full blur-2xl"></div>

              <div>
                <span className="text-xs font-bold tracking-wider text-[#E8A83E] uppercase block mb-1">
                  What You Receive
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Complimentary Site Audit & Engineering Report
                </h3>
              </div>

              <div className="space-y-4 text-sm text-[#E9F0E9]/85">
                {[
                  "Detailed 3D shadow simulation & usable rooftop area audit",
                  "Estimated annual energy generation (kWh) using PVSyst models",
                  "Financial payback timeline, monthly bill reduction & ROI projection",
                  "DISCOM net-metering regulatory roadmap & technical compliance check",
                  "Transparent hardware bill of materials (Tier-1 modules & inverters)",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E8A83E] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-[#E9F0E9]/70 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E8A83E]" />
                <span>Zero obligation. 100% engineering-backed consultation.</span>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8E2] shadow-sm space-y-4">
              <h4 className="text-sm font-bold text-[#202724] uppercase tracking-wider text-[#123C32]">
                Prefer to Speak Immediately?
              </h4>

              <div className="space-y-3 text-xs text-[#525D57]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E9F0E9] text-[#123C32] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#123C32]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#202724]">Direct Calling</div>
                    <div className="space-x-2">
                      <a href={`tel:${COMPANY_DETAILS.phones[0].raw}`} className="text-[#123C32] hover:underline font-bold">
                        {COMPANY_DETAILS.phones[0].display}
                      </a>
                      <span>/</span>
                      <a href={`tel:${COMPANY_DETAILS.phones[1].raw}`} className="text-[#123C32] hover:underline font-bold">
                        {COMPANY_DETAILS.phones[1].display}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E9F0E9] text-[#123C32] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#123C32]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#202724]">Official Email</div>
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-[#123C32] hover:underline font-medium">
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E9F0E9] text-[#123C32] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#123C32]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#202724]">Corporate Office</div>
                    <address className="not-italic leading-relaxed text-[#525D57]">
                      {COMPANY_DETAILS.address.full}
                    </address>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E9F0E9] text-[#123C32] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#123C32]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#202724]">Business Hours</div>
                    <div>{COMPANY_DETAILS.workingHours}</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-bold shadow hover:bg-[#20ba59] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with an Engineer on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="lg:col-span-7">
            <EnquiryForm defaultCustomerType={defaultType} defaultCapacity={defaultCap} />
          </div>
        </div>
      </div>
    </div>
  );
}
