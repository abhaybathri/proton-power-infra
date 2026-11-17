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
  Activity,
} from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";
import SmartImage from "../components/SmartImage";
import ScrollReveal from "../components/ScrollReveal";

// Authentic HQ Photo
import mainTopImg from "../assets/company/main-comany-name-image-or-top-image.jpg";

// =================================================================
// Subcomponent: ContactChannelCard with Cursor Spotlight Glow
// =================================================================
function ContactChannelCard({ icon: Icon, title, description, content, action, actionUrl, isExternal = false, isCall = false, activeTag }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl p-[1.5px] transition-all duration-500 ease-out select-none group flex flex-col justify-between"
    >
      {/* Dynamic Cursor-Responsive Border Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0.35,
          background: isHovered
            ? `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.95), rgba(232, 168, 62, 0.35) 45%, rgba(18, 60, 50, 0.2) 75%, transparent 100%)`
            : `linear-gradient(135deg, rgba(226, 232, 226, 0.9), rgba(247, 248, 244, 0.6))`,
        }}
      />

      {/* Card Inner Surface */}
      <div className="relative rounded-[14.5px] bg-white p-5 sm:p-6 flex flex-col justify-between h-full overflow-hidden transition-all duration-300 shadow-xs group-hover:shadow-xl group-hover:shadow-black/5">
        {/* Soft Interior Ambient Glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[14.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.08), transparent 75%)`,
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="w-11 h-11 rounded-xl bg-[#123C32] text-[#E8A83E] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-xs">
              <Icon className="w-5 h-5 stroke-[2.2]" />
            </div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E9F0E9] text-[#123C32] border border-[#123C32]/10">
              {activeTag}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[#202724] font-heading mb-1 group-hover:text-[#123C32] transition-colors">
            {title}
          </h3>
          <p className="text-xs text-[#525D57] mb-3 leading-relaxed">
            {description}
          </p>

          <div className="text-xs sm:text-sm font-bold text-[#123C32] font-tech">
            {content}
          </div>
        </div>

        <div className="relative z-10 pt-3 mt-4 border-t border-[#E2E8E2]">
          {actionUrl ? (
            <a
              href={actionUrl}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123C32] hover:text-[#E8A83E] font-tech group/link transition-colors"
            >
              <span>{action}</span>
              {isExternal ? (
                <ExternalLink className="w-3.5 h-3.5" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              )}
            </a>
          ) : (
            <span className="text-xs font-semibold text-[#525D57] font-tech">
              {action}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// =================================================================
// Subcomponent: OfficeHubCard with Cursor Glow
// =================================================================
function OfficeHubCard({ office, idx }) {
  const isHQ = office.role.toLowerCase().includes("headquarters");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl p-[1.5px] transition-all duration-500 ease-out select-none group flex flex-col justify-between"
    >
      {/* Dynamic Cursor-Responsive Border Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : isHQ ? 0.6 : 0.25,
          background: isHovered
            ? `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 168, 62, 0.95), rgba(232, 168, 62, 0.35) 45%, rgba(18, 60, 50, 0.2) 75%, transparent 100%)`
            : isHQ
            ? `linear-gradient(135deg, rgba(232, 168, 62, 0.6), rgba(18, 60, 50, 0.3), rgba(232, 168, 62, 0.5))`
            : `linear-gradient(135deg, rgba(226, 232, 226, 0.8), rgba(247, 248, 244, 0.5))`,
        }}
      />

      <div className="relative rounded-[14.5px] bg-white p-5 sm:p-6 flex flex-col justify-between h-full overflow-hidden transition-all duration-300 shadow-xs group-hover:shadow-lg">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center font-bold">
                <Building className="w-4 h-4" />
              </div>
              <h3 className="font-black text-base text-[#123C32] font-heading">
                {office.city}
              </h3>
            </div>
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded font-tech ${
                isHQ
                  ? "bg-[#123C32] text-[#E8A83E]"
                  : "bg-[#E9F0E9] text-[#123C32]"
              }`}
            >
              {office.role}
            </span>
          </div>

          <p className="text-xs text-[#525D57] leading-relaxed mb-4">
            {office.address}
          </p>
        </div>

        <div className="pt-3 border-t border-[#E2E8E2] flex items-center justify-between text-[11px] font-tech text-[#123C32] font-semibold">
          <span>
            {isHQ
              ? "Executive Headquarters & Design"
              : office.city === "Dewas"
              ? "Manufacturing & CPRI Testing"
              : "Regional Turnkey EPC Desk"}
          </span>
          <MapPin className="w-3.5 h-3.5 text-[#E8A83E]" />
        </div>
      </div>
    </div>
  );
}

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
    <div className="pt-20 bg-[#F7F8F4] min-h-screen text-[#252A27]">
      {/* =========================================================
          1. HERO SECTION (Golden Standard: Matching 400px Heights, 
             Centered Content, Prominent Ambient Glow)
         ========================================================= */}
      <section className="relative overflow-hidden py-6 sm:py-7 lg:py-8 bg-[#123C32] text-white">
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#E8A83E_1px,transparent_1px)] [background-size:24px_24px]"></div>

        {/* Ambient lighting glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E8A83E]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Left Content Column - Equal 50% Width, Matching 400px Height, All Centered */}
            <div className="flex flex-col h-full w-full justify-center">
              <ScrollReveal delay={0} className="h-full flex flex-col justify-center items-center text-center space-y-4 sm:space-y-4.5 py-1 min-h-[360px] sm:min-h-[380px] lg:h-[400px] lg:min-h-[400px]">
                {/* Heading - Centered */}
                <h1 className="text-3xl sm:text-4xl lg:text-[34px] xl:text-[38px] font-black tracking-tight text-white leading-[1.14] font-heading text-center mx-auto max-w-lg">
                  Connect Directly with Our <br />
                  <span className="text-[#E8A83E] relative inline-block">
                    Engineering Desks.
                    <span className="absolute -bottom-1 left-0 w-full h-2 bg-[#E8A83E]/25 -z-10 rounded"></span>
                  </span>
                </h1>

                {/* Paragraph Description - Centered */}
                <p className="text-xs sm:text-sm text-[#E9F0E9]/85 leading-relaxed font-normal text-center max-w-lg mx-auto">
                  Headquartered in Vijay Nagar, Indore with regional operations across Delhi, Dewas, and Bhopal. Reach out directly for turnkey solar feasibility, in-house transformer specifications, or fast-track plant deployment.
                </p>

                {/* CTA Button with Ambient Glow - Centered */}
                <div className="pt-0.5 flex items-center justify-center w-full">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#E8A83E] via-amber-300 to-[#E8A83E] rounded-2xl blur-md opacity-30 group-hover:opacity-75 transition duration-500 group-hover:scale-105"></div>
                    <a
                      href="#inquiry-form"
                      className="relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-sm font-bold bg-[#E8A83E] hover:bg-[#D4952D] text-[#202724] shadow-lg shadow-black/25 transition-all duration-300 font-tech tracking-wide cursor-pointer"
                    >
                      <span>Send Direct Project Inquiry</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                    </a>
                  </div>
                </div>

                {/* Metrics Bar - Centered */}
                <div className="pt-4 border-t border-white/15 grid grid-cols-3 gap-3 font-tech w-full max-w-lg mx-auto text-center">
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">&lt; 24h</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      Turnaround SLA
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">Indore HQ</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      &amp; Dewas Plant
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#E8A83E]">Pan-India</div>
                    <div className="text-[10px] font-semibold text-[#E9F0E9]/80 uppercase tracking-wider">
                      Engineering Reach
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Visual Capsule - Equal 50% Width, Matching 400px Height */}
            <div className="flex flex-col h-full w-full justify-center">
              <ScrollReveal delay={140} className="h-full flex flex-col justify-center">
                <div className="relative w-full h-full min-h-[360px] sm:min-h-[380px] lg:h-[400px] lg:min-h-[400px] max-h-[420px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/90 bg-neutral-900 group select-none flex flex-col justify-between">
                  {/* Photo Frame (Full Height Edge-to-Edge) */}
                  <div className="relative w-full h-full min-h-[360px] sm:min-h-[380px] lg:h-[400px] lg:min-h-[400px] max-h-[420px] overflow-hidden bg-black/40">
                    <SmartImage
                      src={mainTopImg}
                      alt="Proton Power Infra Corporate Headquarters in Indore"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      containerClassName="w-full h-full absolute inset-0"
                      priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 pointer-events-none"></div>
                  </div>

                  {/* Top Telemetry Capsule */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#123C32] shadow-sm font-tech">
                      <Activity className="w-3.5 h-3.5 text-[#E8A83E] animate-pulse" />
                      <span>Indore HQ Desks • Active</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#202724]/85 backdrop-blur-md text-[9px] font-mono text-[#E9F0E9] border border-white/10">
                      <span>22.75° N, 75.89° E</span>
                    </div>
                  </div>

                  {/* Bottom Spec Capsule */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/80 z-20">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#E8A83E] animate-ping"></span>
                        <span className="text-xs font-bold text-[#123C32] uppercase tracking-wider font-tech">
                          Corporate Headquarters &amp; Executive Desks
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#525D57] leading-relaxed">
                      Scheme No. 78, Part II, Vijay Nagar, Indore, M.P. 452001. Direct telephone lines and digital RFP submissions monitored continuously.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. DIRECT COMMUNICATIONS CHANNELS (With Cursor Spotlight Glow)
         ========================================================= */}
      <section className="py-12 md:py-14 bg-white border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0} className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight font-heading leading-tight mb-2">
              Direct Engineering &amp; Commercial Channels
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed max-w-2xl mx-auto">
              Choose the fastest communication channel for your organization. Our team responds promptly during active business hours.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <ContactChannelCard
              icon={Phone}
              title="Telephone Inquiries"
              description="Direct support lines for tenders, site surveys & quotations:"
              content={`${COMPANY_DETAILS.phones[0].display} / ${COMPANY_DETAILS.phones[1].display}`}
              action="Call Primary Desk"
              actionUrl={`tel:${COMPANY_DETAILS.primaryPhoneRaw}`}
              isCall={true}
              activeTag="2 Lines Active"
            />

            <ContactChannelCard
              icon={Mail}
              title="Official Email Desk"
              description="Send architectural drawings, RFP tenders, and Single-Line Diagrams:"
              content={COMPANY_DETAILS.email}
              action="Send Email"
              actionUrl={`mailto:${COMPANY_DETAILS.email}`}
              activeTag="24h Turnaround"
            />

            <ContactChannelCard
              icon={MessageSquare}
              title="Instant WhatsApp Desk"
              description="Fastest channel for site photos, live sharing, and feasibility chats:"
              content="+91 97707 44687"
              action="Open WhatsApp Chat"
              actionUrl={COMPANY_DETAILS.whatsappUrl}
              isExternal={true}
              activeTag="Instant Messaging"
            />

            <ContactChannelCard
              icon={Clock}
              title="Operating Hours"
              description="Technical consultation, plant testing, and visitor timings:"
              content={`${COMPANY_DETAILS.workingHours} (Sun Closed)`}
              action="Support Desk Active"
              actionUrl={null}
              activeTag="Mon – Sat"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          3. HEADQUARTERS & REGIONAL OPERATIONS HUBS
         ========================================================= */}
      <section className="py-12 md:py-14 bg-[#F7F8F4] border-b border-[#E2E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0} className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-[#202724] tracking-tight font-heading leading-tight mb-2">
              Our Headquarters &amp; Regional Operations Hubs
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed max-w-2xl mx-auto">
              Strategic offices across Central India and NCR providing rapid engineering mobilization, regulatory liaisoning, and on-site support.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {COMPANY_DETAILS.offices.map((off, idx) => (
              <OfficeHubCard key={idx} office={off} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. INQUIRY FORM & INTERACTIVE HQ MAP (Matched Desktop Heights)
         ========================================================= */}
      <section id="inquiry-form" className="py-12 md:py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0} className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#202724] tracking-tight font-heading leading-tight mb-2">
              Send Us a Message or Visit Our Indore Office
            </h2>
            <p className="text-xs sm:text-sm text-[#525D57] leading-relaxed max-w-2xl mx-auto">
              Submit your project specifications below for rapid engineering evaluation, or visit our Vijay Nagar corporate headquarters.
            </p>
          </ScrollReveal>

          {/* Form and Map Grid (Equal Height on Desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Column: Inquiry Form (lg:col-span-7) */}
            <div className="lg:col-span-7 bg-[#F7F8F4] rounded-2xl p-6 sm:p-7 border border-[#E2E8E2] shadow-sm flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#123C32]/10 text-[#123C32] text-[11px] font-bold font-tech uppercase mb-1">
                    <Sparkles className="w-3 h-3 text-[#E8A83E]" />
                    <span>Digital Submission Desk</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#202724] font-heading">
                    Send an Engineering Inquiry
                  </h3>
                  <p className="text-xs text-[#525D57] mt-1">
                    Have questions regarding rooftop solar, turnkey EPC, or transformer manufacturing? Fill out the details below.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-xl bg-[#E9F0E9] border border-[#123C32]/20 text-center space-y-3 animate-fade-in">
                    <div className="w-12 h-12 rounded-full bg-[#123C32] text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-7 h-7 text-[#E8A83E]" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#202724] font-heading">
                      Message Transmitted Successfully
                    </h4>
                    <p className="text-xs text-[#525D57] max-w-md mx-auto leading-relaxed">
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
                      className="text-xs font-bold text-[#123C32] hover:text-[#E8A83E] transition-colors cursor-pointer font-tech pt-2 block mx-auto"
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
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
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
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
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
                          className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
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
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E8E2] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#123C32]/20 focus:border-[#123C32] transition-all"
                        >
                          <option value="Residential Solar Feasibility">Residential Solar Feasibility</option>
                          <option value="Commercial & Ground-Mount Solar">Commercial &amp; Ground-Mount Solar</option>
                          <option value="Industrial Solar System">Industrial Solar System</option>
                          <option value="Power Transformer Manufacturing">Power Transformer Manufacturing</option>
                          <option value="Transformer Repair & Testing">Transformer Repair &amp; Testing</option>
                          <option value="Turnkey Solar EPC & O&M">Turnkey Solar EPC &amp; O&amp;M</option>
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
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 transition-all ${
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
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold bg-[#123C32] hover:bg-[#1A4D41] text-white shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-75 font-tech tracking-wide"
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

            {/* Right Column: Indore Location & Map Visual (lg:col-span-5) */}
            <div className="lg:col-span-5 bg-[#F7F8F4] rounded-2xl p-6 sm:p-7 border border-[#E2E8E2] shadow-sm flex flex-col justify-between">
              <div>
                {/* Location Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#123C32] text-[#E8A83E] flex items-center justify-center font-bold">
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

                {/* Map Visual */}
                <div className="rounded-xl overflow-hidden border border-[#E2E8E2] bg-white relative h-64 sm:h-72 lg:h-[260px] mb-3 shadow-xs">
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
