import { Shield, AlertCircle, Calendar } from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 sm:pt-28 pb-10 bg-[#F7F8F4] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 pb-4 border-b border-[#E2E8E2]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C32]/10 text-[#123C32] text-xs font-bold uppercase tracking-wider mb-2 font-tech">
            <Shield className="w-3.5 h-3.5 text-[#E8A83E]" />
            <span>Corporate Governance</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#202724] tracking-tight font-heading">
            Privacy Policy
          </h1>
          <div className="flex items-center gap-2 text-xs text-[#525D57] mt-1.5 font-tech">
            <Calendar className="w-3.5 h-3.5 text-[#E8A83E]" />
            <span>Effective Date: November 2026</span>
          </div>
        </div>

        {/* Corporate Data Governance Notice */}
        <div className="p-3.5 rounded-xl bg-[#E9F0E9] border border-[#123C32]/20 mb-6 flex items-start gap-2.5 text-xs text-[#123C32] leading-relaxed">
          <AlertCircle className="w-4 h-4 text-[#E8A83E] shrink-0 mt-0.5" />
          <div>
            <strong>Corporate Data Privacy Assurance:</strong> This policy governs data handling across all digital channels and consultation forms for Proton Power Infrastructure Pvt. Ltd. Your facility and contact details are kept strictly confidential.
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E2E8E2] shadow-sm space-y-8 text-sm text-[#525D57] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202724]">
              1. Overview and Scope
            </h2>
            <p>
              This Privacy Policy describes how {COMPANY_DETAILS.legalName} ("Proton Power Infra", "we", "our", or "us") collects, utilizes, and protects information submitted by users of our official corporate website and digital enquiry channels. We are dedicated to maintaining the confidentiality of your personal and industrial facility data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202724]">
              2. Information We Collect
            </h2>
            <p>
              When you submit a consultation request, download technical whitepapers, or apply for open career positions, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Contact Particulars:</strong> Full name, telephone/mobile number, email address, and residential/commercial mailing address.</li>
              <li><strong>Facility Specifications:</strong> Property classification, available rooftop surface area, monthly electricity billing averages, and single-line diagram details.</li>
              <li><strong>Employment Application Data:</strong> Resumes, employment history, qualifications, and references submitted through our career portal.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202724]">
              3. Purpose of Processing
            </h2>
            <p>
              We process information strictly for legitimate commercial purposes, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Generating accurate solar irradiance modeling, structural site audits, and payback simulations.</li>
              <li>Communicating with you regarding DISCOM net-metering liaisoning and technical site surveys.</li>
              <li>Evaluating qualifications for prospective employment opportunities.</li>
              <li>Complying with statutory reporting requirements under applicable Indian laws.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202724]">
              4. Data Disclosure and Confidentiality
            </h2>
            <p>
              Proton Power Infra does not sell, lease, or monetize customer contact records. Technical specifications may be shared solely with authorized engineering subcontractors, DISCOM utility bodies for net-meter clearance, and state renewable energy nodal agencies under non-disclosure obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202724]">
              5. Data Security Measures
            </h2>
            <p>
              We implement industry-standard physical, electronic, and procedural safeguards to preserve confidentiality and prevent unauthorized access, alteration, or disclosure of submitted information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#202724]">
              6. Contact for Privacy Inquiries
            </h2>
            <p>
              For questions concerning this policy or to request amendment or deletion of your contact records, please write to:
            </p>
            <div className="p-4 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] text-xs space-y-1">
              <div className="font-bold text-[#202724]">{COMPANY_DETAILS.legalName}</div>
              <div>Attn: Data Protection Officer</div>
              <div>Email: {COMPANY_DETAILS.email}</div>
              <div>Address: {COMPANY_DETAILS.address.full}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
