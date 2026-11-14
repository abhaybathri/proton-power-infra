import { useState, useRef } from "react";
import { Send, Upload, CheckCircle2, FileText, Sparkles, MapPin, Users, Award } from "lucide-react";


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
      setFileError("Only PDF, DOC, or DOCX resume formats are supported.");
      setFile(null);
      return;
    }

    if (selected.size > 5 * 1024 * 1024) {
      setFileError("Resume file size must be under 5 MB.");
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
      errs.email = "Please enter a valid email address";
    }
    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.trim().replace(/\s+/g, ""))) {
      errs.mobileNumber = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.message.trim()) {
      errs.message = "Please share a brief message about your background and interest";
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
    }, 900);
  };

  return (
    <div className="pt-24 pb-20 bg-[#F7F8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E8A83E]" />
            <span>Connect with Proton Power Infra Leadership</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202724] tracking-tight">
            Careers & Talent Outreach
          </h1>

          <p className="text-sm sm:text-base text-[#525D57] leading-relaxed">
            Our dynamic team represents the perfect blend of young talent and seasoned industry professionals. If you are passionate about clean energy, solar EPC, or power transformer manufacturing, reach out to us directly.
          </p>
        </div>

        {/* 3 Pillars of Our Team Culture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8E2] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center mb-4">
              <Users className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-base font-bold text-[#202724] mb-2">Dynamic & Collaborative</h3>
            <p className="text-xs text-[#525D57] leading-relaxed">
              We empower our team with autonomy, hands-on site exposure, and direct mentorship from industry leaders with over a decade of clean energy experience.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E2E8E2] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center mb-4">
              <Award className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-base font-bold text-[#202724] mb-2">125+ MW Proven Impact</h3>
            <p className="text-xs text-[#525D57] leading-relaxed">
              Work on utility-scale solar parks, HT transformer substations, and industrial captive power plants across India that make a tangible difference.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E2E8E2] shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 stroke-[2]" />
            </div>
            <h3 className="text-base font-bold text-[#202724] mb-2">Pan-India Opportunities</h3>
            <p className="text-xs text-[#525D57] leading-relaxed">
              With our central headquarters in Indore and active regional offices in Delhi, Dewas, and Bhopal, we execute high-value projects nationwide.
            </p>
          </div>
        </div>

        {/* Direct Talent Message & Resume Submission Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E2E8E2] shadow-xl space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-2xl font-bold text-[#202724]">
                Send Your Profile to Our Team
              </h3>
              <p className="text-xs text-[#525D57] mt-1">
                Tell us about your background, expertise, and how you would like to contribute. Our management reviews submissions directly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#E9F0E9] border border-[#123C32]/20 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#123C32] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#E8A83E]" />
                </div>
                <h4 className="text-xl font-bold text-[#202724]">
                  Profile Received Successfully!
                </h4>
                <p className="text-xs text-[#525D57] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your message and credentials have been forwarded to Proton Power Infra's leadership team. We will contact you at <strong>{formData.email}</strong> when aligning on relevant opportunities.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFile(null);
                  }}
                  className="text-xs font-bold text-[#123C32] underline cursor-pointer"
                >
                  Submit another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.fullName ? "border-red-400" : "border-[#E2E8E2] focus:ring-[#123C32]/20"
                      }`}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#202724] mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="98765 43210"
                      maxLength={10}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.mobileNumber ? "border-red-400" : "border-[#E2E8E2] focus:ring-[#123C32]/20"
                      }`}
                    />
                    {errors.mobileNumber && <p className="text-red-500 text-xs mt-1">{errors.mobileNumber}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#202724] mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.email ? "border-red-400" : "border-[#E2E8E2] focus:ring-[#123C32]/20"
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#202724] mb-1">
                      Primary Domain of Expertise
                    </label>
                    <select
                      name="areaOfExpertise"
                      value={formData.areaOfExpertise}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8E2] text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none"
                    >
                      <option value="Solar Design & Engineering">Solar PV Design & 3D Engineering</option>
                      <option value="Turnkey Site Execution & EPC">Turnkey Site Execution & Civil EPC</option>
                      <option value="Power Transformer Manufacturing & Testing">Power Transformer Manufacturing & Testing</option>
                      <option value="SCADA & Plant Operations & Maintenance">SCADA & Plant Operations & Maintenance (O&M)</option>
                      <option value="B2B Business Development & Liaisoning">B2B Business Development & DISCOM Liaisoning</option>
                      <option value="Electrical Testing & Quality Control">Electrical Testing & Quality Control</option>
                      <option value="Finance, Supply Chain & Administration">Finance, Supply Chain & Administration</option>
                      <option value="Other / Multi-disciplinary">Other / Multi-disciplinary</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202724] mb-1">
                    Total Professional Experience Level
                  </label>
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8E2] text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none"
                  >
                    <option value="Fresher / Graduate (0-1 Year)">Fresher / Recent Engineering Graduate (0 - 1 Year)</option>
                    <option value="1-3 Years">Junior Professional (1 - 3 Years)</option>
                    <option value="3-5 Years">Mid-Level Engineer (3 - 5 Years)</option>
                    <option value="5-8 Years">Senior Lead / Manager (5 - 8 Years)</option>
                    <option value="8+ Years">Industry Veteran / Technical Lead (8+ Years)</option>
                  </select>
                </div>

                {/* Optional Resume Upload Dropzone */}
                <div>
                  <label className="block text-xs font-semibold text-[#202724] mb-1">
                    Attach Resume / CV (Optional - PDF, DOC, DOCX up to 5 MB)
                  </label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-colors ${
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
                        <FileText className="w-5 h-5 text-[#E8A83E]" />
                        <span>Attached: {file.name} ({(file.size / 1024).toFixed(0)} KB)</span>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <Upload className="w-6 h-6 text-[#123C32] mx-auto" />
                        <div className="text-xs font-semibold text-[#202724]">
                          Click to attach resume document
                        </div>
                        <div className="text-[11px] text-[#525D57]">
                          PDF, DOC, or DOCX up to 5 MB
                        </div>
                      </div>
                    )}
                  </div>
                  {fileError && <p className="text-red-500 text-xs mt-1">{fileError}</p>}
                </div>

                {/* Direct Message to Company Leadership */}
                <div>
                  <label className="block text-xs font-semibold text-[#202724] mb-1">
                    Your Message / Professional Introduction <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your background, key projects you've worked on, tools you use (AutoCAD, PVSyst, Helioscope, SCADA), and how you see yourself contributing at Proton Power Infra..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 ${
                      errors.message ? "border-red-400" : "border-[#E2E8E2] focus:ring-[#123C32]/20"
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-sm font-bold bg-[#123C32] hover:bg-[#1A4D41] text-white shadow-md transition-all cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message to Management...</span>
                  ) : (
                    <>
                      <span>Transmit Message to Company Leadership</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
