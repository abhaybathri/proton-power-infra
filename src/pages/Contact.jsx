import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Building,
  ShieldCheck,
  Globe,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Solar Energy Project Consultation",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim().replace(/\s+/g, ""))) {
      errs.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errs.message = "Message cannot be empty";

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
    }, 700);
  };

  return (
    <div className="pt-20 bg-[#F7F8F4] min-h-screen">
      {/* 1. Hero Section (Compact py-10, Tech Typography & Clear Focus) */}
      <section className="relative py-10 md:py-10 lg:py-10 bg-[#123C32] text-white overflow-hidden">
        {/* Subtle background tech pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8A83E]/20 text-[#E8A83E] text-xs font-bold uppercase tracking-wider border border-[#E8A83E]/40 font-tech mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Corporate Communications & Engineering Desks</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-heading max-w-3xl mx-auto mb-3">
            Get in Touch with Proton Power Infra
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#E9F0E9]/85 leading-relaxed max-w-2xl mx-auto font-normal mb-5">
            Connect with our engineering teams in Indore, Delhi, Dewas, and Bhopal for turnkey solar EPC feasibility, in-house transformer specs, or on-site plant maintenance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 font-tech text-xs">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#E9F0E9]">
              <Clock className="w-3.5 h-3.5 text-[#E8A83E]" />
              <span>{COMPANY_DETAILS.workingHours}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#E9F0E9]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E8A83E]" />
              <span>24-Hour Engineering Response</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#E9F0E9]">
              <Globe className="w-3.5 h-3.5 text-[#E8A83E]" />
              <span>Pan-India On-Site Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Arrange First: All Direct Contacts */}
      <section className="py-10 md:py-10 lg:py-10 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Card 1: Telephone Lines */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#202724] font-heading mb-1">
                  Telephone Inquiries
                </h3>
                <p className="text-xs text-[#525D57] mb-3">
                  Direct support lines for tenders & site surveys:
                </p>

                <div className="space-y-1.5 font-tech">
                  <a
                    href={`tel:${COMPANY_DETAILS.phones[0].raw}`}
                    className="text-xs sm:text-sm font-bold text-[#123C32] hover:text-[#E8A83E] block transition-colors"
                  >
                    {COMPANY_DETAILS.phones[0].display}
                  </a>
                  <a
                    href={`tel:${COMPANY_DETAILS.phones[1].raw}`}
                    className="text-xs sm:text-sm font-bold text-[#123C32] hover:text-[#E8A83E] block transition-colors"
                  >
                    {COMPANY_DETAILS.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[#E2E8E2]">
                <a
                  href={`tel:${COMPANY_DETAILS.primaryPhoneRaw}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123C32] hover:text-[#E8A83E] font-tech group/link"
                >
                  <span>Click to Call Primary Line</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Card 2: Official Email Desk */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#202724] font-heading mb-1">
                  Official Email Desk
                </h3>
                <p className="text-xs text-[#525D57] mb-3">
                  Send drawings, RFP tenders, and specifications:
                </p>

                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="text-xs sm:text-sm font-bold text-[#123C32] hover:text-[#E8A83E] break-all font-tech transition-colors block"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </div>

              <div className="pt-3 mt-3 border-t border-[#E2E8E2] flex items-center justify-between text-[11px] text-[#525D57] font-tech">
                <span>Response in 24 business hours</span>
              </div>
            </div>

            {/* Card 3: WhatsApp Support */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center mb-3 shadow-sm">
                  <MessageSquare className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#202724] font-heading mb-1">
                  Instant WhatsApp Chat
                </h3>
                <p className="text-xs text-[#525D57] mb-3">
                  Fast response for quick inquiries and project shares:
                </p>

                <span className="text-xs sm:text-sm font-bold text-[#202724] font-tech block">
                  +91 97707 44687
                </span>
              </div>

              <div className="pt-3 mt-3 border-t border-[#E2E8E2]">
                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-sm font-tech"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 4: Working Hours & Availability */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F8F4] border border-[#E2E8E2] hover:border-[#123C32]/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#202724] font-heading mb-1">
                  Operating Hours
                </h3>
                <p className="text-xs text-[#525D57] mb-2">
                  Technical support & visitor timing:
                </p>

                <div className="space-y-1 text-xs text-[#202724] font-tech">
                  <div className="font-bold text-[#123C32]">
                    {COMPANY_DETAILS.workingHours}
                  </div>
                  <div className="text-[11px] text-[#525D57]">
                    Sunday: Closed (Breakdown on-call)
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-[#E2E8E2]">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#123C32] font-tech">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Central Support Active</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Then: Headquarters & Regional Offices Info */}
      <section className="py-10 md:py-10 lg:py-10 bg-[#F7F8F4] border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-1.5">
                <span>Pan-India Presence</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                Our Headquarters & Regional Operations Hubs
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#525D57] max-w-md leading-relaxed md:text-right">
              Strategic offices across India providing immediate engineering mobilization, regulatory liaisoning, and on-site support.
            </p>
          </div>

          {/* 4 Regional Hub Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {COMPANY_DETAILS.offices.map((off, idx) => {
              const isHQ = off.role.toLowerCase().includes("headquarters");
              return (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isHQ
                      ? "bg-white border-[#123C32]/40 shadow-md ring-1 ring-[#123C32]/20"
                      : "bg-white border-[#E2E8E2] hover:border-[#123C32]/30 shadow-sm"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-[#123C32]" />
                        <h3 className="font-black text-base text-[#123C32] font-heading">
                          {off.city}
                        </h3>
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded font-tech ${
                          isHQ
                            ? "bg-[#123C32] text-[#E8A83E]"
                            : "bg-[#E9F0E9] text-[#123C32]"
                        }`}
                      >
                        {off.role}
                      </span>
                    </div>

                    <p className="text-xs text-[#525D57] leading-relaxed mb-3">
                      {off.address}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E2E8E2] flex items-center justify-between text-[11px] font-tech text-[#123C32] font-semibold">
                    <span>
                      {isHQ
                        ? "Design & Executive Hub"
                        : off.city === "Dewas"
                        ? "Manufacturing & Testing"
                        : "Regional EPC Desk"}
                    </span>
                    <MapPin className="w-3.5 h-3.5 text-[#E8A83E]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Query Form & Interactive Map (Matched Sizing in Same Line) */}
      <section className="py-10 md:py-10 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech mb-1.5">
                <span>Direct Communications</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight leading-tight font-heading">
                Send Us a Message or Visit Our Indore Office
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#525D57] max-w-md leading-relaxed md:text-right">
              Submit your project specifications below for a rapid response or visit our Vijay Nagar corporate headquarters.
            </p>
          </div>

          {/* Form and Map Grid (Matching Height on Desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Column: Inquiry Form */}
            <div className="lg:col-span-7 bg-[#F7F8F4] rounded-2xl p-5 sm:p-6 lg:p-7 border border-[#E2E8E2] shadow-sm flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#202724] font-heading">
                    Send an Engineering Inquiry
                  </h3>
                  <p className="text-xs text-[#525D57] mt-1">
                    Have questions regarding rooftop solar, turnkey EPC, or transformer manufacturing? Fill out the details below.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-xl bg-[#E9F0E9] border border-[#123C32]/20 text-center space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#123C32] text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6 text-[#E8A83E]" />
                    </div>
                    <h4 className="text-lg font-bold text-[#202724] font-heading">
                      Message Transmitted Successfully
                    </h4>
                    <p className="text-xs text-[#525D57] max-w-sm mx-auto">
                      Thank you for contacting Proton Power Infra. A designated technical consultant will review your inquiry and connect via <strong>{formData.email}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          subject: "Solar Energy Project Consultation",
                          message: "",
                        });
                      }}
                      className="text-xs font-bold text-[#123C32] hover:underline cursor-pointer font-tech pt-2 block mx-auto"
                    >
                      Send Another Message →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-[#202724] mb-1 font-tech">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Vikram Sharma"
                          className={`w-full px-3 py-2 rounded-xl border text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 ${
                            errors.name
                              ? "border-red-400 focus:ring-red-200"
                              : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#202724] mb-1 font-tech">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="9770744687"
                          maxLength={10}
                          className={`w-full px-3 py-2 rounded-xl border text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 ${
                            errors.phone
                              ? "border-red-400 focus:ring-red-200"
                              : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-[#202724] mb-1 font-tech">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="vikram@company.com"
                          className={`w-full px-3 py-2 rounded-xl border text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 ${
                            errors.email
                              ? "border-red-400 focus:ring-red-200"
                              : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#202724] mb-1 font-tech">
                          Service Scope
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-xl border border-[#E2E8E2] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#123C32]/20 focus:border-[#123C32]"
                        >
                          <option value="Residential Solar Feasibility">Residential Solar Feasibility</option>
                          <option value="Commercial & Ground-Mount Solar">Commercial & Ground-Mount Solar</option>
                          <option value="Industrial Solar System">Industrial Solar System</option>
                          <option value="Power Transformer Manufacturing">Power Transformer Manufacturing</option>
                          <option value="Transformer Repair & Testing">Transformer Repair & Testing</option>
                          <option value="Turnkey Solar EPC & O&M">Turnkey Solar EPC & O&M</option>
                          <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#202724] mb-1 font-tech">
                        Project Details / Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your plant location, estimated capacity, or transformer requirement..."
                        className={`w-full px-3 py-2 rounded-xl border text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 ${
                          errors.message
                            ? "border-red-400 focus:ring-red-200"
                            : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
                        }`}
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs sm:text-sm font-bold bg-[#123C32] hover:bg-[#1A4D41] text-white shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-75 font-tech tracking-wide"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Inquiry...</span>
                      ) : (
                        <>
                          <span>Transmit Message to Engineering Desk</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Indore Location & Map Visual (Matched Height on Desktop) */}
            <div className="lg:col-span-5 bg-[#F7F8F4] rounded-2xl p-5 sm:p-6 lg:p-7 border border-[#E2E8E2] shadow-sm flex flex-col justify-between">
              <div>
                {/* Location Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center font-bold">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#202724] font-heading">
                        Indore Headquarters
                      </h4>
                      <p className="text-[11px] text-[#525D57]">
                        Scheme No. 78, Part II, Vijay Nagar
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#123C32] bg-[#E9F0E9] px-2 py-0.5 rounded font-tech">
                    Central Office
                  </span>
                </div>

                {/* Map Visual (Fills available space to match form height) */}
                <div className="rounded-xl overflow-hidden border border-[#E2E8E2] bg-white relative h-64 sm:h-72 lg:h-[260px] mb-3">
                  <iframe
                    title="Proton Power Infra Indore Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14717.393438865615!2d75.8822!3d22.7533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302a9eb786197%3A0xe54d4e3049b4c09!2sScheme%20No%2078%2C%20Vijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Visitor Access Note */}
              <div className="pt-3 border-t border-[#E2E8E2] text-[11px] text-[#525D57] leading-relaxed">
                <span className="font-bold text-[#123C32]">Visitor Access:</span> In-person engineering meetings and single-line diagram evaluations are welcome during business hours at our Vijay Nagar corporate headquarters.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
