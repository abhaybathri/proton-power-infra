import { useState, useRef } from "react";
import { Send, Upload, CheckCircle2, FileText, Sparkles, MapPin, Users, Award, ShieldCheck } from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";

export default function Careers() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    areaOfExpertise: "Solar Design & Engineering",
    experienceLevel: "3-5 years",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!validTypes.includes(selected.type)) {
      setFileError("Only PDF, DOC, or DOCX formats are supported.");
      setFile(null);
      return;
    }

    if (selected.size > 5 * 1024 * 1024) {
      setFileError("File size must be under 5 MB.");
      setFile(null);
      return;
    }

    setFileError("");
    setFile(selected);
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Enter a valid email address";
    }
    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.trim().replace(/\s+/g, ""))) {
      errs.mobileNumber = "Enter a valid 10-digit mobile number";
    }
    if (!formData.message.trim()) {
      errs.message = "Please share a brief message about your background";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-10 bg-[#F7F8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech">
            <Sparkles className="w-3.5 h-3.5 text-[#E8A83E]" />
            <span>Talent &amp; Leadership Outreach • Proton Power Infra</span>
          </div>

          <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#202724] tracking-tight">
            Careers &amp; Engineering Opportunities
          </h1>

          <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed max-w-2xl mx-auto">
            Our dynamic team represents the perfect blend of young talent and seasoned industry professionals. If you are passionate about clean energy, solar EPC, or power transformer manufacturing, connect directly with our leadership.
          </p>
        </div>

        {/* 3 Pillars of Our Team Culture (Compact) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-7 sm:mb-8">
          <div className="p-4 sm:p-4.5 rounded-xl bg-white border border-[#E2E8E2] shadow-2xs hover:border-[#123C32]/30 transition-all flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#202724] font-heading">Dynamic &amp; Collaborative</h3>
              <p className="text-[11px] text-[#525D57] leading-relaxed mt-0.5">
                Autonomy, site exposure, and direct mentorship from engineers with over a decade of clean energy experience.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-4.5 rounded-xl bg-white border border-[#E2E8E2] shadow-2xs hover:border-[#123C32]/30 transition-all flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#202724] font-heading">125+ MW Proven Impact</h3>
              <p className="text-[11px] text-[#525D57] leading-relaxed mt-0.5">
                Execute utility-scale solar parks, HT transformer substations, and industrial captive power plants across India.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-4.5 rounded-xl bg-white border border-[#E2E8E2] shadow-2xs hover:border-[#123C32]/30 transition-all flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#202724] font-heading">Pan-India Operations</h3>
              <p className="text-[11px] text-[#525D57] leading-relaxed mt-0.5">
                Headquartered in Indore with active operations in Dewas, Delhi NCR, and Bhopal executing high-value projects.
              </p>
            </div>
          </div>
        </div>

        {/* Direct Talent Message & Resume Submission Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#E2E8E2] shadow-lg space-y-4">
            <div className="border-b border-[#E2E8E2] pb-3">
              <h3 className="text-lg font-bold text-[#202724] font-heading">
                Submit Your Profile to Leadership
              </h3>
              <p className="text-xs text-[#525D57] mt-0.5">
                Share your background and domain expertise. Our executive team reviews every submission directly.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#E9F0E9] border border-[#123C32]/20 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#123C32] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 text-[#E8A83E]" />
                </div>
                <h4 className="text-lg font-bold text-[#202724] font-heading">
                  Profile Received Successfully!
                </h4>
                <p className="text-xs text-[#525D57] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your profile has been registered in our talent pipeline. Our technical management will contact you at <strong>{formData.email}</strong> when aligning on relevant opportunities.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFile(null);
                  }}
                  className="text-xs font-bold text-[#123C32] underline cursor-pointer font-tech"
                >
                  Submit another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#202724] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Verma"
                      className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName ? "border-red-400 focus:ring-red-200" : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
                      }`}
                    />
                    {errors.fullName && <p className="text-red-500 text-[11px] mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#202724] mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2 text-xs text-[#525D57] font-tech font-bold">+91</span>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="98765 43210"
                        maxLength={10}
                        className={`w-full pl-10 pr-3 py-2 rounded-lg border text-xs sm:text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.mobileNumber ? "border-red-400 focus:ring-red-200" : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
                        }`}
                      />
                    </div>
                    {errors.mobileNumber && <p className="text-red-500 text-[11px] mt-1">{errors.mobileNumber}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#202724] mb-1">
                      Official Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@example.com"
                      className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.email ? "border-red-400 focus:ring-red-200" : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#202724] mb-1">
                      Primary Domain of Expertise
                    </label>
                    <select
                      name="areaOfExpertise"
                      value={formData.areaOfExpertise}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-[#E2E8E2] text-xs sm:text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#123C32]/20 focus:border-[#123C32]"
                    >
                      <option value="Solar Design & Engineering">Solar PV Design &amp; 3D Engineering</option>
                      <option value="Turnkey Site Execution & EPC">Turnkey Site Execution &amp; Civil EPC</option>
                      <option value="Power Transformer Manufacturing & Testing">Power Transformer Mfg &amp; Testing</option>
                      <option value="SCADA & Plant Operations & Maintenance">SCADA &amp; Plant O&amp;M</option>
                      <option value="B2B Business Development & Liaisoning">B2B Development &amp; Liaisoning</option>
                      <option value="Electrical Testing & Quality Control">Electrical Testing &amp; QC</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202724] mb-1">
                    Experience Level
                  </label>
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-[#E2E8E2] text-xs sm:text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#123C32]/20 focus:border-[#123C32]"
                  >
                    <option value="Fresher / Graduate (0-1 Year)">Graduate / Fresher Engineer (0 - 1 Year)</option>
                    <option value="1-3 Years">Junior Professional (1 - 3 Years)</option>
                    <option value="3-5 Years">Mid-Level Engineer (3 - 5 Years)</option>
                    <option value="5-8 Years">Senior Lead / Manager (5 - 8 Years)</option>
                    <option value="8+ Years">Industry Veteran / Technical Lead (8+ Years)</option>
                  </select>
                </div>

                {/* Optional Resume Upload Dropzone */}
                <div>
                  <label className="block text-xs font-semibold text-[#202724] mb-1">
                    Attach Resume / CV (Optional - PDF or DOCX up to 5 MB)
                  </label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className={`border border-dashed rounded-xl p-3.5 text-center cursor-pointer transition-colors ${
                      fileError
                        ? "border-red-400 bg-red-50/50"
                        : file
                        ? "border-[#123C32] bg-[#E9F0E9]"
                        : "border-[#E2E8E2] hover:border-[#123C32]/40 bg-[#F7F8F4]"
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {file ? (
                      <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#123C32]">
                        <FileText className="w-4 h-4 text-[#E8A83E]" />
                        <span>Attached: {file.name} ({(file.size / 1024).toFixed(0)} KB)</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2 text-xs text-[#525D57]">
                        <Upload className="w-4 h-4 text-[#123C32]" />
                        <span className="font-medium text-[#202724]">Click to select resume document</span>
                        <span className="text-[10px] text-[#525D57]/70">(PDF/DOCX &lt; 5MB)</span>
                      </div>
                    )}
                  </div>
                  {fileError && <p className="text-red-500 text-[11px] mt-1">{fileError}</p>}
                </div>

                {/* Direct Message to Company Leadership */}
                <div>
                  <label className="block text-xs font-semibold text-[#202724] mb-1">
                    Professional Background Summary <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share details on your key projects, engineering tools (PVSyst, AutoCAD, SCADA), and technical domain..."
                    className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.message ? "border-red-400 focus:ring-red-200" : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-xs sm:text-sm font-bold bg-[#123C32] hover:bg-[#1A4D41] text-white shadow-md transition-all cursor-pointer disabled:opacity-75 font-tech"
                >
                  {isSubmitting ? (
                    <span>Registering Profile...</span>
                  ) : (
                    <>
                      <span>Submit Profile to Executive Leadership</span>
                      <Send className="w-4 h-4 text-[#E8A83E]" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#525D57] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#123C32]" />
                  <span>Confidential review directly by Proton Power Infra senior management.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
