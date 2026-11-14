import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Building } from "lucide-react";
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
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim().replace(/\s+/g, ""))) {
      errs.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email";
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
    }, 800);
  };

  return (
    <div className="pt-24 pb-20 bg-[#F7F8F4] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#123C32]/10 border border-[#123C32]/20 text-[#123C32] text-xs font-bold uppercase tracking-wider">
            <span>Corporate Communications & Offices</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202724] tracking-tight">
            Connect with Proton Power Infra
          </h1>

          <p className="text-sm sm:text-base text-[#525D57] leading-relaxed">
            Headquartered in Indore with offices in Delhi, Dewas, and Bhopal. Contact us for solar EPC turnarounds, power transformer manufacturing, or site audits.
          </p>
        </div>

        {/* 4 Quick Contact Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {/* Card 1: Headquarters */}
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8E2] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-base font-bold text-[#202724] mb-2">Central Headquarters</h3>
              <address className="not-italic text-xs text-[#525D57] leading-relaxed">
                {COMPANY_DETAILS.address.line1}, <br />
                {COMPANY_DETAILS.address.area}, {COMPANY_DETAILS.address.city}, <br />
                {COMPANY_DETAILS.address.state} {COMPANY_DETAILS.address.pincode}, India
              </address>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-100">
              <span className="text-[11px] font-semibold text-[#123C32] bg-[#E9F0E9] px-2.5 py-1 rounded">
                Scheme 78, Vijay Nagar
              </span>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8E2] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-base font-bold text-[#202724] mb-2">Telephone Inquiries</h3>
              <div className="space-y-1 text-xs text-[#525D57]">
                <div>
                  <a
                    href={`tel:${COMPANY_DETAILS.phones[0].raw}`}
                    className="font-bold text-[#123C32] hover:underline text-sm block"
                  >
                    {COMPANY_DETAILS.phones[0].display}
                  </a>
                  <span className="text-[11px] text-gray-500">Primary Support Line</span>
                </div>
                <div className="pt-2">
                  <a
                    href={`tel:${COMPANY_DETAILS.phones[1].raw}`}
                    className="font-bold text-[#123C32] hover:underline text-sm block"
                  >
                    {COMPANY_DETAILS.phones[1].display}
                  </a>
                  <span className="text-[11px] text-gray-500">Secondary Desk</span>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-100">
              <a
                href={`tel:${COMPANY_DETAILS.primaryPhoneRaw}`}
                className="text-xs font-bold text-[#123C32] hover:underline"
              >
                Click to Call Now →
              </a>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8E2] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-base font-bold text-[#202724] mb-2">Email Desk</h3>
              <p className="text-xs text-[#525D57] leading-relaxed mb-3">
                Send technical specifications, RFP tenders, or drawings directly to:
              </p>
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="text-xs font-bold text-[#123C32] hover:underline break-all"
              >
                {COMPANY_DETAILS.email}
              </a>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-100">
              <span className="text-[11px] text-gray-500">Response within 24 business hours</span>
            </div>
          </div>

          {/* Card 4: WhatsApp & Socials */}
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8E2] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center mb-4 shadow">
                <MessageSquare className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-base font-bold text-[#202724] mb-1">WhatsApp & Hours</h3>
              <div className="text-xs text-[#525D57] space-y-1 mb-3">
                <div className="flex items-center gap-1.5 text-xs text-[#202724]">
                  <Clock className="w-3.5 h-3.5 text-[#E8A83E]" />
                  <span className="font-medium">{COMPANY_DETAILS.workingHours}</span>
                </div>
                <div className="text-[11px] text-gray-500">Sunday: Closed</div>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-colors"
              >
                <span>Instant WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Pan-India Regional Offices Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8E2] shadow-sm mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center font-bold">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#202724]">Pan-India Regional Footprint</h3>
              <p className="text-xs text-[#525D57]">125+ MW installed across India with strategic regional presence</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMPANY_DETAILS.offices.map((off, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2]">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-sm text-[#123C32]">{off.city}</h4>
                  <span className="text-[10px] font-semibold text-[#E8A83E] bg-[#202724] px-1.5 py-0.5 rounded">
                    {off.role}
                  </span>
                </div>
                <p className="text-xs text-[#525D57] leading-relaxed">{off.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Grid: Message Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#E2E8E2] shadow-lg">
            <h3 className="text-2xl font-bold text-[#202724] mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-[#525D57] mb-6">
              Have questions regarding rooftop solar feasibility, industrial ground-mount EPC, or transformer manufacturing? Submit your query below.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#E9F0E9] border border-[#123C32]/20 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#123C32] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 text-[#E8A83E]" />
                </div>
                <h4 className="text-xl font-bold text-[#202724]">
                  Message Dispatched Successfully
                </h4>
                <p className="text-xs text-[#525D57] max-w-md mx-auto">
                  Thank you for reaching out to Proton Power Infra. A designated engineer will respond to your inquiry at <strong>{formData.email}</strong>.
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
                  className="text-xs font-bold text-[#123C32] underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#202724] mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Vikram Sharma"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.name ? "border-red-400" : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#202724] mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9770744687"
                      maxLength={10}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.phone ? "border-red-400" : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
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
                      placeholder="vikram@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.email ? "border-red-400" : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#202724] mb-1">
                      Subject / Inquiry Scope
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8E2] text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#123C32]/20 focus:border-[#123C32]"
                    >
                      <option value="Residential Solar Feasibility">Residential Solar Feasibility</option>
                      <option value="Commercial & Ground-Mount Project">Commercial & Ground-Mount Project</option>
                      <option value="Industrial Solar System">Industrial Solar System</option>
                      <option value="Power Transformer Manufacturing">Power Transformer Manufacturing</option>
                      <option value="Transformer Repair & Service">Transformer Repair & Service</option>
                      <option value="Turnkey Solar EPC & O&M">Turnkey Solar EPC & O&M</option>
                      <option value="General Inquiry">General Corporate Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202724] mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements, location, estimated capacity, or transformer specs..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 ${
                      errors.message ? "border-red-400" : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
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
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message to Proton Power Desk</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8E2] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center font-bold">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#202724]">
                    Indore Headquarters
                  </h4>
                  <p className="text-xs text-[#525D57]">
                    Scheme No. 78, Part II, Vijay Nagar
                  </p>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#E2E8E2] bg-[#F7F8F4] relative h-72">
                <iframe
                  title="Proton Power Infra Indore Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14717.393438865615!2d75.8822!3d22.7533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302a9eb786197%3A0xe54d4e3049b4c09!2sScheme%20No%2078%2C%20Vijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="text-xs text-[#525D57] space-y-1 pt-1">
                <p>
                  <strong>Visitor Access:</strong> In-person engineering meetings and single-line diagram evaluations are welcome during business hours at our Vijay Nagar corporate office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
