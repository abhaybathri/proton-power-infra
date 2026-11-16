import { FileCheck, AlertCircle, Calendar } from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";

export default function TermsConditions() {
  return (
    <div className="pt-24 sm:pt-28 pb-10 bg-[#F7F8F4] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 pb-4 border-b border-[#E2E8E2]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C32]/10 text-[#123C32] text-xs font-bold uppercase tracking-wider mb-2 font-tech">
            <FileCheck className="w-3.5 h-3.5 text-[#E8A83E]" />
            <span>Terms of Engagement</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#202724] tracking-tight font-heading">
            Terms &amp; Conditions
          </h1>
          <div className="flex items-center gap-2 text-xs text-[#525D57] mt-1.5 font-tech">
            <Calendar className="w-3.5 h-3.5 text-[#E8A83E]" />
            <span>Effective Date: November 2026</span>
          </div>
        </div>

        {/* Corporate Terms Notice */}
        <div className="p-3.5 rounded-xl bg-[#E9F0E9] border border-[#123C32]/20 mb-6 flex items-start gap-2.5 text-xs text-[#123C32] leading-relaxed">
          <AlertCircle className="w-4 h-4 text-[#E8A83E] shrink-0 mt-0.5" />
          <div>
            <strong>Corporate Terms of Service:</strong> These terms govern general digital browsing, online quotation estimations, and preliminary engineering feasibility consultations for Proton Power Infrastructure Pvt. Ltd.
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E2E8E2] shadow-sm space-y-8 text-sm text-[#525D57] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202724]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing this website operated by {COMPANY_DETAILS.legalName} ("Proton Power Infra"), you agree to comply with and be bound by these Terms and Conditions. If you disagree with any portion, please discontinue website usage immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202724]">
              2. Website Usage & Feasibility Simulations
            </h2>
            <p>
              All online calculations, including the Solar Savings & ROI Estimator, provide indicative approximations based on standard solar insolation indices and prevailing utility tariffs. Actual generation yields, system capacity sizing, and financial payback are subject to formal on-site structural and electrical feasibility audits conducted by Proton Power Infra engineers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202724]">
              3. User Responsibilities & Accuracy of Information
            </h2>
            <p>
              When submitting inquiry forms or requesting engineering audits, you agree to provide authentic and accurate details regarding property ownership, electrical sanction load, and facility structural conditions. Submitting fraudulent or misleading contact details is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202724]">
              4. Intellectual Property Rights
            </h2>
            <p>
              All branding elements, logos, photographic imagery, technical diagrams, software code, and textual materials published on this portal are the intellectual property of {COMPANY_DETAILS.legalName} or licensed to it. Reproduction, modification, or redistribution without express written authorization is prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202724]">
              5. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Proton Power Infra shall not be held liable for indirect, incidental, or consequential damages arising from reliance on website content or temporary site unavailability. Formal commercial guarantees and performance warranties are defined exclusively in signed EPC service contracts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202724]">
              6. Third-Party Links & Map Integrations
            </h2>
            <p>
              Our website may contain hyperlinks or embedded maps leading to third-party services (such as Google Maps or WhatsApp). Proton Power Infra does not control and assumes no liability for the practices or policies of external sites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202724]">
              7. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any legal disputes arising out of the use of this website shall fall under the exclusive jurisdiction of the competent courts in Indore, Madhya Pradesh.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
