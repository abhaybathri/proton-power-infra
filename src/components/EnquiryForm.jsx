import { useState, useEffect } from "react";
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Send,
  RefreshCw,
  SunMedium,
  Zap,
  Factory,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  X,
} from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";

export const SOLUTION_CATEGORIES = [
  {
    id: "residential",
    label: "Residential Solar",
    shortLabel: "Residential",
    scale: "3kW – 25kW",
    icon: SunMedium,
  },
  {
    id: "commercial",
    label: "Commercial Solar",
    shortLabel: "Commercial",
    scale: "25kW – 500kW",
    icon: BuildingIcon,
  },
  {
    id: "industrial",
    label: "Industrial Solar",
    shortLabel: "Industrial",
    scale: "500kW – 50MW",
    icon: Factory,
  },
  {
    id: "transformers",
    label: "Power Transformers",
    shortLabel: "Transformers",
    scale: "Mfg & Testing",
    icon: Cpu,
  },
  {
    id: "turnkey-epc",
    label: "Turnkey Solar EPC",
    shortLabel: "Turnkey EPC",
    scale: "Utility & MW Scale",
    icon: Layers,
  },
];

function BuildingIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

const FACILITY_OPTIONS = {
  residential: [
    "Independent Villa / Bungalow",
    "Row House / Duplex",
    "Housing Society / Penthouse",
    "Farmhouse / Private Estate",
  ],
  commercial: [
    "Corporate Office Complex",
    "Hospital / Healthcare Facility",
    "Educational Campus / School",
    "Hotel, Resort & Hospitality",
    "Retail Mall & Supermarket Showroom",
  ],
  industrial: [
    "Manufacturing Factory / Shed",
    "Cold Storage & Food Processing",
    "Textile & Spinning Mill",
    "Heavy Engineering & Metal Fabrication",
    "Logistics Warehouse & Distribution Hub",
    "Chemical & Pharmaceutical Plant",
  ],
  transformers: [
    "Solar Park Substation (Inverter Duty)",
    "Industrial Captive Substation (11kV / 33kV)",
    "Step-Up / Step-Down Distribution Yard",
    "Utility / DISCOM Grid Substation",
    "Custom Industrial Power Application",
    "Transformer Repair & Overhaul Inquiry",
  ],
  "turnkey-epc": [
    "Utility Ground-Mounted Solar Park",
    "Multi-Megawatt Captive Solar Plant",
    "Floating / Canal-Top Solar Installation",
    "33kV / 132kV Substation & Grid Evacuation",
    "Open Access Group Captive Solar Project",
  ],
};

const CAPACITY_PLACEHOLDERS = {
  residential: "e.g. 5 kW or ₹4,500/mo electricity bill",
  commercial: "e.g. 50 kW or ₹1,20,000/mo electricity bill",
  industrial: "e.g. 500 kW / 1.5 MW contract demand",
  transformers: "e.g. 2.5 MVA, 33/0.8 kV Inverter Duty or 1000 kVA",
  "turnkey-epc": "e.g. 5 MW Ground-Mounted or 10 MW Utility Project",
};

export default function EnquiryForm({
  selectedCategory,
  setSelectedCategory,
  initialRequirement = "",
  initialIndustry = "",
  initialCapacity = "",
  initialBill = "",
}) {
  const [activeRequirement, setActiveRequirement] = useState(initialRequirement);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    projectLocation: "",
    facilityType: initialIndustry || "",
    capacityOrBill: initialCapacity || initialBill ? `${initialCapacity || ""} ${initialBill ? `(Bill: ₹${initialBill})` : ""}`.trim() : "",
    notes: initialRequirement ? `Specific Requirement: ${initialRequirement}` : "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  // Update initial requirement if changed
  useEffect(() => {
    if (initialRequirement) {
      setActiveRequirement(initialRequirement);
      setFormData((prev) => ({
        ...prev,
        notes: prev.notes ? prev.notes : `Specific Requirement: ${initialRequirement}`,
      }));
    }
  }, [initialRequirement]);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.trim().replace(/\s+/g, ""))) {
      newErrors.mobileNumber = "Enter a valid 10-digit Indian mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.projectLocation.trim()) {
      newErrors.projectLocation = "Project location / city is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = "PPI-" + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedId);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      mobileNumber: "",
      email: "",
      projectLocation: "",
      facilityType: "",
      capacityOrBill: "",
      notes: "",
    });
    setActiveRequirement("");
    setErrors({});
    setSubmitted(false);
  };

  const activeCategoryMeta = SOLUTION_CATEGORIES.find((c) => c.id === selectedCategory) || SOLUTION_CATEGORIES[0];

  if (submitted) {
    const activeLabel = activeCategoryMeta.label;
    const whatsappQuery = `Hello Proton Power Infra, I have submitted a ${activeLabel} consultation enquiry (Ref: ${referenceId}) for ${formData.projectLocation}. Please provide techno-commercial feasibility details.`;

    return (
      <div className="h-full bg-white rounded-2xl p-6 sm:p-8 border border-[#123C32]/20 shadow-xl flex flex-col justify-center text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-[#E9F0E9] text-[#123C32] flex items-center justify-center mx-auto ring-8 ring-[#123C32]/10">
          <CheckCircle2 className="w-10 h-10 text-[#123C32]" />
        </div>

        <div className="space-y-1.5">
          <span className="inline-block px-3 py-1 rounded-full bg-[#123C32]/10 text-[#123C32] text-xs font-bold uppercase tracking-wider font-tech">
            Enquiry Received & Registered
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#202724]">
            Thank You, {formData.fullName}!
          </h3>
          <p className="text-xs sm:text-sm text-[#525D57] max-w-md mx-auto leading-relaxed">
            Your technical request has been assigned to a senior project engineer at Proton Power Infra. We will review your site parameters and contact you within 24 business hours.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] max-w-md mx-auto w-full text-left text-xs space-y-2">
          <div className="flex justify-between items-center pb-1.5 border-b border-[#E2E8E2]">
            <span className="text-[#525D57] font-medium">Tracking Reference:</span>
            <span className="font-tech font-bold text-[#123C32] text-sm">{referenceId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#525D57]">Domain / Solution:</span>
            <span className="font-bold text-[#202724]">{activeLabel}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#525D57]">Project Location:</span>
            <span className="font-semibold text-[#202724]">{formData.projectLocation}</span>
          </div>
          {formData.facilityType && (
            <div className="flex justify-between items-center">
              <span className="text-[#525D57]">Facility Type:</span>
              <span className="font-medium text-[#202724]">{formData.facilityType}</span>
            </div>
          )}
          {activeRequirement && (
            <div className="flex justify-between items-center">
              <span className="text-[#525D57]">Specific Focus:</span>
              <span className="font-medium text-[#123C32]">{activeRequirement}</span>
            </div>
          )}
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/919770744687?text=${encodeURIComponent(whatsappQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-bold shadow hover:bg-[#20ba59] transition-colors"
          >
            <span>Notify Engineer Immediately on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={resetForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#E2E8E2] text-xs font-semibold text-[#525D57] hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Submit Another Requirement</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl p-6 sm:p-7 lg:p-8 border border-[#E2E8E2] shadow-xl space-y-4 sm:space-y-4.5"
    >
      {/* Form Header */}
      <div className="border-b border-[#E2E8E2] pb-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#202724]">
              {selectedCategory === "transformers"
                ? "Request Power Transformer Technical Quote"
                : selectedCategory === "turnkey-epc"
                ? "Request Turnkey Solar EPC Project Proposal"
                : "Request Solar Feasibility Study & Proposal"}
            </h3>
            <p className="text-xs text-[#525D57] mt-0.5">
              Complete the parameters below to receive an engineering feasibility review.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#123C32]/5 border border-[#123C32]/15 text-[#123C32] text-[11px] font-tech font-bold">
            <Sparkles className="w-3 h-3 text-[#E8A83E]" />
            <span>Fast Turnaround</span>
          </span>
        </div>
      </div>

      {/* Solution Category Selector */}
      <div>
        <label className="block text-[11px] font-tech font-bold uppercase tracking-wider text-[#525D57] mb-2">
          Select Solution Category <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5">
          {SOLUTION_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                type="button"
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex flex-col items-center justify-center text-center p-2 rounded-lg border text-xs transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#123C32] text-white border-[#123C32] shadow-sm ring-1 ring-[#123C32]"
                    : "bg-[#F7F8F4] text-[#525D57] border-[#E2E8E2] hover:border-[#123C32]/40 hover:bg-white"
                }`}
              >
                <Icon className={`w-4 h-4 mb-1 ${isSelected ? "text-[#E8A83E]" : "text-[#123C32]"}`} />
                <span className="font-bold text-[11px] leading-tight">{cat.shortLabel}</span>
                <span className={`text-[9px] font-tech mt-0.5 ${isSelected ? "text-white/70" : "text-[#525D57]/70"}`}>
                  {cat.scale}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Requirement Context Pill (if passed from other pages) */}
      {activeRequirement && (
        <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#123C32]/5 border border-[#123C32]/20 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-tech text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#123C32] text-white">
              Target Scope
            </span>
            <span className="font-semibold text-[#123C32]">{activeRequirement}</span>
          </div>
          <button
            type="button"
            onClick={() => setActiveRequirement("")}
            className="text-[#525D57] hover:text-red-600 transition-colors p-0.5"
            title="Clear specific scope"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Row 1: Full Name & Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-semibold text-[#202724] mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Rajesh Singhal"
            className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm text-[#202724] bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.fullName
                ? "border-red-400 focus:ring-red-200"
                : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
            }`}
          />
          {errors.fullName && <p className="text-red-600 text-[11px] mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#202724] mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-xs text-[#525D57] font-tech font-bold">
              +91
            </span>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="98765 43210"
              maxLength={10}
              className={`w-full pl-10 pr-3 py-2 rounded-lg border text-xs sm:text-sm text-[#202724] bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.mobileNumber
                  ? "border-red-400 focus:ring-red-200"
                  : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
              }`}
            />
          </div>
          {errors.mobileNumber && <p className="text-red-600 text-[11px] mt-1">{errors.mobileNumber}</p>}
        </div>
      </div>

      {/* Row 2: Email & Project Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-semibold text-[#202724] mb-1">
            Official Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="rajesh@company.com"
            className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm text-[#202724] bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? "border-red-400 focus:ring-red-200"
                : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
            }`}
          />
          {errors.email && <p className="text-red-600 text-[11px] mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#202724] mb-1">
            Project Location / City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="projectLocation"
            value={formData.projectLocation}
            onChange={handleChange}
            placeholder="e.g. Indore, Madhya Pradesh"
            className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm text-[#202724] bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.projectLocation
                ? "border-red-400 focus:ring-red-200"
                : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
            }`}
          />
          {errors.projectLocation && <p className="text-red-600 text-[11px] mt-1">{errors.projectLocation}</p>}
        </div>
      </div>

      {/* Row 3: Facility Type & Capacity / Bill */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-semibold text-[#202724] mb-1">
            Facility / Project Type
          </label>
          <select
            name="facilityType"
            value={formData.facilityType}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg border border-[#E2E8E2] text-xs sm:text-sm text-[#202724] bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#123C32]/20 focus:border-[#123C32]"
          >
            <option value="">Select structure / application...</option>
            {(FACILITY_OPTIONS[selectedCategory] || FACILITY_OPTIONS.residential).map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#202724] mb-1">
            {selectedCategory === "transformers"
              ? "Desired Rating / MVA (Optional)"
              : selectedCategory === "turnkey-epc"
              ? "Target MW Scale / Land Area (Optional)"
              : "Estimated Capacity / Bill (Optional)"}
          </label>
          <input
            type="text"
            name="capacityOrBill"
            value={formData.capacityOrBill}
            onChange={handleChange}
            placeholder={CAPACITY_PLACEHOLDERS[selectedCategory] || "e.g. 50 kW or ₹1 Lakh/month"}
            className="w-full px-3 py-2 rounded-lg border border-[#E2E8E2] text-xs sm:text-sm text-[#202724] bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#123C32]/20 focus:border-[#123C32]"
          />
        </div>
      </div>

      {/* Row 4: Custom Notes / Technical Specifications */}
      <div>
        <label className="block text-xs font-semibold text-[#202724] mb-1">
          Technical Specifications / Project Notes (Optional)
        </label>
        <textarea
          rows={2}
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder={
            selectedCategory === "transformers"
              ? "Share voltage ratios (e.g. 33kV/0.8kV), vector group, copper winding requirements, or timeline..."
              : selectedCategory === "turnkey-epc"
              ? "Share project model (Open Access / Captive), nearest substation distance, or terrain details..."
              : "Share roof type (RCC/Tin shed), shadow-free area, or specific energy objectives..."
          }
          className="w-full px-3 py-2 rounded-lg border border-[#E2E8E2] text-xs sm:text-sm text-[#202724] bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#123C32]/20 focus:border-[#123C32]"
        ></textarea>
      </div>

      {/* Submit Action */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-xs sm:text-sm font-bold bg-[#123C32] hover:bg-[#1A4D41] text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-70 font-tech"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Validating & Submitting Enquiry...</span>
          </>
        ) : (
          <>
            <span>
              {selectedCategory === "transformers"
                ? "Submit Transformer Engineering Enquiry"
                : selectedCategory === "turnkey-epc"
                ? "Submit Turnkey EPC Feasibility Request"
                : "Submit Feasibility & Consultation Request"}
            </span>
            <Send className="w-4 h-4 text-[#E8A83E]" />
          </>
        )}
      </button>

      {/* Bottom Reassurance Footer */}
      <div className="pt-1 flex items-center justify-center gap-2 text-[11px] text-[#525D57]">
        <ShieldCheck className="w-3.5 h-3.5 text-[#123C32]" />
        <span>Direct consultation with Proton Power Infra engineers. 100% confidential.</span>
      </div>
    </form>
  );
}
